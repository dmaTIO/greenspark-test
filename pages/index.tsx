import ProductWidgetContainer from "@/Components/widgets/ProductWidgetContainer";
import { Products } from "@/_types/product.type";
import productsService from "@/services/products.service";
import styled from "styled-components";

//Leaving this as generic as possible since we are not using any props
//WidgetContainer can be used in any page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
`;

export default function Home({ productData }: { productData: Products }) {
  return (
    <>
      <Container>
        <ProductWidgetContainer productData={productData} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  //Calling this at build time, we can call again if we need to client-side
  const productData = await productsService.getProducts();

  return {
    //Adding a revalidate to refresh the data every 30 seconds, can reduce based on how often the data changes
    revalidate: 30,
    props: {
      productData,
    },
  };
}
