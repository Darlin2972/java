class Main {

	public static void main(String[] args) {
    	(new Main()).init();
	}

  void init(){
	double c = ftoc(73.5);
	System.out.println(c);

  }

  
  void print(String msg){
	System.out.println(msg);
	
  }
double ftoc(double f){
	double c =(f-32)*9/5.0;
	return c;
}

double sphereVolume(double r){
	double v =(4/3.0)*Math.PI*r*r*r;
	return v;
	
}

double coneVolume(double r, double h){
	double v = (1.0/3)*Math.PI*r*r*h;
	return v;
}
double distance(double d){
	double p = Math.sqrt(x1-y1),2+(y2-y1),2;
	return p;
}
}