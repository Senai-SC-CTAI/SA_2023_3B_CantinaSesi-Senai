import './styles.css'
import { Footer } from "../../components/Footer";
import Wave from '../../assets/waves.png'
import Wave2 from '../../assets/wave2.png'
import { HeaderManage } from "../../components/Header";
import Cardapio from '../../components/Cardapio';

export default function Gerenciamento() {
    return(
        <>
    <img src={Wave} className='waveImg1' />
            <img src={Wave2} className='waveImg2' />
            <div className="mainContainer">
                <HeaderManage />
                <Cardapio />
                <Footer />
            </div>
        </>
    )
}