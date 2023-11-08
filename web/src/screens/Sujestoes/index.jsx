import './styles.css'
import { Footer } from "../../components/Footer";
import Wave from '../../assets/waves.png'
import Wave2 from '../../assets/wave2.png'
import { Header } from "../../components/Header";

export function Sujestoes() {
    return (
        <>
            <img src={Wave} className='waveImg1' />
            <img src={Wave2} className='waveImg2' />
            <div className="mainContainer">
                <Header />
                <h1 className='title'>Sujestões</h1>
                <div className="sujestContainer">
                    <span>Ajude a melhorar o nosso atendimento e os produtos que podemos fornecer, lembre-se que a escola tem suas normas e leis do que pode ou não ser vendido em escola.</span>
                    <textarea type="text" className='sujest' />
                    <button>Enviar</button>
                </div>
                <Footer />
            </div>
        </>
    )
}