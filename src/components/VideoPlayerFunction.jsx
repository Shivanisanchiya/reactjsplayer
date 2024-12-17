import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Default video.js styles

// Import the resolution switcher plugin
import "videojs-resolution-switcher";
import "videojs-resolution-switcher/lib/videojs-resolution-switcher.css"; // Plugin styles

export default function VideoPlayer(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    const { sources, ...options } = props;

    // Register the plugin after importing
    if (videojs.getPlugin("videoJsResolutionSwitcher") === undefined) {
      console.warn("Registering videoJsResolutionSwitcher plugin...");
    }

    const player = videojs(videoRef.current, options, function () {
      this.updateSrc(sources); // Load sources
      this.controlBar.addChild("ResolutionMenuButton", {}); // Add resolution switcher button
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [props]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ borderRadius: 10, overflow: "hidden" }}>
        <video
          ref={videoRef}
          className="video-js vjs-default-skin"
          controls
        ></video>
      </div>
    </div>
  );
}
