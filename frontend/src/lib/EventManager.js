export default class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  on(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  emit(event, payload) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event).forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners[event];

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter((listener) => listener !== listenerToRemove);

    this.listeners[event] = filteredListeners;
  }
}

const toastEventManager = new EventManager();

toastEventManager.on('addtoast', (payload) => {
  console.log('addToast 1', payload);
});
toastEventManager.on('addtoast', (payload) => {
  console.log('addToast 2', payload);
});

toastEventManager.emit('addtoast', { type: 'danger' });
