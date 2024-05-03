package customer.sample_app.login;

import java.sql.Date;
import java.util.List;

import org.springframework.stereotype.Component;
@Component

public class Login {
	private String employee_collection;
	private Integer posting_type_id;
	private Long payroll_period_id;
	private Integer posting_by_group_id;
	private String remarks;
	private Date posting_date;
	private Long created_by;
	private Integer is_allow_to_post_partial_data;
}