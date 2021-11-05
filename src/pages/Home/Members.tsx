import styled from "styled-components/macro";
import avatar from "../../assets/images/homepage/pic-1.png";
import {Text} from "rebass";
import { SocialLinkBtn } from "components/LinkBtn";
const Wrapper=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin-top:80px;
    align-items:center;
`
const BottomWrapper=styled.div`
    width:270px;
    height:321px;
    position:relative;
    display:flex;
    width:100%;
    justify-content:space-between;
    padding:0px 57px;
    box-sizing:border-box;
    margin-top:40px;
`
const CardWrapper=styled.div`
    width:270px;
    height:321px;
    border-radius: 20px;
    position:relative;
`
const TopAvatar=styled.div`
    width: 120px;
    height: 120px;
    position:absolute;
    left:15px;
    top:0;
    background-image:url('${avatar}');
    z-index:2;
`
const BottomInfo=styled.div`
    width:270px;
    height:261px;
    background:${({theme})=>theme.bg2};
    position:absolute;
    bottom:0;
    border-radius: 20px;
    padding:92px 32px 32px 32px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
`
const TopTitle=styled(Text)`
    height: 32px;
    font-family: STHeitiSC-Medium;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
`
const InfoName=styled(Text)`
    height: 32px;
    font-family: STHeitiSC-Medium;
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
`
const InfoJob=styled(Text)`
    height: 32px;
    font-family: STHeitiSC-Medium;
    font-size: 18px;
    color: rgba(255,255,255,0.50);
    line-height: 32px;
    font-weight: 700;
`
const BottomSocialWrapper=styled.div`
    display:flex;
    width:160px;
    justify-content:space-between;
    margin-top:auto;
`
export default function Members() {
    return <Wrapper>
        <TopTitle>团队成员</TopTitle>
        <BottomWrapper>
            <CardWrapper>
                <TopAvatar></TopAvatar>
                <BottomInfo>
                    <InfoName>Beatriz Brito</InfoName>
                    <InfoJob>Science</InfoJob>
                    <BottomSocialWrapper>
                        <SocialLinkBtn social="facebook" color="Y"></SocialLinkBtn>
                        <SocialLinkBtn social="twitter" color="Y"></SocialLinkBtn>
                        <SocialLinkBtn social="ins" color="Y"></SocialLinkBtn>
                    </BottomSocialWrapper>
                </BottomInfo>
            </CardWrapper>
            <CardWrapper>
                <TopAvatar></TopAvatar>
                <BottomInfo>
                    <InfoName>Beatriz Brito</InfoName>
                    <InfoJob>Science</InfoJob>
                    <BottomSocialWrapper>
                        <SocialLinkBtn social="facebook" color="Y"></SocialLinkBtn>
                        <SocialLinkBtn social="twitter" color="Y"></SocialLinkBtn>
                        <SocialLinkBtn social="ins" color="Y"></SocialLinkBtn>
                    </BottomSocialWrapper>
                </BottomInfo>
            </CardWrapper>
            <CardWrapper>
                <TopAvatar></TopAvatar>
                <BottomInfo>
                    <InfoName>Beatriz Brito</InfoName>
                    <InfoJob>Science</InfoJob>
                    <BottomSocialWrapper>
                        <SocialLinkBtn social="facebook" color="Y"></SocialLinkBtn>
                        <SocialLinkBtn social="twitter" color="Y"></SocialLinkBtn>
                        <SocialLinkBtn social="ins" color="Y"></SocialLinkBtn>
                    </BottomSocialWrapper>
                </BottomInfo>
            </CardWrapper>
            
        </BottomWrapper>
    </Wrapper>
}