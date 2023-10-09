import { styled } from "styled-components"
import Cards from "../Components/Cards"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default function Home() {
    return (
        <Container>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </Container>
    )
}
