const btnArr = document.getElementsByClassName('rateBtn')
const thanksCard = document.getElementById('thank')
const rate = document.getElementById('rate')

for (let elem = 0; elem < btnArr.length; elem++) {
    btnArr[elem].addEventListener('click', () => {
        thanksCard.style.display = 'flex'
        rate.innerHTML = `${elem + 1}`
    })
}