import { Box, styled } from '@mui/material'
import React, { useState } from 'react'
import AddDialog from './AddDialog'

const Header = () => {
    const [open , setOpen] = useState(false)
    return (
        <Container>
            <Wrapper>
                <Box variant='contained' onClick={() => setOpen(true)} style={{ textDecoration: 'none', color: 'inherit' }} > Add user</Box>
                <InputBox placeholder='Search user' />
            </Wrapper>
            <AddDialog open={open} setOpen={setOpen}/>
        </Container>
    )
}

export default Header

const Container = styled(Box)`
    height: 50px;
    background: darkgreen;
    color: white;
    top: 0;
    left: 0;
    position: sticky;
    margin-left:auto;
    display: flex;
    justify-content: end;
    

`
const Wrapper = styled(Box)`
    display: flex;
    padding: 5px;
    align-items: center;
    margin-right: 23px;
    font-weight: 400;
    text-transform: capitalize;
    font-size: 16px;
    & > div{
        margin-right: 12px;
    }
`
const InputBox = styled('input')({
    background: 'transparent',
    border: '1px solid white',
    borderRadius: '22px ',
    textAlign: 'center',
    width: '65%',
    color: 'white',
    height: '35px'



})