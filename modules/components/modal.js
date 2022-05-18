import { authModalTemplate } from '../../templates/auth-modal.js';
import { confirmModalTemplate } from '../../templates/confirm-modal.js';
import { employeeModalTemplate } from '../../templates/employee-modal.js';
import { getToken, putEmployee, postEmployee, deleteEmployee } from '../service.js';
import {processModalFields, getLocalToken, renderTemplate} from '../utils.js';
import { updateTable } from '../components/tables.js';


function auth() {
	const login = $('#modal-input-username').val();
	const password = $('#modal-input-password').val();

	getToken({ login, password });
}

function getInputData() {
	const data = {
		name: $('#modal-input-name').val(),
		surname: $('#modal-input-surname').val(),
		birthday: $('#modal-input-birthday').val(),
		post: $('#modal-input-post').val(),
		salary: Number.parseInt($('#modal-input-salary').val(), 10),
	};

	return data;
}

function createConfirmHandler() {
	return () => {
		const payload = getInputData();

		postEmployee(payload)
			.then(res => {
				updateTable();
			})
			.catch(err => {
				console.log(err);
			});
	};
}

function updateConfirmHandler(id) {
	return () => {
		const payload = getInputData();
		console.log(payload)
		console.log(id)

		putEmployee(id, payload)
			.then(res => {
				updateTable();
			})
			.catch(err => {
				console.log(err);
			});
	};
}

function deleteConfirmHandler(id) {
	return () => {
		deleteEmployee(id)
			.then(res => {
				updateTable(1);
			})
			.catch(err => {
				console.log(err);
			});
	}
}

function updateModalContent(employeeData, modalType) {

	let token = getLocalToken();
	let confirmHandler = () => {};
	if (token) {
		let modalTemplate;
		const templateData = processModalFields(employeeData);
		switch (modalType) {
			case 'create':
				modalTemplate = _.template(employeeModalTemplate);
				confirmHandler = createConfirmHandler();
				break;
			case 'update':
				console.log("update")
				modalTemplate = _.template(employeeModalTemplate);
				confirmHandler = updateConfirmHandler(templateData.id);
				break;
			case 'delete':
				modalTemplate = _.template(confirmModalTemplate);
				confirmHandler = deleteConfirmHandler(templateData.id);
				break;
		}
		$('#modal-content').replaceWith(modalTemplate(templateData));
	} else {
		confirmHandler = auth;
		$('#modal-content').replaceWith(_.template(authModalTemplate)());
	}
	$('#handle-confirm').on('click', confirmHandler);
}

function showModal() {
	new bootstrap.Modal($('#static-backdrop')[0], { backdrop: 'static' }).show();
}

export default function openModal(event) {
	const targetButton = event.target.closest('button');

	if (targetButton) {
		const modalType = targetButton.getAttribute('id');
		const tableRow = event.target.closest('tr');
		let employeeData;

		if (tableRow) {
			employeeData = _.toArray(tableRow.children).slice(1, -1).map(ch => ch.innerHTML.trim());
			employeeData.unshift(targetButton.getAttribute('employee_id'));
		}

		updateModalContent(employeeData, modalType);
		showModal();
	}
}