import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './share.scss';



function Share({ title, pageURL}) {

    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `
      );
    
      const SocialShare = ({icon, url}) => {
        return <a target="_blank" rel="noopener noreferrer" href={url} 
        onClick={() => {
            window.open(url, '', 'width=550,height=435');
            return false;
            }}>
            <i className={icon}></i>
        </a>
      }

  return (
    <div className="share">
        <div className="help-text">
            Share this on 
        </div>
        <ul>
            
            <li>
                <SocialShare 
                    icon="fab fa-twitter"
                    url={`https://twitter.com/intent/tweet?text=${title}&url=${site.siteMetadata.siteUrl}${pageURL}&via=smoopersocial`}
                />
            </li>

            <li>
                <SocialShare 
                    icon="fab fa-facebook-f"
                    url={`https://facebook.com/sharer.php?u=${site.siteMetadata.siteUrl}${pageURL}`}
                />
            </li>
            
            <li>
                <SocialShare 
                    icon="fab fa-linkedin-in"
                    url={`http://www.linkedin.com/shareArticle?mini=true&url=${site.siteMetadata.siteUrl}${pageURL}&title=${title}&summary=${title}`}
                />
            </li>

            <li>
                <SocialShare 
                    icon="fab fa-pinterest-p"
                    url={`http://pinterest.com/pin/create/button/?description=${title}&url=${site.siteMetadata.siteUrl}${pageURL}`}
                />
            </li>

            <li>
                <SocialShare 
                    icon="fab fa-reddit-alien"
                    url={`http://www.reddit.com/submit?title=${title}&url=${site.siteMetadata.siteUrl}${pageURL}`}
                />
            </li>

        </ul>
    </div>
  );
}

export default Share;
