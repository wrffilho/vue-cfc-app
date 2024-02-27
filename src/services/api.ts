import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://api-cfc.homologacao.am.gov.br/api/v1',
  //baseURL: 'http://localhost:8080/api/v1',
  baseURL: 'http://10.10.2.22:8077/apicfc/api/v1',
  //headers: {'Authorization': 'Bearer c03fb6d61cbbf7b9de9322685c04f293'}
  headers: {
    'X-Prodam-Api-Key': '119a7249-c66e-433b-867a-c9887b8752ed',
    'Authorization': 'Bearer c03fb6d61cbbf7b9de9322685c04f293',
    'Access-Control-Allow-Origin':'*'
  }, 
});

export interface DataToSend {
  cpf: string,
  idServico: string,
  nome: string,
  dataInicialCurso: string,
  dataFinalCurso: string
}
//api.defaults.headers.common['Authorization'] = ;


export const sendData = async (data: DataToSend) => {

  const response = await api.post('aula-teorica/alunos/individuos/matriculados/', data);
  return response.data;

};