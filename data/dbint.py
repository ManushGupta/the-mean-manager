import os
import csv
import fileinput

dirs = os.listdir(os.getcwd()+'/csv')

for f in dirs:
	csv=open(f,'r')
	print csv.readline()