export const Student = ({ student }) => {
  const { name, id, image } = student;
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
          <span className="ml-auto px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
            Present
          </span>
        </div>
        <div className="flex justify-between gap-3 mt-2">
          <button className="flex-1 px-3 py-2 rounded-xl bg-gray-200 hover:text-white text-gray-600 text-xs font-medium hover:bg-blue-700">
            Present
          </button>
          <button className="flex-1 px-3 py-2 rounded-xl bg-gray-200 hover:text-white text-gray-600 text-xs font-medium hover:bg-blue-700">
            Absent
          </button>
          <button className="flex-1 px-3 py-2 rounded-xl bg-gray-200 hover:text-white text-gray-600 text-xs font-medium hover:bg-blue-700">
            Late
          </button>
        </div>
      </div>
    </>
  );
};
