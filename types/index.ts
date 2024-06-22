export interface BlogTypesProps {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Trending: boolean | null;
  }[];
}
