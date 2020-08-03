var h = 0;
var m = 0, min = "00";
var s = 0, sec = "00";
var ms = 0, msec = "00";
var running = false;
var loop;

function timer(){

  ms += 1;

  if(ms < 10)
  {
    msec = "0" + ms;
  }
  if(ms > 10 && ms < 100)
  {
    msec = ms;
  }
  if(ms === 100)
  {
    ms = 0;
    s += 1;
  }

  if(s < 10)
  {
    sec = "0" + s;
  }
  if(s >= 10)
  {
    sec = s;
  }
  if(s === 60)
  {
    s = 0;
    m += 1;
  }

  if(m < 10)
  {
    min = "0" + m;
  }
  if(m > 10)
  {
    min = m;
  }
  if(m === 60)
  {
    m = 0;
    h += 1;
  }

  document.getElementById("timer").innerHTML = h + ":" + min + ":" + sec + "." + msec;
}

function startContinue()
{
  if(running === false)
  {
    timer();
    loop = setInterval(timer, 10);
    running = true;
  }
}

function pause()
{
  running = false;
  clearInterval(loop);
}

function reset()
{
  h = 0;
  m = 0, min = "00";
  s = 0, sec = "00";
  ms = 0, msec = "00";
  document.getElementById("timer").innerHTML = h + ":" + min + ":" + sec + "." + msec;
  running = false;
  clearInterval(loop);
}
