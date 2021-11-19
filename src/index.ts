declare global {
  interface Window {
    // eslint-disable-next-line
    g: any;
  }
}

window.g = {};
export {};
