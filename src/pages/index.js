import React from "react"
import { graphql ,useStaticQuery} from "gatsby"

import InfoBlock from "../components/Reuseable/Infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import Layout from "../components/layout"
import HeroSection from "../components/Reuseable/HeroSection"
import SEO from "../components/seo"

const IndexPage = ({data}) =>{ 

  return(
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img= {data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle="Websitename.com"
      heroclass="hero-background" 
    />  
    <InfoBlock heading = "About Us" />
    <DualInfoBlock 
      heading = "Our Team" 
    />
  </Layout>
)}
  
export const query = graphql`
{
 img : file(relativePath: {eq : "heromain.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }  
}
`


export default IndexPage
