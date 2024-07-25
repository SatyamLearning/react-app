import { useReducer } from "react";
import { createContext } from "react";

const DEFAULT_CONTEXT ={postList: [],
    addPost: () => { },
    deletePost: () => { },}
 export const PostList = createContext(DEFAULT_CONTEXT);
const postListReducer = (currPostList, action) => {
    let newaPostList = currPostList;
    if (action.type === 'DELETE_POST') { 
        newaPostList = currPostList.filter((post) => post.id !== action.payload);
    } else if (action.type === 'ADD_POST') {
        newaPostList = [ action.payload,...currPostList]
    }
    return newaPostList;;
}

const PostListProvider = ({ children }) => {
    const addPost = ({ userId, title, body, reactions, tags }) => {
        diapatchPostList({
            type: 'ADD_POST',
            payload: {
        id: Date.now(),
        title: title,
        body:body,
        reactions: reactions,
        userID: userId,
        tags:tags }
        })
     };
    const deletePost = (postId) => {
        diapatchPostList({
            type: 'DELETE_POST',
            payload: postId
        })
     };
    const [postList, diapatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);
    return <>
        <PostList.Provider value={{
            postList:postList,
        addPost:addPost,
    deletePost: deletePost,
        }
        }>
           { children}
     </PostList.Provider>
    </>
  
}

  const DEFAULT_POST_LIST = [{
        id: '1',
        title: "Going to Mumbai",
        body: "Hi friends i am Going To Mumbai on my vacation ",
        reactions: 2,
        userID: 'user-9',
        tags:["vacation","Mumbai","Enjoying"]
    },
        {
        id: '2',
        title: "Pass Ho Bhai",
        body: "4 saal ki masti ke baad bhi hui pass ",
        reactions: 5,
        userID: 'user-12',
        tags:["graduating","happy","newExperinced"]
    },
    ]
export default PostListProvider;