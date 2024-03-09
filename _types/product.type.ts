type Type = "carbon" | "plastic bottles" | "trees";
type Action = "collects" | "plants" | "offsets";
type SelectedColor = "white" | "black" | "blue" | "green" | "beige";

export interface Product {
  id: number;
  type: Type;
  amount: number;
  action: Action;
  active: boolean;
  linked: boolean;
  selectedColor: SelectedColor;
}

export interface Products extends Array<Product> {}
