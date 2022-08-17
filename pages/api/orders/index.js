import Connect from "../../../utls/mongo";
import Order from "../../../models/Order";
export default async function handler(req, res) {
  const { method } = req;
  Connect();
  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (ex) {
      res.status(500).json({ error: ex });
    }
  } else if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      order.save();
      res.status(201).json(order);
    } catch (ex) {
      res.status(500).json({ error: ex });
    }
  } else return await res.status(404).send("Page not found...");
}
