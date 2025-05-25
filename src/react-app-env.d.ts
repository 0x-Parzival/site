/// <reference types="react-scripts" />

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

// Additional type definitions to fix TypeScript errors
declare module '@heroicons/react/24/outline';

// Extend Array prototype
interface Array<T> {
  slice(start?: number, end?: number): Array<T>;
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
  length: number;
}

// Extend String prototype
interface String {
  toUpperCase(): string;
  toLowerCase(): string;
  includes(searchString: string): boolean;
}

// Global browser objects
declare var document: Document & {
  getElementById(id: string): HTMLElement | null;
};

declare var window: Window & {
  document: Document & {
    documentElement: HTMLElement & {
      classList: {
        add(className: string): void;
        remove(className: string): void;
      }
    }
  };
  matchMedia(query: string): { matches: boolean };
};

declare var localStorage: {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
};

declare class Error {
  constructor(message?: string);
  message: string;
  name: string;
  stack?: string;
}

// DOM types
declare interface Node {
  contains(other: Node | null): boolean;
}

declare interface HTMLElement {
  style: {
    display: string;
    [key: string]: any;
  };
}

declare interface HTMLDivElement extends HTMLElement {
  contains(other: Node | null): boolean;
}

interface HTMLInputElement extends HTMLElement {
  name: string;
  value: string;
  style: {
    display: string;
  };
}

interface HTMLTextAreaElement extends HTMLElement {
  name: string;
  value: string;
  style: {
    display: string;
  };
}

interface HTMLSelectElement extends HTMLElement {
  name: string;
  value: string;
  style: {
    display: string;
  };
}
