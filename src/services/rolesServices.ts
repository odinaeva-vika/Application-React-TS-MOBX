import { IRoles } from "../interfaces";
import { rolesAPI } from "./apiConfig";

export const getRoles = async (): Promise<{ items: IRoles[] }> => {
  try {
    const response = await rolesAPI.get("/videos");
    const data = await response.data;

    return data;
  } catch (error) {
    console.error(error);
    return { items: [] };
  }
};
