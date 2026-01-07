class Main {
  public static void main(String[] args) {
    (new Main()).init();
  }
  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init(){
 dog d1 = new dog("german sheperd", 5,"toto" );
    d1.bark();
   
    
  }
  class dog{
    String breed;
    int age;
    String name;
  }
  
  dog(String breed, int age , String name ){
    this.breed = breed;
    this.age = age;
    this.name = name;
  }



  
  int randInt(int lower, int upper){
    int range = upper - lower;
    return (int)(Math.random()*range+lower);
  }

}