<template>
    <div class="backdrop">
        <div class="modal">
            <div class="header">
                <h3>Preencha os dados abaixo para criar sua conta no Sakura Petal</h3>
                <div class="sucss" v-if="errorField === 'Sucss'">{{errorMsg}}</div>
            </div>
            <div class="divemail">
                <input ref="nameEl" v-model="name" autofocus class="emailX" type="text"
                @keyup="validHandler" placeholder="Digite o seu nome">
                <div class="error-user" v-if="errorField === 'Name'">{{errorMsg}}</div>
            </div>
            <div class="divemail">
                <input ref="userEl" v-model="user" autofocus class="emailX" type="text"
                @keyup="validHandler" placeholder="Digite o seu e-mail">
                <div class="error-user" v-if="errorField === 'User'">{{errorMsg}}</div>
            </div>
            <div>
                <input ref="pwdEl" v-model="pwd" class="passwordX"
                type="password" placeholder="Senha" @keyup="validHandler">
                <div class="error-user" v-if="errorField === 'Pwd'">{{errorMsg}}</div>
            </div>
            <div class="confirmPwdEl">
                <input ref="confirmPwdEl" v-model="confirmPwd" class="passwordX" type="password"
                placeholder="Confirme a senha">
                <div class="error-user" v-if="errorField === 'ConfirmPwd'">{{errorMsg}}</div>
            </div>
            <div>
                <button class="entrar" @click="signupHandler">Cadastrar</button>
            </div>
            <div>
                <router-link class="cancelar" to="/">
                    Cancelar
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import useAuth from "@/modules/auth";

export default {
  name: "Signup",
  setup() {
    const router = useRouter();
    const auth = useAuth();
    const state = reactive({
      user: "",
      pwd: "",
      confirmPwd: "",
      name: "",
      sucss: "",
      pwdEl: null,
      confirmPwdEl: null,
      userEl: null,
      nameEl: null,
      errorField: null,
      errorMsg: "",
    });

    const valid = () => {
      if (state.name.length < 3) {
        state.errorField = "Name";
        state.errorMsg = "O nome deve ter no mínimo 3 caracteres";
        return false;
      }
      if (!state.user) {
        state.errorField = "User";
        state.errorMsg = "Por favor, digite o seu e-mail";
        state.userEl.focus();
        return false;
      }
      if (state.pwd.length < 6) {
        state.errorField = "Pwd";
        state.errorMsg = "Insira no mínimo 6 caracteres";
        state.pwdEl.focus();
        return false;
      }
      if (state.confirmPwd !== state.pwd) {
        state.errorField = "ConfirmPwd";
        state.errorMsg = "As senhas não conferem";
        state.confirmPwdEl.focus();
        return false;
      }
      return true;
    };

    const signupHandler = () => {
      if (!valid()) return;
      if (valid()) {
        auth.signup(state.name, state.user, state.pwd);
      }
      console.log("Cadastrando...");
      state.errorField = "Sucss";
      state.errorMsg = "Cadastrando usuário...";
      setTimeout(() => {
        router.push({ name: "Login" });
      }, 2500);
    };

    const validHandler = (e) => {
      if (e.keyCode === 13 && state.user && state.pwd && state.confirmPwd && state.name) {
        signupHandler();
      } else if (e.keyCode === 13) {
        state.userEl.focus();
      }
    };

    return {
      ...toRefs(state),
      validHandler,
      signupHandler,
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
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
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
.cancelar {
    font-family: sans-serif;
    font-size: 1rem;
    color: #000000;
    text-decoration: none;
    font-weight: bold;
}
.crie {
    color: #ff5174;
    font-weight: bold;
    font-size: 1rem;
}
.eye {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 72px;
    margin-top: 6px;
    cursor: pointer;
}
.error-user {
    color: red;
    font-size: 0.8rem;
    font-family: sans-serif;
    display: flex;
    justify-content: flex-start;
}
.sucss {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    width: 255px;
    text-align: center;
    font-family: sans-serif;
    color: #00bb00;
    font-weight: bold;
    border-radius: 5px;
    background-color: #bbffbe;
}
</style>
