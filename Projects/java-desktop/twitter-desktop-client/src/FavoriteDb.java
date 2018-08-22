import java.sql.*;
public class FavoriteDb {

	Connection conn;
	FavoriteDb() throws InstantiationException, IllegalAccessException, ClassNotFoundException{
		DB_class db= new DB_class();
		this.conn = db.connect();
		
	}
	public String[] getScreenname() throws SQLException {
		int i=0;String[] names = new String[30]; 
		UserName uu = new UserName();
		Statement st = conn.createStatement(); 
		ResultSet res = st.executeQuery("SELECT distinct screenname FROM favorite where username ='"+uu.username+"'");
		while (res.next()) 
		{ 
			//int id = res.getInt("id"); 
			//String msg = res.getString("email"); 
			//String webpg = res.getString("webpage"); 
			 names[i] = res.getString("screenname"); 
			System.out.println(names[i]+i +"\nyy" );
			i++;
		}
		
		//int val = st.executeUpdate("INSERT INTO `hashtag`(username,hashtag,tweet_text,tweetid) VALUES("+"'jalaj'"+",'" +args+ "','"+tweet_text+"','"+tweet_id+"')");
	/*	PreparedStatement stmt; 
        String sql = "INSERT INTO favorite"
		+ "(screenname, tweet_text) VALUES"
		+ "(?,?)";
        stmt = conn.prepareStatement(sql);
        stmt.setString(1,args);
        stmt.setString(2,tweet_text);
        //stmt.setLong(3,tweet_id);
        int val=stmt.executeUpdate();
		if(val==1)
			System.out.print("Successfully inserted value");
		
		*/
		return names;

	}
	public String[] view(String s) throws SQLException {
		// TODO Auto-generated method stub
		String[] name = new String[20];int i=0;
		UserName uu = new UserName();
		Statement st = conn.createStatement(); 
		ResultSet res = st.executeQuery("SELECT * FROM favorite where username ='"+uu.username+"' and screenname ='"+s+"'");
		while (res.next()) 
		{ 
			//int id = res.getInt("id"); 
			String tweetid = res.getString("tweetid"); 
			String tweet_text = res.getString("tweet_text"); 
			 name[i] = res.getString("screenname")+"\n\n"+tweet_text+"\n"+tweetid; 
			System.out.println(name[i]+i +"\nyy" );
			i++;
		}
	
		
		return name;
	}
}
