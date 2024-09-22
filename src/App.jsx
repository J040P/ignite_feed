import './global.css'
import { Header } from "./compoments/Header"

import style from './app.module.css'
import { Post } from './compoments/Post'
import { Sidebar } from './compoments/Sidebar'


const posts = [
  {
    id: 1,
    author:{
      avatarUrl:'https://github.com/diego3g.png',
      name:'Diego Fernandes',
      role:'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content:'Fala Galera'},
      { type: 'paragraph', content:'Acabe de subir mais um projeto no meu port, eu fiz junto com o povo do rocketseat'},
      { type: 'link', content:'Jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-09-17 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl:'https://github.com/J040P.png',
      name:'João Pedro',
      role:'student'
    },
    content: [
      { type: 'paragraph', content:'Fala Galera'},
      { type: 'paragraph', content:'mano que bah=gulho dahora'},
      { type: 'link', content:'J040P'}
    ],
    publishedAt: new Date('2024-09-19 12:00:00')
  }
]


function App() {

  return (
    <div>
      <Header/>

      <div className={style.wrapper}>
        <Sidebar/>

        <main>
          {posts.map(post =>{
            return (
              <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}/>
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
