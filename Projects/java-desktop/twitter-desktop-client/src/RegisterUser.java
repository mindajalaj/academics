
import java.io.IOException;
import java.sql.SQLException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

public class RegisterUser extends AnchorPane 
{
        Stage stage;
        @FXML private Label succes;
    @FXML private Label errormessage;
    @FXML private TextField username_r;
    @FXML private PasswordField password_r;
    @FXML private TextField outh_key;
    @FXML private TextField outh_secret;
    @FXML private TextField access_key;
    @FXML private TextField access_secret;
    int uid;
    public RegisterUser(Stage stage) {
        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("registerUser.fxml"));
        fxmlLoader.setRoot(this);
        fxmlLoader.setController(this);

    //	UserName uu =new UserName();
		//System.out.println("name..."+uu.username);
    
        
        this.stage=stage;
        try 
        {
            fxmlLoader.load();
            
        } 
        catch (IOException exception)
        {
            throw new RuntimeException(exception);
        }
    
    }
    
    
    @FXML protected void onRegisterButtonClicked(ActionEvent event) throws Exception
    {
    	         //errormessage.textProperty().set(uu.username);
                 String username=username_r.textProperty().get();
                 String password=password_r.textProperty().get();
                 String outh_keys=outh_key.textProperty().get();
                 String outh_secrets=outh_secret.textProperty().get();
                 String access_keys=access_key.textProperty().get();
                 String access_secrets=access_secret.textProperty().get();
                 System.out.println("goin to validate function..\n");
                 //Users user=new Users();
                 //String result=user.
                String	result	= validate(username,password,outh_keys,outh_secrets,access_keys,access_secrets);
                 //System.out.println("got result");
                 if(result!=null)
                 {    
                   //  System.out.println("result not null");
                     errormessage.textProperty().set(result);
                 }
                 /*else
                 {
                        if(user.registerNewUser(username,contact,password)==-1)
                            errorMessage.textProperty().set("User already exists");
                        else
                        {
                               uid= user.registerNewUser(username,contact,password);
                               stage.setScene(new Scene(new Homescreen(stage)));
                               stage.setTitle("Home");
                               stage.show(); 

                        }
                        
                 }*/
                 
        
        
    
    }
     
    public String validate(String username, String password, String outh_keys, String outh_secrets, String access_keys, String access_secrets) throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException {
		// TODO Auto-generated method stub
    	//Checking if any of the fields is empty
    	if(!username.matches("[A-Za-z0-9_]+"))
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
                    String re = user.add_newuser(username,password,outh_keys,outh_secrets,access_keys,access_secrets,0);
                    if(re.equals("success"))
                    {	System.out.println("db done...\n");
                    	errormessage.setText("\0");
                    	errormessage.setVisible(false);
                    	succes.setText(re);
        				stage.setScene(new Scene(new Homescreen(stage)));
        				stage.setTitle("Twitter Client");
        				stage.show();
        	    
                    }else{return re;}
        			 
                	
                	
                	
                	return null;
                    
                }
            }
            
         }
        
    }


	@FXML protected void loginUser(MouseEvent event)
    {
        stage.setScene(new Scene(new LoginUser(stage)));
        stage.setTitle("Twitter client");
        stage.show();
      
        
    }

	@FXML protected void getAccessToken(ActionEvent event) throws Exception{}




}
