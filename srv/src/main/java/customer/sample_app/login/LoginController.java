package customer.sample_app.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import customer.sample_app.errors.ApiError;


@RestController
@RequestMapping("login")
public class LoginController {

    @Autowired
    LoginService loginService;

	// New JV Posting
	@RequestMapping(value = "/new", method = RequestMethod.POST)
    public ResponseEntity<?> newLogin(@RequestBody Login login) throws Exception {
        try {
             return new ResponseEntity<>(loginService.newLogin(login), HttpStatus.OK);
        } catch (Exception ex) {
            ApiError apiError = new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage(),
                    ex.getMessage(), "EL0003");
            return new ResponseEntity<ApiError>(apiError, apiError.getStatus());
        }
    }

}
