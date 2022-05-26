function AddUser(){
    var value = document.getElementById("ID").value;
    if (value == "") {
        alert('Please enter your username');
    } else {
    username = document.getElementById("ID").value;
    localStorage.setItem("user_name", username);
    window.location = "main_page.html";
    }
}