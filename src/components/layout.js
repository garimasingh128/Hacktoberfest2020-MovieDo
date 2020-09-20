/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Header from './header/header';
import './layout.scss';
import SubscribeForm from './subscribe-form/subscribe-form';
import Footer from './footer/footer';

type LayoutProps = {
  children: any,
};
class Layout extends Component<LayoutProps> {

  render() {
    return (
      <>
        <Helmet title={` Smooper`} meta={[]}>
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossorigin="anonymous"
          />
          <style>
            @import
            url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
          </style>
        </Helmet>
        <Header />
        <div className="content">{this.props.children}</div>
        <div className="content">
          <SubscribeForm />
        </div>
        <Footer />
      </>
    );
  }
}

export default Layout;
