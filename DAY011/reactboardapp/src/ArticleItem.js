import React from 'react'

const ArticleItem = ({ article, select }) => {
    return (
        <tr>
            <th>{article.id}</th>
            <th>{article.title}</th>
            <th>{article.text}</th>
            <th>{article.register}</th>
            <th>
                <input type="checkbox" value={article.checked} onClick={() => select(article.id)}></input>
            </th>
        </tr>
    )
}

export default ArticleItem
