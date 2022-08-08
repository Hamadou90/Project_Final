import connect from '../../middleware/connection_To_DB';
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');


const handler = async (req, res) => {
  try {
    if (connect) {
      console.log("Connected Successfully!");

      // console.log(CryptoJS.AES.encrypt('PASSWD', 'secret123'));

      if (req.method == 'POST') {
        
        let user = await connect.query("SELECT * FROM \"Users\" WHERE \"Email\" = $1", [
          req.body.email
        ]);

        if (user.rowCount === 0 && user.command === 'SELECT') {
          res.status(404).json({ success: false, error: "User Not Found!" });
        }
        else {
          let result = JSON.parse(JSON.stringify(user.rows[0]));
           console.log(result);
          
          let bytes = CryptoJS.AES.decrypt(result.Password, process.env.AES_SECRET);
           console.log(bytes);

          let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
           console.log(decryptedPassword);
          if (req.body.email === result.Email && req.body.password === decryptedPassword) {
            let token = jwt.sign({ email: result.Email, name: result.Name }, process.env.JWT_SECRET, { expiresIn: '2d' });
            res.status(200).json({ success: true, token, email: result.Email });
          }
          else {

            res.status(404).json({ success: false, error: "You have entered an invalid credentials!" });
          }
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

};

export default handler;