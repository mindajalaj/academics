<?PHP


class  UpdatesModel extends Eloquent{
	
	protected $table='updates';
	protected $primaryKey = 'updates_id';
	public $timestamps =true;

	protected $fillable= array('updates_users_id','updates_text');
	
	public function user(){

		return $this->belongsTo('UsersModel','updates_users_id');


	}

	public static function addEntry($id,$text){
		
		UpdatesModel::create(array('updates_users_id'=>$id,
			'updates_text'=>$text));

	//	echo"<br/>added to updates table....<br/>";
	} 
}

?>