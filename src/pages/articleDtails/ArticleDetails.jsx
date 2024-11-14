import { useParams } from "react-router-dom";
import styled from "./article-details.module.css";


function ArticleDetails() {

    const params = useParams();
    console.log(params)
    return (
        <div>
            <h2>Article Details</h2>
        </div>
    )
}

export default ArticleDetails;