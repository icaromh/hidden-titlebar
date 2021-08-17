const isWin = process.platform === "win32";

function createButton(className, content) {
  const el = document.createElement('button')
  el.className = `${className}`
  el.innerText = content
  return el
}

window.addEventListener('DOMContentLoaded', () => {
  const $titlebar = document.querySelector('.title-bar');

  const $wrapper = document.createElement('div')
  $wrapper.className = 'windows-controls'
  $titlebar.appendChild($wrapper)

  $wrapper.appendChild(createButton('minimize', '-'))
  $wrapper.appendChild(createButton('maximize', '+'))
  $wrapper.appendChild(createButton('close', 'x'))
})

window.addEventListener('DOMContentLoaded', () => {
  window.document.body.classList.add('is-desktop')
  window.document.body.classList.add(isWin ? 'windows' : 'macos')
})