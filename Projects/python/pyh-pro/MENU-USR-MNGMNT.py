#!/usr/bin/python3
import os
import sys

while True:
	os.system('clear')
	
	print("Press 1 : CREATE USER")
	print("Press 2 : CHANGE PASSWORD")
	print("Press 3 : DELETE USER")
	print("Press 4 : SWITCH USER")
	print("Press 5 : LOGOUT USER")
	print("Press 6 : REMOVE PASSWORD")
	print("Press 7 : To go Back")
	print ("\n\n")

	j=input("Enter ur choice: ")
	ch = int(j)
	
	if ch == 1 :
		x=input("Enter the username to be added : ")
		x=os.system("useradd " + x + " > /root/Desktop/trash.txt")
		os.system("rm /root/Desktop/trash.txt")
		input("Enter to cont.......")
	
	elif ch == 2 :
		x=input("Enter the username : ")
		x=os.system("passwd " + x)
		input("Enter to cont.......")	
	
	elif ch == 3 :
		x=input("Enter the username to be deleted : ")
		x=os.system("userdel -r " + x )
		input("Enter to cont.......")	

	#elif ch == 4 :
		#os.system("./TELNET-CLIENT.py")
	
	elif ch == 5 :
		user=input("Enter the username : ")
		pid="ps aux | grep {}".format(user) + "\ | grep bash | awk '{print $2}'  >   /root/Desktop/trash.txt"
		os.system(pid)
		f=open("/root/Desktop/trash.txt" , 'r')
		for i in f :
			os.system("kill -9 " + i)
		f.close()
		os.system("rm /root/Desktop/trash.txt")
		input("Enter to cont.......")	

	elif ch == 6 :
		x=input("Enter the username : ")
		os.system("passwd -d " + x)
		input("enter to close....")
	
	elif ch == 7 :
		sys.exit()	
		
	else:
		print("option not supported")
input("Enter to close.....")

