import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

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

import java.sql.*;

public class SearchByHashtag extends AnchorPane{
	Stage stage;	
	@FXML private Label result;
	@FXML private TextField hashtagSearch; 
	@FXML private Label home;
	ObservableList<String> entries = FXCollections.observableArrayList();
	@FXML private ListView listview ;
	@FXML private Label msg;
	
	public SearchByHashtag(Stage stage) {

		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("SearchHashtag.fxml"));
        fxmlLoader.setRoot(this);
        fxmlLoader.setController(this);
        this.stage=stage;
        
        try 
        {
        	System.out.println("\nenter your choice.\n\n");
        	fxmlLoader.load();
        	UserName uu =new UserName();
            home.setText(uu.username);
            result.setText("");
        	System.out.println("\nenter your choice.ppppppppppppppp\n");

        	//list.setMaxHeight(180);
        /*    for (int i = 0; i < 100; i++) {
              entries.add("Item \n\t" + i);
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

	@FXML protected void search_tweets(ActionEvent event) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException {
		// TODO Auto-generated method stub
		
		/*System.out.println("\nenter the hashtag...for which you want to view tweets....\n");
		Scanner  in=new Scanner(System.in);
		String hashtag = in.nextLine();
		//System.out.println("\new.\t\n"+hashtag);*/
		entries.clear();
		String hashTag= hashtagSearch.textProperty().get();
		SearchTweets tweets=new SearchTweets();
		if(hashTag.length()==0)
		{
			
			result.setText("**emplty string..!!");
		}
		else if(!hashTag.matches("[A-Za-z0-9]+"))
		{
			result.setText(" hashtag should  be alphanumeric");
			//return "**username should  be alphanumeric";
		}else{
			msg.setVisible(true);
			msg.setText(" fetching tweets...");
			tweets.ser_tweets(hashTag);
			
		Connection conn;
		DB_class db = new DB_class();
		UserName uu =new UserName();
		conn = db.connect();
		Statement st = conn.createStatement(); 
		ResultSet res = st.executeQuery("SELECT * FROM hashtag where username = '"+ uu.username+"' and hashtag = '"+ hashTag+"'");
		//listview.setVisible(false);
		while (res.next()) 
		{ 
			//int id = res.getInt("id"); 
			String tweet_text = res.getString("tweet_text"); 
			String tweet_id = res.getString("tweetid"); 
			entries.add(tweet_text+"\n"+tweet_id);
			//String myuser = res.getString("myuser"); 
			System.out.println("\tgot from db.............................."+tweet_text+"\n"+tweet_id ); 
		}
		
		result.setText(" showing tweets..");
		  listview.setItems(entries);
		  ///listview.setVisible(true);
		  msg.setVisible(false);
	}}

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
		@FXML protected  void trend(ActionEvent event) throws ClassNotFoundException, SQLException {
			// TODO Auto-generated method stub
			//Trending t= new Trending();
			//t.trend();
			stage.setScene(new Scene(new Trending(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();

		}
		
		@FXML protected  void favorite_screenname(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException{
			
		
			stage.setScene(new Scene(new Favorite(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();


}

}
