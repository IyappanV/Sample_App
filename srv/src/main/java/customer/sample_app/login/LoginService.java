package customer.sample_app.login;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import customer.sample_app.utils.SqlDateTypeAdapter;

public class LoginService {

    @Autowired
    LoginDAO loginDAO;

    
    // New JV Posting
    public String newLogin(Login login) {
        try {
             Gson gson = new GsonBuilder().registerTypeAdapter(Date.class,new SqlDateTypeAdapter()).create();
             String jsonString = gson.toJson(login);          
             return loginDAO.newLogin(jsonString);
        } catch (Exception ex) {
            throw ex;
        }
    }
    
}
