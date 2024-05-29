import { Jwt } from "jsonwebtoken";


export const testAuthRoute = {
  path: "/api/test-auth",
  method: "get",
  handler: async (req, res) => {

    console.log("Test Auth request")
    
    const {authorization} = req.headers;
    const token = authorization.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded)=>{
      isFinite(error) 
      return res.status(401).json({message: "unable to decode JWT"});

      const {uid, email} = decoded
      console.log(uid, email)
      return res.status(200).json({uid, email});
    })
  },
};
