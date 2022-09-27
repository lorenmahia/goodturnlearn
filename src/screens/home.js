import React, {useEffect, useState} from "react";
import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from '../uiux/selection.json';
import Course1 from "../uiux/yoga.jpeg";
import Course2 from "../uiux/music.jpeg";
import Stories from 'react-insta-stories';


import {
    NavLink,    
} from "react-router-dom";

function HomePage(){

    useEffect(()=>{
        document.title = "Goodturn";
    })

    const [display, setDisplay] = useState(<img  width = {200} height = {200} src={Course1}></img>);
    const handleClick = () =>{
        setDisplay( 
        <Stories
            loop = {true} stories = {story}
            width = {200} height = {200}
        />
        )
    }

    const story = [
        {
            url:'https://www.pexels.com/photo/look-up-12576276/',
            duration: 2000
        },
        {
            url:'https://www.pexels.com/photo/an-empty-road-near-the-desert-10757791/',
            duration: 2000
        }
    ];
    return (
        <div className="home-page rel">

            {/**Tutors Live Now */}
            <div className="section rel">
                <h2 className="title s24 fontb">Lessons on <span  className="fontn">Now</span></h2>
                <div className="tutors rel flex" onClick={handleClick}>
                   {display}
                </div>
            </div>

            {/**Popular Courses */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Popular <span  className="fontn">This Week</span></h2>
                <div className="courses rel flex">
                <Stories
                        loop = {true} stories = {story}
                        width = {200} height = {200}
                    />
                </div>
            </div>

            {/**Top Tutors */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Top <span  className="fontn">Tutors</span></h2>
                <div className="top-tutors rel flex">
                <Stories
                        loop = {true} stories = {story}
                        width = {200} height = {200}
                    />
                </div>
            </div>

        </div>
    )
}

export default HomePage;