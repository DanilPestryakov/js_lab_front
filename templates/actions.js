export const actionsTemplate = `
<div class="actions-block">
    <button employee_id=<%= employeeId %> id="update" type="button" class="btn btn-warning">
        <i class="bi bi-pencil-square"></i>
    </button>
    <button employee_id=<%= employeeId %> id="delete" type="button" class="btn btn-danger">
        <i class="bi bi-trash"></i>
    </button>
</div>`;