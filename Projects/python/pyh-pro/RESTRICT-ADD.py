#!/usr/bin/python3

import os

y=input("Enter the ip address to be denied : ")
os.system("cat /etc/xinetd.conf | grep only_from | grep " + y + "> /root/Desktop/flush.txt")
j=1
fflush=open("/root/Desktop/flush.txt" , 'r')
for j in fflush :
	pass
if j == 1 :	
	print("LOOP 1")
	os.system("cat /etc/xinetd.conf | grep no_access | grep " + y + "> /root/Desktop/trash.txt")

	f = open("/root/Desktop/trash.txt", 'r')
	i=1
	for i in f :
		pass


	if i == 1 :
		print("LOOP 2")		
		x=os.system("sed -i -e 's/\tno_access\t=/\tno_access\t= "+ y + "/g' /etc/xinetd.conf")
		x=os.system("sed -i -e 's/#\tno_access/\tno_access/g' /etc/xinetd.conf")

	else :
		print("Already Exist")

	f.close()


	#os.system("rm /root/Desktop/trash.txt")
else :
	print("This IP is alredy assigned in ALLOW ACCESS List")
os.system("service xinetd restart")
os.system("rm /root/Desktop/flush.txt")
input("Enter to close..........")
