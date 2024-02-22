import React, { useState } from 'react'

const ArticleManager = () => {
    const [article, setArticle] = useState({
        title: '',
        text: '',
        register: '',
    })

    const onChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form>
                제목 <input name="title" value={article.title} onChange={onChange}></input> <br></br>
                내용 <input name="text" value={article.text} onChange={onChange}></input>
                <br></br>
                등록자 <input name="register" value={article.register} onChange={onChange}></input>
                <br></br>
                <button type="submit">등록</button>
                <button>수정</button>
                <button>삭제</button>
                <button>초기화</button>
            </form>
        </div>
    )
}

export default ArticleManager
