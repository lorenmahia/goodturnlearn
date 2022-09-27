import React, {useState} from 'react';
import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from '../uiux/selection.json';
import logo from '../uiux/GoodturnLogo.png'

function Sidebar(){

    return (
        <div className = 'sidebar fixed'> 
            <a href='#' className='logo'>
                <img src={logo} className = 'bl'/>
            </a>
            <ul className='nav'>
                <li>
                    <a href='#' className='link noul flex c333'>
                    <IcomoonReact iconSet={iconSet} color="#444" size={20} icon="home"  />
                        <h2 className='label s15'> Home</h2>
                    </a>
                    <a href='#' className='link noul flex c333'> 
                    <IcomoonReact iconSet={iconSet} color="#444" size={20} icon="list"  />
                        <h2 className='label s15'> Browse Courses</h2>
                    </a>
                    <a href='#' className='link noul flex c333'>
                    <IcomoonReact iconSet={iconSet} color="#444" size={20} icon="play"/>
                        <h2 className='label s15'> Categories</h2>
                    </a>
                    <a href='#' className='link noul flex c333'>
                    <IcomoonReact iconSet={iconSet} color="#444" size={20} icon="briefcase"  />
                        <h2 className='label s15'> My Courses</h2>
                    </a>
                </li>
             </ul>

             <div className='MR_course_label'>
                <h2 className='label s15'> Most Recent Course</h2>
            </div>
            <div className='stats flex'>         
                <div className='stats-box flex'>
                    <IcomoonReact iconSet={iconSet} color='#6208BB' size={20} icon="shield"  /> 
                    <h2 className='value s15 c333 fontb'> 1800</h2>
                    <h2 className='label s15'> Points</h2>
                </div>

                <div className='stats-box flex'>
                    <IcomoonReact iconSet={iconSet}  size={20} icon="dice"  /> 
                    <h2 className='value s15 c333 fontb'> 60%</h2>
                    <h2 className='label s15'> Complete</h2>
                </div>
            </div>

            <div className='me flex'>
                <div className='photo' >
                    <img src={logo}/>
                </div>
                <div className='label s15 fontb c333'>
                    <h2 className='user-name s15'>User Name</h2>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

