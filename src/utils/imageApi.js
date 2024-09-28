import axios from 'axios';

export const fetchCityImage = async (city) => {
    const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=${'INFZEV-3A2oxzsT-XhEzrFR-TcAFZF0805_dtDNKNjc'}`);
    return response.data.results[0].urls.full;
};
