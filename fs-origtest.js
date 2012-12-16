session = new Session('sofia/external/babcockp@iptel.org');
	
//new comment
session.waitForAnswer(10000);	
    if (session.ready()) {	
       session.sleep(1000);	
       session.streamFile('/usr/local/freeswitch/sounds/en/us/demos/fs-test.wav');    
}
