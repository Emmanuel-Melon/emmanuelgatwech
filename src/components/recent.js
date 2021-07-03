import React from "react"
import { Button } from "./button"
import styled from "styled-components"

import { 
  FiCode,
  FiArrowUpRight
} from "react-icons/fi";

import data from "../data.json";


const demos = [
  {
    category: "professional",
    demoAvailable: true,
    sourceAvailable: false,
    id: 1,
    name: "LabXpert",
    summary:
      "LabXpert is a web-based medical laboratory management information system. Once connected to laboratory testing equipment, LabXpert will automatically retrieve completed test results. Results are retrieved in real-time or whenever there is an internet connection.",
  },
  {
    category: "professional",
    demoAvailable: true,
    sourceAvailable: false,
    id: 2,
    name: "Biti",
    summary:
      "Automated job tracking software. Biti allows you track job applications, create job search strategies and more!"
  }
]


const Demo = ({ summary, name }) => {
  return (
    <div className="demo">
      <h4>{name} <FiArrowUpRight /></h4>
      <p>
      {summary}
      </p>
    </div>
  )
}

const Demos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Recent() {
  return (
    <>
      <h1>Articles and Projects</h1>
      <div>
        <div className="more">
          <h3 className="sub-heading">
            Recent Projects
          </h3>
          <Button>More <FiArrowUpRight /> </Button>
        </div>
        <Demos>
          { demos.map(demo => <Demo {...demo} /> )}
        </Demos>
      </div>
      <div>
        <div className="more">
          <h3 className="sub-heading">
            Recent Articles
          </h3>
          <Button>More <FiArrowUpRight /> </Button>
        </div>
        <Demos>
        { data.articles.map(demo => <Demo {...demo} /> )}</Demos>
    </div>      
    </>
  )
}