import { useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './post.module.css'

export function Post({author,publishedAt, content}){
    const [comments, setComments] = useState([
        'Post muito bacana'
    ])

    const [newCommentText, setNewCommentText] = useState('')
    

    const publishedAtDateFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'",{locale:ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments,newCommentText])
    }

    function hadlNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function onDeleteComment(comment){
        console.log(`deletado ${comment}`)
        setComments(comments.filter(c => c!==comment))
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('O comentário não pode estar vazio.')
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src={author.avatarUrl}/>
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>

                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={style.content}>
                {content.map(line =>{
                    if(line.type === 'paragraph'){
                        return <p key={line.content}> {line.content}</p>
                    }else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>
                    Deixe seu feedback
                </strong>
                <textarea 
                name='comment' 
                onChange={hadlNewCommentChange}
                placeholder='Deixe seu comentario'
                required
                onInvalid={handleNewCommentInvalid}
                />

                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={onDeleteComment}/>
                })}
            </div>
        </article>
    )
    
}