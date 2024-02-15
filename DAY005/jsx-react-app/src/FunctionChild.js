import React from 'react'

const functionChild = (props) => {
    return (
        <div>
            <h1>회사소개</h1>
            <h2>{props.children}</h2>
            회사명:{props.companyName} <br />
            연락처:{props.telephone} <br />
            주소:{props.address} <br />
            샘플데이터:{props.SampleData}
        </div>
    )
}

export default functionChild
