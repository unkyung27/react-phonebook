import ContactList from "../../component/ContactList";

let initialState = {
    contactList:[],
    searchList:[]
};

function reducer(state=initialState, action){
    const {type, payload} = action;
    switch (type) {
        case "ADD_CONTACT":
            return{
                ...state, 
                contactList: [
                    ...state.contactList, 
                    {
                        name: payload.name, 
                        phoneNumber: payload.phoneNumber
                    }
                ]
            };
        case "SEARCH_LIST":
            console.log("reducer 검색리스트", payload.searchList);
            return{
                ...state, 
                searchList: payload.searchList
            };
        default: return {...state};
    }
}

export default reducer;