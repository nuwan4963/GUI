import express from 'express'
import {connectToDatabase} from '../lib/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()



router.post('/add', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const db = await connectToDatabase();

        const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(409).json({ message: "User already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        
        await db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", 
            [username, email, hashPassword]);

        return res.status(201).json({ message: "User added successfully" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});



router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const [rows] = await db.query('SELECT username, email FROM users');
        console.log(rows);
        return res.status(200).json(rows);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});




export default router;