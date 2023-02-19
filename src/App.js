import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
var app = document.getElementById("summary-box");

function App() {
  var typewriter = new Typewriter(app, {
    delay: 75,
  });
  typewriter
    .pauseFor(200)
    .typeString("Hey Nice to see you there")
    .pauseFor(300)
    .deleteChars(5)
    .typeString(
      "<strong>here</strong><p> I am a <strong> Software Developer</strong></p>  "
    )
    .typeString(
      '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
    )
    .pauseFor(500)
    .start();
  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);
  const page4 = useRef(null);
  const page5 = useRef(null);
  const onScrollHandler = () => {
    page1.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onScrollHandlerPage1 = () => {
    page2.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onScrollHandlerPage2 = () => {
    page3.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onScrollHandlerPage3 = () => {
    page4.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onScrollHandlerPage4 = () => {
    page5.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onScrollHandlerPage5 = () => {
    page1.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onScrollhandler = () => {
    console.log("scrolling");
  };

  return (
    <div className="App">
      <div
        style={{
          width: "500vw",
          height: "100vh",
          display: "flex",
        }}
      >
        <div
          ref={page1}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            backgroundColor: "pink",
          }}
        >
          <div
            style={{
              width: "60vw",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img
              style={{ width: "20vw" }}
              src={`assets/images/profile-img.png`}
            />
            <div style={{}}>
              <p
                id="summary-box"
                style={{
                  width: "30vw",
                  fontSize: "20px",
                  lineHeight: "30px",
                  textAlign: "justify",
                }}
              ></p>
            </div>
          </div>
          <button onClick={onScrollHandlerPage1}>click me to scroll</button>
        </div>

        <div
          ref={page2}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "lightgreen",
          }}
          onScroll={onScrollhandler}
        >
          <button onClick={onScrollHandlerPage2}>click me to scroll</button>
        </div>

        <div
          ref={page3}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "coral",
          }}
        >
          <button onClick={onScrollHandlerPage3}>click me to scroll</button>
        </div>

        <div
          ref={page4}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "yellow",
          }}
        >
          <button onClick={onScrollHandlerPage4}>click me to scroll</button>
        </div>

        <div
          ref={page5}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "lightblue",
          }}
        >
          <button onClick={onScrollHandlerPage5}>click me to scroll</button>
        </div>
      </div>
    </div>
  );
}

export default App;
