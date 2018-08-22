import java.sql.*;

import javafx.scene.Scene;
public class UserDb {
	Connection conn;
	public UserDb() throws InstantiationException, IllegalAccessException, ClassNotFoundException{
		DB_class db = new DB_class();
		
		this.conn = db.connect();
	}

	public String search_user_by_name(String username, String password) throws SQLException {
		// TODO Auto-generated method stub
		

		Statement st = conn.createStatement();
		ResultSet res = st.executeQuery("SELECT username,password FROM user where username='"+username+"'");
		int y=0;
		while (res.next()) 
		{ 	y=1;
			
			if(password.equals(res.getString("password")))
			{
				
				UserName uu =new UserName();
            
				uu.username=username;
				return "success";
			}
		}
		if(y==1){return "wrong password....";}else{
			return "wrong username....";
		}
		
		
		//return null;
	}

	public String add_newuser(String username, String password,
			String outh_keys, String outh_secrets, String access_keys,
			String access_secrets,int chk) throws SQLException {
		System.out.println("in db now...n\n");

		Statement st = conn.createStatement();
		ResultSet res = st.executeQuery("SELECT username FROM user where username='"+username+"'");
		int y=0;
		while (res.next()) 
		{ 	if(chk==0){
			y=1;
			return "username ...."+username+"  already exist.";
		}
		}
		if(y==1){return "";}else{
			
			System.out.println("insert into db.......\n");
			PreparedStatement stmt; 
            String sql = "INSERT INTO user"
			+ "(username,password, consumer_key, consumer_secret,access_token,access_token_secret) VALUES"
			+ "(?,?,?,?,?,?)";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1,username);
            stmt.setString(2,password);
            stmt.setString(3,outh_keys);
            stmt.setString(4,outh_secrets);
            stmt.setString(5,access_keys);
            stmt.setString(6,access_secrets);
            
            int val=stmt.executeUpdate();
			if(val==1)
				System.out.print("Successfully inserted value");

			
			
			
			UserName uu =new UserName();
            uu.username=username;
			return "success....";
		}
		
			
				
				
		
		
		
		
	}

	public String upd_newuser(String username, String password,
			String outh_keys, String outh_secrets, String access_keys,
			String access_secrets,int chk) throws SQLException {
		System.out.println("in db now...n\n");

		Statement st = conn.createStatement();
		ResultSet res = st.executeQuery("SELECT username FROM user where username='"+username+"'");
		int y=0;
		while (res.next()) 
		{ 	if(chk==0){
			y=1;
			return "username ...."+username+"  already exist.";
		}
		}
		if(y==1){return "";}else{
			
			System.out.println("insert into db.......\n");
			PreparedStatement stmt; 
            String sql = "INSERT INTO user"
			+ "(username,password, consumer_key, consumer_secret,access_token,access_token_secret) VALUES"
			+ "(?,?,?,?,?,?)";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1,username);
            stmt.setString(2,password);
            stmt.setString(3,outh_keys);
            stmt.setString(4,outh_secrets);
            stmt.setString(5,access_keys);
            stmt.setString(6,access_secrets);
            
            int val=stmt.executeUpdate();
			if(val==1)
				System.out.print("Successfully inserted value");

			
			
			
			UserName uu =new UserName();
            uu.username=username;
			return "success....";
		}
		
			
				
				
		
		
		
		
	}
	
	
	
}
