// @flow
import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/seo/seo';
import './question.scss';

export const query = graphql`
  query($slug: String!) {
    questionsJson(slug: { eq: $slug }) {
      question
      questionId
      slug
    }
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
      }
    }
  }
`;

const getAnswers = (allInterviewsObject, questionId) => {
  const answers: [] = [];
  allInterviewsObject.forEach(element => {
    const answerObject = element.answers.find(i => i.questionId === questionId);
    if (answerObject) {
      answers.push({
        answer: answerObject.answer,
        name: element.name,
        title: element.title,
        position: element.position,
        avatar: element.avatar,
        slug: element.slug,
      });
    }
  });
  return answers;
};

const Interview = ({ data, location }) => {
  const questionObject = data.questionsJson;
  const answers = getAnswers(
    data.allInterviewsJson.nodes,
    questionObject.questionId
  );
  return (
    <Layout>
      <SEO
        title={questionObject.question}
        keywords={[
          `interview`,
          `startups`,
          `marketing`,
          `social media expert`,
          `facebook expert`,
          `twitter expert`,
        ]}
        imageURL={data.file.publicURL}
      />
      <div className="container">
        <br />
        <br />
        <div className="question-page__item-block">
          <p className="is-size-3">{questionObject.question}</p>
        </div>
        <br />
        <div className="question-page__number has-text-centered">
          <div className="tags has-addons" style={{ display: 'inline-block' }}>
            <span className="tag is-dark">{answers.length}</span>
            <span className="tag is-primary">Answers</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="question-page__item-block">
          {answers.map(item => (
            <div className="box question-page__answer-block" key={item.slug}>
              <p className="question-page__answer-text is-size-5">
                {item.answer}
              </p>

              <Link to={`/interview/${item.slug}`} style={{ color: '#666' }}>
                <div className="media remove-margin-bottom question-page__profile-block">
                  <Image
                    fluid={item.avatar.childImageSharp.fluid}
                    alt={item.item}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      marginRight: 10,
                    }}
                  />

                  <div
                    className="media-content remove-margin-bottom"
                    style={{ flexGrow: 0 }}
                  >
                    <div>
                      <p className="is-size-7 remove-margin-bottom">
                        Answered by{' '}
                        <span style={{ color: 'rgb(55, 124, 255)' }}>
                          {' '}
                          {item.name}{' '}
                        </span>
                      </p>
                      <p className="is-size-7">{item.position}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Interview;