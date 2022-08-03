import axios from 'axios'

const getVerb = async () => {
  const response = await axios.get('http://localhost:3001/')
  return response.data;
}

export default getVerb;