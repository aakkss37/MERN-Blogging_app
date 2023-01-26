import { createContext, useState } from "react";

export const DataContext = createContext(null);

const initialCategory = {
	category: 'all',
}


const DataProvider = (props)=>{
	// USER ACCCUNT
	const [userAccount, setUserAccount]= useState({userName: '', name: ''});
	// console.log("loged in account ----> ", userAccount)


	// FILTER POST

	const [filterCtegory, setFilterCategory] = useState(initialCategory);


	return (
		<DataContext.Provider value={{ userAccount, setUserAccount, filterCtegory, setFilterCategory }}>
			{props.children}
		</DataContext.Provider>
	)
}
export default DataProvider;