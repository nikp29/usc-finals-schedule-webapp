import React, { useState } from "react";
import SectionTable from "./SectionTable";
import FinalExamTable from "./FinalExamTable";
import moment from "moment-timezone";
import { ICalendar } from "datebook";
import * as FileSaver from "file-saver";
import { supabase } from "../utils/supabase";

const InputArea = () => {
  const [courseCode, setCourseCode] = useState("");
  const [sectionsData, setSectionsData] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);
  const [exportLink, setExportLink] = useState("");

  const handleSearch = async () => {
    // Replace with API call logic as necessary
    const { data, error } = await supabase.from("Courses").select('*').eq('COURSE_CODE', courseCode);
    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    setSectionsData(data);
  };

  const handleSectionClick = (section) => {
    setSelectedSections((prevSelectedSections) => {
      // Check if the section is already selected
      if (
        prevSelectedSections.some(
          (selected) => selected.sectionNumber === section.sectionNumber
        )
      ) {
        return prevSelectedSections.filter(
          (selected) => selected.sectionNumber !== section.sectionNumber
        ); // If already selected, don't add it again
      }
      return [...prevSelectedSections, section]; // Concatenate the new section
    });
  };

  const makeConfigFromSection = (section) => {
    return {
      title: section.courseCode + " Final",
      description:
        "Section: " +
        section.sectionNumber +
        "\nInstructor: " +
        section.instructor,
      start: section.finalExam.startTime,
      end: section.finalExam.endTime,
    };
  };

  const handleExportToCalendar = () => {
    if (!selectedSections.length) return;
    let ics;
    selectedSections.forEach((section, idx) => {
      if (idx === 0) {
        // first element
        ics = new ICalendar(makeConfigFromSection(section));
      } else {
        ics.addEvent(new ICalendar(makeConfigFromSection(section)));
      }
    });
    const blob = new Blob([ics.render()], {
      type: "text/calendar",
    });
    FileSaver.saveAs(blob, "finals-schedule.ics");
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
              placeholder="Enter Course Code"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="bg-darkred text-white py-1.5 px-6 hover:bg-firebrick"
            >
              Search
            </button>
          </div>
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
