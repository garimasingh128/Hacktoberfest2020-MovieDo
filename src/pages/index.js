import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo/seo';
import InterviewGrid from '../components/interview-grid/interview-grid';

export default ({ data, location }) => {
  const interviews = data.allInterviewsJson.nodes;

  return (
    <Layout>
      <SEO
        title="Interview Template by Smooper"
        keywords={[`interviews`, `entrepreneurs`, `startups`]}
        imageURL={data.file.publicURL}
      />
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1
              className="is-size-3"
              style={{
                marginBottom: '.2rem',
                color: '#4a4a4a',
                fontWeight: 400,
              }}
            >
              Interview Template by{' '}
              <span style={{ textDecoration: 'underline' }}>
                <a href="https://www.smooper.com">smooper.com</a>
              </span>
            </h1>
            <h2
              className="is-size-4"
              style={{
                marginBottom: '.2rem',
                color: '#4a4a4a',
                fontWeight: 400,
              }}
            >
              The perfect Q&A template for your website or blog
            </h2>
          </div>
        </div>
      </section>
      <div style={{ margin: '1rem' }}>
        <InterviewGrid items={interviews} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "images/logo-og.png" }) {
      publicURL
    }
    allInterviewsJson(sort: { fields: timestamp, order: DESC }) {
      nodes {
        slug
        name
        title
        position
        avatar {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
