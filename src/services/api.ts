import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://api-cfc.homologacao.am.gov.br/api/v1'
  baseURL: 'http://localhost:8080/api/v1'
});

export interface DataToSend {
  cpf: string,
  idServico: string,
  nome: string,
  dataInicialCurso: string,
  dataFinalCurso: string
}
api.defaults.headers.common['Authorization'] = 'Bearer c03fb6d61cbbf7b9de9322685c04f293';


export const sendData = async (data: DataToSend) => {
 
    const response = await api.post('aula-teorica/alunos/individuos/matriculados/', data);
    return response.data;
 
};