import React from 'react'
import { Forum } from './Forum'

export const Discuss = ({lesson}) => {
    return (
        <div>
            <h1>Discuss lesson number {lesson}</h1>

            <Forum lesson={lesson} />
        </div>
    )
}
