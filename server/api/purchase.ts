import { ChargilyClient } from '@chargily/chargily-pay';
import { defineEventHandler, readBody } from 'h3';
import { serverSupabaseClient } from '#supabase/server';
const runtimeConfig = useRuntimeConfig();

const client = new ChargilyClient({
	api_key: runtimeConfig.CHARGILY_SECRET_KEY,
	mode: 'live',
});

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { locale, userId, itemId, course } = body;
	const supabase = await serverSupabaseClient(event);

	try {
		const checkout = await client.createCheckout({
			items: [
				{
					price: itemId,
					quantity: 1,
				},
			],
			locale: locale === 'en' || locale === 'fr' ? 'en' : 'ar',
			success_url: 'https://www.fluently.academy/courses',
			failure_url: 'https://www.fluently.academy/failure',
			payment_method: 'edahabia',
		});

		const customerId = checkout.id;

		console.log(
			'Checkout created, customerId:',
			customerId,
			'userId:',
			userId,
			'itemId:',
			itemId,
			'courseId:',
			course
		);

		const { error: insertError } = await supabase
			.from('checkout_sessions')
			.insert([
				{ user_id: userId, customer_id: customerId, course_id: course },
			]);

		if (insertError) {
			console.error('Failed to insert into checkout_sessions:', insertError);
			throw new Error('Database insert failed');
		}

		return {
			message: 'Checkout created successfully.',
			checkoutUrl: insertError ? '/' : checkout.checkout_url,
		};
	} catch (error) {
		console.error('Checkout creation error:', error);
		return { error: error.message };
	}
});
