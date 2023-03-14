import React, { useState } from 'react'
import { Box, Button, styled, TextField } from '@mui/material';
import axios from 'axios';




const Login = () => {

  const [user, setUser] = useState({ email: "", password: "" })



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setUser({ ...user, [name]: value })
    // console.log(user);
  }

  // login user 
  const loginUser = async (e) => {
    await axios.post("http://localhost:9000/login", user);
    console.log("users list => ", user);
    setUser({ email: "", password: "" })
    

  }



  return (
    <Component>
      <Box style={{ display: 'flex', height: '90%' }}>
        <Wraper>
          <TextField variant="standard" name='email' value={user.email} onChange={e => handleChange(e)} label="Enter Email" style={{ border: "none", background: 'transparent' }} />
          <TextField variant="standard" name='password' value={user.password} onChange={e => handleChange(e)} label="Enter Password" />
          <LoginBtn variant='contained' onClick={() => loginUser()}>Login</LoginBtn>
        </Wraper>
      </Box>
    </Component>
  )
}

export default Login
const Component = styled(Box)`
  height: 50vh;
  width: 77vh;
  margin: auto;
  margin-top: 73px;
  border: 1px solid lightgray;

`

const Wraper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 45px 35px;
    flex: 1;
    & > div ,& > button ,& >p{
        margin-top: 20px;
    }

`

const LoginBtn = styled(Button)`
    text-transform: none;
    background-color: #fB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;

`
