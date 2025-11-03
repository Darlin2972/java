class Main {
  public static void main(String[] args) {
    (new Main()).init();
  }
  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init(){
print(encryption2("abcdefghi"));
print(encryption3("abcdef"));
    
  }

  //will use reverse for problem 3
  String reverse(String s){
    String bld="";
    for(int x=s.length()-1; x>=0; x--)
      bld+=s.substring(x,x+1);

    return bld;
  }

String encryption2(String t){
  String bld="";
  for(int x=0; x<t.length()-2;x+=2){
    bld += t.substring(x+1,x+2)+t.substring(x,x+1);
  }
  return bld;
  }

String encryption3(String f){
  String bld="";
  for(int x=0; x<f.length()-1; x++){
  String encryption3 = f.substring(x,x+1);
  bld = encryption3+bld;
  }
  return bld;
  }
}




