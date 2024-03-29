import { BASE_URL } from './config.js';
import {getLocalToken, addFilters, addQueryParams, handleRequest, renderTemplate} from './utils.js';
import {optionsButtonTemplate} from "../templates/options-button.js";


export async function getEmployees(params) {
	const baseUrl = `${BASE_URL}/employees`;
	const queryParameters = addFilters(params);
	const url = addQueryParams(baseUrl, queryParameters);;
	const options = {
		method: 'GET',
	};

	return handleRequest(url, options);
}

export async function putEmployee(id, payload) {
	console.log(payload)
	const url = `${BASE_URL}/employees/${id}`;
	let token = getLocalToken();
	if (token)
		token = token.token
	const headers = {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
	}

	console.log(payload.salary)
	const options = {
		method: 'PUT',
		body: JSON.stringify(payload),
		mode: 'cors',
		headers
	};

	return handleRequest(url, options);
}

export async function postEmployee(payload) {
	console.log(payload)
	const url = `${BASE_URL}/employees`;
	let token = getLocalToken();
	if (token)
		token = token.token
	console.log(token)
	const headers = {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
	}
	const options = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers
	};

	return handleRequest(url, options);
}

export async function deleteEmployee(id) {
	const url = `${BASE_URL}/employees/${id}`;
	let token = getLocalToken();
	if (token)
		token = token.token
	const headers = {
		Authorization: `Bearer ${token}`,
	}
	const options = {
		method: 'DELETE',
		headers
	};

	return handleRequest(url, options);
}

function deleteToken() {
	localStorage.removeItem('token');
	let addButtonHTML = '';
	addButtonHTML = renderTemplate(optionsButtonTemplate, {
		className: 'btn\ btn-secondary',
		title: 'Login'
	});

	$('#create').replaceWith(addButtonHTML);
	$('#close-button').click();
	alert("The token has expired. Log in again ")
}

export async function getToken(params) {
	const options = {
		method: 'POST',
		body: JSON.stringify(params)
	};

	const url = `${BASE_URL}/users/login`;

	const payload = await handleRequest(url, options);
	localStorage.setItem('token', JSON.stringify({token: payload.token}));
	let addButtonHTML = '';
	addButtonHTML = renderTemplate(optionsButtonTemplate, {
		className: 'btn\ btn-info',
		title: 'Create'
	});
	$('#create').replaceWith(addButtonHTML);
	setTimeout(deleteToken, 1000 * 300)
}

