//const MP_ACCESS_TOKEN = "TEST-7507661374069901-021317-f56dc83f734c864d08c1c2e32a987579-403862312"
const preferences = await fetch(
	"https://api.mercadopago.com/checkout/preferences",
	{
  		method: "POST",
		headers: {
			Authorization: `Bearer ${MP_ACCESS_TOKEN}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			items: [
				{
					id: "1234",
					title: "Smartphone",
					currency_id: "UYU",
					picture_url: "pics.com/sf.jpg",
					description: "Dispositivo móvil",
					category_id: "art",
					quantity: 1,
					unit_price: 30000
				}
			],
			payer: {
				name: "Ricardo",
				surname: "Alvarez",
				email: "ralvarez@email.com",
				phone: {
					"area_code": "11",
					"number": "22223333"
				},
				identification: {
					"type": "DNI",
					"number": "12345678"
				},
				address: {
					"street_name": "Calle",
					"street_number": 123,
					"zip_code": "1111"
				}
			},
			back_urls: {
				success: "https://0x-g-devhayekian.vercel.app/success",
				failure: "https://0x-g-devhayekian.vercel.app/failure",
				pending: "https://0x-g-devhayekian.vercel.app/pending"
			},
			auto_return: "approved",
			payment_methods: {
				excluded_payment_methods: [
					{
						id: "amex"
					}
				],
				excluded_payment_types: [
					{
						id: "atm"
					}
				],
				installments: 1
			},
			notification_url: "https://0x-g-devhayekian.vercel.app/api/webhook",
			statement_descriptor: "Tienda eCommerce",
			external_reference: "mlplesoj9b"
		})
	})
const order = await preferences.json()