
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
  Database   db =  new  Database("jdbc:sqlite:students.db" );

  String sql = "Select * From cr101 Where Teacher1 = 'BANU' ;";	

  String queryResult = db.runSQL(sql,"table-auto");

    print(queryResult);



     sql = "Select * From cr101 Where Teacher1 = 'PORCHETTA' and Period = 10 ;";	

   queryResult = db.runSQL(sql,"table-auto");

    print(queryResult);
    


   sql = "Select Distinct  studentid from cr101  ;";	

   queryResult = db.runSQL(sql,"table-auto");

    print(queryResult);


     sql = "Select Distinct studentid and course and period from cr101  ;";	

   queryResult = db.runSQL(sql,"table-auto");

    print(queryResult);


     sql = "Select Distinct course %X from cr101  ;";	

   queryResult = db.runSQL(sql,"table-auto");

    print(queryResult);

    


    
     
  }    
}