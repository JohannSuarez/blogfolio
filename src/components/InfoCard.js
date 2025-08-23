import './InfoCard.css'; 

function InfoCard(props) {
  const classes = 'InfoCard ' + props.className;
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

export default InfoCard;
