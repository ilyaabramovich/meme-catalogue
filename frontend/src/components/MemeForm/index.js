import {useRef, useState} from 'react'
import {createMeme} from '../../api.js'
import './index.css'

export default function MemeForm() {
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)
  const [memeFile, setMemeFile] = useState(null)
  const [memeFilePreview, setMemeFilePreview] = useState('')

  const imageInputRef = useRef(null)

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    const imageBase64 = URL.createObjectURL(file)

    setMemeFilePreview(imageBase64)
    setMemeFile(file)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!memeFile) {
      return
    }

    const formData = new FormData();
    formData.append('description', description)
    formData.append('file', memeFile)

    createMeme(formData).then(() => {
      setDescription('')
      setMemeFilePreview('')
      setMemeFile(null)
    }).catch(err => {
      setError(err)
    })
  }

  return (
    <form className='meme-form' encType="multipart/form-data" onSubmit={handleSubmit}>
      {error && <p>{error?.message}</p>}
      <div className="form-group">
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input className='form-control' name='description' id='description' minLength={3} maxLength={300}
               value={description}
               onChange={handleDescriptionChange}/>
      </div>
      <div className='form-group'>
        <label htmlFor="file" className="form-label">
          Image
        </label>
        <input required id='file' className='form-control' name='file' type="file"
               accept="image/png, image/jpeg, image/webp, image/gif" ref={imageInputRef}
               onChange={handleFileChange}/>
      </div>
      <button type="submit">Add meme</button>
      <div>
        <img src={memeFilePreview} alt={description} style={{maxWidth: '100%', height: '300px'}}/>
      </div>
    </form>
  )
}
