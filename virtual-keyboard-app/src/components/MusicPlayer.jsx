import React, { useState, useEffect, useContext } from "react";
import PlayIcon from "../assets/icons/PlayIcon";
import PauseIcon from "../assets/icons/PauseIcon";
import ThemeContext from "../context/ThemeContext";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const themes = useContext(ThemeContext);
  const currentTheme = themes[0];
  const nextTheme = themes[1];

  const [audio, setAudio] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isMusicHovered, setIsMusicHovered] = useState(false);

  const handleMusicHover = () => {
    setIsMusicHovered(!isMusicHovered);
  };

  useEffect(() => {
    const newAudio = new Audio(process.env.PUBLIC_URL + currentTheme.music);
    newAudio.loop = true;
    setAudio(newAudio);

    if (isPaused !== true) {
      audio.pause();
      setIsPaused(true);

      const newAudio = new Audio(process.env.PUBLIC_URL + currentTheme.music);
      newAudio.loop = true;
      setAudio(newAudio);

      newAudio.play().catch((error) => {
        console.error("Autoplay prevented:", error);
      });

      setIsPaused(false);
    }
  }, [currentTheme]);

  const togglePlayPause = () => {
    if (isPaused) {
      audio.play().catch((error) => {
        console.error("Autoplay prevented:", error);
      });
    } else {
      audio.pause();
    }
    setIsPaused(!isPaused);
    setIsMusicHovered(!isMusicHovered);
  };

  return (
    <div>
      <button
        className="musicPlayer"
        style={{
          backgroundColor: isMusicHovered
            ? currentTheme.keyColor
            : nextTheme.keyColor,
        }}
        onMouseEnter={handleMusicHover}
        onMouseLeave={handleMusicHover}
        onClick={togglePlayPause}
      >
        {isPaused ? (
          <PlayIcon
            keyColor={
              isMusicHovered ? nextTheme.keyColor : currentTheme.keyColor
            }
            width={18}
            height={18}
          />
        ) : (
          <PauseIcon
            keyColor={
              isMusicHovered ? nextTheme.keyColor : currentTheme.keyColor
            }
            width={18}
            height={18}
          />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
