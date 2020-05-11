import React, { Component } from 'react'
import Heading from "../Reuseable/Heading"
import Img from 'gatsby-image' 

export default class CourseCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses : props.bundle.edges,              //for safer purpose
            mycourses : props.bundle.edges,            //this is getting repeated when we are displaying
        }
    }

    render() {
        // console.log(this.state.courses)

        return (
            <section className="py-5">
                <div className="container">
                    <Heading title="Bundle" />
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
