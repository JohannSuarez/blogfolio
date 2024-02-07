import './BlogPostCard.css'; // Import the new CSS file

function BlogPostCard(props) {
  const classes = 'blogPostCard ' + props.className;
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

export default BlogPostCard;
