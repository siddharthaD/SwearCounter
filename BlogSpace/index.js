fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <div class="blog-post">
                <h3 class='poppins-medium'>${post.title}</h3>
                <p>${post.body}</p>
                </div>
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })

const newPostel = document.getElementById('new-post')

fetch('https://apis.scrimba.com/openweathermap/data/2.5/weather?q=mumbai')
   .then(response => response.json())
   .then(data => console.log(data))

newPostel.addEventListener('submit',(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)

        const reqData =
            {
                title:formData.get('title'),
                body:formData.get('body')
            }
        for(let val of formData.entries())
        {
            console.log(val[0], val[1])
        }

        console.log(JSON.stringify(reqData))
        fetch("https://apis.scrimba.com/jsonplaceholder/posts",{
                method:"post",
                headers: { 'Content-Type':"application/json" },
                body: JSON.stringify(reqData)
             })
            .then(response =>
                    { if( response.ok ) return response.json()
                        throw Error('Error posting data')
                    })
            .then(data => console.log(data))
            .catch(error => console.Error(error))
    })