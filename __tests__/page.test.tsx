/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { Products } from "@/_types/product.type";

import Home from "@/pages/index";
import mockData from "@/__tests__/data/sample.json";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home productData={mockData as Products} />);

    const heading = screen.getByText("Per product widgets");

    expect(heading).toBeInTheDocument();
  });
});
