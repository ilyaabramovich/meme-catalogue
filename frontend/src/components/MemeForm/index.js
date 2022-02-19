import {useRef, useState} from 'react'
import {createMeme} from '../../api.js'
import './index.css'

export default function MemeForm() {
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState('')

  const imageInputRef = useRef(null)

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleImagePreview = (event) => {
    const file = event.target.files[0]
    const imageBase64 = URL.createObjectURL(file)

    setImagePreview(imageBase64)
    setImageFile(file)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!imageFile) {
      return
    }

    const formData = new FormData();
    formData.append('description', description)
    formData.append('file', imageFile)

    createMeme(formData).then(() => {
      setDescription('')
      setImagePreview('')
      setImageFile(null)
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
        <input required id='file' className='form-control' name='file' type="file" ref={imageInputRef}
               onChange={handleImagePreview}/>
      </div>
      <button type="submit">Add meme</button>
      <div>
        <img src={imagePreview} alt={description} style={{maxWidth: '100%', height: '300px'}}/>
      </div>
    </form>
  )
}