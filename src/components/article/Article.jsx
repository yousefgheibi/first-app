import { Fragment } from 'react';
import styled from './article.module.css';

function Article(props) {
    return (
        <Fragment>
            <div className={styled.articleWrapper}>
                <img src={props.imageUrl} alt={props.title} />
                <h3>{props.title}</h3>
                <p>خواندن در  {props.readingTime} دقیقه</p>
            </div>
        </Fragment>
    )
}

export default Article;