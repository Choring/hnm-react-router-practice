

function getProducts (searchQuery){
    return async(dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/Choring/hnm-react-router-practice/products${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}});
    }
}

export const productActions = {getProducts};