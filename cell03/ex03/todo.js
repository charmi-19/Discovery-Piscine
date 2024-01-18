const getCookie = (cookie_name) => {
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(cookie_name + "=");
    if (start != -1) {
      start = start + cookie_name.length + 1;
      end = document.cookie.indexOf(";", start);
      if (end == -1) {
        end = document.cookie.length;
      }
      return unescape(document.cookie.substring(start, end));
    }
  }
  return "";
};

const setCookie = (name, value, days) => {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
};

const addNewItem = (content) => {
  const divElement = document.createElement("div");
  divElement.innerHTML = content;
  divElement.style.borderBottom = "1px solid gray";
  divElement.style.padding = "12px 8px";
  blockElement.prepend(divElement);
  divElement.addEventListener("click", () => {
    if (confirm("Are you sure you want to remove this item from your list?")) {
      divElement.remove();
      const index = toDoList.indexOf(content);
      if (index !== -1) {
        toDoList.splice(index, 1);
      }
      setCookie("toDoList", JSON.stringify(toDoList), 7);
    }
  });
};

const blockElement = document.getElementById("ft_list");
const buttonElement = document.getElementById("myButton");
let toDoList = JSON.parse(getCookie("toDoList"));

for(let i=toDoList.length - 1; i>=0; i--) {
  addNewItem(toDoList[i]);
}
let newItem;

buttonElement.addEventListener("click", () => {
  newItem = prompt("Enter your item in To Do List");
  if (newItem) {
    toDoList.unshift(newItem);
    addNewItem(newItem);
    setCookie("toDoList", JSON.stringify(toDoList), 7);
  }
});
