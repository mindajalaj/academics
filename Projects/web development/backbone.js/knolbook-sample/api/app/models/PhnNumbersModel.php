<?PHP


class  PhnNumbersModel extends Eloquent{
	
	protected $table='phone_numbers';
	protected $primaryKey = 'phone_id';
	public $timestamps =true;
	protected $fillable = array('phone_users_id','phone_type','phone_number','created_at','updated_at');

	public function users(){

		return $this->belongsTo('UsersModel','phone_users_id');


	}
	//to add phone numbers of a new user
	public static function addPhnNumbers($phnNumbers,$usersId){

			$phn = array();
			foreach($phnNumbers as $number)
				{	
					array_push($phn,array("phone_users_id"=>$usersId,
						"phone_number"=>$number['phoneNumber'],
						"phone_type"=>$number['phoneType']
						));

				}
				
				PhnNumbersModel::Insert($phn);
		 
				//echo"<br/>phone numbers  added...!!<br/>";
	}
	//to remove the existing number and add the recent new number of a particular user
	public static function editPhnNumbers($phnNumbers,$usersId){
				//print_r($phnNumbers);
			
			PhnNumbersModel::where('phone_users_id',$usersId)
					->delete();
					//print_r($phn);

			$phn = array();
			foreach($phnNumbers as $number)
				{	
					array_push($phn,array("phone_users_id"=>$usersId,
						"phone_number"=>$number['phoneNumber'],
						"phone_type"=>$number['phoneType']
						));

				}
				
				PhnNumbersModel::Insert($phn); 
			/*$phn = array();// array to store all the updated numbers...
			$exitsting= PhnNumbersModel::where('phone_users_id',$usersId)
							
							->get(array('phone_number','phone_type'))
							->toArray();
			
			//print_r($exitsting);
			
			$haystack=$exitsting;
			$check =0;$iterator=0;
			foreach($phnNumbers as $number)
				{	//echo "abc";
					//print_r($number);
					$needle=array();
					$needle["phone_number"]= $number["phoneNumber"];
					$needle["phone_type"]= $number["phoneType"];
					
					//print_r($needle);
					// here below we check if needle not in haystack then we aa it to the array for insertion
					if(!in_array($needle, $haystack) ){ 
						//echo "string inside....";
						$check=1;//so that we know that atleeast one entry needs to be added....
						array_push($phn,array("phone_users_id"=>$usersId,
							"phone_number"=>$number['phoneNumber'],
							"phone_type"=>$number['phoneType']
							));

					}
					$iterator++;
				}
				//print_r($phn);
			if($check==1){
					PhnNumbersModel::Insert($phn);
			 		//echo"<br/>phone numbers  added...!!<br/>";
			}
			else{
				//secho"no new entries in phone numbers..";
			}
*/

	}

}

?>