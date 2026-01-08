class Main {
  public static void main(String[] args) {
    (new Main()).init();
  }
  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init(){
   Dog d1 = new Dog();
   d1.name="Toto";
   d1.age= 4;
   d1.breed ="german sheperd";
  }
  

  



  
  int randInt(int lower, int upper){
    int range = upper - lower;
    return (int)(Math.random()*range+lower);
  }

}