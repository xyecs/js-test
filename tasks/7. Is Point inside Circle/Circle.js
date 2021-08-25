import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here

      // distance between two points
      let distance = Math.sqrt((Point.x - center.x)**2 + (Point.y - center.y)**2);

      // true if distance between two points is less or equal to radius
      return distance <= radius;
    }
  }
}
