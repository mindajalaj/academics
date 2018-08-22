//package twitter4j.examples.friendship;

import twitter4j.Relationship;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;

/**
 * Shows friendship between two users.
 *
 * @author Yusuke Yamamoto - yusuke at mac.com
 */
public final class ShowFriendship {
    /**
     * Usage: java twitter4j.examples.friendship.ShowFriendship  [source screen name] [target screen name]
     *
     * @param args message
     */
    public String[] show(String screenname_1,String screenname_2) {
        String[] s= new String[2];
        try {
            Twitter twitter = new TwitterFactory().getInstance();
            Relationship relationship = twitter.showFriendship(screenname_1, screenname_2);
            //System.out.println("isSourceBlockingTarget: " + relationship.isSourceBlockingTarget());
 
            if(relationship.isSourceFollowedByTarget()){
            	s[0] ="\n"+screenname_2+"\t\t\tis following\t\t\t"+screenname_1+"\n";
            }else{
            	s[0] ="\n"+screenname_2+"\t\t\tis not following\t\t\t"+screenname_1+"\n";
            }
            
            if(relationship.isSourceFollowingTarget()){
            	s[1] ="\n"+screenname_1+"\tis following\t"+screenname_2+"\n";
            }else{
            	s[1] ="\n"+screenname_1+"\tis not following\t"+screenname_2+"\n";
            }
            
            System.out.println("is"+screenname_1+"(Source)FollowedBy"+screenname_2+"(Target): " + relationship.isSourceFollowedByTarget());
            System.out.println("is"+screenname_1+"SourceFollowingBy"+screenname_2+"Target: " + relationship.isSourceFollowingTarget());
            //System.out.println("isSourceNotificationsEnabled: " + relationship.isSourceNotificationsEnabled());
            //System.out.println("canSourceDm: " + relationship.canSourceDm());
            //System.exit(0);
        } catch (TwitterException te) {
            te.printStackTrace();
            System.out.println("Failed to show friendship: " + te.getMessage());
            System.exit(-1);
        }
        return s;
    }
}
