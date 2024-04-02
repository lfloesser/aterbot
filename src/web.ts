import HTTP from 'node:http';

const PORT = process.PORT || 5500;
const server = HTTP.createServer((request, response) => {
	response.writeHead(200, {
		"Access-Control-Allow-Origin": "https://replit.com",
		"Access-Control-Allow-Methods": "GET, PING, OPTIONS",
		"Content-Type": "text/html"
	} as const);
	response.end("<h3>Copy me, the url above!</h3>");
});



export default (): void => {
	server.listen(PORT, () => console.log("Server for UptimeRobot is ready!"));
};

exports.handler = async (event, context) => {
 const url = 'https://aterbot-dgdp.onrender.com/';

 return new Promise((resolve, reject) => {
   const req = HTTP.get(url, (res) => {
     if (res.statusCode === 200) {
       resolve({
         statusCode: 200,
         body: 'Server pinged successfully',
       });
     } else {
       reject(
         new Error(`Server ping failed with status code: ${res.statusCode}`)
       );
     }
   });

   req.on('error', (error) => {
     reject(error);
   });

   req.end();
 });
};
