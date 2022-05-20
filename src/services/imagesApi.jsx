import axios from 'axios';

const API_KEY = '25704101-e9a4b1030f151f3422020504c';
const BASE_URL = 'https://pixabay.com';

export const fetchData = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
