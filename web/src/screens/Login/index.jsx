import './styles.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Wave from '../../assets/waves.png'
import Wave2 from '../../assets/wave2.png'
import { Footer } from '../../components/Footer'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export default function Login() {
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
                        <input type="text" placeholder='insira seu usuario' className='inputLogin'/>
                        <input type="password" placeholder='insira sua senha' className='inputLogin'/>
                        <NavLink to="/alimentos">
                            <button>
                                Entrar
                            </button>
                        </NavLink>
                        <span>Apenas pessoas com o dominio SesiSenai terão acesso.</span>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}