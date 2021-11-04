import styled from "styled-components/macro";
import GFLogoURL from '../../assets/images/homepage/GAMER_FUTURE.png'
const StyledLogo = styled.img`
  height: 21px;
  width: 216px;
  margin-right:auto;
  display:block;
`
export const LogoDiv=styled.div`
  height: 21px;
  width: 216px;
  background-image:url(${GFLogoURL});
`
export const Avatar=styled(StyledLogo)`
  width:48px;
  height:48px;
  margin-right:1px;
`
export default StyledLogo
