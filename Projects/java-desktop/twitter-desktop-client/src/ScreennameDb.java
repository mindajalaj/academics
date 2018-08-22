import java.sql.*;
public class ScreennameDb {

	
	Connection conn;
	public ScreennameDb() throws InstantiationException, IllegalAccessException, ClassNotFoundException{
		DB_class db = new DB_class();
		
		this.conn = db.connect();
	}
	public void addscreename(String screenname_1) throws SQLException {
		// TODO Auto-generated method stub
		
		Statement st = conn.createStatement();
		
		//int val = st.executeUpdate("INSERT INTO `hashtag`(username,hashtag,tweet_text,tweetid) VALUES("+"'jalaj'"+",'" +args+ "','"+tweet_text+"','"+tweet_id+"')");
		PreparedStatement stmt; 
        String sql = "INSERT INTO screenname"
		+ "(screenname) VALUES"
		+ "(?)";
        stmt = conn.prepareStatement(sql);
        stmt.setString(1,screenname_1);
        //stmt.setString(2,tweet_text);
        //stmt.setLong(3,tweet_id);
        int val=stmt.executeUpdate();
		if(val==1)
			System.out.print("Successfully inserted value");


		
	}
	
	
	
}
