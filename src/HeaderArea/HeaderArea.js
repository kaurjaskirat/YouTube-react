import React from 'react'
import './HeaderArea.css'
import {FaYoutube} from 'react-icons/fa';
import {MdSearch,MdVideoCall,MdViewComfy} from 'react-icons/md';
import{AiTwotoneBell} from 'react-icons/ai'
function HeaderArea(){
    return(
        <body>
        <div className='HeaderArea'>
            <div className='Header'>
                <header className='header'>
                    <button className='button'>
                    &#9776;
                    </button>
                    <FaYoutube color='red' fontSize='3rem'/> <div>YouTube</div>  
                     </header>
                     <div className="Search">
                        <input type='search' placeholder='Search'/>
                        <div className='search'>
                            <MdSearch fontSize='3rem'/>
                        </div>
                     </div>
                     <div className='Icons'>
                        <div className='icon'><MdVideoCall fontsize='4.8rem'/></div>
                        <div className='icon'><MdViewComfy fontsize='3.8rem'/></div>
                        <div className='icon'><AiTwotoneBell fontsize='3.8rem'/></div>
                        <div className='icon'>
                            <img src='/images/ARIJIT.jpg' alt='dp'/>
                        </div>
                     </div>
            </div>
             
        </div>
        </body>
    )
}
export default HeaderArea;