export const getAccessToken = ()=>{
	return sessionStorage.getItem("accessToken");
}



export const addElipsis = (string, limit)=> {
	return string.length > limit ? string.substring(0, limit) + '...' : string;
}