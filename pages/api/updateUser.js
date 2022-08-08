import connect from '../../middleware/connection_To_DB';
import jwt from 'jsonwebtoken';


const handler = async (req, res) => {
    try {
        if (connect) {
            console.log("Connected Successfully!");

            if (req.method == 'POST') {
                // console.log(req.body);
                let token = req.body.token;
                let user = jwt.verify(token, process.env.JWT_SECRET);
                // console.log(user.email);

                let updateUser = await connect.query("UPDATE \"Users\" SET \"Name\" = $1, \"Address\" = $2, \"PhoneNo\" = $3, \"Photo\" = $4 WHERE \"Email\" = $5", [
                    req.body.name,
                    req.body.address,
                    req.body.phone,
                    req.body.photo,
                    user.email
                ]);

                if(updateUser){
                    res.status(200).json({ success: true });

                }
                else{
                    res.status(404).json({ success: false, error: "Some Error occured while Updating!" });
                }
            }
            else {
                res.status(404).json({ success: false, error: "This method is not allowed!" });
            }
        }
        else {
            console.log("Connection Error!");
        }
    } catch (error) {
        console.log(error);
    }

}

export default handler;
