import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './index.styl'

export default () => {

    const getVal = () => {
        const chromeNotesSave = localStorage.getItem('chromeNotesSave') || ''
        return chromeNotesSave ? JSON.parse(chromeNotesSave) : ''
    }

    const handleChangeValue = v => {
        localStorage.setItem('chromeNotesSave', JSON.stringify(v))
    }

  return (
    <div className='chrome-notes'>
        <ReactQuill modules={{ toolbar: null }} defaultValue={getVal()} onChange={handleChangeValue}  />
    </div>
  )
}
