function rotate(fromX: number, fromY: number, offsetX: number, offsetY: number, rotation: number): number[] {
    const x = offsetX - fromX;
    const y = offsetY - fromY;
    const radians = rotation / 180 * Math.PI;
    const xPrime = x * Math.cos(radians) + y * Math.sin(radians);
    const yPrime = y * Math.cos(radians) + x * Math.sin(radians);
    return [xPrime + fromX, yPrime + fromY];
}

export {
    rotate
};
