function addscore(id, score)
{
    let scoreEle = document.getElementById(id);

    scoreEle.textContent = Number(scoreEle.textContent) + Number(score)
}

function startnewgame()
{
    let homeScore = document.getElementById("home-score");
    let guestScore = document.getElementById("guest-score");

    homeScore.textContent = 0;
    guestScore.textContent = 0;
}