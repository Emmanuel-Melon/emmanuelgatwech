import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Recent from "../components/recent"
import styled from "styled-components"
import me from "../images/eman.jpg"

import { 
  FiTwitter,
  FiGithub,
  FiCode,
  FiLinkedin,
  FiArrowUpRight,
  FiMapPin,
  FiChevronDown
} from "react-icons/fi";

const orgs = [
  {
    id: 1,
    name: "Yonja",
    url: "https://yonja.io",
    start: "February 2019",
    finish: "October 2019",
    title: "Software Engineer",
    location: "Kampala, Uganda"
  },
    {
    id: 2,
    name: "Freelance",
    url: "https://yonja.io",
    start: "October 2019",
    finish: "April 2020",
    title: "Software Engineer",
    location: "Kampala, Uganda"
  },
  {
    id: 3,
    name: "FreelyFormd",
    url: "https://freelyformd.com",
    start: "June 2020",
    finish: "APril 2021",
    title: "Software Engineer",
    location: "Remote"
  }
]

const Org = ({
  name,
  url,
  start,
  finish,
  title,
  location,
  id
}) => {
  return (
    <div className="org">
      <div className="org-head">
      <div className="org-head">
        <Icon>{id} </Icon>
        <div className="comp">
          <p className="title">
         {title}
        </p>
          <h4 className="other-heading">{name} <FiArrowUpRight /></h4>
        </div>
        </div>
        <p className="duration">{start} - {finish}</p>
        
      </div>
    </div>
  )
}

const Skills = styled.ul`
  justify-content: sapce-between;
  display: flex;
  flex-direction: column-reverse;
  width: 700px;
  flex: 2;
  & li {
    background: #184d47;
    border-r
    margin-ri
    padding: 0.4rem;
    color: #fff;
  
  }
`;

const Icon = styled.span`
  border-radius: 50%;
  margin-right: 0.5rem;
  color: var(--white);
  padding: 0.5rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
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
    <div className="profile">
    <div className="note">
      <p>Hi, my name is</p>
      <div>
        <h1>Emmanuel <br />Daniel</h1>
        <h2>But you can call me Eman, and the E is for Energy ⚛️</h2>
      </div>
      

      
      <p> I am a Full-Stack Software Developer with nearly 3 years of relevant experience and a proven track record of success in achieving extraordinary results.</p>
      </div>

      <div>
      <h4>Connect with me</h4>
      <ul className="social">
        <li>
          <a href="https://twitter.com/junubiman" target="_blank"> <FiTwitter className="icon" /> Twitter <FiArrowUpRight />
          </a>
        </li>
        <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <FiGithub className="icon" /> Github <FiArrowUpRight />
          </a>
        </li>
        <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <FiLinkedin className="icon" /> LinkedIn <FiArrowUpRight />
          </a>
        </li>
      </ul>
      </div>

      <div className="scroll">
        <ul className="control">
          <li><FiChevronDown /></li>
          <li><FiChevronDown /></li>
          <li><FiChevronDown /></li>
          <li><FiChevronDown /></li>
        </ul>
      </div>

    </div>

    <div className="summary">
      <div className="summary-left">
        <h4>Currently</h4>
      <Sidebar />
      </div>

      <section className="work">
          <div>
        <h4>Previously</h4>
        <Skills>
          {
            orgs.map(org => <Org {...org} key={org.id}/>)
          }
        </Skills>
      </div>
    </section>
    </div>
    <Recent />
  </Layout>
)

export default IndexPage
