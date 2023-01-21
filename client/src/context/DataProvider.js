import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = (props)=>{
	const [userAccount, setUserAccount]= useState({userName: '', name: ''});
	console.log("loged in account ----> ", userAccount)

	return (
		<DataContext.Provider value={{userAccount, setUserAccount}}>
			{props.children}
		</DataContext.Provider>
	)
}
export default DataProvider;