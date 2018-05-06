import numpy as np
import matplotlib.pyplot as plt
import os

PATH = "/tmp/draw"

groups = [group for group in os.listdir(PATH)]

for ix, group in enumerate(groups):
    path = os.path.join(PATH, group)
    for i in os.listdir(path):
        plt.subplot(len(groups), 10, ix * 10 + int(i) + 1)
        if i == '0':
            plt.ylabel(group)
        X = np.loadtxt(os.path.join(path, i), dtype=int)
        fig = plt.imshow(X, cmap=plt.get_cmap('gray'))
        fig.axes.get_xaxis().set_ticks([])
        fig.axes.get_yaxis().set_ticks([])

# show the plot
plt.show()