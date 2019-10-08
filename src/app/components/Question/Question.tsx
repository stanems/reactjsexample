import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import './style.css'
import { Question as QuestionType } from '../../utils/types'

interface Props {
  question: QuestionType
}

const Question = (props: Props) => {
  const { title, answer_count, owner, tags, body } = props.question
  const { display_name, profile_image } = owner

  const questionBody = ReactHtmlParser(body)

  return (
    <div className='question__container'>
      <header className='question__headerContainer'>
        <div className='questionHeader__profile'>
          <img src={profile_image} alt='avatar' className='questionHeader__avatar' />
          <p className='questionHeader__name'>{display_name}</p>
        </div>
        <div className='questionHeader__postInfo'>
          <h1>{title}</h1>
          <div className='questionHeader__answersAndTags'>
            <p>Tags: {tags.join(', ')}</p>
            <p>Answers: {answer_count}</p>
          </div>
        </div>
      </header>
      <div className='question__bodyContainer'>
        {questionBody}
      </div>
    </div>
  )
}

export default Question