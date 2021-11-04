import styled from "styled-components/macro";
import {Text} from 'rebass'
import imUrl from '../../assets/images/homepage/nft头像.png'
import { DetailItem } from "./TopView";
const NewsBarWrapper = styled.div`
    display:grid;
    width:100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

const NewsCardWrapper=styled.div`
    display:grid;
    width:100%;
    align-items:center;
    grid-template-columns: 1fr 1fr;
`
const Avatar=styled.img`
    width: 72px;
    height: 72px;
    border: 2px solid #FEAF25;
    display:block;
    border-radius:50%;
    background:none;
    background-size:72px 72px;
    box-sizing:border-box;
    background-origin: content-box;
`
interface NewsData {
    address?:string
    time?:number
    toAddress?:string
}
const data:NewsData[]=[{
    address:"0x111",
    time:19999,
    toAddress:"0x1111",
},{
    address:"0x111",
    time:19999,
    toAddress:"0x1111",
},{
    address:"0x111",
    time:19999,
    toAddress:"0x1111",
},{
    address:"0x111",
    time:19999,
    toAddress:"0x1111",
},]
const CardRight=(props:{data:NewsData})=>{
    return <div style={{justifySelf:'left',paddingLeft:'10px',boxSizing:'border-box',height:'100%',display:'flex',justifyContent:'space-around',flexDirection:'column'}}>
            <Text style={{height: '14px',fontFamily: 'STHeitiSC-Medium',fontSize: '14px',lineHeight: '14px',fontWeight: 700}}>什么文明</Text>
            <DetailItem title='拜访地址:' info="0x00000000" fontSize="14px" opacity={0.6}></DetailItem>
            <Text style={{opacity: "0.6",fontFamily: 'STHeitiSC-Light',fontSize: '14px',lineHeight: '14px',fontWeight: 200}}>{props.data.time+'前'}</Text>
    </div>
}
const NewsCard=(props:{data:NewsData})=>{
    return (
        <NewsCardWrapper>
            <Avatar style={{justifySelf:'right'}} src={imUrl}>
            </Avatar>
            <CardRight data={props.data}></CardRight>
        </NewsCardWrapper>
    )
}


const NewsBar=()=>{
    return <NewsBarWrapper>
        {data.map((data)=><NewsCard data={data}></NewsCard>)}
    </NewsBarWrapper>
    
}
export default NewsBar