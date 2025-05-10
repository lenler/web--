    class Point {
    constructor(x, y) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
    }

    equals(p) {
        return Math.abs(this.x - p.x) < 1e-6 && Math.abs(this.y - p.y) < 1e-6;
    }

    distance(p) {
        return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2));
    }
}

class Line {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    isPointOnLine(p) {
        const cross = (this.p2.x - this.p1.x) * (p.y - this.p1.y) - (this.p2.y - this.p1.y) * (p.x - this.p1.x);
        if (Math.abs(cross) > 1e-6) return false;
        const minX = Math.min(this.p1.x, this.p2.x);
        const maxX = Math.max(this.p1.x, this.p2.x);
        const minY = Math.min(this.p1.y, this.p2.y);
        const maxY = Math.max(this.p1.y, this.p2.y);
        return p.x >= minX - 1e-6 && p.x <= maxX + 1e-6 && p.y >= minY - 1e-6 && p.y <= maxY + 1e-6;
    }

    intersection(l) {
        const x1 = this.p1.x, y1 = this.p1.y;
        const x2 = this.p2.x, y2 = this.p2.y;
        const x3 = l.p1.x, y3 = l.p1.y;
        const x4 = l.p2.x, y4 = l.p2.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (Math.abs(den) < 1e-6) return null;

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
            return new Point(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
        }
        return null;
    }
}

function parseInput(input) {
    if (!/^[1-5]:(-?\d+\.?\d*,-?\d+\.?\d*)( -?\d+\.?\d*,-?\d+\.?\d*)*$/.test(input)) {
        return { error: "Wrong Format" };
    }

    const parts = input.split(':', 2);
    const option = parseInt(parts[0], 10);
    if (isNaN(option)) {
        return { error: "Wrong Format" };
    }

    const pointStrs = parts[1].split(' ');
    const points = [];
    for (const ps of pointStrs) {
        const coords = ps.split(',');
        if (coords.length !== 2) {
            return { error: "Wrong Format" };
        }
        const x = parseFloat(coords[0]);
        const y = parseFloat(coords[1]);
        if (isNaN(x) || isNaN(y)) {
            return { error: "Wrong Format" };
        }
        points.push(new Point(x, y));
    }

    let requiredPoints;
    switch (option) {
        case 1:
        case 2:
        case 3:
            requiredPoints = 4;
            break;
        case 4:
            requiredPoints = 6;
            break;
        case 5:
            requiredPoints = 5;
            break;
        default:
            return { error: "Wrong Format" };
    }

    if (points.length !== requiredPoints) {
        return { error: "wrong number of points" };
    }

    if (option === 1 || option === 2 || option === 3) {
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                if (points[i].equals(points[j])) {
                    return { error: "points coincide" };
                }
            }
        }
    }

    return { option, points };
}

function isQuadrilateral(points) {
    if (points.length !== 4) return false;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            if (points[i].equals(points[j])) {
                return false;
            }
        }
    }
    const area = calculateArea(points);
    return Math.abs(area) > 1e-6;
}

function isParallelogram(points) {
    if (!isQuadrilateral(points)) return false;
    const p1 = points[0];
    const p2 = points[1];
    const p3 = points[2];
    const p4 = points[3];
    const mid1x = (p1.x + p3.x) / 2;
    const mid1y = (p1.y + p3.y) / 2;
    const mid2x = (p2.x + p4.x) / 2;
    const mid2y = (p2.y + p4.y) / 2;
    return Math.abs(mid1x - mid2x) < 1e-6 && Math.abs(mid1y - mid2y) < 1e-6;
}

function isRhombus(points) {
    if (!isQuadrilateral(points)) return false;
    const d1 = points[0].distance(points[2]);
    const d2 = points[1].distance(points[3]);
    return Math.abs(d1 - d2) < 1e-6;
}

function isRectangle(points) {
    if (!isQuadrilateral(points)) return false;
    const p1 = points[0];
    const p2 = points[1];
    const p3 = points[2];
    const p4 = points[3];
    const d1 = Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    const d2 = Math.pow(p2.x - p3.x, 2) + Math.pow(p2.y - p3.y, 2);
    const d3 = Math.pow(p3.x - p4.x, 2) + Math.pow(p3.y - p4.y, 2);
    const d4 = Math.pow(p4.x - p1.x, 2) + Math.pow(p4.y - p1.y, 2);
    const diag1 = Math.pow(p1.x - p3.x, 2) + Math.pow(p1.y - p3.y, 2);
    const diag2 = Math.pow(p2.x - p4.x, 2) + Math.pow(p2.y - p4.y, 2);
    return Math.abs(d1 - d3) < 1e-6 && Math.abs(d2 - d4) < 1e-6 && Math.abs(diag1 - diag2) < 1e-6;
}

function isSquare(points) {
    return isRectangle(points) && isRhombus(points);
}

function isConvexQuadrilateral(points) {
    if (!isQuadrilateral(points)) return false;
    const n = points.length;
    let flag = 0;
    for (let i = 0; i < n; i++) {
        const p0 = points[i];
        const p1 = points[(i + 1) % n];
        const p2 = points[(i + 2) % n];
        const cross = (p1.x - p0.x) * (p2.y - p1.y) - (p1.y - p0.y) * (p2.x - p1.x);
        if (Math.abs(cross) < 1e-6) continue;
        if (cross < 0) {
            if (flag === 1) return false;
            flag = -1;
        } else {
            if (flag === -1) return false;
            flag = 1;
        }
    }
    return true;
}

function calculatePerimeter(points) {
    let perimeter = 0;
    for (let i = 0; i < points.length; i++) {
        perimeter += points[i].distance(points[(i + 1) % points.length]);
    }
    return perimeter;
}

function calculateArea(points) {
    let area = 0;
    const n = points.length;
    for (let i = 0; i < n; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % n];
        area += p1.x * p2.y - p2.x * p1.y;
    }
    return Math.abs(area) / 2;
}

function isQuadrilateralOrTriangle(points) {
    if (points.length !== 4 && points.length !== 3) return false;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            if (points[i].equals(points[j])) {
                return false;
            }
        }
    }
    const area = calculateArea(points);
    return Math.abs(area) > 1e-6;
}

function getEdges(points) {
    const edges = [];
    for (let i = 0; i < points.length; i++) {
        edges.push(new Line(points[i], points[(i + 1) % points.length]));
    }
    return edges;
}

function calculateAreaWithLine(points, line, p1, p2) {
    const polygon = [...points, p1, p2];
    polygon.sort((a, b) => {
        const angle1 = Math.atan2(a.y - line.p1.y, a.x - line.p1.x);
        const angle2 = Math.atan2(b.y - line.p1.y, b.x - line.p1.x);
        return angle1 - angle2;
    });
    return calculateArea(polygon);
}

function isPointInsideShape(p, shape) {
    let inside = false;
    const n = shape.length;
    for (let i = 0, j = n - 1; i < n; j = i++) {
        const pi = shape[i];
        const pj = shape[j];
        if (((pi.y > p.y) !== (pj.y > p.y)) &&
            (p.x < (pj.x - pi.x) * (p.y - pi.y) / (pj.y - pi.y) + pi.x)) {
            inside = !inside;
        }
    }
    return inside;
}

function isPointOnEdge(p, shape) {
    for (let i = 0; i < shape.length; i++) {
        const edge = new Line(shape[i], shape[(i + 1) % shape.length]);
        if (edge.isPointOnLine(p)) {
            return true;
        }
    }
    return false;
}

function handleOption1(points) {
    const isQuad = isQuadrilateral(points);
    const isPara = isParallelogram(points);
    console.log(isQuad + " " + isPara);
}

function handleOption2(points) {
    if (!isQuadrilateral(points)) {
        console.log("not a quadrilateral");
        return;
    }
    const isRhom = isRhombus(points);
    const isRect = isRectangle(points);
    const isSq = isSquare(points);
    console.log(isRhom + " " + isRect + " " + isSq);
}

function handleOption3(points) {
    if (!isQuadrilateral(points)) {
        console.log("not a quadrilateral");
        return;
    }
    const isConvex = isConvexQuadrilateral(points);
    const perimeter = calculatePerimeter(points);
    const area = calculateArea(points);
    console.log(isConvex + " " + perimeter.toFixed(3).replace(/\.?0+$/, "") + " " + area.toFixed(3).replace(/\.?0+$/, ""));
}

function handleOption4(points) {
    const lineP1 = points[0];
    const lineP2 = points[1];
    if (lineP1.equals(lineP2)) {
        console.log("points coincide");
        return;
    }
    const quadPoints = points.slice(2);
    if (!isQuadrilateralOrTriangle(quadPoints)) {
        console.log("not a quadrilateral or triangle");
        return;
    }
    const line = new Line(lineP1, lineP2);
    const edges = getEdges(quadPoints);
    const intersectionPoints = [];
    for (const edge of edges) {
        const intersection = line.intersection(edge);
        if (intersection) {
            let exists = false;
            for (const p of intersectionPoints) {
                if (p.equals(intersection)) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                intersectionPoints.push(intersection);
            }
        }
    }
    if (intersectionPoints.length === 0) {
        console.log(0);
    } else if (intersectionPoints.length === 1) {
        console.log(1);
    } else if (intersectionPoints.length === 2) {
        const area1 = calculateAreaWithLine(quadPoints, line, intersectionPoints[0], intersectionPoints[1]);
        const area2 = calculateArea(quadPoints) - area1;
        console.log(2 + " " + Math.min(area1, area2).toFixed(3).replace(/\.?0+$/, "") + " " + Math.max(area1, area2).toFixed(3).replace(/\.?0+$/, ""));
    }
}

function handleOption5(points) {
    const testPoint = points[0];
    const shapePoints = points.slice(1);
    if (!isQuadrilateralOrTriangle(shapePoints)) {
        console.log("not a quadrilateral or triangle");
        return;
    }
    const isInside = isPointInsideShape(testPoint, shapePoints);
    if (isPointOnEdge(testPoint, shapePoints)) {
        if (shapePoints.length === 4) {
            console.log("on the quadrilateral");
        } else {
            console.log("on the triangle");
        }
    } else if (isInside) {
        if (shapePoints.length === 4) {
            console.log("in the quadrilateral");
        } else {
            console.log("in the triangle");
        }
    } else {
        if (shapePoints.length === 4) {
            console.log("outof the quadrilateral");
        } else {
            console.log("outof the triangle");
        }
    }
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
    const parsed = parseInput(input);
    if (parsed.error) {
        console.log(parsed.error);
        return;
    }
    const { option, points } = parsed;
    switch (option) {
        case 1:
            handleOption1(points);
            break;
        case 2:
            handleOption2(points);
            break;
        case 3:
            handleOption3(points);
            break;
        case 4:
            handleOption4(points);
            break;
        case 5:
            handleOption5(points);
            break;
    }
}

if (require.main === module) {
    main();
}
+
6   `ASdCBNVXZ `