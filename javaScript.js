
        let inputUsername = document.getElementById('form2Example1')
        let inputPassword = document.getElementById('form2Example2')
        let admin = document.getElementById('admin')
        let basic = document.getElementById('basic')
        let loginButton = document.getElementById('loginButton')
        let logoutButton = document.getElementById('logoutButton')
        let divInputUsername = document.getElementById('classInput')
        let labelUsername = document.getElementById('labelInput')
        let divPassword = document.getElementById('classPin')
        let labelPassword = document.getElementById('lbelInp')
        let divRem1 = document.getElementById('divRem1')
        let divRem2 = document.getElementById('divRem2')
        let divRem3 = document.getElementById('divRem3')
        let inputCheck = document.getElementById('form2Example31')
        let labelRem = document.getElementById('labelRem')
        let divLupa = document.getElementById('divLupa')
        let lupaPassword = document.getElementById('lupaPassword')
        let divRegister = document.getElementById('divRegister')
        let notMember = document.getElementById('notMember')
        let register = document.getElementById('register')
        

        basic.style.display = "none"
        admin.style.display = "none"
        logoutButton.style.display = "none"

        function onlogin() {
            localStorage.setItem("username", inputUsername.value)
            logoutButton.style.display = "block"
            if(inputUsername.value == "admin" && inputPassword.value == "admin123"){
                localStorage.setItem("role", "admin")
                basic.style.display = "none"
                admin.style.display = "block"
                divInputUsername.style.display = "none"
                labelUsername.style.display = "none"
                divPassword.style.display = "none"
                labelPassword.style.display = "none"
                divRem1.style.display = "none"
                divRem2.style.display = "none"
                divRem3.style.display = "none"
                inputCheck.style.display = "none"
                labelRem.style.display = "none"
                divLupa.style.display = "none"
                lupaPassword.style.display = "none"
                loginButton.style.display = "none"
                divRegister.style.display = "none"
                notMember.style.display = "none"
                register.style.display = "none"
                inputUsername.style.display = "none"
                inputPassword.style.display = "none"
                
            }else{
                localStorage.setItem("role", "basic")
                admin.style.display = "none"
                basic.style.display = "block"
                divInputUsername.style.display = "none"
                labelUsername.style.display = "none"
                divPassword.style.display = "none"
                labelPassword.style.display = "none"
                divRem1.style.display = "none"
                divRem2.style.display = "none"
                divRem3.style.display = "none"
                inputCheck.style.display = "none"
                labelRem.style.display = "none"
                divLupa.style.display = "none"
                lupaPassword.style.display = "none"
                divRegister.style.display = "none"
                notMember.style.display = "none"
                register.style.display = "none"
                inputUsername.style.display = "none"
                inputPassword.style.display = "none"
                loginButton.style.display = "none"
            }
        }

        if (localStorage.getItem('username')) {
            inputUsername.style.display = "none"
            inputPassword.style.display = "none"
            loginButton.style.display = "none"
            logoutButton.style.display = "block"
            if (localStorage.getItem('role') == "admin") {
                basic.style.display = "none"
                admin.style.display = "block"
            }else{
                admin.style.display = "none"
                basic.style.display = "block"
            }
        }

        function onlogout() {
            localStorage.clear()
            location.reload()
        }