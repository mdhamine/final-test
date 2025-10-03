import { defineEventHandler, readBody } from 'h3';
import { serverSupabaseServiceRole } from '#supabase/server';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const supabase = await serverSupabaseServiceRole(event);

	try {
		console.log('Webhook Payload:', body);

		if (body?.data?.status === 'paid') {
			const customerId = body.data.id;
			console.log('Received customer_id:', customerId);

			const { data: sessionData, error: sessionError } = await supabase
				.from('checkout_sessions')
				.select('user_id, course_id')
				.eq('customer_id', customerId)
				.maybeSingle();

			if (sessionError || !sessionData) {
				console.error(
					'Failed to find session or user for customer_id:',
					customerId
				);
				console.error(sessionError);
				throw new Error('Failed to find session or user.');
			}

			const userId = sessionData.user_id;
			const newCourse = sessionData.course_id;

			let { data: userCourses, error: fetchError } = await supabase
				.from('courses')
				.select('courses')
				.eq('userid', userId)
				.maybeSingle();

			if (fetchError) {
				console.error(fetchError);
				throw new Error('Failed to fetch user courses.');
			}

			if (!userCourses) {
				console.log('No existing courses for user. Creating new record.');
				const { error: insertError } = await supabase
					.from('courses')
					.insert({ userid: userId, courses: [newCourse] })
					.single();

				if (insertError) {
					console.error('Insert Error:', insertError);
					throw new Error('Failed to create user course record.');
				}
			} else {
				const updatedCourses = [...(userCourses?.courses || []), newCourse];

				const { error: updateError } = await supabase
					.from('courses')
					.update({ courses: updatedCourses })
					.eq('userid', userId);

				if (updateError) {
					console.error(updateError);
					throw new Error('Failed to update user courses');
				}
			}

			const { error: deleteError } = await supabase
				.from('checkout_sessions')
				.delete()
				.eq('customer_id', customerId);

			if (deleteError) {
				console.error(deleteError);
				throw new Error('Failed to delete checkout session.');
			}

			return {
				message: 'Course successfully added after payment and session deleted.',
			};
		} else {
			return { message: 'Payment not successful, course not added.' };
		}
	} catch (error) {
		console.error('Webhook Error:', error);
		return { error: error.message };
	}
});