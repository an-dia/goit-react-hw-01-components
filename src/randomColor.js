const random = () => Math.floor(255 * Math.random());

export default function randomColor() {
  return `rgb(${random()}, ${random()}, ${random()})`;
}
