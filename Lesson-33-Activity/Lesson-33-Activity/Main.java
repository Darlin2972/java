class Main {

  public static void main(String[] args) {
    (new Main()).init();
  }
  
  void print(Object o){System.out.println(o);}
  void printt(Object o){System.out.print(o);}

  void init(){
    CartItem CartItem1 = new CartItem("eggs",8,1,onSale);
    CartItem CartItem2 = new CartItem("milk",5,2,onSale);
    CartItem CartItem3 = new CartItem("laptop",500,1,onSale);

    print(CartItem1.itemName + CartItem1.itemPrice);
  }


  

  
  int randInt(int lower, int upper){
    int range = upper - lower;
    return (int)(Math.random()*range+lower);
  }


}