function allFormatsOfDate({day, month, year}) {
	return `${month}-${day}-${year} ${month}/${day}/${year} ${day}-${month}-${year} ${day}/${month}/${year}`
}

const date = { 
	day: 28,
	month: 12,
	year: 2022
}

const result = allFormatsOfDate(date)
console.log(result)
// 12-28-2022 
// 12/28/2022
// 28-12-2022
// 28/12/2022