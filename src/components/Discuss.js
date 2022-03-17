import React from 'react'
import { Forum } from './Forum/Forum'

export const Discuss = (props) => {
    return (
        <div>
            <h1>Discuss lesson number {props.match.params.lesson}</h1>

            <Forum lesson={props.match.params.lesson} />
        </div>
    )
}
