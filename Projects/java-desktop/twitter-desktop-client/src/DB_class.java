import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class DB_class {

	public  String url = "jdbc:mysql://localhost:3306/"; 
	public  String dbName = "twitter_app";
	public  String driver = "com.mysql.jdbc.Driver"; 
	public  String userName = "root";
	public  String password = "mindajalaj";
	Connection conn;
	public Connection connect() throws InstantiationException, IllegalAccessException, ClassNotFoundException{
		
		Class.forName(driver).newInstance(); 
		try {
			 conn = DriverManager.getConnection(url+dbName,userName,password);
		

			System.out.println("fbfhbdj");
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return conn;
	}
}
