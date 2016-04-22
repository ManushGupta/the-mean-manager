import xlrd

wb1 = xlrd.open_workbook("abcd.xls")
ws1 = wb1.sheet_by_index(0)
c1 = ws1.row_values
print c1(0)[2]


#print xlrd.__file__