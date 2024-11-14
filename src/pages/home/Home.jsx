import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import styled from "./home.module.css";
import axios from "axios";

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/articles').then(result => {
            setArticles(result.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div className="container">
            <div className={styled.homeWrapper}>
                <h2>مقالات جدید</h2>
                <div className={styled.articles}>
                    {articles.map((article) => (
                        <Article
                            key={article.id}
                            id={article.id}
                            imageUrl={article.imageUrl}
                            title={article.title}
                            readingTime={article.readingTime}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
