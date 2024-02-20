import React, { useState } from 'react'

const ProductList = () => {
    // 단일 상품정보 관리 상태값 정의하기
    const [product, setProduct] = useState({
        id: 0,
        productName: '',
        price: 0,
    })

    // 상품목록 데이터
    const [products, setProducts] = useState([
        {
            id: 1,
            productName: '삼성노트북',
            price: 1000,
        },
        {
            id: 2,
            productName: 'LG노트북',
            price: 2000,
        },
        {
            id: 3,
            productName: '한성노트북',
            price: 3000,
        },
        {
            id: 4,
            productName: 'HP노트북',
            price: 4000,
        },
    ])

    // 제품 고유번호 생성 상태값 정의하기
    const [productId, setProductId] = useState(5)

    // 제품정보 입력처리 이벤트 핸들러
    const handleProduct = (e) => {
        setProduct({ product, [e.target.name]: e.target.value })
    }

    // 저장버튼 클릭 이벤트 핸들러 함수
    const handleSave = () => {
        setProducts([...products, { ...product, id: productId }])
        setProductId(productId + 1)
        handleInit()
    }

    // 초기화
    const handleInit = () => {
        setProduct({
            id: 0,
            productName: '',
            price: 0,
        })
    }

    // 단일 상품정보 선택시 상단 폼에 선택정보 표시하기
    const handleSelect = (pro) => {
        setProduct(pro)
    }

    //상품 목록 배열에서 선택 상품정보 삭제처리 하고 재 바인딩하기
    const handleRemove = (pro) => {
        const filter = products.filter((p) => p.productName !== pro.productName)
        setProducts(filter)
    }

    return (
        <div>
            <br></br>
            신규 제품 등록 : 제품명:
            <input
                type="text"
                name="productName"
                value={product.productName}
                placeholder="제품명"
                onChange={handleProduct}
            />
            가격:
            <input type="text" name="price" value={product.price} placeholder="0" onChange={handleProduct} />
            <button onClick={handleSave}>저장</button>
            <hr></hr>
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>제품번호</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>선택</th>
                        <th>삭제</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((p, i) => (
                        <tr key={i}>
                            <td>{p.id}</td>
                            <td>{p.productName}</td>
                            <td>{p.price}</td>
                            <td>
                                <button onClick={() => handleSelect(p)}>선택</button>
                            </td>
                            <td>
                                <button onClick={() => handleRemove(p, i)}>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
