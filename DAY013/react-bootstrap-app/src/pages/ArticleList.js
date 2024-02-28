import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const ArticleList = () => {
    const [list, setList] = useState([
        { id: 1, name: 'Mark', content: 'This is Mark', title: '@mdo' },
        { id: 2, name: 'Jacob', content: 'This is Jacob', title: '@fat' },
        { id: 3, name: 'Larry the Bird', content: 'This is Larry', title: '@twitter' },
    ])

    const [nextId, setNextId] = useState(list.length + 1)

    return (
        <div>
            {/* <h3>게시글 목록 컴포넌트</h3> */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        {/* <a href="#">Home</a> */}
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Article
                    </li>
                </ol>
            </nav>
            {/* link로 게시글 등록페이지로 이동 */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ fontWeight: 'bold', fontSize: 'large' }}>게시글 목록</p>
                <Link className="btn btn-primary" to="/article/regist" role="button">
                    게시글 등록
                </Link>
            </div>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">name</th>
                        <th scope="col">title</th>
                        <th scope="col">content</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {list.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ArticleList
