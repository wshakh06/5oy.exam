const { resolve } = require("path")
const { promiseHooks } = require("v8")

const API =  "http://localhost:3000/comp"


// loader toggle

const overlay =document.getElementById('overlay')


const loaderToggle = (toggle) => {
    if(toggle) {
        overlay.classList.remove('hidden')
    } else{
        overlay.classList.add('hidden')
    }
}





const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            if(request.readyState < 4) {
                loaderToggle(true)
            } else if (request.readyState == 4 && request.status ==200) {
                const data = JSON.parse(request.responseText)
                console.log(data.result)
                loaderToggle(false)
            } else if (request.request == 4) {
                console.log(error)
                loaderToggle(false)
            }
        })


    request.open('GET', resource)
    request.send()
    })
}

getData(API)