import axios from 'axios';
import { User } from './types';

const API_URL = 'http://localhost:3000';

export const api = axios.create({
    baseURL: API_URL,
});

export const getUserss = async (): Promise<User[]> => {
    const response = await api.get('/userssss');
    return response.data;
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
    const response = await api.post('/users', user);
    return response.data;
};
