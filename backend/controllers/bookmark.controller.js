import User from "../models/user.model.js"

export const toggleBookmark = async (req, res) => {
    try {
        const userId = req.userId

        const { noteId } = req.params

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isBookmarked = user.bookmarks.some(
            bookmark => bookmark.toString() === noteId
        )

        if (isBookmarked) {
            user.bookmarks = user.bookmarks.filter(
                bookmarks => bookmarks.toString() !== noteId
            )
            await user.save();

            return res.status(200).json({
                message: "Bookmark removed"
            })
        }

        user.bookmarks.push(noteId)

        await user.save()

        return res.status(200).json({
            message: "Bookmark added"
        });




    } catch (error) {
        return res.status(500).json({ message: `Toggle bookmark error ${error}` })
    }
}


export const getBookmarks = async (req, res) => {
    try {
        const userId = req.userId

        const user = await User.findById(userId).populate("bookmarks")

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        return res.status(200).json(user.bookmarks)

    } catch (error) {
        return res.status(500).json({ message: `get bookmarks error ${error}` })
    }
}