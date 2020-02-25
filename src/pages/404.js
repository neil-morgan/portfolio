import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <div className="container-sm">
        <div className="row">
          <div className="col">
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
