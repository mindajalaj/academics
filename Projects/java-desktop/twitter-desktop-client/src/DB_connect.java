import java.sql.*;
//import java.util.Scanner;
public class DB_connect { 
	public static void main(String[] args)
	{ 
	//	Scanner scvb=new Scanner(System.in);
		//System.out.println(scvb.nextLine()+ "gyygygygyy\n\n");
		String url = "jdbc:mysql://localhost:3306/"; 
		String dbName = "feedback";
		String driver = "com.mysql.jdbc.Driver"; 
		String userName = "root";
		String password = "mindajalaj";
		try { 
			Class.forName(driver).newInstance(); 
			Connection conn = DriverManager.getConnection(url+dbName,userName,password);
			System.out.println("fbfhbdj");
			
			Statement st = conn.createStatement(); 
			ResultSet res = st.executeQuery("SELECT * FROM comments");
			while (res.next()) 
			{ 
				int id = res.getInt("id"); 
				String msg = res.getString("email"); 
				String webpg = res.getString("webpage"); 
				String myuser = res.getString("myuser"); 
				System.out.println(id + "\t" + msg+ "\t" + webpg+ "\t" + myuser+ "\n" ); 
			}

			/*int val = st.executeUpdate("INSERT into comments(myuser,email,webpage,datum,summary,comments) VALUES("+"'dip'"+","+"'ddasd@ad.asd'"+","+"'www.dhhhh.com'"+","+"'2012-02-12'"+","+"'here is the summary'"+","+"'coments'"+")");
			if(val==1)
				System.out.print("Successfully inserted value");
*/
			
			
			
			
			
			
			conn.close();
			} 
		catch (Exception e) 
		{ 
			e.printStackTrace(); 
			}
		
	} 


}
