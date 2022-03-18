import React from 'react'
import { WORDS } from '../Lessons/WORDS'
import { FlashcardLogic } from './FlashcardLogic'
import { Studier } from './Studier'


export const FlashcardsMain = () => {

    const user = "testUser"
    const userLevel = 1

    const words = []
    WORDS.map(lesson => {lesson.lesson <= userLevel && lesson.words.map(word => words.push(word))})
    console.log(words)

    //level 1 vocab
    const level1vocab = WORDS.filter(word => word.lesson == 1)[0].words
        //console.log(level1vocab)
    //level2 vocab
    const level2vocab = WORDS.filter(word => word.lesson == 2)[0].words
        //console.log(level2vocab)

  return (
    <div className="innerContainer">
        <h1>Flashcards</h1>
        <span>Level 1:</span>
        <Studier words={level1vocab}/>
        
        <span>Level 2:</span>
        <Studier words={level2vocab}/>

        <FlashcardLogic />
    </div>
  )
}
