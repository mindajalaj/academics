<?php

class NormalQuack implements QuackBehavior
{
	/**
	 * [quack description]
	 * @return [type] [description]
	 */
	public function quack($type)
	{
		print_r($type." => quack.....quack......!<br/>");
	}
}