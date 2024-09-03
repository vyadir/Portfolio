import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Software developer",
      desc: "Proficient in multiple programming languages, including Java, Python, C++, Dart, and C#. Experienced with essential software development tools and technologies, such as Git, Docker, and Jenkins. Skilled in using frameworks and libraries like React, Angular, and .NET for building robust applications. Strong expertise in database technologies, including SQL and MongoDB. Well-versed in popular design patterns, software engineering techniques, and testing methodologies to ensure high-quality, maintainable code. Additionally, possess strong soft skills in problem-solving, teamwork, and communication, which contribute to successful project outcomes.",
      icon: "fas fa-palette",
    },
    {
      name: "Data Engineering",
      desc: "Deployments of software and data solutions with docker and CI/CD: Github actions, Ansible, high availability with load balancing. Creation of infrastructure with Terraform, creation and maintenance of modern Data Warehouses, strong skills in SQL: developments that integrate relational, non-relational and time series databases. In general, I work and develop modern data engineering with technologies that are highly in demand in the software and data market, mainly in the AWS and Azure ecosystems, however I do not exclude working on GCP.",
      icon: "fas fa-desktop",
    },
    {
      name: "Data Analyst & Machine Learning Professional Certification",
      desc: "Data mining, report automation with Python and R, API development, sentiment analysis in audios and text through feature extraction with Python, creation of dashboards in power bi services and tableau, statistical analysis, data models, sales forecasting , RFM model, customer segmentation. I have a strong background in Machine Learning, with expertise in both supervised and unsupervised learning concepts. My experience includes advanced techniques such as Principal Component Analysis (PCA), t-SNE, and UMAP for dimensionality reduction, as well as the use of hierarchical agglomerative clustering and k-means algorithms. I am well-versed in regression methods, Support Vector Machines (SVM), and Decision Trees (CART), along with ensemble methods like bagging, random forests, and boosting. Additionally, I have a solid grasp of key data analysis and manipulation tools in Python, utilizing libraries such as NumPy, Pandas, and Matplotlib for data exploration and effective visualization. My knowledge spans from evaluating the quality of predictive models to practical application of these models in real-world scenarios using Python and Scikit-Learn.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Data and mathematical models",
      desc: "I'm a professional with solid training and experience in mathematics and advanced statistics. I have a deep understanding of mathematical principles and theories, which allows me to address complex problems and develop innovative solutions. My focus on advanced statistics has equipped me with essential skills in data analysis, allowing me to extract valuable insights and make accurate predictions from large data sets. I have experience creating advanced statistical and mathematical models, which I apply in various contexts to optimize processes, inform strategic decisions, and contribute to the advancement of knowledge in my field. My ability to integrate theory and practice makes me a valuable resource for any project that requires a solid foundation in mathematics and statistics.",
      icon: "fas fa-paint-brush",
    },

  ];

  return (
    <section
      id="services"
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
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
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

export default Services;
