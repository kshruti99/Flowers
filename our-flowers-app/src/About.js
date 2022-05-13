import React from 'react';

export default function About() {

    return(
    <body className='bodycolor'>
        <nav>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="">Learn More</a></li>
            </ul>
        </nav>
        <div className="container" id="page-title">
            <div className="row" id="proj-div">
                <h1 className="title" id="proj">PROJECT</h1>
            </div>
            <div className="d-flex flex-row-reverse">
                <div className="col" id="right-aligned">
                    <h1 className="title">JASMINE</h1>
                </div>
                <div className="col" id="logo">
                    <img src="./img/logo.png"></img>
                </div>
                
            </div>   
        </div>
        <div className="flex-container" id="product">
            <div className="row">
                <div className="col"  id="subtitle">
                    <p>a celebration of beauty in variation: created to showcase the many forms of humankind</p>
                </div>
                <div className="col" id="screen">
                    <img src="./img/screen1.jpg" id="phone-screen"></img>
                </div>
            </div>
        </div>
    
        <div className="flex-container" id="about-jasmine">
            <section className="context-item">
                <h3 className="context-title">What is JASMINE?</h3>
                <p> Jasmine is a mobile-browser app that aims to showcase beauty through diversity and variation. By allowing women in our communities to upload photos of their features, whether unique or common, we can normalize and showcase the many forms of humankind.</p>
            </section>
            <section className="context-item">
                <h3 className="context-title">Target Stakeholders</h3>
                <p>Our main stakeholders are women of color in their early 20's. Being subjected to Eurocentric standards for the vast majority of their childhoods, growing up and attending PWI's, and the harmful product marketing for clothes and makeup that WOC face all magnify insecurities about body types, hair, skin, and facial features. </p>
            </section>
            <section className="context-item">
                <h3 className="context-title">Our Actions</h3>
                <p>Jasmine's Features Include:</p>
                <ul>
                    <li>Community posting</li>
                    <li>Tagging posts with a diverse range of tags</li>
                    <li>User profile with 'liked' and contributed posts</li>
                </ul>
            </section>
            <section className="context-item">
                <h3 className="context-title">Our Benefit</h3>
                <p>Project Jasmine encourages honest sharing of one's self as well as offers exposure to physical variation that is typically not shown or celebrated in the mainstream media. By providing an online community that is "there when you need it", we hope to foster a sense of acceptance, understanding, collaboration, and healing. </p>
            </section>
        </div>
        <h3 className="context-title" id="team"> Meet the Team </h3>
        <div className="card-columns" id="about">
            <div className="card-deck" id="member-card">
                <img src="./img/shreya.png"></img>
                <p>shreya balaji: design + research</p>
            </div>
            <div className="card-deck" id="member-card">
                <img src="./img/kavya.png"></img>
                <p>kavya iyer: pm + research</p>
            </div>
            <div className="card-deck" id="member-card">
                <img src="./img/roshani.png"></img>
                <p>roshani ravi: swe</p>
            </div>
            <div className="card-deck" id="member-card">
                <img src="./img/shruti.png"></img>
                <p>shruti kompella: swe</p>
            </div>
    
        </div>
    
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
    </body>
    )
} 
