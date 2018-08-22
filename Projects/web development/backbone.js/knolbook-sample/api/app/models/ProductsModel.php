<?PHP


class  ProductsModel extends Eloquent{
	
	protected $table='products';
	protected $primaryKey = 'products_id';
	public $timestamps =true;

	protected $fillable= array('products_id','products_name','products_description');
	public function users(){
		return $this->belongsToMany('UsersModel','product_members','prod_mem_product_id','prod_mem_users_id');
	}



}

?>