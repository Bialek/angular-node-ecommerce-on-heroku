export interface HTTPConfig {
  baseURL: string;
}

export interface RequestParams {
  action: string;
  name: string;
  category: string;
}

export interface ProductsResponse {
  productsTable?: Product[];
}

export interface ProductPayload {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  price: string;
}

export interface Product extends ProductPayload {
  count: number;
}

export interface PayForm {
  agree: boolean;
  email: string;
  name: string;
  phoneNumber: string;
}
