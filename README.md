# Chaikin
Smooth a curve using Chaikin's curve smoothing algorithm.

There is only one function:

    chaikin(curve, [iterations=1, closed=false]);

The basic usage is:
```
chaikin([[0, 0], [1, 2]]);
> [ [ 0, 0 ], [ 0.25, 0.5 ], [ 0.75, 1.5 ], [ 1, 2 ] ]
```
Curve is an array of arrays of `[x, y]` points. It is not modified.

The iterations parameter controls how many points are in the output curve, and so how smooth it is.
```
c.chaikin([[0,0],[1,2]], 2);
> [ [ 0, 0 ],
  [ 0.0625, 0.125 ],
  [ 0.1875, 0.375 ],
  [ 0.375, 0.75 ],
  [ 0.625, 1.25 ],
  [ 0.8125, 1.625 ],
  [ 0.9375, 1.875 ],
  [ 1, 2 ] ]
  ```

The closed parameter makes the output a closed polygon.