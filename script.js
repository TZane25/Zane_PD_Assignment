
var scroll_pos = 0;
$(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1800) { // if scroll past a certain pixel

        $("body").css('background-color', '#16161d'); // change the bottom color // elgengroid

    }
    else {
        $("body").css('background-color', '#0D0D0D'); // black


    }
});



var cursor = document.getElementById('cursor'); // cursor follow

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";


});


let listItems = [...document.querySelectorAll('.reveal li')]; // spread function all list items into an array 


let options = {
    rootMargin: '-40%', // 40% down from the view port the function will take effet 
    
}
let observer = new IntersectionObserver(showItem, options); //function triggered when items come into view port

function showItem(entries) { // variable entries 
 
    entries.forEach(entry => { // for each 
        console.log(entries); // check if the js is in tact
        if (entry.isIntersecting)  // child element is the span
        {
            entry.target.children[0].classList.add('active'); // adding the class from css file to the child which is the span
            observer.unobserve(entry.target); // when leaves viewport
        }
        else {
            return; // return value 
        }

    })

}

listItems.forEach(item => {  // check if the items are passing through 
    observer.observe(item);

})







let showing = [...document.querySelectorAll('.appear')]; // spread function all list items into an array 

let options2 = {
    rootMargin: '40%',

}
let observer1 = new IntersectionObserver(showItems, options2);//function triggered when items come into view port

function showItems(entries1) {

    entries1.forEach(entry1 => {
        if (entry1.isIntersecting) // child element is the span
        {
            entry1.target.classList.add('show'); // add the show element in the css which brings up the item
            observer1.unobserve(entry.target); // when leaves the view port
        }
        else {
            return; // return the
        }

    })

}

showing.forEach(item1 => {

    observer1.observe(item1); // check if the items are passing through  // loop fo robserver to check

})




let showingEarlier = [...document.querySelectorAll('.appearE')]; // spread function all list items into an array 

let options3 = {
    rootMargin: '20%', // pushes it down from the current px of the view port
    threshold: 0.0
}
let observer2 = new IntersectionObserver(showItems, options3);//function triggered when items come into view port

function showItems(entries2) {

    entries2.forEach(entry2 => {
        if (entry2.isIntersecting) // child element is the span
        {
            entry2.target.classList.add('show1');
            observer2.unobserve(entry2.target);
        }
        else {
            return;
        }

    })

}

showingEarlier.forEach(item2 => { 

    observer2.observe(item2); // check for every item in the list of showingearlier 

})



//button goes to top of the page

function topFunction() {

    $('html, body').animate({ scrollTop: 0 }, 'slow'); // top function
}









