import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const contactList = useSelector(state=>state.contactList);
    const searchList = useSelector(state=>state.searchList);
    // console.log("contactList", contactList);
    console.log("검색한 리스트 받아오기", searchList);
    const phonebookList = searchList && searchList.length > 0 ? searchList : contactList;
  return (
    <div>
        <SearchBox />
        {phonebookList.map((item, index)=> (
            <ContactItem key={index} item={item}/>
        ))}
    </div>
  )
}

export default ContactList;