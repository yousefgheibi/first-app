import { Fragment, useState } from "react";
import styled from "./create-article.module.css";

function CreateArticle() {

    const [article, setArticle] = useState({
        title: "",
        date: ""
    });
   
    const handleChangeArticle = (event) => {
        switch (event.target.name) {
            case "title":
                setArticle({
                    title:event.target.value
                })
                break;
            case "date":
                setArticle({
                    date:event.target.value
                })
                break;
        }
    }

    console.log(article)
    return (
        <Fragment>
            <div className={styled.wrapper}>
                <div className="container">
                    <h2>ساخت مقاله</h2>
                    <div className={styled.inputWrapper}>
                        <label>عنوان</label>
                        <input name="title" onChange={handleChangeArticle} dir="auto" type="text" />
                    </div>
                    <div className={styled.inputWrapper}>
                        <label>تاریخ</label>
                        <input name="date" onChange={handleChangeArticle} dir="auto" type="text" />
                    </div>
                </div>

            </div>
        </Fragment>
    )
}


export default CreateArticle;