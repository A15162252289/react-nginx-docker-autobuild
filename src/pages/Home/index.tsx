import styled from 'styled-components/macro' 
import { AutoColumn } from 'components/Column/index';
import TopView from './TopView';
import NewsBar from './NewsBar';
import ReadMore from './ReadMore';
import Info from './Info';
import Footer from './Footer';

const HomeFrame = styled.div`
    display:grid;
    // width:100vw;
    grid-template-rows: 705px 1fr 1000px 500px;
`
export default function Home(){
    return (
        <HomeFrame>
            <TopView/>
            <Info></Info>
            <Footer></Footer>
        </HomeFrame>
    )    
}

