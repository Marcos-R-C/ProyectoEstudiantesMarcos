export const Contador = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4">
        <div className="border bg-white border-gray-100 shadow-sm p-3 rounded-2xl flex flex-col">
          <p className="text-gray-500 text-sm font-medium">Total Students</p>
          <p className="text-2xl font-bold text-gray-700 mt-1">32</p>
        </div>
        <div className="border bg-white border-gray-100 shadow-sm p-3 rounded-2xl flex flex-col">
          <p className="text-gray-500 text-sm font-medium">Present</p>
          <p className="text-2xl font-bold text-green-500 mt-1">28</p>
        </div>
        <div className="border bg-white border-gray-100 shadow-sm p-3 rounded-2xl flex flex-col">
          <p className="text-gray-500 text-sm font-medium">Absent</p>
          <p className="text-2xl font-bold text-red-500 mt-1">3</p>
        </div>
        <div className="border bg-white border-gray-100 shadow-sm p-3 rounded-2xl flex flex-col">
          <p className="text-gray-500 text-sm font-medium">Late</p>
          <p className="text-2xl font-bold text-yellow-500 mt-1">1</p>
        </div>
      </div>
    </>
  );
};
