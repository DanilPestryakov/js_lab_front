import {filterInputTemplate} from '../../templates/filter-input.js';
import {optionsButtonTemplate} from '../../templates/options-button.js';
import openModal from './modal.js';
import {updateTable} from '../components/tables.js';
import {renderTemplate} from '../utils.js';

export default function createTopOptionsBlock() {
	const topOptionsBlock = $("#top-options-block");

	const filters = [{
		id: 'filter-name',
		type: 'filter',
		placeholder: 'search word',
		title: 'name search string'
	},
		{
			id: 'filter-surname',
			type: 'filter',
			placeholder: 'search word',
			title: 'surname search string'
		}]

	const filtersData = renderTemplate(filterInputTemplate, {items: filters});

	const addButtonHTML = renderTemplate(optionsButtonTemplate, {
		className: 'btn\ btn-secondary',
		title: 'Login'
	});
	const addButton = $(addButtonHTML);
	addButton.on('click', openModal);

	topOptionsBlock.append(filtersData);
	topOptionsBlock.append(addButton);

	$('#filter-name').change(() => {
		updateTable(1);
	})

	$('#filter-surname').change(() => {
		updateTable(1);
	})
}