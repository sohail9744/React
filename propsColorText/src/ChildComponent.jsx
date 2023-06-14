const ChangeColor = ({ colorName }) => {
  return (
    <div>
      <h1
        style={{
          color: colorName,
          background: "silver",
        }}
      >
        Hello world
      </h1>
    </div>
  );
};
export default ChangeColor;
