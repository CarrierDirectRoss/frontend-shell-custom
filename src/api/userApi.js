export function fakeFetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, { name: 'Fake User' })
  })
}
