<?PHP


class  DepartmentsModel extends Eloquent{
	
	protected $table='departments';
	protected $primaryKey = 'dept_id';
	public $timestamps =true;
	
	public function toArray(){
      $attributes = parent::toArray();
      $array = array();

      foreach($attributes as $key => $value){
          $newKey = camel_case($key);
          $array[$newKey] = $value;
      }

      return $array;
  		}

}

?>