
async function adviceAPI(param) {
  
    const api = await fetch('https://api.adviceslip.com/advice')
    const resp = await api.json()
    return resp.slip

}
const adviceId = document.querySelector('h1')
const adviceSlip = document.querySelector('p')
const button = document.querySelector('button')  

button.addEventListener('click', async () => {
  const {zero, zero2, id, advice} = await adviceAPI()
  adviceId.innerHTML = `ADVICE #${id}`
  adviceSlip.innerHTML = `"${advice}"`
})
async function showAdvice(htmlId, htmlAdvice){
  const {adviceId, adviceBody, id, advice} = await adviceAPI()
  htmlId.innerHTML = `ADVICE #${id}`
  htmlAdvice.innerHTML = `"${advice}"`
}


showAdvice(adviceId,adviceSlip)