function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Nb8wzlnEXn":
        Script1();
        break;
      case "6CLG3tVayMX":
        Script2();
        break;
      case "66rCIZjCXAR":
        Script3();
        break;
      case "6lwLBrvnwCU":
        Script4();
        break;
      case "5s8kIXBpuOI":
        Script5();
        break;
      case "5jpJBIxJoTL":
        Script6();
        break;
      case "5ySejZA5I0V":
        Script7();
        break;
      case "5flPMzDwbdo":
        Script8();
        break;
      case "5vB8xQshoXH":
        Script9();
        break;
      case "66ylBSiZUTB":
        Script10();
        break;
      case "5dS9eU0owAj":
        Script11();
        break;
      case "6T9bSLjoORf":
        Script12();
        break;
      case "5rAnukVio18":
        Script13();
        break;
      case "601p3TxVvu8":
        Script14();
        break;
      case "6MC9qhEESgY":
        Script15();
        break;
      case "6CSo5GJaFWi":
        Script16();
        break;
      case "5dULPxOPT37":
        Script17();
        break;
      case "6R8vOiNuyQw":
        Script18();
        break;
      case "6qdQdk7zNX3":
        Script19();
        break;
      case "6iy3avtykEp":
        Script20();
        break;
      case "6ZG53xeAPu3":
        Script21();
        break;
      case "5Ye6XMVbpIF":
        Script22();
        break;
      case "6MinNsNG4rR":
        Script23();
        break;
      case "62AA1aYy54y":
        Script24();
        break;
      case "6asM0bEQQcn":
        Script25();
        break;
      case "6VoPjo4vypZ":
        Script26();
        break;
      case "6DARprbvucj":
        Script27();
        break;
      case "5lkRsMB1ymk":
        Script28();
        break;
      case "6QNUkze35qX":
        Script29();
        break;
      case "6WTkq7vKX82":
        Script30();
        break;
      case "5uP08kom5ES":
        Script31();
        break;
      case "6cqh4KxxGdI":
        Script32();
        break;
      case "5zIzr6bXVl8":
        Script33();
        break;
      case "5Z6jNUjdmeo":
        Script34();
        break;
      case "5xqqiSInaeG":
        Script35();
        break;
      case "65mBSTKT4m7":
        Script36();
        break;
      case "5ZlCUjipU5v":
        Script37();
        break;
      case "6fIZPyWUtE7":
        Script38();
        break;
      case "6PfZw0Kt2JO":
        Script39();
        break;
      case "6CY9qJUiWP8":
        Script40();
        break;
      case "6MZ4nuynGvm":
        Script41();
        break;
      case "6TepP1T7FQe":
        Script42();
        break;
      case "6eATVClo3Pq":
        Script43();
        break;
      case "6bBsU83KH2l":
        Script44();
        break;
      case "5WFi9LmIPar":
        Script45();
        break;
      case "6dwGlt4mOKa":
        Script46();
        break;
      case "6qokXslbswO":
        Script47();
        break;
      case "6BuQlTCBw6K":
        Script48();
        break;
      case "6dQxMAMXjJn":
        Script49();
        break;
      case "6dpeM7F3I2Y":
        Script50();
        break;
      case "5vnhwOlo1nH":
        Script51();
        break;
      case "691vaynN9xK":
        Script52();
        break;
      case "5XkyiiYdYqH":
        Script53();
        break;
      case "6COo70pfN2S":
        Script54();
        break;
      case "6XlZQCrOO1s":
        Script55();
        break;
      case "6dKa1vurA7o":
        Script56();
        break;
      case "6Qh3DtzCc7N":
        Script57();
        break;
      case "5UsHx0iKImH":
        Script58();
        break;
      case "6Vw1Px79YCa":
        Script59();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('65GK1st3lY2');
const duration = 750;
const easing = 'ease-out';
const id = '61mLLIm1yLq';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6KqkKVWjtnI');
const duration = 750;
const easing = 'ease-out';
const id = '6SIo4ISFHKv';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6JUaZ3Ad1AM');
const duration = 500;
const easing = 'ease-out';
const id = '5mJTt3plnKG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6BeGSgREvXk');
const duration = 500;
const easing = 'ease-out';
const id = '6SUuVnGEwD2';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6jlqPM3WwQq');
const duration = 500;
const easing = 'ease-out';
const id = '6FIyKphrx4k';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6cl2hzPDSSe');
const duration = 500;
const easing = 'ease-out';
const id = '6fhSSlO78aT';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5yGnPfB6LqD');
const duration = 500;
const easing = 'ease-out';
const id = '665AaiIfHzl';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6IHkb0JIJNa');
const duration = 500;
const easing = 'ease-out';
const id = '6DtrJxt0jGU';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('632hmDhaCBK');
const duration = 250;
const easing = 'ease-out';
const id = '6e2RCKlYzLM';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6eGhUtLJtft');
const duration = 250;
const easing = 'ease-out';
const id = '6OgnMPTejEX';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('69YHp6LAxBj');
const duration = 500;
const easing = 'ease-out';
const id = '617GKAdJYDT';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5dUjVJ7tPkA');
const duration = 250;
const easing = 'ease-out';
const id = '5eIqtOszxgb';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5qEfzvE37Ep');
const duration = 750;
const easing = 'ease-out';
const id = '5tRctPMtde8';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('6KhIxhe6SAC');
const duration = 750;
const easing = 'ease-out';
const id = '6WvaG5zTjzr';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6pegUke38GE');
const duration = 750;
const easing = 'ease-out';
const id = '6kNVcrMt12l';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6GSkf409IL2');
const duration = 750;
const easing = 'ease-out';
const id = '5dLWh6kh5g8';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('5lDHSDr4oUW');
const duration = 500;
const easing = 'ease-out';
const id = '6PmfFHopLgz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('6FHg4svJsbz');
const duration = 500;
const easing = 'ease-out';
const id = '5hpq5pu92eP';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6UQpPgkNCZb');
const duration = 500;
const easing = 'ease-out';
const id = '6qLd5vJgmv5';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('6QyO71x7uQb');
const duration = 500;
const easing = 'ease-out';
const id = '6pLFF3enHp4';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('5WPRLQnir2R');
const duration = 500;
const easing = 'ease-out';
const id = '5vy9CQPS0Bu';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6UYCHdWl4cr');
const duration = 500;
const easing = 'ease-out';
const id = '5f01Y5Ocfik';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('61eB3QCUQlw');
const duration = 500;
const easing = 'ease-out';
const id = '5eInmgN5Jpo';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('5gPjarJOxld');
const duration = 500;
const easing = 'ease-out';
const id = '6K9JWujzjq2';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('5W7GomyYz1P');
const duration = 250;
const easing = 'ease-out';
const id = '5zBespveDBs';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6ZaIlXAeFGH');
const duration = 750;
const easing = 'ease-out';
const id = '5Y0Yv7txj7J';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('5qUshNaVO7Y');
const duration = 750;
const easing = 'ease-out';
const id = '6BLepdjFSRb';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('5Zml8GGBRoE');
const duration = 750;
const easing = 'ease-out';
const id = '65OxTy2VnSN';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('5oXHtuvCebz');
const duration = 500;
const easing = 'ease-out';
const id = '5vrgpgP0ZoK';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('5kQy0a4nr60');
const duration = 500;
const easing = 'ease-out';
const id = '6kHeQ4HsmuZ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('6NJArqUn5Hs');
const duration = 500;
const easing = 'ease-out';
const id = '67PPNB2QCnz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('65DkYkBOSyZ');
const duration = 500;
const easing = 'ease-out';
const id = '5wFMOgYjBHk';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('6o8SVzvJblC');
const duration = 250;
const easing = 'ease-out';
const id = '6O327Xwf4A5';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('6lzlQZ6dQaz');
const duration = 750;
const easing = 'ease-out';
const id = '6OzQWpXD2CL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('6e3D32PRh5r');
const duration = 750;
const easing = 'ease-out';
const id = '6OnPqEvLRAp';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('5lEAZF6Y6yh');
const duration = 500;
const easing = 'ease-out';
const id = '66smap51SFG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('5ylzNguRq3m');
const duration = 500;
const easing = 'ease-out';
const id = '5kfLECgiSFB';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('64hhNJ1kXjI');
const duration = 500;
const easing = 'ease-out';
const id = '6HUYysjucLD';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('6elNjrLVKsB');
const duration = 500;
const easing = 'ease-out';
const id = '6k3GFvOLbWx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('5unMaAQGhsX');
const duration = 250;
const easing = 'ease-out';
const id = '5iEA8wFMJdT';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('5q2dVFUgquK');
const duration = 500;
const easing = 'ease-out';
const id = '6Vw6seHYgsQ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('6KKktUhvYAW');
const duration = 500;
const easing = 'ease-out';
const id = '6b74DF3kCTs';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('5qFlYzU86MQ');
const duration = 500;
const easing = 'ease-out';
const id = '5dM0Fs7AmSB';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('6hBoCC8BA5u');
const duration = 500;
const easing = 'ease-out';
const id = '5qZTgJMYMbf';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('5uikV48N3os');
const duration = 500;
const easing = 'ease-out';
const id = '68jhuTdkoWZ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('6rib0aPIk9o');
const duration = 500;
const easing = 'ease-out';
const id = '5p9sHkp5u8S';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('6FPFJzDmXre');
const duration = 500;
const easing = 'ease-out';
const id = '5rLXgvqTlsq';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('5oUdaBnAM1n');
const duration = 500;
const easing = 'ease-out';
const id = '69nYv9jsDuS';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  const target = object('6IYWUzUBK2R');
const duration = 500;
const easing = 'ease-out';
const id = '6lZP1MuUijE';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  const target = object('6pACX2sU1XB');
const duration = 500;
const easing = 'ease-out';
const id = '65XfenPjETr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  const target = object('6a3GYqw6yKQ');
const duration = 500;
const easing = 'ease-out';
const id = '5gQIV8dlBaa';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  const target = object('6Qqnx4k1ZJL');
const duration = 500;
const easing = 'ease-out';
const id = '5tJnQGWt3XA';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script53 = function()
{
  const target = object('6OXGugdTSFW');
const duration = 500;
const easing = 'ease-out';
const id = '6fssf6enZHP';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  const target = object('6RcgfwpeYzI');
const duration = 500;
const easing = 'ease-out';
const id = '64nfIakIQbQ';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('5zjdQ1n7YgE');
const duration = 750;
const easing = 'ease-out';
const id = '6JWz380HesF';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  const target = object('6SyOSQopzCc');
const duration = 250;
const easing = 'ease-out';
const id = '5fMqdSbV8T5';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script57 = function()
{
  const target = object('5cvGfMhFw4x');
const duration = 500;
const easing = 'ease-out';
const id = '5Xuc3c259fc';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  const target = object('5hphfnYEGbV');
const duration = 500;
const easing = 'ease-out';
const id = '5tVL3vaPUME';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script59 = function()
{
  const target = object('5zRYQSbundc');
const duration = 500;
const easing = 'ease-out';
const id = '5uk07igpiKI';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
