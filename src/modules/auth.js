import { reactive, readonly } from "vue";

const state = reactive({
  id: "",
  user: "",
  email: "",
  token: "",
});

const loadData = async () => {
  const data = localStorage.getItem("userLogged");
  if (data) {
    const user = JSON.parse(data);
    state.id = user.id;
    state.user = user.user;
    state.email = user.email;
    state.token = user.token;
  }
};

const dumpData = async (obj) => {
  localStorage.setItem("userLogged", JSON.stringify(obj));
};

const signup = async (user, email, password) => {
  const ListaUser = JSON.parse(localStorage.getItem("ListaUser") || "[]");
  if (ListaUser.find((u) => u.email === email)) {
    return "Email já cadastrado";
  }
  ListaUser.push({
    user,
    email,
    password,
  });
  localStorage.setItem("ListaUser", JSON.stringify(ListaUser));
  return "ok";
};

const login = async (email, password) => {
  const ListaUser = JSON.parse(localStorage.getItem("ListaUser") || "[]");
  const user = ListaUser.find((u) => u.email === email);
  if (email === user.email && password === user.password) {
    const token = Math.random().toString(36).substring(2, 15);
    localStorage.setItem("token", token);
    localStorage.setItem("userLogged", JSON.stringify(user));
    state.id = user.id;
    state.user = user.user;
    state.email = user.email;
    state.token = token;
    dumpData(state);
    return "ok";
  }
  return "Email ou senha incorretos";
};

export default function useAuth() {
  return readonly({
    state,
    loadData,
    login,
    signup,
  });
}
