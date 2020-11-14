import React from 'react';
import Adv from '../images/Avd.jpg';



class Body extends React.Component {
    constructor() {
        super()
        this.state = [
            "http://placehold.it/380?text=1",
            "http://placehold.it/380?text=2",
            "http://placehold.it/380?text=3",
            "http://placehold.it/380?text=4",
            "http://placehold.it/380?text=5",
            "http://placehold.it/380?text=6"

        ]



    }

    


    render() {
        return (
            <React.Fragment>

                <div className='baner rel'>

                    <div classname="_2Fcb3" data-aut-id="homeImage">
                        <div classname="_2gCSl _3TqoF" >
                            <img className='bImg' src={Adv} />
                        </div>
                    </div>
                </div>
                <div className='container'>


                </div>




                <div className="container text-center my-3">
                    <h2 className="font-weight-light">Bootstrap 4 - Multi Item Carousel</h2>
                    <div className="row mx-auto my-auto">
                        <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
                            <div className="carousel-inner w-100" role="listbox">
                                <div className="carousel-item active">
                                    {this.state.map(item => {
                                        console.log(item)
                                        return (

                                            <div className="col-md-4">
                                                <div className="card card-body">
                                                    <img className="img-fluid" src={item} />
                                                </div>
                                            </div>

                                        )

                                    })}
                                </div>
                            </div>

                            <a className="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <h5 className="mt-2">Advances one slide at a time</h5>
                </div>






            </React.Fragment>
        );
    }
}

export default Body;