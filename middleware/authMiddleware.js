console.log("THIS IS AUTHmIDDLEWARE");

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.header("Authorization");

console.log("HEADER:", req.header("Authorization"));    // to check what hearder is receving in postman

    if (!authHeader) {
        return res.status(401).json({ message: "No token, access denied" });
    }

    try {
        const token = authHeader.split(" ")[1];   // splits string takes second one  eg bearer , hbchueuhdnjcns takes the second one which is token

        const verified = jwt.verify(token, "secretkey");
        req.user = verified;

        next();
    }

    catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};
