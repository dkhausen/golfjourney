import "./App.css";

import Introduction from "./Introduction";
import BeforeAfter from "./BeforeAfter";
import JourneyTimeline from "./JourneyTimeline";


export default function Home() {
  return (
    <div className="App">
      <Introduction/>
      <BeforeAfter/>
      <JourneyTimeline/>
    </div>
  );
}
