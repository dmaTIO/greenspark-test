import axios from "axios";
import { Products } from "@/_types/product.type";

//TODO: Get this in .env
const productEndpoint = "https://api.mocki.io/v2/016d11e8/product-widgets";

const productsService = {
  getProducts: async () => {
    try {
      const data: Products = await axios
        .get(productEndpoint)
        .then((response) => response.data);
      return data;
    } catch (error) {
      return [];
    }
  },
};

export default productsService;
