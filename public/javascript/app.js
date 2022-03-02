// to add email (edited)
// POST 192.248.153.201:9011/api/v1/newsletter/:email 

// to verify status
// GET 192.248.153.201:9011/api/v1/newsletter/:email/exists 

// submit header form
let headerform = document.querySelector('#header-form')
let sectionform = document.querySelector('#section-form')

const validateEmail = (emailval) => {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailval);
}

console.log("hello")

headerform.addEventListener('submit', (e) => {
    e.preventDefault()
    let emailinput = document.querySelector('#header-input-form').value

    let options = {
        method: 'POST',
        body: JSON.stringify(emailinput),
        headers: {
            "Content-Type":"application/json"
        }
    }

    if (!validateEmail(emailinput)) {
        return console.log("Please enter a valid email")
    } else {
        let url = `192.248.153.201:9011/api/v1/newsletter/${emailinput}`
        fetch(url, options)
            .then(response => {
                return response.json()
            })
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
})