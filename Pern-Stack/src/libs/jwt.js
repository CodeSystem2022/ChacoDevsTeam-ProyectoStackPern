import jwt from "jsonwebtoken";

export const createAccsessToken = (paylod) => {
    return new Promise((resolve, reject) => {
        jwt.sign(paylod, "xzy123", { expiresIn: "Id" },
        (err, token) => {
            if (err) reject(err);
            resolve(token);
    });
    });
};