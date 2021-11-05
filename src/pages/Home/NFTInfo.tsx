import styled from "styled-components/macro";
import {Text} from 'rebass'
import useTheme from '../../hooks/useTheme';
import mintedImageUrl from '../../assets/images/homepage/铸造 好的NFT-1.png'
import StyledNavLink from 'components/LinkBtn';
const Title=styled(Text)`
    height: 32px;
    font-family: STHeitiSC-Medium;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
`
const NFTInfoWrapper=styled.div`
    position:relative;
    margin-top:80px;
    box-sizing:border-box;
    width:100%;
    display:flex;
    flex-direction:column;
`
const Notice=styled.div`
    height: 16px;
    font-family: STHeitiSC-Light;
    font-size: 16px;
    text-align: left;
    line-height: 16px;
    font-weight: 200;
    margin-top:24px;
`

const NoticeLink=styled.a`
    cursor: pointer;
    color: ${({ theme }) => theme.bg3};
    height: 16px;
    font-family: STHeitiSC-Medium;
    font-size: 16px;
    text-align: center;
    line-height: 16px;
    font-weight: 700;
    :hover {
    text-decoration: underline;
    }

    :focus {
    outline: none;
    text-decoration: underline;
    }

    :active {
    text-decoration: none;
    }
`
const MintedWrapper=styled.div`
    display:flex;
    // grid-template-columns: repeat(4,1fr);
    width:100%;
    overflow:hidden;
    margin-top:40px;
`
const CardMintedWrapper=styled.div`
    box-sizing:border-box;
    width: 278px;
    height:391px;
    background: ${({theme})=>theme.bg2};
    border-radius: 20px;
    padding:0 16px 24px 16px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-right:24px;
`
const CardTitle=styled(Text)`
    height: 18px;
    font-family: STHeitiSC-Medium;
    font-size: 18px;
    line-height: 18px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.76);
    font-weight: 700;
    
    // margin-top:24px !important;
`
const CardDetail=styled(Text)`
    width: 100%;
    font-family: STHeitiSC-Light;
    font-size: 16px;
    color: ${({theme})=>theme.text2};
    letter-spacing: 0;
    text-align: justify;
    line-height: 22px;
    font-weight: 200;
    margin-top:14px !important;
`
const GoToStore=styled(StyledNavLink)`
    align-self:end !important;
`

const SoldCardBig=styled.div`
    width:100%;
    height:100%;
    grid-area:big;
    border-radius: 20px;
    box-sizing:border-box;
    padding:46px 17px 42px 17px;
    background:${({theme})=>theme.bg2};
`
const SoldCardRow=styled.div<{areaId:string}>`
    width:100%;
    height:100%;
    grid-area:${({areaId})=>('card'+areaId)}};
    border-radius: 20px;
    background:${({theme})=>theme.bg2};
    display:flex;
`
const SoldCardRowRight=styled.div`
    width:calc(100% - 266px);
    height:100%;
    display:flex;
    padding:24px 32px;
    flex-direction:column;
    justify-content:space-between;
    box-sizing:border-box;

`
const SoldWrapperGrid=styled.div`
    display:grid;
    grid-row-gap: 32px;
    grid-column-gap: 32px;
    height: 677px;
    width:1184px;
    margin-top:28px;
    grid-template-columns: 1fr 1.2fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        "big card1"
        "big card2"
        "big card3";
`
const CardMinted=(props:{url:string,title:string,detail:string})=>{
    return <CardMintedWrapper>
        <img alt="hero" src={props.url} style={{width:'100%'}}></img>
        <div>
            <CardTitle>{props.title}</CardTitle>
            <CardDetail>{props.detail}</CardDetail>
        </div>
        <GoToStore>去商店页面</GoToStore>
    </CardMintedWrapper>
}
const PriceTitle=styled(Text)`
    height: 18px;
    font-family: STHeitiSC-Light;
    font-size: 16px;
    color: ${({theme})=>theme.bg3};
    line-height: 18px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.76);
    font-weight: 200;
`
const PriceNum=styled(Text)`
    height: 18px;
    font-family: STHeitiSC-Medium;
    font-size: 18px;
    color: #FEAF25;
    line-height: 18px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.76);
    font-weight: 700;
`
const Price=(props:{price:string})=>{
    return <div style={{display:'flex',marginTop:'28px'}}>
        <PriceTitle>{'竞拍价:'}</PriceTitle>
        <PriceNum>{props.price}</PriceNum>
    </div>
}
function getCardList(type?:'sold'|'minted'|string) {
    if(type==='sold'){
        return <SoldWrapperGrid>
            <SoldCardBig>
                <img src={require('../../assets/images/homepage/已拍卖的NFT-大图.png').default} width={'100%'} alt='datu'></img>
                <div>
                    <CardTitle>{'阿拉斯科特'}</CardTitle>
                    <CardDetail>{'MATRIFI 是一个由社区驱动的元宇宙社交矩阵，基于DID技术，打造用户去中。'}</CardDetail>
                </div>
                <Price price="1000$"></Price>
            </SoldCardBig>
            <SoldCardRow areaId='1'>
                <img src={require('assets/images/homepage/已拍卖的NFT-2.png').default} width={'266px'} alt="al2"></img>
                <SoldCardRowRight>
                    <div>
                        <CardTitle>{'阿拉斯科特'}</CardTitle>
                        <CardDetail>{'MATRIFI 是一个由社区驱动的元宇宙社交矩阵，基于DID技术，打造用户去中。'}</CardDetail>
                    </div>
                    <Price price="1000$"></Price>
                </SoldCardRowRight>
            </SoldCardRow>
            <SoldCardRow areaId='2'>
                <img src={require('assets/images/homepage/已拍卖的NFT-2.png').default} width={'266px'} alt="al2"></img>
                <SoldCardRowRight>
                    <div>
                        <CardTitle>{'阿拉斯科特'}</CardTitle>
                        <CardDetail>{'MATRIFI 是一个由社区驱动的元宇宙社交矩阵，基于DID技术，打造用户去中。'}</CardDetail>
                    </div>
                    <Price price="1000$"></Price>
                </SoldCardRowRight>
            </SoldCardRow>
            <SoldCardRow areaId='3'>
                <img src={require('assets/images/homepage/已拍卖的NFT-2.png').default} width={'266px'} alt="al2"></img>
                <SoldCardRowRight>
                    <div>
                        <CardTitle>{'阿拉斯科特'}</CardTitle>
                        <CardDetail>{'MATRIFI 是一个由社区驱动的元宇宙社交矩阵，基于DID技术，打造用户去中。'}</CardDetail>
                    </div>
                    <Price price="1000$"></Price>
                </SoldCardRowRight>
            </SoldCardRow>
        </SoldWrapperGrid>
    }else{
       return <MintedWrapper>
            <CardMinted url={mintedImageUrl} title={'阿拉斯科特'} detail={'MATRIFI 是一个由社区驱动的元宇宙社交矩阵，基于DID技术，打造用户去中。'}></CardMinted>
            <CardMinted url={mintedImageUrl} title={'阿拉斯科特'} detail={'MATRIFI 是一个由社区驱动的元宇宙社交矩阵，基于DID技术，打造用户去中。'}></CardMinted>
            <CardMinted url={mintedImageUrl} title={'阿拉斯科特'} detail={'MATRIFI 是一个由社区驱动的元宇宙社交矩阵，基于DID技术，打造用户去中。'}></CardMinted>
        </MintedWrapper>
    }
}
const ViewMore=styled.div`
    height: 16px;
    font-family: STHeitiSC-Medium;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    margin-top:40px;
    align-self:center;
`
const CrowPlatform=styled(StyledNavLink)`
    width:252px !important;
    align-self:center;
    margin-top:26px;
`

export const NFTInfo=(props:{type?:'sold'|'minted'|string})=> {

    return <NFTInfoWrapper>
        <Title>{(props.type??'sold')==='sold'?'已拍卖的NFT':'铸造好的NFT'}</Title>
        <Notice>
            投资早期阶段和成长型文明会使您的资金面临风险，请阅读我们的 
            <NoticeLink>
                风险披露声明
            </NoticeLink>
        </Notice>
        {getCardList(props.type)}
        {props.type==="sold"?<ViewMore>查看更多文明</ViewMore>:null}
        {props.type==="sold"?<CrowPlatform>竞拍平台</CrowPlatform>:null}
    </NFTInfoWrapper>
}