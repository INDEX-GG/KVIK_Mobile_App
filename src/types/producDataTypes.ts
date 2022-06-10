type UserProductType = {
  id: number;
  title: string;
  price: number;
  photo: string;
};

export type ProductType = {
  additional_fields: any;
  address: string | null;
  all_time_viewing_count: number | null;
  best_before: number | null;
  category_id: string;
  communication: string;
  coordinates: string | null;
  created_at: string;
  delivery: boolean;
  description: string;
  full_stat: boolean;
  highlighting: boolean;
  id: number;
  last_day_viewing_count: number;
  photo: string;
  price: string;
  rating: number;
  secure_transaction: boolean;
  selection_size: boolean;
  status: string;
  subcategory: string;
  title: string;
  trade: boolean;
  user_id: number;
  user_name: string;
  user_phone: string;
  user_photo: string;
  user_products: UserProductType[];
  user_products_count: string;
  user_raiting: number | null;
};
