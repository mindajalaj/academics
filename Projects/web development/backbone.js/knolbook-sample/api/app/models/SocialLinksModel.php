<?PHP


class  SocialLinksModel extends Eloquent{
	
	protected $table='users_social_links';
	protected $primaryKey = 'social_links_id';
	public $timestamps =true;
	protected $fillable = array('social_users_id','social_google','social_fb',
		'social_twitter','social_linkedin');
	
	public function users(){

		return $this->belongsTo('UsersModel','social_users_id');


	}

	public static function addLinks($inputArray,$usersId){

				$lin = SocialLinksModel::create(array('social_users_id'=>$usersId,
			'social_fb'=>$inputArray[0]['socialFb'],
			'social_twitter'=>$inputArray[0]['socialTwitter'],
			'social_google'=>$inputArray[0]['socialGoogle'],
			'social_linkedin'=>$inputArray[0]['socialLinkedin']
			));
				//echo"<br/>social links added...!!<br/>";

	}
	public static function editLinks($inputArray,$usersId){

				$lin = SocialLinksModel::where('social_users_id',$usersId)
				->update(array('social_fb'=>$inputArray[0]['socialFb'],
			'social_twitter'=>$inputArray[0]['socialTwitter'],
			'social_google'=>$inputArray[0]['socialGoogle'],
			'social_linkedin'=>$inputArray[0]['socialLinkedin']
			));
				//echo"<br/>social links updated.....!!<br/>";

	}
	public static function getLinks($id){
		$links = SocialLinksModel::where('social_users_id',$id)->select('social_fb',
			'social_linkedin','social_twitter','social_google');
		return $links;

	}
}

?>