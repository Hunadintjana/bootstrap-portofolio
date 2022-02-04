function result(){

    var textbox = document.getElementById("user");
    var textbox2 = document.getElementById("user2");
    var concan = textbox + "" + textbox2;
    var textbox4 = document.getElementById("pr");

    textbox4.innerHTML = concan;
}

