import apiClient from "./apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default new apiClient("/platforms/lists/parents");
