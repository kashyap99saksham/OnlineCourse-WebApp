import React from "react"
import { graphql ,useStaticQuery} from "gatsby"

import InfoBlock from "../components/Reuseable/Infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import TeamSection from "../components/About/TeamSection"
import Layout from "../components/layout"
import HeroSection from "../components/Reuseable/HeroSection"
import SEO from "../components/seo"

const IndexPage = ({data}) =>{ 

  return(
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img= {data.img.childImageSharp.fluid}
      title="About LearnCodeOnline"
      subtitle=""
      heroclass="about-background" 
    />  
    <InfoBlock heading = "About Our Vision" />
    <TeamSection />
    <DualInfoBlock 
    heading = "Message From CEO" 
    imgsrc = "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?cs=srgb&dl=person-holding-node-text-1261427.jpg&fm=jpg" 
    />
  </Layout>
)}
  
export const query = graphql`
{
 img : file(relativePath: {eq : "about.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }
}
`


export default IndexPage
