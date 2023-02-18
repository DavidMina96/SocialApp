import axios from 'axios';

export interface Comment {
  id: string;
  postId?: string;
  post_id?: string;
  name: string;
  email: string;
  body: string;
}

const baseUrl = 'https://gorest.co.in';

export const fetchComments = async (postId: string): Promise<Comment[]> => {
  const url = `${baseUrl}/public/v2/comments`;
  const response = await axios.get(url, {params: {post_id: postId}});
  const newResponse = await response.data.map((comment: Comment) => {
    return {
      id: comment.id,
      name: comment.name,
      email: comment.email,
      body: comment.body,
      postId: comment.post_id,
    };
  });
  return newResponse;
};
