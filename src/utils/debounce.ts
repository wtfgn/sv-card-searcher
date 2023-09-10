interface DebounceOptions {
  leading?: boolean;
  trailing?: boolean;
}

export const debounce = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  wait: number,
  options: DebounceOptions = {},
) => {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const { leading = false, trailing = true } = options;

  // Arrow function does not have its own this, the this value of the enclosing lexical scope is used.
  return function (this: unknown, ...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer);
    }

    if (leading && !timer) {
      fn.apply(this, args);
    }

    timer = setTimeout(() => {
      if (trailing) {
        fn.apply(this, args);
      }
      timer = undefined;
    }, wait);
  };
};
