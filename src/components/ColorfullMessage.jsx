export const ColorfullMessage = ({ color, children }) => {
  console.log("ColorfullMessage");

  const contentStyleA = {
    color,
    fontSize: "18px",
  };

  return <p style={contentStyleA}>{children}</p>;
};
