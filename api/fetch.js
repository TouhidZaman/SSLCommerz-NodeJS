import fetch from "node-fetch";

const httpCall = async ({ url, method = "POST", data = {} }) => {
	try {
		const response = await fetch(url, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, cors, *same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			redirect: "follow", // manual, *follow, error
			referrer: "no-referrer", // no-referrer, *client
			...(method === "POST" ||
			method === "PUT" ||
			method === "PATCH" ||
			method === "UPDATE"
				? {
						body: JSON.stringify(data),
						headers: { "Content-Type": "application/json" },
				  }
				: {}),
			// body data type must match "Content-Type" header
		});

		return await response.json();
	} catch (err) {
		return err;
	}
};

export default httpCall;
