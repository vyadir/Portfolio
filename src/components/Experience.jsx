import React from "react";

const Experience = ({ classicHeader, darkTheme }) => {
  // services details
  const Experience = [
    {
      name: "Data Engineering",
      desc: "Data collection and cleaning, where data is gathered from various sources and cleaned to remove inconsistencies and outliers; exploratory data analysis (EDA), which involves identifying patterns, correlations, and trends within the data using statistical methods and visualization tools; data transformation, applying techniques such as normalization, scaling, and encoding to prepare data for modeling; statistical analysis, which includes conducting hypothesis testing, regression analysis, and other statistical methods to draw insights from the data; data visualization, creating charts, graphs, and dashboards using tools like Matplotlib, Seaborn, or Tableau to effectively communicate findings; predictive modeling, which involves developing, training, and validating models using machine learning algorithms to predict future trends or outcomes; report generation, summarizing findings and presenting them in a clear, concise manner through written reports or presentations; and collaboration with stakeholders, working closely with business stakeholders to understand their needs and translate data insights into actionable strategies.",
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
