import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Recent from "../components/recent"
import styled from "styled-components"

import { 
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiFile,
  FiChevronDown
} from "react-icons/fi";

import data from "../data.json"

const Organizations = styled.ul`
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

const Organization = styled.div`
  border-radius: var(--border-radius);
  margin-top: 1rem;
  color: #fff;
  box-shadow: var(--box-shadow);
  background: var(--content-background);
  border: solid 0.1rem var(--content-background);
  padding: 1rem;

  & hover {
    border-bottom: solid 0.15rem var(--primary-color);
  }
`;

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
    <Organization className="org">
      <div className="org-head">
        <div className="comp">
          <p>{title}</p>
          <h4 className="other-heading">{name} <FiArrowUpRight /></h4>
        </div>
        <p className="duration">{start} - {finish}</p>
      </div>
    </Organization>
  )
}

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
    <section>
      <h1>Emmanuel Daniel</h1>
      <h4>But you can call me Eman, and the E is for Energy ⚛️</h4>
      <p> I am a Full-Stack Software Developer with nearly 3 years of relevant experience and a proven track record of success in achieving extraordinary results.</p>
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
        <li>
          <a href="https://github.com/Emmanuel-Melon" target="_blank">
          <FiFile className="icon" /> Resume <FiArrowUpRight />
          </a>
        </li>
      </ul>
      </div>
    </section>
    <section className="summary">
      <div className="summary-left">
        <h4>Currently</h4>
      <Sidebar />
      </div>
      <div className="work">
          <div>
        <h4>Previously</h4>
        <Organizations>
          {
            data.work.map(org => <Org {...org} key={org.id}/>)
          }
        </Organizations>
      </div>
    </div>
    </section>
    <section>
      <Recent />
    </section>
  </Layout>
)

export default IndexPage
