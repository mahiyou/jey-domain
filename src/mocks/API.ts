export function call<T extends Function>(fn: T, args: Parameters<T>): Promise<ReturnType<T>> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.7) {
                reject(new Error());
                return;
            }
            resolve(fn(...args));
        }, 2000);
    });
} 