// submit header form
let headerform = document.querySelector('#header-form')
let sectionform = document.querySelector('#section-form')

const validateEmail = (emailval) => {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailval);
}

const emailcheck = (emailaddress) => {
    let addemail = `http://192.248.153.201:9011/api/v1/newsletter/${emailaddress}`
    let emailexists = `http://192.248.153.201:9011/api/v1/newsletter/${emailaddress}/exists`

    let options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(emailexists)
        .then(response => {
            return response.json()
        })
        .then(result => {
            let isemailInDb = result.data
            if (isemailInDb) {
                return alert("This email already exists in the database")
            } else {
                fetch(addemail, options)
                    .then(req => { return req.json() })
                    .then(res => {
                        alert("Congratulations! You're signed in and ready to go")
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        })
        .catch(error => {
            console.log(error)
        })
}

headerform.addEventListener('submit', (e) => {
    e.preventDefault()
    let emailinput = document.querySelector('#header-input-form').value

    if (!validateEmail(emailinput)) {
        return alert("Please enter a valid email")
    } else {
        emailcheck(emailinput)
    }
})

sectionform.addEventListener('submit', (e) => {
    e.preventDefault()
    let sectionemailinput = document.querySelector('#section-input-form').value

    if (!validateEmail(sectionemailinput)) {
        return alert("Please enter a valid email")
    } else {
        emailcheck(sectionemailinput)
    }
})