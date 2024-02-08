import { FC } from "react";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export interface SliderProps {
  children: React.ReactElement;
  step?: number;
}

const Slider: FC<SliderProps> = ({ children, step = 200 }) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.slider}>
      <IconButton onClick={scrollLeft} aria-label="arrow" color="primary">
        <ArrowBackIosNewRoundedIcon />
      </IconButton>

      {React.cloneElement(children, { ref: sliderRef })}

      <IconButton onClick={scrollRight} aria-label="arrow" color="primary">
        <ArrowForwardIosRoundedIcon />
      </IconButton>
    </div>
  );
};

export default Slider;
