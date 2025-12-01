export const Student = ({ student }) => {
  const { name, id, image } = student;
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg m-4">
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src={image}
            alt={`Foto de ${name}`}
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">ID: {id}</p>
          </div>
          <span className="ml-auto mr-2 mt-1 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
            Present
          </span>
        </div>
        <div className="px-6 py-4 flex justify-around">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Present
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Late
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Absent
          </button>
        </div>
      </div>
    </>
  );
};
