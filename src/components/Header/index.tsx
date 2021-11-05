import { Trans } from '@lingui/macro'
import useScrollPosition from '@react-hook/window-scroll'
import useTheme from 'hooks/useTheme'
import { darken } from 'polished'
import { NavLink,Route } from 'react-router-dom'
import { Text } from 'rebass'
import styled from 'styled-components/macro'
import Row from '../Row'
import Logo from './Logo'
import GFLogoURL from '../../assets/images/homepage/GAMER_FUTURE.png'
import avatar from '../../assets/images/homepage/Avatar.svg'
import {Avatar} from './Logo'
const HeaderFrame = styled.div<{ showBackground: boolean }>`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height:112px;
  top: 0;
  position: relative;
  padding: 0 128px;
  z-index: 21;
  position: relative;
  background-color: ${({ theme }) => theme.bg2};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    grid-template-columns: 48px 1fr 1fr;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding:  1rem;
    grid-template-columns: 1fr 1fr;
  `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding:  1rem;
    grid-template-columns: 36px 1fr;
  `};
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-left: 0.5em;
  }

  /* addresses safari's lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    align-items: center;
  `};
`

const HeaderLinks = styled(Row)`
  justify-self: end;
  background-color: ${({ theme }) => theme.bg0};
  width: fit-content;
  padding: 4px;
  border-radius: 16px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  overflow: auto;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    justify-self: start;  
    `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    justify-self: center;
  `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    z-index: 99;
    position: fixed;
    bottom: 0; right: 50%;
    transform: translate(50%,-50%);
    margin: 0 auto;
    background-color: ${({ theme }) => theme.bg0};
    border: 1px solid ${({ theme }) => theme.bg2};
    box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg1)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const UNIAmount = styled(AccountElement)`
  color: white;
  padding: 4px 8px;
  height: 36px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.bg3};
  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #ff007a 0%, #2172e5 100%), #edeef2;
`

const UNIWrapper = styled.span`
  width: fit-content;
  position: relative;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.9;
  }
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
  :hover {
    cursor: pointer;
  }
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  ${({ theme }) => theme.flexRowNoWrap}
  display:block;
  align-items: center;
  justify-items:center;
  text-align:center;
  background-color:none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text1};
  font-size:16px;
  border-bottom:7px solid transparent;
  width:46px;
  height:25px;
  margin-right:93px;
  word-break: break-word;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  &.${activeClassName} {
    border-bottom:7px solid #FEAF24;
  }

  :hover,
  :focus {
  }
`
export default function Header() {
  const scrollY = useScrollPosition()
  return (
    <HeaderFrame showBackground={scrollY > 45}>
    <Logo src={GFLogoURL}></Logo>
    <StyledNavLink id={`home-nav-link`} to={'/'} exact={true}>
        首页
    </StyledNavLink> 
    <StyledNavLink id={`auction-nav-link`} to={'/auction'} exact={true}>
        拍卖
    </StyledNavLink>
    <StyledNavLink id={`login-nav-link`} to={'/login'} exact={true}>
        商店
    </StyledNavLink>
    <Avatar src={avatar}></Avatar>
      <HeaderControls>
        <HeaderElement>
        </HeaderElement>
        <HeaderElement>
        </HeaderElement>
        <HeaderElement>
        </HeaderElement>
      </HeaderControls>
    </HeaderFrame>
  )
}
