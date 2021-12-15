import "./InputOptions.css";

function InputFeedOptions(props) {
  const { Icon, title, color, handleToggle } = props;
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} onClick={handleToggle} />
      <h4 style={{ color: "rgb(97, 149, 112)" }}>{title}</h4>
    </div>
  );
}

export default InputFeedOptions;
