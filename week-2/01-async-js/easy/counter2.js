function counter() {
  let count = 0;
  setTimeout(async () => {
    await count++;
    console.log(count);
  }, 5000);
}
counter();
