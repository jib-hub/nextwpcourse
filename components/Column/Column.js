export const Column = ({ children, width, textColor, backgroundColor }) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor
    ? { backgroundColor: backgroundColor }
    : {};
  return (
    <div
      className={`${
        width ? `min-w-[${width}] flex-grow` : "flex-grow basis-0"
      } px-2 py-5`}
      style={{ ...textColorStyle, ...backgroundColorStyle }}
    >
      {children}
    </div>
  );
};
