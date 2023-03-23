const notifications = document.querySelectorAll('.notifications__box')
const markAsReadBtn = document.querySelector('.notifications__heading-btn')
const activeNumberInfo = document.querySelector('.notifications__heading-info')

const clearAll = () => {
	notifications.forEach(notifi => {
		const infoDott = notifi.querySelector('i')
		infoDott.classList.remove('fa-circle')
		notifi.classList.remove('active')
	})
	activeNumberInfo.textContent = '0'
}

markAsReadBtn.addEventListener('click', clearAll)
