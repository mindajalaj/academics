
import java.security.*;
import java.sql.*;

import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;

/**
 * Retweets specified status.
 *
 * @author Yusuke Yamamoto - yusuke at mac.com
 */
public final class RetweetStatus {
    /**
     * Usage: java twitter4j.examples.tweets.RetweetStatus [status id]
     *
     * @param args message
     * @throws SQLException 
     * @throws ClassNotFoundException 
     * @throws IllegalAccessException 
     * @throws InstantiationException 
     */
	Connection conn;
    public RetweetStatus() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException {
        /*if (args.length < 1) {
            System.out.println("Usage: java twitter4j.examples.tweets.RetweetStatus [status id]");
            System.exit(-1);
        }*/
        //System.out.println("Retweeting the status id - [" + args[0] + "].");
    	
    		DB_class db= new DB_class();
    		this.conn = db.connect();
    		
    	}
    
    
		public String[]  trend(String hashTag) throws NumberFormatException, TwitterException{
			
			
			Twitter twitter = new TwitterFactory().getInstance();	
			String[] tweets = new String[35];
    		try{
    			
    			Statement st = conn.createStatement(); 
    			Statement st1 = conn.createStatement();
    			UserName uu= new UserName();
    			ResultSet res=st.executeQuery("select tweetid,tweet_text from trending where username='"+uu.username+"' and status ='no' and hashtag ='"+hashTag+"'  ");
    			int i=0;
    			
    			while (res.next()) 
    			{ 
    				if(i<30){
    				twitter.retweetStatus(Long.parseLong(res.getString("tweetid")));
				 
				 tweets[i] =i+"retweet..\n"+ res.getString("tweetid")+"\n\n"+res.getString("tweet_text");
    				System.out.println(i+"\nSuccessfully retweeted status [" +res.getString("tweetid")  + "].");
    				
    				int val = st1.executeUpdate("UPDATE `trending` SET status='YES' where username='"+uu.username+"' and tweetid ='"+res.getString("tweetid")+"' and hashtag ='"+hashTag+"'");
    				}
    			i++;
    			}
        	//String[] b={"456446259461500928","456427247948165120","456356486998798337","456455784503582720","456446486243328000","456463847201579009"};
        	
           //twitter.retweetStatus(Long.parseLong(args[0]));
            
            
          
            
        /*catch (TwitterException te) {
            te.printStackTrace();
            System.out.println("Failed to retweet: " + te.getMessage());
            System.exit(-1);
        }*/
    		}
    		catch(SQLException e)
    		{
	
	
    		}
    		return tweets;
		}
}
