<?php  

 
$arr = array(0=>array(0=>50,1=>50),1=>array(0=>33.3,1=>33.3,2=>33.3),2=>array(0=>125,1=>125,2=>125,3=>125));
echo "<pre>";
var_dump($arr);
echo "<pre>";
//$new_arr = Array
//(
//    [0] => Array
//        (
//            [0] => 208
//            [1] => 208
//            [2] => 158
//            [3] => 125
//        )
//)

//将数组arr转化为数组new_arr(合并相同键值数组并相加)
echo '<br>=====<br>';

$new = addmergearr($arr);
echo "<pre>";
var_dump($new);
echo "<pre>";
function addmergearr($arr){
	$newarr = array();
	if($arr){
		$i = 0;
		foreach($arr as $key=>$val){
			if($i==0){
				$m = $key;
				$newarr[$m] = array(); 
			}
			$i++;
			if($val){
				foreach($val as $vk=>$vv){
					$ife = array_key_exists($vk,$newarr[$m]); //检测键名是否存在
					if($ife){
						$newarr[$m][$vk] += $vv;
					}else{
						$newarr[$m][$vk] = $vv;
					} 
				}
			} 
		}
	}
	return $newarr;
}

 

?>