import './styles.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Wave from '../../assets/waves.png'
import Wave2 from '../../assets/wave2.png'
import { Footer } from '../../components/Footer'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import axios from 'axios'
import { useState } from 'react'

const logar = async (nome, senha) => {
    try {
        const response = await axios.post('http://localhost:8090/api/login', {
            name_users: nome,
            senha: senha,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default function Login() {


    const [nome, setNome] = useState();
    const [senha, setSenha] = useState('');
    const [, setIsAuthenticated] = useState(false)

    const handleLogin = async () => {
        try {
            const response = await logar(nome, senha);
            if(response == true){
                window.location.href = "/alimentos"
            } else if (!nome || !senha) {
                setIsAuthenticated(false);
                alert("campos não podem ser nulos")
            } else {
                setIsAuthenticated(false);
                alert("Funcionário não registrado")
            }
        } catch (error) {
            console.error('Erro ao se logar:', error);
        }
    };

    // senha: senai
    // select * from Usuario
    // Inserir um funcionario no pgAdmin
    // insert into Usuario (cpf_users, name_users, senha, tel_users) values (
    //     123456789, 
    //     'Joao',
    //     'senha',
    //     5943939
    // )

    return (
        <>
            <img src={Wave} className='waveImg1' />
            <img src={Wave2} className='waveImg2' />
            <div className="mainContainer">
                <img src={Logo} className='logo' />
                <div className="contentLogin">
                    <div className="firstSection">
                        <PersonRoundedIcon
                            fontSize='inheirt'
                            className='icon'
                        />
                        <h1 className='title'>Entrar como visitante</h1>
                        <NavLink to="/home">
                            <button>
                                Entrar
                            </button>
                        </NavLink>
                    </div>
                    <span className="divider"></span>
                    <div className="secondSection">
                        <h1 className='title'>Faça Login</h1>
                        <input type="text" placeholder='insira seu CPF' className='inputLogin' value={nome} onChange={(e) => setNome(e.target.value)} />
                        <input type="password" placeholder='insira sua senha' className='inputLogin' value={senha} onChange={(e) => setSenha(e.target.value)} />
                            <button type="button" onClick={handleLogin}>
                                Entrar
                            </button>
                        <span>Apenas pessoas com o dominio SesiSenai terão acesso.</span>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}