import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import mypic from '../../images/rahat.png'


const About = () => {
    return (
        <div>
            <PageTitle title="About"></PageTitle>
            <div className='w-75 mx-auto my-5 d-lg-flex'>
                <div className='w-50'>
                    <img className='w-75' src={mypic}></img>
                </div>

                <div className='w-50 border my-4 p-4 shadow rounded'>
                    <h1>Md Sajidur Rahman</h1>
                    <h3>React frontend developer</h3>
                    <p>Email: sajidur@gmail.com</p>
                    <p>Address: Chaainawabganj</p>
                    <p>Phone: +8801712315488</p>
                    <h1>My future Goal</h1>
                    <p>I am Md Sajidur Rahman. I am Diploma in Electrical Engineering. Mainly my professional job is now IT. I want to utilize my skills and potential to achieve the challenging position in Software Company. I believe that everything is up to my. Because a clever programmer do that: Practice. Practice. Practice. Code. Code. Code ! I have already learned the HTML, CSS, Bootstrap, JS, React, React Bootstrap. I can build any simple website.My goal is to build many websites and learn advanced topics.</p>

                </div>
            </div>
        </div>
    );
};

export default About;