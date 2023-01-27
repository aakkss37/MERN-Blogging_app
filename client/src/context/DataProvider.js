import { createContext, useState } from "react";

export const DataContext = createContext(null);

const initialCategory = {
	category: 'All',
}


const DataProvider = (props)=>{
	// USER ACCCUNT
	const [userAccount, setUserAccount]= useState({userName: '', name: ''});
	// console.log("loged in account ----> ", userAccount)


	// FILTER POST

	const [filterCategory, setFilterCategory] = useState(initialCategory);


	return (
		<DataContext.Provider value={{ userAccount, setUserAccount, filterCategory, setFilterCategory }}>
			{props.children}
		</DataContext.Provider>
	)
}
export default DataProvider;