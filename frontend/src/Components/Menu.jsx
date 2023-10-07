import { styled } from "styled-components";
import logo from "../imgs/logo.png";
import {
    Home, ExploreOutlined, SubscriptionsOutlined, VideoLibraryOutlined, HistoryOutlined, LibraryMusicOutlined, SportsBasketballOutlined, SportsEsportsOutlined, MovieCreationOutlined, ArticleOutlined, LiveTvOutlined, SettingsOutlined, OutlinedFlagOutlined, HelpOutlineOutlined, SettingsBrightnessOutlined, AccountCircleOutlined
} from "@mui/icons-material";

const Container = styled.div`
    flex: 1.1;
    background-color: ${({ theme }) => theme.bgLight};
    height: 100%;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
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
                <Logo>
                    <Img src={logo} />
                    Youtube
                </Logo>
                <Items>
                    <Home />Home
                </Items>
                <Items>
                    <ExploreOutlined />Explore
                </Items>
                <Items>
                    <SubscriptionsOutlined />Subscriptions
                </Items>
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
                    <Button><AccountCircleOutlined />SIGN IN</Button>
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
                <Items onClick={()=> setDarkMode(!darkMode)}>
                    <SettingsBrightnessOutlined />Light Mode
                </Items>
            </Wrapper>
        </Container>
    )
}
