const formattedDate = (): string => {
  const currentDate = new Date();
  const options = { weekday: "short", month: "short", day: "numeric" } as const;
  return currentDate.toLocaleDateString("en-US", options).replace(",", "");
};

const formattedTime = (): string => {
  const currentTime = new Date();
  const options = { hour: "numeric", minute: "numeric", hour12: true } as const;
  return currentTime.toLocaleTimeString("en-US", options);
};

export { formattedDate, formattedTime };
