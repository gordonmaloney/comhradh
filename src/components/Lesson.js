import React from 'react'
import { LESSONS } from './Lessons/LESSONS'
import {VocabSidebar} from './VocabSidebar'

export const Lesson = (props) => {

    return (
        <div>
            <VocabSidebar lesson={props.match.params.lesson}/>

            {LESSONS.filter(LESSON => LESSON.lesson == props.match.params.lesson)[0].content}

        </div>
    )
}
