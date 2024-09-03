import React from "react";

const Experience = ({ classicHeader, darkTheme }) => {
  // services details
  const Experience = [
    {
      name: "Data Engineering",
      desc: "Experienced in data ingestion processes, both cloud-based and on-premise. Proficient in data cleaning, preprocessing, and transformation to ensure high data quality. Skilled in data analysis and visualization using tools like Microsoft Fabric and BI models. Strong expertise in SQL and Excel, complemented by analytical thinking, critical problem-solving skills, and a solid understanding of business intelligence. Capable of delivering insights that drive strategic decision-making and optimize data-driven processes.",
      icon: "fas fa-desktop",
    },
    {
      name: "Data Analyst",
      desc: "Data ingestion (Cloud & On-Premise), Data Cleaning and Preprocessing, Data analysis and visualization (Microsoft Fabric, BI Models), Strong proficiency in SQL and Excel. analytical, critical thinking and problem-solving skills.",
      icon: "fas fa-pencil-ruler",
    },
  ];

  return (
    <section
      id="experience"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Experience
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Common tasks
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {Experience.length > 0 &&
                Experience.map((Experience, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={Experience.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {Experience.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {Experience.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Experience;
