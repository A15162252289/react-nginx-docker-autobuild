import { AutoColumn } from 'components/Column';
import styled, { StyledComponent } from 'styled-components/macro';
import { Text } from 'rebass'
import { darken } from 'polished';
import { useRef, useState,memo,useEffect, useCallback } from 'react'; 
import { StackedCarousel, ResponsiveContainer, StackedCarouselSlideProps } from 'react-stacked-center-carousel';
import  LinkDark  from '../../assets/images/token-list/lists-dark.png'
import bannerBg from '../../assets/images/homepage/banner.png'
import GFLogoURL from '../../assets/images/homepage/GAMER_FUTURE.png'
import Logo, { LogoDiv } from 'components/Header/Logo';
import { url } from 'inspector';
import StyledNavLink from 'components/LinkBtn';
import { LeftArrowBT, RightArrowBT } from 'components/Arrow';
import { useWindowSize } from 'hooks/useWindowSize';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { updateCurrentSlickIndex } from 'state/slick/slickSlice';
import { setInterval } from 'timers';

const TopViewWrapper = styled.div<{url:string}>`
    display:grid;
    width:100%;
    background-image: url(${({ url }) => url});
    background-size:100% 100%;
    padding-top: 112px;
    box-sizing:content-box;
    background-origin: content-box;
    grid-template-columns: 1fr 1fr;
    position:relative;
`
const Slogan =styled(AutoColumn)`
    height:100%;
    grid-template-rows: 1fr 1fr 1fr;
    padding:172px 180px 167px 127px;
    box-sizing:border-box;

`
const LogoText=styled(Text)`
  width: 100%;
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

interface cardData {
    title?:string
    box?:string
}
const CivType=styled(Text)`
  width: 56px;
  height: 14px;
  font-family: STHeitiSC-Medium;
  font-size: 14px;
  letter-spacing: -0.22px;
  line-height: 14px;
  font-weight: 700;
`
const SlickWrapper=styled.div`
  padding-right:180px;
  box-sizing:border-box;
  display:flex;
  flex-direaction:column;
  justify-content:center;
  align-items:center;
`
const data = new Array(20).fill({ coverImage: "xxx", video: "xxx" })
function getDisplay(currentIndex:number,dataIndex:number) {
  if(currentIndex===0&&dataIndex===data.length-1){
    return "none"
  }
  if(dataIndex===currentIndex-1){
    return "none"
  }
  return "block"
}
export const DetailItem=(props:{title:string,info:string,fontSize?:string,opacity?:number})=>{
  return <div style={{display:'flex',flexDirection:'row',opacity:props.opacity??1}}>
    <Text style={{paddingRight: '5px',height: props.fontSize??'10px',fontFamily: 'STHeitiSC-Light',fontSize: props.fontSize??'10px',letterSpacing: '-0.16px',lineHeight: props.fontSize??'10px',fontWeight: 200,wordBreak: 'break-word',
    overflow: 'hidden',
    whiteSpace: 'nowrap'}}>{props.title}</Text>
    <Text style={{height: props.fontSize??'10px',fontFamily: 'STHeitiSC-Medium',fontSize: props.fontSize??'10px',letterSpacing: '-0.16px',lineHeight: props.fontSize??'10px',fontWeight: 700}}>{props.info}</Text>
  </div>
}

function ResponsiveCarousel() {
    const ref = useRef<any>();
    useEffect(()=>{
      let autoSlick=setInterval(()=>{
        ref.current?.goBack()
      },2000)
      console.log('use')
      return ()=>{
        clearInterval(autoSlick)
      }
    },[])
    return (
      <div style={{ position: 'relative',display:'flex',flex:'row',justifyContent:'flex-start',alignItems:'center' ,width:'600px'}}>
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
                      slideWidth={width/2}
                      carouselWidth={width}
                      data={data}
                      maxVisibleSlide={3}
                      customScales={[1,0.7,0]}
                      transitionTime={600}
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
    const currentIndex= useAppSelector((state) => state.slick.currentIndex)
    const dispatch = useAppDispatch();
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
    if(isCenterSlide){
      dispatch(updateCurrentSlickIndex(dataIndex))
    }

    return (
      <div className='twitch-card' style={{background: "rgba(255,255,255,0.09)",borderRadius: "12px",display:getDisplay(currentIndex,dataIndex)}} draggable={false} onClick={() => {
        if (!isCenterSlide){swipeTo((dataIndex+1) % data.length);dispatch(updateCurrentSlickIndex(dataIndex));} 
      }}>
        <div className={`cover fill ${isCenterSlide && loaded ? 'off' : 'on'}`} onClick={() => {
              if (!isCenterSlide) {swipeTo((dataIndex+1) % data.length);dispatch(updateCurrentSlickIndex(dataIndex));} 
            }} style={{display:'flex',width: "180px",height: "259px",justifyContent: 'space-between',flexDirection:'column',padding:'15px',boxSizing:'border-box'}}>
          <div className='cover-image fill' style={{backgroundImage:`url(${LinkDark})`,width: '152px',height: '157px',backgroundSize:"152px 157px"}}/>
          <div style={{height:'57px',display:'flex',flexDirection:'column',justifyContent: 'space-between'}}>
            <CivType>????????????</CivType>
            <DetailItem title='??????:' info='0x00000000000000'></DetailItem>
            <div style={{width:'100%:',display:'flex', justifyContent: 'space-between'}}>
              <DetailItem title='??????:' info='1000$'></DetailItem>
              <DetailItem title='??????:' info='10???'></DetailItem>
            </div>
          </div>
        </div>
      </div>
    );
});


const TopLine=styled.div`
    width: 360px;
    height: 4px;
    background: #FEAF25;
    position:absolute;
    bottom:-4px;
    left:0;
    z-index:999;
`

export default function TopView() {
  const {width}=useWindowSize()
    let topView=useRef<any>();
    const autoCalcHeight= useCallback(()=>{
      // width&&(topView.current.style.width=width+'px')
    //  width&& (topView.current.style.height=width/2.43+'px');
        topView.current.style.height=topView.current.clientWidth/2.43+'px'
    }, [width])
    useEffect(() => {
      autoCalcHeight()
    });
    return(
        <TopViewWrapper url={bannerBg} ref={topView}>
            <TopLine></TopLine>
            <Slogan justify={"center"}>
                <LogoText>GAMER FUTURE</LogoText>
                <SloganText>MATRIFI ?????????????????????????????????????????????????????????DID????????????????????????????????????????????????????????????????????????????????????????????????~????????????????????????????????????NFT?????????NFT???????????????????????????????????????</SloganText>
                <StyledNavLink>
                    ???????????????
                </StyledNavLink>
            </Slogan>
            <SlickWrapper>
                <ResponsiveCarousel></ResponsiveCarousel>
            </SlickWrapper>

        </TopViewWrapper>
    )
}