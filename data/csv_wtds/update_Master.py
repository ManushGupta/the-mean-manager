import os
import csv
import numpy as np
from openpyxl import load_workbook,Workbook
dirs = os.listdir(os.getcwd())

wb2 = load_workbook('evolve.xlsx')
#print wb2.get_sheet_names()
ws2 = wb2.get_sheet_by_name("New Orders")
#c1 = ws1.rows
c= ws2.rows
count = 0
'''
f = np.genfromtxt("dbExport.csv",delimiter='/t', dtype=str)
print f[2].split(',')

for f in dirs:
	if(f=="dbExport.csv"):
		with open(f,'r+') as fi:
			mycsv = csv.reader(fi)
			writer = csv.writer(fi)
			for rowcsv in mycsv:
for row in c:
	if(rowcsv[2]==row[9].value):
		if(row[46].value != rowcsv[6]):
			if(row[46].value=="Commissioned" and rowcsv[6] =="Work in Progress"):
				rowcsv[6]= "Newly Commissioned"
				writer.writerow(rowcsv)
			elif(row[46].value=="Commissioned" and rowcsv[6] == "Newly Commissioned"):
				rowcsv[6]= "Commissioned"
				writer.writerow(rowcsv)

	'''			

'''

for rowcsv in f:
	rowcsv2 = rowcsv.split(',')

	for row in c:
		if(rowcsv2[2]==row[9].value):
			print 'yes'
			#print row[46].value
			if(rowcsv2[6]==row[46].value):
				print 'yes'
				print rowcsv2[6]
				print row[46].value
				if(row[46].value=="Commissioned" and rowcsv2[6] =="Work in Progress"):
					#print 'yes'
					rowcsv2[6]= "Newly Commissioned"
				
				elif(row[46].value=="Commissioned" and rowcsv2[6] == "Newly Commissioned"):
					rowcsv2[6]= "Commissioned"
	#print rowcsv

'''
from openpyxl.cell import get_column_letter
wb = Workbook()
ws = wb.worksheets[0]
for f in dirs:
	if(f=="dbExport.csv"):
		with open(f,'rb') as fi:
			mycsv = csv.reader(fi)
			count_row = 0
			for row in mycsv:
				count_row +=1
				count_column = 0
				for column in row:
					count_column +=1
					print column
					try:
						ws.cell(row = count_row, column = count_column).value = int(column)
					except ValueError:
						ws.cell(row = count_row, column = count_column).value = (column)

			    		
wb.save("dbExport.xlsx")


wb1 = load_workbook('dbExport.xlsx')
#print wb2.get_sheet_names()
ws1 = wb1.get_sheet_by_name("Sheet")
#c1 = ws1.rows
c1= ws1.rows

for row1 in c1:
	#print row1[2].value
	for row in c:
		#print row[9].value
		if(row1[2].value==row[9].value):
			#print 'yes'
			#print row1[2].value
			if(row1[6].value!=row[46].value):
				print 'yes'
				print row1[6].value
				print row[46].value
				#print row[46].value
				if(row[46].value=="Commissioned" and row1[6].value =="Work in Progress"):
					#print 'yes'
					row1[6].value= "Newly Commissioned"
				
				elif(row[46].value=="Commissioned" and row1[6] == "Newly Commissioned"):
					row1[6].value= "Commissioned"

wb1.save("updated_master.xlsx")
