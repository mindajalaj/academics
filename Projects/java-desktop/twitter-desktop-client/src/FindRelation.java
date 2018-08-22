import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;
import java.sql.SQLException;
import java.util.Scanner;
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

import java.sql.*;


public class FindRelation extends AnchorPane{
	Stage stage;	
	//TextField hashtag; 
	@FXML private Label home;
	@FXML private Label re;
	ObservableList<String> entries = FXCollections.observableArrayList();
	@FXML private ListView listview ;
	ObservableList<String> entry = FXCollections.observableArrayList();
	@FXML private ListView listName ;
	String screenname_1,screenname_2;
	@FXML private TextField screenname1;
	@FXML private TextField screenname2;
		/*FindRelation(){
			Scanner in =new Scanner(System.in);
			 this.screenname_1=in.nextLine();
			this.screenname_2=in.nextLine();
			
		}*/

	@FXML protected void show_relation(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		entries.clear();
		screenname_1=screenname1.textProperty().get();
		screenname_2=screenname2.textProperty().get();
		if(screenname_1.length()==0||screenname_2.length()==0)
        {
            re.setText("All Fields Required*");
        }
		else if(!screenname_1.matches("[A-Za-z0-9_]+") || !screenname_2.matches("[A-Za-z0-9_]+"))
		{
			re.setText( "username should  be alphanumeric");
		}
        else
        {
        	re.setText( "finidng relation...");
		System.out.println("relation............................."+screenname_1 + "\t"+screenname_2);
		ShowFriendship show= new ShowFriendship();
	 String[] relation =	show.show(screenname_1, screenname_2);
		
	 for (int i = 0; i < relation.length; i++) {
         entries.add(relation[i]);
       }
	 re.setText( "showing realtion");
	 listview.setItems(entries);
	 
	 ScreennameDb name=new ScreennameDb();
		name.addscreename(screenname_1);
		name.addscreename(screenname_1);
		
        }
	}


	
	public FindRelation(Stage stage) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {

		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("Relation.fxml"));
        fxmlLoader.setRoot(this);
        fxmlLoader.setController(this);
        this.stage=stage;
        
        try 
        {
        	System.out.println("\nenter your choice.\n\n");
        	fxmlLoader.load();
        	UserName uu =new UserName();
        	System.out.println("gff\t\t\t"+uu.username+"\trrrrrrrrrrrrrrrrr");
            home.setText(uu.username);
        	System.out.println("\nenter your choice.ppppppppppppppp\n");

        	//list.setMaxHeight(180);
           entries.clear();
           entry.clear();
           DB_class db = new DB_class();
   			Connection conn = db.connect();
   			Statement st = conn.createStatement(); 
   			ResultSet res = st.executeQuery("SELECT * FROM screenname ");
   			while (res.next()) 
   			{ 
   				//int id = res.getInt("id"); 
   				entry.add( res.getString("screenname")); 
   				
   			}
   			
        	listName.setItems(entry);
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

	@FXML protected void trend(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
			//System.out.println("\nenter the screennemae of both user\n");
			//FindRelation findRelation = new FindRelation();
			//findRelation.show_relation();
			// TODO Auto-generated method stub
		stage.setScene(new Scene(new Trending(stage)));
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
















































