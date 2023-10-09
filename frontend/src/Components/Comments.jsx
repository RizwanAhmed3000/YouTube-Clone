import { styled } from "styled-components"
import Comment from "./Comment"

const Container = styled.div`
    
`

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    width: 100%;
    outline: none;
    padding: 5px 10px;
`

export default function Comments() {
    return (
        <Container>
            <NewComment>
                <Avatar src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png" />
                <Input placeholder="Add comments" />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}
