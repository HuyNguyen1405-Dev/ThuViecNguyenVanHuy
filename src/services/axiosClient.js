import axios from 'axios';

const urlAPI = axios.create({
    baseURL: 'https://api-work.wqn.vn',
    timeout: 5000, // Giá trị timeout ví dụ (theo đơn vị mili giây)
});

const axiosClient = async (method, endpoint, data = null) => {
    try {
        const response = await urlAPI.request({
            method,
            url: endpoint,
            data,
        });
        return response.data;
    } catch (error) {
        // Handle the error
        console.error(error);
        throw error;
    }
};

export default axiosClient;