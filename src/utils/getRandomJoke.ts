import axios, { AxiosResponse } from 'axios';

const sendRequestToGetJoke = async (): Promise<AxiosResponse> =>
  await axios({
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    headers: {
      'accept': 'application/json',
      'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
      'x-rapidapi-key': 'bfbfaf1b5dmsh852b7e1e39d4f53p17082fjsnd489c0ca2eba',
    },
    params: { query: '<REQUIRED>' },
  });

export const getRandomJoke = async () => {
  try {
    const joke = await sendRequestToGetJoke();
    console.log('jokes: ', joke.data.value);
    return joke.data.value as string;
  } catch (error) {
    throw Error(`Couldn't get a joke, try again please... ${error}`);
  }
};
