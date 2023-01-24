
export const uploadImage = (request, responce)=>{
	console.log(request.file);
	if(!request.file){
		return responce.status(404).json({msg: "Bad request, file is not valid"});
	}
	
	const imageURL = `http:/localhost:8000/dispalyPicture/${request.file.filename}`;
	return responce.status(200).json(imageURL);
}
