<?php
class dbconnection
{
 	  protected $db_conn;
	  public $db_name='todo';
	  public $db_user='root';
	  public $db_pass='mindajalaj';
	  public $db_host='localhost';
	  
	  function connect()
	  {
	   		   try{
			   	   		//echo"<h2>done</h2>";
			   	   		$this->db_conn=new PDO("mysql:host=$this->db_host;dbname=$this->db_name",$this->db_user,$this->db_pass);
						//echo"<h2>done</h2>";
						return $this->db_conn;
	  				}
				catch(PDOException $e)
				{
				 				   return $e->getMessage();
				}
	  
	  }
  }

?>