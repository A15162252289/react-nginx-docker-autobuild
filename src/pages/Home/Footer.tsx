import styled from "styled-components/macro";
import {Text} from "rebass"
import {} from "theme/components"
const FooterWrapper = styled.div`
    display:grid;
    width:100%;
    height:100%;
    background-color:yellow;
    grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
    padding:200px 100px;
`
const ContentWrapper=styled.div`
    display:grid;
    width:100%;
    height:100%;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`
const Head=styled(Text)`
    text-align:center;
`
const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;

  :hover {
    text-decoration: none;
    opacity: 0.7;
  }
  :focus {
    outline: none;
    text-decoration: none;
  }

  :active {
    text-decoration: none;
  }
`
const AboutMe=()=>{
    return (
        <ContentWrapper>
            <Head>Gamer Future</Head>
            <Link>liaojie</Link>
            <Link>liaojie</Link>
            <Link>liaojie</Link>
            <Link>liaojie</Link>
        </ContentWrapper>
    )
}
export default function Footer() {
    return (
        <FooterWrapper>
            <AboutMe></AboutMe>
            <AboutMe></AboutMe>
            <AboutMe></AboutMe>
            <AboutMe></AboutMe>
            <AboutMe></AboutMe>
        </FooterWrapper>
    )
} 