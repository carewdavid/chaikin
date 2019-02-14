function cut(start, end, ratio){
    const r1 = [start[0] * (1 - ratio) + end[0] * ratio, start[1] * (1 - ratio) + end[1] * ratio];
    const r2 = [start[0] * ratio + end[0] * (1 -ratio), start[1] * ratio + end[1] * (1 - ratio)];
    return [r1, r2];
}

function chaikin(curve, ratio=0.25, iterations=1, closed=false){
    if(ratio > 0.5){
        ratio = (1 - ratio);
    }

    for(let i = 0; i < iterations; i++){
        let refined = [];
        refined.push(curve[0]);
        for(let j = 1; j < curve.length; j++){
            refined.concat(cut(curve[j - 1], curve[j], ratio));
        }
        if(closed){
            refined.concat(cut(curve[curve.length - 1], curve[0]));
        }
        curve = refined;
    }
    return curve;
}
