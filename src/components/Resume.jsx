import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2018",
      title: "Bachelor's Degree in Computer Sciences",
      place: "Tecnológico de Costa Rica",
      desc: "This discipline's emphasis is to achieve maximum performance of information technology in commercial, administrative and industrial activities. As part of the technological advance that currently exists in the world, Costa Rican companies have shown great capabilities to develop high-quality software and systems; Therefore, there is a potential to strengthen the software export business sector.",
    },
    {
      yearRange: "2016",
      title: "Bachelor's Degree in Mathematics",
      place: "Tecnológico de Costa Rica",
      desc: "It's a career that unites mathematics and computing. Topics such as geometry, algebra, analysis and statistics are developed.",
    },

  ];

  const experienceDetails = [
    {
      yearRange: "nov. 2022 - actually",
      title: "Data Engineer",
      place: "Coopelesca R.L",
      desc: "Modern Data Engineering: Relational, non-relationals and time series databases. Creation of complex pipelines. Data ingestion and data lake management. Infrastructure development as code. API development. Deployments of containerized projects, high availability with load balancing, implementation of CI/CD in projects, work with DevOps/Scrum, version control and collaborative work, hybrid connections, logic apps, PBI services, Airflow, data streaming among others modern data engineering concepts.",
    },

    {
      yearRange: "jul. 2021 - nov. 2022",
      title: "Data Analyst",
      place: "LMT Conexus Group",
      desc: "Data modeling, Scripting with Python and R, API development with Flask, report automation (extract data from SQL server, transform it and send report by email), creation of dashboard in Power Bi using techniques such as data storytelling, data mining that They came from Google Analytics, audio mining with Python, feature extraction, sentiment detection in customer service calls and in social media comments.",
    },
    {
      yearRange: "jul. 2020 - mar. 2021",
      title: "Credit advisor",
      place: "Grameen Bank",
      desc: "Credit promoter, analysis of potential clients, credit record analysis, collection of necessary data according to SUGEF, judicial collection reports, social impact. Grameen is a microfinance organization, of a social nature, that provides microcredits to women in economically vulnerable conditions so that they can grow or start a business.",
    },
  ];

  const skills = [
    {
      name: "Terraform",
      percent: 100,
    },
    {
      name: "Azure Cloud Services",
      percent: 85,
    },
    {
      name: "AWS",
      percent: 80,
    },
    {
      name: "Python",
      percent: 100,
    },
    {
      name: "R Project for Statistical Computing",
      percent: 100,
    },
    {
      name: "Docker",
      percent: 85,
    },
    {
      name: "Kubernetes",
      percent: 70,
    },
    {
      name: "Azure Logic Apps",
      percent: 75,
    },
    {
      name: "Apache Airflow",
      percent: 90,
    },
    {
      name: "CI/CD",
      percent: 95,
    },
    {
      name: "Times series DB",
      percent: 85,
    },
    {
      name: "Oracle PL-SQL",
      percent: 95,
    },
    {
      name: "Linux",
      percent: 85,
    },
    {
      name: "Azure DevOPS & Scrum",
      percent: 100,
    },
    {
      name: "Times series DB",
      percent: 85,
    },
    {
      name: "Snowflake cloud",
      percent: 65,
    }
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
