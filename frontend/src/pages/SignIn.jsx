import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 50px);
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLight};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`;

const Title = styled.h1`
    
`

const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 200;
`

const Input = styled.input`
    padding: 8px 10px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 5px;
    background-color: transparent;
    color: ${({ theme }) => theme.text}
`

const Button = styled.button`
    margin: 8px;
    padding: 10px 20px;
    width: 100px;
    border: 3px solid ${({ theme }) => theme.soft};
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

const More = styled.div`
    
`

export default function SignIn() {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <SubTitle>sign in to like and subscribe</SubTitle>
                <Input placeholder='Username' />
                <Input type="password" placeholder='Password' />
                <Button>Sign In</Button>
                <Title>Or</Title>
                <Input placeholder='Username' />
                <Input placeholder='Email' type="email" />
                <Input type="password" placeholder='Password' />
                <Button>Sign Up</Button>
            </Wrapper>
        </Container>
    )
}
