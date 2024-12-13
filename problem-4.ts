type Circle = {
  shape: "circle";
  radius: number;
};
type Rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};
type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape) => {
  if (shape.shape === "circle") {
    return (Math.PI * shape.radius * shape.radius).toFixed(2);
  }
};

const circleShape: Circle = { shape: "circle", radius: 5 };
console.log(calculateShapeArea(circleShape));
