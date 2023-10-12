import { styled } from "styled-components";
import logo from "../imgs/logo.png";
import {
    Home, ExploreOutlined, SubscriptionsOutlined, VideoLibraryOutlined, HistoryOutlined, LibraryMusicOutlined, SportsBasketballOutlined, SportsEsportsOutlined, MovieCreationOutlined, ArticleOutlined, LiveTvOutlined, SettingsOutlined, OutlinedFlagOutlined, HelpOutlineOutlined, SettingsBrightnessOutlined, AccountCircleOutlined
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1.1;
    background-color: ${({ theme }) => theme.bgLight};
    height: 100vh;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
    overflow-y: scroll; 
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.soft}; 
    }

`
const Wrapper = styled.div`
    padding: 18px 20px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5;
    font-weight: bold;
    margin-bottom: 20px;
`
const Img = styled.img`
    height: 25px;
    margin-right: 5px;
`

const Items = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 7px 0px;
    cursor: pointer;
    &:hover{
        background-color: ${({ theme }) => theme.soft};
    }
`

const Hr = styled.hr`
    margin: 10px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`

const Login = styled.div`
    display: flex;
    flex-direction: column;
`

const Button = styled.button`
    margin: 8px 0px 0px 0px;
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

export default function Menu({ darkMode, setDarkMode }) {
    return (
        <Container>
            <Wrapper>
                <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo>
                        <Img src={logo} />
                        Youtube
                    </Logo>
                </Link>
                <Items>
                    <Home />Home
                </Items>
                <Link to="/trends" style={{ textDecoration: "none", color: "inherit" }}>
                    <Items>
                        <ExploreOutlined />Explore
                    </Items>
                </Link>
                <Link to="/subscriptions" style={{ textDecoration: "none", color: "inherit" }}>
                    <Items>
                        <SubscriptionsOutlined />Subscriptions
                    </Items>
                </Link>
                <Hr />
                <Items>
                    <VideoLibraryOutlined />Library
                </Items>
                <Items>
                    <HistoryOutlined />History
                </Items>
                <Hr />
                <Login>
                    Sign in to like, comment and subscribe.
                    <Link to="/signin" style={{ textDecoration: "none" }}>
                        <Button><AccountCircleOutlined />SIGN IN</Button>
                    </Link>
                </Login>
                <Hr />
                <Items>
                    <LibraryMusicOutlined />Music
                </Items>
                <Items>
                    <SportsBasketballOutlined />Sports
                </Items>
                <Items>
                    <SportsEsportsOutlined />Gaming
                </Items>
                <Items>
                    <MovieCreationOutlined />Movies
                </Items>
                <Items>
                    <ArticleOutlined />News
                </Items>
                <Items>
                    <LiveTvOutlined />Live
                </Items>
                <Hr />
                <Items>
                    <SettingsOutlined />Settings
                </Items>
                <Items>
                    <OutlinedFlagOutlined />Report
                </Items>
                <Items>
                    <HelpOutlineOutlined />Help
                </Items>
                <Items onClick={() => setDarkMode(!darkMode)}>
                    <SettingsBrightnessOutlined />{darkMode ? "Light" : "Dark"} Mode
                </Items>
            </Wrapper>
        </Container>
    )
}
