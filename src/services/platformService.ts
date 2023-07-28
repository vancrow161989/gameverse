import apiClient from "./apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default new apiClient<Platform>("/platforms/lists/parents");
