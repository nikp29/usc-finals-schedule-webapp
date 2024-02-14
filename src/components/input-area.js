import styles from "./input-area.module.css";

const InputArea = () => {
  return (
    <section className={styles.inputArea}>
      <form className={styles.findExamTimeTextParent}>
        <div className={styles.findExamTimeText}>
          <h1 className={styles.enterYourClasses}>
            Enter your classes to find your examination times.
          </h1>
        </div>
        <div className={styles.searchFrame}>
          <h1 className={styles.coursePrefixCode}>Course Prefix Code:</h1>
          <div className={styles.frameSplitter}>
            <div className={styles.cSCISearchButton}>
              <div className={styles.cSCISearchButtonChild} />
              <div className={styles.csci401}>CSCI401</div>
            </div>
            <button className={styles.cSCISearchButton1}>
              <div className={styles.cSCISearchButtonItem} />
              <div className={styles.search}>Search</div>
            </button>
          </div>
        </div>
        <div className={styles.cellContentText}>
          <h1 className={styles.pleaseSelectYour}>
            Please select your section:
          </h1>
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.cell}>
                <div className={styles.content}>
                  <div className={styles.text}>Section Number</div>
                </div>
              </div>
              <div className={styles.cell1}>
                <div className={styles.content1}>
                  <div className={styles.text1}>Day/Time</div>
                </div>
              </div>
              <div className={styles.cell2}>
                <div className={styles.content2}>
                  <div className={styles.text2}>Instructor</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content3}>
                  <div className={styles.text3}>193859</div>
                </div>
              </div>
              <div className={styles.cell4}>
                <div className={styles.content4}>
                  <div className={styles.text4}>M/W 2:00PM</div>
                </div>
              </div>
              <div className={styles.cell5}>
                <div className={styles.content5}>
                  <div className={styles.text5}>Marcus Smith</div>
                </div>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.cell6}>
                <div className={styles.content6}>
                  <div className={styles.text6}>937583</div>
                </div>
              </div>
              <div className={styles.cell7}>
                <div className={styles.content7}>
                  <div className={styles.text7}>T/TH 2:00PM</div>
                </div>
              </div>
              <div className={styles.cell8}>
                <div className={styles.content8}>
                  <div className={styles.text8}>Amy Lee</div>
                </div>
              </div>
            </div>
            <div className={styles.finalExamFinderFrame} />
          </div>
        </div>
        <div className={styles.timeDisplayFrame}>
          <h1
            className={styles.finalExaminationTime}
          >{`Final Examination Time:     `}</h1>
          <div className={styles.table2}>
            <div className={styles.table1}>
              <div className={styles.cell9}>
                <div className={styles.content9}>
                  <div className={styles.text9}>Course/Section Number</div>
                </div>
              </div>
              <div className={styles.cell10}>
                <div className={styles.content10}>
                  <div className={styles.text10}>CSCI401/193859</div>
                </div>
              </div>
              <div className={styles.cell11}>
                <div className={styles.content11}>
                  <div className={styles.text11}>Date</div>
                </div>
              </div>
              <div className={styles.cell12}>
                <input
                  className={styles.content12}
                  placeholder="Monday, May 6"
                  type="text"
                />
              </div>
              <div className={styles.cell13}>
                <div className={styles.content13}>
                  <div className={styles.text12}>Time</div>
                </div>
              </div>
              <div className={styles.cell14}>
                <div className={styles.content14}>
                  <div className={styles.text13}>11AM - 1PM</div>
                </div>
              </div>
              <div className={styles.cell15}>
                <input
                  className={styles.content15}
                  placeholder="WRIT340/174967"
                  type="text"
                />
              </div>
              <div className={styles.cell16}>
                <div className={styles.content16}>
                  <div className={styles.text14}>Tuesday, May 7</div>
                </div>
              </div>
              <div className={styles.cell17}>
                <div className={styles.content17}>
                  <div className={styles.text15}>2PM - 4PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.exportToCalendar}>Export to Calendar</div>
        </button>
      </form>
    </section>
  );
};

export default InputArea;
