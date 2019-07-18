import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Join = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Join</h1>
            <p>
              If you have an amateur radio license, and live in the Winnebago County area,
              you should join ARES/RACES!
            </p>
            <p>
              Joining is easy, simply:
              <ul>
                <li>Fill out and submit a membership application</li>
                <li>Check into our weekly net, and</li>
                <li>Complete the required training</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Join;
