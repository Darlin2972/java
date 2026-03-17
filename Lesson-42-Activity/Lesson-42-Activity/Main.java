
import java.io.IOException;
import java.sql.*;
//For compiling on the shell on repl: Same on mac
//javac -cp sqlite-jdbc-3.23.1.jar: Main.java

//Use for windows
//javac -cp sqlite-jdbc-3.23.1.jar; ServerExample.java
class Main {

 public static void main(String[] args)throws IOException{
    (new Main()).init();
  }

  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init() {
   
    String queryResult ="";

    Database db = new Database("jdbc:sqlite:students.db" );		
    
	    String sql = "Select * from cr101 Where studentId='STUDENT1001' and period=3 ;";	

      queryResult = db.runSQL(sql,"table-auto");

       print(queryResult);


       sql ="Update cr101 ";
       sql += "Set room=122 ";
       sql += "Where StudentID='STUDENT1001' and period=3;";

      db.runSQL(sql);     

	
    
	     sql = "Select * from cr101 Where StudentID='STUDENT1200' and course='ZQCTEDA' ;";	

      queryResult = db.runSQL(sql,"table-auto");

       print(queryResult);
    
     sql = "Delete from cr101";
     sql += "Where StudentID='STUDENT1200' and Course='ZQCTEDA';";
     db.runSQL(sql);




      sql ="Update cr101 ";
      sql += "Set room=213 ";
      sql += "Where Teacher1='DOYLE' and period=4;";
       
       db.runSQL(sql);



      sql = "Select * from cr101 Where Teacher1='DOYLE' and period=4";	
    
      
      queryResult = db.runSQL(sql,"table-auto");

       print(queryResult);



      sql ="Update cr101 ";
      sql += "Set room=213 ";
      sql += "Where Teacher1='DOYLE' and period=5;";
       
       db.runSQL(sql);



      sql = "Select * from cr101 Where Teacher1='DOYLE' and period=5";	
    
      
      queryResult = db.runSQL(sql,"table-auto");

       print(queryResult);
      }    
}