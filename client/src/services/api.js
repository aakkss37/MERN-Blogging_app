import axios from 'axios';


const API_URL = 'http://localhost:8000';
const axiosInstance = axios.create({  // axios.create --> You can create a new instance of axios with a custom config.
	baseURL: API_URL,
	timeout: 10000,
	header: {
		"content-type": "application/json"
	}
})


// Interceptors can be used to modify requests before they are sent. This can be useful for adding authentication headers, setting timeouts, or adding query parameters.
axios.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
)

axios.interceptors.response.use(
	(responce) => {
		// code eg: stop gloable loader.
		return processResponce(responce);
	},
	(error) => {
		// code eg: stop gloable loader.
		return Promise.reject(processError(error));
	}
)

// // // // // // // // // // // // // // // // // // // // //
// It is a common responce for all the API's..
// if responce is sucess --> return {isSucess: true, data: object}
// if responce is failed --> return {isFailure: true, status: string, msg: string, code: statusCode->int}
const processResponce = (responce) => {
	// rasponce sucessful
	if (responce?.status >= 200 && responce?.status < 300) { //The question mark (?) in "response?.status" is a JavaScript feature called optional chaining. It allows you to access a property of an object, even if that object or one of its parent objects is null or undefined. If the object is null or undefined, the expression returns undefined instead of throwing an error. In this case, it's checking if the "status" property of the "response" object is equal to 200, and if so, it will execute the code within the if statement.
		return {
			isSucess: true,
			data: responce.data
		}
	}
	// responce failed
	else {
		return {
			isFailure: true,
			status: responce?.status,
			msg: responce?.msg,
			code: responce?.code
		}
	}

}


// Error can be of 3 type:-
const processError = (error) => {
	if (error.responce) {
		// 1. responce error --> request sent sucessfuly... request is received by server... server also has sent a responce sucessfuly... but the responce was other then 200 series  i.e. server couldn't process the request due to any reason

	}
	else if (error.request) {
		// 2. request error  --> request sent sucessfuly... but no responce was received.

	}
	else {
		// 3. network error  --> couldn't make request(reason can be any thing.. like connection loss..etc) OR something went wrong from client side.

	}
}