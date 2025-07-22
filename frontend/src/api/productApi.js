import axios from "axios";

const API_BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async (limit = 10, skip = 0) => {
    try {
        const { data } = await axios.get(
            `${API_BASE_URL}/products?limit=${limit}&skip=${skip}`
        );
        return data.products || [];
    } catch (error) {
        console.error('Failed to fetch products', error);
        throw error;
    }
};

export const fetchProductById = async (id) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/products/${id}`);
        return data;
    } catch (error) {
        console.error(`Failed to fetch product ${id}:`, error);
        throw error;
    }
}