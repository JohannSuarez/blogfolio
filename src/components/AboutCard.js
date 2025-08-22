import './AboutCard.css'; 

function AboutCard(props) {
  const classes = 'AboutCard ' + props.className;
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

export default AboutCard;
