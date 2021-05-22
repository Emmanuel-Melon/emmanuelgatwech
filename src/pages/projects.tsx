import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectStyles from "../components/project.module.css"

import ProjectSummary from "../components/ProjectSummary"
import { Link } from "gatsby"

import acham from "../images/acham.png"
import amare from "../images/amare.png"
import mordor from "../images/mordor.png"
import doof from "../images/doof.png"
import revue from "../images/revue.png"
import quote from "../images/quote.png"

// display multiple images in a carousel?
const projects = [
  {
    category: "professional",
    demoAvailable: true,
    sourceAvailable: false,
    id: 3,
    name: "Claudia Acham",
    summary:
      "A website for a Nairobi based South Sudanese Makeup Artist where she lists services, manage bookings and appointments and sells makeup kits.",
    skills: ["Gatsby.js", "Adobe XD", "MongoDB", "Styled-Components"],
    link: "",
    completed: true,
    started: "November",
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "http://acham.life",
    image: true,
    imageUrl: acham,
    points: [
      "Custom &amp; responsive User Interface",
      "Currently building a bookings and orders system",
      "Developing a Messenger Chatbot for more effective communication.",
    ],
  },
  {
    category: "professional",
    demoAvailable: true,
    sourceAvailable: false,
    id: 4,
    name: "Amare The Palace",
    summary:
      "A website for a fancy restaurant.",
    skills: ["Gatsby.js", "Adobe XD", "MongoDB", "Styled-Components"],
    link: "",
    completed: true,
    started: "November",
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "http://acham.life",
    image: true,
    imageUrl: amare,
    points: [
      "Custom &amp; responsive User Interface",
      "Currently building a bookings and orders system",
      "Developing a Messenger Chatbot for more effective communication.",
    ],
  },
  {
    category: "personal",
    id: 5,
    name: "La Revue",
    summary:
      "A restaurant review website that allows you find and review restaurants in any city. The app allows you to search, filter, add reviews and look for meals.",
    skills: [
      "Node.js",
      "MongoDB",
      "React.js",
      "Google Maps API",
      "Styled-Components",
    ],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
    completed: true,
    demoAvailable: false,
    sourceAvailable: true,
    image: true,
    imageUrl: revue,
    points: [
      "Built a React.js web app to fetch nearby restaurants",
      "Used Google Maps APIs to locate users",
      "Built a simple Express API to serve requests",
    ],
  },
  {
    category: "personal",
    id: 6,
    name: "Shadows of Mordor",
    summary:
      "A JavaScript turn-based boardgame where players collect items from the board and then face each other when they land at adjacent cells.",
    skills: ["jQuery", "HTML", "CSS"],
    code: "https://github.com/Emmanuel-Melon/shadows_of_mordor",
    demo: "https://morning-beach-13124.herokuapp.com/",
    completed: true,
    demoAvailable: false,
    sourceAvailable: true,
    image: true,
    imageUrl: mordor,
    points: [
      "Generated game map and placd items randomly",
      "Created a turn based game",
      "Used jQuery to manipulate the DOM to create game events",
    ],
  },
  {
    category: "personal",
    id: 7,
    name: "Quotation Generator",
    summary:
      "Random quote generator which constructs quotes by assembling different pieces of a sentence.",
    skills: ["JavaScript", "Sass", "HTML/CSS"],
    code: "https://github.com/Emmanuel-Melon/Quote-Generator",
    demo: "https://emmanuel-melon.github.io/Quote-Generator/",
    completed: true,
    demoAvailable: false,
    sourceAvailable: true,
    image: true,
    imageUrl: quote,
    points: ["Designed and developed User Interface"],
  },
  {
    category: "personal",
    demoAvailable: true,
    sourceAvailable: false,
    id: 8,
    name: "Brooklyn Film Festival",
    summary:
      "A website for a Nairobi based South Sudanese Makeup Artist where she lists services, manage bookings and appointments and sells makeup kits.",
    skills: ["Gatsby.js", "Adobe XD", "MongoDB", "Styled-Components"],
    link: "",
    completed: false,
    started: "November",
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "http://acham.life",
    image: true,
    imageUrl: acham,
    points: [
      "Custom &amp; responsive User Interface",
      "Currently building a bookings and orders system",
      "Developing a Messenger Chatbot for more effective communication.",
    ],
  },
]

// an extra challenge, retrieve all of your repositories from the Github API
// extract their tags, descriptions and URLs
// use that instead
//
const ProjectsPage = () => {
  const [currentProject, setProject] = useState(null)

  return (
    <Layout>
      <SEO
        title="Projects"
        keywords={[
          `Emmanuel Daniel`,
          `Emmanuel Gatwech`,
          `react`,
          `Node.js`,
          `Eman`,
          `Junubiman`,
          `South Sudan`,
          `Juba`,
          `Software Engineer`,
        ]}
      />
      <div className={projectStyles.projectList}>
        {projects.map(project => (
          <ProjectSummary project={project} key={project.id} />
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsPage
