<template>
  <div class="content">
    <div class="title">
      Simulação de Financiamento
      <p></p>
    </div>
    <div class="card">
      <div class="subtitle">
        Selecione o veiculo que deseja simular o financiamento
      </div>
      <div class="select-btn">
        <select
          v-model="veiculo"
          name="veiculo"
          class="veiculo"
          @change="onSelectCar()"
        >
          <option disabled :value="{}">Selecione</option>
          <option v-for="item in listVeiculo" :key="item.id" :value="item">
            {{ item.modelo }}
          </option>
        </select>
        <button type="button" class="btn-simular" @click="onSimular">Simular</button>
      </div>
    </div>
    <div
      v-if="veiculo.foto != undefined"
      style="display: flex; justify-content: space-around"
    >
      <div class="veiculo-selecionado">
        <img
          :src="veiculo.foto"
          alt="Foto do Veículo"
          width="300"
          height="191"
        />
        <div style="font-weight: 700; font-size: 20px; margin-left: 16px;">
          {{ veiculo.modelo }}
        </div>
        <div class="descricao">
          {{ veiculo.descricao }}
        </div>
        <div class="select-btn descricao">
          <div>
            <img
              src="../components/icons/calendar.svg"
              alt="Ano"
              height="25"
              width="25"
            />
            {{ veiculo.ano }}
          </div>
          <div>
            <img
              src="../components/icons/km.svg"
              alt="Quilometragem"
              height="25"
              width="25"
            />
            {{ `${veiculo.quilometragem} Km` }}
          </div>
          <div>
            <img
              src="../components/icons/cambio.svg"
              alt="Ano"
              height="25"
              width="25"
            />
            {{ veiculo.tipo_cambio }}
          </div>
        </div>
        <div style="font-weight: 700; font-size: 26px">
          {{ veiculo.valor }}
        </div>
      </div>
      <div class="simulacao">
        <div class="title-simulacao">Valores simulados para você
          <p></p>
        </div>
        <div class="title-simulacao">Entrada</div>
        <input v-model="valor_entrada" class="input-simula" @blur="onValorEntrada" placeholder="Valor de Entrada" />
        <div><div class="parcelas">6x</div> <div style="display: flex;"><input v-model="valor_6x" readonly class="input-simula"> <div class="IPVA">IPVA GRÁTIS</div></div></div>
        <div style="display:flex">
        <div><div class="parcelas">12x</div> <input v-model="valor_12x"  readonly class="input-simula"></div>
        <div style="margin-left:18px" ><div class="parcelas">48x</div> <input v-model="valor_48x" readonly class="input-simula"></div>
       </div>
       <div style="display:flex; justify-content:space-around;">
        <div class="consultor-simula">
          <img src="../components/icons/icons8-whatsapp.svg" alt="WhatsApp" height="30" width="30" />
          Falar com consultor</div>
        <div class="contato-simula">{{ `Contato ${veiculo.contato_loja} | ${veiculo.contato_numero}` }}</div>
      </div>
      </div>
    </div>
    <!-- Notify -->
    <dialog>
      {{ mensagem }}
      <button class="btn-fechar" @click="CloseNotify">Fechar</button>
    </dialog>
  </div>
</template>
<script>
import api from "../services/api";
export default {
  data() {
    return {
      veiculo: {},
      listVeiculo: [],
      valor_entrada: null,
      valor_6x: 0,
      valor_12x: 0,
      valor_48x: 0,
      disabled: false,
      mensagem: '',
    };
  },
  async created() {
    await api.get("/").then((res) => {
      localStorage.listVeiculo,this.listVeiculo = [...res.data.dataVeiculo];
    });
  },
  methods: {
    onSelectCar() {
      this.valor_entrada = null;
      this.valor_6x   = 0;
      this.valor_12x = 0;
      this.valor_48x = 0;
      if (!this.veiculo.valor.includes("R$")) {
        this.veiculo.valor = parseInt(this.veiculo.valor).toLocaleString(
          "pt-BR",
          {
            style: "currency",
            currency: "BRL",
          },
        );
      }
    },
    onValorEntrada(){
      if (!this.valor_entrada.includes("R$")) {
        this.valor_entrada = parseInt(this.valor_entrada).toLocaleString(
          "pt-BR",
          {
            style: "currency",
            currency: "BRL",
          },
        );
        if(this.valor_entrada >= this.veiculo.valor){
          this.valor_entrada = null
          this.notify('O valor da Entrada deve ser menor que o Valor do Veículo!')
        }
      }
    },
    notify(message) {
      let modal = document.querySelector("dialog")
      this.mensagem = message;
      modal.showModal();
    },
    CloseNotify(){
      let modal = document.querySelector("dialog")
      modal.close();
    },
    onSimular(){
      if(this.valor_entrada <= 0){
        this.notify('É necessário um valor de Entrada para Simular')
      }
      //// (valor do carro - valor da entrada) / número de parcelas
      let vl_6x = this.veiculo.valor.replace("R$","").replace(".","").replace(",",".") * 1.1247;
      let vl_12x = this.veiculo.valor.replace("R$","").replace(".","").replace(",",".") * 1.1556;
      let vl_48x = this.veiculo.valor.replace("R$","").replace(".","").replace(",",".") * 1.1869;
      let valor_entrada = this.valor_entrada.replace("R$","").replace(".","").replace(",",".");
      this.valor_6x  = (vl_6x - valor_entrada) / 6;
      this.valor_6x = parseFloat(this.valor_6x).toLocaleString("pt-BR",
          {
            style: "currency",
            currency: "BRL",
          },
        );
      this.valor_12x = ((vl_12x - valor_entrada) / 12)
      this.valor_12x = parseFloat(this.valor_12x).toLocaleString("pt-BR",
          {
            style: "currency",
            currency: "BRL",
          },
        );
      this.valor_48x = ((vl_48x - valor_entrada) / 48)
      this.valor_48x = parseFloat(this.valor_48x).toLocaleString("pt-BR",
          {
            style: "currency",
            currency: "BRL",
          },
        );
    }
  },
};
</script>

<style scoped>
* {
  color: #444;
  font-style: normal;
}
.content {
  margin-top: 80px;
  margin-left: 20px;
}
.title {
  font-size: 32px;
  font-weight: 700;
}
.title p:after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  border-radius: 22px;
  background-color: #7d28f7;
}

.subtitle {
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}

.select-btn {
  display: flex;
  flex-direction: row;
  margin: 2%;
  justify-content: space-around;
}
.card {
  padding: 10px;
  background: #fafafa;
  border: 1px #fafafa;
  width: 90%;
  height: 100px;
}
p {
  font-weight: 500;
}
.veiculo {
  width: 258px;
  height: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  background: #ffffff;
  margin: 1vh;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}
.veiculo select {
  background: transparent;
  width: 268px;
  padding: 5px;
  font-size: 16px;
  line-height: 1;
  border: 0;
  border-radius: 0;
  margin: 20%;
  height: 34px;
}
.btn-simular {
  width: 200px;
  margin-left: 15px;
  border: none;
  border-radius: 50px;
  background: #7d28f7;
  color: #fff;
  font-weight: 900;
  font-size: 16px;
  padding: 10px 32px;
  gap: 10px;
  cursor: pointer;
}

.btn-fechar {
  width: 100px;
  border: none;
  border-radius: 50px;
  background: #7d28f7;
  color: #fff;
  font-weight: 900;
  font-size: 12px;
  padding: 8px;
  cursor: pointer;
}
.descricao {
  font-weight: 400;
  font-size: 14px;
  margin-left: 16px;
}

.simulacao {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 50vw;
  margin-left: 20px;
}

.title-simulacao {
  font-weight: 700; 
  font-size: 20px;
}

.title-simulacao p:after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  border-radius: 22px;
  background-color: #7d28f7;
}

.parcelas{
  font-weight: 700;
  font-size: 16px;
  line-height: 18.75px;
}
.input-simula{
  font-weight: 700;
  font-size: 25px;
  line-height: 29.3px;
  color: #7D28F7;
  width: 258px;
  height: 30px;
  background: #ffffff;
  margin: 1vh;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}

.IPVA{
  background-color: #7D28F7;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  border-radius: 25px;
}

.consultor-simula{
  display:flex;
  justify-content: space-around;
  align-content: center;
  width: 257px;
  height: 40px;
  font-weight: 900;
  font-size: 16px;
  padding: 5px;
  background: #1ABB59;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
}

.contato-simula{
  font-weight: 700;
  font-size: 15px;
}
.image-venda {
  width: 100%;
}

/* Notify */
dialog::backdrop{
  background-color: rgb(0 0 0 / .5);
}
dialog{
  color: #444;
  font-style: normal;
  font-weight: 700;
  border: none;
  border-radius: .5rem;
  box-shadow: 0 0 1em rgb(0 0 0 / .3);
  width: 30%;
}
</style>
