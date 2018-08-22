<?PHP


class  UsersModel extends Eloquent{
	
	protected $table='users';
	protected $primaryKey = 'users_id';
	public $timestamps =true;
	protected $fillable= array('users_fname','users_lname','users_city','users_state','users_dob',
		'users_designation','users_pic','users_managed_by','users_gender','users_country',
		'users_email','users_role_id','users_mode_id','users_dept_id','users_doj');
	public function products(){
		return $this->belongsToMany('ProductsModel','product_members','prod_mem_users_id','prod_mem_product_id');
	}
	public function socialLinks(){

		return $this->hasOne('SocialLinksModel','social_users_id','users_id');
	}

	public function phnNumbers(){

		return $this->hasMany('PhnNumbersModel','phone_users_id','users_id');


	}
	public function updates(){

		return $this->hasMany('UpdatesModel','updates_users_id','users_id');


	}
	public static function addNewUser($inputArray){

			//var_dump($inputArray);
			
			$user = UsersModel::create(array('users_fname'=>$inputArray['usersFName'],
			'users_lname'=>$inputArray['usersLName'],
			'users_city'=>$inputArray['usersCity'],
			'users_state'=>$inputArray['usersState'],
			'users_dob'=>$inputArray['usersDob'],
			'users_designation'=>$inputArray['usersDesignation'],
			'users_email'=>$inputArray['usersEmail'],
			'users_role_id'=>$inputArray['usersRoleId'],
			'users_mode_id'=>$inputArray['usersModeId'],
			'users_dept_id'=>$inputArray['usersDeptId'],
			'users_doj'=>$inputArray['usersDoj'],
			"users_pic"=>$inputArray['usersPic'],
			"users_managed_by"=>$inputArray['usersManagedBy'],
			"users_gender"=>$inputArray['usersGender'],
			"users_country"=>$inputArray['usersCountry']
			));

			//echo "<br/>user table details Added<br/>";
			return $user->users_id;

	}
	public static function editUser($inputArray,$id){

			//var_dump($inputArray);
			
			$user = UsersModel::where('users_id',$id)->update(array('users_fname'=>$inputArray['userFName'],
			'users_lname'=>$inputArray['userLName'],
			'users_city'=>$inputArray['userCity'],
			'users_state'=>$inputArray['userState'],
			'users_dob'=>$inputArray['userDob'],
			'users_designation'=>$inputArray['userDesignation'],
			'users_email'=>$inputArray['userEmail'],
			'users_role_id'=>$inputArray['userRoleId'],
			'users_mode_id'=>$inputArray['userModeId'],
			'users_dept_id'=>$inputArray['userDeptId'],
			'users_doj'=>$inputArray['userDoj'],
			"users_pic"=>$inputArray['userPic'],
			"users_managed_by"=>$inputArray['userManagedBy'],
			"users_gender"=>$inputArray['userGender'],
			"users_country"=>$inputArray['userCountry']
			));

			//echo "<br/>user table details updated...<br/>";
			//return $user->users_id;

	}	

}

?>