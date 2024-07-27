

document.querySelector('button').addEventListener('click',
    e => {
        fetch("https://apis.scrimba.com/bored/api/activity")
            .then(response => response.json())
            .then(data => {
                document.getElementById("activity-name").textContent = data.activity
            })
    })