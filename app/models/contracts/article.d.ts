declare type Article = {
  title: string;
  content: string;
  author: string;
  url: string | null;
  source: string;
  publish_date: string;
} & Base;
export default Article;
