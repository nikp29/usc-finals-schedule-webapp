/* The FinalExamTable component is a React functional component that displays a
 * table of final exam information for selected sections of courses. Here's a breakdown
 * of its functionality:
 * Props: It accepts a single prop selectedSections, which is an array containing
 * information about the selected course sections.
 */
const FinalExamTable = ({ selectedSections }) => {
  if (!selectedSections || !selectedSections.length) return null;

  return (
    <div className="overflow-x-auto font-inter">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-xs font-semibold text-black bg-gray-100">
            <th className="px-4 py-2 border border-solid border-silver">
              Course
            </th>
            <th className="px-4 py-2 border border-solid border-silver">
              Date
            </th>
            <th className="px-4 py-2 border border-solid border-silver">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedSections.map((section, index) => (
            <tr
              key={section.sectionNumber}
              className={`${index % 2 === 0 ? "bg-gray-200" : "bg-white"}`}
            >
              <td className="px-4 py-2 border border-solid border-gray-300">
                {`${section.courseCode}`}
              </td>
              <td className="px-4 py-2 border border-solid border-silver">
                {section.examDay}
              </td>
              <td className="px-4 py-2 border border-solid border-silver">
                {section.examTime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinalExamTable;
