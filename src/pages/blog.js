import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleSummary from '../components/ArticleSummary'

const articles = [
  {
    id: 1,
    title: "Mu #100DaysOfCode Journey",
    subtitle: "Don't hold back yourself, realise your full potential",
    summary: "But that's the thing about tech, you can't know everything and you don't have to; Just learn enough to become productive and you'll eventually become really good at what you do because learning is a continuous process.\n" +
      "One other thing is to talk to to others and to not be afraid of sharing your progress. All these experts we were once beginners and you'll be surprised by how many share the same experience as you.\n" +
      "Be ambitious but also realistic, and realise that every castle started at the basement and it slowly grew to become an amazing castle.\n" +
      "Afraid of exposing my content online. Can't share my progress and achievements. Feeling like a fraud. \n" +
      "There's nothing worse than knowing that you can code or create stuff but not publishing them because of the fear of criticism. \n" +
      "I don't wanna to sound egotistical at all, just sharing an experience that I've had for years. I'd rather call it an experience that I'm gonna learn lessons from and then proceed to become a better version of myself.\n" +
      "\n" +
      "\n" +
      "Why am I doing this challenge? \n" +
      "Overcome my imposter syndrome and to show that it is okay to not know everything.\n" +
      "Motivate others to follow the same path. \n" +
      "Interact with the community and gain new friends.\n" +
      "\n" +
      "\n" +
      "Always browsing job boards looking out for jobs where I meet all of the skill requirements then I end passing on those jobs that I have all the skills for because I don't have a portfolio or anything to show for.\n" +
      "\n" +
      "\n" +
      "Writing code, thinking it's beautiful but feeling afraid to share it because of the fear of being ridiculed.\n" +
      "One of the things that encouraged me was a Q&A session hosted by Brian Holt on Hashnode. \n" +
      "I reached out to Brian Holt and he showed me some of the code that he wrote a while back and it wasn't so great. This assured me that we all start somewhere and then gradually build on it." +
      "My inspiration for writing this post came from this tweet\n" +
      "You can follow me on Twitter where I constantly share about my learning journey",
    timestamp: Date.now(),
    tags: ["Development", "Self-Reflection", "Career Goals"]
  }
]


const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`Emmanuel Daniel`, `Emmanuel Gatwech`, `react`, `Node.js`, `Eman`, `Junubiman`, `South Sudan`, `Juba`, `Software Engineer`]} />
      <h1>My Blog</h1>
      <p>
        Where I share my experiences and my thoughts
      </p>
      {
        articles.map(article => {
          return <ArticleSummary article={article} key={article.id} />
        })
      }
    </Layout>
  )
}

export default BlogPage
