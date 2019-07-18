import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const About = (props) => {
  const services = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-services">
      <SEO title="About Us" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>About Us</h1>
              <p>
                Winnebago County ARES/RACES is a local group of ARES (Amateur Radio Emergency
                Services) & RACES (Radio Amateur Civil Emergency Services) volunteers, all licensed
                hams, dedicated to serving the public in time of need. We serve Winnebago County and
                its local communities.
              </p>
              <p>
                East Central Wisconsin Emergency Communications is the 501(c)(3) non profit
                corporation associated with Winnebago county ARES/RACES.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {services.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about-us/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default About;
