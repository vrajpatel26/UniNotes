import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({ message: "token is not found" })
        }
        // console.log("TOKEN:", token)

        // console.log("SECRET", process.env.JWT_SECRET)

        const verifyToken = await jwt.verify(token, process.env.JWT_SECRET)

        req.userId = verifyToken.userId

        next()
    } catch (error) {
        return res.status(500).json({ message: `isAuth error ${error}` })
    }
}

export default isAuth