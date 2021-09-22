import React, {useState} from 'react'
import {WORDS} from './Lessons/WORDS'
import { TextField } from '@material-ui/core'


export const Dictionary = () => {
    const [searchTerm, setSearchTerm] = useState(null)

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const unfilteredWords = WORDS.map(WORD => <> <b>Lesson {WORD.lesson}</b> {WORD.words.map(word => <p>{word.gd} - {word.en}</p>)} </> )
    const filteredWords = WORDS.map(WORD => WORD.words.filter(words => words.gd.includes(searchTerm) || words.en.includes(searchTerm)).map(word => <p>{word.gd} - {word.en} - (lesson {WORD.lesson})</p>))

    
    return (
        <div>

        <TextField placeholder="Search" onChange={e => handleChange(e)}/>

        <br />
        {searchTerm ? filteredWords : unfilteredWords }
        </div>
    )
}

