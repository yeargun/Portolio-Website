import "./index.scss";
import React, { useState } from "react";
//just wanted to test.
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from "darkreader";
import { useEffect } from "react";
import { setBCS, valueToBCS, getBCS, getSliderValue } from "./utils";

const ThemeGod = () => {
  const [sliderValue, setSliderValue] = useState(getSliderValue());
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const handleThemeGodClick = () => {
    if (localStorage.getItem("theme") === "dark") {
      disableDarkMode();
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      enableDarkMode(getBCS());
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, [localStorage.getItem("theme")]);

  return (
    <div className="themeGodWrapper">
      {theme !== "dark" && (
        <button
          style={{ outline: "none!important" }}
          onClick={handleThemeGodClick}
        >
          ☀️
        </button>
      )}
      {theme === "dark" && (
        <>
          <button
            style={{
              transform: "translate(0px, -2.5px)",
            }}
            onClick={handleThemeGodClick}
          >
            🌙
          </button>
          <div className="range-slider">
            <input
              className="input-range"
              type="range"
              step="0.5"
              value={sliderValue}
              min="0"
              max="10"
              onChange={(e) => {
                const obj = valueToBCS(e.target.value);
                enableDarkMode(valueToBCS(e.target.value));
                setBCS(obj);
                setSliderValue(e.target.value);
              }}
            />
          </div>
          <div className="d"></div>
        </>
      )}
    </div>
  );
};

export default ThemeGod;
