import { LeftArrowBT, RightArrowBT } from "components/Arrow";
import styled from "styled-components/macro";
import {Text} from 'rebass'
const Wrapper=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin-top:80px;
    align-items:center;
`
const RightWrapper=styled.div`
    display:grid;
    width:100%;
    height: 73px;
    grid-column-gap: 25px;
    grid-template-columns: repeat(6,1fr);
    margin-top:32px;
`
const Item=styled.div`
    background: rgba(255,255,255,0.13);
    border-radius: 8px;
    height:100%;
    background-image:url('');

`
const Word=styled(Text)`
    height: 32px;
    font-family: STHeitiSC-Medium;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
`   
export default function  Partner(){
    return <Wrapper>
        <Word>合作伙伴</Word>
        <RightWrapper>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </RightWrapper>

    </Wrapper>
}
