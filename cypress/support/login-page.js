class loginPage {
    login = '.form-inline > .navbar-nav > :nth-child(2) > .nav-link'
    username = '#Username'
    password = '#Password'
    login_button = '.btn-primary'
    clear_button = ':nth-child(7) > :nth-child(2) > .btn-secondary'
    success_login = 'h3'
    danger_empty = '.alert-danger'
    password_val = '.field-validation-error'
    not_registered = '.btn > a'
    logout = '.form-inline > .navbar-nav > :nth-child(2) > .nav-link'
}

export default loginPage;