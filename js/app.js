
const bgControlled = document.getElementsByClassName('bg-js-controlled');
backgroundColor();





function backgroundColor(){
    for(i=0; i<bgControlled.length; i++){
        if(i%2==0){
            bgControlled[i].classList.add('bg-odd');

        }
        else{
            bgControlled[i].classList.add('bg-even');

        }

    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor=> {
    anchor.addEventListener("click", function(e){
        console.log(e + ": clicked");
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});



function OnLogoClick(){
    window.location="index.html";
}

function OnLinkClick(url){
    window.open(url);
}





