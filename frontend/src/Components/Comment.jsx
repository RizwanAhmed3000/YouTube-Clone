import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`
const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Name = styled.span`
    font-weight: 500;
`
const Date = styled.span`
    margin: 0px 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.textSoft};
`

const Text = styled.p`
    font-size: 14px;
`

export default function Comment() {
    return (
        <Container>
            <Avatar src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png" />
            <Details>
                <Name>Rizwan <Date>20 oct 2023</Date></Name>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos modi iusto voluptatem doloribus veniam adipisci, consequuntur vero omnis ullam, pariatur nobis perferendis maiores accusamus alias quisquam dolore excepturi at ipsa?</Text>
            </Details>
        </Container>
    )
}
