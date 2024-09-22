import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }){

    const[likeCount, setLikeCount] = useState(0);
    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }
    function handleDeleteComment(){
        onDeleteComment(content)
    }


    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Marcelo Farias</strong>
                            <time title='11 de Maio as 08:13h' dateTime="20-05-2024 06:00:00">Cerca de 1hr atras</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar o comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Apluadir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}