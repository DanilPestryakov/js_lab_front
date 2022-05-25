export const employeeModalTemplate = `
<div id="modal-content" class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="form-floating mb-3">
            <input type="name" class="form-control" id="modal-input-name" placeholder="Name" value="<%- name %>">
            <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="surname" class="form-control" id="modal-input-surname" placeholder="Surname" value="<%- surname %>">
            <label for="floatingInput">Surname</label>
        </div>
        <div class="form-floating mb-3">
            <input type="birthday" class="form-control" id="modal-input-birthday" placeholder="Birthday" value="<%- birthday %>">
            <label for="floatingInput">Birthday date</label>
        </div>
        <div class="form-floating mb-3">
        	<select type="post" id="modal-input-post" placeholder="Post" class="form-select">
  				<option value="Junior Software Engineer">Junior Software Engineer</option>
  				<option value="Software Engineer">Software Engineer</option>
 			    <option value="Senior Software Engineer">Senior Software Engineer</option>
  				<option value="Lead Software Engineer">Lead Software Engineer</option>
			</select>
			<label for="floatingInput">Post</label>
        </div>
        <div class="form-floating">
            <input type="salary" class="form-control" id="modal-input-salary" placeholder="Salary" value="<%- salary %>">
            <label for="floatingInput">Salary</label>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" id="close-button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button id="handle-confirm" type="button" data-bs-dismiss="modal" class="btn btn-primary">Apply</button>
    </div>
</div>`;