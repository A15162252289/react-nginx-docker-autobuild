import styled from "styled-components/macro";
import avatar from "../../assets/images/homepage/pic-1.png";
const Wrapper=styled.div`
    width:100%;
    height:321px;
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
    padding:0px 185px;
    box-sizing:border-box;
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
`
export default function Members() {
    return <Wrapper>

        <BottomWrapper>
            <CardWrapper>
                <TopAvatar></TopAvatar>
                <BottomInfo></BottomInfo>
            </CardWrapper>
            <CardWrapper>
                <TopAvatar></TopAvatar>
                <BottomInfo></BottomInfo>
            </CardWrapper>
            <CardWrapper>
                <TopAvatar></TopAvatar>
                <BottomInfo></BottomInfo>
            </CardWrapper>
            
        </BottomWrapper>
    </Wrapper>
}