import styled from "styled-components/macro";

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

  const SocialLinkBtn=styled.div`
    width: 48px;
    height: 48px;
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
  export default StyledNavLink