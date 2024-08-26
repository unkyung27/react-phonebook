import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
    const contactList = useSelector(state => state.contactList);

    // 검색어 저장해야한다고함(?)
    const [searchName, setSearchName] = useState('');

    const dispatch = useDispatch();

    const search = () => {
        // alert(`검색어: ${searchName}`);
        const searchList = contactList.filter(item => item.name === searchName);
        // console.log("contactList", contactList);
        console.log("searchList", searchList);
        dispatch({type: "SEARCH_LIST", payload: {searchList}});
    }

  return (
    <Row>
        <Col lg={10}>
            <Form.Control type="text" placeholder='이름을 입력해주세요' 
            onChange={(e) => setSearchName(e.target.value)} />
        </Col>
        <Col lg={2}>
            <Button onClick={search}>검색</Button>
        </Col>
    </Row>
  )
}

export default SearchBox