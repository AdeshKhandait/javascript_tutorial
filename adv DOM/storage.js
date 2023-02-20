// local Storage    | Cookies storage   | Session Storage
// 10MB             | 4KB               | 5MB
// Never Expires    | Manual Expires    | Expires on tab close
// Client           | Client/ Server    | Client
// Easy             | Hard              | Easy

localStorage.setItem("Name", "Adesh");
sessionStorage.setItem("Age", "19");

const date = new Date(9999, 0, 1).toUTCString();
document.cookie = `name=kyle; expires=${date}`;
console.log(document.cookie);
