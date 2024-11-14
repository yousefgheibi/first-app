import { Fragment, useState } from "react";
import styled from "./create-article.module.css";

function CreateArticle() {

    const [articleTitle , setArticleTitle] = useState("");

    const handleChangeArticle = (event) =>{
        setArticleTitle(event.target.value)
    }

    console.log('aritlceTitle', articleTitle);
    return (
        <Fragment>
            <div className={styled.wrapper}>
                <div className="container">
                    <h2>ساخت مقاله</h2>
                <div className={styled.inputWrapper}>
                    <label>عنوان</label>
                    <input onChange={handleChangeArticle} dir="auto" type="text" />
                </div>
                </div>

            </div>
        </Fragment>
    )
}


export default CreateArticle;