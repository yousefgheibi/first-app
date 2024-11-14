import { Fragment, useEffect, useState } from "react";
import Article from "../../components/article/Article";
import styled from "./home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8000/articles').then(result => {
            setArticles(result.data);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        });
    }, []);

    return (
        <Fragment>
            <div className="container">
                <div className={styled.homeWrapper}>
                    <h2>مقالات جدید</h2>
                    {
                        isLoading ? (
                            <p>چند لحظه صبر کنید....</p>
                        ) : (
                            <div className={styled.articles}>
                            {articles.map((article) => (
                                <Link to={`/article-details/${article.id}`}>
                                    <Article
                                        key={article.id}
                                        id={article.id}
                                        imageUrl={article.imageUrl}
                                        title={article.title}
                                        readingTime={article.readingTime}
                                    />
                                </Link>
                            ))}
                        </div>
                        )
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
