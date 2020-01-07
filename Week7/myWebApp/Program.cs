using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace myWebApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

        
    }

    public partial class Demo System.Web.UI.Page  
    {  
	  protected void Page_Load(object sender, EventArgs e)  
	  {  
		SqlCommand command;
		SqlDataReader dataReader;
		String sql, Output =" ";
		sql = "Select TutorialID,TutorialName from demotb";
		
		command = new SqlCommand(sql, cnn);
		
		dataReader = sqlquery.ExecuteReader();
		while (dataReader.Read())
		{
		  Output = Output + dataReader.GetValue(0) + "-" + dataReader.GetValue(1) + "</br>";
		}
		
		Response.Write(Output); 
		dataReader.Close();
		command.dispose();
		conn.Close(); 
			
	  }
	}

    
}
