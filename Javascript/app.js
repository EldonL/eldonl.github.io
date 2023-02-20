filterSelection('all')
function filterSelection(filterType){
 
    var elementsName, i;
    elementsName = document.getElementsByClassName("filterDiv");
    if(filterType=="all"){
        filterType = "";
    }
    for(i=0; i < elementsName.length; i++){
        RemoveClass(elementsName[i], "show");
        if(elementsName[i].className.indexOf(filterType) > -1){
            AddClass(elementsName[i], "show");
        } 

    }
}

//show filtered elements
function AddClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i =0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            
        }
    }
}

//hide elements not selected
function RemoveClass(element, name){
    var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
       }
    }
    element.className = arr1.join(" ");

}

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

function OnLogoClick(){
    window.location="index.html";
}