export const filterInputTemplate = `
<div class="col-8">
	<% items.forEach(item => { %>
		<div class="form-floating">
	        <input id="<%= item.id %>" type=<%= item.type %> class="form-control" placeholder=<%= item.placeholder %>>
	        <label for="floatingInputGrid">
	            <%= item.title %>
	        </label>
	    </div>
    <% }); %>
    
</div>`;