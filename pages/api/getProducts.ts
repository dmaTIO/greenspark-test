// I've only used this to test the endpoint, please ignore, I'm not using it in the project
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Product = {
  id: number;
  type: string;
  amount: number;
  action: string;
  active: boolean;
  linked: boolean;
  selectedColor: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const data = await axios
    .get("https://api.mocki.io/v2/016d11e8/product-widgets")
    .then((response) => response.data);

  res.status(200).json(data);
}
