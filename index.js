const express = require("express");
const app = express();

const PORT = 3000;

app.post("/register", (req, rest) => {
	const { email, password } = req.body;
	rest.status(201).json({
		email,
		message: "register berhasil",
	});
});

app.listen(PORT, () => {
	console.log(`server liston on PORT: ${PORT}`);
});
