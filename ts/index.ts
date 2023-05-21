import { EventListener } from './EventListener';

class Application {
  private readonly eventListener = new EventListener();

  start() {
    const createForm = document.getElementById('createForm') as HTMLElement;

    this.eventListener.add(
      'submit-handler',
      'submit',
      createForm,
      this.handleSubmit
    );
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    console.log('submit');
  }
}

window.addEventListener('load', () => {
  const app = new Application();
  app.start();
});
