const LoadingFullPage = () => {
  const fallingTomato = [
    {
      id: 1,
      className: "",
    },
    {
      id: 2,
      className: "animation-delay-500",
    },
    {
      id: 3,
      className: "animation-delay-1000",
    },
    {
      id: 4,
      className: "animation-delay-1500",
    },
  ];

  return (
    <div className="animate-opacity  animation-delay-2000 fixed inset-0 grid grid-cols-12 bg-white overflow-hidden z-9999">
      {fallingTomato.map((item) => {
        return (
          <div
            key={item.id}
            className={`${item.className} animate-falling h-0 bg-[var(--muted)] col-span-3 flex justify-center`}
          ></div>
        );
      })}
    </div>
  );

  // const fallingTomato = [
  //   {
  //     id: 1,
  //     className: "first-tomato",
  //   },
  //   {
  //     id: 2,
  //     className: "second-tomato",
  //   },
  //   {
  //     id: 3,
  //     className: "third-tomato",
  //   },
  //   {
  //     id: 4,
  //     className: "forth-tomato",
  //   },
  // ];

  // return (
  //   <div className="opacity-bg fixed inset-0 grid grid-cols-12 bg-white overflow-hidden z-9999">
  //     {fallingTomato.map((item) => {
  //       return (
  //         <div
  //           key={item.id}
  //           className={`${item.className}  bg-[var(--muted)] col-span-3 flex justify-center`}
  //         ></div>
  //       );
  //     })}
  //   </div>
  // );
};

export default LoadingFullPage;
