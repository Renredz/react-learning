// A component is a function that returns JSX (HTML-like markup).
// Its name MUST start with a capital letter.
```tsx
function Greeting() {
  return <h1>Hello</h1>;
}

// Use it like an HTML tag:
<Greeting />

// Props = a component's inputs, like function arguments.
// Text props in quotes, anything else in { }.
type SquareProps = { value: string; size: number };
function Square({ value, size }: SquareProps) {
  return <button style={{ width: size }}>{value}</button>;
}
<Square value="X" size={40} />

// Rules that trip people up:
// - return ONE outer element; wrap siblings in <> ... </>
// - use className instead of class
// - { } runs JavaScript inside JSX (like Week 1's template strings)