import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Hardcoded user credentials
const USERNAME = "user";
const PASSWORD = "password123";

app.post('/login', (req: Request, res: Response) => {
    const { name, password, age } = req.body;

    // Check if name and password match hardcoded values
    if (name === USERNAME && password === PASSWORD) {
        res.json({ success: true, name, age });
    } else {
        res.json({ success: false });
    }
});

app.get('/homepage', (req: Request, res: Response) => {
    const { name, age } = req.query;
    res.send(`<h1>Welcome, ${name}!</h1><p>Your age is ${age}.</p>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
