export const Student = ({ student, changeAssistance }) => {
  const { name, id, image, assistance } = student;
  return (
    <>
      <div className="rounded-lg shadow-lg m-4 p-3 bg-white">
        <div className=" flex items-center gap-4">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src={image}
            alt={`Foto de ${name}`}
          />
          <div className="flex flex-col">
            <p className="font-semibold text-gray-900 text-sm">{name}</p>
            <p className="text-xs text-gray-500">ID: {id}</p>
          </div>
          <span
            className={`ml-auto px-2 py-1 text-xs font-medium rounded-full ${
              assistance === 'Present'
                ? 'bg-green-100 text-green-600'
                : assistance === 'Absent'
                  ? 'bg-red-100 text-red-500'
                  : 'bg-yellow-100 text-yellow-500'
            }`}
          >
            {assistance}
          </span>
        </div>
        <div className="flex justify-between gap-3 mt-2">
          <button
            className="flex-1 px-3 py-2 rounded-xl bg-gray-200 hover:text-white text-gray-600 text-xs font-medium hover:bg-blue-700"
            onClick={() => changeAssistance('Present', student)}
          >
            Present
          </button>
          <button
            className="flex-1 px-3 py-2 rounded-xl bg-gray-200 hover:text-white text-gray-600 text-xs font-medium hover:bg-blue-700"
            onClick={() => changeAssistance('Absent', student)}
          >
            Absent
          </button>
          <button
            className="flex-1 px-3 py-2 rounded-xl bg-gray-200 hover:text-white text-gray-600 text-xs font-medium hover:bg-blue-700"
            onClick={() => changeAssistance('Late', student)}
          >
            Late
          </button>
        </div>
      </div>
    </>
  );
};
