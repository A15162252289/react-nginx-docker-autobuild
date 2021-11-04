import {Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'

// import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'
// import Polling from '../components/Header/Polling'
import Home from 'pages/Home'
const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  z-index: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 6rem 16px 16px 16px;
  `};
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  return (
    <div>
      {/* <Web3ReactManager> */}
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <Switch>
              <Route exact strict path="/home" component={Home}/>
              {/* <Route exact strict path="/vote/:governorIndex/:id" component={VotePage} /> */}
            </Switch>
          </BodyWrapper>
        </AppWrapper>
      {/* </Web3ReactManager> */}
    </div>
  )
}
