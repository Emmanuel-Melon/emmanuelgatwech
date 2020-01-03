import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectStyles from "../components/project.module.css"

import ProjectSummary from "../components/ProjectSummary"
import { Link } from "gatsby"

const projects = [
  {
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
  },
  {
    id: 2,
    name: "Yonja",
    summary:
      "Yonja is a GIS-enabled mobile application designed to provide and improve waste and sanitation service delivery in urban areas of Uganda, by connecting legally registered waste management entrepreneurs to customers. ",
    skills: ["Node.js", "MongoDB", "Cloud Functions", "React"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 3,
    name: "La Revue",
    summary: "A restaurant review website",
    skills: ["Algolia", "Node.js", "MongoDB", "React.js", "Google Maps API"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 4,
    name: "NeyDB",
    summary:
      "A distributed key/value store database inspired by Cassandra's architecture",
    skills: ["Rust", "Distributed Systems", "Key/Value", "Consistent Hashing"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 5,
    name: "Winey Bot",
    summary:
      "A messenger chat bot for a wine marketing and distribution company",
    skills: ["Messenger API", "Node.js"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 6,
    name: "RustMQ",
    summary: "My attempt at porting RSMQ into Rust.",
    skills: ["Rust", "Redis"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 7,
    name: "Melon",
    summary:
      "A tiny compiler that supports static typing and Object Oriented Programming. It's based on COOL and is written in C++.",
    skills: ["C++", "Compilers", "Algorithms"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 8,
    name: "Quotation Generator",
    summary:
      "Random quote generator which constructs quotes by assembling different pieces of a sentence.",
    skills: ["JavaScript", "Sass", "HTML/CSS"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 8,
    name: "Shadows of Mordor",
    summary: "A turn-based JavaScript board game.",
    skills: ["JavaScript", "HTML/CSS", "jQuery"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 9,
    name: "Film Festival",
    summary:
      "A prototype for a static website built using HTML/CSS and JavaScript. It utilizes the Bootstrap CSS Framework for it's flexible grid system and ease of use.",
    skills: ["HTML/CSS", "Bootstrap", "Prototype"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 10,
    name: "Rust Tiny Server",
    summary: "An HTTP web server implementation in Rust",
    skills: ["Rust", "http", "tcp"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 11,
    name: "TodoMVC",
    summary: "An MVC todo app",
    skills: ["HTML/CSS", "jasmine", "tdd", "JavaScript", "DevTools"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 12,
    name: "React Layouts",
    summary:
      "An Open Source project that demonstrates various UI layouts in React.js",
    skills: ["React.js", "Open Source"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 13,
    name: "Card Checkout Screen",
    summary:
      "A card checkout screen that allows users to add items to a cart and then validate their payment method.",
    skills: ["JavaScript", "HTML/CSS"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 14,
    name: "Byarent",
    summary:
      "A rent seeking platform where property owners upload their properties for potential tenants.",
    skills: ["Node.js", "Pug", "SSR"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 15,
    name: "Developer Circle Kampala Portal",
    summary:
      "A portal that allows interested community members to join the Kampala Developer Circle platform where they could receive mentorship, partner up in projects and look for job opportunuties.",
    skills: ["HTML/CSS", "JavaScript", "Open Source"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 16,
    name: "WebRTC Video Chat",
    summary:
      "A simple video chat application built on top of the WebRTC protocol that uses Socket.Io as its signaling server.",
    skills: ["WebRTC", "HTML5", "Socket.Io"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 17,
    name: "Express Food",
    summary:
      "Express Food is a start up based in Paris, France that delivers high quality meals to residences in less than 20 minutes with their team of delivery bikes.",
    skills: ["UML", "Domain Driven Design", "Software Design"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
  },
  {
    id: 18,
    name: "Personal Website",
    summary:
      "My own personal website and portfolio. Built using Gatsby.js and GraphQL",
    skills: ["GraphQL", "GatsbyJS", "UX/UI", "Adobe XD"],
    code: "https://github.com/Emmanuel-Melon/la-revue",
    demo: "https://morning-beach-13124.herokuapp.com/",
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
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <h1>My Projects</h1>
      <p>Some of the most recent projects that I've worked on.</p>
      <div className={projectStyles.projectList}>
        {projects.map(project => (
          <ProjectSummary project={project} key={project.id} />
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsPage
