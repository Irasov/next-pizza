import {axiosInstance} from "./instance";
import { ApiRoutes } from "./constants";
import { Ingridient } from "@/src/generated/prisma/client";

export const getAll = async () : Promise<Ingridient[]> => {
  const {data} = await axiosInstance.get<Ingridient[]>(ApiRoutes.INGREDIENTS);
  return data;
}