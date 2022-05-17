import { PAGE_SIZE } from './config.js';

export function addQueryParams(url, params) {
	const urlObj = new URL(url);
	urlObj.search = new URLSearchParams(params).toString();
	return urlObj;
}

export function addFilters(params) {
	const newParams = params || {};

	/*const filter = $('#filter').val();
	const salaryOrder = $('#salary-switch').prop('checked')

	newParams.filter = filter.trim();
	newParams.order = salaryOrder ? 1 : -1;*/
	const filterName = $('#filter-name').val();
	const filterSurname = $('#filter-surname').val();
	if (filterName) {
		newParams.name = filterName.trim();
	}
	if (filterSurname) {
		newParams.surname = filterSurname.trim();
	}

	return newParams;
}

export async function handleRequest(url, options) {
	try {
		const response = await fetch(url, options);
		console.log(response)
		const payload = await response.json();
		if (response.ok) {
			console.log('ok')
			return payload;
		} else {
			//handleError(payload);
			console.log('bad')
		}
	} catch (error) {
		alert(error);
	}
}

export function renderTemplate(templateString, data) {
	const template = _.template(templateString);
	return template(data);
}

export function calculateIndex(pageNum, cnt) {
	return (pageNum - 1) * PAGE_SIZE + cnt + 1;
}

export function getCurrentPageSize(pageNum) {
	const totalCount = sessionStorage.getItem('allCount');
	return totalCount - PAGE_SIZE * (pageNum - 1);
}

export function getPagesCount() {
	const pageCount = sessionStorage.getItem('pageCount');
	return pageCount;
}

export function getLocalToken() {
	let token = localStorage.getItem('token')
	token = JSON.parse(token)
	return token;
}

function getValueString(data, index) {
	if (!data || !data[index])
		return '';
	return data[index];
}

export function processModalFields(data) {
	return {
		id: getValueString(data, 0),
		name: getValueString(data, 1),
		surname: getValueString(data, 2),
		birthday: getValueString(data, 3),
		post: getValueString(data, 4),
		salary: getValueString(data, 5),
	}
}