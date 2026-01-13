class Main {
  public static void main(String[] args) {
    (new Main()).init();
  }
  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init(){
    Animal bear = new Animal("Bear",400,20.2);
    Animal wolf = new Animal("wolf",90,30.2);

    if(bear.isHealthy()){
      print("Bear is healthy");
    }
      else{
        print("Bear is unhealthy");
      }
    if(wolf.isHealthy()){
      print("wolf is healthy");
    }
      else{
        print("wolf is unhealthy");
  }
  }
  int randInt(int lower, int upper){       
    int range = upper - lower;
    return (int)(Math.random()*range+lower);
  }

}