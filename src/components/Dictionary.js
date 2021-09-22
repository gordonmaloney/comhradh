import React from 'react'
import {WORDS} from './Lessons/WORDS'

export const Dictionary = () => {
    return (
        <div>
           {WORDS.map(WORD =>  

           <> 
           Lesson {WORD.lesson}
           {WORD.words.map(word => <p>{word.gd} - {word.en}</p>)}
           </>
           
           
           )}
        </div>
    )
}

