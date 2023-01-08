function getinfo(){
    let name ="";
    if(localStorage.getItem("name") == null){
        do{
        name = prompt("Enter your name");
        localStorage.setItem("name", name);
        } while(name == null || name == "");
    } else {
        name = localStorage.getItem("name");
    }
    document.getElementById("name").innerHTML = name;
}
getinfo();