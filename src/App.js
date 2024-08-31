import tableImage from "./table.png";
import displayBottom from "./displayBottom.png";
import displayTop from "./displayTop.png";
import { useRef, useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import { moment } from "moment";
const App = () => {
  // const now = moment();
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [sec, setSec] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [imageScale, setImageScale] = useState(1);
  const imageRef = useRef(null);
  const main = useRef();
  // const formattedDate = now.format("MMMM Do YYYY");

  // useGSAP(
  //   () => {
  //     const imageElement = imageRef.current;
  //     if (imageElement) {
  //       gsap.to(imageElement, {
  //         scale: imageScale + 0.2, // Adjust the zoom level as needed
  //         scrollTrigger: {
  //           trigger: imageElement,
  //           start: "center",
  //           end: "center",
  //           scrub: true, // Makes the animation smooth and continuous
  //           onUpdate: (self) => {
  //             console.log("Hey", self);
  //             setImageScale(imageScale + 0.2);
  //             gsap.set(imageElement, { scale: imageScale + 0.2 });
  //           },
  //         },
  //       });
  //     }
  //   },
  //   { scope: imageRef }
  // );

  const [scrollVal, setScrollVal] = useState(0);
  useEffect(() => {
    const scrollEventHandler = () => {
      console.log("scrolling", window.scrollY);
      if (window.scrollY === 0) {
        setImageScale(1);
        return;
      }

      if (window.scrollY >= 100) {
        setImageScale(5);
        return;
      }

      if (window.scrollY > scrollVal) {
        // console.log("adding ", imageScale);
        if (imageScale < 5) setImageScale(imageScale + 0.1);
      } else {
        // console.log("subtracting ", imageScale);
        if (imageScale > 1) setImageScale(imageScale - 0.1);
      }
      setScrollVal(window.scrollY);
    };

    window.addEventListener("scroll", scrollEventHandler, { passive: true });
    return () =>
      window.removeEventListener("scroll", scrollEventHandler, false);
  }, [scrollVal]);

  useEffect(() => {
    const today = new Date();

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    setMonth(monthNames[today.getMonth()]);
    setYear(today.getFullYear());
    setDate(today.getDate());
    const day = today.getDay();
    setDay(days[day]);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, 1);

  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format the time with leading zeroes for single digits
    setHour(hours.toString().padStart(2, "0"));
    setMinute(minutes.toString().padStart(2, "0"));
    setSec(seconds.toString().padStart(2, "0"));
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "200vh",
        display: "flex",
        background: "radial-gradient(circle, #120c08 0%, rgba(0,0,0,1) 100%)",
      }}
      onScroll={(e) => {
        console.log("divSxroll");
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "95%",
            margin: "auto auto 0 auto",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "max-content",
              height: "max-content",
              transform: `translate(${imageScale > 1 ? "-30vw" : "0"},0)`,
              transition: "transform 0.7s",
            }}
          >
            <p
              style={{
                fontFamily: `"Mina", sans-serif`,
                margin: 0,
                fontSize: "4rem",
                color: "gray",
              }}
            >
              {hour}:{minute}:{sec}
            </p>
            <p
              style={{
                fontFamily: `"Mina", sans-serif`,
                margin: 0,
                fontWeight: 800,
                fontSize: "1.4rem",
                color: "gray",
                letterSpacing: "10px",
              }}
            >
              {day.toUpperCase()}
            </p>
            <p
              style={{
                fontFamily: `"Mina", sans-serif`,
                margin: 0,
                fontWeight: 300,
                fontSize: "0.8rem",
                color: "orange",
                letterSpacing: "10px",
              }}
            >
              {date} {month} {year}
            </p>
          </div>
          <div
            style={{
              height: "95%",
              width: "90%",
              display: "flex",
              position: "absolute",
              alignItems: "flex-end",
              justifyContent: "center",
              zIndex: 4,
              transform: `translate(0,${imageScale > 1 ? "30vh" : "0"})`,
              transition: "transform 0.5s",
            }}
          >
            <img
              src={tableImage}
              style={{
                margin: "auto",
                position: "absolute",
                marginBottom: 0,
                marginTop: "auto",
                width: "1000px",
                height: "200px",
                flex: "none",
              }}
            />
          </div>
          <div
            style={{
              height: "95%",
              width: "90%",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              zIndex: 3,
            }}
          >
            <img
              src={displayBottom}
              style={{
                width: "500px",
                marginTop: "auto",
                marginBottom: "150px",
                filter: "drop-shadow(5px -20px 40px #165196)",
                transform: `translate(0,${imageScale > 1 ? "50vh" : "0"})`,
                transition: "transform 0.9s",
              }}
            />
          </div>
          <div
            style={{
              height: "95%",
              width: "90%",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              zIndex: 6,
            }}
          >
            <img
              src={displayTop}
              style={{
                width: "380px",
                marginTop: "auto",
                marginBottom: "360px",
                filter: "drop-shadow(5px -20px 40px #C26827)",
                transform: `scale(${imageScale})`,
                transition: "transform 0.5s ease-in-out",
              }}
              ref={imageRef}
            />
          </div>
          <div
            style={{
              flex: "none",
              maxWidth: "500px",
              width: "max-content",
              height: "450px",
              marginLeft: "auto",
              display: "flex",
              transform: `translate(${imageScale > 1 ? "50vw" : "0"},0)`,
              transition: "transform 0.7s",
            }}
          >
            <p
              style={{
                fontFamily: `"Lilita One", sans-serif`,
                fontWeight: 800,
                height: "350px",
                lineHeight: 1,
                fontSize: "5rem",
                margin: 0,
                textAlign: "right",

                color: "rgba(255,255,255,0.2)",
              }}
            >
              MY METAVERSE DEV<br></br> SETUP
            </p>
            <div
              style={{
                flex: "none",
                marginTop: "10px",
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
                marginLeft: "10px",
                width: "10px",
                height: "330px",
                backgroundColor: "#FFA800",
                boxShadow: "-20px 0px 50px 3px rgba(255,145,20,1) ",
              }}
            ></div>

            <div
              style={{
                flex: "none",
                width: "30px",
                height: "350px",
                backgroundColor: "#1D1D1D",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
