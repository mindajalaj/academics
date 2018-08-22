
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;
import java.sql.*;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.PasswordField;
import javafx.scene.control.RadioButton;
import javafx.scene.control.TextField;
import javafx.scene.control.ToggleGroup;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;
public class EditProfile extends AnchorPane {
	Stage stage;
	RadioButton Favorite;
	RadioButton Search_by_Date;
	RadioButton Relation;
	RadioButton Trend;
	RadioButton Search_HashTag;
	//Button refresh;
	//Button Logout;
	//Button editProfile;
	@FXML private Label home;
	@FXML private Label result;
	@FXML private TextField name;
	@FXML private PasswordField password;
	@FXML private TextField con_key;
	@FXML private TextField con_secret;
	@FXML private TextField token;
	@FXML private TextField token_sec;
	
	ObservableList<String> entries = FXCollections.observableArrayList();
	@FXML private ListView listview ;

	EditProfile(Stage stage) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
		// TODO Auto-generated constructor stub

		
			FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("profile.fxml"));
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

	        	
	        			       
		        DB_class db = new DB_class();
				Connection	conn = db.connect();
				Statement st = conn.createStatement(); 
				ResultSet res = st.executeQuery("SELECT * FROM user where username ='"+uu.username+"'");
				while(res.next()){
					String nam = res.getString("username"); 
					String pass = res.getString("password");
					String conkey = res.getString("consumer_key");
					String consec = res.getString("consumer_secret");
					String toke= res.getString("access_token");
					String tokensec = res.getString("access_token_secret");
					
					
					
				
					name.setText(nam);
					password.setText(pass);
					con_key.setText(conkey);
					con_secret.setText(consec);
					token.setText(toke);
					token_sec.setText(tokensec);
					//name.setText(nam);
		        	
				}
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
	@FXML protected void find_relation(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
	 
			//System.out.println("\nenter the screennemae of both user\n");
			//FindRelation findRelation = new FindRelation();
			//findRelation.show_relation();
			// TODO Auto-generated method stub
		stage.setScene(new Scene(new FindRelation(stage)));
        stage.setTitle("Twitter client");
        stage.show();

		}
	@FXML protected void home(MouseEvent event) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException {
		// TODO Auto-generated method stub
		
		stage.setScene(new Scene(new Homescreen(stage)));
        stage.setTitle("Twitter client");
        stage.show();

	}
		@FXML protected void search_by_date(ActionEvent event) {
			// TODO Auto-generated method stub
			stage.setScene(new Scene(new SearchByDate(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();

		}
		@FXML protected void update(ActionEvent event) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
			
			   String s = name.textProperty().get();
	           String s1 = password.textProperty().get();
	           String s2 = con_key.textProperty().get();
	           String s3 = con_secret.textProperty().get();
	           String s4 = token.textProperty().get();
	           String s5 = token_sec.textProperty().get();
			System.out.println(s);
			 System.out.println("goin to validate function..\n");
             //Users user=new Users();
             //String result=user.
            String	resul	= validate(s,s1,s2,s3,s4,s5);
             //System.out.println("got result");
             if(resul!=null)
             {    
               //  System.out.println("result not null");
                 result.textProperty().set(resul);
             }
            
					
			//stage.setScene(new Scene(new SearchByDate(stage)));
	        //stage.setTitle("Twitter client");
	        //stage.show();

		}
		public String validate(String username, String password, String outh_keys, String outh_secrets, String access_keys, String access_secrets) throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException {
			// TODO Auto-generated method stub
	    	//Checking if any of the fields is empty
	    	if(!username.matches("[A-Za-z0-9]+"))
			{
				return "username should  be alphanumeric";
			}
			else if(username.length()==0||password.length()==0 || outh_keys.length()==0||outh_secrets.length()==0 || access_keys.length()==0||access_secrets.length()==0 )
	        {
	        	System.out.println("all req\n");
	            return "All Fields Required*";
	        }
	        else
	        {
	        	System.out.println("all fine\n");
	            //Checking if password length is less than 8
	            if(password.length()<8)
	            {
	                
	                return "minimum Password length is 8 charater..";
	            }
	            else
	            {
	               // Checking if the password satisfies any 3 out of 4 condition
	               //Condition1-atleast one digit
	               //Condition2-atleast one Capital Letter
	               //Condition3-atleast one Small letter
	               //Condition4-atleast one out of these 3 ?,%,*
	                int index=0;
	                int capsCount=0;
	                int digitCount=0;
	                int smallCount=0;
	                int specialCount=0;
	                while(index<password.length())
	                {
	                    char c=password.charAt(index);
	                    if(c>=65&&c<97)
	                        capsCount++;
	                    if(c>=97&&c<=122)
	                        smallCount++;
	                    if(c>=48&&c<=57)
	                        digitCount++;
	                    if(c=='?'||c=='%'||c=='*')
	                        specialCount++;
	                     index++;
	                }
	                if(capsCount>0)
	                    capsCount=1;
	                if(smallCount>0)
	                    smallCount=1;
	                if(digitCount>0)
	                    digitCount=1;
	                if(specialCount>0)
	                    specialCount=1;
	                int counter=capsCount+specialCount+smallCount+digitCount;
	                System.out.println("count is "+counter);
	                if(counter<3)
	                    return "Invalid password";
	                else
	                {
	                	System.out.println("cheching for db\n\n");
	                   // All Password Criteria met returning null in errorMessage;
	                	UserDb user = new UserDb();
	                    String re = user.upd_newuser(username,password,outh_keys,outh_secrets,access_keys,access_secrets,1);
	                    if(re.equals("success"))
	                    {	System.out.println("db done...\n");
	                    	//errormessage.setText("\0");
	                    	//errormessage.setVisible(false);
	                    	result.setText(re);
	        				stage.setScene(new Scene(new Homescreen(stage)));
	        				stage.setTitle("Twitter Client");
	        				stage.show();
	        	    
	                    }else{return re;}
	        			 
	                	
	                	
	                	
	                	return null;
	                    
	                }
	            }
	            
	         }
	        
	    }
		@FXML protected  void Logout(ActionEvent event)throws Exception {
			// TODO Auto-generated method stub
			
			
			UserName uu =new UserName();
			uu.username="\0";
			stage.setScene(new Scene(new LoginUser(stage)));
	        stage.setTitle("Twitter Client");
	        stage.show();
	    
			
		}
		@FXML protected  void trend(ActionEvent event) throws ClassNotFoundException, SQLException {
			stage.setScene(new Scene(new Trending(stage)));
	        stage.setTitle("Twitter client");
	        stage.show();

		}
		@FXML protected   void search_by_hashtag(ActionEvent event) throws SQLException, ClassNotFoundException {
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