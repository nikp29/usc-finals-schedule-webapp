const FinalExamTable = ({ selectedSections }) => {
  if (!selectedSections || !selectedSections.length) return null;

  return (
    <div className="overflow-x-auto font-inter">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-xs font-semibold text-black bg-gray-100">
            <th className="px-4 py-2 border border-solid border-silver">
              Course/Section Number
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
                {`${section.courseCode}/${section.sectionNumber}`}
              </td>
              <td className="px-4 py-2 border border-solid border-silver">
                {section.finalExam.date}
              </td>
              <td className="px-4 py-2 border border-solid border-silver">
                {section.finalExam.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinalExamTable;
