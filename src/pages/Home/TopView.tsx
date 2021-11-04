import { AutoColumn } from 'components/Column';
import styled from 'styled-components/macro';
import { Text } from 'rebass'
import { darken } from 'polished';
import { useRef, useState,memo,useEffect } from 'react'; 
import { StackedCarousel, ResponsiveContainer, StackedCarouselSlideProps } from 'react-stacked-center-carousel';
import  LinkDark  from '../../assets/images/token-list/lists-dark.png'
import bannerBg from '../../assets/images/homepage/banner.png'
import GFLogoURL from '../../assets/images/homepage/GAMER_FUTURE.png'
import Logo, { LogoDiv } from 'components/Header/Logo';
import LeftArrow from '../../assets/images/homepage/leftarrow.png'
import RightArrow from '../../assets/images/homepage/rightArrow.png'
import { url } from 'inspector';
const TopViewWrapper = styled.div<{url:string}>`
    display:grid;
    width:100%;
    height:100%;
    background-image: url(${({ url }) => url});
    padding-top: 112px;
    box-sizing:border-box;
    background-origin: content-box;
    grid-template-columns: 1fr 1fr;
`
const Slogan =styled(AutoColumn)`
    height:100%;
    grid-template-rows: 1fr 1fr 1fr;
    padding:172px 180px 167px 127px;
    box-sizing:border-box;

`
const LogoText=styled(Text)`
  width: 560px;
  height: 64px;
  font-family: DIN-Bold;
  font-size: 52px;
  color: #FFFFFF;
  letter-spacing: -0.81px;
  font-weight: 700;
  justify-self:end;
  text-align:left;
`
const SloganText=styled(Text)`
    justify-self:left;
    width: 452px;
    height: 60px;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    text-align: justify;
    font-weight: 600;
`

const StyledNavLink = styled.div`
    width: 123px;
    height: 40px;
    line-height: 40px;
    text-align:center;
    background:${({ theme }) => theme.bg3};
    border-radius: 8px;
    justify-self:left;
    word-break: break-word;
    overflow: hidden;
    white-space: nowrap;
    :hover,
    :focus {
      
    }
  `
interface cardData {
    title?:string
    box?:string
}
const LeftArrowBT=styled.div`
  width: 48px;
  height: 48px;
  background-image:url(${LeftArrow})
`
const RightArrowBT=styled.div`
  width: 48px;
  height: 48px;
  background-image:url(${RightArrow})
`
const CivType=styled(Text)`
  width: 56px;
  height: 14px;
  font-family: STHeitiSC-Medium;
  font-size: 14px;
  letter-spacing: -0.22px;
  line-height: 14px;
  font-weight: 700;
`
export const DetailItem=(props:{title:string,info:string,fontSize?:string,opacity?:number})=>{
  return <div style={{display:'flex',flexDirection:'row',opacity:props.opacity??1}}>
    <Text style={{paddingRight: '5px',height: props.fontSize??'10px',fontFamily: 'STHeitiSC-Light',fontSize: props.fontSize??'10px',letterSpacing: '-0.16px',lineHeight: props.fontSize??'10px',fontWeight: 200,wordBreak: 'break-word',
    overflow: 'hidden',
    whiteSpace: 'nowrap'}}>{props.title}</Text>
    <Text style={{height: props.fontSize??'10px',fontFamily: 'STHeitiSC-Medium',fontSize: props.fontSize??'10px',letterSpacing: '-0.16px',lineHeight: props.fontSize??'10px',fontWeight: 700}}>{props.info}</Text>
  </div>
}
const data = new Array(20).fill({ coverImage: "xxx", video: "xxx" })

function ResponsiveCarousel() {
    const ref = useRef<any>();
    return (
      <div style={{ position: 'relative',display:'flex',flex:'row',justifyContent:'flex-start',alignItems:'center',paddingRight:"163px" }}>
        <div
            className='twitch-button left'
            onClick={() => ref.current?.goBack()}
            style={{height:30}}
        >
            <LeftArrowBT></LeftArrowBT>
        </div>
        <ResponsiveContainer
              carouselRef={ref}
              render={(width, carouselRef) => {
                return (
                  <StackedCarousel
                      ref={carouselRef}
                      slideComponent={Slide}
                      slideWidth={20}
                      carouselWidth={width}
                      data={data}
                      maxVisibleSlide={3}
                      customScales={[1,0.9,0]}
                      transitionTime={450}
                  >
                      
                  </StackedCarousel>
                );
              }}
        />

        <div
            className='twitch-button right'
            onClick={() => ref.current?.goNext()}
            style={{height:30}}
        >
            <RightArrowBT></RightArrowBT>
        </div>
      </div>
    );
}

const Slide = memo(function (props: StackedCarouselSlideProps) {
    const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props;
    const [loadDelay, setLoadDelay] = useState<any>();
    const [removeDelay, setRemoveDelay] = useState<any>();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      if (isCenterSlide) {
        clearTimeout(removeDelay);
        setLoadDelay(setTimeout(() => setLoaded(true), 1000));
      } else {
        clearTimeout(loadDelay);
        if (loaded) setRemoveDelay(setTimeout(() => setLoaded(false), 1000));
      }
    }, [isCenterSlide]);

    useEffect(() => () => {
      clearTimeout(removeDelay);
      clearTimeout(loadDelay);
    });

    const { coverImage } = data[dataIndex];

    return (
      <div className='twitch-card' style={{background: "rgba(255,255,255,0.09)",borderRadius: "12px"}} draggable={false} onClick={() => {
        if (!isCenterSlide) swipeTo(slideIndex);
      }}>
        <div className={`cover fill ${isCenterSlide && loaded ? 'off' : 'on'}`} onClick={() => {
              if (!isCenterSlide) swipeTo(slideIndex);
            }} style={{display:'flex',width: "180px",height: "259px",justifyContent: 'space-between',flexDirection:'column',padding:'15px',boxSizing:'border-box'}}>
          <div className='cover-image fill' style={{backgroundImage:`url(${LinkDark})`,width: '152px',height: '157px',backgroundSize:"152px 157px"}}/>
          <div style={{height:'57px',display:'flex',flexDirection:'column',justifyContent: 'space-between'}}>
            <CivType>什么文明</CivType>
            <DetailItem title='持有:' info='0x00000000000000'></DetailItem>
            <div style={{width:'100%:',display:'flex', justifyContent: 'space-between'}}>
              <DetailItem title='价值:' info='1000$'></DetailItem>
              <DetailItem title='等级:' info='10级'></DetailItem>
            </div>
          </div>
        </div>
      </div>
    );
});




export default function TopView() {
    return(
        <TopViewWrapper url={bannerBg}>
            <Slogan justify={"center"}>
                <LogoText>GAMER FUTURE</LogoText>
                <SloganText>MATRIFI 是一个由社区驱动的元宇宙社交矩阵，基于DID技术，打造用户去中心化数字身份名片，发行下一代元宇宙社交基建单元~可生长、合成、拆卸的价值NFT，通过NFT组件在游戏里构建社交网络。</SloganText>
                <StyledNavLink>
                    去商店页面
                </StyledNavLink>
            </Slogan>
            <ResponsiveCarousel></ResponsiveCarousel>
        </TopViewWrapper>
    )
}