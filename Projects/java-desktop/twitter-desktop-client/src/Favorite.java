import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ChoiceBox;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.TextField;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

import com.mysql.jdbc.PreparedStatement;


public class Favorite extends AnchorPane{
	Stage stage;
	@FXML private ChoiceBox choiceBox;
	@FXML private Button add;
	@FXML private Button delete;
	@FXML private	TextField screenname;
	@FXML private Label  result;
	@FXML private Label username;
	ObservableList<String> entries = FXCollections.observableArrayList();
	ObservableList<String> entrie = FXCollections.observableArrayList();
	@FXML private ListView listview ;
	 public Favorite(Stage stage) {
        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("Favorite.fxml"));
        fxmlLoader.setRoot(this);
        fxmlLoader.setController(this);

    	        
        this.stage=stage;
        try 
        {
        	
            fxmlLoader.load();
          UserName uu =new UserName();
            username.textProperty().set(uu.username);
            choiceBox.setVisible(false);
            
        } 
        catch (IOException exception)
        {
            throw new RuntimeException(exception);
        }
    
    }

	@FXML protected void view_list(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		add.setVisible(false);
		screenname.setVisible(false);
		
		delete.setVisible(false);
		final FavoriteDb f= new FavoriteDb();
		entries.clear();
		
	final	String[] name = f.getScreenname();
		
		if(name.length<1)
		{
			entries.add("no screenname added......SORRY....");

	        listview.setItems(entries);
			
		}else{
    	for (int i = 0; i < name.length; i++) {
          entries.add(name[i]);
        }
       
    	choiceBox.setVisible(true);
    	result.setVisible(true);
       /* listview.setItems(entries);
       int index =listview.getSelectionModel().getSelectedIndex();
       System.out.println(index+"........................\n");
       String sname = name[index];
       System.out.println(sname+"........................\n");*/
    	result.setText("choose the screenname...");
    	choiceBox.setItems(entries);
    	choiceBox.getSelectionModel().selectedIndexProperty().addListener(new
                ChangeListener<Number>() {
                    public void changed(ObservableValue ov,
                        Number value, Number new_value) {
                    	
                    	String s = name[new_value.intValue()];
                    	 System.out.println(s+"........................\n");
                    	 
                    	try {
                    		entrie.clear();
							String[] tweet=  f.view(s);
							for (int i = 0; i < tweet.length; i++) {
						          entrie.add(tweet[i]);
						        }
							listview.setItems(entrie);
							result.setText("showing tweets of"+s);
						} catch (SQLException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
                           // label.setText(greetings[new_value.intValue()]);
                }
            });
       
	}
	}
	@FXML protected void edit_screenname(ActionEvent event) {
		// TODO Auto-generated method stub
		choiceBox.setVisible(false);
		
	}
	@FXML protected void delete_screenname(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		result.setText("choose the screenname then click above");
		entrie.clear();
       // entry.clear();
        DB_class db = new DB_class();
			Connection conn = db.connect();
			Statement st = conn.createStatement(); 
			UserName uu = new UserName();
			System.out.println("lets see\n");
			ResultSet res = st.executeQuery("SELECT DISTINCT screenname FROM favorite where username='"+uu.username+"' ");
			while (res.next()) 
			{ 
				//int id = res.getInt("id"); 
				entrie.add( res.getString("screenname")); 
				
			}
			System.out.println("lets see2\n");
			
     	listview.setItems(entrie);
		

		System.out.println("lets see3\n");
		screenname.setVisible(false);
		add.setVisible(false);
		delete.setVisible(true);
		choiceBox.setVisible(false);
		
	}

	@FXML protected void add_screenname(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
		
		add.setVisible(true);
		delete.setVisible(false);
		result.setText(" will be added in list");
		choiceBox.setVisible(false);
		screenname.setVisible(true);
		entries.clear();
		}

	@FXML protected void add(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
	
			String nam = screenname.getText();
			 if(nam.length()==0)
				{
					
					result.setText("**emplty string..!!");
				}
			else if(!nam.matches("[A-Za-z0-9_]+"))
			{
				result.setText(" username should  be alphanumeric");
				//return "**username should  be alphanumeric";
			}else{
			GetUserTimeline fav =new GetUserTimeline();
			//result = fav.add_screenname(nam);
			result.textProperty().set(fav.add_screenname(nam));
			ScreennameDb name=new ScreennameDb();
			name.addscreename(nam);
		//	name.addscreename(screenname_1);
		
			add.setVisible(false);
			delete.setVisible(false);
			screenname.setVisible(false);
			
			}
			
		
	}
	@FXML protected void delete(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
				
		add.setVisible(false);
		delete.setVisible(true);
		screenname.setVisible(false);
		int index=listview.getSelectionModel().getSelectedIndex();
		DB_class db = new DB_class();
		Connection conn = db.connect();
		java.sql.PreparedStatement st = conn.prepareStatement("delete from favorite where screenname=? and username= ?");
		UserName uu = new UserName();
		st.setString(1, entrie.get(index));
		st.setString(2,uu.username);
		st.executeUpdate();
		
		entrie.remove(index);
		listview.setItems(entrie);
		
	
	}
	public void delete_screenname(String screenname) {
		// TODO Auto-generated method stub
		
		
	}

	public void get_timeline(String screenname) {
		// TODO Auto-generated method stub
		
	}
	@FXML protected  void find_relation(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
		/*System.out.println("\nenter the screennemae of both user\n");
		FindRelation findRelation = new FindRelation();
		findRelation.show_relation();
		// TODO Auto-generated method stub*/
		
		stage.setScene(new Scene(new FindRelation(stage)));
	    stage.setTitle("Twitter client");
	    stage.show();

		
		
	}
	@FXML protected  void search_by_date(ActionEvent event) {
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
	@FXML protected void home(MouseEvent event) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException {
		// TODO Auto-generated method stub
		
		stage.setScene(new Scene(new Homescreen(stage)));
        stage.setTitle("Twitter client");
        stage.show();

	}
	@FXML protected void editProfile(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		stage.setScene(new Scene(new EditProfile(stage)));
        stage.setTitle("Twitter client");
        stage.show();
		
	}
	@FXML protected void refresh(ActionEvent event) {
		// TODO Auto-generated method stub
		
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
	@FXML protected  void search_by_hashtag(ActionEvent event) throws ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		//Trending t= new Trending();
		//t.trend();
		stage.setScene(new Scene(new SearchByHashtag(stage)));
        stage.setTitle("Twitter client");
        stage.show();

	}
	}
