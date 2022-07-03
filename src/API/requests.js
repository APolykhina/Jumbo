import { apiService } from "./service";

// make request for getting list of shops
export const getShops = () => {
  return apiService.get(
    "/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e"
  );
};
