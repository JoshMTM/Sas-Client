import "./InputOptions.css";

function InputFeedOptions(props) {
  const { Icon, title, color, handleToggle } = props;
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} onClick={handleToggle} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputFeedOptions;
