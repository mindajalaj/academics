#!/usr/bin/python3

import os

y=input("Enter the share name : ")
shr_name = "cat /etc/samba/smb.conf | grep "+y+" > trash"
os.system(shr_name)
f=open("trash",'r')
for i in f :
	pass
z=i[1:-2]
print(z)
if y == z :
	k=input("enter ip address : ")
	os.system("")
else :
	print("SORRY! That share does not exist")
	
os.system("rm trash")
input("enter ........")
