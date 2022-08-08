import connect from '../../middleware/connection_To_DB';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {

    try {
        if (connect) {
            console.log("Connected Successfully!");

            //  console.log(CryptoJS.AES.encrypt('PASSWD', 'secret123'));

             if (req.method == 'POST') {

                let token = req.body.token;
                let user = jwt.verify(token, process.env.JWT_SECRET);
                // console.log(user);
                
                let dbUser = await connect.query("SELECT * FROM \"Users\" WHERE \"Email\" = $1", [
                    user.email
                ]);
                 console.log(dbUser.rows[0]);
                 

                const { User_id, Name, Email, Address, PhoneNo, Photo } = dbUser.rows[0];

                // res.status(200).json({ User_id, Name, Email, Address, PhoneNo, Photo });
                res.status(200).json({success: true, dbUser: dbUser.rows[0] });

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