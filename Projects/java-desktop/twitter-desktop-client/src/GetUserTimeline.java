

/*
 * Copyright 2007 
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//package twitter4j.examples.timeline;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.sql.*;

import twitter4j.Status;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;

public class GetUserTimeline {
	
	Connection conn;
	GetUserTimeline() throws InstantiationException, IllegalAccessException, ClassNotFoundException{
		DB_class db= new DB_class();
		this.conn = db.connect();
		
	}
    /**
     * Usage: java twitter4j.examples.timeline.GetUserTimeline
     *
     * @param args String[]
     * @throws SQLException 
     */
    public  String add_screenname(String screenname) throws SQLException {
        // gets Twitter instance with default credentials
        Twitter twitter = new TwitterFactory().getInstance();
        int check=1;String tweet_text;
        try {
            List<Status> statuses;
            String user;
            UserName uu = new UserName();
           PreparedStatement stmt; 
            
            Statement st = conn.createStatement(); 
			ResultSet res = st.executeQuery("SELECT screenname FROM favorite");
			while (res.next()) 
			{ 
				//int id = res.getInt("id"); 
				String name_db = res.getString("screenname");
				if(name_db.equals(screenname)){
					    check=0;
					break;
				}
				
				//System.out.println(id + "\t" + msg+ "\t" + webpg+ "\t" + myuser+ "\n" ); 
			}
			if(check ==1){

				user = screenname;int y=0;
                statuses = twitter.getUserTimeline(user);
                System.out.println("Showing @" + user + "'s user timeline.");
                for (Status status : statuses) {
            
                 tweet_text=y++ +"\n\n\n- -@" + status.getUser().getScreenName() + " - " + status.getText() ;
                Long tweetid = status.getId();
                 String sql = "INSERT INTO favorite"
             			+ "(username,screenname, tweet_text,tweetid) VALUES"
             			+ "(?,?,?,?)";
                         stmt = conn.prepareStatement(sql);
                         stmt.setString(2,screenname);
                         stmt.setString(3,tweet_text);
                         stmt.setString(1,uu.username);
                         stmt.setLong(4,tweetid);
                          int val=stmt.executeUpdate();
             			if(val==1)
             				System.out.print("Successfully inserted value");
                
                //System.out.println(p +"- -@" + status.getUser().getScreenName() + " - " + status.getText() + " - "+ status.getId() + " - " +status.getCreatedAt().getDate() + " - " +status.getCreatedAt().getMonth() + " - " +status.getCreatedAt().getYear() );
                }
                
            return "successfully added....";
				
			}else{
				System.out.println("\nname already in the list....\n");
				return "name already in the list...";
				
			}
            
            
            
        } catch (TwitterException te) {
            te.printStackTrace();
            System.out.println("Failed to get timeline: " + te.getMessage());
            System.exit(-1);
        }
        return "\0";
    }
	public String[] gettweets() {
		// TODO Auto-generated method stub
		Twitter twitter = new TwitterFactory().getInstance();
        int p=0;String tweet; String[] tweets= new String[21];
        
        try {
            List<Status> statuses;
            String user;
            //if (args.length == 1) {
              UserName u= new UserName();
            user = u.username;
                statuses = twitter.getUserTimeline(user);
            System.out.println("Showing @" + user + "'s user timeline.");
            for (Status status : statuses) {
            	
            	//String ss=status.getCreatedAt().getYear();
            //	int d=Integer.parseInt(status.getCreatedAt().getYear()); 
            	tweet="Tweet No.."+p +"\t- by -@" + status.getUser().getScreenName() + "\n\n\n  - " + status.getText() + " - "+ status.getId() + "\n\n\n ---Date: " +status.getCreatedAt().getDate() + " \nMonth: " +status.getCreatedAt().getMonth();
                tweets[p]=tweet;
            		p++;
            		System.out.println(p +"- -@" + status.getUser().getScreenName() + " - " + status.getText() + " - "+ status.getId() + " - " +status.getCreatedAt().getDate() + " - " +status.getCreatedAt().getMonth() + " - " +status.getCreatedAt().getYear() );
            }
        } catch (TwitterException te) {
            te.printStackTrace();
            System.out.println("Failed to get timeline: " + te.getMessage());
            //System.exit(-1);
        }
		return tweets;
	}
	public String[] gettweetsForDate(String name, String indate, String inmon,
			int yr) {
	
		Twitter twitter = new TwitterFactory().getInstance();
        int p=0;String tweet; String[] tweets= new String[21];
       int yr1=yr-1900;int chk=0;
       String s =indate + " " +inmon + " " +yr1;
       System.out.println(s+"\t........input date..............\n\n");
        try {
            List<Status> statuses;
            String user;
            user = name;
                statuses = twitter.getUserTimeline(user);
            System.out.println("Showing @" + user + "'s user timeline.");
            for (Status status : statuses) {
            	
            	//String ss=status.getCreatedAt().getYear();
            //	int d=Integer.parseInt(status.getCreatedAt().getYear()); 
            	
            	String s1=""+status.getCreatedAt().getDate() + " " +status.getCreatedAt().getMonth() + " " +status.getCreatedAt().getYear();
            	System.out.println(s1+"\t........got date..............\n\n");
                if(s.equals(s1))
                {
                	chk=1;
                	tweet="Tweet No.."+p +"\t- by -@" + status.getUser().getScreenName() + "\n\n\n  - " + status.getText() + " - "+ status.getId() + "\n\n\n ---Date: " +status.getCreatedAt().getDate() + " \nMonth: " +status.getCreatedAt().getMonth();
                	tweets[p]=tweet;
            		p++;
            		System.out.println(p +"- -@" + status.getUser().getScreenName() + " - " + status.getText() + " - "+ status.getId() + " - " +status.getCreatedAt().getDate() + " - " +status.getCreatedAt().getMonth() + " - " +status.getCreatedAt().getYear() );
                }
                if(chk == 0)
                {
                	System.out.println("\nno twee.....\n");
                	tweets[0]="sorry no tweet";
                	return tweets;
                	
                }
           }
        } catch (TwitterException te) {
            te.printStackTrace();
            System.out.println("Failed to get timeline: " + te.getMessage());
            //System.exit(-1);
        }
		return tweets;
		
		
		
		
		
		
	}
	
	
}
