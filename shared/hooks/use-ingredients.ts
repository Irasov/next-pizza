import React from "react";
import {Ingridient} from "@/src/generated/prisma/client";
import { Api } from "@/shared/services/api-client";

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<Ingridient[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
   async function getIngredients() {
      try {
        setLoading(true)
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
   }  catch (error) { 
        console.log(error);
      } finally {
        setLoading(false);
      }
   }
  getIngredients(); 
  },[]);

  
  return { ingredients, loading };
}