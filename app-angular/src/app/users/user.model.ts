export interface User {
    id: string;
    data_nascimento: string;
    email: string;
    primeiro_Nome: string;
    ultimo_Nome: string;
    endereco: string;
}

export interface ResponseUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}

//modelos para criação
export interface RequestCreate {
    data_nascimento: string;
    email: string;
    primeiro_Nome: string;
    ultimo_Nome: string;
    endereco: string;
}

export interface ResponseCreate {
    data_nascimento: string;
    email: string;
    primeiro_Nome: string;
    ultimo_Nome: string;
    endereco: string;
    createdAt: Date;
    id: string;
}

//modelos para get User

export interface ResponseUser {
    data: User
}

//modelos para criação
export interface RequestUpdate {
    data_nascimento: string;
    email: string;
    primeiro_Nome: string;
    ultimo_Nome: string;
    endereco: string;
}

export interface ResponseUpdate {
    data_nascimento: string;
    email: string;
    primeiro_Nome: string;
    ultimo_Nome: string;
    endereco: string;
    updatedAt: Date;
}