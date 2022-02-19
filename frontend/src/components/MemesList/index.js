import {Link} from 'react-router-dom'
import './index.css'

export default function MemesList({memes = []}) {
  if (!Array.isArray(memes) || memes.length === 0) {
    return null;
  }

  return (
    <ul className="memes-list">
      {memes.map((meme) => (
        <li className="memes-list__item" key={meme._id}>
          <Link to={`/memes/${meme._id}`}>
            <img src={meme.url} alt={meme.description}/>
          </Link>
        </li>
      ))}
    </ul>
  )
}
