import numpy as np
import matplotlib.pyplot as plt
from keras.models import load_model
import os

DRAW_PATH = "/tmp/draw"

MODEL_PATH = "/tmp/models"

models = {model: load_model(os.path.join(MODEL_PATH, model)) for model in os.listdir(MODEL_PATH)}

groups = [group for group in os.listdir(DRAW_PATH)]

for ix, group in enumerate(groups):
    path = os.path.join(DRAW_PATH, group)
    for i in os.listdir(path):
        plt.subplot(len(groups), 10, ix * 10 + int(i) + 1)
        X = np.loadtxt(os.path.join(path, i), dtype=int)
        plt.imshow(X, cmap=plt.get_cmap('gray'))
        X = np.array([X])
        X = X.reshape(1, 28, 28, 1)
        res = []
        for model in models:
            y = np.argmax(models[model].predict(X)[0])
            res.append(model + ":" + str(y))
        plt.title("\n".join(res), fontsize=8)

# show the plot
plt.show()