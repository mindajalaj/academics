<?php



if(isset($_POST['register']))
{
 ob_start();
 							include_once('classes/class.Manageuser.php');
							 $user = new manageuser();
 		$username=$_POST['username'];
		$password=$_POST['pass'];
		$repassword=$_POST['repass'];
		$email=$_POST['e'];
		//$ip_address=$SERVER['REMOTE_ADDR'];
		$date=date("Y-m-d");
		$ip_address='127.0.0';
		$time=date("H:i:s");
		//echo"$username,$password,$repassword,$email,$ip_address,$time,$date<br/>";
		#//echo $username, $password, $ip_address, $time,$date;
		if(empty($username) || empty($password) || empty($repassword) || empty($email))
		{
		 					$error='all field are required..!!';
							//echo $error;
		}
		elseif($password!==$repassword)
		{
		 					   $error='password doesnt match with each other..!!';
			//				   echo $error;
		}
		elseif(!filter_var($email,FILTER_VALIDATE_EMAIL))
		{
		 					$error='rong email..!!';
			//				echo $error;
		}
		else{
			 				$checkavailability=$user->GetUserInfo($username);
							echo "check availabiltyis  ".$checkavailability;
							if(( $checkavailability ==0))
							{
							echo "<br/>done3i";
							 			$register_user=$user->registerUsers($username,$password,$email,$ip_address,$time,$date);
									//echo "done3";echo $register_user;
							
										if($register_user == 1)
										{					session_start();
							 										$make_session= $user->GetUserInfo($username);
									
																	//print_r($make_session);
																	foreach($make_session as $userSessions)
																	{
																	 					   $_SESSION['todo_name']=$userSessions['username'];
																						   if(isset($_SESSION['todo_name']))
																						   {
																						   		header('location:index.php');
																						   }
																	}
										
										}
							}
							else
								{
								$error='username already exits..!!';}
							//echo $error;
			}
}
if(isset($_POST['login']))
{
 ob_start();
 						  session_start();
						  //secho"wat happened..??";
						  include_once('classes/class.Manageuser.php');
						  $username=$_POST['login_user'];
						  $password=$_POST['login_pass'];
						  if(empty($username) || empty($password))
						  {
						   					  $error='all fieds required';
											 // echo $error;
						  }
						  else
						  {
						   	  				  $login_user=new ManageUser();
											  $auth_user=$login_user->LoginUsers($username,$password);
											  
											  if($auth_user == 1)
											  {
											  
											   				//echo"u hav loged in";
											   				$make_session= $login_user->GetUserInfo($username);
									
																	//print_r($make_session);
																	foreach($make_session as $userSessions)
																	{
																	 					   $_SESSION['todo_name']=$userSessions['username'];
																						   if(isset($_SESSION['todo_name']))
																						   {
																						   		header('location:index.php');
																						   }
																	}
											  
											  }
											  else{
    						 				   $error= "credentials do not match";
						  					   }
						  
						  }
						  

}


?>