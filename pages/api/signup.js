import connect from '../../middleware/connection_To_DB';
const CryptoJS = require('crypto-js');

const handler = async (req, res) => {
  try {
    if (connect) {
      console.log("Connected Successfully!");
       console.log(req.body);

      console.log(req.method);
    
      if (req.method == 'POST') {

        const password = CryptoJS.AES.encrypt(req.body.password, 'secret123').toString();

        let user = await connect.query("INSERT INTO \"Users\"(\"Name\", \"Email\", \"Password\") VALUES($1, $2, $3)", [
          req.body.name,
          req.body.email,
          password
        ]);


        if ((user.rowCount === 0) && (user.command !== 'INSERT')) {
          res.status(404).json({ success: false, error: "Insertion operation failed!" });
        }
        else {
          res.status(200).json({ success: true, user: "Registration done successfully!" });
        }

      }
      else{
        res.status(404).json({ success: false, error: "This method is not allowed!" });
      } 
    }
    else{
      console.log("Connection Error!");
    }
  } catch (error) {
    console.log(error);
  }


};

export default handler;