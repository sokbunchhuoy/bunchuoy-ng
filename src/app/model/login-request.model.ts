export interface LoginRequest {
    name: string;
    email: string;
    password: string;
    id: number;
    token?: string; // Optional if your API includes a token in the response
}

export interface TokenModel {
    token: string;
    expireIn: number;
}