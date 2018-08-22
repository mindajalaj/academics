<?php
include_once('class.database.php');

class ManageTodo
{
 	  public $link;
	  function __construct()
	  {
	   		   $db_connection=new dbconnection();
			   $this->link = $db_connection->connect();
	  		   return $this->link;
	   }
	   function createTodo($username,$title,$description,$due_date,$created_date,$label,$progress)
	   {
	   			$query=$this->link->prepare("insert into todo (username,title,description,due_date,created_date,label,progress) VALUES (?,?,?,?,?,?,?)");
				$values=array($username,$title,$description,$due_date,$created_date,$label,$progress);
				$query->execute($values);
	   			$count=$query->rowCount();
				echo$count;
	   			return $count;
	   }
	   function listTodo($username,$status=null)
	   {
	   			if(isset($status))
				{
                	   			$query=$this->link->query("select * from todo where username='$username' and label='$status' order by id desc;");
				}
                else
					{			
								   			$query=$this->link->query("select * from todo where username='$username' order by id desc;");
					}
				$counts=$query->rowCount();
				if($counts>=1)
      			{
                				 			 $result=$query->fetchAll();		
				}
				else{
					 		 $result=$counts;
				
				}
				return $result;
		}
	/*	function CountTodo($username, $status)
		{
		 		 $query=$this->link->query("select count(*) as TOTAL_TODO from todo where username='$username' and $status='$status'");
				 $query->setFetchMode(PDO::FETCH_OBJ);
				 $count=$query->fetchAll();
				 return $count;
				 
		}*/
		function editTodo($username,$id,$title,$description,$progress,$due_date,$label)
		{
		 		// echo$username,$id,$title,$description,$progress,$due_date,$label."<br/>";
		 		 $query=$this->link->query("update todo set title='$title',description='$description',due_date='$due_date',progress='$progress',label='$label'  where username='$username' and id='$id';");
					$count=$query->rowCount();
					//echo $count;
				 return $count;
		
		}
		function deleteTodo($username,$id)
		{
 		 		 $query=$this->link->query("delete from todo where username='$username' and id='$id'");
				 $count=$query->rowCount();
				 return $count;
		}
		function listIndTodo($param,$username)
		{
		 		 foreach($param as $key => $value)
				 {
				  				$query = $this->link->query("select * from todo where $key ='$value' and username='$username' limit 1;");		 
				 }
				 $counts = $query->rowCount();
				 if($counts == 1)
				 {
				  			  $result= $query->fetchAll();
				 
				 }
				 else{
				 	  		  $result = $counts;
				 }
				 return $result;
		}

}

?>