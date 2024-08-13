function debouncer(func, ms) {
  let timeout
    return function(arguments) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {func.apply(this,arguments)},ms);
    }
}