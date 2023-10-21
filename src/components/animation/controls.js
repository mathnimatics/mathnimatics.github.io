export default (arr) => {
  let index = -1
  const controls = document.getElementById("controls")
  const prev = document.getElementById("prev"),
    next = document.getElementById("next")
  const captions = document.getElementById("captions")

  next.addEventListener("click", nextStep)
  prev.addEventListener("click", prevStep)

  const anims = []
  const stop = () => anims.forEach((a) => a.pause())

  function nextStep() {
    stop()
    const curr = arr[++index]
    captions.innerText = curr.text
    controls.dataset.step = `Step ${index + 1}/${arr.length}`

    const anim = curr.play()
    if (Array.isArray(anim)) anims.push(...anim)
    else anims.push(anim)

    disableManager()
  }
  function prevStep() {
    stop()
    arr[index].undo()
    const curr = arr[--index]
    captions.innerText = curr.text
    controls.dataset.step = `Step ${index + 1}/${arr.length}`
    const anim = curr.play()
    if (Array.isArray(anim)) anims.push(...anim)
    else anims.push(anim)

    disableManager()
  }
  function disableManager() {
    next.disabled = index + 1 === arr.length
    prev.disabled = index === 0
  }

  nextStep()
}
