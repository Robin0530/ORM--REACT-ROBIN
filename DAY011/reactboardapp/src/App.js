import React, { useState } from 'react'

// 컴포넌트 참조하기
import BoardTemplate from './BoardTemplate'
import ArticleList from './ArticleList'
import ArticleManager from './ArticleManager'

function App() {
    const [articles, setArticles] = useState([
        { id: 1, title: '제목1', text: '제목1번 내용입니다', register: 'robin', checked: false },
        { id: 2, title: '제목2', text: '제목2번 내용입니다', register: 'LRB', checked: false },
        { id: 3, title: '제목3', text: '제목3번 내용입니다', register: '보람리리', checked: false },
    ])

    // id채번
    const [articleId, setArticleId] = useState(articles.length + 1)

    const Insert = (title, text, register) => {
        setArticles(articles.concat({ id: articleId, title: title, text: text, register: register, checked: false }))
        setArticleId(articleId + 1)
    }

    const Remove = (id) => {
        setArticles(articles.filter((article) => article.id !== id))
    }

    const select = (id) => {
        setArticles(
            articles.map((article) => (article.id === id ? { ...article, checked: !article.checked } : article)),
        )
    }

    const init = (id) => {}

    return (
        <div className="App">
            <BoardTemplate>
                <ArticleManager Insert={Insert} Remove={Remove} init={init}></ArticleManager>
                <ArticleList articles={articles} select={select}></ArticleList>
            </BoardTemplate>
        </div>
    )
}

export default App
