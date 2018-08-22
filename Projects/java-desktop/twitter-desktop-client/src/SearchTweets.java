/*
 * Copyright 2007 Yusuke Yamamoto
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

//package twitter4j.examples.search;

import twitter4j.*;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
public class SearchTweets {
    /**
     * Usage: java twitter4j.examples.search.SearchTweets [query]
     *
     * @param args
     * @throws SQLException 
     * @throws ClassNotFoundException 
     */
    public static void ser_tweets(String args) throws SQLException, ClassNotFoundException {
        /*if (args.length < 1) {
            System.out.println("\nenter a valid query\n");
            System.exit(-1);
        }*/
        String src ="testing.doc",des="checking";
        Twitter twitter = new TwitterFactory().getInstance();
        try {
            Query query = new Query(args);
            QueryResult result;
            
            int i=0;
			 try {
				 String tweet_text;
				 long tweet_id;
				HashtagDb db=new HashtagDb();
				do {
		            
					
	                result = twitter.search(query);
	                List<Status> tweets = result.getTweets();
	                for (Status tweet : tweets) {
	                	i++;
	                	
	                	System.out.println(i+"  @" + tweet.getUser().getScreenName() + " - " + tweet.getText() +" - " + tweet.getId());
	                
	                 tweet_text=i+"\t"+args+"\n\n  @" + tweet.getUser().getScreenName() + "\n\n\n  " + tweet.getText();
	            		tweet_id=tweet.getId();
	    				db.add_tweets(args,tweet_text,tweet_id);      
	                }
	            } while ((query = result.nextQuery()) != null  && (i <50));
	           
	          
			} catch (InstantiationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
            
            //sourceStream.close();

			//desStream.close();
			//......................................
            //System.exit(0);
        } catch (TwitterException te) {
            te.printStackTrace();
            System.out.println("Failed to search tweets: " + te.getMessage());
            System.exit(-1);
        } 
        /*catch(FileNotFoundException e)

		{
	
		System.out.println("File not found");
			
			
					} */

    }

    public  void add_tweets(String args) throws SQLException, ClassNotFoundException {
        /*if (args.length < 1) {
            System.out.println("\nenter a valid query\n");
            System.exit(-1);
        }*/
       
        Twitter twitter = new TwitterFactory().getInstance();
        try {
            Query query = new Query(args);
            QueryResult result;
            
            int i=0;
			 try {
				 String tweet_text;
				 long tweet_id;
				TrendDb db=new TrendDb();
				do {
		            
					
	                result = twitter.search(query);
	                List<Status> tweets = result.getTweets();
	                for (Status tweet : tweets) {
	                	i++;
	                	
	                	System.out.println("@" +i+ tweet.getUser().getScreenName() + " - " + tweet.getText() +" - " + tweet.getId());
	                
	                 tweet_text=i+"\t"+args+"\n\n  @" + tweet.getUser().getScreenName() + "\n\n\n  " + tweet.getText();
	            		
	            		tweet_id=tweet.getId();
	    				db.add_tweets(args,tweet_text,tweet_id);      
	                }
	            } while ((query = result.nextQuery()) != null && (i <50));
	           
	          
			} catch (InstantiationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
            
            //sourceStream.close();

			//desStream.close();
			//......................................
            //System.exit(0);
        } catch (TwitterException te) {
            te.printStackTrace();
            System.out.println("Failed to search tweets: " + te.getMessage());
            System.exit(-1);
        } 
        /*catch(FileNotFoundException e)

		{
	
		System.out.println("File not found");
			
			
					} */

    }
    
}
