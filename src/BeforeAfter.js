import "./App.css";
import AfterSwingfo from './swing clips/real_speed_face-on23.mov';
import AfterSwing from './swing clips/real_speed_dtl23.mov';
import after1 from './swing clips/after1.jpg';
import after2 from './swing clips/after2.jpg';
import after3 from './swing clips/after3.jpg';
import after4 from './swing clips/after4jpg.jpg';
import after5 from './swing clips/after5.jpg';
import after6 from './swing clips/after6.jpg';
import afterfo1 from './swing clips/afterfo1.jpg';
import afterfo2 from './swing clips/afterfo2.jpg';
import afterfo3 from './swing clips/afterfo3.jpg';
import afterfo4 from './swing clips/afterfo4.jpg';
import afterfo5 from './swing clips/afterfo5.jpg';
import afterfo6 from './swing clips/afterfo6.jpg';
import before1 from './swing clips/before1.png'
import before2 from './swing clips/before2.jpg'
import before3 from './swing clips/before3.jpg'
import before4 from './swing clips/before4.jpg'
import before5 from './swing clips/before5.jpg'
import before6 from './swing clips/before6.jpg'
import before1fo from './swing clips/before1fo.jpg'
import before2fo from './swing clips/before2fo.jpg'
import before3fo from './swing clips/before3fo.jpg'
import before4fo from './swing clips/before4fo.jpg'
import before5fo from './swing clips/before5fo.jpg'
import before6fo from './swing clips/before6fo.jpg'
import ToggleVisibility from "./ToggleVisibility";
import Dec162022 from './swing clips/Dec162022.mp4'
import Dec162022fo from './swing clips/Dec162022fo.mp4'
import { useState } from "react";



export default function BeforeAfter() {
    
    const [imgState, setImgState] = useState(false);
    const [imgState2, setImgState2] = useState(false)
    const [videoPlayState, setVideoPlayState] = useState(0);

 

    function handleClick(){
        setImgState(imgState => 'active');
        setVideoPlayState(videoPlayState => '1');
        console.log("image clicked")
    }

    function handleClick2(){
        setImgState2(imgState2 => 'active');
        setVideoPlayState(videoPlayState => '1');
        console.log("image clicked")
    }

    let toggleClassCheck = imgState;
    let toggleClassCheck2 = imgState2;
    
    return (
        <div className="before-after">
        <div className="before-after-second">
          <div className="ba-div">
            <div className="swing-clip">
              <label className="center-text">
              <img src={before1} className={`img1${toggleClassCheck}`} onClick={handleClick}></img>
                <video src={Dec162022} controls="controls" autoplay="0" className='swing-video' playsinline ='true'></video>
                December, 2022
              </label>
              <label className="center-text">
              <img src={after1} className={`img1${toggleClassCheck2}`} onClick={handleClick2}></img>
                <video src={AfterSwing} controls="controls" autoplay="0" className='swing-video' playsinline ='true'/>
                December, 2023
              </label>
            </div>
          </div>
          <div className="ba-div">
            <div className="center-text">
            </div>
            <div className="swing-clip">
              <label className="center-text">
              
                <video src={Dec162022fo} controls="controls" autoplay="0" className='swing-video' playsinline ='true'></video>
                December, 2022
              </label>
              <label className="center-text">
                <video src={AfterSwingfo} controls="controls" autoplay="0" className='swing-video' playsinline ='true'/>
                December, 2023
              </label>
            </div>
        </div>
            
            <ToggleVisibility>
                
                <div className="swing-clip4">
                    Setup
                    <div className="wrap-images">
                        <div className="center-text">
                            <img src={before1} className='swing-video'></img>
                        </div>
                        <div className="center-text">
                            <img src={after1} className='swing-video'></img>
                        </div>
                    </div>
                </div>
                <div className="swing-clip4">
                    Parallel Shaft (Backswing)
                    <div className="wrap-images">
                        <div className="center-text">
                            <img src={before2} className='swing-video'></img>
                        </div>
                        <div className="center-text">
                            <img src={after2} className='swing-video'></img>
                        </div>
                    </div>
                </div>
                <div className="swing-clip4">
                    Top of Backswing
                    <div className="wrap-images">
                        <div className="center-text">
                            <img src={before3} className='swing-video'></img>
                        </div>
                        <div className="center-text">
                            <img src={after3} className='swing-video'></img>
                        </div>
                    </div>
                </div>
                <div className="swing-clip4">
                    Arm Parallel (Downswing)
                    <div className="wrap-images">
                        <div className="center-text">
                            <img src={before4} className='swing-video'></img>
                        </div>
                        <div className="center-text">
                            <img src={after4} className='swing-video'></img>
                        </div>
                    </div>
                </div>
                <div className="swing-clip4">
                    Shaft Parallel (Downswing)
                    <div className="wrap-images">
                        <div className="center-text">
                            <img src={before5} className='swing-video'></img>
                        </div>
                        <div className="center-text">
                            <img src={after5} className='swing-video'></img>
                        </div>
                    </div>
                </div>
                <div className="swing-clip4">
                    Impact
                    <div className="wrap-images">
                        <div className="center-text">
                            <img src={before6} className='swing-video'></img>
                        </div>
                        <div className="center-text">
                            <img src={after6} className='swing-video'></img>
                        </div>
                    </div>
                </div>
                
            </ToggleVisibility>
            
            </div>
          </div>
        
     
    );
}