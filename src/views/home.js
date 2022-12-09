import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>MutantBoi | Mint Page</title>
        <meta property="og:title" content="MutantBoi | Mint Page" />
        <meta
          property="og:description"
          content="Mint your MutantBoi NOW! MutantBoi is a community-focused, exclusive NFT collection of 4444 supplies."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/692f39de-b07b-4c52-bd2d-e60ae936749a/8061e356-28ef-458d-b566-36275d613060?org_if_sml=1&amp;q=80"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <iframe
          src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0xc20991d773E3E5302f6F64da29184871F63d1a5a&amp;chainId=1&amp;theme=dark&amp;primaryColor=green"
          className="home-iframe"
        ></iframe>
      </section>
      <footer className="home-footer">
        <div className="home-content">
          <main className="home-main-content">
            <div className="home-content1">
              <header className="home-main">
                <div className="home-header">
                  <img
                    alt="image"
                    src="/playground_assets/logo-buyuk%20%5B1%5D-200h.png"
                    className="home-branding"
                  />
                </div>
              </header>
            </div>
          </main>
          <main className="home-subscribe">
            <main className="home-main1"></main>
          </main>
          <section className="home-copyright">
            <span className="home-text">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default Home
