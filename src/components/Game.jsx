import React, { useState } from "react";
import html2canvas from "html2canvas";
import Button from "react-bootstrap/Button";
import CMTTable from "./CMTTable";
import Col from "react-bootstrap/esm/Col";
import camera from "../assets/camera.png";
import useDataContext from "../contexts/DataContext";
import useThemeContext from "../contexts/ThemeContext";

export default function Game(props) {
  const { toggleTheme } = useThemeContext();
  const { reset } = useDataContext();

  const addCSS = (fileName) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fileName;
    document.head.appendChild(link);
  };

  const removeCSS = (fileName) => {
    const links = document.head.getElementsByTagName("link");
    for (let link of links) {
      if (link.href.includes(fileName)) {
        document.head.removeChild(link);
      }
    }
  };

  const disableAnimations = () => {
    removeCSS("enableAnimations.css");
    addCSS("disableAnimations.css");
  };

  const enableAnimations = () => {
    removeCSS("disableAnimations.css");
    addCSS("enableAnimations.css");
  };

  const captureScreenshot = () => {
    disableAnimations();

    html2canvas(props.snapshotRef.current, {
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
    }).then((canvas) => {
      const imgUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgUrl;
      link.download = "snapshot.png";
      link.click();

      enableAnimations();
    });
  };

  return (
    <Col xs={12}>
      <div className="fade-in">
        <div>
          <CMTTable />
        </div>
      </div>
      <div className="fade-in">
        <Button className="resetButton" onClick={reset}>
          Reset
        </Button>
        <Button className="themeButton" onClick={toggleTheme}>
          Toggle Theme
        </Button>
        <div className="cameraIcon">
          <div className="img">
            <img src={camera} alt="camera" onClick={captureScreenshot} />
          </div>
        </div>
      </div>
    </Col>
  );
}
