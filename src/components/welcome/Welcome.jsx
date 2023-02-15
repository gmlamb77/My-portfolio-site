import React from 'react'
import './welcome.css';
import instaIcon from "./insta.svg"
import gitIcon from "./github.svg"
import stackIcon from "./stackIcon.svg"
import linkedinIcon from "./linkedin.svg"

function Welcome() {
  return (
    <div className="welcome-Hero_MainWrapper">
        <div className="Welcome-Hero">

            <h1 className="welcome-Hero_Title">
                Hey I'm Gavin, A Web-Developer.
            </h1>

            <p className="welcome-Hero_Par">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit nisi, dolorem provident vitae molestias! Aliquid architecto quaerat eum atque pariatur cum ipsum praesentium quisquam, reiciendis qui earum iure nobis.
            </p>

            <div className="welcome-Hero_SocialIcons-Container">
              <div className="welcome-Hero_SocialIcons-Wrapper">
                <li className='socialIcon insta'>
                  <img href="#" src={instaIcon}></img>
                </li>

                <li className='socialIcon git' >
                  <img href="#" src={gitIcon}></img>
                </li>

                <li className='socialIcon stack'>
                  <img href="#" src={stackIcon}></img>
                </li>

                <li className='socialIcon stack'>
                  <img href="#" src={linkedinIcon}></img>
                </li>
              </div>
            </div>

            
        </div>
    </div>
  )
}

export default Welcome