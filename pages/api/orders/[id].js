import Connect from "../../../utls/mongo";
import Order from "../../models/Order";
export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  Connect();
  switch (method) {
    case "GET":
      try {
        const pizza = await Order.findById(id);
        res.status(200).json(pizza);
      } catch (ex) {
        res.status(500).json(ex);
      }
      break;
    case "PUT":
      console.log("Nothing ..");

      break;
    case "DELETE":
      console.log("Nothing ..");

      break;
    default:
      res.status(404).send("Error 404 Page Not Found !");
      return;
  }
}
