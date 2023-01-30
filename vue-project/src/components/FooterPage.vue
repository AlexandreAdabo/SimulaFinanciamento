<template>
  <footer>
    <div class="footer-box">
      <div>
        <div class="titulo-footer">Encontre seu veículo</div>
        <li>Encontre seu veículo</li>
        <li>Lojas</li>
        <li>Promoções</li>
        <li>Vantagens</li>
        <li>Garantia Mais</li>
      </div>
      <div>
        <div class="titulo-footer">A Empresa</div>
        <li>Sobre</li>
        <li>Delivery</li>
        <li>Aviso de Privacidade</li>
        <li>Blog Seminovos</li>
      </div>
      <div>
        <div class="titulo-footer">Atendimento</div>
        <li>Perguntas Frequentes</li>
        <li>Fale Conosco</li>
        <li>Pós-Vendas</li>
      </div>
      <div>
        <div class="titulo-footer">Lojistas</div>
        <li>Acesse Seminovos Atacado</li>
      </div>
      <div>
        <div
          style="
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 120%;
          "
        >
          Atendimento ao cliente
        </div>
        <div
          style="display: flex; justify-content: center; align-items: center"
        >
          <div class="num-atend">0800 000 000</div>
          <div class="IconWhatsApp">
            <img src="../components/icons/icons8-whatsapp.svg" alt="WhatsApp" />
          </div>
        </div>
      </div>
      <div>
        <div
          style="
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 23px;
          "
        >
          Siga a gente
        </div>
        <div
          style="display: flex; justify-content: center; align-items: center"
        >
          <img
            class="rede-social"
            src="../components/icons/icons8-facebook.svg"
            alt="Facebook"
          />
          <img
            class="rede-social"
            src="../components/icons/icons8-instagram.svg"
            alt="Instagram"
          />
          <img
            class="rede-social"
            src="../components/icons/icons8-twitter.svg"
            alt="Twitter"
          />
          <img
            class="rede-social"
            src="../components/icons/icons8-linkedin.svg"
            alt="Linkedin"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  background-color: #343a40cc;
  color: #fff;
  position: absolute;
  top: 70vw;
  bottom: 3px;
  left: 0;
  right: 0;
  width: 100%;
  height: 30vh;
  padding: 1%;
}

.footer-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}

.footer-box li {
  list-style: none;
  cursor: pointer;
}

.titulo-footer {
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  cursor: pointer;
}

.num-atend {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7d28f7;
  height: 6vh;
  width: 9vw;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
}

.IconWhatsApp {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5vh;
  width: 4vw;
  background: #4ac959;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  margin: 5%;
}

.rede-social {
  background: #7d28f7;
  border-radius: 4px;
  margin: 1%;
  cursor: pointer;
}

</style>