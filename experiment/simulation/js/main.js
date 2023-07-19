var mto = 0.5;
 var lab_imp = [],
     dat_imp = [],
     lab_step = [],
     dat_step = [],
     lab_final = [],
     poles = [],
     polesc1 = [],
     polesc2 = [];

var re_nyq1 = [],
    img_nyq1 = [],
    re_nyq2 = [],
    img_nyq2 = [];
var stepeqn,impuleqn;
var eqn;

var kpi,essi,esss,kp;
var conclusion = "";
 

 function addval() {
     lab = [];
     dat = [];
     a = "0"
     var nums, dens;
     var c1 = document.getElementById("numc").value;
     var d1 = document.getElementById("numd").value;
     var p1 = document.getElementById("dena").value;
     var q1 = document.getElementById("denb").value;
     var r1 = document.getElementById("denc").value;
     polesc1 = [];
     polesc2 = [];
     zero = [];
     poles = [];
     var x1, y1;
     var ni = 0,
         di = 0;

     c = parseInt(c1);
     d = parseInt(d1);
     p = parseInt(p1);
     q = parseInt(q1);
     r = parseInt(r1);
     var a = 0;
     zero.push({x:-d/c,y:0});
          
     lc = 1;
     document.getElementById("line1").setAttribute("style", "color:blue");
     document.getElementById("chartcont").setAttribute("style", "display:none");
     document.getElementById("tanswer").setAttribute("style", "display:none;");
     document.getElementById("chartcont1").setAttribute("style", "display:none;");
     document.getElementById("out5").setAttribute("style", "display:none;");
    
         
     for (let i = 1; i < 6; i++) {
         let out = "out" + i;
         let ln = "line" + (i + 1);
         document.getElementById(ln).setAttribute("Style", "color:black");
         document.getElementById(out).setAttribute("style", "display:none");
     }

         
     if(a==0 && p!=0 && c!=0 && d!=0)
mto=1;
else if((a!=0 && p==0)||(c!=0&&p==0&&q==0))
{
  mto=0;
  alert("Not a proper transfer function \nthe order of denominator should be greater than order of numerator");
}
else if(d!=0 && (q!=0 || p!=0))
{mto=1;}

else if(a==0 && c==0 && d==0)
{mto=0;
  alert("Not a proper transfer function \nplease provide some value for numerator as numerator cannot be zero");}
else if(p==0 && q==0 && r==0)
{mto=0;
  alert("Not a proper transfer function \nplease provide some value for denominator as denominator cannot be zero  ");
}
     
     if (mto) {
         document.getElementById("fconclusions").innerHTML = "Conclusions will show here";
         document.getElementById("matwork").title = "";
         document.getElementById("mrun").disabled = false;
         document.getElementById("matwork").setAttribute("style", "opacity:1");
         document.getElementById("mrun").classList.remove("mrundisabled", "mrunenabled");
         document.getElementById("mrun").classList.add("mrunenabled");
         document.getElementById("matwork").classList.remove('mat');

         
         if(p!=0){
            dens=p;
          dend=discriminant(p,q+c,r+d);
          if(dend>0)
          {
            x1 = (-1*(q+c)-Math.sqrt(dend))/2/p;
            x1 =Math.round(x1 * 100) / 100;
          
            poles.push({x:x1,y:0});
            x1 = (-1*(q+c)+Math.sqrt(dend))/2/p;
            x1 =Math.round(x1 * 100) / 100;
          
            poles.push({x:x1,y:0});
          }
          else if(dend==0)
          {
            x1 = (-1*(q+c)-Math.sqrt(dend))/2/p;
            x1 =Math.round(x1 * 100) / 100;
          
            poles.push({x:x1,y:0});
            poles.push({x:x1,y:0});
          }
          else
          {
            x1 = (-1*(q+c)/(2*p));
            x1 =Math.round(x1 * 100) / 100;
          
            y1 = (Math.sqrt(-1*dend)/2/p);
            y1 =Math.round(y1 * 100) / 100;
          
            poles.push({x:x1,y:y1});
            poles.push({x:x1,y:-1*y1});
            di=1;
          }}
          else
          {
            if((q+c)!=0){
              dens=(q+c);
              let temp = -1*(r+d)/(q+c);
              poles.push({x:temp,y:0});
            }
            else
              dens=(r+d);
          }
          
        var output = "<br>";
          for(j=0;j<poles.length;j++)
          {  if(di != 1 )
             output = output+"&emsp;&emsp;   " + poles[j].x+"<br><br>";
             else
             {
                 output = output+ "&emsp;&emsp;  " + poles[j].x+"&emsp; + &emsp;"+poles[j].y+"&emsp; i"+"<br><br>";
             }
          }
            
          for (let i=1;i<=100;i+=0.01)
          {

            
            
            p2 = p;
          q2 = i*c+q;
          r2 = i*d+r;


          if (i==1.005)
            {
              console.log(p2);
              console.log(q2);
              console.log(r2);
            }

          if(p2!=0){
            dens=p2;
          dend=discriminant(p2,q2,r2);
          if(dend>0)
          {
            x1 = (-1*q2-Math.sqrt(dend))/2/p2;
            x1 =Math.round(x1 * 100) / 100;
            
            if (x1<=10&&x1>=-10)
            {
              polesc1.push({x:x1,y:0});
            }
                        
            x1 = (-1*q2+Math.sqrt(dend))/2/p2;
            x1 =Math.round(x1 * 100) / 100;

            if (x1<=10&&x1>=-10)
            {
              polesc2.push({x:x1,y:0});
            }
                     
            
          }
          else if(dend==0)
          {
            x1 = (-1*q2-Math.sqrt(dend))/2/p2;
            x1 =Math.round(x1 * 100) / 100;

            if (x1<=10&&x1>=-10)
            {
              polesc1.push({x:x1,y:0});
            polesc2.push({x:x1,y:0});
            }
            
          
            
            
          }
          else
          {
            x1 = (-1*q2/(2*p2));
            x1 =Math.round(x1 * 100) / 100;

            
          
            y1 = (Math.sqrt(-1*dend)/2/p2);
            y1 =Math.round(y1 * 100) / 100;

            if (x1<=10&&x1>=-10)
            {
              polesc1.push({x:x1,y:y1});
            polesc2.push({x:x1,y:-1*y1});
            }
            
          
            
            di=1;
          }}
          else
          {
            if(q2!=0){
              dens=q2;
              let temp = -1*r2/q2;

            
              polesc1.push({x:temp,y:0});
            }
            else
              dens=r2;
          }
          if (i==1.005)
          {console.log (polesc1);}
          }
          
          var output2 = "<br>";
          
          var n1 = "$${G1 = K * \\frac{";
          var n2 = "$${\\frac{G1}{1+G1} = \\frac{K*(";

        var numerator = "";
if(a!=0)
numerator=numerator+a+"s^2";
if(c!=0)
  if(a!=0)
    if(c>0)
      numerator=numerator+" + " + c+"s";
    else
      numerator=numerator + c+"s";
  else
  numerator=numerator+ c+"s";
if(d!=0)
  if(a!=0 || c!=0)
if(d>0)
      numerator=numerator+" + " + d;
    else
      numerator=numerator + d;
  else
  numerator=numerator+ d;
numerator2 = numerator+")}";
numerator=numerator+"}";

var denominator = "{";
if(p!=0)
denominator=denominator+p+"s^2";
if(q!=0)
  if(p!=0)
    if(q>0)
      denominator=denominator+ " + " + q+"s";
    else
      denominator=denominator + q+"s";
  else
    denominator=denominator+ q+"s";
if(r!=0)
  if(p!=0||q!=0)
  if(r>0)
      denominator=denominator+ " + " + r;
    else
      denominator=denominator + r;
else
  denominator=denominator+ r;
denominator=denominator+"}}$$";
eqn = n1+numerator + denominator;


var denominator2 = "{";

if (p!=0)
denominator2=denominator2+p+"s^2";
if (q!=0||c!=0)
 {
    if(q==0)
    {
      if(c>0)
      denominator2=denominator2+" + "+c+"Ks";
      else
      denominator2=denominator2+c+"Ks";
    }
    else if (c==0)
    {
      if(q>0)
      denominator2=denominator2+" + "+q+"s";
      else
      denominator2=denominator2+q+"s";
    }
    else
    {
      if(c>0)
      denominator2=denominator2+" + ("+q+" + "+c+"K)s";
      else
      denominator2=denominator2+" + ("+q+" "+c+"K)s";
    }
 }

 if (r!=0||d!=0)
 {
  if (d==0)
  {
    if(r>0)
    denominator2=denominator2+" + "+r;
    else
    denominator2=denominator2+r;
  }
  else if (r==0)
  {
    if (d>0)
    denominator2=denominator2+" + "+d+"K";
    else
    denominator2=denominator2+d+"K";
  }
  else
  {
    if (d>0)
    denominator2=denominator2+" + ("+r+" + "+d+"K)";
    else
    denominator2=denominator2+" + ("+r+" "+d+"K)";
  }
 }

 denominator2=denominator2+"}}$$";

         

         var co=0;
         for (let i=0;i<poles.length;i++)
         {
            if (poles[i].x>0)
            co++;
         }
         var cc=0;
         for (let i=0;i<polesc1.length;i++)
         {
            if (polesc1[i].x>0)
            cc++;
         }
         
                 
           
         document.getElementById("out1").innerHTML = eqn;
         
         var eq = n2+numerator2+denominator2;

         document.getElementById("out2").innerHTML = eq;
         document.getElementById("out3").innerHTML = output;
         
         if (c!=0)
         document.getElementById("out4").innerHTML = "<br>$${&emsp;&emsp; Z =  "+(-d/c).toFixed(2)+"}$$<br>";
         else
         document.getElementById("out4").innerHTML = "<br>&emsp;&emsp;   Infinity<br><br>";
         var spz,n,np,nz;
         if (p!=0&&c!=0)         
         {spz = poles[0].x+poles[1].x-zero[0].x;
          n = 1; np=2; nz=1;}
         else if (p!=0)
         {spz = poles[0].x+poles[1].x;
          n = 2; np=2; nz=0;}
         else
         {
          if (c!=0)
          {if(q!=0)
          {spz = poles[0].x-zero[0].x;
            n =0; np=1; nz=1;}
          else
          {spz = 0 - zero[0].x;
            n = -1; np=0; nz=1;}
         }
        else
        if(q!=0)
          {spz = poles[0].x;
            n =0; np=1; nz=0;}
          else
          {spz = 0;
            n = -1; np=0; nz=0;}
      }
        
         var output3 = "<br>$${&emsp;&emsp; C =   "+(spz/n).toFixed(2)+"}$$<br>";
         
         var output4 = "$${ The&emsp; angle&emsp; of&emsp; asymptotes&emsp; are : ";
         
         for (let i=0;i<10;i++)
         {
           an = 180*(2*i+1)/n;
           if (an>360||an<-360)
           break;
           output4=output4+an+" &emsp; ";

         }
          output4 = output4+"}$$";
         document.getElementById("out5").innerHTML = output3+"<br>";
         document.getElementById("tanswer").innerHTML = "<br>"+output4+"<br><br>";

        if (np==2)
        conclusion = "1. Number of poles of closed loop system = 2. ";
        else if (np==1)
        conclusion = "1. Number of poles of closed loop system = 1. ";
        else
        conclusion = "1. Number of poles of closed loop system = 0. ";

        if (nz==1)
        conclusion = conclusion + "Number of zeroes of the control system = 1. <br>";
        else
        conclusion = conclusion + "Number of zeroes of the control system = 0. <br>";

        if (np==2 && nz==1)
        conclusion = conclusion + "2. The root locus starts at the two poles. One ends at the zero and the other ends at infinity.";
        else if (np==2 && nz==0)
        conclusion = conclusion + "2. The root locus starts at the two poles. Since there is no zero, both go till infinity.";
        else if (np==1&&nz==1)
        conclusion = conclusion + "2. The root locus starts at the pole and ends at the zero. It is a straight line.";
        else if (np==1&&nz==0)
        conclusion = conclusion + "2. There is only one pole. Thus, the root locus starts at the pole and goes upto infinity.";
        else if (np==0&&nz==1)
        conclusion = conclusion + "2. There is no pole but a zero. This is not possible.";
        else
        conclusion = conclusion + "2. Since the number of zeroes and poles are zero. Thus, not root locus.";

         
        var j, k;
   
        
         var ms = window.matchMedia("(max-width:950px)");
         cwidth(ms);
         ms.addListener(cwidth);

        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out1"]);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out2"]);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out3"]);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out4"]);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out5"]);
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

 function discriminant (a,b,c)
 {
    return b*b-4*a*c;
 }

 function showval() {
     genval("numc", "lc");
     genval("numd", "ld");
     genval("dena", "lp");
     genval("denb", "lq");
     genval("denc", "lr");
 };

 function genval(idofinput, idofspan) {
     var x;
     x = document.getElementById(idofinput).value;
     
     document.getElementById(idofspan).innerHTML = x;
 };

 var lc = 1;

 function runprog(i) {
     lc = lc + 1;
     if (lc <= 6)
         highlightline(lc);
     else {
         document.getElementById("fconclusions").innerHTML = conclusion;
         document.getElementById("line6").setAttribute("style", "color:black;");
         document.getElementById("mrun").disabled = true;
         var ms = window.matchMedia("screen and (max-width:950px)");
         document.getElementById("tanswer").setAttribute("style", "color:black");
                
         
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
    
     const labelstep = lab_final;    

     window.ch1 = new Chart(chartplot1, {
        type: 'scatter',
    data: {
        datasets: [{
            pointStyle:'cross',
            rotation:45,
            borderWidth: 1,
            backgroundColor: 'rgb(255, 0, 0)',
            borderColor: "rgb(255, 0, 0)",
            pointRadius: 10,
            data: poles,
            label:"Poles"
          },
          {
            pointStyle: 'circle',
            rotation: 45,
            borderWidth: 1,
            backgroundColor: 'rgb(3, 252, 23)',
            borderColor: "rgb(3, 252, 23)",
            pointRadius: 6,
            data: zero,
            label: "Zero"
          },
          {
            pointStyle:'circle',
            rotation:45,
            borderWidth: 1,
            backgroundColor: 'rgb(252, 3, 248)',
            borderColor: "rgb(252, 3, 248)",
            pointRadius: 1,
            data: polesc1,
            label:"Root Locus (Pole 1)"
          },
          {
              pointStyle:'circle',
              rotation:45,
              borderWidth: 1,
              backgroundColor: 'rgb(29, 10, 245)',
              borderColor: "rgb(29, 10, 245)",
              pointRadius: 1,
              data: polesc2,
              label:"Root Locus (Pole 2)"
          }]
    },
    options: {
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

 function generateDataPoints(xValues, yValues) {
    var dataPoints = [];
    for (var i = 0; i < xValues.length; i++) {
        dataPoints.push({x: xValues[i], y: yValues[i]});
    }
    return dataPoints;
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
 }

 

 
 
 function magnitude(c,d,p,q,r,w)
 {
   var mag = Math.sqrt(d*d+w*w*c*c)/Math.sqrt((r-p*w*w)*(r-p*w*w)+w*w*q*q);
   return mag;
 }

 function angle(c,d,p,q,r,w)
 {
  var ang = Math.atan(w*c/d)-Math.atan(w*q/(r-w*w*p));
  ang = ang*180/3.14;
  return ang;
 }

 

 

 
 
