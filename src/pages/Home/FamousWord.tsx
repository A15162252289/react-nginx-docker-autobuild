import { LeftArrowBT, RightArrowBT } from "components/Arrow";
import styled from "styled-components/macro";
import {Text} from 'rebass'
const Wrapper=styled.div`
    width:100%;
    padding:51px 32px;
    display:flex;
    justify-content:space-between;
    box-sizing:border-box;
    background: ${({theme})=>theme.bg2};
    margin-top:80px;
`

const Word=styled(Text)`
    width: 534px;
    font-family: STHeitiSC-Light;
    font-size: 16px;
    color: ${({theme})=>theme.text2};
    letter-spacing: 0;
    text-align: justify;
    line-height: 22px;
    font-weight: 200;
`   
export default function  FamousWord(){
    return <Wrapper>
        <LeftArrowBT/>
        <Word>Morbi pretium nulla vel risus pretium porttitor. Ut dictum nulla quis mauris gravida, ac lobortis enim lacinia. </Word>
        <RightArrowBT></RightArrowBT>
    </Wrapper>
}
