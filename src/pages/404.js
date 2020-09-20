import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import SEO from '../components/seo/seo';
import Layout from '../components/layout';

export const query = graphql`
  query {
    file(relativePath: { eq: "images/404.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="remove-margin-bottom is-size-3">
            Woah! How did you get here?
          </p>
          <p className="remove-margin-bottom is-size-6">
            This is page 404, not meant for humans
          </p>
          <div className="level">
            <div className="level-item">
              <Image
                fluid={data.file.childImageSharp.fluid}
                style={{ width: '45%' }}
              />
            </div>
          </div>

          <p className="remove-margin-bottom is-size-6">
            Maybe we messed up, maybe you don't know how to type
          </p>
          <p className="remove-margin-bottom is-size-6">
            <Link className="button" to="/">
              Let's call it quits and go back
            </Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
