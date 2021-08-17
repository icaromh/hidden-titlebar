const isWin = process.platform === "win32";

function createButton(className, content){
  const el = document.createElement('button')
  el.className.add(className)
  el.innerText = content
  return el
}

window.addEventListener('DOMContentLoaded', () => {
  const $titlebar = document.querySelector('.title-bar');

  const wrapper = document.createElement('div')
  wrapper.className.add('windows-controls')
  $titlebar.appendChild(wrapper)

  $titlebar.appendChild(createButton('minimize', '-'))
  $titlebar.appendChild(createButton('maximize', '+'))
  $titlebar.appendChild(createButton('close', 'x'))
})