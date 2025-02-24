import React from "react";
import LikeButton from "./likebutton"; // Import LikeButton component

const PostCard = ({ post }) => {
  return (
    <div style={styles.card}>
      <img src={post.profilePic} alt={post.username} style={styles.image} />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton /> {/* Like Button */}
    </div>
  );
};

// Inline styles
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    margin: "10px",
    width: "250px",
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default PostCard;
