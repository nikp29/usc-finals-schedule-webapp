import React, { useState } from 'react';
import SectionTable from './SectionTable';
import FinalExamTable from './FinalExamTable';
import moment from 'moment-timezone';
import { ICalendar } from 'datebook';
import * as FileSaver from 'file-saver';
import { supabase } from '../utils/supabase';

const InputArea = () => {
  const [courseCode, setCourseCode] = useState('');
  const [sectionsData, setSectionsData] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);
  const [errorText, setErrorText] = useState('');

  const handleSearch = async () => {
    const { data, error } = await supabase
      .from('Courses')
      .select('*')
      .eq('COURSE_CODE', courseCode.toUpperCase().trim());
    if (error) {
      console.error('Error fetching data:', error);
      setErrorText('Error fetching data. Please try again later.');
      setSectionsData([]);
      return;
    }
    if (!data.length) {
      setErrorText('No data found for course code: ' + courseCode);
      setSectionsData([]);
      return;
    }
    setSectionsData(data);
    setErrorText('');
  };

  const handleSectionClick = async (section) => {
    const { data: exceptionData, error: exceptionError } = await supabase
      .from('Exceptions')
      .select('*')
      .eq('COURSE_CODE', section.COURSE_CODE.toUpperCase().trim());

    if (exceptionError) {
      console.error('Error fetching from Exceptions:', exceptionError);
      return;
    }
    if (exceptionData.length) {
      processExceptionData(exceptionData[0], section);
    } else {
      await fetchCourseAndFinalExamTimes(section);
    }
    clearSearchAndSectionTable();
  };

  const fetchCourseAndFinalExamTimes = async (section) => {
    const { data: finalExamData, error: finalExamError } = await supabase
      .from('Final Exam Times')
      .select('EXAM_TIME, EXAM_DAY, EDGE_CASE')
      .eq('DAYS', section.DAYS)
      .eq('START_TIME', section.START_TIME);
    if (finalExamError || !finalExamData.length) {
      console.error('Error fetching from Final Exam Times or no data found:', finalExamError);
      return;
    }
    processFinalExamData(finalExamData[0], section);
  };

  const clearSearchAndSectionTable = () => {
    setSectionsData([]);
    setCourseCode('');
  }

  const processFinalExamData = (finalExam, section) => {
    if (finalExam.EXAM_TIME !== 'N/A') {
      const finalExamInformation = {
        courseCode: section.COURSE_CODE,
        examDay: finalExam.EXAM_DAY,
        examTime: finalExam.EXAM_TIME
      }
      setSelectedSections(prevSelectedSections => [
        ...prevSelectedSections,
        finalExamInformation
      ]);
    } else {
      alert(finalExam.EDGE_CASE);
    }
  };

  const processExceptionData = (exception) => {
    const finalExamInformation = {
      courseCode: exception.COURSE_CODE,
      examDay: exception.EXAMINATION_DAY,
      examTime: exception.EXAMINATION_TIME
    }
    setSelectedSections(prevSelectedSections => [
      ...prevSelectedSections,
      finalExamInformation
    ]);
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
