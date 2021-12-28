import uno from '../assets/Cards/1.png'
import dos from '../assets/Cards/2.png'
import tres from '../assets/Cards/3.png'
import cuatro from '../assets/Cards/4.png'

import a1 from '../assets/Cards/a1.png'
import a2 from '../assets/Cards/a2.png'
import a3 from '../assets/Cards/a3.png'
import a4 from '../assets/Cards/a4.png'

import '../styles/Card.css'

const card = [
  {'photo': uno, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a1, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
  {'photo': dos, 'duration': '25:52', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a2, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
  {'photo': tres, 'duration': '56:50', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a3, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
  {'photo': cuatro, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a4, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
  {'photo': uno, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a1, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
  {'photo': dos, 'duration': '13:52', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a2, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
  {'photo': tres, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a3, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
  {'photo': cuatro, 'duration': '35:21', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a4, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
  {'photo': uno, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a1, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
  {'photo': dos, 'duration': '13:52', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a2, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
  {'photo': tres, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a3, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
  {'photo': cuatro, 'duration': '13:55', 'title': '¿Cómo Consumir una API | Pokémon API?', 'avatar': a4, 'username': 'Leonidas Esteban', 'views': 54, 'history': 'hace 16 minutos'},
]

function Card () {
  return (
    <div className="card">
      {card.map(card => (
        <div className='main-card' key={card.photo}>
          <div className='main-card-img'>
            <img src={card.photo} alt='Imagen'/>
            <p className='duration'>{card.duration}</p>
          </div>
          <div className='main-card-info'>
            <img className='avatar' src={card.avatar} alt='avatar'/>
            <div className='data'>
              <p className='title' >{card.title}</p>
              <p className='username' >{card.username}</p>
              <p className='info'>{`${card.views} vistas - ${card.history}`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card;