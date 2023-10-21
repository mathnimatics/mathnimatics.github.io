export default arr => {
  let index = -1
  const canvas = document.getElementById("canvas")
  const controls = document.getElementById("controls")
  const prev = document.getElementById("prev"),
    next = document.getElementById("next")
  const captions = document.getElementById("captions")

  next.addEventListener("click", nextStep)
  prev.addEventListener("click", prevStep)
  window.addEventListener("keydown", e => {
    if (index !== arr.length - 1 && e.key === "ArrowRight") nextStep()
    else if (index !== 0 && e.key === "ArrowLeft") prevStep()
  })

  const state = []

  const stop = () =>
    anims.forEach(a =>
      Array.isArray(a) ? a.forEach(b => b.pause()) : a.pause()
    )

  let queue
  function nextStep() {
    if (typeof arr?.[index]?.timeout !== "undefined")
      clearTimeout(arr[index].timeout)

    const curr = arr[++index]
    captions.innerText = curr.text
    controls.dataset.step = `Step ${index + 1}/${arr.length}`

    if (typeof queue !== "undefined") state.push(queue)
    queue = canvas.innerHTML

    curr.play()

    disableManager()
  }
  function prevStep() {
    if (typeof arr?.[index]?.timeout !== "undefined")
      clearTimeout(arr[index].timeout)

    canvas.innerHTML = state.pop()
    queue = state.pop() ?? ""

    const curr = arr[--index]
    captions.innerText = curr.text
    controls.dataset.step = `Step ${index + 1}/${arr.length}`
    curr.play()

    disableManager()
  }
  function disableManager() {
    next.disabled = index + 1 === arr.length
    prev.disabled = index === 0
  }

  nextStep()
}
