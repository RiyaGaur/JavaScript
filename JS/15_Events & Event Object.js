document.getElementById("heading").addEventListener("click", function(e) {
    let variable;
    console.log("You have clicked the heading");
    variable = e.target;
    console.log(variable);
    variable = e.target.className;
    console.log(variable);
    variable = Array.from(e.target.classList);
    console.log(variable);
    variable = e.target.id;
    console.log(variable);
    variable = e.offsetX;
    console.log(variable);
    variable = e.offsetY;
    console.log(variable);
    variable = e.clientX;
    console.log(variable);
    variable = e.clientY;
    console.log(variable);
    //location.href = '//google.com'
});