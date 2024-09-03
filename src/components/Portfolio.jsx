import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    AGILE: "Agile",
    CLOUD: "Cloud",
    SCRIPT: "Script",
  };

  const projectsData = [
    {
      title: "Microsoft Azure DevOps",
      projectInfo:"DevOps as a key framework in the development of scalable projects. Analysis, integration and development of key concepts of a DevOps architecture. Automation of production deployments to generate value in the organization in less time.",
      client: "Smart Data",
      technologies: "Cloud Services",
      date: "September 06, 2023",
      socialLinks: {
        mail: "mailto:yadir.sve@gmail.com",
      },
      thumbImage: "images/certification/devops.png",
      categories: [filters.CLOUD],
      sliderImages: [
        "images/projects/dev.png",
      ],
    },
    {
      title: "Microsoft Azure Data Engineering",
      projectInfo:
        "Fundamentals of Microsoft Azure cloud computing services, introduction to Microsoft Azure, data storage and processing, real-time analysis, application deployment and development of an integrative project with everything learned.",
        client: "Smart Data",
        technologies: "Cloud Services",
        date: "August 23, 2023",
        socialLinks: {
          mail: "mailto:yadir.sve@gmail.com",
        },
        thumbImage: "images/certification/idazure.png",
        sliderImages: [
          "images/projects/diazure.png",
          "images/projects/diazure2.png",
        ],
        categories: [filters.CLOUD],
    },
    {
      title: "Databricks Lakehouse Fundamentals",
      projectInfo:
        "Databricks is a platform that brings together data, analytics and artificial intelligence in a unified solution. It provides various services such as data lake, data engineering, data science, machine learning, and SQL analysis. Databricks is based on Apache Spark, an open source framework for data processing and distributed computing. Databricks also supports other open source technologies, such as Delta Lake, MLflow, and Koalas.",
      client: "Databricks Academy",
      technologies: "Cloud Services",
      date: "July 28, 2023",
      socialLinks: {
        mail: "mailto:yadir.sve@gmail.com",
      },
      thumbImage: "images/certification/lakehouse.png",
      sliderImages: [
        "images/projects/databricks.png",
        "images/projects/databricks2.png",
      ],
      categories: [filters.CLOUD],
    },
    {
      title: "Scrum Fundamentals Certified",
      projectInfo:
        "4th edition of the SBOK®",
      client: "Scrum Study",
      technologies: "Agile",
      date: "Jan 11, 2024",
      socialLinks: {
        mail: "mailto:yadir.sve@gmail.com",
      },
      thumbImage: "images/certification/ScrumFundamentals.png",
      sliderImages: [
        "images/projects/scrum.png",
      ],
      categories: [filters.AGILE],
      url: {
        name: "Badge",
        link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1012751",
      }
    },
    {
      title: "Python Fundamentals",
      projectInfo:
        "In this course, students acquire the essential skills for solving well-defined problems of low to medium complexity, through the Python programming language, in order to design and code possible solutions. You will also learn about the installation and configuration of the development environment, the syntax of the language, programming structures, and basic reading and storage of information.",
      client: "Cenfotec",
      technologies: "Programming language",
      date: "July 31, 2023",
      socialLinks: {
        mail: "mailto:yadir.sve@gmail.com",
      },
      thumbImage: "images/certification/python.png",
      sliderImages: [
        "images/projects/air.png",
        "images/projects/etl.jpg",
        "images/projects/maxresdefault.jpg",
      ],
      categories: [filters.SCRIPT],
      url: {
        name: "Badge",
        link: "https://www.credly.com/badges/727a79ab-8919-4bb9-a2a3-0b241ed5dfe1/public_url",
      }
    },
    {
      title: "Programación Orientada a Objetos Python",
      projectInfo:
        "Proficient in Object-Oriented Programming (OOP) in Python, with a deep understanding of core concepts such as classes, objects, inheritance, polymorphism, and encapsulation. Skilled in designing and implementing reusable and maintainable code structures that follow best practices. Experience in developing complex systems using OOP principles to enhance code organization, scalability, and efficiency. Capable of leveraging Python’s powerful libraries and frameworks to build robust software solutions.",
      client: "PROMiDAT: Programa Iberoamericano de Formación en Minería de Datos",
      technologies: "Programming language",
      date: "August 30, 2024",
      socialLinks: {
        mail: "mailto:yadir.sve@gmail.com",
      },
      thumbImage: "images/certification/poo.png",
      sliderImages: [
        "images/projects/air.png",
        "images/projects/etl.jpg",
        "images/projects/maxresdefault.jpg",
      ],
      categories: [filters.SCRIPT],
      url: {
        name: "Badge",
        link: "https://promidat.education/blocks/notas/reportes/qrtitulo.php?estudiante=2208&curso=387",
      }
    },

  ];


  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Education
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              Certifications
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                        <a
                            className="popup-ajax stretched-link"
                            href="https://www.google.com"
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            .
                          </a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
