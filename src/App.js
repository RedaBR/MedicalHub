import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import bgvideo from "./Components/Assets/backgroundvideo.mp4";

function App() {
  return (
    <>
      <video
        loop
        autoPlay
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          left: "0",
          top: 0,
          zIndex: -1,
        }}
      >
        <source src={bgvideo} type="video/mp4" />
      </video>
      <LoginForm />
    </>
  );
}

export default App;
