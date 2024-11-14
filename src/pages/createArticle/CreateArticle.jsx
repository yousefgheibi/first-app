import { Fragment, useState } from "react";
import styled from "./create-article.module.css";
import axios from "axios";

function CreateArticle() {

    const [article, setArticle] = useState({
        title: "",
        date: "",
        author: "",
        readingTime: "",
        content: ""
    });



    const handleChangeArticle = (event) => {
        setArticle(prevState => (
            {
                ...prevState,
                [event.target.name]: event.target.value
            }
        ))
    }


    const handleCreateNewArticle = () =>{
        axios.post("http://localhost:8000/articles", article)
        console.log(article)
    }

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
                    <div className={styled.inputWrapper}>
                        <label>نویسنده</label>
                        <input name="author" onChange={handleChangeArticle} dir="auto" type="text" />
                    </div>
                    <div className={styled.inputWrapper}>
                        <label>مدت زمان خواندن</label>
                        <input name="readingTime" onChange={handleChangeArticle} dir="auto" type="text" />
                    </div>

                    <div className={styled.inputWrapper}>
                        <label>متن</label>
                        <textarea name="content" rows="8" onChange={handleChangeArticle} dir="auto"></textarea>
                    </div>
                    <button className={styled.button} onClick={handleCreateNewArticle}>
                        ارسال
                    </button>
                </div>

            </div>
        </Fragment>
    )
}


export default CreateArticle;