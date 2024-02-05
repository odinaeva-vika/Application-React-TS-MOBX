export interface IRoles {
  id: string;
  title: string;
}

export interface INews {
  title: string;
  url: string;
  author: string;
  id: string;
  image: string;
  description: string;
  published: string;
}

export type SkeletonType = "banner" | "item";

export interface IFilters {
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
  news?: INews[]; //?
  status?: string; //?
}

export type CategoriesType =
  | "regional"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
