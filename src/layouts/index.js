import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="AdLayer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: "width=device-width, initial-scale=1" }
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        padding: 0,
      }}
    >
      {children()}
    </div>
    <footer>
      <h4>AdLayer</h4>
      <h5>Content in content advertisement</h5>
    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
