import axios from 'axios';

export const baseURL = '​https://edu-api.chop-chop.org/posts';
export const posts = `${baseURL}posts`;

const reqHeaders = {
  headers: {
    'X-Token':
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFwcGRldiIsInRpbWUiOjE1NzUxMzIzNjN9.O_Id-FxYuTa0oxNG2DpX3r7aXDqIvr0QUIGV35--VCw'
  }
};

export const getPosts = async () => {
  try {
    const result = await axios
      .get(baseURL, Object.assign({}, reqHeaders))
      .then(data => console.log(data));
    return result;
  } catch (error) {
    console.log(error);
  }
};
