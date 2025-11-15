// global.d.ts
import 'nativewind/types';

// optional fallback in global.d.ts
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      className?: string;
    }
  }
}
export {};

