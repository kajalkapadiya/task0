document.querySelector('.btn').addEventListener('click', store)

function store(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value

    console.log(name);
    localStorage.setItem(name, email);
}

