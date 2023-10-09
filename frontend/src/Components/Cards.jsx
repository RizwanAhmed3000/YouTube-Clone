import { Link } from "react-router-dom";
import { styled } from "styled-components"

const Container = styled.div`
    width: 300px;
    margin-bottom: 40px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: grey;
`;

const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`;

const ChannelImage = styled.img`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: grey;
`;

const TextContaner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
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

export default function Cards() {
    return (
        <Link to='/video/test' style={{ textDecoration: "none" }}>
            <Container>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOePNWT93vwpHCtezIGfxwV3MdNZIoqKa-fg&usqp=CAU" />
                <Details>
                    <ChannelImage src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png" />
                    <TextContaner>
                        <Title>New video</Title>
                        <ChannelName>my channel</ChannelName>
                        <Info>90k 3 days ago</Info>
                    </TextContaner>
                </Details>
            </Container>
        </Link>
    )
}
