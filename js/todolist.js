document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="deleteButton">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteButton")) {
            event.target.parentElement.remove();
        }
    });
});
