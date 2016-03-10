


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.*;
import com.ibm.json.java.JSONObject;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

/**
 * Servlet implementation class Update
 */
@WebServlet("/Update")
public class Update extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Update() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		String password = request.getParameter("update_password");
		//System.out.println(password);
		HttpSession session=request.getSession(); 
		String uname = (String)session.getAttribute("username");
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		//out.println(uname);
		MongoClientURI uri = new MongoClientURI("mongodb://asea7:asea7@ds051543.mlab.com:51543/asea7");
		MongoClient client = new MongoClient(uri);
		DB db = client.getDB(uri.getDatabase());
		DBCollection users = db.getCollection("Users");
		JSONObject params = new JSONObject();
		params.put("password", password);
		params.put("username", uname);
		params.put("email", uname);
		BasicDBObject user1 = new BasicDBObject(params);
		BasicDBObject searchQuery = new BasicDBObject().append("username",uname); 
		users.update(searchQuery, user1);
//		out.println("<head><script type=\"text/javascript\">");
//		out.println("function logout()");
//				out.println("{");
//						out.println("var url = \"index.html\";");
//							out.println("window.location(url);");
//						out.println("}");
//						out.println("</script></head>");
		out.println("<html>");
		out.println("<head><link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">");
		out.println("</head>");
		out.println("<body background=\"intro-bg.jpg\">");
		out.println("<div class=\"body\">");
		out.println("<center><font color=\"white\"><h3>password updated successfully</h3></font></center><br />");
		out.println("<center><button onclick=\"location.href = 'index.html';\" id=\"myButton\" class=\"button turquoise\" >Logout</button></center>");
		out.println("</div>");
		out.println("</body>");
		out.println("</html>");
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
