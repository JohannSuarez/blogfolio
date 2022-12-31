import './Button.css';

function LinkButton(props) {
  return (
    <a className="button" href={props.href} target="_blank">
      {props.label}
    </a>
  )
}

export default LinkButton;
