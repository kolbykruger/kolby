// Linear Interpolation Functions
//const lerp = (x, y, a) => x * (1 - a) + y * a
const lerp = (a, b, n) => (1 - n) * a + n * b
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a))
const invlerp = (x, y, a) => clamp((a - x) / (y - x))
const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a))

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c

// Random number generator
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export { lerp, clamp, invlerp, range, map, getMousePos, getRandomNumber }
