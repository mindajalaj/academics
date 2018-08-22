<?php


require_once("./ducks/ForestDuck.php");
require_once("./ducks/RedHeadDuck.php");
require_once("./ducks/RubberDuck.php");
require_once("./flyBehaviors/RocketFly.php");
require_once("./quackBehaviors/SqueakQuack.php");
require_once("./swimBehaviors/FreeStyleSwim.php");



print_r("Duck Sim begins!<br/><br/>");

//for other language, duck1 is of type AbstractDuck
$duck1 = new ForestDuck();

$duck1->display();

$duck1->performQuack();

$duck1->setQuackingBehavior(new SqueakQuack);

$duck1->performQuack();


$duck2 = new RedHeadDuck();

$duck2->display();

$duck2->performSwim();

$duck2->setSwimBehavior(new FreeStyleSwim);

$duck2->performSwim();

$duck3 = new RubberDuck();

$duck3->display();

$duck3->performFly();