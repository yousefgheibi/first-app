import { useParams } from "react-router-dom";
import styled from "./article-details.module.css";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";


function ArticleDetails() {

    const [article, setArticle] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8000/articles/${params.id}`).then((res) => {
            setArticle(res.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        })
    }, [])

    return (
        <Fragment>
            <div className="container">
                <div class={styled.wrapper}>
                    {
                        isLoading ? (
                            <Spinner />
                        ) : (
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
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ArticleDetails;