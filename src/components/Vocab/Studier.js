import React from 'react'

export const Studier = ({words}) => {

  return (
    <>
    {words.map(word => <>{word.en} - {word.gd}<br /></>)}
    </>
  )
}
