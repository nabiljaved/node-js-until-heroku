console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const id = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                let result;
                
                result = `
                    <ul>
                        <li>UserId : ${data.userId}</li>
                        <li>Id : ${data.id}</li>
                        <li>title : ${data.title}</li>
                        <li>completed: ${data.completed}</li>
                    </ul>
                `;
                messageOne.innerHTML = result;
                console.log(data)
            }
        })
    })
})