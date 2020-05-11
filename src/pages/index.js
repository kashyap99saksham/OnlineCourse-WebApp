import React from "react"
import { graphql ,useStaticQuery} from "gatsby"

import InfoBlock from "../components/Reuseable/Infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import CourseCart from "../components/Cart/CourseCart"
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
    <CourseCart courses = {data.courses} />
    <DualInfoBlock 
      heading = "Our Team" 
      imgsrc = "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?cs=srgb&dl=person-holding-node-text-1261427.jpg&fm=jpg" 
    />
  </Layout>
)}
  
export const query = graphql`
{
 img : file(relativePath: {eq : "heromain.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }
  courses:allContentfulCourses {
    edges {
      node {
        id
        title
        price
        category
        description {
          description
        }
        image{
          fixed(width: 200,height: 120){
            ...GatsbyContentfulFixed_tracedSVG 
          }
        }
      }
    }
  }     
}
`


export default IndexPage
