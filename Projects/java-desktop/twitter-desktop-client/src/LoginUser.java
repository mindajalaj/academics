import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Hyperlink;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;


public class LoginUser extends AnchorPane {
	
	
	Stage stage;
	 @FXML private Label succes;
    @FXML private Label errorMessage;
    @FXML private Hyperlink registerLink;
    @FXML private PasswordField password_l;
    @FXML private TextField username_l;
    
    public LoginUser(Stage stage)
    {
        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("LoginUser.fxml"));
        fxmlLoader.setRoot(this);
        fxmlLoader.setController(this);
        this.stage=stage;
        
        try 
        {
        	String myString = "qwerty12*3456";
        	System.out.println(myString.matches("[A-Za-z0-9]+"));
            fxmlLoader.load();
           //registerLink.setVisible(false);
            //errorMessage.textProperty().set("DONE");
        } 
        catch (IOException exception)
        {
            System.out.println("there is an error error");
            throw new RuntimeException(exception);
        }
    
    }
    
    
    @FXML protected void onRegister(MouseEvent event) throws Exception {
       
        stage.setScene(new Scene(new RegisterUser(stage)));
        stage.setTitle("Twitter Client");
        stage.show();
    
    
    }
     
    @FXML protected void loginUser(ActionEvent event) throws Exception 
    {
       // System.out.println("login button pressed");
        //errorMessage.textProperty().set("");
       // LoginUser user=new LoginUser();
        String username=username_l.textProperty().get();
        String password=password_l.textProperty().get();
        //String result=user.
        String result = validate(username,password);
       // System.out.println("got result");
            if(result!=null)
            {    
               // System.out.println("result not null");
                errorMessage.textProperty().set(result);
            }
            /*else
            {
               // System.out.println("verifying credentials");
              //  int uid=user.verifyCredentials(username, password);
               // System.out.println("got uid");
                //if(uid==-1)
                  //  errorMessage.textProperty().set("Credentials do not match");
                //else
                //{
                   stage.setScene(new Scene(new Homescreen(stage)));
                   stage.setTitle("Home");
                   stage.show(); 
                //}
            }*/
    
    }


	public String validate(String username, String password) throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		
		//Checking if any of the fields is empty
		if(!username.matches("[A-Za-z0-9_]+"))
		{
			return "username should  be alphanumeric";
		}
		else if(username.length()==0||password.length()==0)
        {
            return "All 1 Fields Required*";
        }
        else
        {
            //Checking if password length is less than 8
            if(password.length()<8)
            {
                
                return "Invalid Password";
            }
            UserDb user = new UserDb();
            String re = user.search_user_by_name(username,password);
            if(re.equals("success"))
            {	
            	errorMessage.setText("\0");
            	succes.setText(re);
            	
            	
            		DB_class db= new DB_class();
            		Connection  conn = db.connect();
            		
            		
            		Statement st = conn.createStatement(); 
            		ResultSet res = st.executeQuery("SELECT * FROM user where username ='"+username+"'");
            		while (res.next()) 
            		{ 
            			 String consumer_key = res.getString("consumer_key"); 
            			 String consumer_secret = res.getString("consumer_secret"); 
            			 String access_token = res.getString("access_token"); 
            			 String access_token_secret = res.getString("access_token_Secret");
            			 try 
            			 {
							DataOutputStream write=new DataOutputStream(new FileOutputStream("twitter4j.properties"));
							write.writeBytes("#twitter4j.properties"+"\n");
							write.writeBytes("#"+new Date().toString()+"\n");
							write.writeBytes("oauth.consumerSecret="+consumer_secret+"\n");
							write.writeBytes("debug=true"+"\n");
							write.writeBytes("oauth.accessToken="+access_token+"\n");
							write.writeBytes("oauth.accessTokenSecret="+access_token_secret+"\n");
							write.writeBytes("oauth.consumerKey="+consumer_key+"\n");
							
            			 } 
            			 catch (IOException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
            			 
             			System.out.println(consumer_key +"\nyy"+consumer_secret +"\n"+access_token +"\n"+access_token_secret +"\n" );
            			
            		}
            		
				stage.setScene(new Scene(new Homescreen(stage)));
				stage.setTitle("Twitter Client");
				stage.show();
	    
            }else{return re;}
			
			
		}
		return null;
	}

}

