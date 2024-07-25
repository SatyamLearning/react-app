import { useContext } from "react";
import { useRef } from "react";
import { PostList as PostListData } from "../store/post-list-store"

const CreatePost = () => {
  const { addPost } = useContext(PostListData);
  const userIdElement = useRef(); 
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const body = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split('');

    addPost({ userId, title, body, reactions, tags });
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

  }
  
  return <><form className="create-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your user id</label>
    <input type="text" className="form-control" id="userId" placeholder="your user id" ref={userIdElement}  />
   
      </div>
    
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" className="form-control" id="title" placeholder="how are you" ref={ postTitleElement} />
      </div>
      
       <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
      <textarea rows='4' type="text" className="form-control" id="body" placeholder="how are you" ref={ postBodyElement} />
   
      </div>
      
       <div className="mb-3">
    <label htmlFor="reactions" className="form-label">No. of Reactions</label>
      <input type="text" className="form-control" id="reactions" placeholder="No. of people reacted on this post" ref={reactionsElement } />
   
    </div>
    
      <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your tags here</label>
      <input type="text" className="form-control" id="tags" placeholder="Please enter tags using space" ref={tagsElement } />
   
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form></>
}
export default CreatePost;