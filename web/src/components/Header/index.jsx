import './styles.css'
import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

export const Header = () => (
    <>
        <img src={Logo} className='logo' />
        <div className="nav">
            <NavLink to='/home'>
                <p>Cardápio</p>
            </NavLink>
            <NavLink to='/sujestoes'>
                <p>Sujestões</p>
            </NavLink>
            <NavLink to='/'>
                <p>Entrar</p>
            </NavLink>
        </div>
    </>
)

export const HeaderManage = () => (
    <>
        <img src={Logo} className='logo' />
        <div className="nav">
            <NavLink to='/alimentos'>
                <p>Alimentos</p>
            </NavLink>
            <NavLink to='/gerenciar'>
                <p>Cardápio</p>
            </NavLink>
            <NavLink to='/'>
                <p>Sair</p>
            </NavLink>
        </div>
    </>
)