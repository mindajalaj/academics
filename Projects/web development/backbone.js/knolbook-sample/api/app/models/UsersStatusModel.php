<?PHP


class  UsersStatusModel extends Eloquent{
	
	protected $table='users_status';
	protected $primaryKey = 'status_id';
	public $timestamps =true;
	protected $fillable = array('status_users_id');
	public static function addStatus($usersId){

		$lin = UsersStatusModel::create(array('status_users_id'=>$usersId
			));


	//		echo "<br/>status   updated.....<br/>";
	}


}

?>