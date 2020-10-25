

function head_data(strpath, strindexpath)
{
	
	document.write("<table cellSpacing=\"0\" cellPadding=\"0\" border=\"0\">\n");
	document.write("<tbody>\n");
	document.write("<tr>\n");

	
	document.write("<td class=\"tab-off\"><a href=\"../html/index.htm\">Printing</a></td>\n");
	
	document.write("<td width=\"5\"><img src=\"files/05.gif\"></td>\n");

	
	document.write("<td class=\"tab-on\">Scanning</td>\n");
	
	document.write("<td width=\"5\"><img src=\"files/05.gif\"></td>\n");

	
	document.write("<td class=\"tab-off\"><a href=\"../html_x/index.htm\">Appendix</a></td>\n");
	

	document.write("<td width=\"5\"><img src=\"files/05.gif\"></td>\n");
	document.write("</tr></tbody></table>\n");
	
}

function foot_data(strpath, strindexpath)
{
	document.write("<table cellSpacing=\"0\" cellPadding=\"0\" border=\"0\" width=\"100%\" bgcolor=\"#ffffff\">\n");
	document.write("<tr><td height=\"20\"></td></tr>\n");
	document.write("<tr>\n");
	document.write("<td height=\"25\" align=\"left\" vAlign=\"middle\">\n");

	document.write("<table cellSpacing=\"0\" cellPadding=\"0\" border=0>\n");
	document.write("<tbody>\n");
	document.write("<tr>\n");
	document.write("<td width=\"15\"><img src=\"files/15.gif\"></td>\n");
	
	document.write("<td><a href=\"../index.htm\"><img border=\"0\" alt=\"\" src=\"files/top_home.gif\"></a></td>\n");
	document.write("<td class=\"foot-text\"><a href=\"../index.htm\">Home</a></td>\n");
	
	document.write("<td width=\"15\"><img src=\"files/15.gif\"></td>\n");
	document.write("<td><a href=\"javascript:winOpen\(\'epsonwin2\',\'htmltoc.htm\',0,0,385,iheight-150\)\" ><img border=\"0\" alt=\"\" src=\"files/top_toc.gif\"></a></td>\n");
	document.write("<td class=\"foot-text\"><a href=\"javascript:winOpen\(\'epsonwin2\',\'htmltoc.htm\',0,0,385,iheight-150\)\" >Contents</a></td>\n");
	
		document.write("<td width=\"15\"><img src=\"files/15.gif\"></td>\n");
		document.write("<td><a href=\"javascript:winOpen\(\'epsonwin3\',\'indexx.htm\',0,20,385,iheight-150\)\" ><img border=\"0\" alt=\"\" src=\"files/top_indx.gif\"></a></td>\n");
		document.write("<td class=\"foot-text\"><a href=\"javascript:winOpen\(\'epsonwin3\',\'indexx.htm\',0,40,385,iheight-150\)\" >Index</a></td>\n");
	
		document.write("<td width=\"15\"><img src=\"files/15.gif\"></td>\n");
		document.write("<td><a href=\"help.htm\"><img border=0 alt=\"\" src=\"files/top_help.gif\"></a></td>\n");
		document.write("<td class=\"foot-text\"><a href=\"help.htm\">Help</a></td>\n");
	
	document.write("<td width=\"15\"><img src=\"files/15.gif\"></td>\n");
	document.write("</tr></tbody></table>\n");
	
	document.write("</td>\n");
	document.write("</tr>\n");
	document.write("<tr><td height=\"1\" bgcolor=\"#c0c0c0\"><img src=\"files/01.gif\"></td></tr>\n");
	document.write("<tr><td height=\"30\" class=\"code-text\"><img src=\"files/_fcopy.gif\" align=\"top\">(NPD3973S-00 EN)</td></tr>\n");
	document.write("</table>\n");
}

var iwidth = screen.width;
var iheight = screen.height;

function winOpen(winName,url,X,Y,W,H) {
	var win;
	win = window.open(url,winName,'top='+X+',left='+Y+',screenX='+X+',screenY='+Y+',scrollbars=1,,menubar=1,resizable=1,width='+W+',height='+H+'');
	
	win.focus();
}


	