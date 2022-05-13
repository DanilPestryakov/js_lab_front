export const authModalTemplate = `
<div id="modal-content" class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Authorization</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="form-floating mb-3">
            <input type="username" class="form-control" id="modal-input-username" placeholder="Username">
            <label for="floatingInput">Login</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="modal-input-password" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button id="handle-confirm" type="button" data-bs-dismiss="modal" class="btn btn-primary">Authorize</button>
    </div>
</div>`;