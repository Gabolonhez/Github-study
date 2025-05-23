import axios from 'axios';
import { GithubUser } from './types/github'; // Caminho para o seu novo arquivo de interface

const githubBaseUrl = 'https://api.github.com/users/';

export const gitApi = {
  getUser: async (username: string): Promise<GithubUser> => { // Informa que a Promise retorna um GithubUser
    try {
      const response = await axios.get<GithubUser>(`${githubBaseUrl}${username}`); // axios.get<GithubUser> tipa os dados da resposta
      return response.data; // axios coloca os dados da resposta em `.data`
    } catch (error) {
      // É uma boa prática adicionar logs mais detalhados para depuração
      console.error("Erro ao buscar usuário do GitHub:", error);
      // Você pode querer lançar um erro mais específico ou tratá-lo aqui
      throw error; // Re-lança o erro para ser capturado no try-catch do componente Home
    }
  }
};