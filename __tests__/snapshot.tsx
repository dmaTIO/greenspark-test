/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import { Products } from "@/_types/product.type";
import Home from "@/pages/index";

import mockData from "@/__tests__/data/sample.json";

it("renders homepage unchanged", () => {
  const { container } = render(<Home productData={mockData as Products} />);
  expect(container).toMatchSnapshot();
});
