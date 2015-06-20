<?php
// Copyright 2014 Xubuntu4iran, Released under NewBSD License
function getsdate(){
$today = getdate();
     
     $dm = $today['mday'];
    $mm = $today['mon'];
     $ym = $today['year'];
     $dw= $today['wday'];
if((($ym-1)%4)==0)
	{
	  if($mm==1)
	{
	if($dm>=1 && $dm<=19)
	{
		 $ds= $dm+11;
		 $ms=10;
		 $ys=$ym-622;
	}
	else if($dm>=20 && $dm<=31)
	{
		 $ds= $dm - 19;
		 $ms=11;
		 $ys=$ym-622;
	}
    }
		else if($mm==2)
	{
	if($dm>=1 && $dm<=18)
	{
		 $ds= $dm+12;
		 $ms=11;
		 $ys=$ym-622;
	}
	else if($dm>=19 && $dm<=28)
	{
		 $ds= $dm - 18;
		 $ms=12;
		 $ys=$ym-622;
	}
    }
	else if($mm==3)
	{
	if($dm>=1 && $dm<=20)
	{
		 $ds= $dm+10;
		 $ms=12;
		 $ys=$ym-622;
	}
	else if($dm>=21 && $dm<=31)
	{
		 $ds= $dm - 20;
		 $ms=1;
		 $ys=$ym-621;
	}
    }
    else if($mm==4)
    {	
	if($dm>=1 && $dm<=20)
	{
		 $ds= $dm+11;
		 $ms=1;
		 $ys=$ym-621;
	}
	else if($dm>=21 && $dm<=30)
	{
		 $ds= $dm - 20;
		 $ms=2;
		 $ys=$ym-621;
	}
    }
      else if($mm==5)
    {	
	if($dm>=1 && $dm<=21)
	{
		 $ds= $dm+10;
		 $ms=2;
		 $ys=$ym-621;
	}
	else if($dm>=22 && $dm<=31)
	{
		 $ds= $dm - 21;
		 $ms=3;
		 $ys=$ym-621;
	}
    }
        else if($mm==6)
    {	
	if($dm>=1 && $dm<=21)
	{
		 $ds= $dm+10;
		 $ms=3;
		 $ys=$ym-621;
	}
	else if($dm>=22 && $dm<=30)
	{
		 $ds= $dm - 21;
		 $ms=4;
		 $ys=$ym-621;
	}
    }
            else if($mm==7)
    {	
	if($dm>=1 && $dm<=22)
	{
		 $ds= $dm+9;
		 $ms=4;
		 $ys=$ym-621;
	}
	else if($dm>=23 && $dm<=31)
	{
		 $ds= $dm - 22;
		 $ms=5;
		 $ys=$ym-621;
	}
    }
            else if($mm==8)
    {	
	if($dm>=1 && $dm<=22)
	{
		 $ds= $dm+9;
		 $ms=5;
		 $ys=$ym-621;
	}
	else if($dm>=23 && $dm<=31)
	{
		 $ds= $dm - 22;
		 $ms=6;
		 $ys=$ym-621;
	}
    }
                else if($mm==9)
    {	
	if($dm>=1 && $dm<=22)
	{
		 $ds= $dm+9;
		 $ms=6;
		 $ys=$ym-621;
	}
	else if($dm>=23 && $dm<=30)
	{
		 $ds= $dm - 22;
		 $ms=7;
		 $ys=$ym-621;
	}
    }
             else if($mm==10)
    {	
	if($dm>=1 && $dm<=22)
	{
		 $ds= $dm+8;
		 $ms=7;
		 $ys=$ym-621;
	}
	else if($dm>=23 && $dm<=31)
	{
		 $ds= $dm - 22;
		 $ms=8;
		 $ys=$ym-621;
	}
    }
             else if($mm==11)
    {	
	if($dm>=1 && $dm<=21)
	{
		 $ds= $dm+9;
		 $ms=8;
		 $ys=$ym-621;
	}
	else if($dm>=22 && $dm<=30)
	{
		 $ds= $dm - 21;
		 $ms=9;
		 $ys=$ym-621;
	}
    }
             else if($mm==12)
    {	
	if($dm>=1 && $dm<=21)
	{
		 $ds= $dm+9;
		 $ms=9;
		 $ys=1392;
	}
	else if($dm>=22 && $dm<=31)
	{
		 $ds= $dm - 21;
		 $ms=10;
		 $ys=$ym-621;
	}
    }
}
    else if((($ym-1)%4)!=0)
    {
            if($mm==1)
    {	
	if($dm>=1 && $dm<=20)
	{
		 $ds= $dm+10;
		 $ms=10;
		 $ys=$ym-622;
	}
	else if($dm>=21 && $dm<=31)
	{
		 $ds= $dm - 20;
		 $ms=11;
		 $ys=$ym-622;
	}
    }
          else if($mm==2)
    {	
	if($dm>=1 && $dm<=19)
	{
		 $ds= $dm+11;
		 $ms=11;
		 $ys=$ym-622;
	}
	else if($dm>=20 && $dm<=28)
	{
		 $ds= $dm - 19;
		 $ms=12;
		 $ys=$ym-622;
	}
    }
           else if($mm==3)
    {	
	if($dm>=1 && $dm<=20)
	{
		 $ds= $dm+9;
		 $ms=12;
		 $ys=$ym-622;
	}
	else if($dm>=21 && $dm<=31)
	{
		 $ds= $dm-20;
		 $ms=1;
		 $ys=$ym-621;
	}
    }
          else if($mm==4)
    {	
	if($dm>=1 && $dm<=20)
	{
		 $ds= $dm+11;
		 $ms=1;
		 $ys=$ym-621;
	}
	else if($dm>=21 && $dm<=30)
	{
		 $ds= $dm-20;
		 $ms=2;
		 $ys=$ym-621;
	}
    }
           else if($mm==5)
    {	
	if($dm>=1 && $dm<=21)
	{
		 $ds= $dm+10;
		 $ms=2;
		 $ys=$ym-621;
	}
	else if($dm>=22 && $dm<=31)
	{
		 $ds= $dm-21;
		 $ms=3;
		 $ys=$ym-621;
	}
    }
        else if($mm==6)
    {	
	if($dm>=1 && $dm<=21)
	{
		 $ds= $dm+10;
		 $ms=3;
		 $ys=$ym-621;
	}
	else if($dm>=22 && $dm<=30)
	{
		 $ds= $dm-21;
		 $ms=4;
		 $ys=$ym-621;
	}
    }
        else if($mm==7)
    {	
	if($dm>=1 && $dm<=22)
	{
		 $ds= $dm+9;
		 $ms=4;
		 $ys=$ym-621;
	}
	else if($dm>=23 && $dm<=31)
	{
		 $ds= $dm-22;
		 $ms=5;
		 $ys=$ym-621;
	}
    }
           else if($mm==8)
    {	
	if($dm>=1 && $dm<=22)
	{
		 $ds= $dm+9;
		 $ms=5;
		 $ys=$ym-621;
	}
	else if($dm>=23 && $dm<=31)
	{
		 $ds= $dm-22;
		 $ms=6;
		 $ys=$ym-621;
	}
    }
             else if($mm==9)
    {	
	if($dm>=1 && $dm<=22)
	{
		 $ds= $dm+9;
		 $ms=6;
		 $ys=$ym-621;
	}
	else if($dm>=23 && $dm<=30)
	{
		 $ds= $dm-22;
		 $ms=7;
		 $ys=$ym-621;
	}
    }
            else if($mm==10)
    {	
	if($dm>=1 && $dm<=22)
	{
		 $ds= $dm+8;
		 $ms=7;
		 $ys=$ym-621;
	}
	else if($dm>=23 && $dm<=31)
	{
		 $ds= $dm-22;
		 $ms=8;
		 $ys=$ym-621;
	}
    }
          else if($mm==11)
    {	
	if($dm>=1 && $dm<=21)
	{
		 $ds= $dm+9;
		 $ms=8;
		 $ys=$ym-621;
	}
	else if($dm>=22 && $dm<=30)
	{
		 $ds= $dm-21;
		 $ms=9;
		 $ys=$ym-621;
	}
    }
          else if($mm==12)
    {	
	if($dm>=1 && $dm<=21)
	{
		 $ds= $dm+9;
		 $ms=9;
		 $ys=$ym-621;
	}
	else if($dm>=22 && $dm<=31)
	{
		 $ds= $dm-21;
		 $ms=10;
		 $ys=$ym-621;
	}
    }
    }
    $today['mday']=$ds;
    $today['mon']=$ms;
    $today['year']=$ys;
    return $today;
}

?>
