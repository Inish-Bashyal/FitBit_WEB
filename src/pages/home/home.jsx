import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
        <Header/>
        <div className="home">
          <Posts />
          <Sidebar/>
        </div>
    </>
  );
}