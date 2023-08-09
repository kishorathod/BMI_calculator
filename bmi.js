const form1 = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form1.addEventListener('submit', function (e) {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  const finalStatement = document.querySelector('#finalStatement')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2)
    //show the result
    if (bmi < 18.6) {
      results.innerHTML = `<span> Your body mass index is = ${bmi} and you are Under Weight</span>`
      results.style.color = 'blue'
      results.style.fontSize = '24px'
    }
    if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span> Your body mass index is = ${bmi} and you are in Normal range</span>`
      results.style.color = 'blue'
      results.style.fontSize = '24px'
    }
    if (bmi > 24.9) {
      results.innerHTML = `<span> Your body mass index is = ${bmi} and you are Overweight</span>`
      results.style.color = 'blue'
      results.style.fontSize = '24px'
    }
  }
})
