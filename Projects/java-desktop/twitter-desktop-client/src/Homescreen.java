
import java.io.IOException;
import java.sql.SQLException;
import java.util.Scanner;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.RadioButton;
import javafx.scene.control.ToggleGroup;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;
public class Homescreen extends AnchorPane {
	Stage stage;
	RadioButton Favorite;
	RadioButton Search_by_Date;
	RadioButton Relation;
	RadioButton Trend;
	RadioButton Search_HashTag;
	//Button refresh;
	//Button Logout;
	//Button editProfile;
	@FXML private Label username;
	ObservableList<String> entries = FXCollections.observableArrayList();
	@FXML private ListView listview ;

	Homescreen(Stage stage) throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		// TODO Auto-generated constructor stub

		
			FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("HomeScreen.fxml"));
	        fxmlLoader.setRoot(this);
	        fxmlLoader.setController(this);
	        this.stage=stage;
	        
	        try 
	        {
	        	System.out.println("\nenter your choice.\n\n");
	        	fxmlLoader.load();
	        	UserName uu =new UserName();
	           username.setText(uu.username);
	        	System.out.println("\nenter your choice.ppppppppppppppp\n");

	        	
	        	refresh();
	        	
	        	//list.setMaxHeight(180);
	         
	        	/*for (int i = 0; i < 100; i++) {
	              entries.add("Item \n\t" + i);
	            }
	            entries.add("A\ng\ng\ng\ng");
	            entries.add("B");
	            entries.add("C");
	            entries.add("D");
	            listview.setItems(entries);
	        	*/
	        	
	        	
	        	/*   final ToggleGroup group = new ToggleGroup();

	            //RadioButton rb1 = new RadioButton("Home");
	            Search_HashTag.setToggleGroup(group);
	            Trend.setToggleGroup(group);
	            Favorite.setToggleGroup(group);
	            Search_by_Date.setToggleGroup(group);
	            Relation.setToggleGroup(group);*/
	            //Favorite.setSelected(true);
	            //errorMessage.textProperty().set("");
	        } 
	        catch (IOException exception)
	        {
	            System.out.println(" error");
	            throw new RuntimeException(exception);
	        }
	        
	}
		/*public static void main(String[] args) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException{
	//String screenname;
			System.out.println("\nenter your choice....1. fav list\n2.  search\n3.  trend\n4. find relation \n5. search by day\n\n");
			Scanner  in=new Scanner(System.in);
			int choice = in.nextInt();
			switch(choice)
			{
					case 1:
						favorite_screenname();
						break;
					case 2:
						search_by_hashtag();
						break;
					case 3:
						trend();
						break;
					case 5:
						search_by_date();
						break;
					case 4:
						find_relation();
						break;
					default:System.out.println("\nenter a valid entry\n");
						//favorite_screenname();
						break;
			
			}
		
		
		
		}*/
	public void refresh() throws InstantiationException, IllegalAccessException, ClassNotFoundException
	{
		entries.clear();
		GetUserTimeline u = new GetUserTimeline();
    	
		String[] tweet = u.gettweets();
		

    	for (int i = 0; i < tweet.length; i++) {
          entries.add(tweet[i]);
        }
       
        listview.setItems(entries);
		
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
		@FXML protected  void refresh(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException {
			// TODO Auto-generated method stub
			refresh();
			
		}
		@FXML protected  void trend(ActionEvent event) throws ClassNotFoundException, SQLException {
			// TODO Auto-generated method stub
			//Trending t= new Trending();
			//t.trend();
			stage.setScene(new Scene(new Trending(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();

		}
		@FXML protected   void search_by_hashtag(ActionEvent event) throws SQLException, ClassNotFoundException {
			// TODO Auto-generated method stub
			//SearchByHashtag hashtag = new SearchByHashtag();
			//hashtag.search_Tweets();
			stage.setScene(new Scene(new SearchByHashtag(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();

			/*stage.setScene(new Scene(new SearchByHashtag(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();*/

		}


		@FXML protected  void favorite_screenname(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException{
			
		/*	Favorite fav =new Favorite();
			System.out.println("\nchose from the choice....\n");
			System.out.println("\n1. to view list of fav \n2. to add to favorite\n3. delete from favorite\n4. edit list\n5.get timeline\n\n");
			Scanner in = new Scanner(System.in);
			int choice = in.nextInt();
			switch(choice)
			{
			case 1:fav.view_list();
				
				break;
			case 2:System.out.println("\nenter the screenname..\n");
					Scanner inn = new Scanner(System.in);
						String screenname = in.nextLine();
				fav.add_screenname(screenname);
				break;
			case 3:System.out.println("\nenter the screenname..\n");
			
					Scanner inn2 = new Scanner(System.in);
					 screenname = in.nextLine();
					fav.delete_screenname(screenname); break;
			case 4: break;
			case 5: 
				System.out.println("\nenter the screenname..\n");
				Scanner inn3 = new Scanner(System.in);
				 screenname = in.nextLine();
				fav.get_timeline(screenname); break;
			default: break;
			}
		}*/
			stage.setScene(new Scene(new Favorite(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();


}
}