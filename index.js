const menu = document.querySelectorAll('.box--header__nav a')
const daily = document.querySelector('.daily')
const weekly = document.querySelector('.weekly')
const monthly = document.querySelector('.monthly')
let workTime = document.querySelector('.box--work .box__inside__info__time span')
let workTimeLast = document.querySelector('.box--work .box__inside__last__time span')
let playTime = document.querySelector('.box--play .box__inside__info__time span')
let playTimeLast = document.querySelector('.box--play .box__inside__last__time span')
let studyTime = document.querySelector('.box--study .box__inside__info__time span')
let studyTimeLast = document.querySelector('.box--study .box__inside__last__time span')
let exerciseTime = document.querySelector('.box--exercise .box__inside__info__time span')
let exerciseTimeLast = document.querySelector('.box--exercise .box__inside__last__time span')
let socialTime = document.querySelector('.box--social .box__inside__info__time span')
let socialTimeLast = document.querySelector('.box--social .box__inside__last__time span')
let selfTime = document.querySelector('.box--self .box__inside__info__time span')
let selfTimeLast = document.querySelector('.box--self .box__inside__last__time span')

menu.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        for (let item of menu) {
            item.classList.remove('active')
        }
        item.classList.add('active')
    })
})

fetch('data.json')
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        daily.addEventListener('click', () => {
            workTime.textContent = response[0].timeframes.daily.current
            workTimeLast.textContent = response[0].timeframes.daily.previous
            playTime.textContent = response[1].timeframes.daily.current
            playTimeLast.textContent = response[1].timeframes.daily.previous
            studyTime.textContent = response[2].timeframes.daily.current
            studyTimeLast.textContent = response[2].timeframes.daily.previous
            exerciseTime.textContent = response[3].timeframes.daily.current
            exerciseTimeLast.textContent = response[3].timeframes.daily.previous
            socialTime.textContent = response[4].timeframes.daily.current
            socialTimeLast.textContent = response[4].timeframes.daily.previous
            selfTime.textContent = response[5].timeframes.daily.current
            selfTimeLast.textContent = response[5].timeframes.daily.previous
        })
        weekly.addEventListener('click', () => {
            workTime.textContent = response[0].timeframes.weekly.current
            workTimeLast.textContent = response[0].timeframes.weekly.previous
            playTime.textContent = response[1].timeframes.weekly.current
            playTimeLast.textContent = response[1].timeframes.weekly.previous
            studyTime.textContent = response[2].timeframes.weekly.current
            studyTimeLast.textContent = response[2].timeframes.weekly.previous
            exerciseTime.textContent = response[3].timeframes.weekly.current
            exerciseTimeLast.textContent = response[3].timeframes.weekly.previous
            socialTime.textContent = response[4].timeframes.weekly.current
            socialTimeLast.textContent = response[4].timeframes.weekly.previous
            selfTime.textContent = response[5].timeframes.weekly.current
            selfTimeLast.textContent = response[5].timeframes.weekly.previous
        })
        monthly.addEventListener('click', () => {
            workTime.textContent = response[0].timeframes.monthly.current
            workTimeLast.textContent = response[0].timeframes.monthly.previous
            playTime.textContent = response[1].timeframes.monthly.current
            playTimeLast.textContent = response[1].timeframes.monthly.previous
            studyTime.textContent = response[2].timeframes.monthly.current
            studyTimeLast.textContent = response[2].timeframes.monthly.previous
            exerciseTime.textContent = response[3].timeframes.monthly.current
            exerciseTimeLast.textContent = response[3].timeframes.monthly.previous
            socialTime.textContent = response[4].timeframes.monthly.current
            socialTimeLast.textContent = response[4].timeframes.monthly.previous
            selfTime.textContent = response[5].timeframes.monthly.current
            selfTimeLast.textContent = response[5].timeframes.monthly.previous
        })
    })

