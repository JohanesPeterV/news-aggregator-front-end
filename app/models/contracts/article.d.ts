declare type Article = {
  title: string;
  content: string;
  author: string;
  url: string;
  image_url: string;
  source: string;
  publish_date: string;
} & Base;
export default Article;
