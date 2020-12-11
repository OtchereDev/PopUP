const startEvent = document.querySelector('.start')
const popup_wrapper = document.querySelector('.pop_up_wrapper')
const close = document.querySelector('.close')
const popup_box = document.querySelector('.popup_box')

startEvent.addEventListener('click', () => {
    popup_wrapper.style.display = 'flex';
})

close.addEventListener('click', () => {
    popup_wrapper.style.display = 'none';
})

popup_wrapper.addEventListener('click', () => {
    popup_wrapper.style.display = 'none';
})

popup_box.addEventListener('click', (e) => {
    e.stopPropagation();
})