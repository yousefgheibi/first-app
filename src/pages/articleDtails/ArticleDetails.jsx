import { useParams } from "react-router-dom";
import styled from "./article-details.module.css";
import { useEffect, useState } from "react";
import axios from "axios";


function ArticleDetails() {

    const [article, setArticle] = useState();
    const params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/articles/${params.id}`).then((res) => {
            setArticle(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className="container">
            <div class={styled.wrapper}>
                {article ? (
                    <div>
                        <h3>{article.title}</h3>
                        <div class={styled.summery}>
                            <p>نویسنده : {article.writer}</p>
                            <p>تاریخ ایجاد : {article.date}</p>
                            <p>مدت زمان خواندن : {article.readingTime} دقیقه</p>
                        </div>
                        <img src={article.imageUrl} alt={article.title} />
                        <p>{article.content}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default ArticleDetails;