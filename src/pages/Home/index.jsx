import React, { useRef, useEffect } from 'react'
import ReactQuill from 'react-quill'
import './counter'
import 'react-quill/dist/quill.snow.css'
import './index.styl'

export default () => {
    const quillRef = useRef(null)

    const getVal = () => {
        const chromeNotesSave = localStorage.getItem('chromeNotesSave') || ''
        return chromeNotesSave ? JSON.parse(chromeNotesSave) : ''
    }

    const handleChangeValue = v => {
        localStorage.setItem('chromeNotesSave', JSON.stringify(v))
    }

    const config = { toolbar: null, counter: { container: 'counter' } }

  return (
    <div className='chrome-notes'>
        <ReactQuill ref={quillRef} modules={config} defaultValue={getVal()} onChange={handleChangeValue}  />
        <div id='counter' />
    </div>
  )
}
