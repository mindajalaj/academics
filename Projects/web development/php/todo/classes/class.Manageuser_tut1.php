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
			function registerUsers($username,$password,$ip_address,$time,$date)
		 	{

			 		 $query=$this->link->prepare("INSERT INTO user(username,password,ip_address,time,date) VALUES (?,?,?,?,?)");
					 $values=array($username,$password,$ip_address,$time,$date);
					 $query->execute($values);
					 $count=$query->rowCount();
					 return $count;
			}
	 }
	 
	 
	 $users= new ManageUser();
	 echo"<h4>fkdnfkl</h4>";
	 echo $users->registerUsers('bob','bob23','127.0.0.1','03:32','2013-08-08');
	 echo"<h4>fkdnfkl</h4>";
?>