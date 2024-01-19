import axios from 'axios'
import { baseURL } from '../util/config'

const getVerb = async () => {
  const response = await axios.get(baseURL)
  return response.data;
}

export default getVerb;