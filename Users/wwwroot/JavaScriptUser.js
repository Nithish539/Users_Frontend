document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userTable = document.getElementById("userTable");

    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;

        if (!firstName || !lastName || !email) return;

        const row = userTable.insertRow();
        row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${role}</td>
            <td>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </td>
        `;

        row.querySelector(".delete").addEventListener("click", function () {
            row.remove();
        });

        row.querySelector(".edit").addEventListener("click", function () {
            document.getElementById("firstName").value = firstName;
            document.getElementById("lastName").value = lastName;
            document.getElementById("email").value = email;
            document.getElementById("role").value = role;
            row.remove();
        });

        userForm.reset();
    });
});
