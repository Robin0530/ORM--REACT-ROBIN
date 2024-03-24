'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

// 전역 개발자 정의 타입 참조하기
import { Article, IArticle } from '@/app/types/definition'

// 단일 게시글정보 제너릭 타입 정의(개발자 정의)
// type Article = {
//   article_id: number;
//   article_type_code: number;
//   board_type_code: number;
//   title: string;
//   contents: string | null; // string 타입아니면 null 타입을 지원 | 공용유형 정의로 여허가지 타입을 동시지원해야할때 사용(유니언타입)
//   view_count: number;
//   ip_address: string;
//   is_display_code: number;
//   reg_date: string;
//   reg_member_id: number;
//   edit_date: string | null;
//   edit_member_id: number | null;
// };

export default function BlogList() {
    // useState()의 초기값으로 제공되는 타입과 실제관리되는 데이터의 타입을 정의해준다.
    const [articles, setArticles] = useState<Article[]>([])
    // const [articles, setArticles] = useState([]);

    useEffect(() => {
        // fetch를 통해 백엔드에서 데이터 조회 바인딩 처리
        const fetchData = async () => {
            const response = await fetch('http://localhost:3005/api/articles', {
                method: 'GET',
                headers: {
                    //Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            // fetch API 호출결과
            const result = await response.json()
            console.log('처리결과 데이터:', result)

            if (result.code == '200') {
                // 특정 URL페이지로 이동
                setArticles(result.data)
            }
        }

        fetchData().catch((e) => {
            // handle the error as needed
            console.error('An error occurred while fetching the data: ', e)
        })
    }, [])

    return (
        <div>
            <h3>블로그 목록</h3>
            <Link href="/blog/create">신규 게시글 작성</Link>
            <table className="table-auto  text-center lg:w-full">
                <thead>
                    <tr>
                        <th>글제목</th>
                        <th>조회수</th>
                        <th>작성일시</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, index) => (
                        <tr key={index}>
                            <td>
                                <Link href={`/blog/${article.article_id}`}>{article.title}</Link>
                            </td>
                            <td>{article.view_count}</td>
                            <td>{article.reg_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
