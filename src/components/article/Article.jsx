import styled from './article.module.css';
import article from './../../assets/images/article.png'

function Article(){

    return (
        <div className={styled.articleWrapper}>
            <img src={article} />
            <h3>متغییر ها در جاوااسکریپت</h3>
            <p>خواندن در 5 دقیقه</p>
        </div>
    )
}


export default Article;