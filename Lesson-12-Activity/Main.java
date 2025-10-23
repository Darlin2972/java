class Main {

  public static void main(String[] args) {
    (new Main()).init();
  }
  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init(){
   
  }

  String creditCardType(String cardnum){
  if(cardnum.substring(0,1).equals("4")){
  return "visa";
  }
  elseif(cardnum.substring(0,2).equals("34"))||
  (cardnum.substring(0,2).equals("37")){
  return"America Express";
  }
  elseif(cardnum.substring(0,2).equals("36")){
  return"Diner Club";
  }
  elseif(cardnum.substring(0,2).equals("51"))||
  (cardnum.substring(0,2).equals("55")){
  return "Mastercard";
  }
  elseif(cardnum.substring(0,4).equals("6011"))||
  (cardnum.substring(0,2).equals("65")){
    return "Discovery";
  }
  else{
    return "none";
  }
  }

  String pigLatin(String word){
 return word.substring(1)+word.substring(0,1)+"ay";
  }

  String nyclocate(String zip){
    if(zip.substring(0,3).equals("100")|| 
    (zip.substring(0,3).equals("101")||
    (zip.substring(0,3).equals("102")){
    return"manhattan";
    }
    elseif(zip.substring(0,3).equals("103"){
      return "statenIsland";
    }
    boolean  validatepswd(String passwd){
      if(passwd.length()>=5&& passwd.length()<= 8 && passwd.indexof("^")==-1 &&  passwd.indexof("*")==-1)
    }
  }
  
}

  
  

