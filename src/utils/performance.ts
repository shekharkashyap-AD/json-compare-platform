export class PerformanceMonitor {
  private marks: Map<string, number> = new Map();

  mark(label: string) {
    this.marks.set(label, performance.now());
  }

  measure(label: string, startMark: string): number {
    const start = this.marks.get(startMark);
    if (!start) return 0;

    const duration = performance.now() - start;
    console.log(`⏱️  ${label}: ${duration.toFixed(2)}ms`);
    return duration;
  }

  clear() {
    this.marks.clear();
  }
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
