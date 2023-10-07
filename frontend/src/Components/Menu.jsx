import { styled } from "styled-components";
import logo from "../imgs/logo.png";
import {
    Home, ExploreOutlined, SubscriptionsOutlined, VideoLibraryOutlined, HistoryOutlined, LibraryMusicOutlined, SportsBasketballOutlined, SportsEsportsOutlined, MovieCreationOutlined, ArticleOutlined, LiveTvOutlined, SettingsOutlined, OutlinedFlagOutlined, HelpOutlineOutlined, SettingsBrightnessOutlined
} from "@mui/icons-material";

const Container = styled.div`
    flex: 1;
    background-color: #1e1d1e;
    height: 100%;
    color: white;
    font-size: 15px;
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
    border: 0.5px solid #373737;
`

export default function Menu() {
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
                <Items>
                    <SettingsBrightnessOutlined />Light Mode
                </Items>
            </Wrapper>
        </Container>
    )
}
