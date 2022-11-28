// const dele = document.querySelectorAll('.comment')

// Array.from(dele).forEach((el) => {
//     el.addEventListener('click', deleteComment)
// })

// async function deleteComment(){
//     const todoId = this.parentNode.dataset.id

//     try {
//         const response = await fetch('comment/deleteComment', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'commentIdFromJsFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     } catch (error) {
//         console.log(error)
//     }
// }