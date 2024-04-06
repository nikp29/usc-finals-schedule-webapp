const SectionTable = ({ sectionsData, onSectionClick }) => {
  if (!sectionsData) return null;

  return (
    <div className="overflow-x-auto font-inter">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-xs font-semibold text-black bg-gray-100">
            <th className="px-4 py-2 border border-solid border-silver">
              Section Number
            </th>
            <th className="px-4 py-2 border border-solid border-silver">
              Day/Time
            </th>
            <th className="px-4 py-2 border border-solid border-silver">
              Instructor
            </th>
          </tr>
        </thead>
        <tbody>
          {sectionsData.map((section, index) => (
            <tr
              key={section.SECTION}
              className={`cursor-pointer ${
                index % 2 === 0 ? "bg-gray-200" : "bg-white"
              } hover:bg-blue-100 hover:opacity-90`}
              onClick={() => onSectionClick(section)}
            >
              <td className="px-4 py-2 border border-solid border-gray-300">
                {section.SECTION}
              </td>
              <td className="px-4 py-2 border border-solid border-silver">
                {section.DAYS} {section.START_TIME} - {section.END_TIME}
              </td>
              <td className="px-4 py-2 border border-solid border-silver">
                {section.INSTRUCTOR_NAME}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionTable;