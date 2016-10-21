// This is the Database of Upcoming Events
// Please Edit with Care.
//
// 8 Fields (surrounded by brackets[]) are used for EACH event:
// 	["Recurring", "Month", "Day", "Year", "StartTime", "EndTime", "Name", "Description"]
// 	Each event field must be be surrounded by quotation marks followed by a comma ("",) EXCEPT the "Description" field.
//	The "Description" field is surrounded by quotation marks only ("").
//
// Each event has a comma after the closing bracket IF another event is below it on the next line down.
//	Note: The last event in this file should NOT have a comma after the closing bracket
//
// The Recurring field uses:
//	"D" = Daily; "W" = Weekly; "M" = Monthly; "Y" = Yearly; "F" = Floating Holiday
//
// One Time only events should leave the Recurring field blank
//	(ex. "")
//
// Daily events do NOT require that anything be in the Month Day and Year fields
//	Everything in the Month Day and Year fields will be ignored
//
// Weekly events should have the day of the week field set to 1 - 7
//	1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thurday, 6=Friday, 7=Saturday
//
// "F"loating events uses:
//	the Month field for the Month.
//	the Day field as the Cardinal Occurrence
//		1=1st, 2=2nd, 3=3rd, 4=4th, 5=5th, 6=6th occurrence of the day listed next
//	the Year field as the Day of the week the event/holiday falls on
//		1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thurday, 6=Friday, 7=Saturday
//	example: "F",	"1",	"3",	"2", = Floating holiday in January on the 3rd Monday of that month.
//
//	Note: Easter has it's own special formula so Please don't change anything related to Easter below
//
// "Y"early events are specific dates that never change - the Year field is ignored
//	example - Christmas is: "12","25","",
events = new Array(
	["Y",	"1",	"1",	"2006",	"1:00 AM",	"12:00 PM",	"New Year's Day",	"New Year's Day will be ushered in with great joy and celebration. Come as you are.","s"],
	["F",	"1",	"3",	"2",	"1:00 AM",	"12:59 PM",	"Martin Luther King Day",	"Honors civil rights leader Rev Martin Luther King.","dd"],
	["F",	"10",	"2",	"2",	"1:00 AM",	"12:59 PM",	"Columbus' Day",	"Honors the traditional discovery of the Americas by Christopher Columbus.","gg"],
	["Y",	"10",	"20",	"2016",	"1:00 AM",	"",	"Testing",	"Testing of events.","s"],
	["Y",	"10",	"31",	"2005",	"1:00 AM",	"12:59 PM",	"Halloween",	"Celebrates All Hallow's Eve, decorations include jack o'lanterns, costume wearing parties, and candy - considered a pagan holiday by many Christians.","yy"],
	["Y",	"11",	"11",	"2005",	"1:00 AM",	"12:59 PM",	"Veteran's Day",	"Honors all veterans of the United States armed forces. A traditional observation is a moment of silence at 11 AM remembering those who fought for peace.","aaa"],
	["F",	"11",	"4",	"5",	"1:00 AM",	"12:59 PM",	"Thanksgiving",	"A day to give thanks for your many blessings - traditionally for the Autumn harvest, and it marks the beginning of the 'holiday season'.","ppp"],
	["Y",	"12",	"25",	"2005",	"1:00 AM",	"12:59 PM",	"Christmas",	"Celebration of the traditional day of Jesus' birth - God was made flesh and dwelt among us.","kjl"]	
// Please omit the final comma after the ] from the last line above unless you are going to add another event at this time.
);




