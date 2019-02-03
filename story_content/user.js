function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62PR8QFdVUr":
        Script1();
        break;
      case "5rjqjSbLdjP":
        Script2();
        break;
      case "5eFQQnhHcXH":
        Script3();
        break;
      case "6F21m6iuH8f":
        Script4();
        break;
      case "6BbOC8SxudR":
        Script5();
        break;
      case "6gYU9pqTVSq":
        Script6();
        break;
      case "6gLoq9yqrzE":
        Script7();
        break;
      case "5oHPyRQBXlo":
        Script8();
        break;
      case "5cWrMSY0dcm":
        Script9();
        break;
      case "5ss809Fzlo2":
        Script10();
        break;
      case "6owcgCbVql3":
        Script11();
        break;
      case "62RjtST20lH":
        Script12();
        break;
      case "6nhu8qPjbtw":
        Script13();
        break;
      case "6nGXROlvXHW":
        Script14();
        break;
      case "6B02NFUBUvd":
        Script15();
        break;
      case "6MmwGoLsy1n":
        Script16();
        break;
      case "6Q1X2Y7mavG":
        Script17();
        break;
      case "6i1mFFm7gSL":
        Script18();
        break;
      case "68JrX4L43qp":
        Script19();
        break;
      case "6nqwDjPbCVv":
        Script20();
        break;
      case "6ZlNTnKiUbb":
        Script21();
        break;
      case "6oZaMN7aPq0":
        Script22();
        break;
      case "6o4G2YPdcAr":
        Script23();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  $("#tab-customlink").hide();
}

function Script13()
{
  $("#tab-customlink").hide();
}

function Script14()
{
  $("#tab-customlink").hide();
}

function Script15()
{
  $("#tab-customlink").hide();
}

function Script16()
{
  $("#tab-customlink").hide();
}

function Script17()
{
  $("#tab-customlink").hide();
}

function Script18()
{
  $("#tab-customlink").hide();
}

function Script19()
{
  $("#tab-customlink").hide();
}

function Script20()
{
  $("#tab-customlink").hide();
}

function Script21()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script22()
{
  $("#tab-customlink").show();
}

function Script23()
{
  window.print();
}

