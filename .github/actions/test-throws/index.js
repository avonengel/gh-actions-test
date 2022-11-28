async function run() {
    throw new Error("this is an error thrown from index.js")
}

if (require.main === module) {
  run();
}
