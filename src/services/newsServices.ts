import { fetchDataNews } from "../helpers/hooks/fetchDataNews";
import { CategoriesType, INews } from "../interfaces";

export const getNews = async (
  category: string,
  keywords: string
): Promise<{ news: INews[] }> => {
  const data = await fetchDataNews<{ news: INews[] }>("/search", {
    category,
    keywords,
  });
  return data;
};

export const getCategories = async (): Promise<{
  categories: CategoriesType[];
}> => {
  const data = await fetchDataNews<{ categories: CategoriesType[] }>(
    "/available/categories"
  );
  return data;
};
