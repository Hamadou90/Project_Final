import connect from '../../middleware/connection_To_DB';


const handler = async (req, res) => {
  try {
    if (connect) {
      console.log("Connected Successfully!");

      if (req.method == 'GET') {

        let places = await connect.query("SELECT * FROM places");

        if (places.rowCount === 0 && places.command === 'SELECT') {
          res.status(404).json({ success: false, error: "No Places Found in the Database!" });
        }
        else {
          let result = JSON.parse(JSON.stringify(places.rows));
          console.log(result);


          res.status(200).json({ success: true, result: result });

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