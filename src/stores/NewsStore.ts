import { autorun, makeAutoObservable, runInAction } from "mobx";
import { CategoriesType, INews } from "../interfaces";
import { getCategories, getNews } from "../services/newsServices";

class NewsStore {
  news?: INews[] = [];
  favoriteNews: INews[] = [];
  categories?: CategoriesType[] = [];
  category: string = "";
  keywords: string = "";
  isLoading: boolean = false;
  isFavorite: boolean = false;

  constructor() {
    makeAutoObservable(this);

    this.loadFromLocalStorage();

    autorun(() => {
      const data = {
        news: this.news,
        favoriteNews: this.favoriteNews,
        categories: this.categories,
        category: this.category,
        keywords: this.keywords,
        isFavorite: this.isFavorite,
      };
      localStorage.setItem("newsSearchData", JSON.stringify(data));
    });
  }

  loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("newsSearchData") || "{}");
    this.news = data.news || [];
    this.favoriteNews = data.favoriteNews || [];
    this.categories = data.categories || [];
    this.category = data.category || "";
    this.keywords = data.keywords || "";
    this.isFavorite = data.isFavorite || false;
  }

  handleCategory = (category: string) => {
    this.category = category;
  };

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.keywords = e.target.value.trim();
  };

  async toggleFavorites(newsItem: INews) {
    const index = this.favoriteNews.findIndex((r) => r.id === newsItem.id);
    if (index !== -1) {
      runInAction(() => {
        this.favoriteNews.splice(index, 1);
      });
    } else {
      const updatedFavorite = { ...newsItem, isFavorite: true };

      runInAction(() => {
        this.favoriteNews.push(updatedFavorite);
      });
    }
  }

  getNewsAction = async (category: string, keywords: string) => {
    try {
      this.isLoading = true;
      const data = await getNews(category, keywords);

      runInAction(() => {
        this.news = data.news;

        this.isLoading = false;
      });
    } catch (error) {
      this.isLoading = false;
    }
  };

  getCategoriesAction = async () => {
    try {
      this.isLoading = true;
      const data = await getCategories();

      runInAction(() => {
        this.categories = data.categories;

        this.isLoading = false;
      });
    } catch (error) {
      this.isLoading = false;
    }
  };
}
export default new NewsStore();
