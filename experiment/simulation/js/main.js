var mto = 0.5;
var poles=[];
var stepeqn,impuleqn;
var eqn;
var brk;
var poles = [],
   roots = [];
var kpi,essi,esss,kp;
function changepage() {
    var x = document.getElementById("pagechanger").value;
    if (x == 1)
        document.getElementById("sm1").click();
    else if (x == 2)
        document.getElementById("sm2").click();
    else
        document.getElementById("sm3").click();

}
var conclusion = "For Impulse Response:<br>Based on the analysis of the given system i.e. Type 0 impulse response it can be concluded that when the system was presented with a brief input signal there is a variation and later when the input is removed the output is again zero.<br>";
conclusion = conclusion+"<br> For Step Response:<br>After analysis of the given system i.e. Type 0 step response we can conclude that when input of system changes from from 0 to 1 in short amount of time there is an overshoot in the system but later it reaches to steady state value. "
var line_valx =[];
    var line_valy =[];
function addval() {
    lab = [];
    dat = [];
    a = "0"
    var nums, dens;
    var b = document.getElementById("numc").value;
    var r = document.getElementById("denc").value;
    var p = document.getElementById("dena").value;
    var q = document.getElementById("denb").value;
    roots = [];
    poles = [];
    var x1, y1;
    var ni = 0,
        di = 0;

    b1 = parseInt(b);
    a2 = parseInt(p);
    b2 = parseInt(q);

    c2 = parseInt(r)+b1;
    // stepresponse(b1, a2, b2, c2);
    // impulseresponse(b1, a2, b2, c2);
    dend=discriminant(a2,b2,c2);
        if(dend>0)
        {
        x1 = (-1*b2-Math.sqrt(dend))/2/a2;
        x1 =Math.round(x1 * 100) / 100;

        poles.push({x:x1,y:0});
        x1 = (-1*b2+Math.sqrt(dend))/2/a2;
        x1 =Math.round(x1 * 100) / 100;

        poles.push({x:x1,y:0});
        }
        else if(dend==0)
        {
        x1 = (-1*b2-Math.sqrt(dend))/2/a2;
        x1 =Math.round(x1 * 100) / 100;

        poles.push({x:x1,y:0});
        }
        else
        {
        x1 = (-1*b2/(2*a2));
        x1 =Math.round(x1 * 100) / 100;

        y1 = (Math.sqrt(-1*dend)/2/a2);
        y1 =Math.round(y1 * 100) / 100;

        poles.push({x:x1,y:y1});
        poles.push({x:x1,y:-1*y1});
        di=1;
        }
     brk= -b2/2/a2;
    line_valx =[];
     line_valy =[];
     if(poles[0].y>poles[1].y)
    {    for(i=-30;i<poles[1].y;i=i+0.1)
        {
            line_valx.push(i);
            line_valy.push({x:brk,y:i});
        }
        line_valy.push({x:brk,y:poles[1].y});
        for(i=poles[0].y;i<30;i=i+0.1)
        {
            line_valx.push(i);
            line_valy.push({x:brk,y:i});
        }
        line_valy.push({x:brk,y:poles[0].y});
    }
    else
    {
        for(i=-30;i<poles[0].y;i=i+0.1)
        {
            line_valx.push(i);
            line_valy.push({x:brk,y:i});
        }
        line_valy.push({x:brk,y:poles[0].y});
        for(i=poles[1].y;i<30;i=i+0.1)
        {
            line_valx.push(i);
            line_valy.push({x:brk,y:i});
        }
        line_valy.push({x:brk,y:poles[1].y});
    }
    lc = 1;
    document.getElementById("line1").setAttribute("style", "color:blue");
    document.getElementById("chartcont").setAttribute("style", "display:none");
    document.getElementById("tanswer").setAttribute("style", "display:none;");
    document.getElementById("chartcont1").setAttribute("style", "display:none;");
    document.getElementById("out3").setAttribute("style", "display:none;");
    for (let i = 1; i < 3; i++) {
        let out = "out" + i;
        let ln = "line" + (i + 1);
        document.getElementById(ln).setAttribute("Style", "color:black");
        document.getElementById(out).setAttribute("style", "display:none");
    }
    if (mto) {
        document.getElementById("fconclusions").innerHTML = "Conclusions will show here";
        document.getElementById("matwork").title = "";
        document.getElementById("mrun").disabled = false;
        document.getElementById("matwork").setAttribute("style", "opacity:1");
        document.getElementById("mrun").classList.remove("mrundisabled", "mrunenabled");
        document.getElementById("mrun").classList.add("mrunenabled");
        document.getElementById("matwork").classList.remove('mat');
        var numerator = "$${\\frac{";
        if (a != 0)
            numerator = numerator + a + "s^2";
        if (b != 0)
            if (a != 0)
                numerator = numerator + " + " + b;
            else
                numerator = numerator + b;
        numerator = numerator + "}";
        var denominator = "{";
        if (a2 != 0)
            denominator = denominator + a2.toFixed() + "s^2";
        if (b2 != 0)
            if (a2 != 0)
                denominator = denominator + " + " + b2.toFixed() + "s";
            else
                denominator = denominator + b2.toFixed() + "s";
        if (c2 != 0)
            if (b2 != 0)
                denominator = denominator + " + " + c2.toFixed();
            else
                denominator = denominator + c2.toFixed();
        denominator = denominator + "}}$$";
        var eqn = numerator + denominator;

        document.getElementById("out1").innerHTML = eqn;
        document.getElementById("out3").innerHTML = eqn;
        denominator = "{(";
        if (p != 0)
            denominator = denominator + p + "s^2";
        if (q != 0)
            if (p != 0)
                denominator = denominator + " + " + q + "s";
            else
                denominator = denominator + q + "s";
        if (r != 0)
            if (q != 0)
                denominator = denominator + " + " + r;
            else
                denominator = denominator + r;
        denominator = denominator + " )*s}}$$";
       eqn = numerator + denominator;
       document.getElementById("out2").innerHTML = eqn;
       
        
        // document.getElementById("tanswer").innerHTML ="<br> Step Response in time domain:"+ stepeqn +"<br>Kp:"+kp.toFixed(2)+"<br>ess:"+esss.toFixed(2)+ "<br><br>Impulse Response in time domain:"+impuleqn+"<br>K:"+kpi.toFixed(2)+"<br>ess:"+essi.toFixed(2);
        var j, k;

        var ms = window.matchMedia("(max-width:950px)");
        cwidth(ms);
        ms.addListener(cwidth);

       MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out1"]);
       MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out2"]);
       MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out3"]);
       MathJax.Hub.Queue(["Typeset", MathJax.Hub, "tanswer"]);
    } else {
        mto = 1;

        document.getElementById("fconclusions").innerHTML = "Conclusions will show here";
        document.getElementById("mrun").disabled = true;
        document.getElementById("mrun").classList.remove('mrunenabled', 'mrundisabled');
        document.getElementById("tanswer").setAttribute("style", "display:none");
        document.getElementById("mrun").classList.add('mrundisabled');
        document.getElementById("matwork").classList.add('mat');
        document.getElementById("matwork").setAttribute("style", "opacity:0.5");
        document.getElementById("matwork").title = "Please enter the values of coeffecients of the equation first";
    }
};



function showval() {
    genval("numc", "lc");
    genval("dena", "lp");
    genval("denb", "lq");
    genval("denc", "lr");
};

function genval(idofinput, idofspan) {
    var x;
    x = document.getElementById(idofinput).value;
    //var x1 = x.toFixed(2);
    document.getElementById(idofspan).innerHTML = x;
};

var lc = 1;

function runprog(i) {
    lc = lc + 1;
    if (lc <= 3)
        highlightline(lc);
    else {
        document.getElementById("fconclusions").innerHTML = conclusion;
        document.getElementById("line3").setAttribute("style", "color:black;");
        document.getElementById("mrun").disabled = true;
        var ms = window.matchMedia("screen and (max-width:950px)");
        document.getElementById("out3").setAttribute("style", "display:block;");
        widthcheck(ms);
        ms.addListener(widthcheck);
        document.getElementById("mrun").disabled = true;
        document.getElementById("mrun").classList.remove("mrunenabled");
        document.getElementById("mrun").classList.add("mrundisabled");
    }
};

function cwidth(ms) {
    
    if (ms.matches) {
        var chartplot1 = document.getElementById("chartmine1").getContext("2d");
       
    } else {
        var chartplot1 = document.getElementById("myChart1").getContext("2d");
        
    }
    if (window.ch1 != undefined)
        window.ch1.destroy();
    
    
    window.ch1 = new Chart(chartplot1, {
        type: "scatter",
        data: {datasets: [{
            pointStyle:'cross',
            rotation:45,
            borderWidth: 1,
            borderColor: "rgb(0,0,255)",
            pointRadius: 6,
            data: poles,
            label:"Poles"
          },
          {
            pointStyle:'circle',
            rotation:45,
            borderWidth: 1,
            borderColor: "rgb(255,0,0)",
            pointRadius: 2,
            data: [{x:brk,y:0}],
            label:"Break away point"
          },
          {
            pointStyle:'circle',
            rotation:45,
            borderWidth: 1,
            borderColor: "rgb(0,255,0)",
            pointRadius: 2,
            data:[{x:brk,y:poles[0].y}],
            label:"locus starting point"
          },
          {
            pointStyle:'circle',
            rotation:45,
            borderWidth: 2,
            borderColor: "rgb(0,255,0)",
            pointRadius: 2,
            data:[{x:brk,y:poles[1].y}],
            label:"locus starting point"
          },
        {
            data: line_valy,
            label: 'upto infinity',
            backgroundColor: 'rgb(0,255,0)',
            borderColor: 'rgb(0,255,0)',
            borderWidth: 0.01,
            pointRadius: 0.5,
        }]},
        // options: {
        //     // title: {
        //     //     display: true,
        //     //     text: "Step Response",
        //     //     fontSize: 14,
        //     // },
        //     indexAxis: 'yAxes',
        //     maintainAspectRatio: false,
        //     scales: {
                
        //         stacked: true,
        //         xAxes: [{
        //             scaleLabel: {
        //                 display: "Time" !== ' ',
        //                 labelString: "Time"
        //             },

        //         }],
        //         yAxes: [{
        //             stacked: false, // `true` for stacked area chart, `false` otherwise
        //             beginAtZero: false,
        //             scaleLabel: {
        //                 display: "Amplitude" !== '',
        //                 labelString: "Amplitude"
        //             },


        //         }]
        //     },
        // }
        options: {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    scaleLabel: {
                        display: "Real Axis" !== ' ',
                        labelString: "Real Axis"
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: "Imaginary Axis" !== ' ',
                        labelString: "Imaginary Axis"
                    }
                }]
            }
        }
    });
   
    
    
    
}

function widthcheck(ms) {
    if (ms.matches){
        document.getElementById("chartcont").setAttribute("style", "display:block;");
    
    document.getElementById("tanswer").setAttribute("style", "display:block");}
    else {
        document.getElementById("chartcont1").setAttribute("style", "display:block;");
        document.getElementById("tanswer").setAttribute("style", "display:block");
    }
}

function highlightline(l) {
   console.log(l);
    var ln = "line" + l;
    var out = "out" + (l-1) ;
    console.log(out);
    document.getElementById(ln).setAttribute("style", "color:blue;");
    document.getElementById(out).setAttribute("style", "display:block;");
    if (lc != 1)
        ln = "line" + (l - 1);
    document.getElementById(ln).setAttribute("style", "color:black;");
};

var menu_score = 0;

function dispmenu(val) {
    val.classList.toggle("change");
    menu_score = menu_score + 1;
    if (menu_score == 1) {
        document.getElementById("navbar").setAttribute("style", "display:block");
        document.getElementById("simulation-cont").setAttribute("style", "opacity:0.5");
        if (mto != 1)
            document.getElementById("matwork").setAttribute("style", "opacity:1");
        menu_score = -1;
        document.body.style.backgroundColor = "black";
    } else {
        if (mto != 1)
            document.getElementById("matwork").setAttribute("style", "opacity:0.5");
        document.body.style.backgroundColor = "white";
        document.getElementById("simulation-cont").setAttribute("style", "opacity:01");
        document.getElementById("navbar").setAttribute("style", "display:none");
    }
}




function discriminant( a, b, c)
{
  return b*b-4*a*c;
};