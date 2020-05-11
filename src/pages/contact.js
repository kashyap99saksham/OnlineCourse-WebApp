import React from "react"
import { graphql ,useStaticQuery} from "gatsby"

import InfoBlock from "../components/Reuseable/Infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import TeamSection from "../components/About/TeamSection"
import Layout from "../components/layout"
import HeroSection from "../components/Reuseable/HeroSection"
import SEO from "../components/seo"

const ContactPage = ({data}) =>{ 

  return(
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img= {data.img.childImageSharp.fluid}
      title="Contact Us"
      subtitle=""
      heroclass="about-background" 
    />  
    <InfoBlock heading = "How Can We help ? " />
  </Layout>
)}
  
export const query = graphql`
{
 img : file(relativePath: {eq : "contact.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }
}
`


export default ContactPage
