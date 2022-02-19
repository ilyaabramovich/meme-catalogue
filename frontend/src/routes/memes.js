import MemesList from '../components/MemesList'
import {fetchMemes} from '../api.js'
import {useEffect, useState} from 'react'

export default function Memes() {
  const [memes, setMemes] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMemes().then(memesData =>
      setMemes(memesData.data)
    ).catch(err =>
      setError(err)
    )
  }, []);

  return (
    <>
      <h2>Memes</h2>
      {error && <p>{error.message}</p>}
      <MemesList memes={memes}/>
    </>
  )
}
