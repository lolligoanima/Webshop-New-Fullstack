import { getDbConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv"

export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    // Debug Log
    console.log("Received a POST request on /api/signup");
    console.log(req.body)

    const { email, firstName, lastName, city, password, street, zip, number } = req.body;
    if (!email || !password  || !firstName || !lastName || !city || !zip || !street || !number)
      return res.sendStatus(500);
      const db = getDbConnection("ecommerce");


   // const user = await db.collection("users").findOne({ email: req.body.email });
    //console.log(req.body)
    //if (user) return res.sendStatus(409);

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);

    // // Debug Log
     //console.log(`Password:${password}\nSalt: ${salt}\nHash:${hash}`);
     //console.log(`Email: ${email}, password: ${password}`);

    //const result = await db.collection("users").insertOne({
    //email,
    //passwordHash,
    //firstName,
    //lastName,
    //city,
    //zip,
    //street,
    //  number
    //});

    if (!result) return res.sendStatus(500);


    
    const { insertedId } = result;

    dotenv.config()

    jwt.sign(
      { uid: insertedId, email },
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (error, token) => {
        if (error) {
          console.log("Error generating jwt token:\n", error);
          return res.status(500).send(error);
        }

        return res.status(200).json({ token });
      }
    );
  },
};
