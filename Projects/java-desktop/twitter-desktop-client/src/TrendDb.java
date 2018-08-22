import java.sql.*;
public class TrendDb {
	
	Connection conn;
	public TrendDb() throws InstantiationException, IllegalAccessException, ClassNotFoundException{
		DB_class db = new DB_class();
		
		this.conn = db.connect();
	}

	public void add_tweets(String args, String tweet_text, long tweet_id)throws SQLException {
		// TODO Auto-generated method stub
		
		
		Statement st = conn.createStatement();
		PreparedStatement stmt; 
        String sql = "INSERT INTO trending"
		+ "(username,hashtag, tweet_text, tweetid) VALUES"
		+ "(?,?,?,?)";
        stmt = conn.prepareStatement(sql);
        UserName u = new UserName();
        stmt.setString(1,u.username);
        stmt.setString(2,args);
        stmt.setString(3,tweet_text);
        stmt.setLong(4,tweet_id);
        int val=stmt.executeUpdate();
		if(val==1)
			System.out.print("Successfully inserted value");

	}

	

}
