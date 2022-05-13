export const paginationTemplate = `
<ul class="pagination">
    <% items.forEach(item => { %>
        <li class="page-item">
            <button id="<%= item.id %>" class="page-link" <%= item.options %>>
                <%= item.title %>
            </button>
        </li>
    <% }); %>
</ul>`;