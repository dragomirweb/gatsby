import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Glide } from 'react-glide'
import 'react-glide/lib/reactGlide.css';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div>
    <Glide height={500} dots={false} autoplay={true}>
      <img src='https://picsum.photos/500/500' />
      <img src='https://picsum.photos/500/500' />
      <img src='https://picsum.photos/500/500' />
    </Glide>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
