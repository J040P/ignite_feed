import { Avatar } from './Avatar'
import style from './sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img className={style.image} src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=50&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className={style.profile}>
                <Avatar hasBorder src='https://github.com/J040P.png'/>

                <strong>João Pedro</strong>
                <span>Web developer</span>
            </div>
            <footer>
                
                <a href="#"><PencilLine size={20}/> Editar seu perfil</a>
            </footer>
        </aside>
    )
}