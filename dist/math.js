"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotate = rotate;
function rotate(fromX, fromY, offsetX, offsetY, rotation) {
    const x = offsetX - fromX;
    const y = offsetY - fromY;
    const radians = rotation / 180 * Math.PI;
    const xPrime = x * Math.cos(radians) + y * Math.sin(radians);
    const yPrime = y * Math.cos(radians) + x * Math.sin(radians);
    return [xPrime + fromX, yPrime + fromY];
}
//# sourceMappingURL=math.js.map