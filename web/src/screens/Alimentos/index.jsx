import './styles.css'
import { useState, useEffect } from 'react'
import { Footer } from "../../components/Footer";
import Wave from '../../assets/waves.png'
import Wave2 from '../../assets/wave2.png'
import { HeaderManage } from "../../components/Header";
import CloseIcon from '@mui/icons-material/Close';
// foods
import pastel from '../../assets/pastel.png'
import coxinha from '../../assets/coxinha.png'
import hotdog from '../../assets/hotdog.png'
import sucolaranja from '../../assets/sucolaranja.png'
import sucouva from '../../assets/sucouva.png'

export default function Alimentos() {
    const [isModalVisible, setModalVisible] = useState(false);
    function closeModal() {
        setModalVisible(false)
    }
    function openModal() {
        setModalVisible(true)
    }

    return (
        <>
            <img src={Wave} className='waveImg1' />
            <img src={Wave2} className='waveImg2' />
            <div className="mainContainer">
                <HeaderManage />
                <br />
                <button onClick={openModal}>Adicionar</button>
                {isModalVisible && (
                    <>
                        <div className="modal">
                            <button onClick={closeModal} className='closeBtn'>
                                <CloseIcon />
                            </button>
                            <p className='title'>Adicionar Alimento</p>
                            <form
                            // onSubmit={handleSubmit} 
                            >
                                <div className="label">
                                    <p>Foto</p>
                                    <input type="file" />
                                </div>
                                <div className="formModal">

                                    <div className="label">
                                        <p>Nome</p>
                                        <input
                                            className='input'
                                            type="text"
                                            placeholder='Nome'
                                        />
                                    </div>
                                    <div className="label">

                                        <p>Preço</p>
                                        <input
                                            className='inputPreco'
                                            type="number"
                                            placeholder='Preço'
                                        />
                                    </div>
                                </div>
                                <div className="label">
                                    <p>Categoria</p>
                                    <select className="Categoria">
                                        <option value="Comida">Comida</option>
                                        <option value="Bebida">Bebida</option>
                                    </select>
                                    <button
                                        type="submit"
                                    >
                                        salvar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                )}
                <h1 className='title'>Comidas</h1>
                <div className="images">
                    <img src={pastel} />
                    <img src={coxinha} />
                    <img src={hotdog} />
                </div>
                <h1 className='title'>Bebidas</h1>
                <div className="images">
                <img src={sucolaranja} />
                <img src={sucouva} />
                </div>
                <Footer />
            </div>
        </>
    )
}