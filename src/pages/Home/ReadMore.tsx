import styled from "styled-components/macro";
import {Text} from "rebass";
import DownAURL from '../../assets/images/homepage/下尖头-icon.png'
const ReadMoreWrapper = styled.div`
    height:48px;
    display:flex;
    width:300px;
    justify-content:space-between;
    align-items:center;
`
const DownArrow=styled.div`
    height:48px;
    width:48px;
    background-image:url(${DownAURL});
`
const ReadMoreText=styled(Text)`
    text-align:center
`
export default function ReadMore() {
    return(
        <ReadMoreWrapper>
            <ReadMoreText>READ</ReadMoreText>
            <DownArrow/>
            <ReadMoreText>MORE</ReadMoreText>
        </ReadMoreWrapper>
    )
}
