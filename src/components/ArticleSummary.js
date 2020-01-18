import React from 'react'
import styles from './blog.module.css'
import Moment from 'moment';
import { Link } from "gatsby"

const ArticleSummary = ({ article }) => {
  return (
    <div className={styles.articleSummary}>
      <h3 className={styles.title}>
        <Link to={`/blog/${article.id}`}>
          #{article.id} -
        {article.title}
      </Link>
      </h3>
      <h5>{article.subtitle}</h5>
      <p>{article.summary}</p>
      <ul className={styles.tags}>
      { article.tags.map(tag => {
        return <li className={styles.tag}>{tag}</li>
      })}
      </ul>
    </div>
  )
}

export default ArticleSummary
