import { Footer } from "../../components/Footer";
import Wave from '../../assets/waves.png'
import Wave2 from '../../assets/wave2.png'
import { Header } from "../../components/Header";
import { CardapioCliente } from "../../components/CardapioCliente";

export default function Home() {
    return (
        <>
            <img src={Wave} className='waveImg1' />
            <img src={Wave2} className='waveImg2' />
            <div className="mainContainer">
                <Header />
                <CardapioCliente />
                <Footer />
            </div>
        </>
    )
}