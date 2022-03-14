import React from 'react'
import { Forum } from './Forum/Forum'

export const Discuss = (props) => {
    return (
        <div>
            <h1>Discuss lesson number {props.lesson}</h1>


            <Forum lesson={props.lesson} />
        </div>
    )
}
