import { Link } from "react-router-dom";
import { styled } from "styled-components"

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "300px"};
    margin-bottom: ${(props) => props.type === "sm" ? "10px" : "40px"};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`;

const Image = styled.img`
    width: ${(props) => props.type === "sm" ? "168px" : "100%"};
    height: ${(props) => props.type === "sm" ? "94px" : "202px"};
    background-color: grey;
    object-fit: cover;
    flex: 1;
`;

const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type !== "sm" && "16px"};
    gap: 12px;
    flex: 1;
`;

const ChannelImage = styled.img`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: grey;
    display: ${(props) => props.type === "sm" && "none"};
`;

const TextContaner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${(props) => props.type === "sm" && "100%"};
`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    /* word-break: keep-all; */
    word-wrap: break-word;
`;

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 3px 0px;
`;

const Info = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`

export default function Cards({ type }) {
    return (
        <Link to='/video/test' style={{ textDecoration: "none" }}>
            <Container type={type}>
                <Image type={type} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOePNWT93vwpHCtezIGfxwV3MdNZIoqKa-fg&usqp=CAU" />
                <Details type={type}>
                    <ChannelImage type={type} src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png" />
                    <TextContaner type={type}>
                        <Title>New video</Title>
                        <ChannelName>my channel</ChannelName>
                        <Info>90k 3 days ago</Info>
                    </TextContaner>
                </Details>
            </Container>
        </Link>
    )
}
