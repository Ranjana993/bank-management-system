import { Box, Button, Dialog, styled, TextField } from '@mui/material'
import axios from 'axios';
import { useState } from 'react';


const AddDialog = ({ open, setOpen }) => {
    const [user, setUser] = useState({ name: "", fatherName: "", accountNo: "", email: "", password: "", phone: "", uidNo: "", cifNo: "" })



    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setUser({ ...user, [name]: value })

    }

    const handleClose = () => {
        setOpen(false)
    }

    // AddingUser 
    const AddingUser = async (e) => {
        handleClose()
        await axios.post("http://localhost:9000/adduser", user);
        setUser({ name: "", fatherName: "", accountNo: "", email: "", password: "", phone: "", uidNo: "", cifNo: "" })
        
    }

    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{ dialogStyle ,  sx: { minWidth: 620  } }}   >
            <Components>
                <Box style={{ display: 'flex', height: '100%' , width:'100%' }}>
                    <Wraper>
                        <TextField variant="standard" name='name' value={user.name} onChange={e => handleChange(e)} label="Enter Your Name" />
                        <TextField variant="standard" name='fatherName' value={user.lastName} onChange={e => handleChange(e)} label="Enter fatherName " />
                        <TextField variant="standard" name='accountNo' value={user.accountNo} onChange={e => handleChange(e)} label="Enter accountNo " />
                        <TextField variant="standard" name='cifNo' value={user.cifNo} onChange={e => handleChange(e)} label="Enter cifNo " />
                        <TextField variant="standard" name='uidNo' value={user.uidNo} onChange={e => handleChange(e)} label="Enter uidNo " />
                        <TextField variant="standard" name='email' value={user.email} onChange={e => handleChange(e)} label="Enter Email" />
                        <TextField variant="standard" name='password' value={user.password} onChange={e => handleChange(e)} label="Enter Password" />
                        <TextField variant="standard" name='phone' value={user.phone} onChange={e => handleChange(e)} label="Enter Phone" />
                        <LoginBtn onClick={AddingUser} variant="contained">SignUp</LoginBtn>
                    </Wraper>
                </Box>
            </Components>
        </Dialog>
    )
}

export default AddDialog

const dialogStyle = {
    height: "100%",
    margin: '10px',
    overflow: 'hidden',
    // width: "50%",
    // maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overFlow: "hidden",
    borderRadius: 0,
    // background:"red",
    zIndex: -1,
}
const Components = styled(Box)`
    display: flex;
    height: 100%;
    overflow-y: hidden
    /* width: 97vh; */

`
const Wraper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
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
