import "./styles.css";
import VideoPlayer from "./components/VideoPlayerFunction";

const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.5, 2],
  width: 640,
  height: 360,
  controls: true,
  plugins: {
    videoJsResolutionSwitcher: {
      default: "height",
      dynamicLabel: true,
    },
  },
  sources: [
    {
      src: "https://vjs.zencdn.net/v/oceans.mp4?hd",
      type: "video/mp4",
      label: "720",
      res: 720,
    },
    {
      src: "https://vjs.zencdn.net/v/oceans.mp4?sd",
      type: "video/mp4",
      label: "480",
      res: 480,
    },
  ],
};

export default function App() {
  return (
    <div className="App">
      <h1>Video</h1>
      <VideoPlayer {...videoJsOptions} />
      {/* <ol style={{ textAlign: "left" }}>
        <li>do not import video.js and videojs-resolution-switcher</li>
        <li>embed css link and script tag cdnjs in file public/index.html</li>
        <li>
          required videojs version 5, videojs-resolution-switcher version 0.4.2
        </li>
      </ol> */}
    </div>
  );
}
