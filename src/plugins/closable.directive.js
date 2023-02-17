const closableDirective = onMount => ({
  mounted (el, binding) {
    el.handleClickOutside = (event) => {
      event.stopPropagation()
      const { handler, excluded } = binding.value
      let clickedOnExcludedEl = false
      if (excluded) {
        excluded.forEach((refName) => {
          if (!clickedOnExcludedEl) {
            const excludedEl = document.getElementsByClassName(refName)[0]
            clickedOnExcludedEl = excludedEl.contains(event.target)
          }
        })
      }
      if (!el.contains(event.target) && !clickedOnExcludedEl) {
        handler(event)
      }
    }
    if (onMount) {
      document.addEventListener('mouseup', el.handleClickOutside)
    }
  },
  updated (el) {
    if (!onMount) {
      if (el.style.display !== 'none') {
        document.addEventListener('mouseup', el.handleClickOutside)
      } else {
        document.removeEventListener('mouseup', el.handleClickOutside)
      }
    }
  },
  unmounted (el) {
    document.removeEventListener('mouseup', el.handleClickOutside)
  }
})

export default closableDirective
