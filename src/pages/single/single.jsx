import Sidebar from "../../components/sidebar/sidebar"
import PostDetails from "../../components/singlePost/singlePost"
import "./single.css"
export default function Single() {
  return (
    <>
    <div className="single">
      <PostDetails />
      <Sidebar />
    </div>
    </>
  )
}