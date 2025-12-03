export const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center gap-3 ml-2">
          <span class="material-symbols-outlined text-primary text-3xl">
            school
          </span>
          <h1 className="text-xl font-semibold text-gray-800">
            Attendance Dashboard
          </h1>
        </div>
        <button className="mr-2">
          <span class="material-symbols-outlined">person</span>
        </button>
      </div>
    </header>
  );
};
