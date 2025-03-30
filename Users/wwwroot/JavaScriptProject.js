document.addEventListener("DOMContentLoaded", function () {
    const projectForm = document.getElementById("projectForm");
    const projectTable = document.getElementById("projectTable");

    projectForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const projectName = document.getElementById("projectName").value;
        const projectId = document.getElementById("projectId").value;
        const projectType = document.getElementById("projectType").value;

        if (!projectName || !projectId) return;

        const row = projectTable.insertRow();
        row.innerHTML = `
            <td>${projectName}</td>
            <td>${projectId}</td>
            <td>${projectType}</td>
            <td>
                <button class="delete">Delete</button>
            </td>
        `;

        row.querySelector(".delete").addEventListener("click", function () {
            row.remove();
        });

        projectForm.reset();
    });
});
