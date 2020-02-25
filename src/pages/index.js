import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SEO from '../components/SEO'

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero />
      <section>
        <div className="container-sm">
          <div className="row">
            <div className="col">
              <h1>&#60;h1&#62; - Lorem ipsum dolor sit.</h1>
              <h2>&#60;h2&#62; - Lorem ipsum dolor sit.</h2>
              <h3>&#60;h3&#62; - Lorem ipsum dolor sit.</h3>
              <h4>&#60;h4&#62; - Lorem ipsum dolor sit.</h4>
              <h5>&#60;h5&#62; - Lorem ipsum dolor sit.</h5>
              <h6>&#60;h6&#62; - Lorem ipsum dolor sit.</h6>
              <p>
                &#60;p&#62; - Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Corporis ullam illo fuga aliquam laboriosam
                consequatur consequuntur numquam eveniet modi nihil, deleniti
                molestias nulla voluptatibus doloremque excepturi blanditiis
                illum temporibus dolor aperiam magni nostrum possimus aspernatur
                soluta?
              </p>
              <hr />

              <p>
                <strong>
                  &#60;strong&#62; - Lorem ipsum dolor sit amet, consectetur.
                </strong>
              </p>
              <p>
                <a href="localhost:5000/home">
                  &#60;a&#62; - Lorem ipsum dolor sit.
                </a>
              </p>
              <ul className="bullets">
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
              </ul>
              <p>
                <span className="btn">
                  <button>Button</button>
                </span>
              </p>

              <Link to="/page-2/">Go to page 2</Link>
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
)(IndexPage)
