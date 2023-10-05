export const paymentsHandler = async () => {
	try {
		const res = await fetch(
			"https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: "test",
			}
		);

		return res;
	} catch (error) {
		console.log("error in paymentsHandler:", error);
	}
};
