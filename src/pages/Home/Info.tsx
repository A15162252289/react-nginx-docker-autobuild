import styled from "styled-components/macro";
import NewsBar from "./NewsBar";
import ReadMore from "./ReadMore";
import InvestBack from '../../assets/images/homepage/投资回报-背景图.png'
import BinanceList from '../../assets/images/homepage/上线币安- banner.png'
import {Text} from 'rebass'
import ThemeProvider from "theme";
import useTheme from '../../hooks/useTheme';
import {NFTInfo} from './NFTInfo'
import FamousWord from "./FamousWord";
import Partner from "./Partner";
import Members from "./Members";
const InfoWrapper = styled.div`
    width:100%;
    height:100%;
    padding:24px 128px;
    // background: 0% 0% / 1440px 6476px no-repeat rgb(255, 255, 255);
    background-color:${({ theme }) => theme.bg1};
    box-sizing:border-box;
`
const TopInfoWrapper=styled.div`
    background-color:${({ theme }) => theme.bg2};
    border-radius: 20px;
    height: 216px;
    box-sizing:border-box;
    padding:32px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

`
const InvestInfoWrapper=styled.div`
    position:relative;
    margin-top:80px;
    box-sizing:border-box;
    width:100%;
`
const CardWrapper=styled.div`
    display:flex
`
const CardLeft=styled.div`
    width:calc(50% + 59px);
    height: 498px;
    background-image:url(${InvestBack});
    background-size:100% 100%;
    border-radius: 20px;
    padding:80px 187px 80px 40px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const RightTitle=styled(Text)`
    height: 32px;
    font-family: STHeitiSC-Medium;
    font-size: 18px;
    color: rgba(255,255,255,0.67);
    line-height: 32px;
    font-weight: 700;
`
const CardRight=styled.div`
    width:calc(50% + 59px);
    height: 498px;
    background-size:100% 100%;
    background:${({theme})=>theme.bg2};
    margin-top:200px;
    margin-left:-50px;
    border-radius: 20px;
    box-sizing:border-box;
    padding:80px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const CardWrapperGrid=styled.div`
    display:grid;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    height: 677px;
    width:100%;
    grid-template-columns: 1fr 1.21fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "news coinInfo"
        "price coinInfo";

`
const CardGridNews=styled.div`
    width:100%;
    height: 100%;
    background:url('${BinanceList}') no-repeat center 0px;
    background-size:100% 100%;
    border-radius: 20px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    grid-area:news;
`
const CardGridPrice=styled.div`
    width:100%;
    height: 100%;
    background:url('${BinanceList}') no-repeat center 0px;
    background-size:100% 100%;
    border-radius: 20px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    grid-area:price;
`
const CardGridCoinInfo=styled.div`
    width:100%;
    height: 100%;
    background-color:grey;
    background-size:100% 100%;
    border-radius: 20px;
    box-sizing:border-box;
    padding:109px 45px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    grid-area:coinInfo;
`
const TextItem=(props:{title:string,info:string})=>{
 return <div style={{height:'86px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
     <Text style={{width: '126px',height: '18px',fontFamily: 'STHeitiSC-Medium',fontSize: '18px',lineHeight: '18px',textShadow: '0 2px 4px rgba(0,0,0,0.76)',fontWeight: 700,}}>{props.title}</Text>
     <Text style={{fontFamily: 'STHeitiSC-Light',fontSize: '16px',lineHeight: '26px',textShadow: '0 2px 4px rgba(0,0,0,0.76)',fontWeight: 200,}}>{props.info}</Text>
 </div>
}
const InvestInfo=()=>{
    
    return <InvestInfoWrapper>
        <Text style={{height: '32px',fontFamily: 'STHeitiSC-Medium',fontSize: '28px',lineHeight: '32px',fontWeight: 700,paddingBottom:'28px',boxSizing:'content-box'}}>
            投资与回报
        </Text>
        <CardWrapper>
            <CardLeft>
                <TextItem title={'优质的拍卖流程'} info={'一个文明的创建，不仅仅是回报，还有更多的游戏体验和创造价值的机会。'}></TextItem>
                <TextItem title={'优质的拍卖流程'} info={'一个文明的创建，不仅仅是回报，还有更多的游戏体验和创造价值的机会。'}></TextItem>
                <TextItem title={'优质的拍卖流程'} info={'一个文明的创建，不仅仅是回报，还有更多的游戏体验和创造价值的机会。'}></TextItem>
            </CardLeft>
            <CardRight>
                <RightTitle>平台币交易自由</RightTitle>
                <TextItem title={'优质的拍卖流程'} info={'一个文明的创建，不仅仅是回报，还有更多的游戏体验和创造价值的机会。'}></TextItem>
                <TextItem title={'优质的拍卖流程'} info={'一个文明的创建，不仅仅是回报，还有更多的游戏体验和创造价值的机会。'}></TextItem>
            </CardRight>
        </CardWrapper>
    </InvestInfoWrapper>
}
const WhatisInfo=()=>{
    const theme=useTheme()
    return <InvestInfoWrapper>
        <Text style={{height: '32px',fontFamily: 'STHeitiSC-Medium',fontSize: '28px',lineHeight: '32px',fontWeight: 700,paddingBottom:'28px',boxSizing:'content-box'}}>
            什么是bugyellow
        </Text>
        <CardWrapperGrid>
            <CardGridNews/>
            <CardGridPrice/>
            <CardGridCoinInfo>
                <Text style={{height: '22px',fontFamily: 'PingFangSC-Semibold',fontSize: '16px',color:theme.bg3,fontWeight: 600}}>我们的算力币</Text>
                <Text style={{fontFamily: 'PingFangSC-Semibold',fontSize: '40px',letterSpacing: '-0.69px',lineHeight: '64px',fontWeight: 600,}}>GMEER FUTURE</Text>
                <Text style={{fontSize: '16px',color: '#DEDEDE',letterSpacing: 0,textAlign: 'justify',lineHeight: '32px',fontWeight: 400,}}>MATRIFI 是一个由社区驱动的元宇宙社交矩阵，基于DID技术，打造用户去中心化数字身份名片，发行下一代元宇宙社交基建单元~可生长、合成、拆卸的价值NFT，通过NFT组件在游戏里构建社交网络。</Text>
            </CardGridCoinInfo>
        </CardWrapperGrid>
    </InvestInfoWrapper>
}
export default function Info() {
    return (
        <InfoWrapper>
            <TopInfoWrapper>
                <NewsBar></NewsBar>
                <ReadMore></ReadMore>
            </TopInfoWrapper>
            <InvestInfo></InvestInfo>
            <WhatisInfo></WhatisInfo>
            <NFTInfo type={'minted'}></NFTInfo>
            <NFTInfo type={'sold'}></NFTInfo>
            <FamousWord></FamousWord>
            <Partner></Partner>
            <Partner></Partner>
            <Members></Members>
        </InfoWrapper>
    )
}