import java.io.IOException;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Hyperlink;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class TwitterClientApp extends Application {
	Stage stage;

    
    
    public void start(Stage stage)
    {
    	LoginUser a=new LoginUser(stage);
    	stage.setScene(new Scene(a));
        stage.setTitle("Twitter Client ");
        stage.show();
    
    }
    
    public static void main(String[] args) {
		launch(args);
	}
}
