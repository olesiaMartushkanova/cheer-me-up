import axios, { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.REACT_APP_API_KEY;

const sendRequestToGetJoke = async (): Promise<AxiosResponse> =>
  await axios({
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    headers: {
      'accept': 'application/json',
      'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
      'x-rapidapi-key': apiKey,
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
