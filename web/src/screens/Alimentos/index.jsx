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
import sucouva from '../../assets/sucouva.png';

import axios from "axios";

export default function Alimentos() {
    const [isModalVisible, setModalVisible] = useState(false);
    function closeModal() {
        setModalVisible(false)
    }
    function openModal() {
        setModalVisible(true)
    }

    const [selectedImage, setSelectedImage] = useState(null);
    const [comidas, setComidas] = useState([]);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('Suco');
    const [preco, setPreco] = useState('');


    useEffect(() => {
        fetchComidas();
    }, []);

    // GET
    const fetchComidas = async () => {
        try{
            const response = await axios.get('http://localhost:8090/comidas')
            setComidas(response.data)
        } catch(error){
            console.log(error);
        }
    }

    // Post

    const handleSubmit = async () => {
        try{
            let novaComida = {
                name_comida: nome,
                categoria_comida: categoria,
                preco_comida: preco,
            }
            await axios.post('http://localhost:8090/comidas', novaComida)
            fetchComidas();
        } catch(errror){
            console.log(erro);
        }
    }

    const loadImage = (e) => {
        const file = e.target.files[0];

        // Verifica se um arquivo foi selecionado
        if (file) {
            // Verifica se o arquivo é uma imagem
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    // Define a imagem selecionada para exibição
                    setSelectedImage(e.target.result);
                };

                reader.readAsDataURL(file);
            } else {
                // Caso o arquivo não seja uma imagem, você pode exibir uma mensagem de erro
                alert('Por favor, selecione uma imagem.');
                e.target.value = ''; // Limpa o campo de entrada de arquivo
            }
        }
    };


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
                            onSubmit={handleSubmit} 
                            >
                                <div className="label">
                                    <p>Foto</p>       
                       
                                <input 
                                type="file" accept="image/*" 
                                onChange={loadImage} className='inputFile' />
                      

                                </div>
                                <div className="formModal">

                                    <div className="label">
                                        <p>Nome</p>
                                        <input
                                            className='input'
                                            type="text"
                                            placeholder='Nome'
                                            value={nome}
                                            onChange={(event) => setNome(event.target.value)}
                                        />
                                    </div>
                                    <div className="label">

                                        <p>Preço</p>
                                        <input
                                            className='inputPreco'
                                            type="number"
                                            placeholder='Preço'
                                            value={preco}
                                            onChange={(event) => setPreco(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="label">
                                    <p>Categoria</p>
                                    <select className="Categoria"
                                    value={categoria}
                                    onChange={(event) => setCategoria(event.target.value)}
                                    
                                    >
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
                    <img src={selectedImage} />
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