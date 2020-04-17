import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"
import { navigate } from "@reach/router"

export const changeToDo = (id, checked) => {
  return axios.put("http://localhost:3001/", {id, done: checked}, {headers:{token: localStorage.getItem('token')}}).catch(() => navigate('/login'));
};

export const removeTodo = (id) => {
  return axios.delete("http://localhost:3001/", {headers:{token: localStorage.getItem('token')}, params: { id }}).catch(() => navigate('/login'));
};

export const register = (RegisterInputs) => {
  axios.post("http://localhost:3001/users/register", RegisterInputs).then(() => navigate("/login"))
}

export const login = (loginInputs) => {
  axios.post('http://localhost:3001/users/login', loginInputs).then(response => {
    localStorage.setItem('token', response.data);
    navigate('/');
  });
}

export const getAllTodo = () => {
  return axios.get('http://localhost:3001/', {headers:{token: localStorage.getItem('token')}}).catch(() => navigate('/login'));
};
export const addTodo = (inputs) => {
  return axios.post('http://localhost:3001/', {name: inputs}, {headers:{token: localStorage.getItem('token')}})
}
