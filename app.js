import getData from "./posts.js"

(async function () {
    const user = await getData(1)
    console.log(user)
})()
