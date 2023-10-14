import { useEffect } from "react";
import { useState } from "react"
import { styled } from "styled-components"
import Cards from "../Components/Cards"
import axios from "axios"
import { useSelector } from "react-redux";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default function Home({ type }) {

    const [videos, setVideos] = useState([]);
    console.log(type);

    const { currentUser } = useSelector(state => state.user)


    useEffect(() => {

        const fetchVideos = async () => {
            const res = await axios.get(`http://localhost:8800/videos/${type === 'subscriber' ? (type + "/" + currentUser?._id) : type}`);
            // console.log(res.data.data, "==> data from api");
            setVideos(res.data.data)
        }
        fetchVideos();
    }, [type])

    return (
        <Container>
            {
                videos.map((video) => (
                    <Cards key={video._id} video={video} />
                ))
            }
        </Container>
    )
}
