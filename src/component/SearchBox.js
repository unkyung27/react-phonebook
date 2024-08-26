import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const SearchBox = () => {
    // Redux에서 contactList 가져오기
    const contactList = useSelector(state => state.contactList);

    // 검색어와 검색 결과를 위한 로컬 상태
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    // 검색 함수
    const search = () => {
        const result = contactList.find(item => item.name === searchName);
    }
  return (
    <Row>
        <Col lg={10}>
            <Form.Control type="text" placeholder='이름을 입력해주세요' value={searchName} 
                        onChange={(e) => setSearchName(e.target.value)}  // 검색어 상태 업데이트
/>
        </Col>
        <Col lg={2}>
            <Button onClick={search}>검색</Button>
        </Col>
    </Row>
  )
}

export default SearchBox