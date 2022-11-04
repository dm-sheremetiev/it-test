import { Options } from "../types/Options";

const BASE_URL = "https://api.thecatapi.com/v1/images/search"

export const request = (options: Options) => {
  const limitStr = options.limit && options.limit > 0
    ? `?limit=${options.limit}`
    : '';
  const breedStr = options.breed === 'All' || null
    ? ''
    : `?q=${options.breed?.toLowerCase()}`;

  const optionsProp = limitStr+breedStr;

  return fetch(`${BASE_URL}${optionsProp}`, {
    headers: {
      'x-api-key': 'live_8to19QEYRRqAqTvByBfslIrwahAejRpTqJ0hbapP9PGzP9jE1r2dPW5BlkrlY8Dj'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw `${response.status}`
      }
 
      return response.json()
    })

}