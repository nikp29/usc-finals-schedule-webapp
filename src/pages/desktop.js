import Head from "next/head";
import FrameGroup from "../components/frame-group";
import InputArea from "../components/input-area";
import styles from "./index.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop1}>
      <FrameGroup />
      <InputArea />
      <img
        className={styles.screenShot20240202At112}
        alt=""
        src="/screen-shot-20240202-at-1127-1@2x.png"
      />
    </div>
  );
};

export default Desktop;
