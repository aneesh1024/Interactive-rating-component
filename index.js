const rateArr = document.getElementsByClassName('rateBtn')
const thanksCard = document.getElementById('thank')
const rate = document.getElementById('rate')
const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', () => {
    for (let elem = 0; elem < rateArr.length; elem++) {
        if (document.querySelector(`#num div #rate${elem + 1}`).checked === true) {
            rate.innerHTML = `${elem + 1}`
            thanksCard.style.display = 'flex'
        }
    }
})
