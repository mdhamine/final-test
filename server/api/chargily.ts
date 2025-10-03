import { ChargilyClient } from '@chargily/chargily-pay';
import { defineEventHandler, readBody } from 'h3';

const client = new ChargilyClient({
	api_key: process.env.CHARGILY_SECRET_KEY,
	mode: 'live',
});

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { locale, itemId, price } = body;

	try {
		const checkout = await client.createCheckout({
			success_url: "https://www.fluently.academy/success",
			amount: price,
			currency: 'dzd'
		});

		const linkpay = checkout.checkout_url;

		return { linkpay }; 
	} catch (error) {
		return { error: error.message };
	}
});
