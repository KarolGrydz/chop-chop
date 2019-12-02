import axios from 'axios';

const baseURL = 'https://edu-api.chop-chop.org/';
const postsURL = `${baseURL}posts`;
const authURL = `${baseURL}auth`;

export const getPosts = async () => {
  try {
    const token = await getToken().then(({ data }) => data.token);
    const result = await axios
      .get(postsURL, {
        headers: {
          'X-Token': token
        }
      })
      .then(data => data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  const token = await axios
    .post(authURL, {
      username: 'appdev',
      password: 'ih^ZWK06%Y'
    })
    .then(({ data }) => data);
  return token;
};
