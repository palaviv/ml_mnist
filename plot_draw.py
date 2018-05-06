import numpy as np
import matplotlib.pyplot as plt
import os

PATH = "/tmp/draw"

groups = [group for group in os.listdir(PATH)]

for ix, group in enumerate(groups):
    path = os.path.join(PATH, group)
    for i in os.listdir(path):
        plt.subplot(len(groups), 10, ix * 10 + int(i) + 1)
        if i == '5':
            plt.title(group)
        X = np.loadtxt(os.path.join(path, i), dtype=int)
        plt.imshow(X, cmap=plt.get_cmap('gray'))

# show the plot
plt.show()