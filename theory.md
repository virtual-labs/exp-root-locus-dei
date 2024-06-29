<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=default'></script>

<strong> Theory :  </strong><br> Root locus theory is a technique used in control systems engineering to analyze the behavior of the poles of a system as the gain K varies. It provides insights into the stability and transient response characteristics of a control system.<br>
Consider a control system with an open-loop transfer function of the form: <br>

$${ G(s) =  \\frac{N(s)}{D(s)} }$$

where N(s) is the numerator polynomial and D(s) is the denominator polynomial. The characteristic equation of the system is obtained by setting the denominator D(s) equal to zero.
<br><br>
To perform root locus analysis, we vary gain (K) and examine how the roots of the characteristic equation change as this parameter varies. 
<br>Step-by-step procedure to obtain the root locus is:<br><br>
<strong> 1. Determine the poles and zeros: </strong> 
Identify the poles (α, β, γ, ...) of the open-loop transfer function G(s) = N(s) / D(s). These are the roots of the characteristic equation when K = 0.<br>
<strong> 2. Define the locus equation:</strong> 
The locus equation is derived from the characteristic equation and the parameter K. It is given by:

$${D(s) + K * N(s) = 0}$$

This equation represents the locus of all possible roots of the characteristic equation for different values of K.<br>
<strong> 3. Determine the angles and magnitudes:</strong> 
For each point on the locus, calculate the angles and magnitudes of the vectors connecting the poles and zeros to that point.

The angle of a vector from a pole or zero to a point on the locus is given by:

$${θ = Σ (P - Z) + (2n + 1)π}$$

where P represents the angles from poles, Z represents the angles from zeros, and n is an integer that ensures the total angle is a multiple of 2π.

The magnitude of a vector from a pole or zero to a point on the locus is given by:

$${|G(s)| = |K * \\frac{N(s)}{D(s)}|}$$ 

<strong> 4. Construct the root locus plot:</strong> 
Plot the locus in the complex plane using the calculated angles and magnitudes. The locus represents the paths of the roots of the characteristic equation as K varies.

<strong> 5. Determine the branches and breakaway/intersection points:</strong> 
Analyze the root locus plot to identify the branches of the locus. Each branch starts at a pole and ends at a zero (or at infinity).
Breakaway points are the points on the locus where the branches depart from the real axis or intersect with each other.
