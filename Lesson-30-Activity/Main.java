class Main {

  public static void main(String[] args) {
    (new Main()).init();
  }
  
  void print(Object o){System.out.println(o);}
  void printt(Object o){System.out.print(o);}

  void init(){
    Car car1= new Car("Bmw","black","x30 xDrive",2024,40000);
    if (car1.value >= 10000);
    car1.honk();
    print(car1.brand);
    print(car1.color);
    print(car1.value);

    Car car2= new Car("mercedes","blue","Amg",2021,30000);
    if (car2.value >= 10000);
    car1.honk();
    print(car2.brand);
    print(car2.color);
    print(car2.value);



  }




  

  
  int randInt(int lower, int upper){
    int range = upper - lower;
    return (int)(Math.random()*range+lower);
  }


}