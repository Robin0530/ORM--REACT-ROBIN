import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from 'axios'

const ArticleDetail = () => {
    // 단일게시글 정보 구조 정의 및 초기 데이터 정의
    const [article, setArticle] = useState({ title: '', contents: '' })

    // 모달 팝업 오픈제어 상태값 정의하기
    const [modal, setModal] = useState(true)

    // 모달 팝업 유효성 검사 메시지
    const [validationText, setValidationText] = useState('')

    // URL라우팅 주소에서 게시글 고유번호 추출하기
    const { aid } = useParams()
    console.log('파라메터 변수 값 출력하기:', aid)

    // 초기 페이지 렌더링시 마우스 포커스 처리를 위한 useRef정의하기
    const refTitle = useRef()

    // 페이지 이동을 위한 navigate 훅 생성하기
    const navigate = useNavigate()

    // 최초 로딩시 제목 입력박스에 마우스 포커스 처리하기
    useEffect(() => {
        console.log('최초 화면 컴포넌트가 렌더링 됩니다.. 11111')
        // 단일 게시글 정보 조회 바인딩하기
        // Axios는 백엔드 RESTFul과 통신시 기본 비동기 통신을 합니다.
        // 백엔드 호출후 결과값이 전달되면 then콜백함수에서 처리하며
        // Axios호출이후 프로세스가 있다면 이후 프로세스가 먼저 실행됩니다.
        // axios
        //     .get(`http://localhost:3005/api/articles/${aid}`)
        //     .then((res) => {
        //         console.log('백엔드 데이터 조회결과가 반환되었습니다.. 22222')
        //         console.log('단일 게시글 조회정보 출력:', res)
        //         if (res.data.code == '200') {
        //             // 단일 게시글 정보 바인딩 처리

        //             // Axios 비동기 통신 시 로직  처리 구현 주의사항
        //             // Axios를 사용시 호출결과가 반환되고 반환된 결과 기반에서 추가 로직을 구현해야하는 경우는
        //             // 반드시 then 콜백함수 안에서 로직을 구현해야하고 axios블럭 밖에서 구현하면
        //             // axios가 기본 비동기 통신기반으로 작동하기 때문에 axios결과가 반환되지 않았는데도 밖에 로직이 실행됩니다.

        //             setArticle(res.data.data)
        //             refTitle.current.focus()
        //         } else {
        //             console.log('서버에러발생', res.data.result)
        //         }
        //     })
        //     .catch((err) => {})
        // console.log('추가 로직이 호출되었습니다.. 33333')

        // 비동기 함수 구현
        getArticle()
    }, [])

    // 수정할 게시글 조회 시 데이터 불러오는 비동기 함수
    async function getArticle() {
        try {
            const res = await axios.get(`http://localhost:3005/api/articles/${aid}`)
            console.log('데이터 불러오기', res)
            setArticle(res.data.data)
            refTitle.current.focus()
        } catch (err) {
            console.error(err)
        }
    }

    // 입력요소 데이터 바인딩 처리
    const onArticleChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value })
    }

    // 저장 버튼 클릭시 데이터 수정 처리후 게시글 목록으로 이동처리하기
    const onArticleSubmit = (e) => {
        if (article.title == '') {
            // alert('제목을 입력해주세요.')
            setValidationText('제목을 입력해주세요')
            setModal(true)
            refTitle.current.focus()
            e.preventDefault()
            return false
        }

        // 게시글 백엔드 수정처리하기
        // axios
        //     .post(`http://localhost:3005/api/articles/${aid}`, article)
        //     .then((res) => {
        //         console.log('데이터 수정처리결과값:', res.data)

        //         if (res.data.code == '200') {
        //             alert('수정완료')

        //             // 게시글 목록으로 이동처리
        //             navigate('/articles')
        //         } else {
        //             alert('수정실패')
        //         }
        //     })
        //     .catch((err) => {})

        // e.preventDefault()

        // 게시글 수정처리하는 비동기 함수 사용
        editArticle()
        e.preventDefault()
    }

    // 게시글 수정처리하는 비동기 함수
    async function editArticle() {
        try {
            const res = await axios.post(`http://localhost:3005/api/articles/${aid}`, article)
            if (res.data.code == '200') {
                alert('수정완료')

                // 게시글 목록으로 이동처리
                navigate('/articles')
            } else {
                alert('수정실패')
            }
        } catch (err) {
            console.error(err)
        }
    }

    // 게시글 삭제처리 이벤트 처리 함수
    const onRemove = () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            // 백엔드 삭제 처리
            // axios
            //     .delete(`http://localhost:3005/api/articles/${aid}`)
            //     .then((res) => {
            //         console.log('삭제 처리결과', res)
            //         if (res.data.code == '200') {
            //             alert('삭제 완료')
            //             navigate('/articles')
            //         }
            //     })
            //     .catch((err) => {
            //         console.log('삭제실패', err)
            //     })
            delArticle()
        }
    }

    // 게시글 삭제처리하는 비동기 함수
    async function delArticle() {
        try {
            const res = await axios.delete(`http://localhost:3005/api/articles/${aid}`)
            console.log('삭제처리 성공', res)
            alert('삭제 완료')
            navigate('/articles')
        } catch (err) {
            console.error(err)
        }
    }

    // 모달팝업 제어 핸들러
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className="article-wrapper">
            <div className="row mb-2">
                <div className="col">
                    <h4>게시글 작성</h4>
                </div>
            </div>
            <form onSubmit={onArticleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                        제목
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            ref={refTitle}
                            className="form-control"
                            name="title"
                            id="inputEmail3"
                            value={article.title}
                            onChange={onArticleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                        내용
                    </label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            name="contents"
                            rows="10"
                            value={article.contents}
                            onChange={onArticleChange}
                        ></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary">
                            저장
                        </button>
                        <button type="button" className="btn btn-danger" onClick={onRemove}>
                            삭제
                        </button>
                        <button type="button" className="btn btn-info" onClick={() => navigate('/articles')}>
                            목록
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ArticleDetail
