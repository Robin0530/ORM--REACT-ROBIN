"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BlogList() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    // fetch를 통해 백엔드에서 데이터 조회
    const fetchData = async () => {
      const response = await fetch("http://localhost:3005/api/articles", {
        method: "POST",
        headers: {
          //Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // fetch API 호출결과
      const result = await response.json();
      console.log("처리결과 데이터:", result);

      // 특정 url페이지로 이동시ㅣ기
      if (result.code == "200") {
        setArticle(result.data);
      }
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  });
  return (
    <div>
      <h3>블로그 목록</h3>
      <Link href="/blog/create">신규 게시글 작성</Link>
      <table className="table-auto">
        <thead>
          <tr>
            <th>글제목</th>
            <th>조회수</th>
            <th>작성일지</th>
          </tr>
        </thead>
        <tbody>
          {article.map((article, index) => (
            <tr key={index}>
              <td>
                <Link href={`/blog/${article.article_id}`}>
                  {article.title}
                </Link>
                제목
              </td>
              <td>{article.view_count}10</td>
              <td>{article.reg_date}2024.01.01</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
