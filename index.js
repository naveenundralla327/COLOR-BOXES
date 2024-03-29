const Box = (props) => {
  //  Write your code here.
  const { className, boxes_name } = props;

  return (
    <div className={`box ${className}`}>
      <p className="box-heading">{boxes_name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="color-boxes-container">
    <h1 className="boxes-heading">Boxes</h1>
    <div className="boxes-container">
      <Box boxes_name="Small" className="small-box" />
      <Box boxes_name="Medium" className="medium-box" />
      <Box boxes_name="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
