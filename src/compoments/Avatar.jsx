import style from './avatar.module.css'



// eslint-disable-next-line react/prop-types
export function Avatar({ hasBorder = true, src}){

    return(

        <img className={hasBorder ? style.avatarHasBorder : style.avatar} src={src}/>

    )
}