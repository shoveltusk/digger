use("CURL");
/*
function my_callback(string, arg)
{
  console_log("info", string);
  return true;
}

if (session.ready()) {
  session.answer();

  var curl = new CURL();

  curl.run("POST", "http://www.freeswitch.org/curltest/", "foo=bar&this=has+spaces+in+it", my_callback, "my arg\n", "user:s3cr3tpw");

  session.hangup();
}

*/
	session = new Session('sofia/external/babcockp@iptel.org');
    	var curl = new CURL();
        
	curl.run("GET", "http://babcock2-T61:8024/nextvoter/", "", logResult, "arg1", "");

	session.waitForAnswer(10000);
	 
	if (session.ready()) {
		session.sleep(1000);
		session.streamFile('/usr/local/freeswitch/sounds/en/us/demos/fs-test.wav');
	}

	function logResult(string, arg) {
		console.log("info", string);
		return true;
	}
