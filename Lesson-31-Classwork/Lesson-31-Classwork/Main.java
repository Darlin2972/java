class Main {
  public static void main(String[] args) {
    (new Main()).init();
  }
  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init(){
    Animal Animal1 = new animal("Grizzlybear",400,20.2);
    Animal Animal2 = new animal("Wolf",90,30.2);
    if(.isHealthy()){
      print("Grizzlybear is healthy");
      else{
        print("Grizzlybear is unhealthy");
      }
    if(.isHealthy()){
      print("Wolf is healthy");
      else{
        print("Wolf is unhealthy");
  }
   }
    }
  int randInt(int lower, int upper){
    int range = upper - lower;
    return (int)(Math.random()*range+lower);
  }

}