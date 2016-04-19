import os
import csv
import fileinput
from subprocess import call

dirs = os.listdir(os.getcwd())

for f in dirs:
	if(f=='sdnwnoc.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "order_id,1,2,3,process_type,5,plan_released_by,7,task_name,9,10,order_issued_date,11,12,13"
			else:
				print line.rstrip()
	
for f in dirs:
	if(f=='sdnwnoc.csv'):
		call(["mongoimport", "--db" , "sdnwnocs", "--collection" ,"sdnwnocs","--type", "csv", "--file", f, "--headerline"])		
	elif(f=='BPM_NCCM-table.csv'):
		call(["mongoimport", "--db" , "sdnwnocs", "--collection" ,"sdnwnocs","--type", "csv", "--file", f, "--headerline"])
