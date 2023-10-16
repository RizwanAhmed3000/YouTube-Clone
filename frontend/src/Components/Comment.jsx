import axios from "axios"
import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { format } from "timeago.js"

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

export default function Comment({ comment }) {

    const [channel, setChannel] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`/user/find/${comment?.userId}`)
            // console.log(res?.data?.data)
            setChannel(res?.data?.data)
        }
        fetchUsers()
    }, [comment?.userId])


    return (
        <Container>
            <Avatar src={channel?.profilePicture ? channel?.profilePicture : "https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"} />
            <Details>
                <Name>{channel?.userName} <Date>{format(comment?.createdAt)}</Date></Name>
                <Text>{comment?.description}</Text>
            </Details>
        </Container>
    )
}
