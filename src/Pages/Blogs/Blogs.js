import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 m-auto '>
            <div className='border my-4 p-4 shadow rounded'>
                <h1>QA: Difference between authorization and authentication</h1>
                <p>Authentication is identifying users by confirming who they say they are, while authorization is the process of establishing the rights and privileges of a user. Both processes play equally important roles in securing sensitive data assets from breaches and unauthorized access.</p>
            </div>
            <div className='border my-4 p-4 shadow rounded'>
                <h1>
                    QB: Why are you using firebase? What other options do you have to implement authentication?

                </h1>
                <p>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Github, Apple, Microsoft, Yahoo, Facebook and Twitter, and more.

                    Other options i have to implement cards, retina scans, voice recognition, and fingerprints for authentication
                </p>
            </div>
            <div className='border my-4 p-4 shadow rounded'>
                <h1>
                    QC: What other services does firebase provide other than authentication?
                </h1>
                <p>
                    Other Services of Firebase :

                    <ul>
                        <li>Realtime Database</li>
                        <li>Remote Config</li>
                        <li>Firebase Ml</li>
                        <li>Cloud Functions</li>
                        <li>Cloud Messaging</li>
                        <li>Cloud Storage</li>
                    </ul>


                </p>

            </div>
        </div>
    );
};

export default Blogs;