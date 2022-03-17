import React from 'react'
import { WORDS } from '../Lessons/WORDS'
import { Studier } from './Studier'


export const FlashcardsMain = () => {

    const user = "testUser"
    const userLevel = 2

    const words = []
    WORDS.map(lesson => {lesson.lesson <= userLevel && lesson.words.map(word => words.push(word))})
    console.log(words)

  return (
    <div className="innerContainer">
        <h1>Flashcards</h1>
        <span>{user} - level {userLevel}</span>

        <Studier words={words}/>

    </div>
  )
}
