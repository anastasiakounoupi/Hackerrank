function staircase(n) {
  let spaces = ''
  let stairs = ''

  for (let i=1; i<=n; i++) {
    spaces = ' '.repeat(n-i)
    stairs = '#'.repeat(i)

    console.log(spaces.concat(stairs))
  }
}

staircase(6)