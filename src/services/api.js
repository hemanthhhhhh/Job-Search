import axios from 'axios';

const API_URL = 'https://job-search-backend-production-bcab.up.railway.app';

export const savePost = async (payload) => {
    try {
        return await axios.post(`${API_URL}/post`, payload);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}

export const getAllPosts = async () => {
    try {
        return await axios.get(`${API_URL}/posts`);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}
