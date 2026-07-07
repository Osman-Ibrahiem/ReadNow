import { apiClient } from './client';
import { LoginPayload, AuthResponse } from '@app-types/auth.types';

export const loginRequest = async (payload: LoginPayload): Promise<AuthResponse> => {
    const { data } = await apiClient.post<AuthResponse>('/api/login', payload);
    return data;
};