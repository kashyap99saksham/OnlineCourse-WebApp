import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'

export default function DualInfoBlock({heading,imgsrc}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5 ">
                            I am Random Text Here I am Random Text Here
                            I am Random Text Here I am Random Text Here
                            I am Random Text Here I am Random Text Here
                            I am Random Text Here I am Random Text Here
                            I am Random Text Here I am Random Text Here
                            I am Random Text Here I am Random Text Here
                            I am Random Text Here I am Random Text Here
                            I am Random Text Here I am Random Text Here
                            I am Random Text Here I am Random Text Here
                            I am Random Text Here I am Random Text Here
                            I am Random Text Here I am Random Text Here
                            I am Random Text Here I am Random Text Here
                        </p>
                    </div>
                    <div className="col-4">
                        <div class="card bg-dark" >
                            <img src={imgsrc} class="card-img-top" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title text-success">Just Click Photos</h5>
                                <p class="card-text text-white">
                                    I am Random Text Here I am Random Text Here
                                    I am Random Text Here I am Random Text Here
                                    I am Random Text Here I am Random Text Here
                                    I am Random Text Here I am Random Text Here
                                    I am Random Text Here I am Random Text Here
                                    I am Random Text Here I am Random Text Here
                                    I am Random Text Here I am Random Text Here
                                    I am Random Text Here I am Random Text Here
                                    I am Random Text Here I am Random Text Here
                                    I am Random Text Here I am Random Text Here
                                    I am Random Text Here I am Random Text Here
                                    I am Random Text Here I am Random Text Here.
                                </p>
                                <Link to="/OurTeam/" class="btn btn-warning btn-block">{heading}> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
