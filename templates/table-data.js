export const tableDataTemplate = `
<tbody id='table-body'>
    <% rows.forEach(function(row) { %>
        <tr>
            <td>
                <%= row.id %>
            </td>
            <td>
                <%= row.name %>
            </td>
            <td>
                <%= row.surname %>
            </td>
            <td>
                <%= row.birthday %>
            </td>
            <td>
                <%= row.post %>
            </td>
            <td>
                &#36;<%= row.salary %>
            </td>
            <td>
                <%= row.actions %>
            </td>
        </tr>
    <% }); %>
</tbody>`;