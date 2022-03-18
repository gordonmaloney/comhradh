import React from 'react'
import { WORDS } from '../Lessons/WORDS'
import { FlashcardLogic } from './FlashcardLogic'
import { Studier } from './Studier'
import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { fetchUserData, updateUser } from "../../actions/auth";
import { useSelector, useDispatch } from "react-redux";

export const FlashcardsMain = () => {
  
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const posts = useSelector((state) => state);
  user?.result?.email && !posts.auth.name && dispatch(fetchUserData(user.result._id))

    const userLevels = posts.auth.progress
  
    console.log(userLevels)

    const words = []
    WORDS.map(lesson => 
      userLevels.map(userLevel => 
        {lesson.lesson == userLevel && lesson.words.map(word => words.push(word))})
    )

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
        <Studier words={words}/>

    </div>
  )
}
