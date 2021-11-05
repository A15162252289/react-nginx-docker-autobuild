import styled from "styled-components/macro";

import facebookY from "../../assets/images/homepage/Facebook-icon.png"
import facebookW from "../../assets/images/homepage/Facebook.png"
import twitterY from "../../assets/images/homepage/twitter-icon.png"
import twitterW from "../../assets/images/homepage/twitter.png"
import insY from "../../assets/images/homepage/ins-icon.png"
import insW from "../../assets/images/homepage/ins.png"

const ImageList={
    facebookY,
    facebookW,
    twitterY,
    twitterW,
    insY,
    insW
}
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

  export const SocialLinkBtn=styled.div<{social:'facebook'|'twitter'|'ins',color:'Y'|'W'}>`
    width: 48px;
    height: 48px;
    background-image:url('${({ social,color }) => (ImageList as any)[social+color]}');
    white-space: nowrap;
    :hover,
    :focus {

    }
  `
  export default StyledNavLink