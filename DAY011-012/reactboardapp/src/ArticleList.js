import React, { useState } from 'react'

import ArticleItem from './ArticleItem'

const ArticleList = ({ articles, select }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>내용</th>
                        <th>등록자</th>
                        <th>선택</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, i) => (
                        <ArticleItem key={article.id} article={article} select={select}></ArticleItem>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ArticleList
