#!/usr/bin/python3
import os

def one(y) :
		
	print("Don't forget writing '/' at last of folder\'s path")
	x=input("Enter the Folder name with its path :")
#checking does user has given / after the folder name	
	if x[-1]=='/' :	
		folder="cat /etc/samba/smb.conf | grep path\ =\ "+x+" > trash"
		os.system(folder)
		h=open("trash",'r')		
		for k in h :
			pass
#checking if folder is already there in configuration file		
		
		m=k[7:-1]
		if m==x : 
			ask='y'
			while ask=='y' :
				user=input("enter the user name : ")
				os.system("useradd {}".format(user))				
				os.system("smbpasswd -a {}".format(user))
				users1="valid\ users\ =\ "					
				os.system("sed -i -e 's/"+users1+"/"+users1+user+" /g' /etc/samba/smb.conf")
				ask=input("Want to add more users ?(y/n)")	
		else :
			print("Folder does not exists.")
	else :
		print("SORRY! INCORRECT PATH")
		a=input("You want to try give folder name again(y/n) : ")




y=input("Enter the share name : ")
shr_name = "cat /etc/samba/smb.conf | grep "+y+" > trash"
os.system(shr_name)
f=open("trash",'r')
for i in f :
	pass
z=i[1:-2]
if y == z :
	one(y)
else :
	print("foldrer not found")
os.system("service smb restart")	
input("Enter to close.....")
#os.system("rm trash")



