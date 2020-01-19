import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectStyles from "../components/project.module.css"

import ProjectSummary from "../components/ProjectSummary"
import { Link } from "gatsby"
const bumu = {
  demoAvailable: false,
  sourceAvailable: false,
  id: 1,
  name: "Bumu",
  summary:
    "A social network that connects fans with celebrities. It allows you to call and communicate with your favorite celebrity in exchange for a fee.",
  skills: [
    "Node.js",
    "MongoDB",
    "Google Cloud Platform",
    "React Native",
    "Redis",
    "Socket.Io",
    "Cloud PubSub",
  ],
  link: "",
  completed: false,
  started: "November",
  code: "https://github.com/Emmanuel-Melon/la-revue",
  demo: "https://morning-beach-13124.herokuapp.com/",
}

const projects = [
  {
    category: "professional",
    demoAvailable: true,
    sourceAvailable: false,
    id: 1,
    name: "Style Bites",
    summary:
      "A website for an interior design start up in Juba, South Sudan. It allows users to browse and make orders on various listings.",
    skills: [
      "Gatsby.js",
      "Ghost",
      "E-Commerce",
      "Adobe XD",
    ],
    link: "",
    completed: false,
    started: "November",
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    category: "professional",
    id: 2,
    name: "Yonja",
    summary:
      "Yonja is a GIS-enabled mobile application designed to provide and improve waste and sanitation service delivery in urban areas of Uganda, by connecting legally registered waste management entrepreneurs to customers. ",
    skills: ["Node.js", "MongoDB", "Cloud Functions", "React", "Material UI"],
    demo: "https://play.google.com/store/apps/details?id=com.yonjainc.yonja",
    completed: true,
    demoAvailable: true,
    sourceAvailable: false,
  },
  {
    category: "personal",
    id: 3,
    name: "La Revue",
    summary:
      "A restaurant review website that allows you find and review restaurants in any city. The app allows you to search, filter, add reviews and look for meals.",
    skills: [
      "Algolia",
      "Node.js",
      "MongoDB",
      "React.js",
      "Google Maps API",
      "Styled-Components",
    ],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
    completed: false,
    demoAvailable: true,
    sourceAvailable: true,
  },
  {
    category: "personal",
    id: 4,
    name: "NeyDB",
    summary:
      "A distributed key/value store database inspired by Cassandra's architecture",
    skills: ["Rust", "Distributed Systems", "Key/Value", "Consistent Hashing"],
    code: "https://github.com/Emmanuel-Melon/ney_db",
    demoAvailable: true,
    sourceAvailable: true,
    completed: false,
  },
  {
    category: "professional",
    id: 5,
    name: "Doof Bot",
    summary:
      "A messenger chat bot for a wine marketing and distribution company. It alows clients to place orders directly from within the Bot.",
    skills: ["Messenger API", "Node.js", "PostgreSQL", "Facebook Payments"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://m.me/104195541107475",
    demoAvailable: true,
    completed: false,
    sourceAvailable: false,
  },
  {
    category: "personal",
    id: 6,
    name: "RustMQ",
    summary: "My attempt at porting RSMQ into Rust.",
    skills: ["Rust", "Redis", "Message Queue"],
    code: "https://github.com/Emmanuel-Melon/rust_rsmq",
    demoAvailable: true,
    sourceAvailable: true,
    completed: false,
  },
  {
    category: "personal",
    id: 7,
    name: "Melon",
    summary:
      "A tiny compiler that supports static typing and Object Oriented Programming. It's based on COOL and is written in C++.",
    skills: ["C++", "Compilers", "Algorithms", "COOL", "OOP"],
    code: "https://github.com/Emmanuel-Melon/melon",
    demoAvailable: true,
    completed: false,
    sourceAvailable: true,
  },
  {
    category: "personal",
    id: 8,
    name: "Quotation Generator",
    summary:
      "Random quote generator which constructs quotes by assembling different pieces of a sentence.",
    skills: ["JavaScript", "Sass", "HTML/CSS"],
    code: "https://github.com/Emmanuel-Melon/Quote-Generator",
    demo: "https://emmanuel-melon.github.io/Quote-Generator/",
    completed: true,
    demoAvailable: true,
    sourceAvailable: true,
  },
  {
    category: "personal",
    id: 9,
    name: "Shadows of Mordor",
    summary: "A turn-based JavaScript board game.",
    skills: [
      "elasticbeanstalk",
      "amazon web services",
      "JavaScript",
      "HTML/CSS",
      "jQuery",
      "Travis CI",
    ],
    code: "https://github.com/Emmanuel-Melon/shadows_of_morodor",
    demo: "https://shadows-of-mordor.herokuapp.com/",
    demoAvailable: true,
    completed: false,
    sourceAvailable: true,
  },
  {
    category: "personal",
    id: 10,
    name: "Film Festival",
    summary:
      "A prototype for a static website built using HTML/CSS and JavaScript. It utilizes the Bootstrap CSS Framework for it's flexible grid system and ease of use.",
    skills: ["HTML/CSS", "Bootstrap", "Prototype"],
    code: "https://github.com/Emmanuel-Melon/Film-Festival",
    demo: "https://emmanuel-melon.github.io/Film-Festival/",
    completed: true,
    demoAvailable: true,
    sourceAvailable: true,
  },
  {
    category: "personal",
    id: 11,
    name: "Rust Tiny Server",
    summary: "An HTTP web server implementation in Rust",
    skills: ["Rust", "http", "tcp"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
    demoAvailable: true,
    completed: false,
    sourceAvailable: true,
  },
  {
    category: "personal",
    id: 12,
    name: "TodoMVC",
    summary: "An MVC todo app",
    skills: ["HTML/CSS", "jasmine", "tdd", "JavaScript", "DevTools"],
    code: "https://github.com/Emmanuel-Melon/vanilla-todo",
    demo: "https://emmanuel-melon.github.io/vanilla-todo/",
    completed: true,
    demoAvailable: true,
    sourceAvailable: true,
  },
  {
    id: 13,
    name: "React Layouts",
    summary:
      "An Open Source project that demonstrates various UI layouts in React.js",
    skills: ["React.js", "Open Source", "UX/UI"],
    code: "https://github.com/Albystein/React-Layouts",
    demoAvailable: true,
    sourceAvailable: true,
    completed: true,
  },
  {
    category: "personal",
    id: 14,
    name: "Card Checkout Screen",
    summary:
      "A card checkout screen that allows users to add items to a cart and then validate their payment method.",
    skills: ["JavaScript", "HTML/CSS"],
    code: "https://github.com/Emmanuel-Melon/card-checkout-screen",
    demo: "https://emmanuel-melon.github.io/card-checkout-screen/",
    completed: true,
    demoAvailable: true,
    sourceAvailable: true,
  },
  {
    category: "personal",
    id: 15,
    name: "Byarent",
    summary:
      "A rent seeking platform where property owners upload their properties for potential tenants.",
    skills: ["Node.js", "Pug", "SSR"],
    code: "https://github.com/Emmanuel-Melon/byarent",
    demo: "https://emmanuel-melon.github.io/byarent/",
    demoAvailable: true,
    sourceAvailable: true,
    completed: false,
  },
  {

    id: 16,
    name: "Developer Circle Kampala Portal",
    summary:
      "A portal that allows interested community members to join the Kampala Developer Circle platform where they could receive mentorship, partner up in projects and look for job opportunuties.",
    skills: ["HTML/CSS", "JavaScript", "Open Source", "Node.js"],
    code: "https://github.com/devckla/devckla.github.io",
    demo: "https://morning-beach-13124.herokuapp.com/",
    demoAvailable: true,
    completed: true,
    sourceAvailable: true,
  },
  {
    category: "personal",
    id: 17,
    name: "WebRTC Video Chat",
    summary:
      "A simple video chat application built on top of the WebRTC protocol that uses Socket.Io as its signaling server.",
    skills: ["WebRTC", "HTML5", "Socket.Io"],
    code: "https://github.com/Emmanuel-Melon/webrtc_video_chat",
    demo: "https://emmanuel-melon.github.io/webrtc_video_chat/",
    demoAvailable: true,
    sourceAvailable: true,
    completed: true,
  },
  {
    category: "personal",
    id: 18,
    name: "Express Food",
    summary:
      "Express Food is a start up based in Paris, France that delivers high quality meals to residences in less than 20 minutes with their team of delivery bikes.",
    skills: ["UML", "Domain Driven Design", "Software Design"],
    code: "https://github.com/Emmanuel-Melon/Express-Food",
    completed: true,
    demoAvailable: true,
    sourceAvailable: true,
  },
  {
    category: "personal",
    id: 19,
    name: "Personal Website",
    summary:
      "My own personal website and portfolio. Built using Gatsby.js and GraphQL",
    skills: ["GraphQL", "GatsbyJS", "UX/UI", "Adobe XD"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
    private: true,
    completed: true,
    demoAvailable: true,
    sourceAvailable: false,
  },
    {
    category: "professional",
    demoAvailable: true,
    sourceAvailable: false,
    id: 20,
    name: "Claudia Acham",
    summary:
      "A website for an interior design start up in Juba, South Sudan. It allows users to browse and make orders on various listings.",
    skills: [
      "Gatsby.js",
      "Ghost",
      "E-Commerce",
      "Adobe XD",
    ],
    link: "",
    completed: false,
    started: "November",
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  }
]

// an extra challenge, retrieve all of your repositories from the Github API
// extract their tags, descriptions and URLs
// use that instead
//
const ProjectsPage = () => {
  const [currentProject, setProject] = useState(null)

  return (
    <Layout>
      <SEO title="Projects" keywords={[`Emmanuel Daniel`, `Emmanuel Gatwech`, `react`, `Node.js`, `Eman`, `Junubiman`, `South Sudan`, `Juba`, `Software Engineer`]} />
      <div className='main'>
        <div>
      <h1 className='sub-heading'>My Projects</h1>
      <p>Some of the most recent projects that I've worked on.</p>
        <div className={projectStyles.filter}>
        </div>
        </div>
      </div>
      <div className={projectStyles.projectList}>
        {projects.map(project => (
          <ProjectSummary project={project} key={project.id} />
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsPage
