// I Just CLoned Home PAge For This moment
import React from "react"
import { graphql ,useStaticQuery} from "gatsby"

import CourseCart from "../components/Cart/CourseCart"
import BundleCart from "../components/Cart/BundleCart"
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
      subtitle="about.com"
      heroclass="about-background" 
    />  
    
    <CourseCart courses = {data.courses} />
    <BundleCart bundle = {data.bundle} />
 
  </Layout>
)}
  
export const query = graphql`
{
 img : file(relativePath: {eq : "service.jpg" }) {
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

  bundle:allContentfulBundles {
	  edges {
	    node {
	      id
        title
        price
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
