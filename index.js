var supportsPassive = false

if (
  window &&
  typeof window.addEventListener === 'function' &&
  typeof Object.defineProperty === 'function'
) {
  var options = Object.defineProperty({}, 'passive', {
    get: function () {
      supportsPassive = true
    }
  })

  window.addEventListener('_', null, options)
}

module.exports = supportsPassive
