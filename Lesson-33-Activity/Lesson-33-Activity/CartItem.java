class CartItem{
  String itemName;
  double itemPrice;
  int quantity;
  boolean onSale;

  //Create the constructor
 CartItem(String itemName, double itemPrice, int quantity, boolean onSale){
  this.itemName = itemName;
  this.itemPrice = itemPrice;
  this.quantity = quantity;
  this.onSale = onSale;
 }


  
  // write getPrice based on condition detailed in 
  // challenges.txt
double getItemPrice(){
if (onSale);
return itemPrice * 0.10;
else if{
  return itemPrice;
}
}


