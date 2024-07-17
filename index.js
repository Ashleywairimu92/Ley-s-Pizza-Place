function order(pizza) {
    alert(`You have ordered a ${pizza} pizza.`);
}

function cancelOrder(pizzaType) {
    alert('Order cancelled for ' + pizzaType);
}

function openForm(formId) {
    document.getElementById(formId).style.display = 'block';
}

function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

window.onclick = function(event) {
    var loginForm = document.getElementById('loginForm');
    var signUpForm = document.getElementById('signUpForm');
    if (event.target == loginForm) {
        loginForm.style.display = 'none';
    }
    if (event.target == signUpForm) {
        signUpForm.style.display = 'none';
    }
}

