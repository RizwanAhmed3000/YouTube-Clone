import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";
import { styled } from "styled-components"

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.bgLight};
    height: 50px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0px 20px;
`;

const Search = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px auto;
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px;
    width: 40%;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    background-color: transparent;
    width: 100%;
`;

const Button = styled.button`
    margin: 8px;
    padding: 5px;
    border: 3px solid #2d6d99;
    background-color: transparent;
    color: #2d6d99;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search" />
                    <SearchOutlined />
                </Search>
                <Button><AccountCircleOutlined />SIGN IN</Button>
            </Wrapper>
        </Container>
    )
}
