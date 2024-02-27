<template>
  <div>
    <div v-if="successMessage" class="alert success">
      <span>{{ successMessage }}</span>
      <button @click="closeAlert" class="close-button">&times;</button>
    </div>
    <div v-if="errorMessage" class="alert error">
      <span>{{ errorMessage }}</span>
      <button @click="closeAlert" class="close-button">&times;</button>
    </div>
    <h1>Enviar Dados</h1>
    <form @submit.prevent="submitData" class="form-container">
      <div class="form-group">
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" v-model="cpf" required class="form-input">
      </div>
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nome" required class="form-input">
      </div>
      <div class="form-group">
        <label for="idServico">ID Servico:</label>
        <input type="text" id="idServico" v-model="idServico" required class="form-input">
      </div>
      <div class="form-group">
        <label for="dtInicial">Data Inicial</label>
        <input type="text" id="dataInicialCurso" v-model="dataInicialCurso" required class="form-input">
      </div>
      <div class="form-group">
        <label for="dtFinal">Data Final</label>
        <input type="text" id="dataFinalCurso" v-model="dataFinalCurso" required class="form-input">
      </div>
      <button type="submit" class="submit-button">Enviar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { sendData } from '../services/api';

export default defineComponent({
  data() {
    return {
      cpf: '56801175092',
      idServico: '10000016',
      nome:'Wanderlei Teste',
      dataInicialCurso:'12/02/2024',
      dataFinalCurso:'28/02/2024',
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    async submitData() {
      try {
        let y = { 
          cpf: this.cpf, 
          idServico: this.idServico,
          nome: this.nome,
          dataInicialCurso: this.dataInicialCurso,
          dataFinalCurso: this.dataFinalCurso
        }
      let response =  await sendData(y);
        console.log('Dados enviados com sucesso', response);
        this.successMessage = response; // Supondo que a resposta tenha uma propriedade "message" para sucesso
        this.errorMessage = ''
        // Trate a resposta conforme necessário
      } catch (error :any) {
        this.successMessage = ''; // Limpa qualquer mensagem de sucesso existente
       // this.errorMessage = error.response.data.message;
        console.error('Erro ao enviar dados:', error);
      }
    },
    closeAlert() {
      this.successMessage = '';
      this.errorMessage = '';
    }
  }
});
</script>

<style scoped>
/* Estilos para o formulário */
.form-container {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

/* Estilos para os campos de entrada */
.form-input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Estilos para o botão de envio */
.submit-button {
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
.alert {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 400px;
  padding: 15px;
  margin-top: 20px;
  border-radius: 4px;
}

.close-button {
  position: absolute;
  top: 5px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
}


.success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.error {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

</style>
