// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SimpleQueue<T> {
    private items: T[] = [];
    enqueue(item: T) {
        this.items.push(item);
    }
    dequeue(): T | undefined {
        return this.items.shift();
    }
    peek(): T | undefined {
        return this.items[0];
    }
    get size(): number {
        return this.items.length;
    }
    get isEmpty(): boolean {
        return this.items.length === 0;
    }
}

export class Queue<T> {
    private items: T[] = [];
    private head: number = 0;

    enqueue(newItems: T[]): void {
        for (const item of newItems) {
            this.items.push(item);
        }
    }

    dequeue(): T | undefined {
        if (this.head >= this.items.length) return undefined;

        const item = this.items[this.head];
        this.head++;

        // Compact occasionally to avoid unbounded memory growth
        if (this.head > 32 && this.head * 2 >= this.items.length) {
            this.items = this.items.slice(this.head);
            this.head = 0;
        }
        return item;
    }

    peek(): T | undefined {
        return this.head < this.items.length ? this.items[this.head] : undefined;
    }

    get size(): number {
        return this.items.length - this.head;
    }

    get isEmpty(): boolean {
        return this.size === 0;
    }

    *[Symbol.iterator](): Iterator<T> {
        for (let i = this.head; i < this.items.length; i++) {
            const item = this.items[i];
            if (item) {
                yield item;
            }
        }
    }
}





