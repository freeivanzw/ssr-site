const $regForm = document.querySelector('#auth_form')

$regForm.addEventListener('submit', function (e) {

    const $email = $regForm.querySelector('#email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if ($email.value === '' || !emailRegex.test($email.value)) {
        $email.classList.add('error');

        return e.preventDefault();
    } else {
        $email.classList.remove('error');
    }

    const $name = $regForm.querySelector('#name');

    if ($name.value === '') {
        $name.classList.add('error');

        return e.preventDefault();
    } else {
        $name.classList.remove('error');
    }

    const $password = $regForm.querySelector('#password');

    if ($password.value.length < 6) {
        $password.classList.add('error');

        return e.preventDefault();
    } else {
        $password.classList.remove('error');
    }

    const $repeatPassword = $regForm.querySelector('#repeatPassword');

    if ($password.value !== $repeatPassword.value) {
        $repeatPassword.classList.add('error');

        return e.preventDefault();
    } else {
        $repeatPassword.classList.remove('error');
    }

    console.info('submit');
})