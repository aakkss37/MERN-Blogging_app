import { GridFsStorage } from 'multer-gridfs-storage'
import multer from 'multer';
// ENV CONFIGURATION
import dotenv from 'dotenv';
dotenv.config();
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;


const CONNECTION_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.ud4d4af.mongodb.net/?retryWrites=true&w=majority`
const connectionOption = {
	useNewUrlParser: true, useUnifiedTopology: true
}

const storage = new GridFsStorage({
	url: CONNECTION_URL,
	options: connectionOption,
	file: (request, file) => {
		// console.log(file)
		const match = ["image/jpg", "image/jpeg", "image/png"];
		if(match.indexOf(file.mimetype) === -1){ //---> indexOf search all the element in array.. and return the index no. of the desired element if found.. if not found.. it will return -1.
			return `${Date.now()}-blog-${file.originalname}`;
		}
		return {
			bucketName: 'photos',
			filename: `${Date.now()}-blog-${file.originalname}`,
		}
	}
})

const upload = multer({ storage });
// console.log(upload)
export default upload