/* The InputArea component is a React functional component designed to facilitate the
 * process of searching for course selections and managing final examination times. Here's
 * a breakdown of its features and functionality:
 *
 * State Management: The component uses the useState hook to manage various states, including
 * courseCode for storing the input course code, sectionsData for storing retrieved sections data,
 * selectedSections for storing selected course sections, and errorText for displaying error
 * messages.
 *
 * Search Functionality: Users can input a course prefix code into an input field and click a
 * "Search" button to retrieve corresponding course sections from a database using Supabase.
 *
 * Displaying Course Sections: Retrieved course sections are displayed in a table format
 * using the SectionTable component. Users can click on a section to add it to the selected
 * course sections list.
 *
 * Handling Exceptions: If an exception exists for a selected course section, it's processed
 * separately to determine the final examination time.
 *
 * Exporting to Calendar: Users can export selected final examination times
 * to their calendar using the "Export to Calendar" button. The component utilizes the
 * ICalendar module from the datebook library to generate an .ics file, allowing users to
 * import events into their calendar applications.
 *
 * Error Handling: Error messages are displayed to users if there are issues with
 * data retrieval or processing.
 */
import React, { useState } from "react";
import SectionTable from "./SectionTable";
import FinalExamTable from "./FinalExamTable";
import moment from "moment-timezone";
import { GoogleCalendar } from "datebook";
import { supabase } from "../utils/supabase";

const InputArea = () => {
  const [courseCode, setCourseCode] = useState("");
  const [sectionsData, setSectionsData] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);
  const [errorText, setErrorText] = useState("");

  /* The handleSearch function asynchronously fetches course data from a Supabase
   * database based on a provided course code. It then updates the component's state
   * accordingly, setting the retrieved course data or displaying an error message if
   * the data is not found or if there's an error during the fetch operation.
   */
  const handleSearch = async () => {
    const { data, error } = await supabase
      .from("Courses")
      .select("*")
      .eq("COURSE_CODE", courseCode.toUpperCase().trim());
    if (error) {
      console.error("Error fetching data:", error);
      setErrorText("Error fetching data. Please try again later.");
      setSectionsData([]);
      return;
    }
    if (!data.length) {
      setErrorText("No data found for course code: " + courseCode);
      setSectionsData([]);
      return;
    }
      // Default any missing data to "N/A"
    const sectionsWithDefaults = data.map(section => ({
      ...section,
      COURSE_CODE: section.COURSE_CODE || "N/A",
      DAYS: section.DAYS || "N/A",
      START_TIME: section.START_TIME || "N/A",
      END_TIME: section.END_TIME || "N/A",
      INSTRUCTOR_NAME: section.INSTRUCTOR_NAME || "N/A",
      SECTION: section.SECTION || "N/A",
    }));

    setSectionsData(sectionsWithDefaults);
    setErrorText("");
  };

  /* The handleSectionClick function asynchronously handles the
   * click event on a course section. It first retrieves data from the "Exceptions"
   * table in a Supabase database based on the course code of the clicked section. If
   * there's an error during this fetch operation, it logs the error and returns. If data
   * is found in the "Exceptions" table for the course code, it processes this exception
   * data. Otherwise, it proceeds to fetch the course and final exam times for the clicked
   * section. After handling the click event and processing any necessary data, it clears
   * the search and section table.
   */
  const handleSectionClick = async (section) => {
    const { data: exceptionData, error: exceptionError } = await supabase
      .from("Exceptions")
      .select("*")
      .eq("COURSE_CODE", section.COURSE_CODE.toUpperCase().trim());

    if (exceptionError) {
      console.error("Error fetching from Exceptions:", exceptionError);
      return;
    }
    if (exceptionData.length) {
      processExceptionData(exceptionData[0], section);
    } else {
      await fetchCourseAndFinalExamTimes(section);
    }
    clearSearchAndSectionTable();
  };

  /* The fetchCourseAndFinalExamTimes function asynchronously fetches data from the
   * "Final Exam Times" table in a Supabase database based on the provided course section.
   * It selects the final exam time, exam day, and edge case fields where the days match the
   * section's days and the start time matches the section's start time. If there's an error
   * during the fetch operation or if no data is found, it logs the error and returns.
   * Otherwise, it processes the retrieved final exam data for the section using the
   * processFinalExamData function.
   */
  const fetchCourseAndFinalExamTimes = async (section) => {
    const { data: finalExamData, error: finalExamError } = await supabase
      .from("Final Exam Times")
      .select("EXAM_TIME, EXAM_DAY, EDGE_CASE")
      .eq("DAYS", section.DAYS)
      .eq("START_TIME", section.START_TIME);
    if (finalExamError || !finalExamData.length) {
      console.error(
        "Error fetching from Final Exam Times or no data found:",
        finalExamError
      );
      return;
    }
    processFinalExamData(finalExamData[0], section);
  };

  const clearSearchAndSectionTable = () => {
    setSectionsData([]);
    setCourseCode("");
  };

  /* The processFinalExamData function processes the final exam data retrieved from
   * the database for a given course section. It checks if the final exam time
   * (EXAM_TIME) is not "N/A". If it's not "N/A", it constructs an object containing the
   * course code, exam day, and exam time, and adds this information to the selected
   * sections state using the setSelectedSections function. If the final exam time is "N/A",
   * it alerts the user with the edge case information provided for the final exam.
   */
  const processFinalExamData = (finalExam, section) => {
    if (finalExam.EXAM_TIME !== "N/A") {
      const finalExamInformation = {
        courseCode: section.COURSE_CODE || "N/A",
        examDay: finalExam.EXAM_DAY || "N/A",
        examTime: finalExam.EXAM_TIME || "N/A",
      };
      setSelectedSections((prevSelectedSections) => [
        ...prevSelectedSections,
        finalExamInformation,
      ]);
    } else {
      alert(finalExam.EDGE_CASE);
    }
  };

  const processExceptionData = (exception) => {
    const finalExamInformation = {
      courseCode: exception.COURSE_CODE,
      examDay: exception.EXAMINATION_DAY,
      examTime: exception.EXAMINATION_TIME,
    };
    setSelectedSections((prevSelectedSections) => [
      ...prevSelectedSections,
      finalExamInformation,
    ]);
  };

  const handleExportToCalendar = () => {
    selectedSections.forEach(section => {
      const currentYear = new Date().getFullYear();
      const examDate = section.examDay + ', ' + currentYear;
      
      const startTimeStr = examDate + ' ' + section.examTime.split('-')[0].trim();
      const endTimeStr = examDate + ' ' + section.examTime.split('-')[1].trim();
  
      const startTime = moment(startTimeStr, 'dddd, MMMM D, YYYY h:mm a').toDate();
      const endTime = moment(endTimeStr, 'dddd, MMMM D, YYYY h:mm a').toDate();
    
      // Configure the options for the GoogleCalendar instance
      const options = {
        title: `${section.courseCode} Final Exam`,
        location: 'University Campus',
        description: `Final exam for ${section.courseCode}`,
        start: startTime,
        end: endTime
      };
    
      // Create a new GoogleCalendar instance with the provided options
      const googleCalendar = new GoogleCalendar(options);
    
      // Optionally set additional parameters
      googleCalendar.setParam('crm', 'BUSY');
      googleCalendar.setParam('trp', 'true');
    
      // Open the Google Calendar URL in a new window/tab
      window.open(googleCalendar.render(), '_blank');
    });
  };

  return (
    <section className="flex flex-col items-start justify-start p-5 box-border max-w-full">
      <h1 className="text-6xl font-medium font-mada text-black text-left mb-8">
        Enter your classes to find your examination times.
      </h1>
      <form
        className="flex flex-col gap-8 max-w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-4 max-w-full">
          <label
            htmlFor="coursePrefix"
            className="text-6xl font-medium font-mada text-black"
          >
            Course Prefix Code:
          </label>
          <div className="flex items-center gap-4">
            <input
              id="coursePrefix"
              type="text"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              className="w-full md:w-auto bg-gainsboro p-2.5 border border-gray-300"
              placeholder="EX. WRIT-150"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="bg-darkred text-white py-1.5 px-6 hover:bg-firebrick"
            >
              Search
            </button>
          </div>
          {errorText && (
            <p className="text-md font-mada text-red-600 !mt-0 !mb-0">
              {errorText}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4 max-w-full">
          <h2 className="text-6xl font-medium font-mada text-black">
            Please select your section:
          </h2>
          <SectionTable
            sectionsData={sectionsData}
            onSectionClick={handleSectionClick}
          />
        </div>
        <div className="flex flex-col gap-4 max-w-full">
          <h2 className="text-6xl font-medium font-mada text-black">
            Final Examination Time:
          </h2>
          <div className="flex flex-col bg-white border border-silver">
            <FinalExamTable selectedSections={selectedSections} />
          </div>
        </div>
        <button
          className="bg-darkred text-white py-1.5 px-6 hover:bg-firebrick"
          onClick={handleExportToCalendar}
        >
          Export to Calendar
        </button>
      </form>
    </section>
  );
};

export default InputArea;
