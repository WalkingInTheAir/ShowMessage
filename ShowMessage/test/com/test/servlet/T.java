
package com.test.servlet;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.core.showmsg.bean.ResultMessage;
import com.core.showmsg.bean.ResultMessageFactory;
import com.core.showmsg.bean.ResultType;

/**
 * Servlet implementation class T
 */
public class T extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public T() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String type = request.getParameter("type");
		ResultMessage msg = null;
		if(ResultType.INFO.getType().equals(type)){
			msg = ResultMessageFactory.getInfoResult("INFO CALL BACK");
		}else if(ResultType.SUCCESS.getType().equals(type)){
			msg = ResultMessageFactory.getSuccessResult("SUCCESS CALL BACK");
		}else if(ResultType.WARNING.getType().equals(type)){
			msg = ResultMessageFactory.getWarningResult("WARNING CALL BACK");
		}else if(ResultType.ERROR.getType().equals(type)){
			msg = ResultMessageFactory.getErrorResult("ERROR CALL BACK");
		}
		
		if (msg == null){
			msg = ResultMessageFactory.getInfoResult("INFO CALL BACK");
		}
		
		response.getWriter().println(msg.getJSONResult());
	}

}
