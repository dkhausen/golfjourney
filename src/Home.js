import "./App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Dec162022 from './swing clips/Dec162022.mp4'
import Dec162022fo from './swing clips/Dec162022fo.mp4'
import Dec272022 from'./swing clips/Dec272022.mp4'
import Dec272022fo from'./swing clips/Dec272022fo.mp4'
import Dec272022analysis1 from './swing clips/Dec272022analysis1.jpg'
import Dec272022analysis2 from './swing clips/Dec272022analysis2.jpg'
import Jan022023 from './swing clips/Jan022023.mp4'
import Jan022023fo from './swing clips/Jan022023fo.mp4'
import Jan062023 from './swing clips/Jan062023.mp4'
import Jan272023 from './swing clips/Jan272023.mp4';
import Jan272023lo from './swing clips/Jan272023lo.jpg';
import Feb262023 from './swing clips/Feb262023.mp4';
import Feb262023cw from './swing clips/Feb262023cw.jpg';
import March142023 from './swing clips/Mar142023.mp4';
import March142023tr from './swing clips/March142023tr.jpg';
import March142023fs from './swing clips/Mar142023fs.jpg';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';



export default function Home() {
  return (
    <div className="App">
      <div className="intro-div">
          <div className="indi-text-divb">Development of a Golf Swing as a member of the Milo Lines Online Academy</div>
          <div className="indi-text-div">The Milo Lines academy coaches provide feedback weekly-monthly via video swing analysis, online lessons, and written responses in the CoachNow Forum spaces. The coaching philosophy is based on physics, repeatable body movements that can be explained and predicted, and is the best way for a student to progress quickly, despite the limitations of an online teaching environment</div>
          <div className="indi-text-divbg">The following is an example of a swing journey which highlights:</div>
          <div className="indi-text-div">
            <ul className="intro-ul">
              <li className="intro-ul">Face On and Down the Line swing clips the student has submitted or the coaches have captured during online lessons</li>
              <li className="intro-ul">Summaries of feedback the student has received through the various teaching methods</li>
              <li className="intro-ul">Continuous before and after highlights of swing positions</li>
            </ul>
          </div>

      </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="main-container"
            contentStyle={{ background: "rgb(255,0,41,1)", color: "#fff", border:"3px solid", borderColor: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="December 16, 2022"
            iconStyle={{ background: "rgb(255,0,41,1)", color: "#fff" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text">
                    <video src={Dec162022} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text">
                    <video src={Dec162022fo} controls="controls" autoplay="true" className='swing-video' playsinline ='true'/>
                    Face On
                  </label>
                </div>
              </div>
              <div className="text-format">
                <p2 >Reviewed by Milo</p2>
                <ul>
                  <li>Loading pattern is off: Trail hip remains planted over the trail leg, needs to feel like its circling back</li>
                  <li>Wider stance needs to be instituted</li>
                  <li>Once the trail hip is loaded, student needs to feel a recenter mode, keeping the structure of the foundations</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff", border:"3px solid", borderColor: "red" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="December 27, 2022"
            dateClassName="date-left"
            iconStyle={{ background: "rgb(255, 255, 255)", color: "rgb(255,0,41)",border:"2px solid" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text2">
                    <video src={Dec272022} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text2">
                    <video src={Dec272022fo} controls="controls" autoplay="true" className='swing-video' playsinline ='true'/>
                    Face On
                  </label>
                </div>
                <div className="swing-clip">
                  <label className="center-text2">
                    <img src={Dec272022analysis2} className='swing-video'></img>
                    Setup
                  </label>
                  <label className="center-text2">
                  <img src={Dec272022analysis1} className='swing-video'></img>
                    Impact
                  </label>
                </div>
              </div>
              <div className="text-format2">
                <p2 >Reviewed by Henry</p2>
                <ul>
                  <li>Student is moving into the ball from setup to impact as seen above</li>
                  <li>This can lead to heel, shank shots</li>
                  <li>Student should work on depth, staying back with the hips which will help him stay shallow</li>
                  <li>Student should work on a slightly stronger grip, a wider stance, and feel more of a squat whilst rotating into the ball</li>
                  <li>"Be careful of where you are lined up to the net, you might be subconsciously hitting a hook in order to hit the center of the net."</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255,0,41,1)", color: "#fff", border:"3px solid", borderColor: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="January 2, 2023"
            iconStyle={{ background: "rgb(255,0,41,1)", color: "#fff" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text">
                    <video src={Jan022023} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text">
                    <video src={Jan022023fo} controls="controls" autoplay="true" className='swing-video' playsinline ='true'/>
                    Face On
                  </label>
                </div>
              </div>
              <div className="text-format">
                <p2 >Reviewed by Milo</p2>
                <ul>
                  <li>Feel like you are more connected on the back swing; student is overswinging slightly</li>
                  <li>Student should feel like they are more centered over the ball</li>
                  <li>Student applying force with the right wrist to the club, leading to a casting motion and a reaction from the body. Student should feel like they are moving the club into the ball with their pivot</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff", border:"3px solid", borderColor: "red" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="January 6, 2023"
            dateClassName="date-left"
        
            iconStyle={{ background: "rgb(255, 255, 255)", color: "rgb(255,0,41)",border:"2px solid" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text2">
                    <video src={Jan062023} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                </div>
              </div>
              <div className="text-format2">
                <p2 >Reviewed by Ed</p2>
                <ul>
                  <li>"Hey Daniel, yeah, this is money! The patience is great here. Keep doing this and incorporating it into your full swing!"</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255,0,41,1)", color: "#fff", border:"3px solid", borderColor: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="January 27, 2023"
            iconStyle={{ background: "rgb(255,0,41,1)", color: "#fff" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text">
                    <video src={Jan272023} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text">
                    <img src={Jan272023lo} className='swing-video' ></img>
                    Laid off position
                  </label>
               </div>
              </div>
              <div className="text-format">
                <p2 >Reviewed by Ed</p2>
                <ul>
                  <li>Student is laid off in the backswing, causing it to topple over in the downswing and forcing the student to stand up and throw the angles to hit the ball</li>
                  <li>Student should feel like the club is staying up, allowing the student to rotate through the ball</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff", border:"3px solid", borderColor: "red" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="February 26, 2023"
            dateClassName="date-left"
        
            iconStyle={{ background: "rgb(255, 255, 255)", color: "rgb(255,0,41)",border:"2px solid" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text2">
                    <video src={Feb262023} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text2">
                    <img src={Feb262023cw} className='swing-video'></img>
                    Chicken Wing
                  </label>
                </div>
              </div>
              <div className="text-format2">
                <p2 >Reviewed by Ed</p2>
                <ul>
                  <li>Student is loading the golf swing well, however, a pull down is causing the chest to stall and the arms to chicken-wing</li>
                  <li>Student should feel like the club is staying up, and the chest continues to rotate through the shot</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255,0,41,1)", color: "#fff", border:"3px solid", borderColor: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="March 14, 2023"
            iconStyle={{ background: "rgb(255,0,41,1)", color: "#fff" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text">
                    <video src={March142023} controls="controls" autoplay="true" className='swing-video' playsinline ='true'/>
                    Down the Line
                  </label>
                  <label className="center-text">
                    <img src={March142023tr} className='swing-video'></img>
                    Trigger Effect
                  </label>
                </div>
                <div className="swing-clip">
                <label className="center-text">
                    <img src={March142023fs} className='swing-video'></img>
                    Flat Shoulders
                  </label>
                </div>
              </div>
              <div className="text-format">
                <p2 >Reviewed by Henry</p2>
                <ul>
                  <li>Swing "trigger" is causing the student to start in an open position, which causes him to turn "tilted" in his back swing</li>
                  <li>At the start of the downswing, his shoulders are far too flat and he will have to drop the club with his arms to be able to reach the ball</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff", border:"3px solid", borderColor: "red" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="xxx"
            dateClassName="date-left"
        
            iconStyle={{ background: "rgb(255, 255, 255)", color: "rgb(255,0,41)",border:"2px solid" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text2">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text2">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'/>
                    Face On
                  </label>
                </div>
              </div>
              <div className="text-format2">
                <p2 >Reviewed by</p2>
                <ul>
                  <li>ABCD</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255,0,41,1)", color: "#fff", border:"3px solid", borderColor: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="xxx"
          
            iconStyle={{ background: "rgb(255,0,41,1)", color: "#fff" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'/>
                    Face On
                  </label>
                </div>
              </div>
              <div className="text-format">
                <p2 >Reviewed by</p2>
                <ul>
                  <li>ABCD</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff", border:"3px solid", borderColor: "red" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="xxx"
            dateClassName="date-left"
        
            iconStyle={{ background: "rgb(255, 255, 255)", color: "rgb(255,0,41)",border:"2px solid" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text2">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text2">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'/>
                    Face On
                  </label>
                </div>
              </div>
              <div className="text-format2">
                <p2 >Reviewed by</p2>
                <ul>
                  <li>ABCD</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255,0,41,1)", color: "#fff", border:"3px solid", borderColor: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="xxx"
            iconStyle={{ background: "rgb(255,0,41,1)", color: "#fff" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'/>
                    Face On
                  </label>
                </div>
              </div>
              <div className="text-format">
                <p2 >Reviewed by</p2>
                <ul>
                  <li>ABCD</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff", border:"3px solid", borderColor: "red" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="xxx"
            dateClassName="date-left"
        
            iconStyle={{ background: "rgb(255, 255, 255)", color: "rgb(255,0,41)",border:"2px solid" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text2">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text2">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'/>
                    Face On
                  </label>
                </div>
              </div>
              <div className="text-format2">
                <p2 >Reviewed by</p2>
                <ul>
                  <li>ABCD</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255,0,41,1)", color: "#fff", border:"3px solid", borderColor: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="xxx"
            
            iconStyle={{ background: "rgb(255,0,41,1)", color: "#fff" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'/>
                    Face On
                  </label>
                </div>
              </div>
              <div className="text-format">
                <p2 >Reviewed by</p2>
                <ul>
                  <li>ABCD</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 255, 255)", color: "#fff", border:"3px solid", borderColor: "red" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255,0,41,1)" }}
            date="xxx"
            dateClassName="date-left"
        
            iconStyle={{ background: "rgb(255, 255, 255)", color: "rgb(255,0,41)",border:"2px solid" }}
            icon={<SportsGolfIcon />}
            visible={false}
          >
            <div className="timeline-content">
              <div className="video-content">
                <div className="swing-clip">
                  <label className="center-text2">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'></video>
                    Down the Line
                  </label>
                  <label className="center-text2">
                    <video src={''} controls="controls" autoplay="true" className='swing-video' playsinline ='true'/>
                    Face On
                  </label>
                </div>
              </div>
              <div className="text-format2">
                <p2 >Reviewed by</p2>
                <ul>
                  <li>ABCD</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  );
}
