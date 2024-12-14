"use strict";
const calculateShapeArea = (shape) => {
    if (shape.shape === "circle") {
        return (Math.PI * shape.radius * shape.radius).toFixed(2);
    }
    if (shape.shape === "rectangle") {
        return (shape.height * shape.width).toFixed(2);
    }
};
const circleShape = { shape: "circle", radius: 5 };
const rectangleShape = { shape: "rectangle", height: 4, width: 4 };
console.log(calculateShapeArea(circleShape));
console.log(calculateShapeArea(rectangleShape));
