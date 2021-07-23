const express = require("express");
const app = express();

const PORT = 3000;

app.post("/login", (req, res) => {
	const { email, password } = req.body;

	res.status(200).json({token: "rahasia"})
});

app.listen(PORT, () => {
	console.log(`server liston on PORT: ${PORT}`);
});
