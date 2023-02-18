import axios from 'axios';

export interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
  username?: string;
}

const baseUrl = 'https://gorest.co.in';

export const fetchPosts = async (): Promise<Post[]> => {
  const url = `${baseUrl}/public/v2/posts`;
  const response = await axios.get(url);

  return response.data;
};
