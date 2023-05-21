class Application {
  start() {
    console.log('Hello world');
  }
}

window.addEventListener('load', () => {
  const app = new Application();
  app.start();
});
