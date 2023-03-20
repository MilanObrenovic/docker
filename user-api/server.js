const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/api/v1/users", (req, res) => {
	res.json([
		{
			name: "Alpha",
			age: "22",
			gender: "FEMALE",
		},
		{
			name: "Bravo",
			age: "18",
			gender: "MALE",
		},
	]);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:3000`);
});
