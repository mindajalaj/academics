<?PHP


class  ProdMemModel extends Eloquent{
	
	protected $table='product_members';
	protected $primaryKey = 'prod_mem_id';
	public $timestamps =true;
	protected $fillable = array('prod_mem_product_id','prod_mem_users_id');


public static function addEntries($input,$usersId){

			$member = array();
			foreach($input as $mem)
				{	
					array_push($member,array("prod_mem_users_id"=>$usersId,
						"prod_mem_product_id"=>$mem['prodMemProductId']
						));

				}
				
				 ProdMemModel::Insert($member);
		 
				//echo"<br/>updated products added...!!<br/>";
	}

	public static function editEntries($input,$usersId){

			//print_r($usersId);
			$phn = ProdMemModel::where('prod_mem_users_id',$usersId)
					->delete();
					//print_r($phn);

			$member = array();
			foreach($input as $mem)
				{	
					array_push($member,array("prod_mem_users_id"=>$usersId,
						"prod_mem_product_id"=>$mem['prodMemProductId']
						));

				}
				
				 ProdMemModel::Insert($member); 

	}
				
					
}

?>