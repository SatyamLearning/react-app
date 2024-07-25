import { useContext } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { PostList as PostListData } from "../store/post-list-store"

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData); 

    return <><div className="card post-card" style={{width: "18rem"}}>
  {/* <img src="..." className="card-img-top" alt="..."> */}
  <div className="card-body ">
        <h5 className="card-title">{post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> deletePost(post.id)}>
 <RiDeleteBin2Fill />
            </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (<span key={tag} className="badge text-bg-primary hastag">{tag}</span>))}
        <div className="alert alert-success reaction" role="alert">
  This POst has been reacted by {post.reactions} people.
</div>
       
  </div>
</div></>
}
export default Post;