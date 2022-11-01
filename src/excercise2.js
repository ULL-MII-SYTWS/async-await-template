for (let i = 0; i < 2; i++) {
	setTimeout(() => {
		console.log("Timeout ", i);
		Promise.resolve().then(() => {
			console.log("Promise 1 ", i);
		}).then(() => {
			console.log("Promise 2 ", i);
		});
	})
}