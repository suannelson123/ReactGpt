import React from 'react'
import  './Article.css'

const Article = ({imgUrl, date, text }) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-img'>
        <img src={imgUrl} alt="blogImg" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p className='gpt3__blog-container_article-date'>{date}</p>
          <h3 className='gpt3__blog-container_article-title'>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
