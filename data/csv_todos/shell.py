import os
import csv
import fileinput
from subprocess import call

dirs = os.listdir(os.getcwd())

for f in dirs:
	if(f=='Viznet_Cease.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "viznet_id,order_issued_date,Schedule Description,circuit_action_type,Handled By,Status,customer_name,Order ID,Circuit Status,m6viznet_service_id,bandwidth,site_A,B Customer,site_B,Column O,service_type,Type Of CCT,Carrier,crfs_date,Schedule Opened By,Opened By,Schedule Update Date Time,Warning,View CCT Details,Schedule Pending Since,Schedule Finished Date,Schedule Finished User,Schedule Closure date,Schedule Local loop Ready,Order/Solution Vetted,UNFR,BSO Name,Customer Manage,BSO Circuit ID,Interface Required,PARENT OFG,OWNER OFG,TAT (hrs),TAT (hrs) Till Finish,A End Address,B End Address,Program Manager,Additional entry / information"
			else:
				print line.rstrip()
	