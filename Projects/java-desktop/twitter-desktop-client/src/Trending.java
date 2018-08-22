import java.sql.SQLException;
import java.util.Scanner;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Scanner;

import twitter4j.TwitterException;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Hyperlink;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.TextField;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;


public class Trending extends AnchorPane {

	Stage stage;	
	@FXML private Label res;
	@FXML private TextField hashtagTrend; 
	@FXML private Label home;
	ObservableList<String> entries = FXCollections.observableArrayList();
	@FXML private ListView listview ;
	
	
	@FXML protected void trend(ActionEvent event) throws ClassNotFoundException, SQLException, InstantiationException, IllegalAccessException, NumberFormatException, TwitterException {
		// TODO Auto-generated method stub
		
	/*	System.out.println("\nenter the hash tag for trending.....\n");
		Scanner sc= new Scanner(System.in);
		String hashtag=sc.nextLine();*/
		String hashTag= hashtagTrend.textProperty().get();
				entries.clear();
				if(hashTag.length()==0)
				{
					
					res.setText("**emplty string..!!");
				}
				else if(!hashTag.matches("[A-Za-z0-9]+"))
				{
					res.setText(" hashtag should  be alphanumeric");
					//return "**username should  be alphanumeric";
				}else{
					res.setText("fetching tweets from twiiter....");
		SearchTweets tweets=new SearchTweets();
		tweets.add_tweets(hashTag);
		res.setText("retweeting it on twttier....");
		RetweetStatus re =new RetweetStatus();
		String[] tweet = re.trend(hashTag);

    	for (int i = 0; i <tweet.length ; i++) {
          entries.add(tweet[i]);
        }
       res.setText("successfull!");
        listview.setItems(entries);
				}
	}
	
	
	public Trending(Stage stage) {

		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("Trend.fxml"));
        fxmlLoader.setRoot(this);
        fxmlLoader.setController(this);
        this.stage=stage;
        
        try 
        {
        	System.out.println("\nenter your choice.\n\n");
        	fxmlLoader.load();
        	UserName uu =new UserName();
            home.setText(uu.username);
        	System.out.println("\nenter your choice.ppppppppppppppp\n");

        	//list.setMaxHeight(180);
          /*  for (int i = 0; i < 100; i++) {
              entries.add("trend \n\t" + i);
            }
            entries.add("A\ng\ng\ng\ng");
            entries.add("B");
            entries.add("C");
            entries.add("D");
            listview.setItems(entries);
        	*/
        	
        } 
        catch (IOException exception)
        {
            System.out.println(" error");
            throw new RuntimeException(exception);
        }
	}

	

	@FXML protected void home(MouseEvent event) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException {
		// TODO Auto-generated method stub
		
		stage.setScene(new Scene(new Homescreen(stage)));
        stage.setTitle("Twitter client");
        stage.show();

	}

	@FXML protected void find_relation(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
			//System.out.println("\nenter the screennemae of both user\n");
			//FindRelation findRelation = new FindRelation();
			//findRelation.show_relation();
			// TODO Auto-generated method stub
		stage.setScene(new Scene(new FindRelation(stage)));
        stage.setTitle("Twitter client");
        stage.show();

		}
		@FXML protected void search_by_date(ActionEvent event) {
			// TODO Auto-generated method stub
			stage.setScene(new Scene(new SearchByDate(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();

		}
		@FXML protected  void Logout(ActionEvent event)throws Exception {
			// TODO Auto-generated method stub
			
			
			UserName uu =new UserName();
			uu.username="\0";
			stage.setScene(new Scene(new LoginUser(stage)));
	        stage.setTitle("Twitter Client");
	        stage.show();
	    
			
		}
		@FXML protected void editProfile(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
			// TODO Auto-generated method stub
			stage.setScene(new Scene(new EditProfile(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();
		}
		@FXML protected  void refresh(ActionEvent event) {
			// TODO Auto-generated method stub
			
		}
		@FXML protected  void search_by_hashtag(ActionEvent event) throws ClassNotFoundException, SQLException {
			// TODO Auto-generated method stub
			//Trending t= new Trending();
			//t.trend();
			stage.setScene(new Scene(new SearchByHashtag(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();

		}
		
		@FXML protected  void favorite_screenname(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException{
			
		
			stage.setScene(new Scene(new Favorite(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();


}

}










































