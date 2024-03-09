import { useState, useEffect } from "react";
import { Product, Products } from "@/_types/product.type";
import styled from "styled-components";
import colors from "@/config/colors";
import ProductWidget from "./ProductWidget";

const HeaderContainer = styled.div`
  border-bottom: 2px solid ${colors.gray};
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 8px;
  h3 {
    display: flex;
    font-size: 30px;
    width: 100%;
    font-weight: 700;
    color: ${colors.dark};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 850px;
  box-shadow: 16px 16px 23px #dedede, -16px -16px 23px #ffffff;
  padding: 36px;
  border-radius: 8px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
  margin-top: 20px;
`;

const ProductWidgetContainer = ({ productData }: { productData: Products }) => {
  //Declaring the state for the selected product
  //Doing it here since there's only one product selected at a time
  const [selectedProduct, setSelectedProduct] = useState<Product["id"] | null>(
    null
  );

  const selectActiveProduct = (id: Product["id"]) => {
    setSelectedProduct(id);
  };

  useEffect(() => {
    //On componet mount -> Preselecting the product that is active from the server
    const preSelectedProduct: Product | undefined = productData.find(
      (product) => product.active
    );
    if (preSelectedProduct) {
      selectActiveProduct(preSelectedProduct.id);
    }
  }, [productData]);

  return (
    <Container>
      <HeaderContainer>
        <h3>Per product widgets</h3>
      </HeaderContainer>
      <ProductWrapper>
        {productData.map((product: Product) => (
          <ProductWidget
            key={product.id}
            product={product}
            isSelected={selectedProduct === product.id}
            setSelectedProduct={selectActiveProduct}
          />
        ))}
      </ProductWrapper>
    </Container>
  );
};

export default ProductWidgetContainer;
