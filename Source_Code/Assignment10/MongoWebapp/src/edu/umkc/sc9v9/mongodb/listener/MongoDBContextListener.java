package edu.umkc.sc9v9.mongodb.listener;

import java.net.UnknownHostException;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

@WebListener
public class MongoDBContextListener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		MongoClient mongo = (MongoClient) sce.getServletContext()
							.getAttribute("MONGO_CLIENT");
		
		mongo.close();
		System.out.println("MongoClient closed successfully");
	}

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		try {
			ServletContext ctx = sce.getServletContext();
//			MongoClient mongo = new MongoClient(
//					ctx.getInitParameter("MONGODB_HOST"), 
//					Integer.parseInt(ctx.getInitParameter("MONGODB_PORT")));
			MongoClient mongo = new MongoClient(new MongoClientURI( "mongodb://asea10:asea10@ds011830.mlab.com:11830/asea10"));
			System.out.println("MongoClient initialized successfully");
			sce.getServletContext().setAttribute("MONGO_CLIENT", mongo);
		} catch (Exception e) {
			throw new RuntimeException("MongoClient init failed");
		}
	}

}
