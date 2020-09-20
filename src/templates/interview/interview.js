import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/seo/seo';
import './interview.scss';
import Share from '../../components/share/share';

export const query = graphql`
  query($slug: String!) {
    interviewsJson(slug: { eq: $slug }) {
      slug
      name
      title
      position
      avatar {
        publicURL
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      answers {
        questionId
        answer
      }
      links {
        displayText
        url
      }
    }
    allQuestionsJson {
      nodes {
        questionId
        question
        slug
      }
    }
  }
`;

const Interview = ({ data, location }) => {
  const interview = data.interviewsJson;
  const questions = data.allQuestionsJson.nodes;
  return (
    <Layout>
      <SEO
        title={`${interview.name} | Expert Interviews by Smooper`}
        keywords={[
          `interview`,
          interview.name,
          `startups`,
          `marketing`,
          `social media expert`,
          `facebook expert`,
          `twitter expert`,
        ]}
        imageURL={interview.avatar.publicURL}
      />
      <section>
        <div className="container">
          <div className="interview-page__item-block has-text-centered">
            <div className="quotemark">„</div>
            <p className="is-size-3">{interview.title}</p>
          </div>
          <div className="interview-page__item-block interview-page__user-intro">
            <Image
              fluid={interview.avatar.childImageSharp.fluid}
              alt={interview.title}
              style={{ width: 72, height: 72, borderRadius: '50%' }}
            />
            <p className="is-size-4 remove-margin-bottom">{interview.name}</p>
            <p className="is-size-6">{interview.position}</p>
            <div className="buttons are-small">
              {interview.links.map((item, i) => (
                <a
                  href={item.url}
                  key={i}
                  className="button is-primary is-outlined"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.displayText}
                </a>
              ))}
            </div>
            <Share 
              title={`${interview.name} at Expert Interviews by Smooper`}
              pageURL={`/interview/${interview.slug}`}
            />
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '3rem' }}>
        <div className="interview-page__item-block">
          {interview.answers.map(item => {
            const questionObject =
              (questions || []).find(q => q.questionId === item.questionId) ||
              {};

            return (
              <div
                className={`box has-left-border border-left-${item.questionId % 16}`}
                key={item.questionId}
                style={{ marginBottom: '2rem' }}
              >
                <p
                  className="is-size-5 interview-page__question"
                  style={{ color: 'black' }}
                >
                  {questionObject.question}
                </p>

                <p className="interview-page__answer">
                  <i>{interview.name}</i> - <span dangerouslySetInnerHTML={{__html: item.answer}}></span>
                </p>

                <div className="interview-page__action">
                  <Link to={`/question/${questionObject.slug}`}>
                    <span className="button is-small is-primary is-outlined">
                      View More Answers
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Interview;