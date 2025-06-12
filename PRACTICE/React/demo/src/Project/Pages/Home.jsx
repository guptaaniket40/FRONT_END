import React from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'

function Home() {
    return (
        <div>
            <Navbar />

            {/* slider starts */}
            <section>
                <div id="carouselExampleIndicators" className="carousel slide mt-1">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=600" style={{ height: "500px", width: "200px", objectFit: "cover" }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600" style={{ height: "500px", width: "100px", objectFit: "cover" }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg?auto=compress&cs=tinysrgb&w=600" style={{ height: "500px", width: "100px", objectFit: "cover" }} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>
            {/* slider ends */}


            {/* Description start */}
            <section>
                <div className="container-fluid bg-dark fw-bold p-5 mt-1" >
                    <h1 className='text-light text-center display-2 pb-3'>Welcome to My Bussiness Website</h1>
                    <h5 className='text-light text-center'>At Acme Solutions, we specialize in delivering innovative, results-driven solutions tailored to your business goals.
                        Whether you're a growing startup or an established enterprise, our team is committed to helping you succeed through cutting-edge technology,
                        strategic consulting, and personalized support.</h5>
                    <h5 className='text-light text-center'>With a focus on quality, integrity, and long-term value,
                        we partner with clients across industries to drive efficiency, accelerate growth, and stay ahead in today’s competitive market.
                        Explore our services, meet our experts, and discover how we can bring your vision to life.</h5>
                </div>
            </section>
            {/* Description end */}

            {/* card start */}
            <section>
                <div className="container-fluid bg-dark mt-1 mb-1">
                    <div className="row">

                        {/* Card 1 */}
                        <div className="col md mt-5 mb-5 ms">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://media.istockphoto.com/id/2193065392/photo/young-business-professionals-collaborating-in-a-modern-meeting-room.jpg?b=1&s=612x612&w=0&k=20&c=8m66XQeRkA4cGvkuPGiUQ0goTS36e78rFMIURFmh5yw=" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                        </div>

                        {/* Card 2 */}
                        <div className="col mt-5 mb-5">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://media.istockphoto.com/id/2148708716/photo/mature-businessman-in-bank-stock-photo.jpg?b=1&s=612x612&w=0&k=20&c=GHYm4KrcKLZxrKnPWf_5DQTpR5fjyKi2jD8sez3G1zg=" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col mt-5 mb-5">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://media.istockphoto.com/id/649346048/photo/working-through-some-concepts.jpg?b=1&s=612x612&w=0&k=20&c=L1Lta0t8cC4SYSnYCLUKf2rKNUlV8i_qsscL6fx2pTs=" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col mt-5 mb-5">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://media.istockphoto.com/id/810529310/photo/presenting-some-of-her-top-ideas-to-the-team.jpg?b=1&s=612x612&w=0&k=20&c=LdWUyZoIDJMBJ1Ektyuh_3oJ_IemAoYWVCPCzVeq77I=" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            {/* card end */}



            <Footer />
        </div>
    )
}

export default Home
