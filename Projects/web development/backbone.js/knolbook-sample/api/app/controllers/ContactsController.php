<?php

class ContactsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
	//echo "fetching contacts....<br/>";
	$contacts = PhnNumbersModel::with('users')
				->groupBy('phone_users_id')
				->get();
			//echo ($contacts);
	$contactsLength = sizeof($contacts);
	//echo($contactsLength);
	$depts=DepartmentsModel::get(array('dept_id','dept_name'))->toArray();
	$deptCount=sizeof($depts);

		//echo($deptCount);
	//print_r($depts);print_r($depts[0]["dept_id"]);
	//echo ($contactsLength);
	$count=0;
	$modifiedContact= array();
	while($count!=$contactsLength){
			$iterateDept=0;
			while($contacts[$count]["users"]["users_dept_id"]!=$depts[$iterateDept++]["deptId"]);
			$deptName=$depts[--$iterateDept]["deptName"];
			$modifiedContact[$count]=array('phoneNumber'=>$contacts[$count]["phone_number"],
			'userId'=>$contacts[$count]["users"]["users_id"],
			'userFName'=>$contacts[$count]["users"]["users_fname"],
			'userLName'=>$contacts[$count]["users"]["users_lname"],
			'userDOJ'=>$contacts[$count]["users"]["users_doj"],
			'userPic'=>$contacts[$count]["users"]["users_pic"],
			'userDesignation'=>$contacts[$count]["users"]["users_designation"],
			'userDepartment'=>$contacts[$count]["users"]["users_dept_id"],
			"userDeptName" => $deptName
			);
		$count++;
	}
	//print_r($c);
	echo json_encode($modifiedContact);
			//echo ($contacts[0]["phone_users_id"]);


		/*$contacts = DB::table('users')
        ->join('phone_numbers', 'users_id', '=', 'phone_users_id')
        ->groupBy('users_id')
        ->get(array('users_fname','users_lname','users_designation', 'phone_number'));
		
		*/
       /* $contacts = UsersModel::join('phone_numbers', 'users_id', '=', 'phone_users_id')
        ->groupBy('users_id')
        ->get(array('users_fname','users_lname','users_designation', 'phone_number'))->toJson();
		*/
		//print_r( $contacts);
		//die();
	//echo $contacts;
	}
	
	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
			//echo "string";
			$inputArray=Input::json()->all();
			//print_r($inputArray);
			
			$usersId = UsersModel::addNewUser($inputArray);
			PhnNumbersModel::addPhnNumbers($inputArray['usersPhoneNumbers'],$usersId);
			ProdMemModel::addEntries($inputArray['products'],$usersId);
			
			SocialLinksModel::addLinks($inputArray['usersSocialLinks'],$usersId);
			UsersStatusModel::addStatus($usersId);
			$text="is added to knolbook...";
			UpdatesModel::addEntry($usersId,$text);
			//echo"<br/>good job...!!<br/>";
			return 200;
	}
	

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//dd($id);
		//eturn "showing individual userss......<br/>";
		
		//$user = UsersModel::find($id)->phnNumbers()->get()->toJson();
					
					/*this will fetch phone number and user details...redundant user info...
				$user=PhnNumbersModel::with('users')
							->where("phone_users_id" ,$id )
							->get()->toJson();*/
					$user=UsersModel::with('phnNumbers')
							->where("users_id" ,$id )
							->get();
					$modifiedUser=array('userId'=>$user[0]["users_id"],
								'userFName' =>$user[0]["users_fname"],
								'userLName' =>$user[0]["users_lname"],
								'userDOB' => $user[0]["users_dob"],
								'userDOJ' => $user[0]["users_doj"],
								'userDepartment'=>$user[0]["users_dept_id"],
								'userCity' => $user[0]["users_city"],
								'userCountry' => $user[0]["users_country"],
								'userEmail' => $user[0]["users_email"],
								'userPic' => $user[0]["users_pic"],
								'userGender' => $user[0]["users_gender"],
								'userManagedBy' => $user[0]["users_managed_by"],
								'userDesignation'=>$user[0]["users_designation"],
								'userRole' => $user[0]["users_role_id"]
								);
								$count=0;	//print_r($user);	
								$phn =array();
							while($count!=sizeof($user[0]["phn_numbers"])){
								$phn[$count]=array(
									'phoneNumber'=>$user[0]["phn_numbers"][$count]["phone_number"],
									'phoneType' => $user[0]["phn_numbers"][$count]["phone_type"],
									'phoneId' => $user[0]["phn_numbers"][$count]["phone_id"]
									);
								$count++;

							}
						//fetching social links of user
							$links = UsersModel::find($id)->socialLinks()->get()->toArray();
							//print_r($links);
							$modifiedLinks=array();
							if(sizeof($links)){
								$modifiedLinks = array('socialFB' => $links[0]["social_fb"],
									'socialTwitter' => $links[0]["social_twitter"],
									'socialGoogle' => $links[0]["social_google"],
									'socialLinkedin' => $links[0]["social_linkedin"]
									);
							}
						//fetching products for user
							$product= $this->getProducts($id);
						//fetching dept of user
							$dept = DepartmentsModel::select('dept_name')->find($user[0]["users_dept_id"])
							->toArray();
							//print_r($dept) ;
		
							//print_r($modifiedLinks);
							//print_r($phn);
							//print_r($modifiedUser);
							$modifiedUser["deptName"] = $dept["deptName"];
							$modifiedUser["phoneNumbers"]= $phn;
							$modifiedUser["socialLinks"]=$modifiedLinks;
							$modifiedUser["products"] = $product;
							return json_encode($modifiedUser);
		//return($use);
	}
	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
		/*echo "editing....";

			$usersId=$id;
			$inputArray=Input::json()->all();
			print_r($inputArray);
			
			UsersModel::editUser($inputArray,$usersId);
			SocialLinksModel::editLinks($inputArray['usersSocialLinks'],$usersId);
			PhnNumbersModel::editPhnNumbers($inputArray['usersPhoneNumbers'],$usersId);
			ProdMemModel::editEntries($inputArray['products'],$usersId);
			//UsersStatusModel::addStatus($usersId);
			$text="edited the information...";
			UpdatesModel::addEntry($usersId,$text);
			echo "success..!!!";*/

	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//echo "editing....";

			$usersId=$id;
			$inputArray=Input::json()->all();
			//print_r($inputArray);
			PhnNumbersModel::editPhnNumbers($inputArray['phoneNumbers'],$usersId);
			ProdMemModel::editEntries($inputArray['products'],$usersId);
			UsersModel::editUser($inputArray,$usersId);
			SocialLinksModel::editLinks($inputArray['socialLinks'],$usersId);
			
			
			//UsersStatusModel::addStatus($usersId);
			$text="edited the information...";
			UpdatesModel::addEntry($usersId,$text);
			return Response::json(array(
				'statusCode'=>200,
				'statusMessage'=>'Ok'

				),200);
			//return Response::json(array('statusCode'=>200,'statusMessage'=>'success'));
		//	echo "success..!!!";
	}
	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}
	//fetch aal updates for all user from db
	public function fetchAllUpdates()
	{
		
		$updates =  UpdatesModel::with('user')->get()->toArray();
		//print_r($updates);
		//print_r(sizeof($updates));$modifiedUpdates=array();
		$length=sizeof($updates);$count=0;
		while ($count < $length) {
			# code...
			$modifiedUpdates[$count] =array('updateText' => $updates[$count]["updates_text"],
				'updateTime' => $updates[$count]["created_at"],
				'userFName' => $updates[$count]["user"]["users_fname"],
				'userLName' => $updates[$count]["user"]["users_lname"],
				'userPic' => $updates[$count]["user"]["users_pic"],
				'userId' => $updates[$count]["user"]["users_id"],
				'userDesignation'=> $updates[$count]["user"]["users_designation"]
				); 
			$count++;
		}
		return $modifiedUpdates;
	
	}
	//to get all the user for each product to display it on tab named products
	public function fetchByProducts(){

		$products=ProductsModel::with('users')->get()->toArray();
		//print_r($products);
		//echo(sizeof($products));
		$totalProd=sizeof($products);
		$count=0;
		$modifiedProducts=array();
		while($count<$totalProd){

			//echo(sizeof($products[$count]["users"]));
			$modifiedProducts[$count]=array(
				"productId"=>$products[$count]["products_id"],
				"productsName"=>$products[$count]["products_name"],
				"users"=>array()
				);
			$usersCount=sizeof($products[$count]["users"]);
			$itrUsers=0;
			while($usersCount!=$itrUsers){
			
			$modifiedProducts[$count]["users"][$itrUsers]=$products[$count]["users"][$itrUsers]["users_id"];

				
				$itrUsers++;
			}

			$count++;
		}
        return json_encode($modifiedProducts);




	}
	//to fetch updates of a single user by his id
	public function fetchUserUpdates($id)
	{
		//
		echo "<br/>fetching updates for user {$id}...<br/>";
		return UsersModel::find($id)->updates()->get()->toJson();
		//return UpdatesModel::with('user')->whereget()->toJson();
	}
	// to search the users first based on number...then based on department and product
	public function searchNumberContacts(){

			$input=Input::all();
			//print_r($input["query"]);
			
			//print_r($input);
			if(is_numeric($input["query"])){
				//echo("numeric");
				$number=$input["query"].'%';
				//echo($number);
				$list=PhnNumbersModel::with('users')->where('phone_number','like',$number)->get()->toArray();
				$length= sizeof($list);$count=0;
				$modifiedlist=array();
				while($count<$length){
					$modifiedlist[$count]=array('phoneNumber'=>$list[$count]["phone_number"],
										'userId'=>$list[$count]["users"]["users_id"],
										'userFName'=>$list[$count]["users"]["users_fname"],
										'userLName'=>$list[$count]["users"]["users_lname"],
										'userPic'=>$list[$count]["users"]["users_pic"]);
					$count++;
				}
				return($modifiedlist);
			}
			else{
				//echo("non numeric");
				$inputQuery = $input["query"].'%';
				$deptUsers=array();
				$prodUsers=array();
				$modifiedDept= array();
				$modifiedDept2= array();
				$listDept = DepartmentsModel::where('dept_name','like',$inputQuery)->get()->toArray();
				//print_r($listDept);
				//$deptCount = sizeof($listDept);$deptItr=0;
				if(sizeof($listDept)){
					
					$deptUsers = UsersModel::where('users_dept_id',$listDept[0]["deptId"])->get()->toArray();
					//print_r($deptUsers);
					$length = sizeof($deptUsers);$count=0;
					while ($count< $length) {
						$modifiedDept[$count] =array(/*'deptName' => $listDept[0]["deptName"],*/
										'userId'=>$deptUsers[$count]["users_id"],
										'userFName'=>$deptUsers[$count]["users_fname"],
										'userLName'=>$deptUsers[$count]["users_lname"],
										'userPic'=>$deptUsers[$count]["users_pic"]);

						$count++;
					}
					$modifiedDept2=array("deptName" => $listDept[0]["deptName"],"users"=>$modifiedDept);
					 
				}
				//$listProducts = ProductsModel::where('products_name','like',$inputQuery)->get()->toArray();
				$listProducts=ProductsModel::with('users')->where('products_name','like',$inputQuery)
													->get()
													->toArray();
				
				//print_r($listProducts);
				$proList=array();
				$modifiedProList=array();
				if(sizeof($listProducts)){
					//print_r(sizeof($listProducts[0]["users"]));
					$prodLength = sizeof($listProducts[0]["users"]);$count=0;
					while ($count < $prodLength) {
						$proList[$count] =array(
											'userId'=>$listProducts[0]["users"][$count]["users_id"],
											'userFName'=>$listProducts[0]["users"][$count]["users_fname"],
											'userLName'=>$listProducts[0]["users"][$count]["users_lname"],
											'userPic'=>$listProducts[0]["users"][$count]["users_pic"]);
							
						$count++;
					}

					$modifiedProList = array("productName" => $listProducts[0]["products_name"],"users"=>$proList);
				}
				$list=array("dept"=>$modifiedDept2,"products"=>$modifiedProList);
				return($list);
			}
	}
	/*public function searchContacts($id){

		if(is_numeric($id)){
			//echo("numeric");
			$number=$id.'%';
			//echo($number);
			$list=PhnNumbersModel::with('users')->where('phone_number','like',$number)->get()->toArray();
			$length= sizeof($list);$count=0;
			$modifiedlist=array();
			while($count<$length){
				$modifiedlist[$count]=array('phoneNumber'=>$list[$count]["phone_number"],
									'userId'=>$list[$count]["users"]["users_id"],
									'userFName'=>$list[$count]["users"]["users_fname"],
									'userLName'=>$list[$count]["users"]["users_lname"],
									'userPic'=>$list[$count]["users"]["users_pic"]);
				$count++;
			}
			return($modifiedlist);
		}else{
			echo("non numric");
			$input ="%".$id.'%';
			$deptUsers=array();
			$prodUsers=array();
			$listusers=UsersModel::where('users_fname', 'like', $input)
									->orwhere('users_lname','like',$input)
									->get()->toArray();

			$listDept = DepartmentsModel::where('dept_name',$id)->get()->toArray();
			if(sizeof($listDept)){
				$deptUsers = UsersModel::where('users_dept_id',$listDept[0]["deptId"])->get()->toArray();
				print_r($deptUsers);
			}
			$listProducts = ProductsModel::where('products_name',$id)->get()->toArray();
			if(sizeof($listProducts)){
				$prodUsers = ProdMemModel::where('prod_mem_product_id',$listProducts[0]['products_id'])
				->get()->toArray();
			//	print_r($prodUsers);
			}
			//print_r($listProducts[0]["products_id"]);
			//print_r($deptUsers);
			$list=array("users"=>$listusers,"dept"=>$deptUsers,"products"=>$prodUsers);
			print_r($list);
		}
		//$users= UsersModel::

	}*/
	//fetching all products for a single user
	public function getProducts($id){
		$products=UsersModel::find($id)->products()->get()->toArray();
		//print_r($products);
		$count=0;
		$modifiedProducts=array();
		while(sizeof($products)>$count){
				$modifiedProducts[$count]=array(
								"productName"=>$products[$count]["products_name"],
								"productId" => $products[$count]["products_id"]
								);
					$count++;
		}
		return $modifiedProducts;
	}
	//fetching all deptartments of knolbook
	public function fetchAllDepts(){
		$depts=DepartmentsModel::get(array('dept_id','dept_name'))->toArray();
		//print_r($depts);
		return $depts;
	}
	//fetching all available products
	public function getAllProducts(){
		$products = ProductsModel::get()->toArray();
		//print_r($products);
		$modifiedProducts = array();
		$count=0;
		foreach($products as $product) {
			# code...
			$modifiedProducts[$count++] = array('productName' => $product["products_name"],
				'productId' => $product["products_id"]);
		}
		return $modifiedProducts;
	}
  
}
