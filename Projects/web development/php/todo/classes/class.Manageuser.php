<?php
	 include_once('class.database.php');

	 class ManageUser{
	 	   public $link;
		   function __construct()
		   {
		   			$db_connection= new dbconnection();
					$this->link=$db_connection->connect();
					return $this->link;
			}
			function registerUsers($username,$password,$email,$ip_address,$time,$date)
		 	{
			 		 echo"$username,$password,$email,$ip_address,$time,$date<br/>";
			 		 $query=$this->link->prepare("INSERT INTO user(username,password,email,ip_address,time,date) VALUES (?,?,?,?,?,?)");
					 $values=array($username,$password,$email,$ip_address,$time,$date);
					 $query->execute($values);
					// echo"<h2>done2i</h2>";
					 $count=$query->rowCount();
					// echo $count;
					 return $count;
			}
			function LoginUsers($username,$password)
			{
			 		 $query=$this->link->query("select * from user where username='$username' AND password ='$password' ");
					 $rowcount=$query->rowCount();
					 //echo"<h2>done2j</h2>";
					 return $rowcount;					 
			}
			function GetUserInfo($username)
			{echo"<h2>done2kk</h2>";
			 		 $query=$this->link->query("select * from user where username='$username'");
					 $rowcount=$query->rowCount();
					 echo"rows affected...";
					 echo $rowcount;
					 if($rowcount==1)
					 {
					  				$re=$query->fetchAll();
									return $re;
					 
					 }
					 else{
					 return $rowcount;
					 }
			
			}
	 }
	 
?>