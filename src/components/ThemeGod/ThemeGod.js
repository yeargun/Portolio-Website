"use client";
import styles from "./ThemeGod.module.scss";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { setBCS, valueToBCS, useGetBCS, useGetSliderValue } from "./utils";
import { setLocalStorage, useGetLocalStorage } from "@hooks/useLocalStorage";

const ThemeGod = () => {
  const [sliderValue, setSliderValue] = useState(useGetSliderValue());
  const theme_storage = useGetLocalStorage("theme");
  const [theme, setTheme] = useState(theme_storage);
  const BCS = useGetBCS();
  useLayoutEffect(() => {
    if (theme === "dark") {
      import("darkreader").then((module) => module.enable(BCS));
    } else {
      import("darkreader").then((module) => module.disable());
    }
  }, [theme]);

  const handleThemeGodClick = () => {
    if (theme_storage === "dark") {
      setLocalStorage("theme", "light");
      setTheme("light"); //keeping these for faster rerender hopefully
    } else {
      setLocalStorage("theme", "dark");
      setTheme("dark");
    }
  };

  if (theme === "dark")
    return (
      <div className={`${styles.themeGodWrapper} ${styles.dark}`}>
        <button
          style={{
            transform: "translate(0px, -2.5px)",
          }}
          onClick={handleThemeGodClick}
        >
          🌙
        </button>
        <div className={styles.rangeSlider}>
          <input
            className={styles.inputRange}
            type="range"
            step="0.5"
            value={sliderValue}
            min="0"
            max="10"
            onChange={(e) => {
              const obj = valueToBCS(e.target.value);
              import("darkreader").then((module) =>
                module.enable(valueToBCS(e.target.value))
              );
              setBCS(obj);
              setSliderValue(e.target.value);
            }}
          />
        </div>
        <div className={styles.d}></div>
      </div>
    );
  else
    return (
      <div className={styles.themeGodWrapper}>
        <button
          style={{ outline: "none!important" }}
          onClick={handleThemeGodClick}
        >
          ☀️
        </button>
      </div>
    );
};

export default ThemeGod;
