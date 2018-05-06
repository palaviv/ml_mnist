#!/usr/bin/env python3
"""
CGI script that accepts image urls and feeds them into a ML classifier. Results
are returned in JSON format. 
"""
import traceback
import io
import json
import sys
import os
import re
import base64
from PIL import Image
import numpy as np

# Default output
res = {"result": 0,
       "error": ''}

try:
    # Get post data
    if os.environ["REQUEST_METHOD"] == "POST":
        data = sys.stdin.read(int(os.environ["CONTENT_LENGTH"]))

        group = re.search(r'group,(.*),img0,', data).group(1)

        path = os.path.join("/tmp/draw", group)
        os.makedirs(path, exist_ok=True)

        for i in range(2):
            img_str = re.search('img{},data:image/png;base64,(.*),img{}'.format(i, i+1), data).group(1)
            image_bytes = io.BytesIO(base64.b64decode(img_str))
            im = Image.open(image_bytes)
            arr = np.array(im)[:,:,0]
            # Normalize and invert pixel values
            arr = 255 - arr
            np.savetxt(os.path.join(path, str(i)), arr, fmt='%d')


        # Return label data
        res['result'] = 1

except Exception as e:
    # Return error data
    res['error'] = str(e)
    print("Test", str(e), traceback.format_exc(), file=sys.stderr)

# Print JSON response
print("Content-type: application/json")
print("") 
print(json.dumps(res))


