import User from "../models/user.model.js"


export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId)

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        if (user.role !== "admin") {
            return res.status(403).json({ message: "Asmin acsess only" })
        }

        next()
    } catch (error) {
        return res.status(500).json({ message: `isAdmin error ${error}` })
    }
}