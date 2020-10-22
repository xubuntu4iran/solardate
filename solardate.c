#include <stdio.h>
#include <time.h>
#include <string.h>
#include <stdlib.h>

//Developed by xubuntu4iran
//License: BSD

  int isLeap(int ym){
	  int ly;
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

int main(){
	int dm,ds,mm,ms,ym,ys;
	 time_t rawtime;
  struct tm * ptm;

  time ( &rawtime );

  ptm = localtime( &rawtime );
  
  ym= (ptm->tm_year)+1900;
   //printf("%d \n",ym);
	
  mm= (ptm->tm_mon)+1;
  dm=ptm->tm_mday;
  

	
  
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
		ds= dm - 10;
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
   char *mss = malloc(256);

    if (ms == 1){
		strcpy(mss, "Farvardin");
		}
	else if (ms == 2){
		strcpy(mss, "Ordibehesht");
		}
	else if (ms == 3){
		strcpy(mss, "Khordad");
		}
		else if (ms == 4){
		strcpy(mss, "Tir");
		}
		else if (ms == 5){
		strcpy(mss, "Mordad");
		}
		else if (ms == 6){
		strcpy(mss, "Shahrivar");
		}
		else if (ms == 7){
		strcpy(mss, "Mehr");
		}
		else if (ms == 8){
		strcpy(mss, "Aban");
		}
		else if (ms == 9){
		strcpy(mss, "Azar");
		}
		else if (ms == 10){
		strcpy(mss, "Dey");
		}
		else if (ms == 11){
		strcpy(mss, "Bahman");
		}
		else if (ms == 12){
		strcpy(mss, "Esfand");
		}
		
    printf("%s %d, %d AP\n",mss,ds,ys);
	
	
	return 0;	
}
