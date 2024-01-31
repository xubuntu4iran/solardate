
// Copyright 2014 Xubuntu4iran, Released under NewBSD License
 
     var ds,ms,ys;
     var now = new Date();
     var dm = now.getDate();
     var mm = now.getMonth()+1;
     var ym = now.getFullYear();
     var dw= now.getDay();
   
     function isLeap(ym){
	  var ly;
   	if((ym%4)!=0)
	{
		ly = 0;
	}else if((ym%25)!=0){
		
		ly = 1;
		}else if((ym%16)!=0){
		
		ly = 0;
		}else{
		
		ly = 1;
		}
		return ly;
	}  
     
    
	if(isLeap(ym)==1)
	{
	  if(mm==1)
	{
	if(dm>=1 && dm<=20)
	{
		ds= dm+10;
		ms=10;
		ys=ym-622;
	}
	else if(dm>=21 && dm<=31)
	{
		ds= dm - 20;
		ms=11;
		ys=ym-622;
	}
    }
		else if(mm==2)
	{
	if(dm>=1 && dm<=19)
	{
		ds= dm+11;
		ms=11;
		ys=ym-622;
	}
	else if(dm>=20 && dm<=29)
	{
		ds= dm - 19;
		ms=12;
		ys=ym-622;
	}
    }
	else if(mm==3)
	{
	if(dm>=1 && dm<=19)
	{
		ds= dm+10;
		ms=12;
		ys=ym-622;
	}
	else if(dm>=20 && dm<=31)
	{
		ds= dm - 19;
		ms=1;
		ys=ym-621;
	}
    }
    else if(mm==4)
    {	
	if(dm>=1 && dm<=19)
	{
		ds= dm+12;
		ms=1;
		ys=ym-621;
	}
	else if(dm>=20 && dm<=30)
	{
		ds= dm - 19;
		ms=2;
		ys=ym-621;
	}
    }
      else if(mm==5)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+11;
		ms=2;
		ys=ym-621;
	}
	else if(dm>=21 && dm<=31)
	{
		ds= dm - 20;
		ms=3;
		ys=ym-621;
	}
    }
        else if(mm==6)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+11;
		ms=3;
		ys=ym-621;
	}
	else if(dm>=21 && dm<=30)
	{
		ds= dm - 20;
		ms=4;
		ys=ym-621;
	}
    }
            else if(mm==7)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+10;
		ms=4;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=31)
	{
		ds= dm - 21;
		ms=5;
		ys=ym-621;
	}
    }
            else if(mm==8)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+10;
		ms=5;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=31)
	{
		ds= dm - 21;
		ms=6;
		ys=ym-621;
	}
    }
                else if(mm==9)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+10;
		ms=6;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=30)
	{
		ds= dm - 21;
		ms=7;
		ys=ym-621;
	}
    }
             else if(mm==10)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+9;
		ms=7;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=31)
	{
		ds= dm - 21;
		ms=8;
		ys=ym-621;
	}
    }
             else if(mm==11)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+10;
		ms=8;
		ys=ym-621;
	}
	else if(dm>=21 && dm<=30)
	{
		ds= dm - 20;
		ms=9;
		ys=ym-621;
	}
    }
             else if(mm==12)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+10;
		ms=9;
		ys=ym-621;
	}
	else if(dm>=21 && dm<=31)
	{
		ds= dm - 20;
		ms=10;
		ys=ym-621;
	}
    }
}
    else if(isLeap(ym-1)==1)
    {
            if(mm==1)
    {	
	if(dm>=1 && dm<=19)
	{
		ds= dm+11;
		ms=10;
		ys=ym-622;
	}
	else if(dm>=20 && dm<=31)
	{
		ds= dm - 19;
		ms=11;
		ys=ym-622;
	}
    }
          else if(mm==2)
    {	
	if(dm>=1 && dm<=18)
	{
		ds= dm+12;
		ms=11;
		ys=ym-622;
	}
	else if(dm>=19 && dm<=28)
	{
		ds= dm - 18;
		ms=12;
		ys=ym-622;
	}
    }
           else if(mm==3)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+10;
		ms=12;
		ys=ym-622;
	}
	else if(dm>=21 && dm<=31)
	{
		ds= dm-20;
		ms=1;
		ys=ym-621;
	}
    }
          else if(mm==4)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+11;
		ms=1;
		ys=ym-621;
	}
	else if(dm>=21 && dm<=30)
	{
		ds= dm-20;
		ms=2;
		ys=ym-621;
	}
    }
           else if(mm==5)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+10;
		ms=2;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=31)
	{
		ds= dm-21;
		ms=3;
		ys=ym-621;
	}
    }
        else if(mm==6)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+10;
		ms=3;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=30)
	{
		ds= dm-21;
		ms=4;
		ys=ym-621;
	}
    }
        else if(mm==7)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+9;
		ms=4;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=31)
	{
		ds= dm-22;
		ms=5;
		ys=ym-621;
	}
    }
           else if(mm==8)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+9;
		ms=5;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=31)
	{
		ds= dm-22;
		ms=6;
		ys=ym-621;
	}
    }
             else if(mm==9)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+9;
		ms=6;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=30)
	{
		ds= dm-22;
		ms=7;
		ys=ym-621;
	}
    }
            else if(mm==10)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+8;
		ms=7;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=31)
	{
		ds= dm-22;
		ms=8;
		ys=ym-621;
	}
    }
          else if(mm==11)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+9;
		ms=8;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=30)
	{
		ds= dm-21;
		ms=9;
		ys=ym-621;
	}
    }
          else if(mm==12)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+9;
		ms=9;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=31)
	{
		ds= dm-21;
		ms=10;
		ys=ym-621;
	}
    }
    }
        else if(isLeap(ym-2)==1)
    {
            if(mm==1)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+10;
		ms=10;
		ys=ym-622;
	}
	else if(dm>=21 && dm<=31)
	{
		ds= dm - 20;
		ms=11;
		ys=ym-622;
	}
    }
          else if(mm==2)
    {	
	if(dm>=1 && dm<=19)
	{
		ds= dm+11;
		ms=11;
		ys=ym-622;
	}
	else if(dm>=20 && dm<=28)
	{
		ds= dm - 19;
		ms=12;
		ys=ym-622;
	}
    }
           else if(mm==3)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+9;
		ms=12;
		ys=ym-622;
	}
	else if(dm>=21 && dm<=31)
	{
		ds= dm-20;
		ms=1;
		ys=ym-621;
	}
    }
          else if(mm==4)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+11;
		ms=1;
		ys=ym-621;
	}
	else if(dm>=21 && dm<=30)
	{
		ds= dm-20;
		ms=2;
		ys=ym-621;
	}
    }
           else if(mm==5)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+10;
		ms=2;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=31)
	{
		ds= dm-21;
		ms=3;
		ys=ym-621;
	}
    }
        else if(mm==6)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+10;
		ms=3;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=30)
	{
		ds= dm-21;
		ms=4;
		ys=ym-621;
	}
    }
        else if(mm==7)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+9;
		ms=4;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=31)
	{
		ds= dm-22;
		ms=5;
		ys=ym-621;
	}
    }
           else if(mm==8)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+9;
		ms=5;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=31)
	{
		ds= dm-22;
		ms=6;
		ys=ym-621;
	}
    }
             else if(mm==9)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+9;
		ms=6;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=30)
	{
		ds= dm-22;
		ms=7;
		ys=ym-621;
	}
    }
            else if(mm==10)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+8;
		ms=7;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=31)
	{
		ds= dm-22;
		ms=8;
		ys=ym-621;
	}
    }
          else if(mm==11)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+9;
		ms=8;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=30)
	{
		ds= dm-21;
		ms=9;
		ys=ym-621;
	}
    }
          else if(mm==12)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+9;
		ms=9;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=31)
	{
		ds= dm-21;
		ms=10;
		ys=ym-621;
	}
    }
    }
         else if(isLeap(ym-3)==1)
    {
            if(mm==1)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+10;
		ms=10;
		ys=ym-622;
	}
	else if(dm>=21 && dm<=31)
	{
		ds= dm - 20;
		ms=11;
		ys=ym-622;
	}
    }
          else if(mm==2)
    {	
	if(dm>=1 && dm<=19)
	{
		ds= dm+11;
		ms=11;
		ys=ym-622;
	}
	else if(dm>=20 && dm<=28)
	{
		ds= dm - 19;
		ms=12;
		ys=ym-622;
	}
    }
           else if(mm==3)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+9;
		ms=12;
		ys=ym-622;
	}
	else if(dm>=21 && dm<=31)
	{
		ds= dm-20;
		ms=1;
		ys=ym-621;
	}
    }
          else if(mm==4)
    {	
	if(dm>=1 && dm<=20)
	{
		ds= dm+11;
		ms=1;
		ys=ym-621;
	}
	else if(dm>=21 && dm<=30)
	{
		ds= dm-20;
		ms=2;
		ys=ym-621;
	}
    }
           else if(mm==5)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+10;
		ms=2;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=31)
	{
		ds= dm-21;
		ms=3;
		ys=ym-621;
	}
    }
        else if(mm==6)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+10;
		ms=3;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=30)
	{
		ds= dm-21;
		ms=4;
		ys=ym-621;
	}
    }
        else if(mm==7)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+9;
		ms=4;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=31)
	{
		ds= dm-22;
		ms=5;
		ys=ym-621;
	}
    }
           else if(mm==8)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+9;
		ms=5;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=31)
	{
		ds= dm-22;
		ms=6;
		ys=ym-621;
	}
    }
             else if(mm==9)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+9;
		ms=6;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=30)
	{
		ds= dm-22;
		ms=7;
		ys=ym-621;
	}
    }
            else if(mm==10)
    {	
	if(dm>=1 && dm<=22)
	{
		ds= dm+8;
		ms=7;
		ys=ym-621;
	}
	else if(dm>=23 && dm<=31)
	{
		ds= dm-22;
		ms=8;
		ys=ym-621;
	}
    }
          else if(mm==11)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+9;
		ms=8;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=30)
	{
		ds= dm-21;
		ms=9;
		ys=ym-621;
	}
    }
          else if(mm==12)
    {	
	if(dm>=1 && dm<=21)
	{
		ds= dm+9;
		ms=9;
		ys=ym-621;
	}
	else if(dm>=22 && dm<=31)
	{
		ds= dm-21;
		ms=10;
		ys=ym-621;
	}
    }
    }


    function topernumString(x){
		var out = x.toString();
	 out = out.replace(/0/g, "۰");
	 out = out.replace(/1/g, "۱");
	 out = out.replace(/2/g, "۲");
	 out = out.replace(/3/g, "۳");
	 out = out.replace(/4/g, "۴");
	 out = out.replace(/5/g, "۵");
	 out = out.replace(/6/g, "۶");
	 out = out.replace(/7/g, "۷");
	 out = out.replace(/8/g, "۸");
	 out = out.replace(/9/g, "۹");
	 return out;
		}
		    function toarnumString(x){
		var out = x.toString();
		//٠١٢٣٤٥٦٧٨٩
	 out = out.replace(/0/g, "٠");
	 out = out.replace(/1/g, "١");
	 out = out.replace(/2/g, "٢");
	 out = out.replace(/3/g, "٣");
	 out = out.replace(/4/g, "٤");
	 out = out.replace(/5/g, "٥");
	 out = out.replace(/6/g, "٦");
	 out = out.replace(/7/g, "٧");
	 out = out.replace(/8/g, "٨");
	 out = out.replace(/9/g, "٩");
	 return out;
		}

    function toengnumString(x){
		var out = x.toString();
	 out = out.replace(/۰/g, "0");
	 out = out.replace(/۱/g, "1");
	 out = out.replace(/۲/g, "2");
	 out = out.replace(/۳/g, "3");
	 out = out.replace(/۴/g, "4");
	 out = out.replace(/۵/g, "5");
	 out = out.replace(/۶/g, "6");
	 out = out.replace(/۷/g, "7");
	 out = out.replace(/۸/g, "8");
	 out = out.replace(/۹/g, "9");
	 return out;
		}
   function print_solardate(){
	   if(ds <10 && ms <10){
   var dss= topernumString(ds);
	
	var mss= topernumString(ms);
	
	var yss= topernumString(ys);
	
	document.write("<center><span style=\"color:red;padding:4px;background-color:lime; border-radius:10px;border:brown 4px solid; font-size:50px;\"><strong>۰"+dss+"<span style=\"color:violet;\">/</span><span style=\"color:blue\">۰"+mss+"</span><span style=\"color:violet;\">/</span><span style=\"color:green;\">"+yss+"</span></strong></span></center>");
	
}
else if(ds <10 && ms >=10){
	var dss= topernumString(ds);
	
	var mss= topernumString(ms);
	
	var yss= topernumString(ys);
	
	document.write("<center><span style=\"color:red;padding:4px;background-color:lime; border-radius:10px;border:brown 4px solid; font-size:50px;\"><strong>۰"+dss+"<span style=\"color:violet;\">/</span><span style=\"color:blue\">"+mss+"</span><span style=\"color:violet;\">/</span><span style=\"color:green;\">"+yss+"</span></strong></span></center>");
	
	}
else if(ds >=10 && ms <10){
	
	
	var dss= topernumString(ds);
	
	var mss= topernumString(ms);
	
	var yss= topernumString(ys);
	
	document.write("<center><span style=\"color:red;padding:4px;background-color:lime; border-radius:10px;border:brown 4px solid; font-size:50px;\"><strong>"+dss+"<span style=\"color:violet;\">/</span><span style=\"color:blue\">۰"+mss+"</span><span style=\"color:violet;\">/</span><span style=\"color:green;\">"+yss+"</span></strong></span></center>");
	
	}
	else if(ds >=10 && ms >=10){
	var dss= topernumString(ds);
	
	var mss= topernumString(ms);
	
	var yss= topernumString(ys);
	
	document.write("<center><span style=\"color:red;padding:4px;background-color:lime; border-radius:10px;border:brown 4px solid; font-size:50px;\"><strong>"+dss+"<span style=\"color:violet;\">/</span><span style=\"color:blue\">"+mss+"</span><span style=\"color:violet;\">/</span><span style=\"color:green;\">"+yss+"</span></strong></span></center>");
	
	}
}

	function get_solardate_day(){
		return ds;
	}
function get_solardate_month(){
		return ms;
	}
	function get_solardate_year(){
		return ys;
	}
	function get_solardate_month_fa(){
		if (ms==1){
		return "فروردین";
	}
	else if (ms==2){
		return "اردیبهشت";
		}
	else if (ms==3){
		return "خرداد";
		}
	else if (ms==4){
		return "تیر";
		}
	else if (ms==5){
		return "مرداد";
		}
	else if (ms==6){
		return "شهریور";
		}
	else if (ms==7){
		return "مهر";
		}
	else if (ms==8){
		return "آبان";
		}
	else if (ms==9){
		return "آذر";
		}
	else if (ms==10){
		return "دی";
		}
	else if (ms==11){
		return "بهمن";
		}
	else if (ms==12){
		return "اسفند";
		}
	}
	
	
	function get_solardate_month_len(){
		if (ms==1){
		return 31;
	}
	else if (ms==2){
		return 31;
		}
	else if (ms==3){
		return 31;
		}
	else if (ms==4){
		return 31;
		}
	else if (ms==5){
		return 31;
		}
	else if (ms==6){
		return 31;
		}
	else if (ms==7){
		return 30;
		}
	else if (ms==8){
		return 30;
		}
	else if (ms==9){
		return 30;
		}
	else if (ms==10){
		return 30;
		}
	else if (ms==11){
		return 30;
		}
	else if (ms==12){
		return 29;
		}
	}
	
function get_solardate_dayname_fa(){
		if (dw==0){
			return "یکشنبه";
			}
			else if (dw==1){
			return "دوشنبه";
			}
			else if (dw==2){
			return "سه‌شنبه";
			}
			else if (dw==3){
			return "چهارشنبه";
			}
			else if (dw==4){
			return "پنج‌شنبه";
			}
			else if (dw==5){
			return "جمعه";
			}
			else if (dw==6){
			return "شنبه";
			}
			
	}

function get_solardate_dwnum(){
		if (dw==0){
			return "1";
			}
			else if (dw==1){
			return "2";
			}
			else if (dw==2){
			return "3";
			}
			else if (dw==3){
			return "4";
			}
			else if (dw==4){
			return "5";
			}
			else if (dw==5){
			return "6";
			}
			else if (dw==6){
			return "0";
			}
			
	}
