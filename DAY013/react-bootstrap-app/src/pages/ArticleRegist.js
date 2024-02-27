import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ArticleRegist = ({ onInsert }) => {
    // 게시글
    const [article, setArticle] = useState({ name: '', title: '', content: '' })

    // 정보 입력
    const onChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value })
    }

    // 폼 이벤트
    const onSubmit = () => {
        onInsert(article.name, article.title, article.content)
        setArticle({ name: '', title: '', content: '' })
    }

    return (
        <div>
            {/* <h3>게시글 목록 컴포넌트</h3> */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/article/list">Article</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Regist
                    </li>
                </ol>
            </nav>
            <p style={{ fontWeight: 'bold', fontSize: 'large' }}>게시글 등록</p>
            <hr />
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">name</label>
                    <input type="text" className="form-control" name="name" value={article.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={article.title}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">content</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        name="content"
                        value={article.content}
                        onChange={onChange}
                    ></textarea>
                </div>
                <div className="d-grid d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2" type="submit">
                        등록
                    </button>
                    <Link to="/article/list" className="btn btn-secondary me-md-2">
                        취소
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default ArticleRegist
