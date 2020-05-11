import React, { Component } from 'react'
import Heading from "../Reuseable/Heading"
import Img from 'gatsby-image' 

// Some Tricky Logic for Categories
const getCaty = items => {

    let holdItems = items.map(item => {                 //Simply Take all present categories in CONTENTFULL
        return item.node.category
    })
    let holdCategories = new Set(holdItems)             //Remove Duplices || Taking Only Uniques categories
    let category = Array.from(holdCategories)           //Making In data array
    category = ["all", ...holdCategories]           //Adding "all" in front of array
    return category
}

export default class CourseCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses : props.courses.edges,              //for safer purpose
            mycourses : props.courses.edges,            //this is getting repeated when we are displaying
            mycategories : getCaty(props.courses.edges),    //For showing categories buttons and display acc to clicked cat...
        }
    }

    catyClicked = (category) => {

        let keepitsafe = [...this.state.courses]    //Keep for all 

        if(category === "all")  {
            this.setState(()=> {
                return { mycourses : keepitsafe}
            })
        }
        else {
            let holdme = keepitsafe.filter( ( {node} ) => node.category === category )                //filter : returns the array that meets the condition specific
            this.setState(()=>{
                return {mycourses: holdme}  
            })
        }
    }
    
    render() {
        // console.log(this.state.courses)

        return (
            <section className="py-5">
                <div className="container">
                    <Heading title="Courses" />
                    <div className="row my-3">
                        <div className="col-10 mx-auto text-center">
                            {this.state.mycategories.map( (category,index) => {
                                return (
                                    <button 
                                        type="button" 
                                        className="btn btn-info m-3 px-3" 
                                        key={index}
                                        onClick={()=>{
                                            this.catyClicked(category)
                                        }}
                                    >
                                        {category}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.mycourses.map(({node})=>{
                                return(
                                    <div Key = {node.id} className="col-11 col-md-6 d-flex mx-auto my-3">
                                        <Img fixed={node.image.fixed} />
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0"> {node.title} </h6>
                                                <h6 className="mb-0 text-success"> $ {node.price} </h6>
                                            </div>
                                            <p className="text-muted">
                                                {node.description.description}
                                            </p>
                                            <button
                                                data-item-id={node.id}
                                                data-item-name={node.title} 
                                                data-item-price={node.price}
                                                data-item-url="https://saksham-gatsby.netlify.app/"
                                                data-item-image={node.image.fixed.src}
                                                className="btn btn-warning snipcart-add-item" 
                                            > 
                                                Join Now
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
