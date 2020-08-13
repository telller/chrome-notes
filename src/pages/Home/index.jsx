import { getGist, updateGist } from 'services/gist.service'
import React, { useRef, useEffect } from 'react'
import ReactQuill from 'react-quill'
import { get, debounce } from 'lodash'
import './counter'
import 'react-quill/dist/quill.snow.css'
import './index.styl'

export default () => {
    const debouncedOnUpdate = useRef(debounce(val => updateGist({
        description: 'chrome-notes update',
        "files": {
            "chrome-notes.txt": {
                "content": val,
                filename: "chrome-notes.txt"
            }
        }}), 5000))
    const quillRef = useRef(null)

    useEffect(() => {
        (async () => {
            const gist = await getGist()
            const content = get(gist.files['chrome-notes.txt'], 'content', '')
            localStorage.setItem('chromeNotesSave', JSON.stringify(content))
        })()
    }, [])

    const getVal = () => {
        const chromeNotesSave = localStorage.getItem('chromeNotesSave') || ''
        return chromeNotesSave ? JSON.parse(chromeNotesSave) : ''
    }

    const handleChangeValue = v => {
        localStorage.setItem('chromeNotesSave', JSON.stringify(v))
        debouncedOnUpdate.current(v)
    }

    const config = { toolbar: null, counter: { container: 'counter' } }

  return (
    <div className='chrome-notes'>
        <ReactQuill ref={quillRef} modules={config} defaultValue={getVal()} onChange={handleChangeValue}  />
        <div id='counter' />
    </div>
  )
}
