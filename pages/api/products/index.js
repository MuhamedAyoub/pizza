import Connect from "../../../utls/mongo";
import Product from "../../../models/Product";
export default async function handler(req, res) {
  const { method } = req;
  Connect();
  if (method === "GET") {
    try {
      const product = await Product.find();
      res.status(200).json(product);
    } catch (ex) {
      res.status(500).json(product);
    }
  }
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (ex) {
      res.status(500).json(ex);
    }
  }
}

