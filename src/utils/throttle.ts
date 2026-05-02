export const throttle = (fn: Function, delay: number) => {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: any[]) => {
    const now = Date.now();

    // If enough time has passed, execute immediately
    if (now - lastCall >= delay) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      fn(...args);
      lastCall = now;
    }
    // Otherwise, schedule for later if not already scheduled
    else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        fn(...args);
        lastCall = Date.now();
        timeoutId = null;
      }, delay);
    }
  };
};

export default throttle;
