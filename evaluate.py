import os

import numpy as np
from keras.models import load_model
from keras.utils import np_utils

PATH = "/tmp/draw"

groups = [group for group in os.listdir(PATH)]

X = []
y = []

for ix, group in enumerate(groups):
    path = os.path.join(PATH, group)
    for i in os.listdir(path):
        X.append(np.loadtxt(os.path.join(path, i), dtype=int))
        y.append(int(i))


model = load_model("/tmp/model.h5")

X = np.array(X)
num_pixels = X.shape[1] * X.shape[2]
X = X.reshape(X.shape[0], num_pixels)
y = np_utils.to_categorical(np.array(y))

scores = model.evaluate(X, y)

print(scores)