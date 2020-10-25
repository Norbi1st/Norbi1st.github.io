	
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
	
	document.writeln("<meta NAME=\"Version\" CONTENT=\"NPD3980P-00 EN\">");
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
urlsArray[arraycount] = "vari_2.htm#S-00500-00200"
descArray[arraycount] = "2-sided printing"
	
arraycount += 1
	
namesArray[arraycount] = "2-sided printing"
urlsArray[arraycount] = "vari_2.htm#S-00500-00200-00100"
descArray[arraycount] = "Windows"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "maint_3.htm#S-00900-00300"
descArray[arraycount] = "Aligning print head"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00100"
descArray[arraycount] = "Banding"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00200"
descArray[arraycount] = "Banding"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00400"
descArray[arraycount] = "Blank pages"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00400"
descArray[arraycount] = "Blurry prints"
	
arraycount += 1
	
namesArray[arraycount] = "Booklet printing"
urlsArray[arraycount] = "vari_2.htm#S-00500-00200-00300"
descArray[arraycount] = "Windows"
	
arraycount += 1
	
namesArray[arraycount] = "Borderless printing"
urlsArray[arraycount] = "basic_2.htm#S-00600-00300-00400-00200"
descArray[arraycount] = "Mac OS X printer settings"
	
arraycount += 1
	
namesArray[arraycount] = "Borderless printing"
urlsArray[arraycount] = "basic_2.htm#S-00600-00300-00100"
descArray[arraycount] = "recommended paper"
	
arraycount += 1
	
namesArray[arraycount] = "Borderless printing"
urlsArray[arraycount] = "basic_2.htm#S-00600-00300-00400-00100"
descArray[arraycount] = "Windows printer settings"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "basic_6.htm#S-00600-00900"
descArray[arraycount] = "Canceling printing"
	
arraycount += 1
	
namesArray[arraycount] = "Canceling printing"
urlsArray[arraycount] = "basic_6.htm#S-00600-00900-00400"
descArray[arraycount] = "Mac OS X 10.3"
	
arraycount += 1
	
namesArray[arraycount] = "Canceling printing"
urlsArray[arraycount] = "basic_6.htm#S-00600-00900-00200"
descArray[arraycount] = "Windows"
	
arraycount += 1
	
namesArray[arraycount] = "Cleaning"
urlsArray[arraycount] = "maint_2.htm#S-00900-00200"
descArray[arraycount] = "print head"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00300"
descArray[arraycount] = "Color problems"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "card_4.htm#S-77701-00400"
descArray[arraycount] = "Disconnecting printer"
	
arraycount += 1
	
namesArray[arraycount] = "Documents"
urlsArray[arraycount] = "basic_3.htm#S-00600-00500-00300"
descArray[arraycount] = "Mac OS X printer settings"
	
arraycount += 1
	
namesArray[arraycount] = "Documents"
urlsArray[arraycount] = "basic_3.htm#S-00600-00500"
descArray[arraycount] = "printing"
	
arraycount += 1
	
namesArray[arraycount] = "Documents"
urlsArray[arraycount] = "basic_3.htm#S-00600-00500-00200"
descArray[arraycount] = "Windows printer settings"
	
arraycount += 1
	
namesArray[arraycount] = "Driver"
urlsArray[arraycount] = "app_1.htm#S-00300-00300-00200"
descArray[arraycount] = "accessing for Mac OS X"
	
arraycount += 1
	
namesArray[arraycount] = "Driver"
urlsArray[arraycount] = "app_1.htm#S-00300-00300-00100"
descArray[arraycount] = "accessing for Windows"
	
arraycount += 1
	
namesArray[arraycount] = "Driver"
urlsArray[arraycount] = "app_4.htm#S-00300-01900"
descArray[arraycount] = "uninstalling"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "app_2.htm#S-00300-00800"
descArray[arraycount] = "Easy Photo Print"
	
arraycount += 1
	
namesArray[arraycount] = "Easy Photo Print"
urlsArray[arraycount] = "app_4.htm#S-00300-01900-00300"
descArray[arraycount] = "uninstalling"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "vari_3.htm#S-00500-00300"
descArray[arraycount] = "Enlarging pages"
	
arraycount += 1
	
namesArray[arraycount] = "Envelopes"
urlsArray[arraycount] = "paper_3.htm#S-00400-00300"
descArray[arraycount] = "loading"
	
arraycount += 1
	
namesArray[arraycount] = "Envelopes"
urlsArray[arraycount] = "basic_5.htm#S-00600-00800-00300"
descArray[arraycount] = "Mac OS X printer settings"
	
arraycount += 1
	
namesArray[arraycount] = "Envelopes"
urlsArray[arraycount] = "basic_5.htm#S-00600-00800"
descArray[arraycount] = "printing"
	
arraycount += 1
	
namesArray[arraycount] = "Envelopes"
urlsArray[arraycount] = "basic_5.htm#S-00600-00800-00200"
descArray[arraycount] = "Windows printer settings"
	
arraycount += 1
	
namesArray[arraycount] = "Epson"
urlsArray[arraycount] = "app_2.htm#S-00300-00800"
descArray[arraycount] = "Easy Photo Print"
	
arraycount += 1
	
namesArray[arraycount] = "Epson"
urlsArray[arraycount] = "paper_1.htm#S-00400-00100"
descArray[arraycount] = "paper"
	
arraycount += 1
	
namesArray[arraycount] = "EPSON"
urlsArray[arraycount] = "app_3.htm#S-00300-01700"
descArray[arraycount] = "Web-To-Page"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_1.htm#S-01200-00400-00100"
descArray[arraycount] = "Error indicators"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "vari_3.htm#S-00500-00300"
descArray[arraycount] = "Fit to page printing"
	
arraycount += 1
	
namesArray[arraycount] = "Head cleaning"
urlsArray[arraycount] = "maint_2.htm#S-00900-00200-00500"
descArray[arraycount] = "Mac OS X"
	
arraycount += 1
	
namesArray[arraycount] = "Head cleaning"
urlsArray[arraycount] = "maint_2.htm#S-00900-00200-00400"
descArray[arraycount] = "Windows"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00100"
descArray[arraycount] = "Horizontal banding"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00100"
descArray[arraycount] = "Incorrect characters"
	
arraycount += 1
	
namesArray[arraycount] = "Ink"
urlsArray[arraycount] = "ink_1.htm#S-00800-00100-00200"
descArray[arraycount] = "checking ink cartridge status in Mac OS X"
	
arraycount += 1
	
namesArray[arraycount] = "Ink"
urlsArray[arraycount] = "ink_1.htm#S-00800-00100-00100"
descArray[arraycount] = "checking ink cartridge status in Windows"
	
arraycount += 1
	
namesArray[arraycount] = "Ink"
urlsArray[arraycount] = "ink_3.htm#S-00800-00300"
descArray[arraycount] = "saving black ink in Windows"
	
arraycount += 1
	
namesArray[arraycount] = "Ink"
urlsArray[arraycount] = "ink_3.htm#S-00800-00300"
descArray[arraycount] = "saving in Windows"
	
arraycount += 1
	
namesArray[arraycount] = "Ink cartridges"
urlsArray[arraycount] = "ink_5.htm#S-00800-00500"
descArray[arraycount] = "replacing before expended"
	
arraycount += 1
	
namesArray[arraycount] = "Ink cartridges"
urlsArray[arraycount] = "ink_4.htm#S-00800-00400"
descArray[arraycount] = "replacing when expended"
	
arraycount += 1
	
namesArray[arraycount] = "Lights"
urlsArray[arraycount] = "trble_1.htm#S-01200-00400-00100"
descArray[arraycount] = "error indicators"
	
arraycount += 1
	
namesArray[arraycount] = "Lights"
urlsArray[arraycount] = "trble_7.htm#S-01200-00900-00400"
descArray[arraycount] = "flashing"
	
arraycount += 1
	
namesArray[arraycount] = "Loading"
urlsArray[arraycount] = "paper_3.htm#S-00400-00300"
descArray[arraycount] = "envelopes"
	
arraycount += 1
	
namesArray[arraycount] = "Loading"
urlsArray[arraycount] = "paper_1.htm#S-00400-00100-00100"
descArray[arraycount] = "paper"
	
arraycount += 1
	
namesArray[arraycount] = "Loading"
urlsArray[arraycount] = "paper_2.htm#S-00400-00200"
descArray[arraycount] = "paper"
	
arraycount += 1
	
namesArray[arraycount] = "Mac OS X"
urlsArray[arraycount] = "app_1.htm#S-00300-00300-00200"
descArray[arraycount] = "accessing printer settings"
	
arraycount += 1
	
namesArray[arraycount] = "Mac OS X"
urlsArray[arraycount] = "trble_2.htm#S-01200-00500-00200"
descArray[arraycount] = "checking printer status"
	
arraycount += 1
	
namesArray[arraycount] = "Managing print jobs"
urlsArray[arraycount] = "trble_2.htm#S-01200-00500-00100"
descArray[arraycount] = "Windows"
	
arraycount += 1
	
namesArray[arraycount] = "Margins"
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00200"
descArray[arraycount] = "problems"
	
arraycount += 1
	
namesArray[arraycount] = "Media Type"
urlsArray[arraycount] = "paper_4.htm#S-00400-00500"
descArray[arraycount] = "selecting"
	
arraycount += 1
	
namesArray[arraycount] = "Memory cards"
urlsArray[arraycount] = "card_2.htm#S-77701-00200"
descArray[arraycount] = "copying files"
	
arraycount += 1
	
namesArray[arraycount] = "Memory cards"
urlsArray[arraycount] = "card_3.htm#S-77701-00300"
descArray[arraycount] = "ejecting"
	
arraycount += 1
	
namesArray[arraycount] = "Memory cards"
urlsArray[arraycount] = "card_3.htm#S-77701-00300"
descArray[arraycount] = "removing"
	
arraycount += 1
	
namesArray[arraycount] = "Memory cards"
urlsArray[arraycount] = "card_2.htm#S-77701-00200-00600"
descArray[arraycount] = "saving files"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00300"
descArray[arraycount] = "Mirror image"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00200"
descArray[arraycount] = "Misalignment"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "vari_4.htm#S-00500-00400"
descArray[arraycount] = "Multiple pages per sheet"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "maint_1.htm#S-00900-00100"
descArray[arraycount] = "Nozzle check"
	
arraycount += 1
	
namesArray[arraycount] = "Nozzle check"
urlsArray[arraycount] = "maint_1.htm#S-00900-00100-00200"
descArray[arraycount] = "Mac OS X"
	
arraycount += 1
	
namesArray[arraycount] = "Nozzle check"
urlsArray[arraycount] = "maint_1.htm#S-00900-00100-00100"
descArray[arraycount] = "Windows"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_1.htm#S-01200-00400-00300"
descArray[arraycount] = "Operation check"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "vari_4.htm#S-00500-00400"
descArray[arraycount] = "Pages per sheet printing"
	
arraycount += 1
	
namesArray[arraycount] = "Paper"
urlsArray[arraycount] = "basic_2.htm#S-00600-00300-00100"
descArray[arraycount] = "borderless printing"
	
arraycount += 1
	
namesArray[arraycount] = "Paper"
urlsArray[arraycount] = "paper_1.htm#S-00400-00100"
descArray[arraycount] = "Epson special paper"
	
arraycount += 1
	
namesArray[arraycount] = "Paper"
urlsArray[arraycount] = "trble_6.htm#S-01200-00800"
descArray[arraycount] = "feeding problems"
	
arraycount += 1
	
namesArray[arraycount] = "Paper"
urlsArray[arraycount] = "trble_3.htm#S-01200-00510"
descArray[arraycount] = "jams"
	
arraycount += 1
	
namesArray[arraycount] = "Paper"
urlsArray[arraycount] = "paper_2.htm#S-00400-00200"
descArray[arraycount] = "loading"
	
arraycount += 1
	
namesArray[arraycount] = "Paper"
urlsArray[arraycount] = "paper_1.htm#S-00400-00100-00100"
descArray[arraycount] = "loading capacity"
	
arraycount += 1
	
namesArray[arraycount] = "Paper"
urlsArray[arraycount] = "paper_4.htm#S-00400-00500"
descArray[arraycount] = "selecting type"
	
arraycount += 1
	
namesArray[arraycount] = "Paper"
urlsArray[arraycount] = "trble_6.htm#S-01200-00800-00500"
descArray[arraycount] = "wrinkling"
	
arraycount += 1
	
namesArray[arraycount] = "Photo"
urlsArray[arraycount] = "app_2.htm#S-00300-00800"
descArray[arraycount] = "software"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "vari_5.htm#S-00500-00500"
descArray[arraycount] = "Poster printing"
	
arraycount += 1
	
namesArray[arraycount] = "Poster printing"
urlsArray[arraycount] = "vari_5.htm#S-00500-00500-00300"
descArray[arraycount] = "assembling pages"
	
arraycount += 1
	
namesArray[arraycount] = "Print CD"
urlsArray[arraycount] = "app_4.htm#S-00300-01900-00300"
descArray[arraycount] = "uninstalling"
	
arraycount += 1
	
namesArray[arraycount] = "Printer"
urlsArray[arraycount] = "trble_2.htm#S-01200-00500"
descArray[arraycount] = "checking status"
	
arraycount += 1
	
namesArray[arraycount] = "Printer"
urlsArray[arraycount] = "card_4.htm#S-77701-00400"
descArray[arraycount] = "disconnecting"
	
arraycount += 1
	
namesArray[arraycount] = "Printer"
urlsArray[arraycount] = "trble_1.htm#S-01200-00400-00300"
descArray[arraycount] = "operation check"
	
arraycount += 1
	
namesArray[arraycount] = "Printer"
urlsArray[arraycount] = "card_4.htm#S-77701-00400"
descArray[arraycount] = "turning off"
	
arraycount += 1
	
namesArray[arraycount] = "Printer settings"
urlsArray[arraycount] = "app_1.htm#S-00300-00300-00200"
descArray[arraycount] = "accessing for Mac OS X"
	
arraycount += 1
	
namesArray[arraycount] = "Printer settings"
urlsArray[arraycount] = "app_1.htm#S-00300-00300-00100"
descArray[arraycount] = "accessing for Windows"
	
arraycount += 1
	
namesArray[arraycount] = "Print head"
urlsArray[arraycount] = "maint_3.htm#S-00900-00300"
descArray[arraycount] = "aligning"
	
arraycount += 1
	
namesArray[arraycount] = "Print head"
urlsArray[arraycount] = "maint_1.htm#S-00900-00100"
descArray[arraycount] = "checking"
	
arraycount += 1
	
namesArray[arraycount] = "Print head"
urlsArray[arraycount] = "maint_2.htm#S-00900-00200"
descArray[arraycount] = "cleaning"
	
arraycount += 1
	
namesArray[arraycount] = "Printing"
urlsArray[arraycount] = "vari_2.htm#S-00500-00200"
descArray[arraycount] = "2-sided"
	
arraycount += 1
	
namesArray[arraycount] = "Printing"
urlsArray[arraycount] = "basic_6.htm#S-00600-00900"
descArray[arraycount] = "canceling"
	
arraycount += 1
	
namesArray[arraycount] = "Printing"
urlsArray[arraycount] = "basic_5.htm#S-00600-00800"
descArray[arraycount] = "envelopes"
	
arraycount += 1
	
namesArray[arraycount] = "Printing"
urlsArray[arraycount] = "vari_3.htm#S-00500-00300"
descArray[arraycount] = "fit to page"
	
arraycount += 1
	
namesArray[arraycount] = "Printing"
urlsArray[arraycount] = "vari_4.htm#S-00500-00400"
descArray[arraycount] = "multiple pages per sheet"
	
arraycount += 1
	
namesArray[arraycount] = "Printing"
urlsArray[arraycount] = "vari_5.htm#S-00500-00500"
descArray[arraycount] = "posters"
	
arraycount += 1
	
namesArray[arraycount] = "Printing"
urlsArray[arraycount] = "basic_3.htm#S-00600-00500"
descArray[arraycount] = "text"
	
arraycount += 1
	
namesArray[arraycount] = "Printing"
urlsArray[arraycount] = "vari_6.htm#S-00500-00600"
descArray[arraycount] = "watermarks"
	
arraycount += 1
	
namesArray[arraycount] = "Printing"
urlsArray[arraycount] = "app_3.htm#S-00300-01700"
descArray[arraycount] = "web pages"
	
arraycount += 1
	
namesArray[arraycount] = "Print quality"
urlsArray[arraycount] = "trble_4.htm#S-01200-00600"
descArray[arraycount] = "improving"
	
arraycount += 1
	
namesArray[arraycount] = "Print speed"
urlsArray[arraycount] = "trble_8.htm#S-01200-01000"
descArray[arraycount] = "increasing"
	
arraycount += 1
	
namesArray[arraycount] = "Print speed"
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00600"
descArray[arraycount] = "increasing"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00100"
descArray[arraycount] = "banding"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00200"
descArray[arraycount] = "banding"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00400"
descArray[arraycount] = "blank pages"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00400"
descArray[arraycount] = "blurry prints"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_1.htm#S-01200-00400"
descArray[arraycount] = "diagnosing"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00100"
descArray[arraycount] = "incorrect characters"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00300"
descArray[arraycount] = "incorrect colors"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00200"
descArray[arraycount] = "margins"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00300"
descArray[arraycount] = "mirror image"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_6.htm#S-01200-00800"
descArray[arraycount] = "paper feeding"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_3.htm#S-01200-00510"
descArray[arraycount] = "paper jams"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_7.htm#S-01200-00900"
descArray[arraycount] = "printer does not print"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00600"
descArray[arraycount] = "print speed"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00400"
descArray[arraycount] = "smeared prints"
	
arraycount += 1
	
namesArray[arraycount] = "Problems"
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00500"
descArray[arraycount] = "smeared prints"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_2.htm#S-01200-00500-00100-00100"
descArray[arraycount] = "Progress meter"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "vari_3.htm#S-00500-00300"
descArray[arraycount] = "Reducing page size"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "ink_4.htm#S-00800-00400"
descArray[arraycount] = "Replacing ink cartridges"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "vari_3.htm#S-00500-00300"
descArray[arraycount] = "Resizing pages"
	
arraycount += 1
	
namesArray[arraycount] = "Sharing printer"
urlsArray[arraycount] = "how_2.htm#S-01000-00300"
descArray[arraycount] = "Mac OS X"
	
arraycount += 1
	
namesArray[arraycount] = "Sharing printer"
urlsArray[arraycount] = "how_1.htm#S-01000-00100"
descArray[arraycount] = "Windows Vista, XP and 2000"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_4.htm#S-01200-00600-00400"
descArray[arraycount] = "Smeared prints"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00500"
descArray[arraycount] = "Smeared prints"
	
arraycount += 1
	
namesArray[arraycount] = "Software"
urlsArray[arraycount] = "app_4.htm#S-00300-01900"
descArray[arraycount] = "uninstalling"
	
arraycount += 1
	
namesArray[arraycount] = "Speed"
urlsArray[arraycount] = "trble_8.htm#S-01200-01000"
descArray[arraycount] = "increasing"
	
arraycount += 1
	
namesArray[arraycount] = "Speed"
urlsArray[arraycount] = "trble_5.htm#S-01200-00700-00600"
descArray[arraycount] = "increasing"
	
arraycount += 1
	
namesArray[arraycount] = "Status Monitor"
urlsArray[arraycount] = "trble_2.htm#S-01200-00500-00200-00100"
descArray[arraycount] = "Mac OS X"
	
arraycount += 1
	
namesArray[arraycount] = "Status Monitor"
urlsArray[arraycount] = "trble_2.htm#S-01200-00500-00100-00300"
descArray[arraycount] = "Windows"
	
arraycount += 1
	
namesArray[arraycount] = "Text"
urlsArray[arraycount] = "basic_3.htm#S-00600-00500-00300"
descArray[arraycount] = "Mac OS X printer settings for documents"
	
arraycount += 1
	
namesArray[arraycount] = "Text"
urlsArray[arraycount] = "basic_3.htm#S-00600-00500"
descArray[arraycount] = "printing documents"
	
arraycount += 1
	
namesArray[arraycount] = "Text"
urlsArray[arraycount] = "basic_3.htm#S-00600-00500-00200"
descArray[arraycount] = "Windows printer settings for documents"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "card_4.htm#S-77701-00400"
descArray[arraycount] = "Turning off printer"
	
arraycount += 1
	
namesArray[arraycount] = "User’s Guide"
urlsArray[arraycount] = "app_4.htm#S-00300-01900-00200"
descArray[arraycount] = "uninstalling"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "vari_6.htm#S-00500-00600"
descArray[arraycount] = "Watermark printing"
	
arraycount += 1
	
namesArray[arraycount] = "Web"
urlsArray[arraycount] = "app_3.htm#S-00300-01700"
descArray[arraycount] = "printing pages"
	
arraycount += 1
	
namesArray[arraycount] = "Web-To-Page"
urlsArray[arraycount] = "app_3.htm#S-00300-01700"
descArray[arraycount] = "description"
	
arraycount += 1
	
namesArray[arraycount] = "Web-To-Page"
urlsArray[arraycount] = "app_4.htm#S-00300-01900-00300"
descArray[arraycount] = "uninstalling"
	
arraycount += 1
	
namesArray[arraycount] = "Web-To-Page"
urlsArray[arraycount] = "basic_4.htm#S-00600-00600-00200"
descArray[arraycount] = "using"
	
arraycount += 1
	
namesArray[arraycount] = "Windows"
urlsArray[arraycount] = "app_1.htm#S-00300-00300-00100"
descArray[arraycount] = "accessing printer settings"
	
arraycount += 1
	
namesArray[arraycount] = "Windows"
urlsArray[arraycount] = "trble_2.htm#S-01200-00500-00100"
descArray[arraycount] = "checking printer status"
	
arraycount += 1
	
namesArray[arraycount] = "Windows"
urlsArray[arraycount] = "trble_2.htm#S-01200-00500-00100"
descArray[arraycount] = "managing print jobs"
	
arraycount += 1
	
namesArray[arraycount] = "Windows"
urlsArray[arraycount] = "trble_2.htm#S-01200-00500-00100-00300"
descArray[arraycount] = "status monitor"
	

// ---- search target end -----

linksize = arraycount;



// ----end data -------

// final stuff
// the main program ---

jsi = new makeLinks(linksize);
document.write("<title>Search Results</title><body bgcolor=white>");

	