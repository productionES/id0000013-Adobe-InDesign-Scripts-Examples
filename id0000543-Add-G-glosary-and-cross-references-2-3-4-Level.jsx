// if you have a string to find and replace like:  dream(s) to avoid errors you need write like this:  dream\\(s\\) the reason is because a second requirement is the correct language formatting of the text. E.g. If the found text is formatted with [No Language] , also if you are using German language formatting instead of English language formatting.
//            FIND AND REPLACE TEXT USING GREP
//replaceTextUsingGREP ("^([D])$","~M$1"); // add a Break Column before letter D (Index Section Heading) 
replaceTextUsingGREP ("(\^aspiring and engaging0000001)((.+?)$)","aspirante y comprometida$2, g");
replaceTextUsingGREP ("(\^mantra of0000002)((.+?)$)","mantra de$2");
replaceTextUsingGREP ("(\^innate0000003)((.+?)$)","innatos$2, g");
replaceTextUsingGREP ("(\^intellectually\-formed0000004)((.+?)$)","adquiridos intelectualmente$2, g");
replaceTextUsingGREP ("(\^conceptual0000005)((.+?)$)","conceptual$2, g");
replaceTextUsingGREP ("(\^non\-conceptual0000006)((.+?)$)","no conceptual$2, g");
replaceTextUsingGREP ("(\^primary0000007)((.+?)$)","primaria$2, g");
replaceTextUsingGREP ("(\^mental0000008)((.+?)$)","mental$2, g");
replaceTextUsingGREP ("(\^collection of0000011)((.+?)$)","acumulación de$2, g");
replaceTextUsingGREP ("(\^collection of0000010)((.+?)$)","acumulación de$2, g");
replaceTextUsingGREP ("(\^vigilancia mental0000001)((.+?)$)","vigilancia mental$2, g");
replaceTextUsingGREP ("(\^mente de la iluminación0000015)((.+?)$)","mente de la iluminación  (véase bodhichita)");
replaceTextUsingGREP ("(\^poderes sobrenaturales0000016)((.+?)$)","poderes sobrenaturales  (véase designación)");
   


function replaceTextUsingGREP (input, output) { 
    app.findGrepPreferences = app.changeGrepPreferences = NothingEnum.nothing; 
    app.findGrepPreferences.findWhat = input;
    app.changeGrepPreferences.changeTo = output;
    //app.activeDocument.changeGrep(); 
    var changedResults = app.activeDocument.changeGrep();
    app.findGrepPreferences = app.changeGrepPreferences = NothingEnum.nothing; 

    if ( changedResults.length === 0)  { 
        var errorInfo= "ERROR: Not found: " + input + "\n";
        $.writeln(errorInfo);   //alert (errorInfo); 
    } 
    if ( changedResults.length >= 2)  { 
        var errorInfo= "ERROR: The Text: " + input + " was replaced "+ changedResults.length +" times. \n(Normally the changes should affect only one text.)" + "\n";
         $.writeln(errorInfo);  //alert (errorInfo);
    }
}






//             FIND AND REPLACE TEXT USING FIND
//replaceTextUsingFIND ("acciones^%", "acciones^% (véase también karma)");     
//replaceTextUsingFIND ("adiestramiento de la mente^%  \d", "adiestramiento de la mente^%  ");    

function replaceTextUsingFIND (input, output)    {    
    app.findTextPreferences = app.changeTextPreferences = NothingEnum.nothing;    
    app.findTextPreferences.findWhat = input;    
    app.changeTextPreferences.changeTo = output;    
    //app.activeDocument.changeText(); 
    var changedResults = app.activeDocument.changeText();    
    app.findTextPreferences = app.changeTextPreferences = NothingEnum.nothing;     

    if ( changedResults.length === 0)  { 
        var errorInfo= "ERROR: Not found: " + input + "\n";
        alert (errorInfo); $.writeln(errorInfo);
    } 
    if ( changedResults.length >= 2)  { 
        var errorInfo= "ERROR: The Text: " + input + " was replaced "+ changedResults.length +" times. \n(Normally the changes should affect only one text.)" + "\n";
        alert (errorInfo); $.writeln(errorInfo);   
    }   
}