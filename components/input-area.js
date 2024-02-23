import React, { useState } from "react";
import SectionTable from "./SectionTable";
import FinalExamTable from "./FinalExamTable";

//finals dummy data
const DUMMY_SECTIONS = {
  "CSCI-401": [
    {
      sectionNumber: "193859",
      dayTime: "M/W 2:00PM",
      instructor: "Marcus Smith",
      courseCode: "CSCI-401",
      finalExam: {
        date: "2024-05-11",
        time: "9AM - 12PM",
      },
    },
    {
      sectionNumber: "937583",
      dayTime: "T/TH 2:00PM",
      instructor: "Amy Lee",
      courseCode: "CSCI-401",
      finalExam: {
        date: "2024-05-12",
        time: "1PM - 4PM",
      },
    },
    // ... more sections with their final exam details
  ],
  // ... other courses with their sections and final exam details
};

const InputArea = () => {
  const [courseCode, setCourseCode] = useState("");
  const [sectionsData, setSectionsData] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);

  const handleSearch = () => {
    // Replace with API call logic as necessary
    const data = DUMMY_SECTIONS[courseCode];
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
        <button className="bg-darkred text-white py-1.5 px-6 hover:bg-firebrick">
          Export to Calendar
        </button>
      </form>
    </section>
  );
};

export default InputArea;
