<?php

require_once("flyBehaviors/CantFly.php");
require_once("quackBehaviors/CantQuack.php");
require_once("swimBehaviors/CantSwim.php");

/**
 * [AbstractDuck]
 */
abstract class AbstractDuck
{

	protected $duckType;

	protected  $flyBehavior;
	protected  $quackBehavior;
	protected  $swimBehavior;


	abstract public function display();

	public function setQuackingBehavior(QuackBehavior $quackObject)
	{

		$this->quackBehavior = $quackObject;
	}

	public function setFlyingBehavior(FlyBehavior $flyObject)
	{

		$this->flyBehavior = $flyObject;
	}

	public function setSwimBehavior(SwimBehavior $swimObject)
	{

		$this->swimBehavior = $swimObject;
	}

	/**
	 * [performQuack] check if quckBehavior object is set, if set call the quack function else 
	 * create object for no quack and call quack function
	 * @return [type] [description]
	 */
	public function performQuack()
	{
		if ($this->quackBehavior) {
			$this->quackBehavior->quack($this->duckType);
		}
		else{

			$this->quackBehavior = new CantQuack();
			$this->quackBehavior->quack($this->duckType);
		}
	}

	/**
	 * [performQuack] check if quckBehavior object is set, if set call the quack function else 
	 * create object for no quack and call quack function
	 * @return [type] [description]
	 */
	public function performSwim()
	{
		if (!$this->swimBehavior) {
			$this->swimBehavior = new CantSwim();
		}
		$this->swimBehavior->swim($this->duckType);
		
	}

	/**
	 * [performQuack] this is other way of doing things, check if object is set or not, set the object if not set, call fly function now.
	 * @return [type] [description]
	 */
	public function performFly()
	{
		if (!$this->flyBehavior) {
			$this->flyBehavior = new CantFly();
		}			
		$this->flyBehavior->fly($this->duckType);
	}
}