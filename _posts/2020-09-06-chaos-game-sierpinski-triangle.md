---
layout: post
title: "Chaos game - Sierpiński triangle"
tags: sketch
img: ../assets/images/chaos-game-sierpinski-triangle.png
---

- Tools: Python
- Source code: [https://github.com/vec2pt/py-sketches](https://github.com/vec2pt/py-sketches)
- Inspirations:
    - [Chaos Game - Numberphile](https://www.youtube.com/watch?v=kbKtFN71Lfs)

```python
import matplotlib
import matplotlib.pyplot as plt
import numpy as np

matplotlib.use("TkAgg")


def sierpinski_triangle(num=3, loops=3000, random_corners=False):
    if random_corners:
        corners = np.random.rand(num, 2)
    else:
        angles = np.arange(0, np.pi * 2, np.pi * 2 / num)
        corners = np.transpose([np.sin(angles), np.cos(angles)])

    points = np.zeros((loops, 2))
    points[0] = np.random.rand(2)
    for z in range(loops - 1):
        points[z + 1] = (points[z] + corners[np.random.choice(num)]) / 2

    return points


if __name__ == "__main__":
    points = sierpinski_triangle()
    plt.scatter(*np.transpose(points), c="k", s=2)
    plt.show()
```
