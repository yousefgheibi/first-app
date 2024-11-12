import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";

function Home() {

    return (
        <div>
            <Navbar title="وبلاگ" />
            <div className="container">
                <div className={styled.homeWrapper}>
                    <h2>مقالات جدید</h2>

                    <div className={styled.articles}>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;