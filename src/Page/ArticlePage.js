import { useParams } from "react-router-dom";
import articles from "./article-content";

const ArticlePage = () =>
{
    const { articleID } = useParams();
    const article = articles.find(article => article.name === articleID);
    return <>
        <h1>{article.title}</h1>
        {article.content.map((articleContent, i) =>
        (
            <p key={i}>{articleContent}</p>
        ))}
    </>
}

export default ArticlePage;