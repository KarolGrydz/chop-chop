import axios from 'axios';

const baseURL = 'https://edu-api.chop-chop.org/';
const postsURL = `${baseURL}posts`;
const authURL = `${baseURL}auth`;
const authorURL = `${baseURL}author/`;
const commentURL = `${baseURL}comments`;
const timeURL = `${baseURL}time/`;

// ih^ZWK06%Y

export const checkLogin = async (username, password) => {
  const data = {
    username,
    password
  };
  const check = await axios
    .post(authURL, JSON.stringify(data))
    .then(() => true)
    .catch(() => false);
  if (check) {
    return true;
  } else {
    return false;
  }
};

export const getToken = async (username, password) => {
  const data = {
    username,
    password
  };
  const token = await axios
    .post(authURL, JSON.stringify(data))
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
    return false;
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

export const sortByTitle = async token => {
  try {
    const result = await axios
      .get(`${postsURL}?order=asc`, {
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

export const sortBy = async (token, category) => {
  try {
    const result = await axios
      .get(`${postsURL}?orderBy=${category}`, {
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

export const getComments = async (token, postID) => {
  try {
    const result = await axios
      .get(`${postsURL}/${postID}/comments`, {
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

export const postComment = async (postId, userName, comment) => {
  const data = { postId, user: userName, comment };
  try {
    const post = await axios
      .post(commentURL, JSON.stringify(data))
      .then(res => console.log(res))
      .catch(err => console.log(err));
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const sendTime = async (postId, time, token) => {
  const data = JSON.stringify(Math.floor(time / 1000));
  try {
    const timer = await axios
      .put(
        `${timeURL}${postId}`,
        { data },
        {
          headers: {
            'X-Token': token
          }
        }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
    return timer;
  } catch (error) {
    console.log(error);
  }
};
