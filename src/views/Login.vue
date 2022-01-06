<template>
    <div class="backdrop">
        <div class="modal">
            <div class="header">
                <h3>Para ver e gerenciar as informações da sua conta, informe os dados abaixo</h3>
            </div>
            <div class="divemail">
            <input ref="userEl" v-model="email" autofocus class="emailX" type="text"
            @keyup="validHandler" placeholder="Digite o seu e-mail">
            <div class="error-user" v-if="errorField === 'User'">{{errorMsg}}</div>
            </div>
            <div>
            <input ref="pwdEl" v-model="pwd" class="passwordX" type="password" placeholder="Senha"
            @keyup="validHandler">
            <div class="error-user" v-if="errorField === 'Pwd'">{{errorMsg}}</div>
            </div>
            <router-link to="/">
                <span class="forgot">
                    Esqueceu a senha?
                </span>
            </router-link>
            <div>
                <button class="entrar" @click="loginHandler">Entrar</button>
            </div>
            <div>
                <router-link class="cadastre" to="/cadastro">
                    <span>
                        Não tem uma conta? <span class="crie">Crie uma agora!</span>
                    </span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import useAuth from "@/modules/auth";

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const auth = useAuth();
    const state = reactive({
      email: "",
      pwd: "",
      pwdEl: null,
      userEl: null,
      errorField: null,
      errorMsg: "",
    });

    auth.loadData();

    const valid = () => {
      if (!state.email) {
        state.errorField = "User";
        state.errorMsg = "Por favor, digite o seu e-mail";
        state.userEl.focus();
        setTimeout(() => {
          state.errorField = null;
          state.errorMsg = "";
        }, 2500);
        return false;
      }
      if (!state.pwd) {
        state.errorField = "Pwd";
        state.errorMsg = "Por favor, digite a sua senha";
        state.pwdEl.focus();
        setTimeout(() => {
          state.errorField = null;
          state.errorMsg = "";
        }, 2500);
        return false;
      }
      return true;
    };

    const loginHandler = async () => {
      if (!valid()) return;
      const res = await auth.login(state.email, state.pwd);
      if (res === "Usuário ou senha inválidos") {
        state.errorField = "User";
        state.errorMsg = "Usuário ou senha incorretos";
        state.userEl.focus();
      } else {
        router.push({ name: "Home" });
      }
      console.log("Login", res);
    };

    const validHandler = (e) => {
      if (e.keyCode === 13 && state.email && state.pwd) {
        loginHandler();
      } else if (e.keyCode === 13 && !state.email && state.pwd) {
        state.email = "";
        state.userEl.focus();
      } else if (e.keyCode === 13 && state.email && !state.pwd) {
        state.pwd = "";
        state.pwdEl.focus();
      }
    };

    if (auth.state.token) {
      router.push({ name: "Home" });
    }

    return {
      ...toRefs(state),
      validHandler,
      loginHandler,
      valid,
    };
  },
};
</script>

<style scoped>
.backdrop {
    width: 100%;
    height: 100%;
    background-color: #FFB7C5;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    overflow: auto;
    position: relative;
    flex-direction: column;
    text-align: center;
}
.modal {
    width: 400px;
    height: 400px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    position: absolute;
    box-shadow: 0px 0px 3px 0px #98ade7;
}
.header {
    font-family: sans-serif;
    text-align: center;
    font-size: 1rem;
    color: black;
    padding-left: 10px;
    padding-right: 10px;
}
.divemail {
    display: flex;
    flex-direction: column;
}
.emailX {
    border: 1px solid #595a5a;
    border-radius: 5px;
    outline: none;
    font-family: sans-serif;
    font-size: 1rem;
    width: 250px;
    padding: 5px;
}
.passwordX {
    border: 1px solid #595a5a;
    border-radius: 5px;
    outline: none;
    font-family: sans-serif;
    font-size: 1rem;
    width: 250px;
    padding: 5px;
}
.forgot {
    font-family: sans-serif;
    font-size: 0.8rem;
    color: #000000;
    position: absolute;
    text-decoration: underline #ff5174;
    font-weight: bold;
    margin-top: -7px;
    margin-left: 7px;
}
.entrar {
    border: none;
    border-radius: 5px;
    outline: none;
    font-family: sans-serif;
    font-size: 1rem;
    background-color: #595a5a;
    color: #fff;
    width: 100px;
    padding: 10px;
    cursor: pointer;
}
.cadastre {
    font-family: sans-serif;
    font-size: 1rem;
    color: #000000;
    text-decoration: none;
}
.crie {
    color: #ff5174;
    font-weight: bold;
    font-size: 1rem;
}
.error-user {
    color: red;
    font-size: 0.8rem;
    font-family: sans-serif;
    display: flex;
    justify-content: flex-start;
}
</style>
