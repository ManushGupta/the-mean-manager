import os
import numpy as np

a = np.genfromtxt("names.txt", delimiter='/t', dtype = str)
for i in a:
	print '"'+i+'",'