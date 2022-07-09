//toggle style switcher
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler')
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open')//thêm class open
})
//hide style switcher scroll
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open')//xóa class open khi scroll
    }
})
//theme color
const alternateStyle = document.querySelectorAll('.alternate-style')
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled')
        } else {
            style.setAttribute('disabled', 'true')
        }
    })
}
//night and dark mode
const dayNight = document.querySelector('.day-night')
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
})
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun')
    } else {
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})
//typing animation
//aside
const nav = document.querySelector('.aside__nav-list'),
    navlist = nav.querySelectorAll('li'),
    totalNavlist = navlist.length,
    allSelection = document.querySelectorAll('.section'),
    totalSection = allSelection.length;
// const a = navlist[i].querySelector('a')
for (i = 0; i < totalNavlist; i++) {
    // console.log(navlist[i])//lấy ra tất cả thẻ li
    const a = navlist[i].querySelector('a')
    // console.log(a)lấy ra tất cả thẻ a
    a.addEventListener('click', function () {
        // console.log(this)//click thằng nào lấy ra thằng ý
        for (j = 0; j < totalNavlist; j++) {
            navlist[j].querySelector('a').classList.remove('active')
        }
        this.classList.add('active')
        aside.classList.remove('open');
        overlay.classList.remove('open')
        toggleBtn.classList.remove('open')
        showSection(this)
    })
    // a.addEventListener('scroll', function activeScroll() {
    //     let len = sec.length;
    //     while (--len && window.scrollY + 97 < sec[len].offsetTop) { }
    //     navlist.forEach(ltx => ltx.classList.remove('active'))
    //     navlist[len].classList.add('active')
    //     window.addEventListener('scroll', activeScroll)
    // })
    // activeScroll()
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSelection[i].classList.remove('active')
    }
    console.log(element.getAttribute('href').split('#'))//lấy ra href
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active')//thêm class active
}
//
const toggleBtn = document.querySelector('.toggler'),
    overlay = document.querySelector('.overlay'),
    aside = document.querySelector('.aside');
overlay.addEventListener('click', () => {
    aside.classList.remove('open');
    overlay.classList.remove('open')
    toggleBtn.classList.remove('open')
    for (i = 0; i < totalSection; i++) {
        allSelection[i].classList.toggle('open')
    }
})
toggleBtn.addEventListener('click', () => {
    asideSectionToggle();
})
function asideSectionToggle() {
    aside.classList.toggle('open');
    overlay.classList.toggle('open')
    toggleBtn.classList.toggle('open')
    for (i = 0; i < totalSection; i++) {
        allSelection[i].classList.toggle('open')
    }

}
const sec = document.querySelectorAll('section')
console.log(sec)
function activeScroll() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) { }
    navlist.forEach(ltx => ltx.classList.remove('active-li'))
    navlist[len].classList.add('active-li')
}
activeScroll()
window.addEventListener('scroll', activeScroll)