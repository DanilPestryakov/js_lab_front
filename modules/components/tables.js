import { getEmployees } from '../service.js';
import { renderTemplate, calculateIndex } from '../utils.js';
import { tableHeaderTemplate } from '../../templates/table-header.js';
import { actionsTemplate } from '../../templates/actions.js'
import { tableDataTemplate } from '../../templates/table-data.js';
import openModal from "./modal.js";

function getTableHeaderValues(data) {
	const mainFields = Object.keys(data[0]).slice(1);
	return ['id', ...mainFields, 'actions'];
}

function createTableHeader(data) {
	const items = getTableHeaderValues(data);
	return renderTemplate(tableHeaderTemplate, { items });
}

function createTableBody(data, pageNum = 1) {
	const rows = data.map((item, index) => {
		item.index = calculateIndex(pageNum, index);
		item.actions = renderTemplate(actionsTemplate, { employeeId: item.id });
		return item;
	});
	return renderTemplate(tableDataTemplate, { rows });
}

export default async function createTable() {
	const tableObj = $('#employee-table');

	const tableData = await getEmployees();
	sessionStorage.setItem('allCount', tableData.allCount);

	const tableHeader = createTableHeader(tableData.employees);
	const tableBody = createTableBody(tableData.employees);

	tableObj.append(tableHeader);
	tableObj.append(tableBody);

	tableObj.on('click', openModal);

	/*$('#salary').html(`
    <th class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="salary-switch">
        <label class="form-check-label" for="salary-switch">salary</label>
    </th>`);*/

	/*$('#salary-switch').change(() => {
		updateTable();
	})
	tableObj.on('click', openModal);*/
}

function updateTableData(newData, pageNum = 1) {
	const htmlData = createTableBody(newData, pageNum);
	$('#table-body').replaceWith(htmlData);
}

export function updateTable(pageNum) {
	getEmployees({ page: pageNum || $('#page-number').text()})
		.then(data => {
			console.log(data)
			if (pageNum)
				$('#page-number').html(pageNum);
			sessionStorage.setItem('allCount', data.allCount);
			updateTableData(data.employees, pageNum);
		})
		.catch(err => {
			console.log(err);
		});
}