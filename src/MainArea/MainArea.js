import React from 'react';
import './MainArea.css';
import {MdHome,MdVideoLibrary,MdHistory,MdWatchLater,MdPlaylistPlay,MdRssFeed} from 'react-icons/md';
import {FaGripfire,FaMusic,FaFutbol,FaNewspaper} from 'react-icons/fa';
import {BsFillCollectionPlayFill}  from 'react-icons/bs';
import {GiGamepad}  from 'react-icons/gi';
import ReactPlayer from 'react-player';

function MainArea(){
    return(
<div className='MainArea'>
<div className='sidebar'>
    <div className='Home'>
        <div className='Quick_Icon'>
            <MdHome color='black'fontsize='5rem'/>
            <div>Home</div>
        </div>
        <div className='Quick_Icon'>
            <FaGripfire color='grey'fontsize='3rem'/>
            <div>Trending</div>
        </div>
        <div className='Quick_Icon'>
            <BsFillCollectionPlayFill color='grey'fontsize='3rem'/>
            <div>Subscription</div>
        </div>
        </div>
        <div className='Library'>
        <div className='Quick_Icon'>
            <MdVideoLibrary color='grey'fontsize='3rem'/>
            <div>Video library</div>
        </div>
        <div className='Quick_Icon'>
            <MdHistory color='grey'fontsize='3rem'/>
            <div>History</div>
        </div>
        <div className='Quick_Icon'>
            <MdWatchLater color='grey'fontsize='3rem'/>
            <div>Watch Later</div>
        </div>
        <div className='Quick_Icon'>
            <MdPlaylistPlay color='grey'fontsize='3rem'/>
            <div>YouTube Clone</div>
        </div>
        </div>
        <div className='More_From_Youtube'>
        <div className='Quick_Icon'>
            <GiGamepad color='grey'fontsize='3rem'/>
            <div>Gaming</div>
        </div>
        <div className='Quick_Icon'>
            <MdRssFeed color='grey'fontsize='3rem'/>
            <div>Live</div>
        </div>
        <div className='Quick_Icon'>
            <FaFutbol color='grey'fontsize='3rem'/>
            <div>sports</div>
        </div>
        <div className='Quick_Icon'>
            <FaMusic color='grey'fontsize='3rem'/>
            <div>Musics</div>
        </div>
        <div className='Quick_Icon'>
            <FaNewspaper color='grey'fontsize='3rem'/>
            <div>News</div>
        </div>
    </div>
</div>
<div className='Main'>
    <div className='Videos'>
        <div className='Video'>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=w7ejDZ8SWv8'
            height='170px'
            width='280px'
            controls/>
            <br></br>
            <div className='Logo'>
                <img src='https://tse1.explicit.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0' alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
           <div className='he'>React JS Crash Course</div>
            </div>
            <br></br>
            <div className='view'>2.9M . 1year ago</div>
            </div>
    
    <div className='Video'>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=RGKi6LSPDLU'
            height='170px'
            width='280px'
            controls/>
            <br></br>
            <div className='Logo'>
                <img src='https://tse1.explicit.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0' alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
           <div className='he'>React Tutorial in Hindi 🔥🔥</div>
            </div>
            <br></br>
            <div className='view'>1.9M . 1year ago</div>
        </div>

        <div className='Video'>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=W6NZfCO5SIk'
            height='170px'
            width='280px'
            controls/>
            <br></br>
            <div className='Logo'>
                <img src='https://tse2.mm.bing.net/th?id=OIP.vF8_h2mXqrGRynymmcJ4zgHaHJ&pid=Api&P=0' alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
           <div className='he'>JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour</div>
            </div>
            <br></br>
            <div className='view'>9.2M . 4year ago</div>
        </div>

        <div className='Video'>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=B7wHpNUUT4Y'
            height='170px'
            width='280px'
            controls/>
            <br></br>
            <div className='Logo'>
                <img src='https://tse2.mm.bing.net/th?id=OIP.vF8_h2mXqrGRynymmcJ4zgHaHJ&pid=Api&P=0' alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
           <div className='he'>Javascript Introduction | Lecture 1 | Web Development Course</div>
            </div>
            <br></br>
            <div className='view'>814k. 1year ago</div>
        </div>

         <div className='Video'>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=hKB-YGF14SY'
            height='170px'
            width='280px'
            controls/>
            <br></br>
            <div className='Logo'>
                <img src='https://tse2.mm.bing.net/th?id=OIP.vF8_h2mXqrGRynymmcJ4zgHaHJ&pid=Api&P=0' alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
           <div className='he'>JavaScript Tutorial In Hindi</div>
            </div>
            <br></br>
            <div className='view'>5.1M . 2year ago</div>
        </div>

        <div className='Video'>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=pCj0Jr-ktp4'
            height='170px'
            width='280px'
            controls/>
            <br></br>
            <div className='Logo'>
                <img src='https://tse1.explicit.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0' alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
           <div className='he'>How to make a Great Project for Internships & Placements?</div>
            </div>
            <br></br>
            <div className='view'>986k . 1year ago</div>
         </div>
         <div className='Video'>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=w7ejDZ8SWv8'
            height='170px'
            width='280px'
            controls/>
            <br></br>
            <div className='Logo'>
                <img src='https://tse1.explicit.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0' alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
           <div className='he'>React JS Crash Course</div>
            </div>
            <br></br>
            <div className='view'>2.9M . 1year ago</div>
            </div>
 <div className='Video'>
             <ReactPlayer
            url='https://www.youtube.com/watch?v=dLQywM7uHUE'
            height='170px'
            width='280px'
            controls/>
         <br></br>
            <div className='Logo'>
                <img src='https://tse1.explicit.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0' alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
        <div className='he'>How to apply for Off-campus Internships? For College Students</div>
            </div>
             <br></br>
            <div className='view'>1.9M . 1year ago</div>
         </div>
    </div>

    </div>
    </div>

    )
}
export default MainArea;