#!/usr/bin/python2

import os

x=raw_input("Enter the folder to be removed : ")
os.system("cat /etc/exports | grep " + x + "\  > /root/Desktop/trash")
j=1
f=open("/root/Desktop/trash" , 'r')
j=f.read()
if j == 1 :
	print("Folder does not exist")
else :
	print("Folder found")
	#i=i[:-1]	
	cmd="sed -i -e's/" + j[:-1] + "/1/g' /etc/exports"
	print(cmd)
	os.system(cmd)
raw_input("Enter to close.......")
