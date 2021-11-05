import styled from "styled-components/macro";
import {Text} from "rebass"
import {} from "theme/components"
import { SocialLinkBtn } from "components/LinkBtn";
const FooterWrapper = styled.div`
    width:100%;
    height: 403px;
    background-color:${({theme})=>theme.bg2};
    grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
    padding:80px 135px 40px 135px;
    box-sizing:border-box;
`

const FooterTop=styled.div`
    height:216px;
    border-bottom: 1px solid rgb(266,255,255,0.1);
    padding-bottom:40px;
    box-sizing:border-box;
    display:flex;
`
const LinkText=styled(Text)`
    height: 16px;
    opacity: 0.6;
    font-family: STHeitiSC-Light;
    font-size: 16px;
    line-height: 16px;
    font-weight: 200;
    padding-top:16px;
    white-space:nowrap;
    box-sizing:content-box !important;
`
const LogoText=styled(Text)`
    height: 48px;
    font-family: DIN-Bold;
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
    white-space:nowrap;
`
const TopLeftWrapper=styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:start;
`
const TopRightWrapper=styled.div`
    height:100%;
    display:flex;
    justify-content:space-between;
    padding:24px 106px 0 106px;
    box-sizing:border-box
`
const SingleItem=styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-left:100px
`
const SingleItemTitle=styled.div`
    white-space:nowrap;
    height: 18px;
    font-family: STHeitiSC-Medium;
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
`
const SocialItems=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:start;
    margin-left:100px
`
const SocialIconWrapper=styled.div`
    display:flex;
    width:160px;
    justify-content:space-between;
    margin-top:24px;
`
const OwnerTextWrapper=styled.div`
    position:absolute;
    bottom:0;
    left:0;
    display:flex
`
const OwnerTextLeft=styled(Text)`
    height: 32px;
    font-family: DIN-Bold;
    font-size: 18px;
    color: rgba(255,255,255,0.50);
    line-height: 32px;
    font-weight: 700;
`
const OwnerTextRight=styled(Text)`
    padding-left:10px;
    height: 32px;
    font-family: PingFangTC-Semibold;
    font-size: 18px;
    color: rgba(255,255,255,0.50);
    line-height: 32px;
    font-weight: 600;
`
const FooterBottom=styled.div`
    height:calc(100% - 216px);
    position:relative;
`
const ContentWrapper=styled.div`
    display:grid;
    width:100%;
    height:100%;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`

const Head=styled(Text)`
    text-align:center;
`
const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;

  :hover {
    text-decoration: none;
    opacity: 0.7;
  }
  :focus {
    outline: none;
    text-decoration: none;
  }

  :active {
    text-decoration: none;
  }
`
const AboutMe=()=>{
    return (
        <ContentWrapper>
            <Head>Gamer Future</Head>
            <Link>liaojie</Link>
            <Link>liaojie</Link>
            <Link>liaojie</Link>
            <Link>liaojie</Link>
        </ContentWrapper>
    )
}
export default function Footer() {
    return (
        <FooterWrapper>
            <FooterTop>
                <TopLeftWrapper>
                    <LogoText>GAMER FUTURE</LogoText>
                    <LinkText>关于我们</LinkText>
                    <LinkText>关于我们</LinkText>
                </TopLeftWrapper>
                <TopRightWrapper>
                    <SingleItem>
                        <SingleItemTitle>如何开始</SingleItemTitle>
                        <LinkText>关于我们</LinkText>
                        <LinkText>关于我们</LinkText>
                        <LinkText>关于我们</LinkText>
                        <LinkText>关于我们</LinkText>
                    </SingleItem>
                    <SingleItem>
                        <SingleItemTitle>如何开始</SingleItemTitle>
                        <LinkText>关于我们</LinkText>
                        <LinkText>关于我们</LinkText>
                        <LinkText>关于我们</LinkText>
                        <LinkText>关于我们</LinkText>
                    </SingleItem>
                    <SingleItem>
                        <SingleItemTitle>如何开始</SingleItemTitle>
                        <LinkText>关于我们</LinkText>
                        <LinkText>关于我们</LinkText>
                        <LinkText>关于我们</LinkText>
                        <LinkText>关于我们</LinkText>
                    </SingleItem>
                    <SocialItems>
                        <SingleItemTitle>如何开始</SingleItemTitle>
                        <SocialIconWrapper>
                            <SocialLinkBtn social="facebook" color="W"></SocialLinkBtn>
                            <SocialLinkBtn social="twitter" color="W"></SocialLinkBtn>
                            <SocialLinkBtn social="ins" color="W"></SocialLinkBtn>
                        </SocialIconWrapper>  
                    </SocialItems>
                </TopRightWrapper>
            </FooterTop>
            <FooterBottom>
                <OwnerTextWrapper>
                    <OwnerTextLeft>@2021 GAMER FUTURE </OwnerTextLeft>
                    <OwnerTextRight> 版权所有</OwnerTextRight>
                </OwnerTextWrapper>
            </FooterBottom>
        </FooterWrapper>
    )
} 