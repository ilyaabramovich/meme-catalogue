import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMemeById } from '../api.js'

export default function Meme() {
  const params = useParams()
  const [meme, setMeme] = useState({})
  useEffect(() => {
    fetchMemeById(params.memeId).then((memeData) => {
      setMeme(memeData.data)
    })
  }, [params.memeId])

  return (
    <>
      <h2>{meme.description}</h2>
      <img src={meme.url} alt={meme.description} />
    </>
  )
}
