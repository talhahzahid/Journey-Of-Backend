

import users from "../models/user.models.js";

const register = async (req, res) => {
    const { fullname, email, password } = req.body;
    if (!email) return res.status(400).json({ message: 'email is required' })
    if (!password) return res.status(400).json({ message: 'password is required' })
    try {
        const user = await users.findOne({ email })
        if (user) return res.status(400).json({ message: "user already exits" })
        await users.create({ fullname, email, password })
        res.json({ message: "user register successfully ", })
    } catch (error) {
        res.json({ message: "error occured " })

    }
}

export { register }