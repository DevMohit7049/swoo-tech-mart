const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");

        res.json({
            total: users.length,
            users,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.toggleUserRole = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.role = user.role === "admin" ? "user" : "admin";

        await user.save();

        res.json({
            message: "Role updated",
            user,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.toggleBlockUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        user.blocked = !user.blocked;

        await user.save();

        res.json({
            message: "User status updated",
            user,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {

        if (req.user.id === req.params.id) {
            return res.status(400).json({
                message: "You cannot delete yourself",
            });
        }

        await User.findByIdAndDelete(req.params.id);

        res.json({ message: "User deleted" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};