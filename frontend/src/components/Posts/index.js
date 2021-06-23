import './Posts.css'
import * as feedActions from "../../store/feed";
import { useDispatch } from "react-redux";

function Posts(images) {
    // const dispatch = useDispatch()
    // dispatch(feedActions.)
   console.log(`these are the posts..............`,images)
    return (
        <div>
            {/* {console.log(`THESE ARE THE POSTS`,images)} */}
        </div>
    )
}

export default Posts
