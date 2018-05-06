import numpy as np
import matplotlib.pyplot as plt
from keras.models import load_model
import os

PATH = "/tmp/draw"

model = load_model("/tmp/model.h5")

groups = [group for group in os.listdir(PATH)]

for ix, group in enumerate(groups):
    path = os.path.join(PATH, group)
    for i in os.listdir(path):
        plt.subplot(len(groups), 10, ix * 10 + int(i) + 1)
        X = np.loadtxt(os.path.join(path, i), dtype=int)
        plt.imshow(X, cmap=plt.get_cmap('gray'))
        X = np.array([X])
        num_pixels = X.shape[1] * X.shape[2]
        X = X.reshape(1, num_pixels)
        y = np.argmax(model.predict(X)[0])
        plt.title(str(y))

# show the plot
plt.show()