import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ArticleDetail = () => {
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
                        Detail
                    </li>
                </ol>
            </nav>
            <p style={{ fontWeight: 'bold', fontSize: 'large' }}>게시글 수정/삭제</p>
            <hr />
            <form>
                <div className="mb-3">
                    <label className="form-label">name</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">title</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">content</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="d-grid d-md-flex justify-content-md-end">
                    <button className="btn btn-danger me-md-2" type="button">
                        삭제
                    </button>
                    <button className="btn btn-primary me-md-2" type="button">
                        수정
                    </button>
                    <Link to="/article/list" className="btn btn-secondary me-md-2">
                        취소
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default ArticleDetail
