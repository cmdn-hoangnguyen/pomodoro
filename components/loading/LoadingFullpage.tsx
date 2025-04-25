const LoadingFullPage = () => {
  const fallingTomato = [
    {
      id: 1,
      className: "first-tomato",
    },
    {
      id: 2,
      className: "second-tomato",
    },
    {
      id: 3,
      className: "third-tomato",
    },
    {
      id: 4,
      className: "forth-tomato",
    },
  ];

  return (
    <>
      <div className="opacity-bg fixed inset-0 grid grid-cols-12 bg-white overflow-hidden z-9999">
        {fallingTomato.map((item) => {
          return (
            <div
              key={item.id}
              className={`${item.className}  bg-[var(--muted)] col-span-3 flex justify-center`}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default LoadingFullPage;
