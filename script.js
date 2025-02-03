// to inject date at the top of page
const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = `${
  months[date.getMonth()]
} ${date.getDate()} ${date.getFullYear()}, ${days[date.getDay()]} `;
document.getElementById("date").innerHTML = currentDate;

// After 3 seconds, reveal the <main> section
setTimeout(() => {
  const mainSection = document.querySelector("main");
  mainSection.style.opacity = 1; // Fade in the <main> section
  mainSection.style.visibility = "visible"; // Make it visible
}, 1500);

//getting references to HTML elements
const addTaskBtn = document.getElementById("addTaskBtn");
const userInput = document.getElementById("addTaskInput");
const taskDisplay = document.getElementById("taskDisplay");

// adding event handlers
addTaskBtn.addEventListener("click", addTaskBtnHandler);
userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTaskBtnHandler();
  }
});

// add task function
function addTaskBtnHandler() {
  const inputTask = userInput.value.trim();
  if (inputTask === "") return;
  const tr = document.createElement("tr");

  // for task text
  const tdTask = document.createElement("td");
  tdTask.textContent = inputTask;

  // for task status, default is pending
  const tdStatus = document.createElement("td");
  tdStatus.textContent = "Pending";
  tdStatus.addEventListener("click", toggleStatus);

  // for deleting the task
  const tdDeleteBtb = document.createElement("td");
  const deleteBtb = document.createElement("button");
  deleteBtb.textContent = "DELETE";
  //deleteBtb.addEventListener("click", deleteTaskBtnHandler);
  tdDeleteBtb.appendChild(deleteBtb);

  tr.appendChild(tdTask);
  tr.appendChild(tdStatus);
  tr.appendChild(tdDeleteBtb);

  taskDisplay.appendChild(tr);

  taskDisplay.addEventListener("click", deleteTaskBtnHandler);

  userInput.value = "";
  userInput.focus();
}
function deleteTaskBtnHandler(event) {
  if (event.target.tagName !== "BUTTON") return;
  const tr = event.target.closest("tr");
  tr.remove();
}
function toggleStatus(event) {
  if (event.target.tagName !== "TD") return;
  const status = event.target;
  status.textContent =
    status.textContent === "Pending" ? "Completed" : "Pending";
}
