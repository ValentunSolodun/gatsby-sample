import React, { useEffect, useState } from "react"
import axios from 'axios';
import { Button, Checkbox, Form } from "semantic-ui-react"
import { navigate } from "@reach/router"
import { Container } from "semantic-ui-react"
import {login} from "../actions"

export default () => {

  const [loginInputs, setLoginInputs] = useState({name: '', email: '', password: ''});
  const setEmail = (email) => setLoginInputs({...loginInputs, email});
  const setPassword = (password) => setLoginInputs({...loginInputs, password});

  const handlerLogin = () => {
    login(loginInputs);
  }

  return (
    <Container>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input defaultValue={loginInputs.email} onInput={(e) => setEmail(e.target.value)} placeholder='Email'/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input defaultValue={loginInputs.password} onInput={(e) => setPassword(e.target.value)} placeholder='' type='password'/>
        </Form.Field>
        <Button type='submit' onClick={handlerLogin}>Submit</Button>
      </Form>
    </Container>
  )
};
