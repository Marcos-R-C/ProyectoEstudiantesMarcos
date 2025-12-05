export const Header = () => {
  return (
    <header className="py-2 px-3 w-full bg-white shadow-sm">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined">school</span>
          <h1 className="text-xl font-semibold text-gray-800">
            Attendance Dashboard
          </h1>
        </div>
        <button>
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>
    </header>
  );
};
