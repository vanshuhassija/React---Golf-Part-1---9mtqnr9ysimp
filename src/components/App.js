import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

function App() {
  const [renderBall, setRenderBall] = useState(false);
  const [position, setPosition] = useState(0);
  const [ballPosition, setBallPosition] = useState({ left: 0 });


  useEffect(() => {
    document.addEventListener("keydown",function(event){
        if(event.key==="ArrowRight"){
            setBallPosition(prevState=>({left:prevState.left+5}))
        }
    })
  }, []);

  function buttonClickHandler() {
     setRenderBall(true);
  }

  function renderBallOrButton() {
    if (renderBall) {
      return <div className="ball" style={{position:"absolute",left:ballPosition.left}}></div>;
    } else {
      return <button onClick={buttonClickHandler}>Click For One Ball</button>;
    }
  }

  return <div className="playground">{renderBallOrButton()}</div>;
}

export default App;
