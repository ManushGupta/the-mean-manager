import os
import csv
import fileinput
from subprocess import call

dirs = os.listdir(os.getcwd())

for f in dirs:
	if(f=='Cramer.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "SrNo,nims_id,CRAMMER_NAME,circuit_action_type,tiger_id,customer_name,service_type,VIZNET_ID_,provisioner_name,order_issued_date"
			else:
				print line.rstrip()	

	elif(f=='Viznet_Cease.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "viznet_id,order_issued_date,Schedule Description,circuit_action_type,Handled By,Status,customer_name,Order ID,Circuit Status,m6viznet_service_id,bandwidth,site_A,B Customer,site_B,Column O,service_type,Type Of CCT,Carrier,crfs_date,Schedule Opened By,Opened By,Schedule Update Date Time,Warning,View CCT Details,Schedule Pending Since,Schedule Finished Date,Schedule Finished User,Schedule Closure date,Schedule Local loop Ready,Order/Solution Vetted,UNFR,BSO Name,Customer Manage,BSO Circuit ID,Interface Required,PARENT OFG,OWNER OFG,TAT (hrs),TAT (hrs) Till Finish,A End Address,B End Address,Program Manager,Additional entry / information"
			else:
				print line.rstrip()
	elif(f=='Viznet_Change_BSO.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "viznet_id,order_issued_date,Schedule Description,circuit_action_type,Handled By,Status,customer_name,Order ID,Circuit Status,m6viznet_service_id,bandwidth,site_A,B Customer,site_B,Column O,service_type,Type Of CCT,Carrier,crfs_date,Schedule Opened By,Opened By,Schedule Update Date Time,Warning,View CCT Details,Schedule Pending Since,Schedule Finished Date,Schedule Finished User,Schedule Closure date,Schedule Local loop Ready,Order/Solution Vetted,UNFR,BSO Name,Customer Manage,BSO Circuit ID,Interface Required,PARENT OFG,OWNER OFG,TAT (hrs),TAT (hrs) Till Finish,A End Address,B End Address,Program Manager,Additional entry / information"
			else:
				print line.rstrip()
	elif(f=='Viznet_Media_Route_Change.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "viznet_id,order_issued_date,Schedule Description,circuit_action_type,Handled By,Status,customer_name,Order ID,Circuit Status,m6viznet_service_id,bandwidth,site_A,B Customer,site_B,Column O,service_type,Type Of CCT,Carrier,crfs_date,Schedule Opened By,Opened By,Schedule Update Date Time,Warning,View CCT Details,Schedule Pending Since,Schedule Finished Date,Schedule Finished User,Schedule Closure date,Schedule Local loop Ready,Order/Solution Vetted,UNFR,BSO Name,Customer Manage,BSO Circuit ID,Interface Required,PARENT OFG,OWNER OFG,TAT (hrs),TAT (hrs) Till Finish,A End Address,B End Address,Program Manager,Additional entry / information"
			else:
				print line.rstrip()
	elif(f=='Viznet_Order_Fullfilment.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "viznet_id,order_issued_date,Schedule Description,circuit_action_type,Handled By,Status,customer_name,Order ID,Circuit Status,m6viznet_service_id,bandwidth,site_A,B Customer,site_B,Column O,service_type,Type Of CCT,Carrier,crfs_date,Schedule Opened By,Opened By,Schedule Update Date Time,Warning,View CCT Details,Schedule Pending Since,Schedule Finished Date,Schedule Finished User,Schedule Closure date,Schedule Local loop Ready,Order/Solution Vetted,UNFR,BSO Name,Customer Manage,BSO Circuit ID,Interface Required,PARENT OFG,OWNER OFG,TAT (hrs),TAT (hrs) Till Finish,A End Address,B End Address,Program Manager,Additional entry / information"
			else:
				print line.rstrip()
	elif(f=='Viznet_Shifting_Local_Loop.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "viznet_id,order_issued_date,Schedule Description,circuit_action_type,Handled By,Status,customer_name,Order ID,Circuit Status,m6viznet_service_id,bandwidth,site_A,B Customer,site_B,Column O,service_type,Type Of CCT,Carrier,crfs_date,Schedule Opened By,Opened By,Schedule Update Date Time,Warning,View CCT Details,Schedule Pending Since,Schedule Finished Date,Schedule Finished User,Schedule Closure date,Schedule Local loop Ready,Order/Solution Vetted,UNFR,BSO Name,Customer Manage,BSO Circuit ID,Interface Required,PARENT OFG,OWNER OFG,TAT (hrs),TAT (hrs) Till Finish,A End Address,B End Address,Program Manager,Additional entry / information"
			else:
				print line.rstrip()
	elif(f=='Viznet_Termination.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "viznet_id,order_issued_date,Schedule Description,circuit_action_type,Handled By,Status,customer_name,Order ID,Circuit Status,m6viznet_service_id,bandwidth,site_A,B Customer,site_B,Column O,ervice_type,Type Of CCT,Carrier,crfs_date,Schedule Opened By,Opened By,Schedule Update Date Time,Warning,View CCT Details,Schedule Pending Since,Schedule Finished Date,Schedule Finished User,Schedule Closure date,Schedule Local loop Ready,Order/Solution Vetted,UNFR,BSO Name,Customer Manage,BSO Circuit ID,Interface Required,PARENT OFG,OWNER OFG,TAT (hrs),TAT (hrs) Till Finish,A End Address,B End Address,Program Manager,Additional entry / information"
			else:
				print line.rstrip()
	elif(f=='M6_SDNOC.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "customer_name,service_type,ORDER_TYPE,circuit_action_type,CARRIER,CDD_DATE,m6viznet_service_id,crfs_date,TYPE OF CIRCUIT,OPPORTUNITY_ID,SERVICE GATEWAY,ACCT_MNG,m6_copf_id,STATUS,bandwidth,site_B,site_A,PROGRAM MANAGER,SALES_UNIT,TASK_NUMBER,SCHEDULE DATE,SCHEDULE DESCRIPTION,m6_work_queue,TASK READY DATE,TASK COMPLETION DATE,TAT,TASK START TIME,order_issued_date,TASK_STATUS,SERVICE_REMARKS,dependency_owner,End MUX Node IP,End MUX Node Name,TASK_TYPE,Category,Billing Entity"
			else:
				print line.rstrip()
	elif(f=='M6_SDNOC_OPP.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "customer_name,CUID,CUSTOMER_REF,ACCOUNT_NO,service_type,m6_copf_id,ORDER_TYPE,OLD_COPF_ID,OPPORTUNITY_ID,m6viznet_service_id,VIZNET_CIRCUIT_ID,COMMISSION_DATE,TERMINATION_DATE,bandwidth,circuit_action_type,CURRENT ORDER STATUS,CIRCUIT STATUS,BSO_PROVIDER,BSO_ARRANGED_BY,INTERFACE,UNFR,BILLING_TYPE,SALES_PERSON_NAME,CONTACT PERSON,PHONE NO,EMAIL ID,PINCODE,site_A,site_B,A_END_ADDRESS,B_END_ADDRESS,COPF_VETTING_DATE,OPPORTUNITY_DATE,crfs_date,CREATED_BY,PSR Number,PSR Type,1,2,3,4,5,6,order_issued_date,7,8,m6_work_queue,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,m6_copf_id_1,50"
			else:
				print line.rstrip()
	elif(f=='BPM_Network-table.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "ior_id,Order Scenario Type,ior_order_type,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,order_issued_date"
			else:
				print line.rstrip()
	elif(f=='BPM_NCCM-table.csv'):
		for line in fileinput.input(f, inplace = True):
			if(fileinput.isfirstline()):
				print "nccm_id,Scenario Type,Order Type,1,2,3,4,m6viznet_service_id,6,7,8,9,10,11,order_issued_date"
			else:
				print line.rstrip()

for f in dirs:
	if(f=='Cramer.csv'):
		call(["mongoimport", "--db" , "todos", "--collection" ,"todos","--type", "csv", "--file", f, "--headerline"])
	elif(f=='Viznet_Cease.csv'):
		call(["mongoimport", "--db" , "todos", "--collection" ,"todos","--type", "csv", "--file", f, "--headerline"])
	elif(f=='Viznet_Change_BSO.csv'):
		call(["mongoimport", "--db" , "todos", "--collection" ,"todos","--type", "csv", "--file", f, "--headerline"])
	elif(f=='Viznet_Media_Route_Change.csv'):
		call(["mongoimport", "--db" , "todos", "--collection" ,"todos","--type", "csv", "--file", f, "--headerline"])
	elif(f=='Viznet_Order_Fullfilment.csv'):
		call(["mongoimport", "--db" , "todos", "--collection" ,"todos","--type", "csv", "--file", f, "--headerline"])
	elif(f=='Viznet_Shifting_Local_Loop.csv'):
		call(["mongoimport", "--db" , "todos", "--collection" ,"todos","--type", "csv", "--file", f, "--headerline"])
	elif(f=='Viznet_Termination.csv'):
		call(["mongoimport", "--db" , "todos", "--collection" ,"todos","--type", "csv", "--file", f, "--headerline"])
	elif(f=='M6_SDNOC.csv'):
		call(["mongoimport", "--db" , "todos", "--collection" ,"todos","--type", "csv", "--file", f, "--headerline"])
	elif(f=='M6_SDNOC_OPP.csv'):
		call(["mongoimport", "--db" , "todos", "--collection" ,"todos","--type", "csv", "--file", f, "--headerline"])
	elif(f=='BPM_Network-table.csv'):
		call(["mongoimport", "--db" , "todos", "--collection" ,"todos","--type", "csv", "--file", f, "--headerline"])		
	elif(f=='BPM_NCCM-table.csv'):
		call(["mongoimport", "--db" , "todos", "--collection" ,"todos","--type", "csv", "--file", f, "--headerline"])
