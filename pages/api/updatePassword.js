import connect from '../../middleware/connection_To_DB';
import jwt from 'jsonwebtoken';
import cryptoJS from 'crypto-js';

const handler = async (req, res) => {
    try {
        if (connect) {
            console.log("Connected Successfully!");

            if (req.method == 'POST') {
                // console.log(req.body);
                let token = req.body.token;
                let user = jwt.verify(token, process.env.JWT_SECRET);
                // console.log(user.email);

                console.log("User Verified Here: \\n ", user.email);
                let dbUser = await connect.query("SELECT * FROM \"Users\" WHERE \"Email\" = $1", [
                    user.email
                ]);
                console.log("Database User here: \\n ", dbUser.rows[0]);

                const bytes = cryptoJS.AES.decrypt(dbUser.rows[0].Password, process.env.AES_SECRET);
                // console.log("Bytes Value: ", bytes);
                let decryptedPassword = bytes.toString(cryptoJS.enc.Utf8);
                 console.log("Decrypted Password Here: \\n ", decryptedPassword);

                
                let updateUser;
                if ((decryptedPassword == req.body.password) && (req.body.npassword == req.body.cnpassword)) {
                    console.log("Previous password is:  ", req.body.password);
                    console.log("New password is:  ", req.body.npassword);

                    let encryptedPassword = cryptoJS.AES.encrypt(req.body.npassword, process.env.AES_SECRET).toString();

                    console.log(" Encrypted Version of the New Password: ", encryptedPassword);
                    
                    updateUser = await connect.query("UPDATE \"Users\" SET \"Password\" = $1 WHERE \"Email\" = $2", [
                        encryptedPassword,
                        user.email
                    ]);
                    console.log(updateUser);
        
                    res.status(200).json({ success: true });
                    // return;
                }
                else{
                    if(decryptedPassword != req.body.password){
                        res.status(200).json({ success: false, error: "Wrong Current Password given!" });
                    }
                    else{
                        res.status(200).json({ success: false, error: "Mismatch between New Password and Confirm New Password!" });
                    }
                }

                if (!updateUser) {
                    res.status(404).json({ success: false, error: "Sorry, User not Found!" });
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
