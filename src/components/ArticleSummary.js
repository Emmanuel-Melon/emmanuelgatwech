import React from 'react'
import styles from './blog.module.css'
import Moment from 'moment';
import { Link } from "gatsby"

const ArticleSummary = ({ article }) => {
  return (
    <div className={styles.articleSummary}>
      <Link to={`/blog/${article.id}`}>
      <h3 className={styles.title}>
        {article.title}
      </h3>
      <p>{article.summary}</p>
      <ul className={styles.tags}>
      { article.tags.map(tag => {
        return <li className={styles.tag}>{tag}</li>
      })}
      </ul>
    </Link>
    </div>
  )
}

export default ArticleSummary
