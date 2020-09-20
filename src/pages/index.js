import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo/seo';
import InterviewGrid from '../components/interview-grid/interview-grid';

export default ({ data, location }) => {

  return (
    <Layout>
    
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
            
            </h1>
            <h2
              className="is-size-4"
              style={{
                marginBottom: '.2rem',
                color: '#4a4a4a',
                fontWeight: 400,
              }}
            >
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

