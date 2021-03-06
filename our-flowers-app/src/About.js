import React from 'react';

export default function About() {

    return (
        <body className="body-color">
            <nav>
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="">Learn More</a></li>
                </ul>
            </nav>
            <div class="container" id="page-title">
                <div class="row" id="proj-div">
                    <h1 class="title" id="proj">PROJECT</h1>
                </div>
                <div class="d-flex flex-row-reverse">
                    <div class="col" id="right-aligned">
                        <h1 class="title">JASMINE</h1>
                    </div>
                    <div class="col" id="logo">
                        <img src="./img/logo.png"></img>
                    </div>

                </div>
            </div>
            <div class="flex-container" id="product">
                <div class="row">
                    <div class="col" id="subtitle">
                        <p>a celebration of beauty in variation: created to showcase the many forms of humankind</p>
                    </div>
                    <div class="col" id="screen">
                        <img src="./img/screen1.jpg" id="phone-screen"></img>
                    </div>
                </div>
            </div>

            <div class="flex-container" id="about-jasmine">
                <section class="context-item">
                    <h3 class="context-title">What is JASMINE?</h3>
                    <p> Jasmine is a mobile-browser app that aims to showcase beauty through diversity and variation. By allowing women in our communities to upload photos of their features, whether unique or common, we can normalize and showcase the many forms of humankind.</p>
                </section>
                <section class="context-item">
                    <h3 class="context-title">Target Stakeholders</h3>
                    <p>Our main stakeholders are women of color in their early 20's. Being subjected to Eurocentric standards for the vast majority of their childhoods, growing up and attending PWI's, and the harmful product marketing for clothes and makeup that WOC face all magnify insecurities about body types, hair, skin, and facial features. </p>
                </section>
                <section class="context-item">
                    <h3 class="context-title">Our Actions</h3>
                    <p>Jasmine's Features Include:</p>
                    <ul>
                        <li>Community posting</li>
                        <li>Tagging posts with a diverse range of tags</li>
                        <li>User profile with 'liked' and contributed posts</li>
                    </ul>
                </section>
                <section class="context-item">
                    <h3 class="context-title">Our Benefit</h3>
                    <p>Project Jasmine encourages honest sharing of one's self as well as offers exposure to physical variation that is typically not shown or celebrated in the mainstream media. By providing an online community that is "there when you need it", we hope to foster a sense of acceptance, understanding, collaboration, and healing. </p>
                </section>
            </div>
            <h3 class="context-title" id="team"> Meet the Team </h3>
            <div class="row container-fluid" id="about">
                <div class="column" id="member-card">
                    <img src="./img/shreya.png"></img>
                    <p>shreya balaji: design + research</p>
                </div>
                <div class="column" id="member-card">
                    <img src="./img/kavya.png"></img>
                    <p>kavya iyer: pm + research</p>
                </div>
                <div class="column" id="member-card">
                    <img src="./img/roshani.png"></img>
                    <p>roshani ravi: swe</p>
                </div>
                <div class="column" id="member-card">
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




// import React from 'react';

// export default function About() {
//     return (
//         <div>
//             <h1 style={{ color: "#9CAEA9" }}>Welcome to Jasmine</h1>
//             <h2 style={{ color: "#A2D7D7" }}>About us</h2>
//             <p style={{ color: "#A2D7D7" }}>Our mission is to aid in dismantling internalized eurocentric beauty standards
//                 by allowing users to explore natural physical variance of our faces and bodies.
//                 </p>
//         </div>
//     );
// }