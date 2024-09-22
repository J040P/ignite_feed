import style from './Header.module.css'

import ignitelogo from '../assets/ignite-logo.svg'

export function Header () {
    return(
        <header className={style.header}>
            <img src={ignitelogo} alt="logo" />
        </header>
    )
}