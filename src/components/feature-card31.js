import React from 'react'

import PropTypes from 'prop-types'

import './feature-card31.css'

const FeatureCard31 = (props) => {
  return (
    <div className={`feature-card31-feature-card ${props.rootClassName} `}>
      <a
        href="https://etherscan.io/address/0xc20991d773e3e5302f6f64da29184871f63d1a5a"
        target="_blank"
        rel="noreferrer noopener"
        className="feature-card31-link"
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card31-image"
        />
      </a>
      <a
        href="https://etherscan.io/address/0xc20991d773e3e5302f6f64da29184871f63d1a5a"
        target="_blank"
        rel="noreferrer noopener"
        className="feature-card31-link1"
      >
        <h2 className="feature-card31-text">{props.title}</h2>
      </a>
    </div>
  )
}

FeatureCard31.defaultProps = {
  image_alt: 'image',
  title: 'VERIFIED CONTRACT',
  rootClassName: '',
  image_src: '/playground_assets/etherscan-logo-light-circle-200h.png',
}

FeatureCard31.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard31
