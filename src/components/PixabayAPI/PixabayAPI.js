import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '29443951-f0fab2e7bdcd1423b667d2410';

const apiRequest = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log(response);

  if (response.data.hits.length === 0) {
    alert(`${query} не знайдено :(`);
  }

  return response.data;
};

export default apiRequest;
