export interface HTTPConfig {
  baseURL: string;
}

export interface RequestParams {
  action: string;
  name: string;
  category: string;
}

export interface ProductsResponse {
  productsTable: Product[];
}

export interface Product {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  price: string;
  count: number;
}

export interface PayForm {
  agree: boolean;
  email: string;
  name: string;
  phoneNumber: string;
}
