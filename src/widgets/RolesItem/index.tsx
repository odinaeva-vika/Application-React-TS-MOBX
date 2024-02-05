import { FC, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import ReactPlayer from "react-player";
import styles from "./styles.module.scss";
import PauseIcon from "@mui/icons-material/Pause";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Spinner from "../Spinner";

type RolesItemProps = {
  width: string;
  height: string;
  url: string;
};

const RolesItem: FC<RolesItemProps> = observer(
  ({ url = "", width, height }) => {
    const videoRef = useRef<HTMLDivElement | null>(null);

    const [isReady, setIsReady] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
      setIsPlaying((_prev) => !_prev);
      if (videoRef.current && videoRef.current.parentElement) {
        videoRef.current.parentElement.classList.toggle("playing", !isPlaying);
      }
    };

    return (
      <div
        className={`${styles.video} ${isPlaying ? "playing" : ""}`}
        ref={videoRef}
      >
        {!isReady && (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        )}

        <ReactPlayer
          playing={isPlaying}
          loop={true}
          url={url}
          width={width}
          height={height}
          onReady={() => setIsReady(true)}
        />

        <div onClick={handleClick} className={styles.video__controls}>
          {isPlaying ? (
            <PauseIcon color="action" sx={{ fontSize: 50 }} />
          ) : (
            <PlayCircleIcon color="action" sx={{ fontSize: 50 }} />
          )}
        </div>
      </div>
    );
  }
);

export default RolesItem;
