const jwt = require('jsonwebtoken');
const User = require('../models/User');

const isAdmin = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.user_id });

        if (!user || user.role !== 'admin') {
            throw new Error();
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(401).send( { message: 'Please authenticate as an administrator' })
    }
};

module.exports = isAdmin;