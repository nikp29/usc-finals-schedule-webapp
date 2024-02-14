import styles from "./frame-group.module.css";

const FrameGroup = () => {
  return (
    <section className={styles.frameGroup}>
      <header className={styles.academicRecordsBlock}>
        <h2 className={styles.officeOfAcademic}>
          OFFICE OF ACADEMIC RECORDS AND REGISTRAR
        </h2>
        <img
          className={styles.screenShot20240202At111}
          loading="eager"
          alt=""
          src="/screen-shot-20240202-at-1111-1@2x.png"
        />
      </header>
      <div className={styles.finalExamFinderText}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <h1 className={styles.finalExamFinder}>Final Exam Finder</h1>
        </div>
        <img
          className={styles.bk011Icon}
          loading="eager"
          alt=""
          src="/bk01-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameGroup;
