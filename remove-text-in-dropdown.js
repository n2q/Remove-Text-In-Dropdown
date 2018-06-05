Array.from($('.product__variants')[0]).map(option => {
	option.innerText = option.innerText.indexOf('-') !== -1 ? option.innerText.substr(0, option.innerText.indexOf('-')) : option.innerText
});