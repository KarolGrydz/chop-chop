import axios from 'axios';

const baseURL = 'https://edu-api.chop-chop.org/';
const postsURL = `${baseURL}posts`;
const authURL = `${baseURL}auth`;
const authorURL = `${baseURL}author/`;

export const getToken = async () => {
  const token = await axios
    .post(authURL, {
      username: 'appdev',
      password: 'ih^ZWK06%Y'
    })
    .then(({ data }) => data);
  return token;
};

export const getPosts = async (token, page = 1) => {
  try {
    const result = await axios
      .get(`${postsURL}?page=${page}`, {
        headers: {
          'X-Token': token
        }
      })
      .then(({ data }) => data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAuthor = async (authorId, token) => {
  try {
    const result = await axios
      .get(authorURL + authorId, { headers: { 'X-Token': token } })
      .then(({ data }) => data);
    return result;
  } catch (error) {
    console.log(error);
  }
};
