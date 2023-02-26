//Add active class to the current control button to highlight it

var btnContainer = document.getElementById("personalProjectsTabsContainer");
var btns = btnContainer.getElementsByClassName("btnFilterTab");
for(var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
       var current = document.getElementsByClassName("active");
       current[0].className = current[0].className.replace(
            " active", "");
            this.className += " active";
       
   });
}
