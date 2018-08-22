import javafx.stage.Stage;

import java.io.IOException;
import java.sql.SQLException;
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



public class SearchByDate extends AnchorPane{


	Stage stage;	
	@FXML private TextField screennameDate; 
	@FXML private TextField date1; 
	@FXML private Label result;
	@FXML private TextField mon;
	@FXML private TextField yr;
	@FXML private Label home;
	ObservableList<String> entries = FXCollections.observableArrayList();
	@FXML private ListView listview ;

		
	public SearchByDate(Stage stage) {

		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("SearchDate.fxml"));
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
		String name= screennameDate.textProperty().get();
		String indate= date1.textProperty().get();
		String inmon= mon.textProperty().get();
		String inyr= yr.textProperty().get();
		if(name.length()==0||indate.length()==0 || inmon.length()==0 || inyr.length()==0)
        {
            result.setText("All Fields Required*");
        }
		else if(!name.matches("[A-Za-z0-9_]+"))
		{
		result.setText("screenname should  be alphanumeric");
		}
        else if((!indate.matches("[0-9]+"))||(!inmon.matches("[0-9]+"))||(!inyr.matches("[0-9][0-9][0-9][0-9]")))
        {
        	result.setText("enter digit in date");
        }else{
		int dd=Integer.parseInt(indate);
		int mm =Integer.parseInt(inmon);
		int yr=Integer.parseInt(inyr);
		int valid=0;
		
		if(mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10 || mm==12)
		{
			if(dd>=1 && dd<=31)
			{
				valid=1;
			}
		}
		else if(mm==4 || mm==6 || mm==9 || mm==11)
		{
			if(dd>=1 && dd<=30)
			{
				valid=1;
			}
		}
		else if((yr%400 ==0 && yr%4==0)&& mm==2)
		{
			if(dd>=1 && dd<=29)
			{valid=1;}
		}
		else if((dd>=1 && dd<=28) && mm==2)
		{valid=1;}
		
		
		if(valid==1)
		{
			entries.clear();
			result.setText("fetching tweets....");
			GetUserTimeline u = new GetUserTimeline();
	    	String[] tweet = u.gettweetsForDate(name,indate,inmon,yr);
		
	    	if(tweet[0].equals("sorry no tweet"))
	    	{
	    		result.setText("sorry no tweet");
	    	}
	    	else{
	    	for (int i = 0; i < tweet.length; i++) {
	          entries.add(tweet[i]);
	        }
			result.setText("showing tweets.....");
	        listview.setItems(entries);
	    	}
		}
		else{
			
			result.setText("enter a valid date.!");
			
		}}
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
		@FXML protected void search_by_hashtag(ActionEvent event) {
			// TODO Auto-generated method stub
			stage.setScene(new Scene(new SearchByHashtag(stage)));
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





