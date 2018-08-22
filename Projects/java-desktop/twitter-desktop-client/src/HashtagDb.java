import java.sql.*;
public class HashtagDb {

	Connection conn;
	public HashtagDb() throws InstantiationException, IllegalAccessException, ClassNotFoundException{
		DB_class db = new DB_class();
		
		this.conn = db.connect();
	}
	
	public void add_tweets(String args, String tweet_text, long tweet_id) throws SQLException
	{ /*
		String url = "jdbc:mysql://localhost:3306/"; 
		String dbName = "feedback";
		String driver = "com.mysql.jdbc.Driver"; 
		String userName = "root";
		String password = "mindajalaj";
		try { 
			Class.forName(driver).newInstance(); 
			Connection conn = DriverManager.getConnection(url+dbName,userName,password);
			System.out.println("fbfhbdj");
		*/	
			//Statement st = conn.createStatement();
			
			//int val = st.executeUpdate("INSERT INTO `hashtag`(username,hashtag,tweet_text,tweetid) VALUES("+"'jalaj'"+",'" +args+ "','"+tweet_text+"','"+tweet_id+"')");
			
		UserName u = new UserName();
		PreparedStatement stmt; 
            String sql = "INSERT INTO hashtag"
			+ "(username,hashtag, tweet_text, tweetid) VALUES"
			+ "(?,?,?,?)";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1,u.username);
            stmt.setString(2,args);
            stmt.setString(3,tweet_text);
            stmt.setLong(4,tweet_id);
            int val=stmt.executeUpdate();
			if(val==1)
				System.out.print("Successfully inserted value");

			
			/*ResultSet res = st.executeQuery("SELECT * FROM hashtag");
			while (res.next()) 
			{ 
				int id = res.getInt("hashtag_id"); 
				String msg = res.getString("username"); 
				String webpg = res.getString("hashtag"); 
				String myuser = res.getString("tweet_text"); 
				System.out.println(id + "\t" + msg+ "\t" + webpg+ "\t" + myuser+ "\n" ); 
			}*/

			/*int val = st.executeUpdate("INSERT into comments(myuser,email,webpage,datum,summary,comments) VALUES("+"'dip'"+","+"'ddasd@ad.asd'"+","+"'www.dhhhh.com'"+","+"'2012-02-12'"+","+"'here is the summary'"+","+"'coments'"+")");
			if(val==1)
				System.out.print("Successfully inserted value");
*/
			
			
				//			conn.close();
			
		} 
		
}