import React from "react"

import { 
  FiCode,
  FiArrowUpRight
} from "react-icons/fi";


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

const articles = [
  {
    category: "professional",
    demoAvailable: true,
    sourceAvailable: false,
    id: 1,
    name: "Understanding Git",
    summary:
      "This article will help you gain a practical understanding of Git's most commonly used features. Having a solid grasp of these concepts will help you avoid common mistakes and also use Git more efficiently.",
  },
  {
    category: "professional",
    demoAvailable: true,
    sourceAvailable: false,
    id: 2,
    name: "MongoDB Aggregation Framework",
    summary:
      "Aggregations operations process data records and return computed results. Aggregation operations group values from multiple documents together and can perform a variety of operations on the grouped data to return a single result. In SQL count(*) and with the group by is an equivalent of MongoDB aggregation."
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

export default function Recent() {
  return (
    <div>
            <div>
      <div className="more">
        <h3 className="sub-heading">Recent <br />Projects</h3>
        <p>More <FiArrowUpRight /> </p>
      </div>
      <div className="demos">
      {
        demos.map(demo => <Demo {...demo} /> )
      }</div>
    </div>
        <div>
            <div className="more">
        <h3 className="sub-heading">Recent <br />  Articles</h3>
        <p>More <FiArrowUpRight /> </p>
      </div>
      <div className="demos">
      {
        articles.map(demo => <Demo {...demo} /> )
      }</div>
    </div>
    </div>
  )
}