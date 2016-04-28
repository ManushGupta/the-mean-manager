import os
import csv
import numpy as np
import xlrd
from openpyxl import load_workbook,Workbook

from pymongo import MongoClient

dirs = os.listdir(os.getcwd())

client = MongoClient()
db = client.wtds

wb1 = load_workbook('evolve.xlsx')
#print wb2.get_sheet_names()
ws1 = wb1.get_sheet_by_name("New Orders")
#c1 = ws1.rows
c1= ws1.rows

wb1.save("evolve.xls")
count = 0






wb2 = open_workbook('Cramer_completed.xls')
ws2 = wb2.sheet_by_index(0)
c2 = ws2.row_values

wb3 = open_workbook('M6_OPP_completed.xls')
ws3 = wb3.sheet_by_index(0)
c3 = ws3.row_values

wb4 = open_workbook('M6_completed.xls')
ws4 = wb4.sheet_by_index(0)
c4 = ws4.row_values

for row1 in c1:
	print row1[9].value
	#if(row[2].value==row1[9].value):
	cursor = db.wtds.update_one(
		{ '$or': [ {'gam_id': row1[9].value}, { 'gam_id': str(row1[9].value)}]},
		{
			'$set': {'evolve_status': row1[46].value}
		}
	)

for row3 in c3:
	cursor = db.wtds.update_one(
		{'gam_id': c3(row4)[9][2:] + '_' + c3(row4)[5]},
		{
			'$set': {'viznetm6status': "Completed"}
		}
	)	


for row4 in c4:
	cursor = db.wtds.update_one(
		{'gam_id': c4(row4)[6][2:] + '_' + c4(row4)[12]},
		{
			'$set': {'viznetm6status': "Completed"}
		}
	)	

