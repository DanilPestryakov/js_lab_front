export const confirmModalTemplate = `
<div id="modal-content" class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        Are you really want to delete user with id <%- id %>?
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button id="handle-confirm" data-bs-dismiss="modal" type="button" class="btn btn-primary">Delete</button>
    </div>
</div>`;