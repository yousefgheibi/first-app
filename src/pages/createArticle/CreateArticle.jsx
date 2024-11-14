import { Fragment, useState } from "react";
import styled from "./create-article.module.css";

function CreateArticle() {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter+1)
    }

    const decreaseCounter = () => {
        setCounter(counter-1)
    }

    return (
        <Fragment>
            <div className="container">

                <div className={styled.wrapper}>
                    <h2>ساخت مقاله</h2>


                    <button onClick={increaseCounter}>افزایش</button>
                    {counter}
                    <button onClick={decreaseCounter}>کاهش</button>
                </div>
            </div>
        </Fragment>
    )
}


export default CreateArticle;