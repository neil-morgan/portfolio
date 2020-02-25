import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const SecondPage = () => (
  <>
    <Layout>
      <SEO title="Page two" />
      <section>
        <div className="container-sm">
          <div className="row">
            <div className="col">
              <h1>Hi from the second page</h1>
              <p>Welcome to page 2</p>
              <Link to="/">Go back to the homepage</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </>
)
export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null,
)(SecondPage)
