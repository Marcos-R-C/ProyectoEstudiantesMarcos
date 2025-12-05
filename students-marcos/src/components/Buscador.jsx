export const Buscador = () => {
  return (
    <div className="flex justify-end">
      <div className="p-1 my-2 mr-5 rounded-lg border border-gray-300 bg-white">
        <label className="flex flex-row gap-2">
          <div>
            <span className="material-symbols-outlined">search</span>
          </div>
          <input placeholder="Search student name..." />
        </label>
      </div>
    </div>
  );
};
