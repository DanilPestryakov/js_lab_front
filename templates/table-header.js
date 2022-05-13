export const tableHeaderTemplate = `
<thead>
    <tr class="table-hover">
        <% items.forEach(function(item) { %>
            <th scope="col" id="<%- item %>">
                <%- item %>
            </th>
        <% }); %>
    </tr>
</thead>
`;