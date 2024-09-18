import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        I'm making this by following the{' '}
        <Link to="/tutorial">Gatsby Tutorial</Link>.
      </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        src="../images/icon.png"
      />
    </Layout>
  );
};

// export const Head = () => <title>Home Page</title>;
export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
