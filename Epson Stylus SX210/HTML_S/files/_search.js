	
var key = "";

// Search mode AND(1) OR(0)
var	SWay = 1;


function makeEntry (){
	this.Name="";
	this.URL = "";
	this.Desc = "";
	this.Category = "";
	return this;
}

function makeArray(n) {
	this.length = n;
	for (var k = 1; k <= n; k++) {
		this[k] = "";
	}
	return this;
}

function makeLinks(size) {
	this.length = size;
	for (var r=1; r<= size; r++) {
		this[r] = new makeEntry();
		this[r].Name = namesArray[r];
		this[r].URL = urlsArray[r];
		this[r].Desc = descArray[r];
	}
	return this;
}

function showAll(linkobj) {
	for (var s=1; s<= linkobj.length; s++) {
		showLink(linkobj,s);
	}
}

function showLink (links, index) {
	document.write("<tr><td>" + links[index].Name + "</td>");
	document.write("<td><a href=" + links[index].URL + ">" + links[index].Desc + "</a></td></tr>");
}


function makeSrchKey() {
	this.SrchKeyIndex="";
	this.DataIndex = "";
	return this;
}

function makeSrchKeyList(size) {	
	this.length = size;
	for (var r=0; r< size; r++) {
		this[r] = new makeSrchKey();
		this[r].SrchKeyIndex = "";
		this[r].DataLength = "";
	}
	return this;

}

function getSWay(){
	var way = 1;
	if( navigator.appName.charAt(0) != "N"){
		way = SWay;
	}
	return way;
}



function resopen()
{
	winOpen('epsonwin4','result.htm',0,80,385,iheight-150);
	
	if(navigator.appName.indexOf("Netscape") != -1){
		return false;
	}
}

function searchLinks(links, keyword){
	var searchWay = getSWay();

	var srchlinksize=0

	var srchnamesArray = new makeArray(srchlinksize);
	var srchurlsArray = new makeArray(srchlinksize);
	var srchdescArray = new makeArray(srchlinksize);


	var srcharraycount=0


	var newkey;


	keyword=keyword.replace(/&/g,"&amp;")
	keyword=keyword.replace(/</g,"&lt;")
	keyword=keyword.replace(/>/g,"&gt;")
	keyword=keyword.replace(/"/g,"&quot;")

	if (keyword != null) {
		newkey=keyword.toLowerCase();
	}
	
	var strsplittmp;
	strsplittmp = newkey.split(" ");
	
	var i;

	for (var q=1; q<=links.length; q++) {
		var newdesc=links[q].Desc.toLowerCase();
		var newname=links[q].Name.toLowerCase();

		var bRet = 0;
		if (searchWay == 1){
			if(newdesc.indexOf(newkey) != -1) {
				bRet = 1;
			} else {
				var strSearch;
				bRet = 1;
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newdesc.indexOf(strSearch) == -1){
						bRet = 0;
						break;
					}
				}
			}
		} else {
			var strSearch;
			if(strsplittmp.length == 1){
				if(newdesc.indexOf(newkey) != -1) {
					bRet = 1;
				}
			} else {
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newdesc.indexOf(strSearch) != -1){
						bRet = 1;
					}
				}
			}
		}
		
		if(bRet == 1){
			srchnamesArray[srcharraycount] = links[q].Name;
			srchurlsArray[srcharraycount] = links[q].URL;
			srchdescArray[srcharraycount] = links[q].Desc;
			srcharraycount += 1;
			continue;
		}

		var bRet = 0;
		if (searchWay == 1){
			if(newname.indexOf(newkey) != -1) {
				bRet = 1;
			} else {
				var strSearch;
				bRet = 1;
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newname.indexOf(strSearch) == -1){
						bRet = 0;
						break;
					}
				}
			}
		} else {
			var strSearch;
			if(strsplittmp.length == 1){
				if(newname.indexOf(newkey) != -1) {
					bRet = 1;
				}
			} else {
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newname.indexOf(strSearch) != -1){
						bRet = 1;
						break;
					}
				}
			}
		}
		
		if(bRet == 1){
			srchnamesArray[srcharraycount] = links[q].Name;
			srchurlsArray[srcharraycount] = links[q].URL;
			srchdescArray[srcharraycount] = links[q].Desc;
			srcharraycount += 1;
			continue;
		}
	}

	var strsplittmp;
	strsplittmp = newkey.split(" ");
	var SrchKeylist = new makeSrchKeyList(strsplittmp.length);


	
	srchlinksize = srcharraycount;

	document.open();

	document.writeln("<!-- saved from url=(0013)about:internet -->");
	document.writeln("<html>");
	document.writeln("<head>");
	
	document.writeln("<meta http-equiv=\"content-type\" content=\"text/html;charset=UTF-8\">");
	
	document.writeln("<meta NAME=\"Version\" CONTENT=\"NPD3973S-00 EN\">");
	document.writeln("<title>Search Results</title>");
	document.writeln("<LINK href=\"files/_style07.css\" rel=stylesheet>");
	
	document.writeln("<script language=\"javascript\">");
	document.writeln("<!--");
	document.writeln("function goMain(url){");
	document.writeln("	window.opener.location.href=url\;");
	document.writeln("}");
	document.writeln("	--></script>");
	
	document.writeln("</head>");
	document.writeln("<body target=\"main\" bgColor=\"#ffffff\">");

	document.writeln("<div class=\"extra-head\">Search Results</div>");

	document.writeln("<div class=\"extra-text\">");
	document.writeln("Search results for : <B>" +keyword.toUpperCase() +"</B>");
	document.writeln("</div>");
	document.writeln("<!-- KeyWord Start -->");

	newkey=keyword.toLowerCase();


	var strsplittmp;
	strsplittmp = newkey.split(" ");
	var strSearch = strsplittmp[0];
	
	for (var q=0; q<srchlinksize; q++) {
		var iIndex;
		var newDst=srchnamesArray[q].toLowerCase();
		if(srchnamesArray[q].length == 0){
			var newdsc = srchdescArray[q].toLowerCase();
			
			for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
				var strSearch = strsplittmp[iCnt];
				iIndex = newdsc.indexOf(strSearch);
				if (searchWay == 1){ //AND
					if(iIndex == -1){
						break;
					}
				} else { //OR
					if(iIndex != -1){
						break;
					}
				}
			}
			var ihit = 0;
			if(iIndex != -1){
				var datatmp = srchdescArray[q].toLowerCase();
				for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
					var strSearch = strsplittmp[iCnt];
					if(datatmp.indexOf(strSearch) == -1){
						SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
						SrchKeylist[iCnt].DataLength = 0;
						continue;
					}
					SrchKeylist[iCnt].SrchKeyIndex = datatmp.indexOf(strSearch);
					SrchKeylist[iCnt].DataLength = strSearch.length;
					var iflag=1;
					for(var iCnt3=0; iCnt3<iCnt; iCnt3++){
						if((SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt3].SrchKeyIndex) && (SrchKeylist[iCnt].SrchKeyIndex < (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
							SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
							SrchKeylist[iCnt].DataLength = 0;
							iflag=0;
							break;	
						}
					}
					if(iflag == 0){
						continue;
					}
					for(var iCnt3=iCnt - 1; iCnt3>=0; iCnt3--){
						if((SrchKeylist[iCnt].SrchKeyIndex < SrchKeylist[iCnt3].SrchKeyIndex) && ((SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) > (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
							SrchKeylist[iCnt3].SrchKeyIndex = datatmp.length;
							SrchKeylist[iCnt3].DataLength = 0;
							ihit--;
						}
					}
					ihit++;
				}

				for(iCnt=0; iCnt<strsplittmp.length - 1; iCnt++){
					for (var iCnt2=1; iCnt2<strsplittmp.length; iCnt2++){
						if(SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt2].SrchKeyIndex){
							var SrchKeyIndextemp = SrchKeylist[iCnt].SrchKeyIndex;
							var DataLengthtemp = SrchKeylist[iCnt].DataLength;
							SrchKeylist[iCnt].SrchKeyIndex = SrchKeylist[iCnt2].SrchKeyIndex;
							SrchKeylist[iCnt].DataLength = SrchKeylist[iCnt2].DataLength;
							SrchKeylist[iCnt2].SrchKeyIndex = SrchKeyIndextemp;
							SrchKeylist[iCnt2].DataLength = DataLengthtemp;
						}
					}
				}

				document.write("<div class=\"result-text\">" + srchdescArray[q].substring(0, SrchKeylist[0].SrchKeyIndex));
				for(iCnt=0; iCnt<ihit; iCnt++){
					if(iCnt < (ihit - 1)){
						document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, SrchKeylist[iCnt + 1].SrchKeyIndex));
					} else {
						document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, srchdescArray[q].length));
					}
				}
				document.write("</div>");
				
			}else {
				document.write("<div class=\"result-text\">" + srchdescArray[q] + "</div>");
			}
		} else {
			iIndex = newDst.indexOf(strSearch);
			for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
				var strSearch = strsplittmp[iCnt];
				iIndex = newDst.indexOf(strSearch);
				if (searchWay == 1){ //AND
					if(iIndex == -1){
						break;
					}
				} else { //OR
					if(iIndex != -1){
						break;
					}
				}
			}
			var redflag = 0;
			if(iIndex != -1){
				redflag = 1;
			}
			var markerflag = 0;
			if(q==0){
				markerflag = 1;
			} else {
				var newSrc=srchnamesArray[q-1].toLowerCase();

				if((newSrc.length == 0) || (newDst.indexOf(newSrc) == -1) ||  ( (newDst.indexOf(newSrc) != -1) && (newDst.length != newSrc.length))) {
					markerflag = 1;
				}
			}
			if(markerflag == 1){
				if(redflag == 1){
					
					var datatmp = srchnamesArray[q].toLowerCase();
					var ihit = 0;
					for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
						var strSearch = strsplittmp[iCnt];
						if(datatmp.indexOf(strSearch) == -1){
							SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
							SrchKeylist[iCnt].DataLength = 0;
							continue;
						}
						SrchKeylist[iCnt].SrchKeyIndex = datatmp.indexOf(strSearch);
						SrchKeylist[iCnt].DataLength = strSearch.length;
						var iflag=1;
						for(var iCnt3=0; iCnt3<iCnt; iCnt3++){
							if((SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt3].SrchKeyIndex) && (SrchKeylist[iCnt].SrchKeyIndex < (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
								SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
								SrchKeylist[iCnt].DataLength = 0;
								iflag=0;
								break;	
							}
						}
						if(iflag == 0){
							continue;
						}
						for(var iCnt3=iCnt - 1; iCnt3>=0; iCnt3--){
							if((SrchKeylist[iCnt].SrchKeyIndex < SrchKeylist[iCnt3].SrchKeyIndex) && ((SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) > (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
								SrchKeylist[iCnt3].SrchKeyIndex = datatmp.length;
								SrchKeylist[iCnt3].DataLength = 0;
								ihit--;
							}
						}
						ihit++;
					}
		
					for(iCnt=0; iCnt<strsplittmp.length - 1; iCnt++){
						for (var iCnt2=1; iCnt2<strsplittmp.length; iCnt2++){
							if(SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt2].SrchKeyIndex){
								var SrchKeyIndextemp = SrchKeylist[iCnt].SrchKeyIndex;
								var DataLengthtemp = SrchKeylist[iCnt].DataLength;
								SrchKeylist[iCnt].SrchKeyIndex = SrchKeylist[iCnt2].SrchKeyIndex;
								SrchKeylist[iCnt].DataLength = SrchKeylist[iCnt2].DataLength;
								SrchKeylist[iCnt2].SrchKeyIndex = SrchKeyIndextemp;
								SrchKeylist[iCnt2].DataLength = DataLengthtemp;
							}
						}
					}

					document.write("<div class=\"result-text\">" + srchnamesArray[q].substring(0, SrchKeylist[0].SrchKeyIndex));
					for(iCnt=0; iCnt<ihit; iCnt++){
						if(iCnt < (ihit - 1)){
							document.write("<font color=\"red\">" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, SrchKeylist[iCnt + 1].SrchKeyIndex));
						} else {
							document.write("<font color=\"red\">" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, srchnamesArray[q].length));
						}
					}
				
					document.write("</div>");
					
				} else {
					document.write("<div class=\"result-text\">" + srchnamesArray[q] + "</div>");
				}
			}
		}
		newDst=srchdescArray[q].toLowerCase();
		for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
			var strSearch = strsplittmp[iCnt];
			iIndex = newDst.indexOf(strSearch);
			if (searchWay == 1){ //AND
				if(iIndex == -1){
					break;
				}
			} else { //OR
				if(iIndex != -1){
					break;
				}
			}
		}
		if(iIndex != -1){
			
			var datatmp = srchdescArray[q].toLowerCase();
			var ihit = 0;
			for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
				var strSearch = strsplittmp[iCnt];
				if(datatmp.indexOf(strSearch) == -1){
					SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
					SrchKeylist[iCnt].DataLength = 0;
					continue;
				}
				SrchKeylist[iCnt].SrchKeyIndex = datatmp.indexOf(strSearch);
				SrchKeylist[iCnt].DataLength = strSearch.length;
				var iflag=1;
				for(var iCnt3=0; iCnt3<iCnt; iCnt3++){
					if((SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt3].SrchKeyIndex) && (SrchKeylist[iCnt].SrchKeyIndex < (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
						SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
						SrchKeylist[iCnt].DataLength = 0;
						iflag=0;
						break;	
					}
				}
				if(iflag == 0){
					continue;
				}
				for(var iCnt3=iCnt - 1; iCnt3>=0; iCnt3--){
					if((SrchKeylist[iCnt].SrchKeyIndex < SrchKeylist[iCnt3].SrchKeyIndex) && ((SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) > (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
						SrchKeylist[iCnt3].SrchKeyIndex = datatmp.length;
						SrchKeylist[iCnt3].DataLength = 0;
						ihit--;
					}
				}
				ihit++;
			}

			for(iCnt=0; iCnt<strsplittmp.length - 1; iCnt++){
				for (var iCnt2=1; iCnt2<strsplittmp.length; iCnt2++){
					if(SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt2].SrchKeyIndex){
						var SrchKeyIndextemp = SrchKeylist[iCnt].SrchKeyIndex;
						var DataLengthtemp = SrchKeylist[iCnt].DataLength;
						SrchKeylist[iCnt].SrchKeyIndex = SrchKeylist[iCnt2].SrchKeyIndex;
						SrchKeylist[iCnt].DataLength = SrchKeylist[iCnt2].DataLength;
						SrchKeylist[iCnt2].SrchKeyIndex = SrchKeyIndextemp;
						SrchKeylist[iCnt2].DataLength = DataLengthtemp;
					}
				}
			}

			document.write("<div class=\"result-link\"><a href=\"javascript:goMain(\'" + srchurlsArray[q] + "\')\">" + srchdescArray[q].substring(0, SrchKeylist[0].SrchKeyIndex));
			for(iCnt=0; iCnt<ihit; iCnt++){

				if(iCnt < (ihit - 1)){
					document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, SrchKeylist[iCnt + 1].SrchKeyIndex));
				} else {
					document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, srchdescArray[q].length));
				}
			}
			document.write("</a></div>");
			
		} else {
			document.write("<div class=\"result-link\"><a href=\"javascript:goMain(\'" + srchurlsArray[q] + "\')\">" + srchdescArray[q] + "</a></div>");
		}
	}


	document.writeln("");
	document.writeln("<!-- KeyWord End -->");

	document.writeln("<div class=\"extra-foot\">");
	document.writeln("If you do not find the results you are looking for, see Search Tips.");
	document.writeln("</div>");
	document.writeln("<div class=\"extra-link\">");
	
	document.writeln("<a href=\"javascript:goMain(\'sch.htm\')\">Search Tips</a>");
	
	document.writeln("</div>");

	document.writeln("<div id=\"closed\"></div>");
	document.writeln("</body>");
	document.writeln("</html>");

	document.close();
}



var linksize=0

namesArray = new makeArray(linksize);
urlsArray = new makeArray(linksize);
descArray = new makeArray(linksize);


var arraycount=0

// ---- search target start -----


arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_6.htm#S-00900-00300"
descArray[arraycount] = "ABBYY FineReader"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_5.htm#S-00900-00500"
descArray[arraycount] = "Attach to E-mail program"
	
arraycount += 1
	
namesArray[arraycount] = "Automatic Document Feeder (ADF)"
urlsArray[arraycount] = "probs_2.htm#S-01200-00710-00200"
descArray[arraycount] = "paper jam in"
	
arraycount += 1
	
namesArray[arraycount] = "Automatic Document Feeder (ADF)"
urlsArray[arraycount] = "scan1_5.htm#S-01010-00400-00100"
descArray[arraycount] = "scanning in Office Mode"
	
arraycount += 1
	
namesArray[arraycount] = "Automatic Document Feeder (ADF)"
urlsArray[arraycount] = "scan1_7.htm#S-00700-01400-00200"
descArray[arraycount] = "scanning in Professional Mode"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_3.htm#S-00900-00220"
descArray[arraycount] = "Backlight Correction"
	
arraycount += 1
	
namesArray[arraycount] = "Buttons, scanner"
urlsArray[arraycount] = "projs_7.htm#S-00900-00700"
descArray[arraycount] = "assigning programs to"
	
arraycount += 1
	
namesArray[arraycount] = "Buttons, scanner"
urlsArray[arraycount] = "scan1_1.htm#S-00700-00600-00100"
descArray[arraycount] = "Control Panel"
	
arraycount += 1
	
namesArray[arraycount] = "Buttons, scanner"
urlsArray[arraycount] = "probs_1.htm#S-01200-00200-00400"
descArray[arraycount] = "problems"
	
arraycount += 1
	
namesArray[arraycount] = "Color"
urlsArray[arraycount] = "scan1_9.htm#S-00700-01700-00300"
descArray[arraycount] = "adjusting"
	
arraycount += 1
	
namesArray[arraycount] = "Color"
urlsArray[arraycount] = "probs_4.htm#S-01200-00400-00600"
descArray[arraycount] = "problems"
	
arraycount += 1
	
namesArray[arraycount] = "Color"
urlsArray[arraycount] = "probs_4.htm#S-01200-00400-01100"
descArray[arraycount] = "problems"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_1.htm#S-00900-00100-00400-00100"
descArray[arraycount] = "Color Palette"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_1.htm#S-00900-00100"
descArray[arraycount] = "Color Restoration"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "scan1_1.htm#S-00700-00600-00100"
descArray[arraycount] = "Control Panel"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_6.htm#S-00900-00300"
descArray[arraycount] = "Converting scan to editable text"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_3.htm#S-00900-00220"
descArray[arraycount] = "Correcting backlit photos"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_3.htm#S-00900-00220"
descArray[arraycount] = "Dark images, fixing"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "probs_4.htm#S-01200-00400-00700"
descArray[arraycount] = "Dark images, fixing"
	
arraycount += 1
	
namesArray[arraycount] = "Documents or photos"
urlsArray[arraycount] = "projs_1.htm#S-00900-00100"
descArray[arraycount] = "restoring color in"
	
arraycount += 1
	
namesArray[arraycount] = "Documents or photos"
urlsArray[arraycount] = "projs_5.htm#S-00900-00500"
descArray[arraycount] = "scanning to e-mail"
	
arraycount += 1
	
namesArray[arraycount] = "Documents or photos"
urlsArray[arraycount] = "projs_4.htm#S-00900-00800"
descArray[arraycount] = "scanning to PDF"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_2.htm#S-00900-00200"
descArray[arraycount] = "Dust Removal"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_6.htm#S-00900-00300"
descArray[arraycount] = "Editable text, converting scan to"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_5.htm#S-00900-00500"
descArray[arraycount] = "E-mail, scanning to"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_7.htm#S-00900-00700-00100"
descArray[arraycount] = "Epson Event Manager"
	
arraycount += 1
	
namesArray[arraycount] = "Epson Scan"
urlsArray[arraycount] = "scan1_2.htm#S-00700-00700"
descArray[arraycount] = "selecting mode"
	
arraycount += 1
	
namesArray[arraycount] = "Epson Scan"
urlsArray[arraycount] = "scan1_1.htm#S-00700-00600"
descArray[arraycount] = "starting"
	
arraycount += 1
	
namesArray[arraycount] = "Epson Scan"
urlsArray[arraycount] = "probs_5.htm#S-01200-00800-00100"
descArray[arraycount] = "uninstalling"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "probs_5.htm#S-01200-00800-00200"
descArray[arraycount] = "Epson software, uninstalling"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "probs_1.htm#S-01200-00100"
descArray[arraycount] = "Errors, scanner"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_1.htm#S-00900-00100"
descArray[arraycount] = "Faded photos, fixing"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "scan1_8.htm#S-00700-01600"
descArray[arraycount] = "File save settings"
	
arraycount += 1
	
namesArray[arraycount] = "Full Auto Mode"
urlsArray[arraycount] = "scan1_4.htm#S-00700-00900"
descArray[arraycount] = "basic settings"
	
arraycount += 1
	
namesArray[arraycount] = "Full Auto Mode"
urlsArray[arraycount] = "probs_3.htm#S-01200-00500-00200"
descArray[arraycount] = "problems"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "scan1_6.htm#S-00700-01100"
descArray[arraycount] = "Home Mode, basic settings"
	
arraycount += 1
	
namesArray[arraycount] = "Light, scanner"
urlsArray[arraycount] = "probs_1.htm#S-01200-00100"
descArray[arraycount] = "error indications"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "maint_1.htm#S-01100-00200"
descArray[arraycount] = "Light source, replacing"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "scan1_9.htm#S-00700-01700-00200-00300"
descArray[arraycount] = "Marquee, creating"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_6.htm#S-00900-00300"
descArray[arraycount] = "OCR (Optical Character Recognition)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "probs_4.htm#S-01200-00400-01000"
descArray[arraycount] = "OCR problems"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "scan1_5.htm#S-00810-00500"
descArray[arraycount] = "Office Mode, basic settings"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "probs_5.htm#S-01200-00800"
descArray[arraycount] = "Operating system, upgrading"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "probs_2.htm#S-01200-00710-00200"
descArray[arraycount] = "Paper jam, Automatic Document Feeder"
	
arraycount += 1
	
namesArray[arraycount] = "PDF"
urlsArray[arraycount] = "projs_4.htm#S-00900-00800"
descArray[arraycount] = "scanning to"
	
arraycount += 1
	
namesArray[arraycount] = "Photos or documents"
urlsArray[arraycount] = "projs_3.htm#S-00900-00220"
descArray[arraycount] = "correcting backlighting in"
	
arraycount += 1
	
namesArray[arraycount] = "Photos or documents"
urlsArray[arraycount] = "projs_2.htm#S-00900-00200"
descArray[arraycount] = "removing dust marks from"
	
arraycount += 1
	
namesArray[arraycount] = "Photos or documents"
urlsArray[arraycount] = "projs_1.htm#S-00900-00100"
descArray[arraycount] = "restoring color in"
	
arraycount += 1
	
namesArray[arraycount] = "Photos or documents"
urlsArray[arraycount] = "projs_5.htm#S-00900-00500"
descArray[arraycount] = "scanning to e-mail"
	
arraycount += 1
	
namesArray[arraycount] = "Photos or documents"
urlsArray[arraycount] = "projs_4.htm#S-00900-00800"
descArray[arraycount] = "scanning to PDF"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "scan1_9.htm#S-00700-01700-00200"
descArray[arraycount] = "Previewing scan"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "probs_4.htm#S-01200-00400"
descArray[arraycount] = "scan quality"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "scan1_7.htm#S-00700-01300"
descArray[arraycount] = "Professional Mode, basic settings"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_2.htm#S-00900-00200"
descArray[arraycount] = "Removing dust marks"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "scan1_9.htm#S-00700-01700-00100"
descArray[arraycount] = "Resolution, selecting"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "projs_1.htm#S-00900-00100"
descArray[arraycount] = "Restoring color"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "scan1_2.htm#S-00700-00700"
descArray[arraycount] = "Scan mode, selecting"
	
arraycount += 1
	
namesArray[arraycount] = "Scanner"
urlsArray[arraycount] = "maint_1.htm#S-01100-00200"
descArray[arraycount] = "replacing light source"
	
arraycount += 1
	
namesArray[arraycount] = "Scanner buttons"
urlsArray[arraycount] = "projs_7.htm#S-00900-00700"
descArray[arraycount] = "assigning programs to"
	
arraycount += 1
	
namesArray[arraycount] = "Scanner software"
urlsArray[arraycount] = "projs_7.htm#S-00900-00700"
descArray[arraycount] = "assigning scanner button to"
	
arraycount += 1
	
namesArray[arraycount] = "Scanner software"
urlsArray[arraycount] = "probs_5.htm#S-01200-00800"
descArray[arraycount] = "uninstalling"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "probs_4.htm#S-01200-00400"
descArray[arraycount] = "Scan quality problems"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "scan1_9.htm#S-00700-01700-00400"
descArray[arraycount] = "Scan size, selecting"
	
arraycount += 1
	
namesArray[arraycount] = "Scan to E-mail"
urlsArray[arraycount] = "projs_7.htm#S-00900-00700"
descArray[arraycount] = "assigning program to"
	
arraycount += 1
	
namesArray[arraycount] = "Scan to E-mail"
urlsArray[arraycount] = "scan1_1.htm#S-00700-00600-00100"
descArray[arraycount] = "Control Panel"
	
arraycount += 1
	
namesArray[arraycount] = "Scan to PC"
urlsArray[arraycount] = "projs_7.htm#S-00900-00700"
descArray[arraycount] = "assigning program to"
	
arraycount += 1
	
namesArray[arraycount] = "Scan to PC"
urlsArray[arraycount] = "scan1_1.htm#S-00700-00600-00100"
descArray[arraycount] = "Control Panel"
	
arraycount += 1
	
namesArray[arraycount] = "Scan to PDF"
urlsArray[arraycount] = "projs_7.htm#S-00900-00700"
descArray[arraycount] = "assigning program to"
	
arraycount += 1
	
namesArray[arraycount] = "Scan to PDF"
urlsArray[arraycount] = "scan1_1.htm#S-00700-00600-00100"
descArray[arraycount] = "Control Panel"
	
arraycount += 1
	
namesArray[arraycount] = "Status light"
urlsArray[arraycount] = "probs_1.htm#S-01200-00100"
descArray[arraycount] = "error indications"
	
arraycount += 1
	
namesArray[arraycount] = "Text"
urlsArray[arraycount] = "projs_6.htm#S-00900-00300"
descArray[arraycount] = "converting scan to"
	
arraycount += 1
	
namesArray[arraycount] = "Thumbnail preview"
urlsArray[arraycount] = "probs_3.htm#S-01200-00500-00210"
descArray[arraycount] = "problems"
	
arraycount += 1
	
namesArray[arraycount] = "Thumbnail preview"
urlsArray[arraycount] = "probs_3.htm#S-01200-00400-01200"
descArray[arraycount] = "problems"
	
arraycount += 1
	
namesArray[arraycount] = "Thumbnail preview"
urlsArray[arraycount] = "scan1_9.htm#S-00700-01700-00200"
descArray[arraycount] = "using"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "probs_5.htm#S-01200-00800"
descArray[arraycount] = "Uninstalling software"
	
arraycount += 1
	
namesArray[arraycount] = "USB"
urlsArray[arraycount] = "probs_1.htm#S-01200-00200-00300-00100"
descArray[arraycount] = "checking for Windows support"
	

// ---- search target end -----

linksize = arraycount;



// ----end data -------

// final stuff
// the main program ---

jsi = new makeLinks(linksize);
document.write("<title>Search Results</title><body bgcolor=white>");

	