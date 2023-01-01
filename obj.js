document.querySelector('.btn').addEventListener('click', store)

function store(e) {
    e.preventDefault();

    let obj = {
        name : document.querySelector('#name').value ,
        email : document.querySelector('#email').value
    }

    let myobj = JSON.stringify(obj);
    console.log(myobj);


    localStorage.setItem("obj", myobj);
    console.log(localStorage);
}