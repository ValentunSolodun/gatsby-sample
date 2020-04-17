import React, { useEffect, useState } from "react"
import axios from "axios"
import { Button, Checkbox, Form } from "semantic-ui-react"
import { navigate } from "@reach/router"
import { Container } from "semantic-ui-react"
import {register} from "../actions"

export default () => {

  const [RegisterInputs, setLoginInputs] = useState({ name: "", email: "", password: "" })
  const setName = (name) => setLoginInputs({ ...RegisterInputs, name })
  const setEmail = (email) => setLoginInputs({ ...RegisterInputs, email })
  const setPassword = (password) => setLoginInputs({ ...RegisterInputs, password })

  const handlerRegister = () => {
    register(RegisterInputs);
  }

  return (
    <Container>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input defaultValue={RegisterInputs.name} onInput={(e) => setName(e.target.value)} placeholder='Name'/>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input defaultValue={RegisterInputs.email} onInput={(e) => setEmail(e.target.value)} placeholder='Email'/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input defaultValue={RegisterInputs.password} onInput={(e) => setPassword(e.target.value)} placeholder=''
                 type='password'/>
        </Form.Field>
        <Button type='submit' onClick={handlerRegister}>Submit</Button>
      </Form>
    </Container>
  )
};
