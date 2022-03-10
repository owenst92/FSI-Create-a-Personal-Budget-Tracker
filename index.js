let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
    weeklyExpenses = weeklyExpenses + answer
}
console.log(answer)

for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[0]))
    monthlyExpenses = monthlyExpenses + answer
}
console.log(answer)

for (let i = 0; i < annualExpenseQuestions.lenght; i++) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[0]))
    annualExpenses = annualExpenses + answer
}
console.log(answer)