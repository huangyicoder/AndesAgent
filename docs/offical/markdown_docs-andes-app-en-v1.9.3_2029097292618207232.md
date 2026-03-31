# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>LG_y</td><td>LG_y</td><td>State</td><td>-LG_y + v</td><td>TR</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>-LL_x + vi</td><td>TB</td></tr><tr><td>LA_y</td><td>LA_y</td><td>State</td><td>KALL_y - LA_y</td><td>TA</td></tr><tr><td>INT_y</td><td>INT_y</td><td>State</td><td>ue (LVG_y - VFE)</td><td>TE</td></tr><tr><td>WF_x</td><td>WF_x</td><td>State</td><td>VFE - WFx</td><td>TF1</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Nam</td><td>Sym-bol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>v</td><td>v</td><td>Al-geb</td><td>-v + vbus</td></tr><tr><td>vout</td><td>vout</td><td>Al-geb</td><td>FEXyINTyue - vout</td></tr><tr><td>UEL</td><td>UEL</td><td>Al-geb</td><td>-UEL + UEL0</td></tr><tr><td>OEL</td><td>OEL</td><td>Al-geb</td><td>-OEL + OEL0</td></tr><tr><td>Vs</td><td>Vs</td><td>Al-geb</td><td>-Vs</td></tr><tr><td>vref</td><td>vref</td><td>Al-geb</td><td>-vref + vref0</td></tr><tr><td>IN</td><td>IN</td><td>Al-geb</td><td>ue (-ININTy + KCXadIfd)</td></tr><tr><td>FEX_</td><td>FEXi</td><td>Al-geb</td><td>-FEXy+FixPiecewise((1, IN ≤ 0), (1 - 0.577IN, IN ≤ 0.433), (√0.75 - IN2, IN ≤ 0.7)</td></tr><tr><td>vi</td><td>vi</td><td>Al-geb</td><td>ue (-LGy + OEL + UEL + Vs - vi + vref)</td></tr><tr><td>LL_y</td><td>LLy</td><td>Al-geb</td><td>LLLT1z1LLLT2z1(-LLx + LLy) + LLxTB - LLyTB + TC(-LLx + vi)</td></tr><tr><td>HVG_</td><td>HVG</td><td>Al-geb</td><td>HVGltz0UEL + HVGltz1LAy - HVGy</td></tr><tr><td>LVG_</td><td>LVGt</td><td>Al-geb</td><td>HVGyLVGLtz1 + LVGLtz0OEL - LVGy</td></tr><tr><td>Se</td><td>Se</td><td>Al-geb</td><td>ue(SATBSLz0(INTy - SATA2) - Se)</td></tr><tr><td>VFE</td><td>VFE</td><td>Al-geb</td><td>ue(INTyKE + KDXadIfd + Se - VFE)</td></tr><tr><td>WF_</td><td>WFy</td><td>Al-geb</td><td>KF(VFE - WFx) - TFWFy</td></tr><tr><td>vf</td><td>vf</td><td>Ex-tAl-geb</td><td>ue(-vf0 + vout)</td></tr><tr><td>Xad-Ifd</td><td>XadI</td><td>Ex-tAl-geb</td><td>0</td></tr><tr><td>a</td><td>a</td><td>Ex-tAl-geb</td><td>0</td></tr><tr><td>vbus</td><td>vbus</td><td>Ex-tAl-geb</td><td>0</td></tr></table>


Services


<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>UELO</td><td>UELO</td><td>-999</td><td>ConstService</td></tr><tr><td>OEL0</td><td>OEL0</td><td>999</td><td>ConstService</td></tr><tr><td>VA-MAXu</td><td>VAMAXu</td><td>VAMAXue - 999ue + 999</td><td>ConstService</td></tr><tr><td>VAMINu</td><td>VAMINu</td><td>VAMINue + 999ue - 999</td><td>ConstService</td></tr><tr><td>SAT_E1</td><td>E1SAT</td><td>E1</td><td>ConstService</td></tr><tr><td>SAT_E2</td><td>E2SAT</td><td>E2 - 2SATzSE2 + 2</td><td>ConstService</td></tr><tr><td>SAT_SE1</td><td>SE1SAT</td><td>SE1</td><td>ConstService</td></tr><tr><td>SAT_SE2</td><td>SE2SAT</td><td>-2SATzSE2 + SE2 + 2</td><td>ConstService</td></tr><tr><td>SAT_a</td><td>aSAT</td><td>√(SATE1SATSE1/SATE2SATSE2) (Indicator (SATSE2 &gt; 0) + Indicator (SATSE2)</td><td>ConstService</td></tr><tr><td>SAT_A</td><td>AqSAT</td><td>SATE2 - SATE1 - SATE2/SATa-1</td><td>ConstService</td></tr><tr><td>SAT_B</td><td>BqSAT</td><td>SATE2SATSE2(SATa-1)2(Indicator (SATa&gt;0)+Indicator (SATa&lt;0))/(SATE1-SATE2)2</td><td>ConstService</td></tr><tr><td>vref0</td><td>Vref0</td><td>vref</td><td>PostInitService</td></tr></table>


Discretes


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LL_LT1</td><td>\(LT_{LL}\)</td><td>LessThan</td><td></td></tr><tr><td>LL_LT2</td><td>\(LT_{LL}\)</td><td>LessThan</td><td></td></tr><tr><td>LA_lim</td><td>\(lim_{LA}\)</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>HVG lt</td><td>\(None_{HVG}\)</td><td>LessThan</td><td></td></tr><tr><td>LVG lt</td><td>\(None_{LVG}\)</td><td>LessThan</td><td></td></tr><tr><td>SL</td><td>SL</td><td>LessThan</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>FEX</td><td>FEX</td><td>Piecewise</td><td>Piecewise function FEX</td></tr><tr><td>LG</td><td>LG</td><td>Lag</td><td>Voltage transducer</td></tr><tr><td>LL</td><td>LL</td><td>LeadLag</td><td>V_A, Lead-lag compensator</td></tr><tr><td>LA</td><td>LA</td><td>LagAntiWindup</td><td>V_A, Anti-windup lag</td></tr><tr><td>HVG</td><td>HVG</td><td>HVGate</td><td>HVGate for under excitation</td></tr><tr><td>LVG</td><td>LVG</td><td>LVGate</td><td>HVGate for under excitation</td></tr><tr><td>SAT</td><td>SAT</td><td>ExcQuadSat</td><td>Field voltage saturation</td></tr><tr><td>INT</td><td>INT</td><td>Integrator</td><td>V_E, integrator</td></tr><tr><td>WF</td><td>WF</td><td>Washout</td><td>Stabilizing circuit feedback</td></tr></table>

Config Fields in [ESAC1A] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.12.16 ESST1A

Exciter ESST1A model. 

Reference: 

[1] PowerWorld, Exciter ESST1A, [Online], 

[2] NEPLAN, Exciters Models, [Online], 

Available: https://www.powerworld.com/WebHelp/Content/TransientModels_HTML/Exciter%20ESST1A. htm 

https://www.neplan.ch/wp-content/uploads/2015/08/Nep_EXCITERS1.pdf 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>TR</td><td>TR</td><td>Sensing time constant</td><td>0.010</td><td></td><td></td></tr><tr><td>VI-MAX</td><td>VIMAX</td><td>Max. input voltage</td><td>0.800</td><td></td><td></td></tr><tr><td>VIMIN</td><td>VIMIN</td><td>Min. input voltage</td><td>-0.100</td><td></td><td></td></tr><tr><td>TB</td><td>TB</td><td>Lag time constant in lead-lag</td><td>1</td><td></td><td></td></tr><tr><td>TC</td><td>TC</td><td>Lead time constant in lead-lag</td><td>1</td><td></td><td></td></tr><tr><td>TB1</td><td>TB1</td><td>Lag time constant in lead-lag 1</td><td>1</td><td></td><td></td></tr><tr><td>TC1</td><td>TC1</td><td>Lead time constant in lead-lag 1</td><td>1</td><td></td><td></td></tr><tr><td>VA-MAX</td><td>VAMAX</td><td>V_A upper limit</td><td>999</td><td>p.u.</td><td></td></tr><tr><td>VAMIN</td><td>VAMIN</td><td>V_A lower limit</td><td>-999</td><td>p.u.</td><td></td></tr><tr><td>KA</td><td>KA</td><td>Regulator gain</td><td>80</td><td></td><td></td></tr><tr><td>TA</td><td>TA</td><td>Lag time constant in regulator</td><td>0.040</td><td></td><td></td></tr><tr><td>ILR</td><td>ILR</td><td>Exciter output current limite reference</td><td>1</td><td></td><td></td></tr><tr><td>KLR</td><td>KL R</td><td>Exciter output current limiter gain</td><td>1</td><td></td><td></td></tr><tr><td>VR-MAX</td><td>VRMAX</td><td>Maximum voltage regulator output limit</td><td>7.300</td><td>p.u.</td><td></td></tr><tr><td>VR-MIN</td><td>VRMIN</td><td>Minimum voltage regulator output limit</td><td>-7.300</td><td>p.u.</td><td></td></tr><tr><td>KF</td><td>KF</td><td>Feedback gain</td><td>0.100</td><td></td><td></td></tr><tr><td>TF</td><td>TF</td><td>Feedback washout time constant</td><td>1</td><td></td><td></td></tr><tr><td>KC</td><td>KC</td><td>Rectifier loading factor proportional to commutating re-actance</td><td>0.100</td><td></td><td></td></tr><tr><td>UELc</td><td>UELc</td><td>Alternate UEL inputs, input code 1-3</td><td>1</td><td></td><td></td></tr><tr><td>VOSc</td><td>VOSc</td><td>Alternate Stabilizer inputs, input code 1-2</td><td>1</td><td></td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator online status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Sn</td><td>Sm</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>Vn</td><td>Vm</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr><tr><td>bus</td><td>bus</td><td>Bus idx of the generators</td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>LG_y</td><td>LG_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>LL1_x</td><td>LL1x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>LA_y</td><td>LA_y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>WF_x</td><td>WF_x</td><td>State</td><td>State in washout filter</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>Algeb</td><td>Input to exciter (bus v or Eterm)</td><td></td><td>v_str</td></tr><tr><td>vout</td><td>vout</td><td>Algeb</td><td>Exciter final output voltage</td><td></td><td>v_str</td></tr><tr><td>UEL</td><td>UEL</td><td>Algeb</td><td>Interface var for under exc. limiter</td><td></td><td>v_str</td></tr><tr><td>OEL</td><td>OEL</td><td>Algeb</td><td>Interface var for over exc. limiter</td><td></td><td>v_str</td></tr><tr><td>Vs</td><td>Vs</td><td>Algeb</td><td>Voltage compensation from PSS</td><td></td><td>v_str</td></tr><tr><td>vref</td><td>vref</td><td>Algeb</td><td>Reference voltage input</td><td>p.u.</td><td>v_str,v_iter</td></tr><tr><td>SG</td><td>SG</td><td>Algeb</td><td>SG</td><td></td><td>v_str</td></tr><tr><td>LR_x</td><td>LR_x</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>LR_y</td><td>LR_y</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>vi</td><td>vi</td><td>Algeb</td><td>Total input voltages</td><td>p.u.</td><td>v_str,v_iter</td></tr><tr><td>vil_x</td><td>vil_x</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>vil_y</td><td>vil_y</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>UEL2</td><td>UEL2</td><td>Algeb</td><td>UEL_2 as HVG1 u1</td><td></td><td>v_str</td></tr><tr><td>HVG1_y</td><td>HVG1y</td><td>Algeb</td><td>HVGate output</td><td></td><td>v_str</td></tr><tr><td>LL_y</td><td>LLy</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>LL1_y</td><td>LL1y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>vas</td><td>vas</td><td>Algeb</td><td>V_A after subtraction, as HVG u2</td><td></td><td>v_str,v_iter</td></tr><tr><td>UEL3</td><td>UEL3</td><td>Algeb</td><td>UEL_3 as HVG u1</td><td></td><td>v_str</td></tr><tr><td>HVG_y</td><td>HVG_y</td><td>Algeb</td><td>HVGate output</td><td></td><td>v_str</td></tr><tr><td>LVG_y</td><td>LVG_y</td><td>Algeb</td><td>LVGate output</td><td></td><td>v_str</td></tr><tr><td>vol_x</td><td>vol_x</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>vol_y</td><td>vol_y</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>WF_y</td><td>WF_y</td><td>Algeb</td><td>Output of washout filter</td><td></td><td>v_str</td></tr><tr><td>vf</td><td>vf</td><td>ExtAlgeb</td><td>Excitation field voltage to generator</td><td></td><td></td></tr><tr><td>XadIfd</td><td>XadIfd</td><td>ExtAlgeb</td><td>Armature excitation current</td><td></td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage phase angle</td><td></td><td></td></tr><tr><td>vbus</td><td>vbus</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr><tr><td>vd</td><td>vd</td><td>ExtAlgeb</td><td>d-axis machine voltage</td><td></td><td></td></tr><tr><td>vq</td><td>vq</td><td>ExtAlgeb</td><td>q-axis machine voltage</td><td></td><td></td></tr></table>


Initialization Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>LG_y</td><td>LG_y</td><td>State</td><td>v</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>HVG1y</td></tr><tr><td>LL1_x</td><td>LL1x</td><td>State</td><td>LLy</td></tr><tr><td>LA_y</td><td>LA_y</td><td>State</td><td>KALL1y</td></tr><tr><td>WF_x</td><td>WF_x</td><td>State</td><td>LVGy</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>v</td><td>v</td><td>Algeb</td><td>vbus</td></tr><tr><td>vout</td><td>vout</td><td>Algeb</td><td>uevf0</td></tr><tr><td>UEL</td><td>UEL</td><td>Algeb</td><td>UEL0</td></tr><tr><td>OEL</td><td>OEL</td><td>Algeb</td><td>OEL0</td></tr><tr><td>Vs</td><td>Vs</td><td>Algeb</td><td>0</td></tr><tr><td>vref</td><td>vref</td><td>Algeb</td><td>ue(-SGSWVOSs1-SWUELslUEL+v+LRy-SGSWVOSs2+vf0/KA)</td></tr><tr><td>SG</td><td>SG</td><td>Algeb</td><td>SG0</td></tr><tr><td>LR_x</td><td>LRx</td><td>Algeb</td><td>KLR(-ILR+XadIfd)</td></tr><tr><td>LR_y</td><td>LRy</td><td>Algeb</td><td>LRlimziLRx+LRlimzlzero</td></tr><tr><td>vi</td><td>vi</td><td>Algeb</td><td>ue(-LGy+SGSWVOSs1+SWUELslUEL+Vs-WFy+vref)</td></tr><tr><td>vil_x</td><td>vilx</td><td>Algeb</td><td>vi</td></tr><tr><td>vil_y</td><td>vily</td><td>Algeb</td><td>VIMAXvilimzu+VIMINvilimzl+vilimzivilx</td></tr><tr><td>UEL2</td><td>UEL2</td><td>Algeb</td><td>ue(SWUELslUEL+llim(1-SWUELs2))</td></tr><tr><td>HVG1_y</td><td>HVG1y</td><td>Algeb</td><td>HVG1ltz0UEL2+HVG1ltz1vily</td></tr><tr><td>LL_y</td><td>LLy</td><td>Algeb</td><td>HVG1y</td></tr><tr><td>LL1_y</td><td>LL1y</td><td>Algeb</td><td>LLy</td></tr><tr><td>vas</td><td>vas</td><td>Algeb</td><td>ue(LAy-LRy+SGSWVOSs2)</td></tr><tr><td>UEL3</td><td>UEL3</td><td>Algeb</td><td>ue(SWUELslUEL+llim(1-SWUELsl3))</td></tr><tr><td>HVG_y</td><td>HVGy</td><td>Algeb</td><td>HVGltz0UEL3+HVGltz1vas</td></tr><tr><td>LVG_y</td><td>LVGy</td><td>Algeb</td><td>HVGyLVGLtz1+LVGLtz0OEL</td></tr><tr><td>vol_x</td><td>volx</td><td>Algeb</td><td>LVGy</td></tr><tr><td>vol_y</td><td>voly</td><td>Algeb</td><td>efdlvolimzl+efduvolimzu+volimzivolx</td></tr><tr><td>WF_y</td><td>WFy</td><td>Algeb</td><td>0</td></tr><tr><td>vf</td><td>vf</td><td>ExtAlgeb</td><td></td></tr><tr><td>XadIfd</td><td>XadIfd</td><td>ExtAlgeb</td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>vbus</td><td>vbus</td><td>ExtAlgeb</td><td></td></tr><tr><td>vd</td><td>vd</td><td>ExtAlgeb</td><td></td></tr><tr><td>vq</td><td>vq</td><td>ExtAlgeb</td><td></td></tr></table>


Differential Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>LG_y</td><td>LG_y</td><td>State</td><td>-LG_y + v</td><td>TR</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>HVG_1y - LL_x</td><td>TB</td></tr><tr><td>LL1_x</td><td>LL1x</td><td>State</td><td>-LL1x + LL_y</td><td>TB1</td></tr><tr><td>LA_y</td><td>LA_y</td><td>State</td><td>KALL1y - LA_y</td><td>TA</td></tr><tr><td>WF_x</td><td>WF_x</td><td>State</td><td>LVG_y - WF_x</td><td>TF</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>


Algebraic Equations


<table><tr><td>Name</td><td>Sym-bol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>v</td><td>v</td><td>Algeb</td><td>-v + vbus</td></tr><tr><td>vout</td><td>vout</td><td>Algeb</td><td>uevoly - vout</td></tr><tr><td>UEL</td><td>UEL</td><td>Algeb</td><td>-UEL + UEL0</td></tr><tr><td>OEL</td><td>OEL</td><td>Algeb</td><td>-OEL + OEL0</td></tr><tr><td>Vs</td><td>Vs</td><td>Algeb</td><td>-Vs</td></tr><tr><td>vref</td><td>vref</td><td>Algeb</td><td>-vref + vref0</td></tr><tr><td>SG</td><td>SG</td><td>Algeb</td><td>-SG + SG0</td></tr><tr><td>LR_x</td><td>LRx</td><td>Algeb</td><td>KLR (-ILR + XadIfd) - LRx</td></tr><tr><td>LR_y</td><td>LRy</td><td>Algeb</td><td>LRlimzi LRx + Lrlimzlzero - Lry</td></tr><tr><td>vi</td><td>vi</td><td>Algeb</td><td>ue(-LGy + SGSWVOSs1 + SWUELs1UEL + Vs - WFy + vref) - vi</td></tr><tr><td>vil_x</td><td>vilx</td><td>Algeb</td><td>vi - vilx</td></tr><tr><td>vil_y</td><td>vily</td><td>Algeb</td><td>VIMAXvilimzu + VIMINvilimzl + vilimzivilx - vily</td></tr><tr><td>UEL2</td><td>UEL2</td><td>Algeb</td><td>-UEL2 + ue(SWUELS2UEL + llim (1 - SWUELS2))</td></tr><tr><td>HVG1_y</td><td>HVG1y</td><td>Algeb</td><td>HVG1ltz0UEL2 + HVG1ltz1vily - HVG1y</td></tr><tr><td>LL_y</td><td>LLy</td><td>Algeb</td><td>LLLT1z1LLLT2z1(-LLx + LLy) + LLxTB - LLyTB + TC (HVG1y - LLx)</td></tr><tr><td>LL1_y</td><td>LL1y</td><td>Algeb</td><td>LL1LT1z1LL1LT2z1(-LL1x + LL1y) + LL1xTB1 - LL1yTB1 + TC1(-LL1x + LLy)</td></tr><tr><td>vas</td><td>vas</td><td>Algeb</td><td>ue(LAy - LRy + SGSWVOSs2) - vas</td></tr><tr><td>UEL3</td><td>UEL3</td><td>Algeb</td><td>-UEL3 + ue(SWUELS3UEL + llim (1 - SWUELS3))</td></tr><tr><td>HVG_y</td><td>HVGy</td><td>Algeb</td><td>HVGltz0UEL3 + HVGltz1vas - HVGy</td></tr><tr><td>LVG_y</td><td>LVGy</td><td>Algeb</td><td>HVGyLVGLtz1 + LVGLtz0OEL - LVGy</td></tr><tr><td>vol_x</td><td>volx</td><td>Algeb</td><td>LVGy - volx</td></tr><tr><td>vol_y</td><td>voly</td><td>Algeb</td><td>efdlvolimzl + efduvolimzu + volimzivolx - voly</td></tr><tr><td>WF_y</td><td>WFy</td><td>Algeb</td><td>KF(LVGy - WFx) - TFWFy</td></tr><tr><td>vf</td><td>vf</td><td>ExtAl-geb</td><td>ue(-vf0 + vout)</td></tr><tr><td>XadIfd</td><td>XadIfa</td><td>ExtAl-geb</td><td>0</td></tr><tr><td>a</td><td>a</td><td>ExtAl-geb</td><td>0</td></tr><tr><td>vbus</td><td>vbus</td><td>ExtAl-geb</td><td>0</td></tr><tr><td>vd</td><td>vd</td><td>ExtAl-geb</td><td>0</td></tr><tr><td>vq</td><td>vq</td><td>ExtAl-geb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>UELO</td><td>UELO</td><td>-999</td><td>ConstService</td></tr><tr><td>OEL0</td><td>OEL0</td><td>999</td><td>ConstService</td></tr><tr><td>ulim</td><td>ulim</td><td>9999</td><td>ConstService</td></tr><tr><td>llim</td><td>llim</td><td>-9999</td><td>ConstService</td></tr><tr><td>SG0</td><td>SG0</td><td>0</td><td>ConstService</td></tr><tr><td>zero</td><td>zero</td><td>0</td><td>ConstService</td></tr><tr><td>VA0</td><td>VA0</td><td>LRy - SGSWVOSs2 + vf0</td><td>PostInitService</td></tr><tr><td>vref0</td><td>Vref0</td><td>vref</td><td>PostInitService</td></tr><tr><td>efdu</td><td>efdu</td><td>-KCXadIfd + VRMAX√vd2 + vq2</td><td>VarService</td></tr><tr><td>efdl</td><td>efdl</td><td>VRMIN√vd2 + vq2</td><td>VarService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>SWUEL</td><td>SWUEL</td><td>Switcher</td><td></td></tr><tr><td>SWVOS</td><td>SWVOS</td><td>Switcher</td><td></td></tr><tr><td>LR_lim</td><td>limLR</td><td>HardLimiter</td><td></td></tr><tr><td>vil_lim</td><td>limvil</td><td>HardLimiter</td><td></td></tr><tr><td>HVG1 lt</td><td>NoneHVG1</td><td>LessThan</td><td></td></tr><tr><td>LL_LT1</td><td>LTLL</td><td>LessThan</td><td></td></tr><tr><td>LL_LT2</td><td>LTLL</td><td>LessThan</td><td></td></tr><tr><td>LL1_LT1</td><td>LTLL1</td><td>LessThan</td><td></td></tr><tr><td>LL1_LT2</td><td>LTLL1</td><td>LessThan</td><td></td></tr><tr><td>LA_lim</td><td>limLA</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>HVG lt</td><td>NoneHVG</td><td>LessThan</td><td></td></tr><tr><td>LVG lt</td><td>NoneLVG</td><td>LessThan</td><td></td></tr><tr><td>vol_lim</td><td>limvol</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LG</td><td>LG</td><td>Lag</td><td>Voltage transducer</td></tr><tr><td>LR</td><td>LR</td><td>GainLimiter</td><td>Exciter output current gain limiter</td></tr><tr><td>vil</td><td>vil</td><td>GainLimiter</td><td>Exciter voltage input limiter</td></tr><tr><td>HVG1</td><td>HVG1</td><td>HVGate</td><td>HVGate after V_I</td></tr><tr><td>LL</td><td>LL</td><td>LeadLag</td><td>Lead-lag compensator</td></tr><tr><td>LL1</td><td>LL1</td><td>LeadLag</td><td>Lead-lag compensator 1</td></tr><tr><td>LA</td><td>LA</td><td>LagAntiWindup</td><td>V_A, Anti-windup lag</td></tr><tr><td>HVG</td><td>HVG</td><td>HVGate</td><td>HVGate for under excitation</td></tr><tr><td>LVG</td><td>LVG</td><td>LVGate</td><td>HVGate for over excitation</td></tr><tr><td>vol</td><td>vol</td><td>GainLimiter</td><td>Exciter output limiter</td></tr><tr><td>WF</td><td>WF</td><td>Washout</td><td>V_F, Stabilizing circuit feedback</td></tr></table>

Config Fields in [ESST1A] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.12.17 ESAC5A

Exciter ESAC5A. 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>TR</td><td>TR</td><td>Sensing Time Constant</td><td>0.010</td><td>p.u</td><td></td></tr><tr><td>TA</td><td>TA</td><td>Voltage Regulator Time Constant</td><td>0.040</td><td>p.u</td><td></td></tr><tr><td>KA</td><td>KA</td><td>Voltage Regulator Gain</td><td>80</td><td></td><td></td></tr><tr><td>VRMIN</td><td>VRmin</td><td>V_R lower limit</td><td>-7.300</td><td>p.u</td><td></td></tr><tr><td>VRMAX</td><td>VRmax</td><td>V_R upper limit</td><td>7.300</td><td>p.u</td><td></td></tr><tr><td>TE</td><td>TE</td><td>Integrator Time Constant</td><td>0.800</td><td>p.u</td><td>non_negative</td></tr><tr><td>KF</td><td>KF</td><td>Feedback Gain</td><td>0.030</td><td></td><td></td></tr><tr><td>TF1</td><td>TF1</td><td>Lag Time Constant</td><td>1</td><td>p.u</td><td></td></tr><tr><td>TF2</td><td>TF2</td><td>Lead-Lag Time Constant (pole)</td><td>0.800</td><td>p.u</td><td></td></tr><tr><td>TF3</td><td>TF3</td><td>Lead-Lag Time Constant (zero)</td><td>1</td><td>p.u</td><td></td></tr><tr><td>KE</td><td>KE</td><td>Exciter Feedback Gain</td><td>1</td><td></td><td></td></tr><tr><td>E1</td><td>E1</td><td>First saturation point</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>SE1</td><td>SE1</td><td>Value at first saturation point</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>E2</td><td>E2</td><td>Second saturation point</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>SE2</td><td>SE2</td><td>Value at second saturation point</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator online status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Sn</td><td>Sm</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>Vn</td><td>Vm</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr><tr><td>bus</td><td>bus</td><td>Bus idx of the generators</td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>LP_y</td><td>LP_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>VR_y</td><td>VR_y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>WF_x</td><td>WF_x</td><td>State</td><td>State in washout filter</td><td></td><td>v_str</td></tr><tr><td>INT_y</td><td>INT_y</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>Algeb</td><td>Input to exciter (bus v or Eterm)</td><td></td><td>v_str</td></tr><tr><td>vout</td><td>vout</td><td>Algeb</td><td>Exciter final output voltage</td><td></td><td>v_str</td></tr><tr><td>UEL</td><td>UEL</td><td>Algeb</td><td>Interface var for under exc. limiter</td><td></td><td>v_str</td></tr><tr><td>OEL</td><td>OEL</td><td>Algeb</td><td>Interface var for over exc. limiter</td><td></td><td>v_str</td></tr><tr><td>Vs</td><td>Vs</td><td>Algeb</td><td>Voltage compensation from PSS</td><td></td><td>v_str</td></tr><tr><td>vref</td><td>vref</td><td>Algeb</td><td>Reference voltage input</td><td>p.u.</td><td>v_str</td></tr><tr><td>vi</td><td>vi</td><td>Algeb</td><td>Total voltage input</td><td>pu</td><td>v_str</td></tr><tr><td>LL_y</td><td>LL_y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>WF_y</td><td>WF_y</td><td>Algeb</td><td>Output of washout filter</td><td></td><td>v_str</td></tr><tr><td>Se</td><td>Se</td><td>Algeb</td><td>saturation output</td><td></td><td>v_str</td></tr><tr><td>VFE</td><td>VFE</td><td>Algeb</td><td>Combined saturation feedback</td><td>p.u.</td><td>v_str</td></tr><tr><td>vf</td><td>vf</td><td>ExtAlgeb</td><td>Excitation field voltage to generator</td><td></td><td></td></tr><tr><td>XadIfd</td><td>XadIfd</td><td>ExtAlgeb</td><td>Armature excitation current</td><td></td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage phase angle</td><td></td><td></td></tr><tr><td>vbus</td><td>vbus</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>LP_y</td><td>LP_y</td><td>State</td><td>v</td></tr><tr><td>VR_y</td><td>VR_y</td><td>State</td><td>KAvi</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>VRY</td></tr><tr><td>WF_x</td><td>WF_x</td><td>State</td><td>LLy</td></tr><tr><td>INT_y</td><td>INT_y</td><td>State</td><td>vf0</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>v</td><td>v</td><td>Algeb</td><td>vbus</td></tr><tr><td>vout</td><td>vout</td><td>Algeb</td><td>uevf0</td></tr><tr><td>UEL</td><td>UEL</td><td>Algeb</td><td>UEL0</td></tr><tr><td>OEL</td><td>OEL</td><td>Algeb</td><td>OEL0</td></tr><tr><td>Vs</td><td>Vs</td><td>Algeb</td><td>0</td></tr><tr><td>vref</td><td>vref</td><td>Algeb</td><td>v + VFE/KA</td></tr><tr><td>vi</td><td>vi</td><td>Algeb</td><td>ue(-v + vref)</td></tr><tr><td>LL_y</td><td>LL_y</td><td>Algeb</td><td>VRY</td></tr><tr><td>WF_y</td><td>WF_y</td><td>Algeb</td><td>0</td></tr><tr><td>Se</td><td>Se</td><td>Algeb</td><td>SATB (INTy - SATA)2 Indicator (INTy &gt; SATA)</td></tr><tr><td>VFE</td><td>VFE</td><td>Algeb</td><td>INTyKE + Se</td></tr><tr><td>vf</td><td>vf</td><td>ExtAlgeb</td><td></td></tr><tr><td>XadIfd</td><td>XadIfd</td><td>ExtAlgeb</td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>vbus</td><td>vbus</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>LP_y</td><td>LP_y</td><td>State</td><td>-LP_y + v</td><td>TR</td></tr><tr><td>VR_y</td><td>VR_y</td><td>State</td><td>KAvi - VR_y</td><td>TA</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>-LL_x + VR_y</td><td>TF2</td></tr><tr><td>WF_x</td><td>WF_x</td><td>State</td><td>LL_y - WF_x</td><td>TF1</td></tr><tr><td>INT_y</td><td>INT_y</td><td>State</td><td>ue (-VFE + VR_y)</td><td>TE</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Sym-bol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>v</td><td>v</td><td>Algeb</td><td>-v + vbus</td></tr><tr><td>vout</td><td>vout</td><td>Algeb</td><td>INTyue - vout</td></tr><tr><td>UEL</td><td>UEL</td><td>Algeb</td><td>-UEL + UEL0</td></tr><tr><td>OEL</td><td>OEL</td><td>Algeb</td><td>-OEL + OEL0</td></tr><tr><td>Vs</td><td>Vs</td><td>Algeb</td><td>-Vs</td></tr><tr><td>vref</td><td>vref</td><td>Algeb</td><td>-vref + vref0</td></tr><tr><td>vi</td><td>vi</td><td>Algeb</td><td>ue(-LPy + Vs - WFy + vref) - vi</td></tr><tr><td>LL_y</td><td>LLy</td><td>Algeb</td><td>LLLT1z1LLLT2z1(-LLx + LLy) + LLxTF2 - LLyTF2 + TF3(-LLx + VRy)</td></tr><tr><td>WF_y</td><td>WFy</td><td>Algeb</td><td>KF(LLy - WFx) - TF1WFy</td></tr><tr><td>Se</td><td>Se</td><td>Algeb</td><td>ue(SATBSLz0 (INTy - SATA)2 - Se)</td></tr><tr><td>VFE</td><td>VFE</td><td>Algeb</td><td>ue(INTyKE + Se - VFE)</td></tr><tr><td>vf</td><td>vf</td><td>ExtAl-genb</td><td>ue(-vf0 + vout)</td></tr><tr><td>Xad-Ifd</td><td>XadIfd</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>a</td><td>a</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>vbus</td><td>vbus</td><td>ExtAl-genb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>UELO</td><td>UELO</td><td>0</td><td>ConstService</td></tr><tr><td>OEL0</td><td>OEL0</td><td>0</td><td>ConstService</td></tr><tr><td>VR-MAXu</td><td>VRMAXu</td><td>VRMAXue - 999ue + 999</td><td>ConstService</td></tr><tr><td>VR-MINu</td><td>VRMINu</td><td>VRMINue + 999ue - 999</td><td>ConstService</td></tr><tr><td>SAT_E1</td><td>E1SAT</td><td>E1</td><td>ConstService</td></tr><tr><td>SAT_E2</td><td>E2SAT</td><td>E2 - 2SATzSE2 + 2</td><td>ConstService</td></tr><tr><td>SAT_SE1</td><td>SE1SAT</td><td>SE1</td><td>ConstService</td></tr><tr><td>SAT_SE2</td><td>SE2SAT</td><td>-2SATzSE2 + SE2 + 2</td><td>ConstService</td></tr><tr><td>SAT_a</td><td>aSAT</td><td>√(SATE1SATSE1/SATE2SATSE2) (Indicator (SATSE2 &gt; 0) + Indicator (SATSE2)</td><td>ConstService</td></tr><tr><td>SAT_A</td><td>AqSAT</td><td>SATE2 - SATE1 - SATE2/SATa-1</td><td>ConstService</td></tr><tr><td>SAT_B</td><td>BqSAT</td><td>SATE2SATSE2(SATa-1)2(Indicator (SATa &gt; 0) + Indicator (SATa &lt; 0))/(SATE1 - SATE2)2</td><td>ConstService</td></tr><tr><td>vref0</td><td>Vref0</td><td>vref</td><td>PostInitService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>VRLim</td><td>limVR</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>LL_LT1</td><td>LTLL</td><td>LessThan</td><td></td></tr><tr><td>LL_LT2</td><td>LTLL</td><td>LessThan</td><td></td></tr><tr><td>SL</td><td>SL</td><td>LessThan</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LP</td><td>LP</td><td>Lag</td><td>Voltage transducer</td></tr><tr><td>VR</td><td>VR</td><td>LagAntiWindup</td><td></td></tr><tr><td>LL</td><td>LL</td><td>LeadLag</td><td></td></tr><tr><td>WF</td><td>WF</td><td>Washout</td><td></td></tr><tr><td>SAT</td><td>SAT</td><td>ExcQuadSat</td><td>Field voltage saturation</td></tr><tr><td>INT</td><td>INT</td><td>Integrator</td><td>V_E, integrator</td></tr></table>

Config Fields in [ESAC5A] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.13 Experimental

Experimental group 

Common Parameters: u, name 

# 5.14 FreqMeasurement

Frequency measurements. 

Common Parameters: u, name 

Common Variables: f 

Available models: BusFreq, BusROCOF 

# 5.14.1 BusFreq

Bus frequency measurement. Outputs frequency in per unit value. 

The bus frequency output variable is $f$ . The frequency deviation variable is $W O _ { - } y$ 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>bus idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>Tf</td><td>Tf</td><td>input digital filter time const</td><td>0.020</td><td>sec</td><td></td></tr><tr><td>Tw</td><td>Tw</td><td>washout time const</td><td>0.100</td><td>sec</td><td></td></tr><tr><td>fn</td><td>fn</td><td>nominal frequency</td><td>60</td><td>Hz</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>L_y</td><td>Ly</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>State in washout filter</td><td></td><td>v_str</td></tr><tr><td>WO_y</td><td>WOy</td><td>Algebra</td><td>frequency deviation</td><td>p.u. (Hz)</td><td>v_str</td></tr><tr><td>f</td><td>f</td><td>Algebra</td><td>frequency output</td><td>p.u. (Hz)</td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgebra</td><td></td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgebra</td><td></td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>L_y</td><td>Ly</td><td>State</td><td>a - a0</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>Ly</td></tr><tr><td>WO_y</td><td>WOy</td><td>Algeb</td><td>0</td></tr><tr><td>f</td><td>f</td><td>Algeb</td><td>1</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>L_y</td><td>Ly</td><td>State</td><td>-Ly + a - a0</td><td>Tf</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>Ly - WOx</td><td>Tw</td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>WO_y</td><td>WO_y</td><td>Algeb</td><td>-TwWO_y + iwn (Ly - WOx)</td></tr><tr><td>f</td><td>f</td><td>Algeb</td><td>WO_y - f + 1</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>iwn</td><td>1/ωn</td><td>u/2πfn</td><td>ConstService</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>L</td><td>L</td><td>Lag</td><td>digital filter</td></tr><tr><td>WO</td><td>WO</td><td>Washout</td><td>angle washout</td></tr></table>

Config Fields in [BusFreq] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr></table>

# 5.14.2 BusROCOF

Bus frequency and ROCOF measurement. 

The ROCOF output variable is Wf_y. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>bus idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>Tf</td><td>Tf</td><td>input digital filter time const</td><td>0.020</td><td>sec</td><td></td></tr><tr><td>Tw</td><td>Tw</td><td>washout time const</td><td>0.100</td><td>sec</td><td></td></tr><tr><td>fn</td><td>fn</td><td>nominal frequency</td><td>60</td><td>Hz</td><td></td></tr><tr><td>Tr</td><td>Tr</td><td>frequency washout time constant</td><td>0.100</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>L_y</td><td>Ly</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>State in washout filter</td><td></td><td>v_str</td></tr><tr><td>Wf_x</td><td>Wfx</td><td>State</td><td>State in washout filter</td><td></td><td>v_str</td></tr><tr><td>WO_y</td><td>WOy</td><td>Algeb</td><td>frequency deviation</td><td>p.u. (Hz)</td><td>v_str</td></tr><tr><td>f</td><td>f</td><td>Algeb</td><td>frequency output</td><td>p.u. (Hz)</td><td>v_str</td></tr><tr><td>Wf_y</td><td>Wfy</td><td>Algeb</td><td>Output of washout filter</td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>L_y</td><td>Ly</td><td>State</td><td>a - a0</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>Ly</td></tr><tr><td>Wf_x</td><td>Wf_x</td><td>State</td><td>f</td></tr><tr><td>WO_y</td><td>WOy</td><td>Algeb</td><td>0</td></tr><tr><td>f</td><td>f</td><td>Algeb</td><td>1</td></tr><tr><td>Wf_y</td><td>Wf_y</td><td>Algeb</td><td>0</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>L_y</td><td>Ly</td><td>State</td><td>-Ly + a - a0</td><td>Tf</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>Ly - WOx</td><td>Tw</td></tr><tr><td>Wf_x</td><td>Wf x</td><td>State</td><td>-Wf x + f</td><td>Tr</td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>WO_y</td><td>WO_y</td><td>Algeb</td><td>-TwWO_y + iwn (Ly - WOx)</td></tr><tr><td>f</td><td>f</td><td>Algeb</td><td>WO_y - f + 1</td></tr><tr><td>Wf_y</td><td>Wf_y</td><td>Algeb</td><td>-TrWf_y - Wf_x + f</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>iwn</td><td>1/ωn</td><td>u/2πfn</td><td>ConstService</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>L</td><td>L</td><td>Lag</td><td>digital filter</td></tr><tr><td>WO</td><td>WO</td><td>Washout</td><td>angle washout</td></tr><tr><td>Wf</td><td>Wf</td><td>Washout</td><td>frequency washout yielding ROCOF</td></tr></table>

Config Fields in [BusROCOF] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.15 Information

Group for information container models. 

Available models: Summary 

# 5.15. Information

# 5.15.1 Summary

Class for storing system summary. Can be used for random information or notes. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>field</td><td></td><td>field name</td><td></td><td></td><td></td></tr><tr><td>comment</td><td></td><td>information, comment, or anything</td><td></td><td></td><td></td></tr><tr><td>comment2</td><td></td><td>comment field 2</td><td></td><td></td><td></td></tr><tr><td>comment3</td><td></td><td>comment field 3</td><td></td><td></td><td></td></tr><tr><td>comment4</td><td></td><td>comment field 4</td><td></td><td></td><td></td></tr></table>

Config Fields in [Summary] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.16 Interface

Group for interface models. 

Available models: Fortescue 

# 5.16.1 Fortescue

Fortescue's symmetric component interface. 

This model interfaces a positive-sequence, single-phase-equivalent bus with three buses representing three phases. It is effectively a transformer with one terminal on the primary side and three on the secondary. Only the positive sequence component on the secondary winding is used for simulation. 

The positive-sequence voltage magnitude and angle of the secondary winding are named vp and ap. 

The negative and zero sequence variables given in the d- and q-axis due the angle being undefined when the voltage is zero. The negative sequence voltages are vnd and vnq for the d- anx q-axis, respectively. Likewise, the zero-sequence voltages are vzd and vzq. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>bus idx for the single-phase equivalent</td><td></td><td></td><td>mandatory</td></tr><tr><td>busa</td><td></td><td>bus idx for phase a</td><td></td><td></td><td>mandatory</td></tr><tr><td>busb</td><td></td><td>bus idx for phase b</td><td></td><td></td><td>mandatory</td></tr><tr><td>busc</td><td></td><td>bus idx for phase c</td><td></td><td></td><td>mandatory</td></tr><tr><td>Sn</td><td>Sn</td><td>Power rating</td><td>100</td><td>MW</td><td>non_zero</td></tr><tr><td>r</td><td>r</td><td>resistance</td><td>0.001</td><td>p.u.</td><td>z</td></tr><tr><td>x</td><td>x</td><td>short-circuit reactance</td><td>0.025</td><td>p.u.</td><td>non_zero,z</td></tr><tr><td>g</td><td></td><td>iron loss</td><td>0</td><td>p.u.</td><td>y</td></tr><tr><td>b</td><td></td><td>magnetizing susceptance</td><td>0.005</td><td>p.u.</td><td>y</td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>vp</td><td>vp</td><td>Algeb</td><td>positive sequence voltage magnitude</td><td>v_str</td><td></td></tr><tr><td>ap</td><td>ap</td><td>Algeb</td><td>positive sequence voltage phase</td><td>v_str</td><td></td></tr><tr><td>vnd</td><td>vnd</td><td>Algeb</td><td>negative sequence voltage on d-axis (cos)</td><td>v_str</td><td></td></tr><tr><td>vnq</td><td>vnq</td><td>Algeb</td><td>negative sequence voltage on q-axis (sin)</td><td>v_str</td><td></td></tr><tr><td>vzd</td><td>vzd</td><td>Algeb</td><td>zero sequence voltage on d-axis (cos)</td><td>v_str</td><td></td></tr><tr><td>vzq</td><td>vzq</td><td>Algeb</td><td>zero sequence voltage on q-axis (sin)</td><td>v_str</td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>phase angle of single-phase eq. bus</td><td></td><td></td></tr><tr><td>aa</td><td>aa</td><td>ExtAlgeb</td><td>phase angle of bus for phase a</td><td></td><td></td></tr><tr><td>ab</td><td>ab</td><td>ExtAlgeb</td><td>phase angle of bus for phase b</td><td></td><td></td></tr><tr><td>ac</td><td>ac</td><td>ExtAlgeb</td><td>phase angle of bus for phase c</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>voltage of single-phase eq. bus</td><td></td><td></td></tr><tr><td>va</td><td>va</td><td>ExtAlgeb</td><td>voltage of bus for phase a</td><td></td><td></td></tr><tr><td>vb</td><td>vb</td><td>ExtAlgeb</td><td>voltage of bus for phase b</td><td></td><td></td></tr><tr><td>vc</td><td>vc</td><td>ExtAlgeb</td><td>voltage of bus for phase c</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>vp</td><td>vp</td><td>Algeb</td><td>va/3 + vb/3 + vc/3</td></tr><tr><td>ap</td><td>ap</td><td>Algeb</td><td>aa + ab + ac</td></tr><tr><td>vnd</td><td>vnd</td><td>Algeb</td><td>0.0</td></tr><tr><td>vnq</td><td>vnq</td><td>Algeb</td><td>0.0</td></tr><tr><td>vzd</td><td>vzd</td><td>Algeb</td><td>0.0</td></tr><tr><td>vzq</td><td>vzq</td><td>Algeb</td><td>0.0</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>aa</td><td>aa</td><td>ExtAlgeb</td><td></td></tr><tr><td>ab</td><td>ab</td><td>ExtAlgeb</td><td></td></tr><tr><td>ac</td><td>ac</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>va</td><td>va</td><td>ExtAlgeb</td><td></td></tr><tr><td>vb</td><td>vb</td><td>ExtAlgeb</td><td></td></tr><tr><td>vc</td><td>vc</td><td>ExtAlgeb</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Nam</td><td>Sym-bol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>vp</td><td>vp</td><td>Al-geb</td><td>-vp + √(vb sin(-aa+ab+d120)-vcsin(aa-ac+d120))2+(va+vb cos(-aa+ab+d120)+vc cos(aa-ac+d120))2/3</td></tr><tr><td>ap</td><td>ap</td><td>Al-geb</td><td>aa-ap+atan2(vb sin(-aa+ab+d120)-vc sin(aa-ac+d120), va+vb cos(-aa+ab+d120)</td></tr><tr><td>vnd</td><td>vnd</td><td>Al-geb</td><td>va cos(aa)+vb cos(ab-d120)+vc cos(ac+d120)-vnd</td></tr><tr><td>vnq</td><td>vnq</td><td>Al-geb</td><td>va sin(aa)+vb sin(ab-d120)+vc sin(ac+d120)-vnq</td></tr><tr><td>vzd</td><td>vzd</td><td>Al-geb</td><td>va cos(aa)+vb cos(ab)+vc cos(ac)-vzd</td></tr><tr><td>vzq</td><td>vzq</td><td>Al-geb</td><td>va sin(aa)+vb sin(ab)+vc sin(ac)-vzq</td></tr><tr><td>a</td><td>a</td><td>Ex-tAl-geb</td><td>u(v2(g+ghk)-vvp(bhk sin(a-ap)+ghk cos(a-ap)))</td></tr><tr><td>aa</td><td>aa</td><td>Ex-tAl-geb</td><td>u(-vva(-bhk sin(a-aa)+ghk cos(a-aa))+va2(g+ghk))/3</td></tr><tr><td>ab</td><td>ab</td><td>Ex-tAl-geb</td><td>u(-vva(-bhk sin(a-aa)+ghk cos(a-aa))+vb2(g+ghk))/3</td></tr><tr><td>ac</td><td>ac</td><td>Ex-tAl-geb</td><td>u(-vva(-bhk sin(a-aa+cd120)+ghk cos(a-aa+cd120))+vc2(g+ghk))/3</td></tr><tr><td>v</td><td>v</td><td>Ex-tAl-geb</td><td>u(-v2(b+bhk)-vvp(-bhk cos(a-ap)+ghk sin(a-ap)))</td></tr><tr><td>va</td><td>va</td><td>Ex-tAl-geb</td><td>u(vva(bhk cos(a-aa)+ghk sin(a-aa))-va2(b+bhk)/3</td></tr><tr><td>vb</td><td>vb</td><td>Ex-tAl-geb</td><td>u(vvb(bhk cos(-a+ab+d120)-ghk sin(-a+ab+d120))-vb2(b+bhk)/3</td></tr><tr><td>vc</td><td>vc</td><td>Ex-tAl-geb</td><td>u(vvc(bhk cos(a-acc+d120)+ghk sin(a-acc+d120))-vc2(b+bhk)/3</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>yhk</td><td>yhk</td><td>u/r+ix</td><td>ConstService</td></tr><tr><td>ghk</td><td>ghk</td><td>re (yhk)</td><td>ConstService</td></tr><tr><td>bhk</td><td>bhk</td><td>im (yhk)</td><td>ConstService</td></tr><tr><td>d120</td><td>120^o</td><td>2π/3</td><td>ConstService</td></tr></table>

Config Fields in [Fortescue] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.17 Motor

Induction Motor group 

Common Parameters: u, name 

Available models: Motor3, Motor5 

# 5.17.1 Motor3

Third-order induction motor model. 

See "Power System Modelling and Scripting" by F. Milano. 

To simulate motor startup, set the motor status u to 0 and use a Toggle to control the model. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatory</td></tr><tr><td>Sn</td><td>Sn</td><td>Power rating</td><td>100</td><td></td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>AC voltage rating</td><td>110</td><td></td><td></td></tr><tr><td>fn</td><td>f</td><td>rated frequency</td><td>60</td><td></td><td></td></tr><tr><td>rs</td><td>rs</td><td>rotor resistance</td><td>0.010</td><td></td><td>non_zero,z</td></tr><tr><td>xs</td><td>xs</td><td>rotor reactance</td><td>0.150</td><td></td><td>non_zero,z</td></tr><tr><td>rr1</td><td>rR1</td><td>1st cage rotor resistance</td><td>0.050</td><td></td><td>non_zero,z</td></tr><tr><td>xr1</td><td>xR1</td><td>1st cage rotor reactance</td><td>0.150</td><td></td><td>non_zero,z</td></tr><tr><td>rr2</td><td>rR2</td><td>2st cage rotor resistance</td><td>0.001</td><td></td><td>non_zero,z</td></tr><tr><td>xr2</td><td>xR2</td><td>2st cage rotor reactance</td><td>0.040</td><td></td><td>non_zero,z</td></tr><tr><td>xm</td><td>xm</td><td>magnetization reactance</td><td>5</td><td></td><td>non_zero,z</td></tr><tr><td>Hm</td><td>Hm</td><td>Inertia constant</td><td>3</td><td>kWs/KVA</td><td>power</td></tr><tr><td>c1</td><td>c1</td><td>1st coeff. of Tm(w)</td><td>0.100</td><td></td><td></td></tr><tr><td>c2</td><td>c2</td><td>2nd coeff. of Tm(w)</td><td>0.020</td><td></td><td></td></tr><tr><td>c3</td><td>c3</td><td>3rd coeff. of Tm(w)</td><td>0.020</td><td></td><td></td></tr><tr><td>zb</td><td>zb</td><td>Allow working as brake</td><td>1</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>slip</td><td>slip</td><td>State</td><td></td><td>v_str</td><td></td></tr><tr><td>eld</td><td>eld</td><td>State</td><td>real part of 1st cage voltage</td><td>v_str</td><td></td></tr><tr><td>elq</td><td>elq</td><td>State</td><td>imaginary part of 1st cage voltage</td><td>v_str</td><td></td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>d-axis voltage</td><td></td><td></td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>q-axis voltage</td><td></td><td></td></tr><tr><td>p</td><td>p</td><td>Algeb</td><td></td><td>v_str</td><td></td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td></td><td>v_str</td><td></td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td></td><td>v_str</td><td></td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td></td><td></td><td></td></tr><tr><td>te</td><td>te</td><td>Algeb</td><td></td><td>v_str</td><td></td></tr><tr><td>tm</td><td>tm</td><td>Algeb</td><td></td><td>v_str</td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage phase angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>slip</td><td>slip</td><td>State</td><td>1.0u</td></tr><tr><td>e1d</td><td>e1d</td><td>State</td><td>0.05u</td></tr><tr><td>e1q</td><td>e1q</td><td>State</td><td>0.9u</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td></td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td></td></tr><tr><td>p</td><td>p</td><td>Algeb</td><td>u(Idvd + Iqvq)</td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td>u(Idqv - Iqvd)</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>1</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td></td></tr><tr><td>te</td><td>te</td><td>Algeb</td><td>u(Ided + Iqe1q)</td></tr><tr><td>tm</td><td>tm</td><td>Algeb</td><td>u(aa + bbslip + c2slip2)</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>slip</td><td>slip</td><td>State</td><td>u(-te + tm)</td><td>M</td></tr><tr><td>e1d</td><td>e1d</td><td>State</td><td>u(e1qslipwb - \(\frac{Iq(x_0-x_1)+e1d}{T_{10}}\))</td><td></td></tr><tr><td>e1q</td><td>e1q</td><td>State</td><td>u(-e1dslipwb - \(\frac{-Id(x_0-x_1)+e1q}{T_{10}}\))</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>-uv sin (a) - vd</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>uv cos (a) - vq</td></tr><tr><td>p</td><td>p</td><td>Algeb</td><td>-p + u (Idvd + Iqvq)</td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td>-q + u (Idvq - Iqvd)</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>u (-Idrs + Iqx1 - e1d + vd)</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>u (-Idx1 - Iqrs - e1q + vq)</td></tr><tr><td>te</td><td>te</td><td>Algeb</td><td>-te + u (Ide1d + Iqe1q)</td></tr><tr><td>tm</td><td>tm</td><td>Algeb</td><td>-tm + u (aa + bbslip + c2slip2)</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>p</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>q</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>wb</td><td>ωb</td><td>2πfn</td><td>ConstService</td></tr><tr><td>x0</td><td>x0</td><td>xm + xs</td><td>ConstService</td></tr><tr><td>x1</td><td>x&#x27;</td><td>xmxr1/xm+xr1 + xs</td><td>ConstService</td></tr><tr><td>T10</td><td>T0&#x27;</td><td>xm+xr1/rr1wb</td><td>ConstService</td></tr><tr><td>M</td><td>M</td><td>2Hm</td><td>ConstService</td></tr><tr><td>aa</td><td>α</td><td>c1 + c2 + c3</td><td>ConstService</td></tr><tr><td>bb</td><td>β</td><td>-c2 - 2c3</td><td>ConstService</td></tr></table>

Config Fields in [Motor3] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.17.2 Motor5

Fifth-order induction motor model. 

See "Power System Modelling and Scripting" by F. Milano. 

To simulate motor startup, set the motor status u to 0 and use a Toggle to control the model. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatory</td></tr><tr><td>Sn</td><td>Sn</td><td>Power rating</td><td>100</td><td></td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>AC voltage rating</td><td>110</td><td></td><td></td></tr><tr><td>fn</td><td>f</td><td>rated frequency</td><td>60</td><td></td><td></td></tr><tr><td>rs</td><td>rs</td><td>rotor resistance</td><td>0.010</td><td></td><td>non_zero,z</td></tr><tr><td>xs</td><td>xs</td><td>rotor reactance</td><td>0.150</td><td></td><td>non_zero,z</td></tr><tr><td>rr1</td><td>rR1</td><td>1st cage rotor resistance</td><td>0.050</td><td></td><td>non_zero,z</td></tr><tr><td>xr1</td><td>xR1</td><td>1st cage rotor reactance</td><td>0.150</td><td></td><td>non_zero,z</td></tr><tr><td>rr2</td><td>rR2</td><td>2st cage rotor resistance</td><td>0.001</td><td></td><td>non_zero,z</td></tr><tr><td>xr2</td><td>xR2</td><td>2st cage rotor reactance</td><td>0.040</td><td></td><td>non_zero,z</td></tr><tr><td>xm</td><td>xm</td><td>magnetization reactance</td><td>5</td><td></td><td>non_zero,z</td></tr><tr><td>Hm</td><td>Hm</td><td>Inertia constant</td><td>3</td><td>kWs/KVA</td><td>power</td></tr><tr><td>c1</td><td>c1</td><td>1st coeff. of Tm(w)</td><td>0.100</td><td></td><td></td></tr><tr><td>c2</td><td>c2</td><td>2nd coeff. of Tm(w)</td><td>0.020</td><td></td><td></td></tr><tr><td>c3</td><td>c3</td><td>3rd coeff. of Tm(w)</td><td>0.020</td><td></td><td></td></tr><tr><td>zb</td><td>zb</td><td>Allow working as brake</td><td>1</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>slip</td><td>slip</td><td>State</td><td></td><td>v_str</td><td></td></tr><tr><td>e1d</td><td>e1d</td><td>State</td><td>real part of 1st cage voltage</td><td>v_str</td><td></td></tr><tr><td>e1q</td><td>e1q</td><td>State</td><td>imaginary part of 1st cage voltage</td><td>v_str</td><td></td></tr><tr><td>e2d</td><td>e2d</td><td>State</td><td>real part of 2nd cage voltage</td><td>v_str</td><td></td></tr><tr><td>e2q</td><td>e2q</td><td>State</td><td>imag part of 2nd cage voltage</td><td>v_str</td><td></td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>d-axis voltage</td><td></td><td></td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>q-axis voltage</td><td></td><td></td></tr><tr><td>p</td><td>p</td><td>Algeb</td><td></td><td>v_str</td><td></td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td></td><td>v_str</td><td></td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td></td><td>v_str</td><td></td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td></td><td>v_str</td><td></td></tr><tr><td>te</td><td>te</td><td>Algeb</td><td></td><td>v_str</td><td></td></tr><tr><td>tm</td><td>tm</td><td>Algeb</td><td></td><td>v_str</td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage phase angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>slip</td><td>slip</td><td>State</td><td>1.0u</td></tr><tr><td>e1d</td><td>e1d</td><td>State</td><td>0.05u</td></tr><tr><td>e1q</td><td>e1q</td><td>State</td><td>0.9u</td></tr><tr><td>e2d</td><td>e2d</td><td>State</td><td>0.05u</td></tr><tr><td>e2q</td><td>e2q</td><td>State</td><td>0.9u</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td></td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td></td></tr><tr><td>p</td><td>p</td><td>Algeb</td><td>u(Idvd + Iqvq)</td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td>u(Idqv - Iqvd)</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>0.9u</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>0.1u</td></tr><tr><td>te</td><td>te</td><td>Algeb</td><td>u(Id2d + Iqe2q)</td></tr><tr><td>tm</td><td>tm</td><td>Algeb</td><td>u(aa + bbslip + c2slip2)</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Sym-bol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T(LHS)</td></tr><tr><td>slip</td><td>slip</td><td>State</td><td>u(-te + tm)</td><td>M</td></tr><tr><td>e1d</td><td>e1d</td><td>State</td><td>u(e1qslipwb - Iq(x0-x1)+e1d/T10)</td><td></td></tr><tr><td>e1q</td><td>e1q</td><td>State</td><td>u(-e1dslipwb - -Iq(x0-x1)+e1q/T10)</td><td></td></tr><tr><td>e2d</td><td>e2d</td><td>State</td><td>u(e1qslipwb - slipwb (e1q - e2q) + Iq(x1-x2)+e1d-e2d/T20 - Iq(x0-x2)/T1)</td><td></td></tr><tr><td>e2q</td><td>e2q</td><td>State</td><td>u(-e1dslipwb + slipwb (e1d - e2d) + Iq(x1-x2)+e1q-e2q/T20 - Iq(x0-x2)/T1)</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>-uv sin (a) - vd</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>u v cos (a) - v q</td></tr><tr><td>p</td><td>p</td><td>Algeb</td><td>-p + u (Idvd + Iqvq)</td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td>-q + u (Idvq - Iqvd)</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>u (-Idr s + Iqx2 - e2d + vd)</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>u (-Idx2 - Iqrs - e2q + vq)</td></tr><tr><td>te</td><td>te</td><td>Algeb</td><td>-te + u (Ide2d + Iqe2q)</td></tr><tr><td>tm</td><td>tm</td><td>Algeb</td><td>-tm + u (aa + bbslip + c2slip2)</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>p</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>q</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>wb</td><td>ωb</td><td>2πfn</td><td>ConstService</td></tr><tr><td>x0</td><td>x0</td><td>xm + xs</td><td>ConstService</td></tr><tr><td>x1</td><td>x&#x27;</td><td>(xmxr1/xm+xr1) + xs</td><td>ConstService</td></tr><tr><td>T10</td><td>T0&#x27;</td><td>(xm+xr1)/rr1wb</td><td>ConstService</td></tr><tr><td>M</td><td>M</td><td>2Hm</td><td>ConstService</td></tr><tr><td>aa</td><td>α</td><td>c1 + c2 + c3</td><td>ConstService</td></tr><tr><td>bb</td><td>β</td><td>-c2 - 2c3</td><td>ConstService</td></tr><tr><td>x2</td><td>x&#x27;&#x27;</td><td>(xmxr1xr2/xmxr1+ xmxr2+ xr1xr2) + xs</td><td>ConstService</td></tr><tr><td>T20</td><td>T0&#x27;&#x27;</td><td>(xmxr1/xm+xr1) + x2r2</td><td>ConstService</td></tr></table>

Config Fields in [Motor5] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.18 OutputSelect

Group for selecting outputs. 

Available models: Output 

# 5.18.1 Output

Model for specifying output models and/or variables. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>model</td><td></td><td>Name of the model</td><td></td><td></td><td>mandatory</td></tr><tr><td>varname</td><td></td><td>Variable name</td><td></td><td></td><td></td></tr><tr><td>dev</td><td></td><td>Device name</td><td></td><td></td><td></td></tr></table>

Config Fields in [Output] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.19 PLL

Phase-locked loop models. 

Common Parameters: u, name 

Common Variables: am 

Available models: PLL1, PLL2 

# 5.19.1 PLL1

Simple Phasor Lock Loop (PLL) using one PI controller. The PI controller minimizes the error between the input and output angle. 

Input bus angle signal $- >$ Lag filter 1 with Tf $- >$ Output angle af_y. 

(af_y - am) -> PI Controller $( \mathrm { K p } , \mathrm { K i } )  \mathrm { P I \_ y }$ 

Estimated angle ae = (2 * pi * fn * PI_y) -> Lag filter 2 with Tp -> am. 

The output signal is am, a state variable. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>bus idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>fn</td><td>fn</td><td>nominal frequency</td><td>60</td><td>Hz</td><td></td></tr><tr><td>Kp</td><td>Kp</td><td>proportional gain</td><td>0.100</td><td></td><td></td></tr><tr><td>Ki</td><td>Ki</td><td>integral gain</td><td>0.100</td><td></td><td></td></tr><tr><td>Tf</td><td>Tf</td><td>input digital filter time const</td><td>0.050</td><td>sec</td><td></td></tr><tr><td>Tp</td><td>Tp</td><td>output filter time const.</td><td>0.050</td><td>sec</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>af_y</td><td>af_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>PI_xi</td><td>πξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>ae</td><td>ae</td><td>State</td><td>PLL angle output before filter</td><td></td><td>v_str</td></tr><tr><td>am</td><td>am</td><td>State</td><td>PLL output angle after filtering</td><td></td><td>v_str</td></tr><tr><td>PI_y</td><td>πy</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>af_y</td><td>af_y</td><td>State</td><td>a</td></tr><tr><td>PI_xi</td><td>πξ</td><td>State</td><td>0.0</td></tr><tr><td>ae</td><td>ae</td><td>State</td><td>a</td></tr><tr><td>am</td><td>am</td><td>State</td><td>a</td></tr><tr><td>PI_y</td><td>πy</td><td>Algeb</td><td>Kpu (af_y - am)</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>af_y</td><td>af_y</td><td>State</td><td>a - af_y</td><td>Tf</td></tr><tr><td>PI_xi</td><td>πξ</td><td>State</td><td>Kiu (af_y - am)</td><td></td></tr><tr><td>ae</td><td>ae</td><td>State</td><td>2ππyfn</td><td></td></tr><tr><td>am</td><td>am</td><td>State</td><td>ae - am</td><td>Tp</td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>PI_y</td><td>πy</td><td>Algeb</td><td>Kpu (afy - am) + πξ - πy</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>0</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>af</td><td>af</td><td>Lag</td><td>input angle signal filter</td></tr><tr><td>PI</td><td>PI</td><td>PIController</td><td>PI controller</td></tr></table>

Config Fields in [PLL1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.19.2 PLL2

Synchronously-rotating Reference Frame (SRF) Phasor Lock Loop (PLL). 

The PLL minimizes $\tt { v q } = \tt { v }$ sin(a - am) using a PI controller. 

The output signal is am, a state variable. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>bus idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>fn</td><td>fn</td><td>nominal frequency</td><td>60</td><td>Hz</td><td></td></tr><tr><td>Kp</td><td>Kp</td><td>proportional gain</td><td>0.100</td><td></td><td></td></tr><tr><td>Ki</td><td>Ki</td><td>integral gain</td><td>0.100</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>PI_xi</td><td>πξ</td><td>State</td><td>Integrator output</td><td>v_str</td><td></td></tr><tr><td>am</td><td>am</td><td>State</td><td>PLL angle output</td><td>v_str</td><td></td></tr><tr><td>PI_y</td><td>πy</td><td>Algeb</td><td>PI output</td><td>v_str</td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>PI_xi</td><td>πξ</td><td>State</td><td>0</td></tr><tr><td>am</td><td>am</td><td>State</td><td>a</td></tr><tr><td>PI_y</td><td>πy</td><td>Algeb</td><td>Kpv sin (a - am)</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>PI_xi</td><td>πξ</td><td>State</td><td>Kiv sin (a - am)</td><td></td></tr><tr><td>am</td><td>am</td><td>State</td><td>2ππyfn</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>PI_y</td><td>πy</td><td>Algeb</td><td>Kpv sin (a - am) + πξ - πy</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>0</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>PI</td><td>PI</td><td>PIController</td><td></td></tr></table>

Config Fields in [PLL2] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.20 PSS

Power system stabilizer group. 

Common Parameters: u, name 

Common Variables: vsout 

Available models: IEEEST, ST2CUT 

# 5.20.1 IEEEST

IEEEST stabilizer model. Automatically adds frequency measurement devices if not provided. 

Input signals (MODE): 

1. Rotor speed deviation (p.u.), 

2. Bus frequency deviation (p.u.) (*), 

3. Generator P electrical in Gen MVABase (p.u.), 

4. Generator accelerating power (p.u.), 

5. Bus voltage (p.u.), 

6. Derivative of p.u. bus voltage. 

$( ^ { * } )$ Due to the frequency measurement implementation difference, mode 2 is likely to yield different results across software. 

Note: Blocks are named F1, F2, LL1, LL2 and WO in sequence. Two limiters are named VLIM and OLIM in sequence. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>avr</td><td></td><td>Exciter idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>MODE</td><td></td><td>Input signal</td><td></td><td></td><td>mandatory</td></tr><tr><td>busr</td><td></td><td>Optional remote bus idx</td><td></td><td></td><td></td></tr><tr><td>busf</td><td></td><td>BusFreq idx for mode 2</td><td></td><td></td><td></td></tr><tr><td>A1</td><td>A1</td><td>filter time const. (pole)</td><td>1</td><td></td><td></td></tr><tr><td>A2</td><td>A2</td><td>filter time const. (pole)</td><td>1</td><td></td><td></td></tr><tr><td>A3</td><td>A3</td><td>filter time const. (pole)</td><td>1</td><td></td><td></td></tr><tr><td>A4</td><td>A4</td><td>filter time const. (pole)</td><td>1</td><td></td><td></td></tr><tr><td>A5</td><td>A5</td><td>filter time const. (zero)</td><td>1</td><td></td><td></td></tr><tr><td>A6</td><td>A6</td><td>filter time const. (zero)</td><td>1</td><td></td><td></td></tr><tr><td>T1</td><td>T1</td><td>first leadlag time const. (zero)</td><td>1</td><td></td><td></td></tr><tr><td>T2</td><td>T2</td><td>first leadlag time const. (pole)</td><td>1</td><td></td><td></td></tr><tr><td>T3</td><td>T3</td><td>second leadlag time const. (pole)</td><td>1</td><td></td><td></td></tr><tr><td>T4</td><td>T4</td><td>second leadlag time const. (pole)</td><td>1</td><td></td><td></td></tr><tr><td>T5</td><td>T5</td><td>washout time const. (zero)</td><td>1</td><td></td><td></td></tr><tr><td>T6</td><td>T6</td><td>washout time const. (pole)</td><td>1</td><td></td><td></td></tr><tr><td>KS</td><td>KS</td><td>Gain before washout</td><td>1</td><td></td><td></td></tr><tr><td>LSMAX</td><td>LSMAX</td><td>Max. output limit</td><td>0.300</td><td></td><td></td></tr><tr><td>LSMIN</td><td>LSMIN</td><td>Min. output limit</td><td>-0.300</td><td></td><td></td></tr><tr><td>VCU</td><td>VCU</td><td>Upper enabling bus voltage</td><td>999</td><td>p.u.</td><td></td></tr><tr><td>VCL</td><td>VCL</td><td>Upper enabling bus voltage</td><td>-999</td><td>p.u.</td><td></td></tr><tr><td>syn</td><td></td><td>Retrieved generator idx</td><td>0</td><td></td><td></td></tr><tr><td>bus</td><td></td><td>Retrieved bus idx</td><td></td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td>Generator power base</td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>F1_x</td><td>F1x</td><td>State</td><td>State in 2nd order LPF</td><td></td><td>v_str</td></tr><tr><td>F1_y</td><td>F1y</td><td>State</td><td>Output of 2nd order LPF</td><td></td><td>v_str</td></tr><tr><td>F2_x1</td><td>F2x1</td><td>State</td><td>State #1 in 2nd order lead-lag</td><td></td><td>v_str</td></tr><tr><td>F2_x2</td><td>F2x2</td><td>State</td><td>State #2 in 2nd order lead-lag</td><td></td><td>v_str</td></tr><tr><td>LL1_x</td><td>LL1x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>LL2_x</td><td>LL2x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>State in washout filter</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>vsout</td><td>vsout</td><td>Algeb</td><td>PSS output voltage to exciter</td><td></td><td></td></tr><tr><td>sig</td><td>sig</td><td>Algeb</td><td>Input signal</td><td></td><td>v_str</td></tr><tr><td>F2_y</td><td>F2y</td><td>Algeb</td><td>Output of 2nd order lead-lag</td><td></td><td>v_str</td></tr><tr><td>LL1_y</td><td>LL1y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>LL2_y</td><td>LL2y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>Vks_y</td><td>Vksy</td><td>Algeb</td><td>Gain output</td><td></td><td>v_str</td></tr><tr><td>WO_y</td><td>WOy</td><td>Algeb</td><td>Output of washout filter</td><td></td><td>v_str</td></tr><tr><td>Vss</td><td>Vss</td><td>Algeb</td><td>Voltage output before output limiter</td><td></td><td></td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Generator mechanical input</td><td></td><td></td></tr><tr><td>te</td><td>te</td><td>ExtAlgeb</td><td>Generator electrical output</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus (or busr, if given) terminal voltage</td><td></td><td></td></tr><tr><td>f</td><td>f</td><td>ExtAlgeb</td><td>Bus frequency</td><td></td><td></td></tr><tr><td>vi</td><td>vi</td><td>ExtAlgeb</td><td>Exciter input voltage</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>F1_x</td><td>F1x</td><td>State</td><td>0</td></tr><tr><td>F1_y</td><td>F1y</td><td>State</td><td>sig</td></tr><tr><td>F2_x1</td><td>F2x1</td><td>State</td><td>0</td></tr><tr><td>F2_x2</td><td>F2x2</td><td>State</td><td>F1y</td></tr><tr><td>LL1_x</td><td>LL1x</td><td>State</td><td>F2y</td></tr><tr><td>LL2_x</td><td>LL2x</td><td>State</td><td>LL1y</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>Vksy</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>vsout</td><td>vsout</td><td>Algeb</td><td></td></tr><tr><td>sig</td><td>sig</td><td>Algeb</td><td>ue(SWs1(ω-1)+SWs3tm0/SnSb+SWs4(tm-tm0)+SWs5v)</td></tr><tr><td>F2_y</td><td>F2y</td><td>Algeb</td><td>F1y</td></tr><tr><td>LL1_y</td><td>LL1y</td><td>Algeb</td><td>F2y</td></tr><tr><td>LL2_y</td><td>LL2y</td><td>Algeb</td><td>LL1y</td></tr><tr><td>Vks_y</td><td>Vksy</td><td>Algeb</td><td>KSLL2y</td></tr><tr><td>WO_y</td><td>WOy</td><td>Algeb</td><td>WOLTz1WOx</td></tr><tr><td>Vss</td><td>Vss</td><td>Algeb</td><td></td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr><tr><td>te</td><td>te</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>f</td><td>f</td><td>ExtAlgeb</td><td></td></tr><tr><td>vi</td><td>vi</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>F1_x</td><td>F1x</td><td>State</td><td>-A1F1x-F1y+sig</td><td>A2</td></tr><tr><td>F1_y</td><td>F1y</td><td>State</td><td>F1x</td><td></td></tr><tr><td>F2_x1</td><td>F2x1</td><td>State</td><td>-A3F2x1+F1y-F2x2</td><td>A4</td></tr><tr><td>F2_x2</td><td>F2x2</td><td>State</td><td>F2x1</td><td></td></tr><tr><td>LL1_x</td><td>LL1x</td><td>State</td><td>F2y-LL1x</td><td>T2</td></tr><tr><td>LL2_x</td><td>LL2x</td><td>State</td><td>LL1y-LL2x</td><td>T4</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>Vksy-WOx</td><td>T6</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td><td></td></tr><tr><td>vsout</td><td>vsout</td><td>Algeb</td><td>OLIMziVssue - vsout</td></tr><tr><td>sig</td><td>sig</td><td>Algeb</td><td>-sig+ue (SWs1 (ω - 1) + SWs2 (f - 1) + Sws3te / SnSb + SWs4 (tm - tm0) + SWs5 (tM - tM0) + SWs6 (tm - tm0) + SWs7 (tM - tm0) + SWs8 (tM - tm0) + SWs9 (tM - tm0) + SWs10 (tM - tm0) + SWs11 (tM - tm0) + SWs12 (tM - tm0) + SWs13 (tM - tm0) + SWs14 (tM - tm0) + SWs15 (tM - tm0) + SWs16 (tM - tm0) + SWs17 (tM - tm0) + SWs18 (tM - tm0) + SWs19 (tM - tm0) + SWs20 (tM - tm0) + SWs21 (tM - tm0) + SWs22 (tM - tm0) + SWs23 (tM - tm0) + SWs24 (tM - tm0) + SWs25 (tM - tm0) + SWs26 (tM - tm0) + SWs27 (tM - tm0) + SWs28 (tM - tm0) + SWs29 (tM - tm0) + SWs30 (tM - tm0) + SWs31 (tM - tm0) + SWs32 (tM - tm0) + SWs33 (tM - tm0) + SWs34 (tM - tm0) + SWs35 (tM - tm0) + SWs36 (tM - tm0) + SWs37 (tM - tm0) + SWs38 (tM - tm0) + SWs39 (tM - tm0) + SWs40 (tM - tm0) + SWs41 (tM - tm0) + SWs42 (tM - tm0) + SWs43 (tM - tm0) + SWs44 (tM - tm0) + SWs45 (tM - tm0) + SWs46 (tM - tm0) + SWs47 (tM - tm0) + SWs48 (tM - tm0) + SWs49 (tM - tm0) + SWs50 (tM - tm0) + SWs51 (tM - tm0) + SWs52 (tM - tm0) + SWs53 (tM - tm0) + SWs54 (tM - tm0) + SWs55 (tM - tm0) + SWs56 (tM - tm0) + SWs57 (tM - tm0) + SWs58 (tM - tm0) + SWs59 (tM - tm0) + SWs60 (tM - tm0) + SWs61 (tM - tm0) + SWs62 (tM - tm0) + SWs63 (tM - tm0) + SWs64 (tM - tm0) + SWs65 (tM - tm0) + SWs66 (tM - tm0) + SWs67 (tM - tm0) + SWs68 (tM - tm0) + SWs69 (tM - tm0) + SWs70 (tM - tm0) + SWs71 (tM - tm0) + SWs72 (tM - tm0) + SWs73 (tM - tm0) + SWs74 (tM - tm0) + SWs75 (tM - tm0) + SWs76 (tM - tm0) + SWs77 (tM - tm0) + SWs78 (tM - tm0) + SWs79 (tM - tm0) + SWs80 (tM - tm0) + SWs81 (tM - tm0) + SWs82 (tM - tm0) + SWs83 (tM - tm0) + SWs84 (tM - tm0) + SWs85 (tM - tm0) + SWs86 (tM - tm0) + SWs87 (tM - tm0) + SWs88 (tM - tm0) + SWs89 (tM - tm0) + SWs90 (tM - tm0) + SWs91 (tM - tm0) + SWs92 (tM - tm0) + SWs93 (tM - tm0) + SWs94 (tM - tm0) + SWs95 (tM - tm0) + SWs96 (tM - tm0) + SWs97 (tM - tm0) + SWs98 (tM - tm0) + SWs99 (tM - tm0) + SWs100 (tM - tm0) + SWs101 (tM - tm0) + SWs102 (tM - tm0) + SWs103 (tM - tm0) + SWs104 (tM - tm0) + SWs105 (tM - tm0) + SWs106 (tM - tm0) + SWs107 (tM - tm0) + SWs108 (tM - tm0) + SWs109 (tM - tm0) + SWs110 (tM - tm0) + SWs111 (tM - tm0) + SWs112 (tM - tm0) + SWs113 (tM - tm0) + SWs114 (tM - tm0) + SWs115 (tM - tm0) + SWs116 (tM - tm0) + SWs117 (tM - tm0) + SWs118 (tM - tm0) + SWs119 (tM - tm0) + SWs120 (tM - tm0) + SWs121 (tM - tm0) + SWs122 (tM - tm0) + SWs123 (tM - tm0) + SWs124 (tM - tm0) + SWs125 (tM - tm0) + SWs126 (tM - tm0) + SWs127 (tM - tm0) + SWs128 (tM - tm0) + SWs129 (tM - tm0) + SWs130 (tM - tm0) + SWs131 (tM - tm0) + SWs132 (tM - tm0) + SWs133 (tM - tm0) + SWs134 (tM - tm0) + SWs135 (tM - tm0) + SWs136 (tM - tm0) + SWs137 (tM - tm0) + SWs138 (tM - tm0) + SWs139 (tM - tm0) + SWs140 (tM - tm0) + SWs141 (tM - tm0) + SWs142 (tM - tm0) + SWs143 (tM - tm0) + SWs144 (tM - tm0) + SWs145 (tM - tm0) + SWs146 (tM - tm0) + SWs147 (tM - tm0) + SWs148 (tM - tm0) + SWs149 (tM - tm0) + SWs150 (tM - tm0) + SWs151 (tM - tm0) + SWs152 (tM - tm0) + SWs153 (tM - tm0) + SWs154 (tM - tm0) + SWs155 (tM - tm0) + SWs156 (tM - tm0) + SWs157 (tM - tm0) + SWs158 (tM - tm0) + SWs159 (tM - tm0) + SWs160 (tM - tm0) + SWs161 (tM - tm0) + SWs162 (tM - tm0) + SWs163 (tM - tm0) + SWs164 (tM - tm0) + SWs165 (tM - tm0) + SWs166 (tM - tm0) + SWs167 (tM - tm0) + SWs168 (tM - tm0) + SWs169 (tM - tm0) + SWs170 (tM - tm0) + SWs171 (tM - tm0) + SWs172 (tM - tm0) + SWs173 (tM - tm0) + SWs174 (tM - tm0) + SWs175 (tM - tm0) + SWs176 (tM - tm0) + SWs177 (tM - tm0) + SWs178 (tM - tm0) + SWs179 (tM - tm0) + SWs180 (tM - tm0) + SWs181 (tM - tm0) + SWs182 (tM - tm0) + SWs183 (tM - tm0) + SWs184 (tM - tm0) + SWs185 (tM - tm0) + SWs186 (tM - tm0) + SWs187 (tM - tm0) + SWs188 (tM - tm0) + SWs189 (tM - tm0) + SWs190 (tM - tm0) + SWs191 (tM - tm0) + SWs192 (tM - tm0) + SWs193 (tM - tm0) + SWs194 (tM - tm0) + SWs195 (tM - tm0) + SWs196 (tM - tm0) + SWs197 (tM - tm0) + SWs198 (tM - tm0) + SWs199 (tM - tm0) + SWs200 (tM - tm0) + SWs201 (tM - tm0) + SWs202 (tM - tm0) + SWs203 (tM - tm0) + SWs204 (tM - tm0) + SWs205 (tM - tm0) + SWs206 (tM - tm0) + SWs207 (tM - tm0) + SWs208 (tM - tm0) + SWs209 (tM - tm0) + SWs210 (tM - tm0) + SWs211 (tM - tm0) + SWs212 (tM - tm0) + SWs213 (tM - tm0) + SWs214 (tM - tm0) + SWs215 (tM - tm0) + SWs216 (tM - tm0) + SWs217 (tM - tm0) + SWs218 (tM - tm0) + SWs219 (tM - tm0) + SWs220 (tM - tm0) + SWs221 (tM - tm0) + SWs222 (tM - tm0) + SWs223 (tM - tm0) + SWs224 (tM - tm0) + SWs225 (tM - tm0) + SWs226 (tM - tm0) + SWs227 (tM - tm0) + SWs228 (tM - tm0) + SWs229 (tM - tm0) + SWs230 (tM - tm0) + SWs231 (tM - tm0) + SWs232 (tM - tm0) + SWs233 (tM - tm0) + SWs234 (tM - tm0) + SWs235 (tM - tm0) + SWs236 (tM - tm0) + SWs237 (tM - tm0) + SWs238 (tM - tm0) + SWs239 (tM - tm0) + SWs240 (tM - tm0) + SWs241 (tM - tm0) + SWs242 (tM - tm0) + SWs243 (tM - tm0) + SWs244 (tM - tm0) + SWs245 (tM - tm0) + SWs246 (tM - tm0) + SWs247 (tM - tm0) + SWs248 (tM - tm0) + SWs249 (tM - tm0) + SWs250 (tM - tm0) + SWs251 (tM - tm0) + SWs252 (tM - tm0) + SWs253 (tM - tm0) + SWs254 (tM - tm0) + SWs255 (tM - tm0) + SWs256 (tM - tm0) + SWs257 (tM - tm0) + SWs258 (tM - tm0) + SWs259 (tM - tm0) + SWs260 (tM - tm0) + SWs261 (tM - tm0) + SWs262 (tM - tm0) + SWs263 (tM - tm0) + SWs264 (tM - tm0) + SWs265 (tM - tm0) + SWs266 (tM - tm0) + SWs267 (tM - tm0) + SWs268 (tM - tm0) + SWs269 (tM - tm0) + SWs270 (tM - tm0) + SWs271 (tM - tm0) + SWs272 (tM - tm0) + SWs273 (tM - tm0) + SWs274 (tM - tm0) + SWs275 (tM - tm0) + SWs276 (tM - tm0) + SWs277 (tM - tm0) + SWs278 (tM - tm0) + SWs279 (tM - tm0) + SWs280 (tM - tm0) + SWs281 (tM - tm0) + SWs282 (tM - tm0) + SWs283 (tM - tm0) + SWs284 (tM - tm0) + SWs285 (tM - tm0) + SWs286 (tM - tm0) + SWs287 (tM - tm0) + SWs288 (tM - tm0) + SWs289 (tM - tm0) + SWs290 (tM - tm0) + SWs291 (tM - tm0) + SWs292 (tM - tm0) + SWs293 (tM - tm0) + SWs294 (tM - tm0) + SWs295 (tM - tm0) + SWs296 (tM - tm0) + SWs297 (tM - tm0) + SWs298 (tM - tm0) + SWs299 (tM - tm0) + SWs300 (tM - tm0) + SWs301 (tM - tm0) + SWs302 (tM - tm0) + SWs303 (tM - tm0) + SWs304 (tM - tm0) + SWs305 (tM - tm0) + SWs306 (tM - tm0) + SWs307 (tM - tm0) + SWs308 (tM - tm0) + SWs309 (tM - tm0) + SWs310 (tM - tm0) + SWs311 (tM - tm0) + SWs312 (tM - tm0) + SWs313 (tM - tm0) + SWs314 (tM - tm0) + SWs315 (tM - tm0) + SWs316 (tM - tm0) + SWs317 (tM - tm0) + SWs318 (tM - tm0) + SWs319 (tM - tm0) + SWs320 (tM - tm0) + SWs321 (tM - tm0) + SWs322 (tM - tm0) + SWs323 (tM - tm0) + SWs324 (tM - tm0) + SWs325 (tM - tm0) + SWs326 (tM - tm0) + SWs327 (tM - tm0) + SWs328 (tM - tm0) + SWs329 (tM - tm0) + SWs330 (tM - tm0) + SWs331 (tM - tm0) + SWs332 (tM - tm0) + SWs333 (tM - tm0) + SWs334 (tM - tm0) + SWs335 (tM - tm0) + SWs336 (tM - tm0) + SWs337 (tM - tm0) + SWs338 (tM - tm0) + SWs339 (tM - tm0) + SWs340 (tM - tm0) + SWs341 (tM - tm0) + SWs342 (tM - tm0) + SWs343 (tM - tm0) + SWs344 (tM - tm0) + SWs345 (tM - tm0) + SWs346 (tM - tm0) + SWs347 (tM - tm0) + SWs348 (tM - tm0) + SWs349 (tM - tm0) + SWs350 (tM - tm0) + SWs351 (tM - tm0) + SWs352 (tM - tm0) + SWs353 (tM - tm0) + SWs354 (tM - tm0) + SWs355 (tM - tm0) + SWs356 (tM - tm0) + SWs357 (tM - tm0) + SWs358 (tM - tm0) + SWs359 (tM - tm0) + SWs360 (tM - tm0) + SWs361 (tM - tm0) + SWs362 (tM - tm0) + SWs363 (tM - tm0) + SWs364 (tM - tm0) + SWs365 (tM - tm0) + SWs366 (tM - tm0) + SWs367 (tM - tm0) + SWs368 (tM - tm0) + SWs369 (tM - tm0) + SWs370 (tM - tm0) + SWs371 (tM - tm0) + SWs372 (tM - tm0) + SWs373 (tM - tm0) + SWs374 (tM - tm0) + SWs375 (tM - tm0) + SWs376 (tM - tm0) + SWs377 (tM - tm0) + SWs378 (tM - tm0) + SWs379 (tM - tm0) + SWs380 (tM - tm0) + SWs381 (tM - tm0) + SWs382 (tM - tm0) + SWs383 (tM - tm0) + SWs384 (tM - tm0) + SWs385 (tM - tm0) + SWs386 (tM - tm0) + SWs387 (tM - tm0) + SWs388 (tM - tm0) + SWs389 (tM - tm0) + SWs390 (tM - tm0) + SWs391 (tM - tm0) + SWs392 (tM - tm0) + SWs393 (tM - tm0) + SWs394 (tM - tm0) + SWs395 (tM - tm0) + SWs396 (tM - tm0) + SWs397 (tM - tm0) + SWs398 (tM - tm0) + SWs399 (tM - tm0) + SWs400 (tM - tm0) + SWs401 (tM - tm0) + SWs402 (tM - tm0) + SWs403 (tM - tm0) + SWs404 (tM - tm0) + SWs405 (tM - tm0) + SWs406 (tM - tm0) + SWs407 (tM - tm0) + SWs408 (tM - tm0) + SWs409 (tM - tm0) + SWs410 (tM - tm0) + SWs411 (tM - tm0) + SWs412 (tM - tm0) + SWs413 (tM - tm0) + SWs414 (tM - tm0) + SWs415 (tM - tm0) + SWs416 (tM - tm0) + SWs417 (tM - tm0) + SWs418 (tM - tm0) + SWs419 (tM - tm0) + SWs420 (tM - tm0) + SWs421 (tM - tm0) + SWs422 (tM - tm0) + SWs423 (tM - tm0) + SWs424 (tM - tm0) + SWs425 (tM - tm0) + SWs426 (tM - tm0) + SWs427 (tM - tm0) + SWs428 (tM - tm0) + SWs429 (tM - tm0) + SWs430 (tM - tm0) + SWs431 (tM - tm0) + SWs432 (tM - tm0) + SWs433 (tM - tm0) + SWs434 (tM - tm0) + SWs435 (tM - tm0) + SWs436 (tM - tm0) + SWs437 (tM - tm0) + SWs438 (tM - tm0) + SWs439 (tM - tm0) + SWs440 (tM - tm0) + SWs441 (tM - tm0) + SWs442 (tM - tm0) + SWs443 (tM - tm0) + SWs444 (tM - tm0) + SWs445 (tM - tm0) + SWs446 (tM - tm0) + SWs447 (tM - tm0) + SWs448 (tM - tm0) + SWs449 (tM - tm0) + SWs450 (tM - tm0) + SWs451 (tM - tm0) + SWs452 (tM - tm0) + SWs453 (tM - tm0) + SWs454 (tM - tm0) + SWs455 (tM - tm0) + SWs456 (tM - tm0) + SWs457 (tM - tm0) + SWs458 (tM - tm0) + SWs459 (tM - tm0) + SWs460 (tM - tm0) + SWs461 (tM - tm0) + SWs462 (tM - tm0) + SWs463 (tM - tm0) + SWs464 (tM - tm0) + SWs465 (tM - tm0) + SWs466 (tM - tm0) + SWs467 (tM - tm0) + SWs468 (tM - tm0) + SWs469 (tM - tm0) + SWs470 (tM - tm0) + SWs471 (tM - tm0) + SWs472 (tM - tm0) + SWs473 (tM - tm0) + SWs474 (tM - tm0) + SWs475 (tM - tm0) + SWs476 (tM - tm0) + SWs477 (tM - tm0) + SWs478 (tM - tm0) + SWs479 (tM - tm0) + SWs480 (tM - tm0) + SWs481 (tM - tm0) + SWs482 (tM - tm0) + SWs483 (tM - tm0) + SWs484 (tM - tm0) + SWs485 (tM - tm0) + SWs486 (tM - tm0) + SWs487 (tM - tm0) + SWs488 (tM - tm0) + SWs489 (tM - tm0) + SWs490 (tM - tm0) + SWs491 (tM - tm0) + SWs492 (tM - tm0) + SWs493 (tM - tm0) + SWs494 (tM - tm0) + SWs495 (tM - tm0) + SWs496 (tM - tm0) + SWs497 (tM - tm0) + SWs498 (tM - tm0) + SWs499 (tM - tm0) + SWs500 (tM - tm0) + SWs501 (tM - tm0) + SWs502 (tM - tm0) + SWs503 (tM - tm0) + SWs504 (tM - tm0) + SWs505 (tM - tm0) + SWs506 (tM - tm0) + SWs507 (tM - tm0) + SWs508 (tM - tm0) + SWs509 (tM - tm0) + SWs510 (tM - tm0) + SWs511 (tM - tm0) + SWs512 (tM - tm0) + SWs513 (tM - tm0) + SWs514 (tM - tm0) + SWs515 (tM - tm0) + SWs516 (tM - tm0) + SWs517 (tM - tm0) + SWs518 (tM - tm0) + SWs519 (tM - tm0) + SWs520 (tM - tm0) + SWs521 (tM - tm0) + SWs522 (tM - tm0) + SWs523 (tM - tm0) + SWs524 (tM - tm0) + SWs525 (tM - tm0) + SWs526 (tM - tm0) + SWs527 (tM - tm0) + SWs528 (tM - tm0) + SWs529 (tM - tm0) + SWs530 (tM - tm0) + SWs531 (tM - tm0) + SWs532 (tM - tm0) + SWs533 (tM - tm0) + SWs534 (tM - tm0) + SWs535 (tM - tm0) + SWs536 (tM - tm0) + SWs537 (tM - tm0) + SWs538 (tM - tm0) + SWs539 (tM - tm0) + SWs540 (tM - tm0) + SWs541 (tM - tm0) + SWs542 (tM - tm0) + SWs543 (tM - tm0) + SWs544 (tM - tm0) + SWs545 (tM - tm0) + SWs546 (tM - tm0) + SWs547 (tM - tm0) + SWs548 (tM - tm0) + SWs549 (tM - tm0) + SWs550 (tM - tm0) + SWs551 (tM - tm0) + SWs552 (tM - tm0) + SWs553 (tM - tm0) + SWs554 (tM - tm0) + SWs555 (tM - tm0) + SWs556 (tM - tm0) + SWs557 (tM - tm0) + SWs558 (tM - tm0) + SWs559 (tM - tm0) + SWs560 (tM - tm0) + SWs561 (tM - tm0) + SWs562 (tM - tm0) + SWs563 (tM - tm0) + SWs564 (tM - tm0) + SWs565 (tM - tm0) + SWs566 (tM - tm0) + SWs567 (tM - tm0) + SWs568 (tM - tm0) + SWs569 (tM - tm0) + SWs570 (tM - tm0) + SWs571 (tM - tm0) + SWs572 (tM - tm0) + SWs573 (tM - tm0) + SWs574 (tM - tm0) + SWs575 (tM - tm0) + SWs576 (tM - tm0) + SWs577 (tM - tm0) + SWs578 (tM - tm0) + SWs579 (tM - tm0) + SWs580 (tM - tm0) + SWs581 (tM - tm0) + SWs582 (tM - tm0) + SWs583 (tM - tm0) + SWs584 (tM - tm0) + SWs585 (tM - tm0) + SWs586 (tM - tm0) + SWs587 (tM - tm0) + SWs588 (tM - tm0) + SWs589 (tM - tm0) + SWs590 (tM - tm0) + SWs591 (tM - tm0) + SWs592 (tM - tm0) + SWs593 (tM - tm0) + SWs594 (tM - tm0) + SWs595 (tM - tm0) + SWs596 (tM - tm0) + SWs597 (tM - tm0) + SWs598 (tM - tm0) + SWs599 (tM - tm0) + SWs600 (tM - tm0) + SWs601 (tM - tm0) + SWs602 (tM - tm0) + SWs603 (tM - tm0) + SWs604 (tM - tm0) + SWs605 (tM - tm0) + SWs606 (tM - tm0) + SWs607 (tM - tm0) + SWs608 (tM - tm0) + SWs609 (tM - tm0) + SWs610 (tM - tm0) + SWs611 (tM - tm0) + SWs612 (tM - tm0) + SWs613 (tM - tm0) + SWs614 (tM - tm0) + SWs615 (tM - tm0) + SWs616 (tM - tm0) + SWs617 (tM - tm0) + SWs618 (tM - tm0) + SWs619 (tM - tm0) + SWs620 (tM - tm0) + SWs621 (tM - tm0) + SWs622 (tM - tm0) + SWs623 (tM - tm0) + SWs624 (tM - tm0) + SWs625 (tM - tm0) + SWs626 (tM - tm0) + SWs627 (tM - tm0) + SWs628 (tM - tm0) + SWs629 (tM - tm0) + SWs630 (tM - tm0) + SWs631 (tM - tm0) + SWs632 (tM - tm0) + SWs633 (tM - tm0) + SWs634 (tM - tm0) + SWs635 (tM - tm0) + SWs636 (tM - tm0) + SWs637 (tM - tm0) + SWs638 (tM - tm0) + SWs639 (tM - tm0) + SWs640 (tM - tm0) + SWs641 (tM - tm0) + SWs642 (tM - tm0) + SWs643 (tM - tm0) + SWs644 (tM - tm0) + SWs645 (tM - tm0) + SWs646 (tM - tm0) + SWs647 (tM - tm0) + SWs648 (tM - tm0) + SWs649 (tM - tm0) + SWs650 (tM - tm0) + SWs651 (tM - tm0) + SWs652 (tM - tm0) + SWs653 (tM - tm0) + SWs654 (tM - tm0) + SWs655 (tM - tm0) + SWs656 (tM - tm0) + SWs657 (tM - tm0) + SWs658 (tM - tm0) + SWs659 (tM - tm0) + SWs660 (tM - tm0) + SWs661 (tM - tm0) + SWs662 (tM - tm0) + SWs663 (tM - tm0) + SWs664 (tM - tm0) + SWs665 (tM - tm0) + SWs666 (tM - tm0) + SWs667 (tM - tm0) + SWs668 (tM - tm0) + SWs669 (tM - tm0) + SWs670 (tM - tm0) + SWs671 (tM - tm0) + SWs672 (tM - tm0) + SWs673 (tM - tm0) + SWs674 (tM - tm0) + SWs675 (tM - tm0) + SWs676 (tM - tm0) + SWs677 (tM - tm0) + SWs678 (tM - tm0) + SWs679 (tM - tm0) + SWs680 (tM - tm0) + SWs681 (tM - tm0) + SWs682 (tM - tm0) + SWs683 (tM - tm0) + SWs684 (tM - tm0) + SWs685 (tM - tm0) + SWs686 (tM - tm0) + SWs687 (tM - tm0) + SWs688 (tM - tm0) + SWs689 (tM - tm0) + SWs690 (tM - tm0) + SWs691 (tM - tm0) + SWs692 (tM - tm0) + SWs693 (tM - tm0) + SWs694 (tM - tm0) + SWs695 (tM - tm0) + SWs696 (tM - tm0) + SWs697 (tM - tm0) + SWs698 (tM - tm0) + SWs699 (tM - tm0) + SWs700 (tM - tm0) + SWs701 (tM - tm0) + SWs702 (tM - tm0) + SWs703 (tM - tm0) + SWs704 (tM - tm0) + SWs705 (tM - tm0) + SWs706 (tM - tm0) + SWs707 (tM - tm0) + SWs708 (tM - tm0) + SWs709 (tM - tm0) + SWs710 (tM - tm0) + SWs711 (tM - tm0) + SWs712 (tM - tm0) + SWs713 (tM - tm0) + SWs714 (tM - tm0) + SWs715 (tM - tm0) + SWs716 (tM - tm0) + SWs717 (tM - tm0) + SWs718 (tM - tm0) + SWs719 (tM - tm0) + SWs720 (tM - tm0) + SWs721 (tM - tm0) + SWs722 (tM - tm0) + SWs723 (tM - tm0) + SWs724 (tM - tm0) + SWs725 (tM - tm0) + SWs726 (tM - tm0) + SWs727 (tM - tm0) + SWs728 (tM - tm0) + SWs729 (tM - tm0) + SWs730 (tM - tm0) + SWs731 (tM - tm0) + SWs732 (tM - tm0) + SWs733 (tM - tm0) + SWs734 (tM - tm0) + SWs735 (tM - tm0) + SWs736 (tM - tm0) + SWs737 (tM - tm0) + SWs738 (tM - tm0) + SWs739 (tM - tm0) + SWs740 (tM - tm0) + SWs741 (tM - tm0) + SWs742 (tM - tm0) + SWs743 (tM - tm0) + SWs744 (tM - tm0) + SWs745 (tM - tm0) + SWs746 (tM - tm0) + SWs747 (tM - tm0) + SWs748 (tM - tm0) + SWs749 (tM - tm0) + SWs750 (tM - tm0) + SWs751 (tM - tm0) + SWs752 (tM - tm0) + SWs753 (tM - tm0) + SWs754 (tM - tm0) + SWs755 (tM - tm0) + SWs756 (tM - tm0) + SWs757 (tM - tm0) + SWs758 (tM - tm0) + SWs759 (tM - tm0) + SWs760 (tM - tm0) + SWs761 (tM - tm0) + SWs762 (tM - tm0) + SWs763 (tM - tm0) + SWs764 (tM - tm0) + SWs765 (tM - tm0) + SWs766 (tM - tm0) + SWs767 (tM - tm0) + SWs768 (tM - tm0) + SWs769 (tM - tm0) + SWs770 (tM - tm0) + SWs771 (tM - tm0) + SWs772 (tM - tm0) + SWs773 (tM - tm0) + SWs774 (tM - tm0) + SWs775 (tM - tm0) + SWs776 (tM - tm0) + SWs777 (tM - tm0) + SWs778 (tM - tm0) + SWs779 (tM - tm0) + SWs780 (tM - tm0) + SWs781 (tM - tm0) + SWs782 (tM - tm0) + SWs783 (tM - tm0) + SWs784 (tM - tm0) + SWs785 (tM - tm0) + SWs786 (tM - tm0) + SWs787 (tM - tm0) + SWs788 (tM - tm0) + SWs789 (tM - tm0) + SWs790 (tM - tm0) + SWs791 (tM - tm0) + SWs792 (tM - tm0) + SWs793 (tM - tm0) + SWs794 (tM - tm0) + SWs795 (tM - tm0) + SWs796 (tM - tm0) + SWs797 (tM - tm0) + SWs798 (tM - tm0) + SWs799 (tM - tm0) + SWs800 (tM - tm0) + SWs801 (tM - tm0) + SWs802 (tM - tm0) + SWs803 (tM - tm0) + SWs804 (tM - tm0) + SWs805 (tM - tm0) + SWs806 (tM - tm0) + SWs807 (tM - tm0) + SWs808 (tM - tm0) + SWs809 (tM - tm0) + SWs810 (tM - tm0) + SWs811 (tM - tm0) + SWs812 (tM - tm0) + SWs813 (tM - tm0) + SWs814 (tM - tm0) + SWs815 (tM - tm0) + SWs816 (tM - tm0) + SWs817 (tM - tm0) + SWs818 (tM - tm0) + SWs819 (tM - tm0) + SWs820 (tM - tm0) + SWs821 (tM - tm0) + SWs822 (tM - tm0) + SWs823 (tM - tm0) + SWs824 (tM - tm0) + SWs825 (tM - tm0) + SWs826 (tM - tm0) + SWs827 (tM - tm0) + SWs828 (tM - tm0) + SWs829 (tM - tm0) + SWs830 (tM - tm0) + SWs831 (tM - tm0) + SWs832 (tM - tm0) + SWs833 (tM - tm0) + SWs834 (tM - tm0) + SWs835 (tM - tm0) + SWs836 (tM - tm0) + SWs837 (tM - tm0) + SWs838 (tM - tm0) + SWs839 (tM - tm0) + SWs840 (tM - tm0) + SWs841 (tM - tm0) + SWs842 (tM - tm0) + SWs843 (tM - tm0) + SWs844 (tM - tm0) + SWs845 (tM - tm0) + SWs846 (tM - tm0) + SWs847 (tM - tm0) + SWs848 (tM - tm0) + SWs849 (tM - tm0) + SWs850 (tM - tm0) + SWs851 (tM - tm0) + SWs852 (tM - tm0) + SWs853 (tM - tm0) + SWs854 (tM - tm0) + SWs855 (tM - tm0) + SWs856 (tM - tm0) + SWs857 (tM - tm0) + SWs858 (tM - tm0) + SWs859 (tM - tm0) + SWs860 (tM - tm0) + SWs861 (tM - tm0) + SWs862 (tM - tm0) + SWs863 (tM - tm0) + SWs864 (tM - tm0) + SWs865 (tM - tm0) + SWs866 (tM - tm0) + SWs867 (tM - tm0) + SWs868 (tM - tm0) + SWs869 (tM - tm0) + SWs870 (tM - tm0) + SWs871 (tM - tm0) + SWs872 (tM - tm0) + SWs873 (tM - tm0) + SWs874 (tM - tm0) + SWs875 (tM - tm0) + SWs876 (tM - tm0) + SWs877 (tM - tm0) + SWs878 (tM - tm0) + SWs879 (tM - tm0) + SWs880 (tM - tm0) + SWs881 (tM - tm0) + SWs882 (tM - tm0) + SWs883 (tM - tm0) + SWs884 (tM - tm0) + SWs885 (tM - tm0) + SWs886 (tM - tm0) + SWs887 (tM - tm0) + SWs888 (tM - tm0) + SWs889 (tM - tm0) + SWs890 (tM - tm0) + SWs891 (tM - tm0) + SWs892 (tM - tm0) + SWs893 (tM - tm0) + SWs894 (tM - tm0) + SWs895 (tM - tm0) + SWs896 (tM - tm0) + SWs897 (tM - tm0) + SWs898 (tM - tm0) + SWs899 (tM - tm0) + SWs900 (tM - tm0) + SWs901 (tM - tm0) + SWs902 (tM - tm0) + SWs903 (tM - tm0) + SWs904 (tM - tm0) + SWs905 (tM - tm0) + SWs906 (tM - tm0) + SWs907 (tM - tm0) + SWs908 (tM - tm0) + SWs909 (tM - tm0) + SWs910 (tM - tm0) + SWs911 (tM - tm0) + SWs912 (tM - tm0) + SWs913 (tM - tm0) + SWs914 (tM - tm0) + SWs915 (tM - tm0) + SWs916 (tM - tm0) + SWs917 (tM - tm0) + SWs918 (tM - tm0) + SWs919 (tM - tm0) + SWs920 (tM - tm0) + SWs921 (tM - tm0) + SWs922 (tM - tm0) + SWs923 (tM - tm0) + SWs924 (tM - tm0) + SWs925 (tM - tm0) + SWs926 (tM - tm0) + SWs927 (tM - tm0) + SWs928 (tM - tm0) + SWs929 (tM - tm0) + SWs930 (tM - tm0) + SWs931 (tM - tm0) + SWs932 (tM - tm0) + SWs933 (tM - tm0) + SWs934 (tM - tm0) + SWs935 (tM - tm0) + SWs936 (tM - tm0) + SWs937 (tM - tm0) + SWs938 (tM - tm0) + SWs939 (tM - tm0) + SWs940 (tM - tm0) + SWs941 (tM - tm0) + SWs942 (tM - tm0) + SWs943 (tM - tm0) + SWs944 (tM - tm0) + SWs945 (tM - tm0) + SWs946 (tM - tm0) + SWs947 (tM - tm0) + SWs948 (tM - tm0) + SWs949 (tM - tm0) + SWs950 (tM - tm0) + SWs951 (tM - tm0) + SWs952 (tM - tm0) + SWs953 (tM - tm0) + SWs954 (tM - tm0) + SWs955 (tM - tm0) + SWs956 (tM - tm0) + SWs957 (tM - tm0) + SWs958 (tM - tm0) + SWs959 (tM - tm0) + SWs960 (tM - tm0) + SWs961 (tM - tm0) + SWs962 (tM - tm0) + SWs963 (tM - tm0) + SWs964 (tM - tm0) + SWs965 (tM - tm0) + SWs966 (tM - tm0) + SWs967 (tM - tm0) + SWs968 (tM - tm0) + SWs969 (tM - tm0) + SWs970 (tM - tm0) + SWs971 (tM - tm0) + SWs972 (tM - tm0) + SWs973 (tM - tm0) + SWs974 (tM - tm0) + SWs975 (tM - tm0) + SWs976 (tM - tm0) + SWs977 (tM - tm0) + SWs978 (tM - tm0) + SWs979 (tM - tm0) + SWs980 (tM - tm0) + SWs981 (tM - tm0) + SWs982 (tM - tm0) + SWs983 (tM - tm0) + SWs984 (tM - tm0) + SWs985 (tM - tm0) + SWs986 (tM - tm0) + SWs987 (tM - tm0) + SWs988 (tM - tm0) + SWs989 (tM - tm0) + SWs990 (tM - tm0) + SWs991 (tM - tm0) + SWs992 (tM - tm0) + SWs993 (tM - tm0) + SWs994 (tM - tm0) + SWs995 (tM - tm0) + SWs996 (tM - tm0) + SWs997 (tM - tm0) + SWs998 (tM - tm0) + SWs999 (tM - tm0) + SWs100( t M- )</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uuee</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>dv</td><td>dV/dt</td><td>Derivative</td><td>Finite difference of bus voltage</td></tr><tr><td>SW</td><td>SW</td><td>Switcher</td><td></td></tr><tr><td>F2_LT1</td><td>LTF2</td><td>LessThan</td><td></td></tr><tr><td>F2_LT2</td><td>LTF2</td><td>LessThan</td><td></td></tr><tr><td>F2_LT3</td><td>LTF2</td><td>LessThan</td><td></td></tr><tr><td>F2_LT4</td><td>LTF2</td><td>LessThan</td><td></td></tr><tr><td>LL1_LT1</td><td>LTL1</td><td>LessThan</td><td></td></tr><tr><td>LL1_LT2</td><td>LTL1</td><td>LessThan</td><td></td></tr><tr><td>LL2_LT1</td><td>LTL2</td><td>LessThan</td><td></td></tr><tr><td>LL2_LT2</td><td>LTL2</td><td>LessThan</td><td></td></tr><tr><td>WO_LT</td><td>LTWO</td><td>LessThan</td><td></td></tr><tr><td>VLIM</td><td>VLIM</td><td>Limiter</td><td>Vss limiter</td></tr><tr><td>OLIM</td><td>OLIM</td><td>Limiter</td><td>output limiter</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>F1</td><td>F1</td><td>Lag2ndOrd</td><td></td></tr><tr><td>F2</td><td>F2</td><td>LeadLag2ndOrd</td><td></td></tr><tr><td>LL1</td><td>LL1</td><td>LeadLag</td><td></td></tr><tr><td>LL2</td><td>LL2</td><td>LeadLag</td><td></td></tr><tr><td>Vks</td><td>Vks</td><td>Gain</td><td></td></tr><tr><td>WO</td><td>WO</td><td>WashoutOrLag</td><td></td></tr></table>

Config Fields in [IEEEST] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>freq_model</td><td></td><td>BusFreq</td><td>default freq. measurement model</td><td>(&#x27;BusFreq&#x27;,)</td></tr></table>

# 5.20.2 ST2CUT

ST2CUT stabilizer model. Automatically adds frequency measurement devices if not provided. 

Input signals (MODE and MODE2): 

0 - Disable input signal 1 (s1) - Rotor speed deviation (p.u.), 2 (s2) - Bus frequency deviation (*) (p.u.), 3 (s3) - Generator P electrical in Gen MVABase (p.u.), 4 (s4) - Generator accelerating power (p.u.), 5 (s5) - Bus voltage (p.u.), 6 (s6) - Derivative of p.u. bus voltage. 

$( ^ { * } )$ Due to the frequency measurement implementation difference, mode 2 is likely to yield different results across software. 

Blocks are named LL1, LL2, LL3, LL4 in sequence. Two limiters are named VSS_lim and OLIM in sequence. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>avr</td><td></td><td>Exciter idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>MODE</td><td></td><td>Input signal 1</td><td></td><td></td><td>mandatory</td></tr><tr><td>busr</td><td></td><td>Remote bus 1</td><td></td><td></td><td></td></tr><tr><td>busf</td><td></td><td>BusFreq idx for signal 1 mode 2</td><td></td><td></td><td></td></tr><tr><td>MODE2</td><td></td><td>Input signal 2</td><td></td><td></td><td></td></tr><tr><td>busr2</td><td></td><td>Remote bus 2</td><td></td><td></td><td></td></tr><tr><td>busf2</td><td></td><td>BusFreq idx for signal 2 mode 2</td><td></td><td></td><td></td></tr><tr><td>K1</td><td>K1</td><td>Transducer 1 gain</td><td>1</td><td></td><td></td></tr><tr><td>K2</td><td>K2</td><td>Transducer 2 gain</td><td>1</td><td></td><td></td></tr><tr><td>T1</td><td>T1</td><td>Transducer 1 time const.</td><td>1</td><td></td><td></td></tr><tr><td>T2</td><td>T2</td><td>Transducer 2 time const.</td><td>1</td><td></td><td></td></tr><tr><td>T3</td><td>T3</td><td>Washout int. time const.</td><td>1</td><td></td><td></td></tr><tr><td>T4</td><td>T4</td><td>Washout delay time const.</td><td>0.200</td><td></td><td></td></tr><tr><td>T5</td><td>T5</td><td>Leadlag 1 time const. (1)</td><td>1</td><td></td><td></td></tr><tr><td>T6</td><td>T6</td><td>Leadlag 1 time const. (2)</td><td>0.500</td><td></td><td></td></tr><tr><td>T7</td><td>T7</td><td>Leadlag 2 time const. (1)</td><td>1</td><td></td><td></td></tr><tr><td>T8</td><td>T8</td><td>Leadlag 2 time const. (2)</td><td>1</td><td></td><td></td></tr><tr><td>T9</td><td>T9</td><td>Leadlag 3 time const. (1)</td><td>1</td><td></td><td></td></tr><tr><td>T10</td><td>T10</td><td>Leadlag 3 time const. (2)</td><td>0.200</td><td></td><td></td></tr><tr><td>LSMAX</td><td>LSMAX</td><td>Max. output limit</td><td>0.300</td><td></td><td></td></tr><tr><td>LSMIN</td><td>LSMIN</td><td>Min. output limit</td><td>-0.300</td><td></td><td></td></tr><tr><td>VCU</td><td>VCU</td><td>Upper enabling bus voltage</td><td>999</td><td>p.u.</td><td></td></tr><tr><td>VCL</td><td>VCL</td><td>Upper enabling bus voltage</td><td>-999</td><td>p.u.</td><td></td></tr><tr><td>syn</td><td></td><td>Retrieved generator idx</td><td>0</td><td></td><td></td></tr><tr><td>bus</td><td></td><td>Retrieved bus idx</td><td></td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td>Generator power base</td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>L1_y</td><td>L1y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>L2_y</td><td>L2y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>State in washout filter</td><td></td><td>v_str</td></tr><tr><td>LL1_x</td><td>LL1x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>LL2_x</td><td>LL2x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>LL3_x</td><td>LL3x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>vsout</td><td>vsout</td><td>Algeb</td><td>PSS output voltage to exciter</td><td></td><td></td></tr><tr><td>sig</td><td>sig</td><td>Algeb</td><td>Input signal</td><td></td><td>v_str</td></tr><tr><td>sig2</td><td>sig2</td><td>Algeb</td><td>Input signal 2</td><td></td><td>v_str</td></tr><tr><td>IN</td><td>IN</td><td>Algeb</td><td>Sum of inputs</td><td></td><td>v_str</td></tr><tr><td>WO_y</td><td>WOy</td><td>Algeb</td><td>Output of washout filter</td><td></td><td>v_str</td></tr><tr><td>LL1_y</td><td>LL1y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>LL2_y</td><td>LL2y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>LL3_y</td><td>LL3y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>VSS_x</td><td>VSSx</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>VSS_y</td><td>VSSy</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Generator mechanical input</td><td></td><td></td></tr><tr><td>te</td><td>te</td><td>ExtAlgeb</td><td>Generator electrical output</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus (or busr, if given) terminal voltage</td><td></td><td></td></tr><tr><td>f</td><td>f</td><td>ExtAlgeb</td><td>Bus frequency</td><td></td><td></td></tr><tr><td>vi</td><td>vi</td><td>ExtAlgeb</td><td>Exciter input voltage</td><td></td><td></td></tr><tr><td>v2</td><td>v2</td><td>ExtAlgeb</td><td>Bus (or busr2, if given) terminal voltage</td><td></td><td></td></tr><tr><td>f2</td><td>f2</td><td>ExtAlgeb</td><td>Bus frequency 2</td><td></td><td></td></tr></table>


Initialization Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>L1_y</td><td>L1y</td><td>State</td><td>K1sig</td></tr><tr><td>L2_y</td><td>L2y</td><td>State</td><td>K2sig2</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>IN</td></tr><tr><td>LL1_x</td><td>LL1x</td><td>State</td><td>WOy</td></tr><tr><td>LL2_x</td><td>LL2x</td><td>State</td><td>LL1y</td></tr><tr><td>LL3_x</td><td>LL3x</td><td>State</td><td>LL2y</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>vsout</td><td>vsout</td><td>Algeb</td><td></td></tr><tr><td>sig</td><td>sig</td><td>Algeb</td><td>SWs1(ω-1)+SWs3tm0/SnSb+SWs4(tm-tm0)+SWs5v</td></tr><tr><td>sig2</td><td>sig2</td><td>Algeb</td><td>SW2s1(ω-1)+SW2s3tm0/SnSb+SW2s4(tm-tm0)+SW2s5v2</td></tr><tr><td>IN</td><td>IN</td><td>Algeb</td><td>ue(L1y+L2y)</td></tr><tr><td>WO_y</td><td>WOy</td><td>Algeb</td><td>WOLTZ1WOx</td></tr><tr><td>LL1_y</td><td>LL1y</td><td>Algeb</td><td>WOy</td></tr><tr><td>LL2_y</td><td>LL2y</td><td>Algeb</td><td>LL1y</td></tr><tr><td>LL3_y</td><td>LL3y</td><td>Algeb</td><td>LL2y</td></tr><tr><td>VSS_x</td><td>VSSx</td><td>Algeb</td><td>LL3y</td></tr><tr><td>VSS_y</td><td>VSSy</td><td>Algeb</td><td>LSMAXVSSlimzu+LSMINVSSlimzl+VSSlimziVSSx</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr><tr><td>te</td><td>te</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>f</td><td>f</td><td>ExtAlgeb</td><td></td></tr><tr><td>vi</td><td>vi</td><td>ExtAlgeb</td><td></td></tr><tr><td>v2</td><td>v2</td><td>ExtAlgeb</td><td></td></tr><tr><td>f2</td><td>f2</td><td>ExtAlgeb</td><td></td></tr></table>


Differential Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>L1_y</td><td>L1y</td><td>State</td><td>K1sig - L1y</td><td>T1</td></tr><tr><td>L2_y</td><td>L2y</td><td>State</td><td>K2sig2 - L2y</td><td>T2</td></tr><tr><td>WO_x</td><td>WOx</td><td>State</td><td>IN - WOx</td><td>T4</td></tr><tr><td>LL1_x</td><td>LL1x</td><td>State</td><td>- LL1x + WOy</td><td>T6</td></tr><tr><td>LL2_x</td><td>LL2x</td><td>State</td><td>LL1y - LL2x</td><td>T8</td></tr><tr><td>LL3_x</td><td>LL3x</td><td>State</td><td>LL2y - LL3x</td><td>T10</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Sym-bol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>vsout</td><td>vsout</td><td>Algeb</td><td>OLIMziVSSyue - vsout</td></tr><tr><td>sig</td><td>sig</td><td>Algeb</td><td>SWs1(ω-1) + SWs2(f-1) + SWs3te/SnSb + SWs4(tm-tm0) + SWs5v + SWs6dvv - sig</td></tr><tr><td>sig2</td><td>sig2</td><td>Algeb</td><td>SW2s1(ω-1) + SW2s2(f2-1) + SW2s3te/SnSb + SW2s4(tm-tm0) + SW2s5v2 + SW2s6dv2v - sig2</td></tr><tr><td>IN</td><td>IN</td><td>Algeb</td><td>- IN + ue (L1y + L2y)</td></tr><tr><td>WO_y</td><td>WOy</td><td>Algeb</td><td>T3WOLTz0(IN - WOx) + T4WOLTz1WOx - T4WOy</td></tr><tr><td>LL1_y</td><td>LL1y</td><td>Algeb</td><td>LL1LT1z1LL1LT2z1(-LL1x + LL1y) + LL1xT6 - LL1yT6 + T5(-LL1x + WOy)</td></tr><tr><td>LL2_y</td><td>LL2y</td><td>Algeb</td><td>LL2LT1z1LL2LT2z1(-LL2x + LL2y) + LL2xT8 - LL2yT8 + T7(LL1y - LL2x)</td></tr><tr><td>LL3_y</td><td>LL3y</td><td>Algeb</td><td>LL3LT1z1LL3LT2z1(-LL3x + LL3y) + LL3xT10 - LL3yT10 + T9(LL2y - LL3x)</td></tr><tr><td>VSS_x</td><td>VSSx</td><td>Algeb</td><td>LL3y - VSSx</td></tr><tr><td>VSS_y</td><td>VSSy</td><td>Algeb</td><td>LSMAXVSSlimzu + LSMINVSSlimzl + VSSlimziVSSx - VSSy</td></tr><tr><td>tm</td><td>tm</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>te</td><td>te</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>v</td><td>v</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>f</td><td>f</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>vi</td><td>vi</td><td>ExtAl-genb</td><td>uevsout</td></tr><tr><td>v2</td><td>v2</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>f2</td><td>f2</td><td>ExtAl-genb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>uee</td><td>uuee</td><td>ConstService</td></tr><tr><td>VOU</td><td>VOU</td><td>VCUr + v0</td><td>ConstService</td></tr><tr><td>VOL</td><td>VOL</td><td>VCLr + v0</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>dv</td><td>dv</td><td>Derivative</td><td></td></tr><tr><td>dv2</td><td>dv2</td><td>Derivative</td><td></td></tr><tr><td>SW</td><td>SW</td><td>Switcher</td><td></td></tr><tr><td>SW2</td><td>SW2</td><td>Switcher</td><td></td></tr><tr><td>WO_LT</td><td>LTWO</td><td>LessThan</td><td></td></tr><tr><td>LL1_LT1</td><td>LTLL1</td><td>LessThan</td><td></td></tr><tr><td>LL1_LT2</td><td>LTLL1</td><td>LessThan</td><td></td></tr><tr><td>LL2_LT1</td><td>LTLL2</td><td>LessThan</td><td></td></tr><tr><td>LL2_LT2</td><td>LTLL2</td><td>LessThan</td><td></td></tr><tr><td>LL3_LT1</td><td>LTLL3</td><td>LessThan</td><td></td></tr><tr><td>LL3_LT2</td><td>LTLL3</td><td>LessThan</td><td></td></tr><tr><td>VSSLim</td><td>limVSS</td><td>HardLimiter</td><td></td></tr><tr><td>OLIM</td><td>OLIM</td><td>Limiter</td><td>output limiter</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>L1</td><td>L1</td><td>Lag</td><td>Transducer 1</td></tr><tr><td>L2</td><td>L2</td><td>Lag</td><td>Transducer 2</td></tr><tr><td>WO</td><td>WO</td><td>WashoutOrLag</td><td></td></tr><tr><td>LL1</td><td>LL1</td><td>LeadLag</td><td></td></tr><tr><td>LL2</td><td>LL2</td><td>LeadLag</td><td></td></tr><tr><td>LL3</td><td>LL3</td><td>LeadLag</td><td></td></tr><tr><td>VSS</td><td>VSS</td><td>GainLimiter</td><td></td></tr></table>

Config Fields in [ST2CUT] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>freq_model</td><td></td><td>BusFreq</td><td>default freq. measurement model</td><td>(&#x27;BusFreq&#x27;,)</td></tr></table>

# 5.21 PhasorMeasurement

Phasor measurements 

Common Parameters: u, name 

Common Variables: am, vm 

Available models: PMU 

# 5.21.1 PMU

Simple phasor measurement unit model. 

This model tracks the bus voltage magnitude and phase angle, each using a low-pass filter. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>bus idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>Ta</td><td>Ta</td><td>angle filter time constant</td><td>0.100</td><td></td><td></td></tr><tr><td>Tv</td><td>Tv</td><td>voltage filter time constant</td><td>0.100</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>am</td><td>am</td><td>State</td><td>phase angle measurement</td><td>rad.</td><td>v_str</td></tr><tr><td>vm</td><td>vm</td><td>State</td><td>voltage magnitude measurement</td><td>p.u.(kV)</td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage phase angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>am</td><td>am</td><td>State</td><td>a</td></tr><tr><td>vm</td><td>vm</td><td>State</td><td>v</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>am</td><td>am</td><td>State</td><td>a - am</td><td>Ta</td></tr><tr><td>vm</td><td>vm</td><td>State</td><td>v - vm</td><td>Tv</td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>0</td></tr></table>

Config Fields in [PMU] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr></table>

# 5.22 RenAerodynamics

Renewable aerodynamics group. 

Common Parameters: u, name, rego 

Common Variables: theta 

Available models: WTARA1, WTARV1 

# 5.22.1 WTARA1

Wind turbine aerodynamics model (no wind speed details). 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>rego</td><td></td><td>Renewable governor idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>Ka</td><td>Ka</td><td>Aerodynamics gain</td><td>1</td><td>p.u./deg.</td><td>non_negative</td></tr><tr><td>theta0</td><td>θ0</td><td>Initial pitch angle</td><td>0</td><td>deg.</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>theta</td><td>θ</td><td>Algebra</td><td>Pitch angle</td><td>rad</td><td>v_str</td></tr><tr><td>Pmg</td><td>Pmg</td><td>ExtAlgebra</td><td></td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>theta</td><td>θ</td><td>Algeb</td><td>theta0r</td></tr><tr><td>Pmg</td><td>Pmg</td><td>ExtAlgeb</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>theta</td><td>θ</td><td>Algeb</td><td>-θ + theta0r</td></tr><tr><td>Pmg</td><td>Pmg</td><td>ExtAlgeb</td><td>-Kaθ (θ - θ0)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>theta0r</td><td>θ0r</td><td>πθ0/180</td><td>ConstService</td></tr></table>

Config Fields in [WTARA1] 

# 5.22. RenAerodynamics

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.22.2 WTARV1

Wind turbine aerodynamics model with wind velocity details. 

Work is in progress. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>rego</td><td></td><td>Renewable governor idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>nblade</td><td></td><td>number of blades</td><td>3</td><td></td><td></td></tr><tr><td>ngen</td><td></td><td>number of wind generator units</td><td>50</td><td></td><td></td></tr><tr><td>npole</td><td></td><td>number of poles in generator</td><td>4</td><td></td><td></td></tr><tr><td>R</td><td></td><td>rotor radius</td><td>30</td><td>m</td><td></td></tr><tr><td>ngb</td><td></td><td>gear box ratio</td><td>5</td><td></td><td></td></tr><tr><td>rho</td><td></td><td>air density</td><td>1.200</td><td>kg/m3</td><td></td></tr><tr><td>Sn</td><td>Sn</td><td></td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>theta</td><td>θ</td><td>Algeb</td><td>Pitch angle</td><td>rad</td><td></td></tr><tr><td>Pmg</td><td>Pmg</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>theta</td><td>θ</td><td>Algeb</td><td></td></tr><tr><td>Pmg</td><td>Pmg</td><td>ExtAlgebra</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>theta</td><td>θ</td><td>Algeb</td><td>0</td></tr><tr><td>Pmg</td><td>Pmg</td><td>ExtAlgeb</td><td>0</td></tr></table>

Config Fields in [WTARV1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.23 RenExciter

Renewable electrical control (exciter) group. 

Common Parameters: u, name, reg 

Common Variables: Pref, Qref, wg, Pord 

Available models: REECA1, REECA1E, REECA1G 

# 5.23.1 REECA1

Renewable energy electrical control. 

There are two user-defined voltages: Vref0 and Vref1. 

• The difference between the initial bus voltage and Vref0 should be within the voltage deadbands dbd1 and dbd2. 

• If $V F L A G { = } 0$ , the input to the second PI controller will be Vref1. 

Regarding the additional reactive current injection during voltage dip: 

• Exercise caution when coordinating the parameters dbd1, dbd2, Vdip, and Vup to avoid unintended responses. 

# 5.23. RenExciter

• Kqv in pu current / pu voltage deviation controls the intensity of reactive power injection. The parameter needs to tuned properly to avoid voltage overshoot. 

• When multiple renewable generators are connected to the same bus, Kqv shall be reduced accordingly to avoid excessive reactive power injection. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>reg</td><td></td><td>Renewable generator idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>busr</td><td></td><td>Optional remote bus for voltage control</td><td></td><td></td><td></td></tr><tr><td>PFFLAG</td><td></td><td>Power factor control flag; 1-PF control, 0-Q control</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>VFLAG</td><td></td><td>Voltage control flag; 1-Q control, 0-V control</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>QFLAG</td><td></td><td>Q control flag; 1-V or Q control, 0-const. PF or Q</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>PFLAG</td><td></td><td>P speed-dependency flag; 1-has speed dep., 0-no dep.</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>PQFLAG</td><td></td><td>P/Q priority flag for I limit; 0-Q priority, 1-P priority</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>Vdip</td><td>\( V_{dip} \)</td><td>Low V threshold to activate Iqinj logic</td><td>0.800</td><td>p.u.</td><td></td></tr><tr><td>Vup</td><td>\( V_{up} \)</td><td>V threshold above which to activate Iqinj logic</td><td>1.200</td><td>p.u.</td><td></td></tr><tr><td>Trv</td><td>\( T_{rv} \)</td><td>Voltage filter time constant</td><td>0.020</td><td></td><td></td></tr><tr><td>dbd1</td><td>\( d_{bd1} \)</td><td>Lower bound of the voltage deadband (&lt;=0)</td><td>-0.020</td><td></td><td></td></tr><tr><td>dbd2</td><td>\( d_{bd2} \)</td><td>Upper bound of the voltage deadband (&gt;=0)</td><td>0.020</td><td></td><td></td></tr><tr><td>Kqv</td><td>\( K_{qv} \)</td><td>Gain to compute Iqinj from V error (caution!!)</td><td>1</td><td></td><td></td></tr><tr><td>Iqh1</td><td>\( I_{qh1} \)</td><td>Upper limit on Iqinj</td><td>999</td><td></td><td></td></tr><tr><td>Iql1</td><td>\( I_{ql1} \)</td><td>Lower limit on Iqinj</td><td>-999</td><td></td><td></td></tr><tr><td>Vref0</td><td>\( V_{ref0} \)</td><td>User defined Vref (if 0, use initial bus V)</td><td>1</td><td></td><td></td></tr><tr><td>Iqfrz</td><td>\( I_{qfrz} \)</td><td>Hold Iqinj at the value for Thld (&gt;0) seconds following a Vdip</td><td>0</td><td></td><td></td></tr><tr><td>Thld</td><td>\( T_{hld} \)</td><td>Time for which Iqinj is held. Hold at Iqinj if&gt;0; hold at State 1 if&lt;0</td><td>0</td><td>s</td><td></td></tr><tr><td>Thld2</td><td>\( T_{hld2} \)</td><td>Time for which IPMAX is held after voltage dip ends</td><td>0</td><td>s</td><td></td></tr><tr><td>Tp</td><td>\( T_p \)</td><td>Filter time constant for Pe</td><td>0.020</td><td>s</td><td></td></tr><tr><td>QMax</td><td>\( Q_{max} \)</td><td>Upper limit for reactive power regulator</td><td>999</td><td></td><td></td></tr><tr><td>QMin</td><td>\( Q_{min} \)</td><td>Lower limit for reactive power regulator</td><td>-999</td><td></td><td></td></tr><tr><td>VMAX</td><td>\( V_{max} \)</td><td>Upper limit for voltage control</td><td>999</td><td></td><td></td></tr><tr><td>VMIN</td><td>\( V_{min} \)</td><td>Lower limit for voltage control</td><td>-999</td><td></td><td></td></tr><tr><td>Kqp</td><td>\( K_{qp} \)</td><td>Proportional gain for reactive power error</td><td>1</td><td></td><td></td></tr><tr><td>Kqi</td><td>\( K_{qi} \)</td><td>Integral gain for reactive power error</td><td>0.100</td><td></td><td></td></tr><tr><td>Kvp</td><td>\( K_{vp} \)</td><td>Proportional gain for voltage error</td><td>1</td><td></td><td></td></tr><tr><td>Kvi</td><td>\( K_{vi} \)</td><td>Integral gain for voltage error</td><td>0.100</td><td></td><td></td></tr><tr><td>Vref1</td><td>\( V_{ref1} \)</td><td>Voltage ref. if VFLAG=0</td><td>1</td><td></td><td>non_zero</td></tr><tr><td>Tiq</td><td>\( T_{iq} \)</td><td>Filter time constant for Iq</td><td>0.020</td><td></td><td></td></tr><tr><td>dPmax</td><td>\( d_{Pmax} \)</td><td>Power reference max. ramp rate (&gt;0)</td><td>999</td><td></td><td></td></tr><tr><td>dPmin</td><td>\( d_{Pin} \)</td><td>Power reference min. ramp rate (&lt;0)</td><td>-999</td><td></td><td></td></tr><tr><td>PMAX</td><td>\( P_{max} \)</td><td>Max. active power limit &gt;0</td><td>999</td><td></td><td></td></tr></table>

continues on next page 


Table 17 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>PMIN</td><td>Pmin</td><td>Min. active power limit</td><td>0</td><td></td><td></td></tr><tr><td>Imax</td><td>Imax</td><td>Max. apparent current limit</td><td>999</td><td></td><td>current</td></tr><tr><td>Tpord</td><td>Tpord</td><td>Filter time constant for power setpoint</td><td>0.020</td><td></td><td></td></tr><tr><td>Vq1</td><td>Vq1</td><td>Reactive power V-I pair (point 1), voltage</td><td>0.200</td><td></td><td></td></tr><tr><td>Iq1</td><td>Iq1</td><td>Reactive power V-I pair (point 1), current</td><td>2</td><td></td><td>current</td></tr><tr><td>Vq2</td><td>Vq2</td><td>Reactive power V-I pair (point 2), voltage</td><td>0.400</td><td></td><td></td></tr><tr><td>Iq2</td><td>Iq2</td><td>Reactive power V-I pair (point 2), current</td><td>4</td><td></td><td>current</td></tr><tr><td>Vq3</td><td>Vq3</td><td>Reactive power V-I pair (point 3), voltage</td><td>0.800</td><td></td><td></td></tr><tr><td>Iq3</td><td>Iq3</td><td>Reactive power V-I pair (point 3), current</td><td>8</td><td></td><td>current</td></tr><tr><td>Vq4</td><td>Vq4</td><td>Reactive power V-I pair (point 4), voltage</td><td>1</td><td></td><td></td></tr><tr><td>Iq4</td><td>Iq4</td><td>Reactive power V-I pair (point 4), current</td><td>10</td><td></td><td>current</td></tr><tr><td>Vp1</td><td>Vp1</td><td>Active power V-I pair (point 1), voltage</td><td>0.200</td><td></td><td></td></tr><tr><td>Ip1</td><td>Ip1</td><td>Active power V-I pair (point 1), current</td><td>2</td><td></td><td>current</td></tr><tr><td>Vp2</td><td>Vp2</td><td>Active power V-I pair (point 2), voltage</td><td>0.400</td><td></td><td></td></tr><tr><td>Ip2</td><td>Ip2</td><td>Active power V-I pair (point 2), current</td><td>4</td><td></td><td>current</td></tr><tr><td>Vp3</td><td>Vp3</td><td>Active power V-I pair (point 3), voltage</td><td>0.800</td><td></td><td></td></tr><tr><td>Ip3</td><td>Ip3</td><td>Active power V-I pair (point 3), current</td><td>8</td><td></td><td>current</td></tr><tr><td>Vp4</td><td>Vp4</td><td>Active power V-I pair (point 4), voltage</td><td>1</td><td></td><td></td></tr><tr><td>Ip4</td><td>Ip4</td><td>Active power V-I pair (point 4), current</td><td>12</td><td></td><td>current</td></tr><tr><td>bus</td><td></td><td>Retrieved bus idx</td><td></td><td></td><td></td></tr><tr><td>gen</td><td></td><td>Retrieved StaticGen idx</td><td></td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td></td><td>0</td><td></td><td></td></tr></table>


Variables


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>PIQ_xi</td><td>PIQξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>pfilt_y</td><td>pfilty</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>s5_y</td><td>s5y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>PIV_xi</td><td>PIVξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>Pord</td><td>Pord</td><td>AliasState</td><td>Alias of s5_y</td><td></td><td></td></tr><tr><td>vp</td><td>vp</td><td>Algeb</td><td>Sensed lower-capped voltage</td><td></td><td>v_str</td></tr><tr><td>pfaref</td><td>pfaref</td><td>Algeb</td><td>power factor angle ref</td><td>rad</td><td>v_str</td></tr><tr><td>Qref</td><td>Qref</td><td>Algeb</td><td>external Q ref</td><td>p.u.</td><td>v_str</td></tr><tr><td>QCPF</td><td>QCPF</td><td>Algeb</td><td>Q calculated from P and power factor</td><td>p.u.</td><td>v_str</td></tr><tr><td>PFsel</td><td>PFsel</td><td>Algeb</td><td>Output of PFFLAG selector</td><td></td><td>v_str</td></tr><tr><td>Qerr</td><td>Qerr</td><td>Algeb</td><td>Reactive power error</td><td></td><td>v_str</td></tr><tr><td>PIQ_ys</td><td>PIQys</td><td>Algeb</td><td>PI summation before limit</td><td></td><td>v_str</td></tr></table>


continues on next page 



Table 18 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>PIQ_y</td><td>PIQ_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>Vsel_x</td><td>Vsel_x</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>Vsel_y</td><td>Vsel_y</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>Verr</td><td>Verr</td><td>Algeb</td><td>Voltage error (Vref0)</td><td></td><td>v_str</td></tr><tr><td>dbV_y</td><td>dbVy</td><td>Algeb</td><td>Deadband type 1 output</td><td></td><td>v_str</td></tr><tr><td>Iqinj</td><td>Iqinj</td><td>Algeb</td><td>Additional Iq signal during under- or over-voltage</td><td></td><td>v_str</td></tr><tr><td>wg</td><td>wg</td><td>Algeb</td><td>Drive train generator speed</td><td></td><td>v_str</td></tr><tr><td>Pref</td><td>Pref</td><td>Algeb</td><td>external P ref</td><td>p.u.</td><td>v_str</td></tr><tr><td>Psel</td><td>Psel</td><td>Algeb</td><td>Output selection of PFLAG</td><td></td><td>v_str</td></tr><tr><td>VDL1_y</td><td>VDL1y</td><td>Algeb</td><td>Output of piecewise</td><td></td><td>v_str</td></tr><tr><td>VDL2_y</td><td>VDL2y</td><td>Algeb</td><td>Output of piecewise</td><td></td><td>v_str</td></tr><tr><td>Ipmax</td><td>Ipmax</td><td>Algeb</td><td>Upper limit on Ipcmd</td><td></td><td>v_str</td></tr><tr><td>Iqmax</td><td>Iqmax</td><td>Algeb</td><td>Upper limit on Iqcmd</td><td></td><td>v_str</td></tr><tr><td>PIV_ys</td><td>PIVys</td><td>Algeb</td><td>PI summation before limit</td><td></td><td>v_str</td></tr><tr><td>PIV_y</td><td>PIVy</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>Qsel</td><td>Qsel</td><td>Algeb</td><td>Selection output of QFLAG</td><td></td><td>v_str</td></tr><tr><td>IpHL_x</td><td>IpHLx</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>IpHL_y</td><td>IpHLy</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>IqHL_x</td><td>IqHLx</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>IqHL_y</td><td>IqHLy</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>d-axis bus voltage magnitude</td><td></td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td>Retrieved Pe of RenGen</td><td></td><td></td></tr><tr><td>Qe</td><td>Qe</td><td>ExtAlgeb</td><td>Retrieved Qe of RenGen</td><td></td><td></td></tr><tr><td>Ipcmd</td><td>Ipcmd</td><td>ExtAlgeb</td><td>Retrieved Ipcmd of RenGen</td><td></td><td></td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>ExtAlgeb</td><td>Retrieved Iqcmd of RenGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>v</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>Pe</td></tr><tr><td>PIQ(xi</td><td>PIQξ</td><td>State</td><td>0.0</td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>PFsel vp</td></tr><tr><td>pfilt_y</td><td>pfilty</td><td>State</td><td>Pref</td></tr><tr><td>s5_y</td><td>s5y</td><td>State</td><td>Psel</td></tr><tr><td>PIV(xi</td><td>PIVξ</td><td>State</td><td>-Iqcmd0SWQs1</td></tr><tr><td>Pord</td><td>Pord</td><td>AliasState</td><td></td></tr><tr><td>vp</td><td>vp</td><td>Algeb</td><td>VLowerzi v + 0.01VLowerzl</td></tr><tr><td>pfaref</td><td>pfaref</td><td>Algeb</td><td>pfaref0</td></tr><tr><td>Qref</td><td>Qref</td><td>Algeb</td><td>-qref0</td></tr></table>


Table 19 – continued from previo


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>Qcpf</td><td>Qcpf</td><td>Algebra</td><td>q0</td></tr><tr><td>PFsel</td><td>PFsel</td><td>Algebra</td><td>QcpfSWPFsl + QrefSWPFs0</td></tr><tr><td>Qerr</td><td>Qerr</td><td>Algebra</td><td>PFlimziPFsel + PFlimzlQMin + PFlimzuQMax - Qe</td></tr><tr><td>PIQ_ys</td><td>PIQys</td><td>Algebra</td><td>KqpQerrSWVs1</td></tr><tr><td>PIQ_y</td><td>PIQy</td><td>Algebra</td><td>PIQlimziPIQys + PIQlimzlVMIN + PIQlimzuVMAX</td></tr><tr><td>Vsel_x</td><td>Vselx</td><td>Algebra</td><td>PIQySWVs1 + SWVs0 (QcpfSWPFsl + QrefSWPFs0 + Vref1)</td></tr><tr><td>Vsel_y</td><td>Vsely</td><td>Algebra</td><td>VMAXVsellimzu + VMINVsellimzl + VsellimziVselx</td></tr><tr><td>Verr</td><td>Verr</td><td>Algebra</td><td>Vref0 - s0y</td></tr><tr><td>dbV_y</td><td>dbVy</td><td>Algebra</td><td>1.0dbVdbzl (Verr - dbd1) + 1.0dbVdbzu (Verr - dbd2)</td></tr><tr><td>Iqinj</td><td>Iqinj</td><td>Algebra</td><td>KqvVoltdipdbVy + fThld (1 - Voltdip) (IqfrzpThld + KqvdbVynThld)</td></tr><tr><td>wg</td><td>wg</td><td>Algebra</td><td>1.0</td></tr><tr><td>Pref</td><td>Pref</td><td>Algebra</td><td>p0wg</td></tr><tr><td>Psel</td><td>Psel</td><td>Algebra</td><td>SWPs0pfilty + SWPs1pfiltywg</td></tr><tr><td>VDL1_y</td><td>VDL1y</td><td>Algebra</td><td>FixPiecewise ((Iq1, Vq1 ≥ s0y), (Iq1 + kVq12 (-Vq1 + s0y), Vq2 ≥ s0y), (Iq2 + kVq2), Vq3 &gt; s0y)</td></tr><tr><td>VDL2_y</td><td>VDL2y</td><td>Algebra</td><td>FixPiecewise ((Ip1, Vp1 ≥ s0y), (Ip1 + kVp12 (-Vp1 + s0y), Vp2 ≥ s0y), (Ip2 + kVp2)</td></tr><tr><td>Ipmax</td><td>Ipmax</td><td>Algebra</td><td>(1 - fThld2) (√Ipmax2sq0SWPQs0 + SWPQs1 (zVDL2 (Imaxr (1 - VDL2c))</td></tr><tr><td>Iqmax</td><td>Iqmax</td><td>Algebra</td><td>√Iqmax2sq0SWPQs1 + SWPQs0 (zVDL1 (Imaxr (1 - VDL1c) + VDL1yVDL2c)</td></tr><tr><td>PIV_ys</td><td>PIVys</td><td>Algebra</td><td>-Iqcmd0SWQs1 + KvpSWQs1 (-SWVso0s0y + Vsely)</td></tr><tr><td>PIV_y</td><td>PIVy</td><td>Algebra</td><td>IqmaxPIVlimzu + IqminPIVlimzl + PIVlimziPIVys</td></tr><tr><td>Qsel</td><td>Qsel</td><td>Algebra</td><td>PIVySWQs1 + SWQso4y</td></tr><tr><td>IpHL_x</td><td>IpHLx</td><td>Algebra</td><td>s5yvp</td></tr><tr><td>IpHL_y</td><td>IpHLy</td><td>Algebra</td><td>IpHLlimziIpHLx + IpHLlimzlIpmin + IpHLlimzuIpmax</td></tr><tr><td>IqHL_x</td><td>IqHLx</td><td>Algebra</td><td>Iqinj + Qsel</td></tr><tr><td>IqHL_y</td><td>IqHLy</td><td>Algebra</td><td>IqHLlimziIqHLx + IqHLlimzlIqmin + IqHLlimzuIqmax</td></tr><tr><td>a</td><td>a</td><td>ExtAlgebra</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgebra</td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgebra</td><td></td></tr><tr><td>Qe</td><td>Qe</td><td>ExtAlgebra</td><td></td></tr><tr><td>Ipcmd</td><td>Ipcmd</td><td>ExtAlgebra</td><td></td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>ExtAlgebra</td><td></td></tr></table>


Differential Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>-s0y + v</td><td>Trv</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>Pe - S1y</td><td>Tp</td></tr><tr><td>PIQ_xi</td><td>PIQξ</td><td>State</td><td>Kqi (1 - Volt_dip) (2PIQy - 2PIQys + QerrSWVs1)</td><td></td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>(1 - Volt_dip) (PFsel /vp - s4y)</td><td>Tiq</td></tr><tr><td>pfilt_y</td><td>pfilty</td><td>State</td><td>Pref - pfilty</td><td>0.02</td></tr><tr><td>s5_y</td><td>s5y</td><td>State</td><td>(1 - Volt_dip) (Psel - s5y)</td><td>Tpord</td></tr><tr><td>PIV_xi</td><td>PIVξ</td><td>State</td><td>Kvi (1 - Volt_dip) (2PIVy - 2PIVys + SWQs1 (-SWVs0s0y +</td><td></td></tr><tr><td>Pord</td><td>Pord</td><td>AliasState</td><td>0</td><td></td></tr></table>


Algebraic Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>vp</td><td>vp</td><td>Algeb</td><td>VLowerziv + 0.01VLowerzl - vp</td></tr><tr><td>pfaref</td><td>pfaref</td><td>Algeb</td><td>- pfaref + pfaref0</td></tr><tr><td>Qref</td><td>Qref</td><td>Algeb</td><td>- Qref - qref0</td></tr><tr><td>Qcpf</td><td>Qcpf</td><td>Algeb</td><td>(1 - zpz1) (- Qcpf + S1y tan (pfaref))</td></tr><tr><td>PFsel</td><td>PFsel</td><td>Algeb</td><td>- PFsel + QcpfSWPFs1 + QrefSWPFs0</td></tr><tr><td>Qerr</td><td>Qerr</td><td>Algeb</td><td>PFlimziPFsel + PFlimzlQMin + PFlimzuQMax - Qe - Qerr</td></tr><tr><td>PIQ_ys</td><td>PIQ_ys</td><td>Algeb</td><td>(1 - Voltdip) (KqpQerrSWVs1 + PIQξ - PIQys)</td></tr><tr><td>PIQ_y</td><td>PIQ_y</td><td>Algeb</td><td>(1 - Voltdip) (PIQlimziPIQys + PIQlimzlVMIN + PIQlimzuVMAX - PIQy)</td></tr><tr><td>Vsel_x</td><td>Vsel_x</td><td>Algeb</td><td>PIQySWVs1 + SWVs0 (QcpfSWPFs1 + QrefSWPFs0 + Vref1) - Vselx</td></tr><tr><td>Vsel_y</td><td>Vsel_y</td><td>Algeb</td><td>VMAXVsellimzu + VMINVsellimzl + VsellimziVselx - Vsely</td></tr><tr><td>Verr</td><td>Verr</td><td>Algeb</td><td>-Verr + Vref0 - s0y</td></tr><tr><td>dbV_y</td><td>dbVy</td><td>Algeb</td><td>1.0dbVdbzl (Verr - dbd1) + 1.0dbVdbzu (Verr - dbd2) - dbVy</td></tr><tr><td>Iqinj</td><td>Iqinj</td><td>Algeb</td><td>-Iqinj + KqvVoltdipdbVy + fThld (1 - Voltdip) (IqfrzpThld + KqvdbVynThld)</td></tr><tr><td>wg</td><td>wg</td><td>Algeb</td><td>1.0 - wg</td></tr><tr><td>Pref</td><td>Pref</td><td>Algeb</td><td>-Pref + p0/wg</td></tr><tr><td>Psel</td><td>Psel</td><td>Algeb</td><td>-Psel + SWPs0pfilty + SWPs1pfiltywg</td></tr><tr><td>VDL1_y</td><td>VDL1y</td><td>Algeb</td><td>-VDL1y + FixPiecewise ((Iq1, Vq1 ≥ s0y), (Iq1 + kVq12 (-Vq1 + s0y), Vq2 ≥ s0y)</td></tr><tr><td>VDL2_y</td><td>VDL2y</td><td>Algeb</td><td>-VDL2y + FixPiecewise ((Ip1, Vp1 ≥ s0y), (Ip1 + kVp12 (-Vp1 + s0y), Vp2 ≥ s0y)</td></tr><tr><td>Ipmax</td><td>Ipmax</td><td>Algeb</td><td>-Ipmax + IpmaxhfThld2 + (1 - fThld2) (√Ipmax2sqSWPQs0 + SWPQs1 (zVDL1) (Imaxr (1 - VDL1c) + VDL1c)</td></tr><tr><td>Iqmax</td><td>Iqmax</td><td>Algeb</td><td>-Iqmax + √Iqmax2sqSWPQs1 + SWPQs0 (zVDL1) (Imaxr (1 - VDL1c) + VDL1c)</td></tr><tr><td>PIV_ys</td><td>PIVys</td><td>Algeb</td><td>(1 - Voltdip) (KvpSWQs1 (-SWVs0s0y + Vsely) + PIVξ - PIVys)</td></tr><tr><td>PIV_y</td><td>PIVy</td><td>Algeb</td><td>(1 - Voltdip) (IqmaxPIVlimzu + IqminPIVlimzl + PIVlimziPIVys - PIVy)</td></tr><tr><td>Qsel</td><td>Qsel</td><td>Algeb</td><td>PIVySWQs1 - Qsel + SWQs0s4y</td></tr><tr><td>IpHL_x</td><td>IpHLx</td><td>Algeb</td><td>-IpHLx + s5y/vp</td></tr><tr><td>IpHL_y</td><td>IpHLy</td><td>Algeb</td><td>IpHLlimziIpHLx + IpHLlimzlIpmin + IpHLlimzuIpmax - IpHLy</td></tr><tr><td>IqHL_x</td><td>IqHLx</td><td>Algeb</td><td>-IqHLx + Iqinj + Qsel</td></tr></table>


Table 20 – continued from


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>IqHL_y</td><td>IqHL_y</td><td>Algeb</td><td>IqHLlimziIqHL_x + IqHLlimzlIqmin + IqHLlimzuIqmax - IqHL_y</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>Qe</td><td>Qe</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>Ipcmd</td><td>Ipcmd</td><td>ExtAlgeb</td><td>IpHL_y - Ipcmd0</td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>ExtAlgeb</td><td>-IqHL_y - Iqcmd0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>Ipcmd0</td><td>Ipcmd0</td><td>p0v</td><td>ConstServi</td></tr><tr><td>Iqcmd0</td><td>Iqcmd0</td><td>-q0v</td><td>ConstServi</td></tr><tr><td>pfaref0</td><td>Φref0</td><td>atan2(q0,p0)</td><td>ConstServi</td></tr><tr><td>Volt_dip</td><td>zVdip</td><td>1 - Vcmpzi</td><td>VarService</td></tr><tr><td>qref0</td><td>qref0</td><td>Iqcmd0SWQs0(VLowerzi v + 0.01VLowerzl) + SWQs1(-Vref1 + v)</td><td>ConstServi</td></tr><tr><td>PIQ_flag</td><td>zPIQ</td><td>0</td><td>EventFlag</td></tr><tr><td>s4_flag</td><td>zS4</td><td>0</td><td>EventFlag</td></tr><tr><td>pThld</td><td>pThld</td><td>Indicator (Thld &gt; 0)</td><td>ConstServi</td></tr><tr><td>nThld</td><td>nThld</td><td>Indicator (Thld &lt; 0)</td><td>ConstServi</td></tr><tr><td>Thld_abs</td><td>|Thld|</td><td>|Thld|</td><td>ConstServi</td></tr><tr><td>fThld</td><td>fThld</td><td>0</td><td>ExtendedE</td></tr><tr><td>s5_flag</td><td>zS5</td><td>0</td><td>EventFlag</td></tr><tr><td>kVq12</td><td>kVq12</td><td>-Iq1+Iq2-Vq1+Vq2</td><td>ConstServi</td></tr><tr><td>kVq23</td><td>kVq23</td><td>-Iq2+Iq3-Vq2+Vq3</td><td>ConstServi</td></tr><tr><td>kVq34</td><td>kVq34</td><td>-Iq3+Iq4-Vq3+Vq4</td><td>ConstServi</td></tr><tr><td>zVDL1</td><td>zVDL1</td><td>Iq1 ≤ Iq2 ∧ Iq2 ≤ Iq3 ∧ Iq3 ≤ Iq4 ∧ Vq1 ≤ Vq2 ∧ Vq2 ≤ Vq3 ∧ Vq3 ≤ Vq4</td><td>ConstServi</td></tr><tr><td>kVp12</td><td>kVp12</td><td>-Ip1+Ip2-Vp1+Vp2</td><td>ConstServi</td></tr><tr><td>kVp23</td><td>kVp23</td><td>-Ip2+Ip3-Vp2+Vp3</td><td>ConstServi</td></tr><tr><td>kVp34</td><td>kVp34</td><td>-Ip3+Ip4-Vp3+Vp4</td><td>ConstServi</td></tr><tr><td>zVDL2</td><td>zVDL2</td><td>Ip1 ≤ Ip2 ∧ Ip2 ≤ Ip3 ∧ Ip3 ≤ Ip4 ∧ Vp1 ≤ Vp2 ∧ Vp2 ≤ Vp3 ∧ Vp3 ≤ Vp4</td><td>ConstServi</td></tr><tr><td>fThld2</td><td>fThld2</td><td>0</td><td>ExtendedE</td></tr><tr><td>VDL1c</td><td>VDL1c</td><td>VDL1y &lt; Imaxr</td><td>VarService</td></tr><tr><td>VDL2c</td><td>VDL2c</td><td>VDL2y &lt; Imaxr</td><td>VarService</td></tr><tr><td>Ipmax2sq0</td><td>I2pmax20,nn</td><td>FixPiecewise((0, Imax2 - Iqcmd02 ≤ 0), (Imax2 - Iqcmd02, True))</td><td>ConstServi</td></tr><tr><td>Ipmax2sq</td><td>I2pmax2</td><td>FixPiecewise((0, Imax2 - IqHLY2 ≤ 0), (Imax2 - IqHLY2, True))</td><td>VarService</td></tr><tr><td>Ipmaxh</td><td>Ipmaxh</td><td>0</td><td>VarHold</td></tr><tr><td>Iqmax2sq0</td><td>I2qmax,nn</td><td>FixPiecewise((0, Imax2 - Ipcm02 ≤ 0), (Imax2 - Ipcm02, True))</td><td>ConstServi</td></tr><tr><td>Iqmax2sq</td><td>I2qmax2</td><td>FixPiecewise((0, Imax2 - IpHLY2 ≤ 0), (Imax2 - IpHLY2, True))</td><td>VarService</td></tr><tr><td>Ipmin</td><td>Ipmin</td><td>0.0</td><td>ConstServi</td></tr></table>

continues on next p 


Table 21 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>PIV_flag</td><td>zflagPIV</td><td>0</td><td>EventFlag</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>SWPF</td><td>SWPF</td><td>Switcher</td><td></td></tr><tr><td>SWV</td><td>SWV</td><td>Switcher</td><td></td></tr><tr><td>SWQ</td><td>SWV</td><td>Switcher</td><td></td></tr><tr><td>SWP</td><td>SWP</td><td>Switcher</td><td></td></tr><tr><td>SWPQ</td><td>SWPQ</td><td>Switcher</td><td></td></tr><tr><td>zp</td><td>zp</td><td>IsEqual</td><td></td></tr><tr><td>Vcmp</td><td>Vcmp</td><td>Limiter</td><td>Voltage dip comparator</td></tr><tr><td>VLower</td><td>VLower</td><td>Limiter</td><td>Limiter for lower voltage cap</td></tr><tr><td>PFlim</td><td>PFlim</td><td>Limiter</td><td></td></tr><tr><td>PIQLim</td><td>limPIQ</td><td>HardLimiter</td><td></td></tr><tr><td>VselLim</td><td>limVsel</td><td>HardLimiter</td><td></td></tr><tr><td>dbV_db</td><td>dbdbV</td><td>DeadBand</td><td></td></tr><tr><td>pfiltLim</td><td>limPfilt</td><td>RateLimiter</td><td>Rate limiter in Lag</td></tr><tr><td>s5Lim</td><td>lims5</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>PIVLim</td><td>limPIV</td><td>HardLimiter</td><td></td></tr><tr><td>IpHLLim</td><td>limIpHL</td><td>HardLimiter</td><td></td></tr><tr><td>IqHLLim</td><td>limIqHL</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>s0</td><td>s0</td><td>Lag</td><td>Voltage filter</td></tr><tr><td>S1</td><td>S1</td><td>Lag</td><td>Pe filter</td></tr><tr><td>PIQ</td><td>PIQ</td><td>PITrackAWFreeze</td><td></td></tr><tr><td>Vsel</td><td>Vsel</td><td>GainLimiter</td><td>Selection output of VFLAG</td></tr><tr><td>s4</td><td>s4</td><td>LagFreeze</td><td>Filter for calculated voltage with freeze</td></tr><tr><td>dbV</td><td>dbV</td><td>DeadBand1</td><td>Deadband for voltage error (ref0)</td></tr><tr><td>pfilt</td><td>Pfilt</td><td>LagRate</td><td>Active power filter with rate limits</td></tr><tr><td>s5</td><td>s5</td><td>LagAWFreeze</td><td></td></tr><tr><td>VDL1</td><td>VDL1</td><td>Piecewise</td><td>Piecewise linear characteristics of Vq-Iq</td></tr><tr><td>VDL2</td><td>VDL2</td><td>Piecewise</td><td>Piecewise linear characteristics of Vp-Ip</td></tr><tr><td>PIV</td><td>PIV</td><td>PITrackAWFreeze</td><td></td></tr><tr><td>IpHL</td><td>IpHL</td><td>GainL Limiter</td><td></td></tr><tr><td>IqHL</td><td>IqHL</td><td>GainL Limiter</td><td></td></tr></table>

Config Fields in [REECA1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>kqs</td><td>Kqs</td><td>2</td><td>Q PI controller tracking gain</td><td></td></tr><tr><td>kvs</td><td>Kvs</td><td>2</td><td>Voltage PI controller tracking gain</td><td></td></tr><tr><td>tpfilt</td><td>Tpfilt</td><td>0.020</td><td>Time const. for Pref filter</td><td></td></tr></table>

# 5.23.2 REECA1E

REGCA1 with inertia emulation and primary frequency droop. Measurements are based on frequency measurement model. 

Bus ROCOF obtained from BusROCOF devices. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>reg</td><td></td><td>Renewable generator idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>busr</td><td></td><td>Optional remote bus for voltage control</td><td></td><td></td><td></td></tr><tr><td>PFFLAG</td><td></td><td>Power factor control flag; 1-PF control, 0-Q control</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>VFLAG</td><td></td><td>Voltage control flag; 1-Q control, 0-V control</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>QFLAG</td><td></td><td>Q control flag; 1-V or Q control, 0-const. PF or Q</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>PFLAG</td><td></td><td>P speed-dependency flag; 1-has speed dep., 0-no dep.</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>PQFLAG</td><td></td><td>P/Q priority flag for I limit; 0-Q priority, 1-P priority</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>Vdip</td><td>Vdip</td><td>Low V threshold to activate Iqinj logic</td><td>0.800</td><td>p.u.</td><td></td></tr><tr><td>Vup</td><td>Vup</td><td>V threshold above which to activate Iqinj logic</td><td>1.200</td><td>p.u.</td><td></td></tr><tr><td>Trv</td><td>Trv</td><td>Voltage filter time constant</td><td>0.020</td><td></td><td></td></tr><tr><td>dbd1</td><td>bd1</td><td>Lower bound of the voltage deadband (&lt;=0)</td><td>-0.020</td><td></td><td></td></tr><tr><td>dbd2</td><td>bd2</td><td>Upper bound of the voltage deadband (&gt;=0)</td><td>0.020</td><td></td><td></td></tr><tr><td>Kqv</td><td>Kqv</td><td>Gain to compute Iqinj from V error (caution!!)</td><td>1</td><td></td><td></td></tr><tr><td>Iqh1</td><td>Iqh1</td><td>Upper limit on Iqinj</td><td>999</td><td></td><td></td></tr><tr><td>Iql1</td><td>Iql1</td><td>Lower limit on Iqinj</td><td>-999</td><td></td><td></td></tr><tr><td>Vref0</td><td>Vref0</td><td>User defined Vref (if 0, use initial bus V)</td><td>1</td><td></td><td></td></tr><tr><td>Iqfrz</td><td>Iqfrz</td><td>Hold Iqinj at the value for Thld (&gt;0) seconds following a Vdip</td><td>0</td><td></td><td></td></tr><tr><td>Thld</td><td>Thld</td><td>Time for which Iqinj is held. Hold at Iqinj if&gt;0; hold at State 1 if&lt;0</td><td>0</td><td>s</td><td></td></tr><tr><td>Thld2</td><td>Thld2</td><td>Time for which IPMAX is held after voltage dip ends</td><td>0</td><td>s</td><td></td></tr><tr><td>Tp</td><td>Tp</td><td>Filter time constant for Pe</td><td>0.020</td><td>s</td><td></td></tr></table>

continues on next page 


Table 22 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>QMax</td><td>Qmax</td><td>Upper limit for reactive power regulator</td><td>999</td><td></td><td></td></tr><tr><td>QMin</td><td>Qmin</td><td>Lower limit for reactive power regulator</td><td>-999</td><td></td><td></td></tr><tr><td>VMAX</td><td>Vmax</td><td>Upper limit for voltage control</td><td>999</td><td></td><td></td></tr><tr><td>VMIN</td><td>Vmin</td><td>Lower limit for voltage control</td><td>-999</td><td></td><td></td></tr><tr><td>Kqp</td><td>Kqp</td><td>Proportional gain for reactive power error</td><td>1</td><td></td><td></td></tr><tr><td>Kqi</td><td>Kqi</td><td>Integral gain for reactive power error</td><td>0.100</td><td></td><td></td></tr><tr><td>Kvp</td><td>Kvp</td><td>Proportional gain for voltage error</td><td>1</td><td></td><td></td></tr><tr><td>Kvi</td><td>Kvi</td><td>Integral gain for voltage error</td><td>0.100</td><td></td><td></td></tr><tr><td>Vref1</td><td>Vref1</td><td>Voltage ref. if VFLAG=0</td><td>1</td><td></td><td>non_zero</td></tr><tr><td>Tiq</td><td>Tiq</td><td>Filter time constant for Iq</td><td>0.020</td><td></td><td></td></tr><tr><td>dPmax</td><td>dPmax</td><td>Power reference max. ramp rate (&gt;0)</td><td>999</td><td></td><td></td></tr><tr><td>dPmin</td><td>dPin</td><td>Power reference min. ramp rate (&lt;0)</td><td>-999</td><td></td><td></td></tr><tr><td>PMAX</td><td>Pmax</td><td>Max. active power limit &gt; 0</td><td>999</td><td></td><td></td></tr><tr><td>PMIN</td><td>Pmin</td><td>Min. active power limit</td><td>0</td><td></td><td></td></tr><tr><td>Imax</td><td>Imax</td><td>Max. apparent current limit</td><td>999</td><td></td><td>current</td></tr><tr><td>Tpord</td><td>Tpord</td><td>Filter time constant for power setpoint</td><td>0.020</td><td></td><td></td></tr><tr><td>Vq1</td><td>Vq1</td><td>Reactive power V-I pair (point 1), voltage</td><td>0.200</td><td></td><td></td></tr><tr><td>Iq1</td><td>Iq1</td><td>Reactive power V-I pair (point 1), current</td><td>2</td><td></td><td>current</td></tr><tr><td>Vq2</td><td>Vq2</td><td>Reactive power V-I pair (point 2), voltage</td><td>0.400</td><td></td><td></td></tr><tr><td>Iq2</td><td>Iq2</td><td>Reactive power V-I pair (point 2), current</td><td>4</td><td></td><td>current</td></tr><tr><td>Vq3</td><td>Vq3</td><td>Reactive power V-I pair (point 3), voltage</td><td>0.800</td><td></td><td></td></tr><tr><td>Iq3</td><td>Iq3</td><td>Reactive power V-I pair (point 3), current</td><td>8</td><td></td><td>current</td></tr><tr><td>Vq4</td><td>Vq4</td><td>Reactive power V-I pair (point 4), voltage</td><td>1</td><td></td><td></td></tr><tr><td>Iq4</td><td>Iq4</td><td>Reactive power V-I pair (point 4), current</td><td>10</td><td></td><td>current</td></tr><tr><td>Vp1</td><td>Vp1</td><td>Active power V-I pair (point 1), voltage</td><td>0.200</td><td></td><td></td></tr><tr><td>Ip1</td><td>Ip1</td><td>Active power V-I pair (point 1), current</td><td>2</td><td></td><td>current</td></tr><tr><td>Vp2</td><td>Vp2</td><td>Active power V-I pair (point 2), voltage</td><td>0.400</td><td></td><td></td></tr><tr><td>Ip2</td><td>Ip2</td><td>Active power V-I pair (point 2), current</td><td>4</td><td></td><td>current</td></tr><tr><td>Vp3</td><td>Vp3</td><td>Active power V-I pair (point 3), voltage</td><td>0.800</td><td></td><td></td></tr><tr><td>Ip3</td><td>Ip3</td><td>Active power V-I pair (point 3), current</td><td>8</td><td></td><td>current</td></tr><tr><td>Vp4</td><td>Vp4</td><td>Active power V-I pair (point 4), voltage</td><td>1</td><td></td><td></td></tr><tr><td>Ip4</td><td>Ip4</td><td>Active power V-I pair (point 4), current</td><td>12</td><td></td><td>current</td></tr><tr><td>Kf</td><td>Kdf</td><td>gain for frequency deviation</td><td>0</td><td></td><td></td></tr><tr><td>Kdf</td><td>Kdf</td><td>gain for rate-of-change of frequency</td><td>0</td><td></td><td></td></tr><tr><td>busroc</td><td></td><td>Optional BusROCOF device idx</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>Retrieved bus idx</td><td></td><td></td><td></td></tr><tr><td>gen</td><td></td><td>Retrieved StaticGen idx</td><td></td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td></td><td>0</td><td></td><td></td></tr></table>


Variables


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>PIQ_xi</td><td>PIQξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>pfilt_y</td><td>pfilty</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>s5_y</td><td>s5y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>PIV_xi</td><td>PIVξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>Pord</td><td>Pord</td><td>AliasState</td><td>Alias of s5_y</td><td></td><td></td></tr><tr><td>vp</td><td>vp</td><td>Algeb</td><td>Sensed lower-capped voltage</td><td></td><td>v_str</td></tr><tr><td>pfaref</td><td>pfaref</td><td>Algeb</td><td>power factor angle ref</td><td>rad</td><td>v_str</td></tr><tr><td>Qref</td><td>Qref</td><td>Algeb</td><td>external Q ref</td><td>p.u.</td><td>v_str</td></tr><tr><td>Qcpf</td><td>Qcpf</td><td>Algeb</td><td>Q calculated from P and power factor</td><td>p.u.</td><td>v_str</td></tr><tr><td>PFsel</td><td>PFsel</td><td>Algeb</td><td>Output of PFFLAG selector</td><td></td><td>v_str</td></tr><tr><td>Qerr</td><td>Qerr</td><td>Algeb</td><td>Reactive power error</td><td></td><td>v_str</td></tr><tr><td>PIQ_ys</td><td>PIQys</td><td>Algeb</td><td>PI summation before limit</td><td></td><td>v_str</td></tr><tr><td>PIQ_y</td><td>PIQy</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>Vsel_x</td><td>Vselx</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>Vsel_y</td><td>Vsely</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>Verr</td><td>Verr</td><td>Algeb</td><td>Voltage error (Vref0)</td><td></td><td>v_str</td></tr><tr><td>dbV_y</td><td>dbVy</td><td>Algeb</td><td>Deadband type 1 output</td><td></td><td>v_str</td></tr><tr><td>Iqinj</td><td>Iqinj</td><td>Algeb</td><td>Additional Iq signal during under- or over-voltage</td><td></td><td>v_str</td></tr><tr><td>wg</td><td>wg</td><td>Algeb</td><td>Drive train generator speed</td><td></td><td>v_str</td></tr><tr><td>Pref</td><td>Pref</td><td>Algeb</td><td>external P ref</td><td>p.u.</td><td>v_str</td></tr><tr><td>Psel</td><td>Psel</td><td>Algeb</td><td>Output selection of PFLAG</td><td></td><td>v_str</td></tr><tr><td>VDL1_y</td><td>VDL1y</td><td>Algeb</td><td>Output of piecewise</td><td></td><td>v_str</td></tr><tr><td>VDL2_y</td><td>VDL2y</td><td>Algeb</td><td>Output of piecewise</td><td></td><td>v_str</td></tr><tr><td>Ipmax</td><td>Ipmax</td><td>Algeb</td><td>Upper limit on Ipcmd</td><td></td><td>v_str</td></tr><tr><td>Iqmax</td><td>Iqmax</td><td>Algeb</td><td>Upper limit on Iqcmd</td><td></td><td>v_str</td></tr><tr><td>PIV_ys</td><td>PIVys</td><td>Algeb</td><td>PI summation before limit</td><td></td><td>v_str</td></tr><tr><td>PIV_y</td><td>PIVy</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>Qsel</td><td>Qsel</td><td>Algeb</td><td>Selection output of QFLAG</td><td></td><td>v_str</td></tr><tr><td>IpHL_x</td><td>IpHLx</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>IpHL_y</td><td>IpHLy</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>IqHL_x</td><td>IqHLx</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>IqHL_y</td><td>IqHLy</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>d-axis bus voltage magnitude</td><td></td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td>Retrieved Pe of RenGen</td><td></td><td></td></tr><tr><td>Qe</td><td>Qe</td><td>ExtAlgeb</td><td>Retrieved Qe of RenGen</td><td></td><td></td></tr><tr><td>Ipcmd</td><td>Ipcmd</td><td>ExtAlgeb</td><td>Retrieved Ipcmd of RenGen</td><td></td><td></td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>ExtAlgeb</td><td>Retrieved Iqcmd of RenGen</td><td></td><td></td></tr><tr><td>df</td><td>df</td><td>ExtAlgeb</td><td>Bus frequency deviation</td><td></td><td></td></tr></table>


continues on next page 



Table 23 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>dfdt</td><td>dfdt</td><td>ExtAlgeb</td><td>Bus ROCOF</td><td>p.u.</td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>v</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>Pe</td></tr><tr><td>PIQ_xi</td><td>PIQξ</td><td>State</td><td>0.0</td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>PFselvp</td></tr><tr><td>pfilt_y</td><td>pfilty</td><td>State</td><td>Pref</td></tr><tr><td>s5_y</td><td>s5y</td><td>State</td><td>Psel</td></tr><tr><td>PIV_xi</td><td>PIVξ</td><td>State</td><td>-Iqcmd0SWQs1</td></tr><tr><td>Pord</td><td>Pord</td><td>AliasState</td><td></td></tr><tr><td>vp</td><td>vp</td><td>Algeb</td><td>VLower zi v + 0.01VLower_zl</td></tr><tr><td>pfaref</td><td>pfaref</td><td>Algeb</td><td>pfaref0</td></tr><tr><td>Qref</td><td>Qref</td><td>Algeb</td><td>-qref0</td></tr><tr><td>Qcpf</td><td>Qcpf</td><td>Algeb</td><td>q0</td></tr><tr><td>PFsel</td><td>PFsel</td><td>Algeb</td><td>Qcpf SWPF s1 + Qref SWPF s0</td></tr><tr><td>Qerr</td><td>Qerr</td><td>Algeb</td><td>PFlim zi PFsel + PFlimzl QMin + PFlimzu QMax - Qe</td></tr><tr><td>PIQ_ys</td><td>PIQys</td><td>Algeb</td><td>KqpQerr SWVs1</td></tr><tr><td>PIQ_y</td><td>PIQy</td><td>Algeb</td><td>PIQlimzi PIQys + PIQlimzl VMIN + PIQlimzu VMAX</td></tr><tr><td>Vsel_x</td><td>Vselx</td><td>Algeb</td><td>PIQySWVs1 + SWVs0 (Qcpf SWPF s1 + Qref SWPF s0 + Vref1)</td></tr><tr><td>Vsel_y</td><td>Vsely</td><td>Algeb</td><td>VMAXVselimzu + VMINVselimzl + Vselimzi Vselx</td></tr><tr><td>Verr</td><td>Verr</td><td>Algeb</td><td>Vref0 - s0y</td></tr><tr><td>dbV_y</td><td>dbVy</td><td>Algeb</td><td>1.0dbVdbzl (Verr - dbd1) + 1.0dbVdbzu (Verr - dbd2)</td></tr><tr><td>Iqinj</td><td>Iqinj</td><td>Algeb</td><td>KqvVoltdipdbVy + fThld (1 - Voltdip) (IqfrzpThld + KqvdbVynThld)</td></tr><tr><td>wg</td><td>wg</td><td>Algeb</td><td>1.0</td></tr><tr><td>Pref</td><td>Pref</td><td>Algeb</td><td>p0wg</td></tr><tr><td>Psel</td><td>Psel</td><td>Algeb</td><td>SWPs0pfilty + SWPs1pfiltywg</td></tr><tr><td>VDL1_y</td><td>VDL1y</td><td>Algeb</td><td>FixPiecewise ((Iq1, Vq1 ≥ s0y), (Iq1 + kVq12 (-Vq1 + s0y), Vq2 ≥ s0y), (Iq2 + kVq22), VDLMZ)</td></tr><tr><td>VDL2_y</td><td>VDL2y</td><td>Algeb</td><td>FixPiecewise ((Ip1, Vp1 ≥ s0y), (Ip1 + kVp12 (-Vp1 + s0y), Vp2 ≥ s0y), (Ip2 + kVp22), VDLMZ)</td></tr><tr><td>Ipmax</td><td>Ipmax</td><td>Algeb</td><td>(1 - fThld2) (√Ipmax2sq0SWPQs0 + SWPQs1 (zVDL2 (Imaxr (1 - VDL2c))</td></tr><tr><td>Iqmax</td><td>Iqmax</td><td>Algeb</td><td>√Iqmax2sq0SWPQs1 + SWPQs0 (zVDL1 (Imaxr (1 - VDL1c) + VDL1yVDL2c)</td></tr><tr><td>PIV_ys</td><td>PIVys</td><td>Algeb</td><td>-Iqcmd0SWQs1 + KvpsWQs1 (-SWVss0s0y + Vsely)</td></tr><tr><td>PIV_y</td><td>PIVy</td><td>Algeb</td><td>IqmaxPIVlimzu + IqminPIVlimzl + PIVlimziPIVys</td></tr><tr><td>Qsel</td><td>Qsel</td><td>Algeb</td><td>PIVswQs1 + SWQs0s4y</td></tr><tr><td>IpHL_x</td><td>IpHLx</td><td>Algeb</td><td>s5yvp</td></tr><tr><td>IpHL_y</td><td>IpHLy</td><td>Algeb</td><td>IphLLimzi IpHLx + IpHLLimzl Ipmin + IpHLLimzu Ipmax</td></tr><tr><td>IqHL_x</td><td>IqHLx</td><td>Algeb</td><td>Iqinj + Qsel</td></tr><tr><td>IqHL_y</td><td>IqHLy</td><td>Algeb</td><td>IqHLLimzi IqHLx + IqHLLimzl Iqmin + IqHLLimzu Iqmax</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr></table>


Table 24 – continued from previo


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td></td></tr><tr><td>Qe</td><td>Qe</td><td>ExtAlgeb</td><td></td></tr><tr><td>Ipcm</td><td>Ipcm</td><td>ExtAlgeb</td><td></td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>ExtAlgeb</td><td></td></tr><tr><td>df</td><td>df</td><td>ExtAlgeb</td><td></td></tr><tr><td>dfdt</td><td>dfdt</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>-s0y + v</td><td>Trv</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>Pe - S1y</td><td>Tp</td></tr><tr><td>PIQ_xi</td><td>PIQξ</td><td>State</td><td>Kqi (1 - Volt_dip) (2PIQy - 2PIQys + QerrSWVs1)</td><td></td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>(1 - Volt_dip) (PFsel / vp - s4y)</td><td>Tiq</td></tr><tr><td>pfilt_y</td><td>pfilty</td><td>State</td><td>Pref - pfilty</td><td>0.02</td></tr><tr><td>s5_y</td><td>s5y</td><td>State</td><td>(1 - Volt_dip) (Psel - s5y)</td><td>Tpord</td></tr><tr><td>PIV_xi</td><td>PIVξ</td><td>State</td><td>Kvi (1 - Volt_dip) (2PIVy - 2PIVys + SWQs1 (-SWVs0s0y +</td><td></td></tr><tr><td>Pord</td><td>Pord</td><td>AliasState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>vp</td><td>vp</td><td>Algeb</td><td>\( VLower_{zi}v + 0.01VLower_{zl} - vp \)</td></tr><tr><td>pfaref</td><td>pfaref</td><td>Algeb</td><td>\( -pfaref + pfaref_0 \)</td></tr><tr><td>Qref</td><td>Qref</td><td>Algeb</td><td>\( -Qref - qref_0 \)</td></tr><tr><td>Qcpf</td><td>Qcpf</td><td>Algeb</td><td>\( (1 - zp_{z1}) (-Qcpf + S_{1y} \tan (pfaref)) \)</td></tr><tr><td>PFsel</td><td>PFsel</td><td>Algeb</td><td>\( -PFsel + QcpfSWPF_{s1} + QrefSWPF_{s0} \)</td></tr><tr><td>Qerr</td><td>Qerr</td><td>Algeb</td><td>\( PFlim_{zi}PFsel + PFlim_{zl}QMin + PFlim_{zu}QMax - Qe - Qerr \)</td></tr><tr><td>PIQ_ys</td><td>PIQ_ys</td><td>Algeb</td><td>\( (1 - Vol_{dip})(KqpQerrSWV_{s1} + PIQ_{\xi} - PIQ_{ys}) \)</td></tr><tr><td>PIQ_y</td><td>PIQ_y</td><td>Algeb</td><td>\( (1 - Vol_{dip})(PIQ_{limzi}PIQ_{ys} + PIQ_{limzl}VMIN + PIQ_{limzu}VMAX - PIQ_y) \)</td></tr><tr><td>Vsel_x</td><td>Vsel_x</td><td>Algeb</td><td>\( PIQ_ySWV_{s1} + SWV_{s0}(QcpfSWPF_{s1} + QrefSWPF_{s0} + Vref_1) - Vsel_x \)</td></tr><tr><td>Vsel_y</td><td>Vsel_y</td><td>Algeb</td><td>\( VMAXVsel_{limzu} + VMINVSel_{limzl} + Vsel_{limzi}Vsel_x - Vsel_y \)</td></tr><tr><td>Verr</td><td>Verr</td><td>Algeb</td><td>\( -Verr + Vref_0 - s_{0y} \)</td></tr><tr><td>dbV_y</td><td>\( dbV_y \)</td><td>Algeb</td><td>\( 1.0dbV_{dbzl}(Verr - db_1) + 1.0dbV_{dbzu}(Verr - db_2) - dbV_y \)</td></tr><tr><td>Iqinj</td><td>Iqinj</td><td>Algeb</td><td>\( -Iqinj + KqvVol_{dip}dbV_y + fThld(1 - Vol_{dip})(IqfrzpThld + KqvdbVynThld) \)</td></tr><tr><td>wg</td><td>wg</td><td>Algeb</td><td>1.0 - wg</td></tr></table>


Table 25 – continued from


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>Pref</td><td>Pref</td><td>Algeb</td><td>-Kdfdfdt - Kfdf - Pref + p0/wg</td></tr><tr><td>Psel</td><td>Psel</td><td>Algeb</td><td>-Psel + SWPs0pfilty + SWPs1pfiltywg</td></tr><tr><td>VDL1_y</td><td>VDL1y</td><td>Algeb</td><td>-VDL1y + FixPiecewise((Iq1, Vq1 ≥ s0y), (Iq1 + kVq12(-Vq1 + s0y), Vq2 ≥ s0y)</td></tr><tr><td>VDL2_y</td><td>VDL2y</td><td>Algeb</td><td>-VDL2y + FixPiecewise((Ip1, Vp1 ≥ s0y), (Ip1 + kVp12(-Vp1 + s0y), Vp2 ≥ s0y)</td></tr><tr><td>Ipmax</td><td>Ipmax</td><td>Algeb</td><td>-Ipmax + IpmaxhfThld2 + (1 - fThld2) (√Ipmax2sqSWPQs0 + SWPQs1(zVLDL1(Imaxr(1 - VLDL1c) + VLDL1c))</td></tr><tr><td>Iqmax</td><td>Iqmax</td><td>Algeb</td><td>-Iqmax + √Iqmax2sqSWPQs1 + SWPQs0(zVLDL1(Imaxr(1 - VLDL1c) + VLDL1c))</td></tr><tr><td>PIV_ys</td><td>PIVys</td><td>Algeb</td><td>(1 - Voltdip)(KvpSWQs1(-SWVs0s0y + Vsel) + PIVξ - PIVys)</td></tr><tr><td>PIV_y</td><td>PIVy</td><td>Algeb</td><td>(1 - Voltdip)(IqmaxPIVlimzu + IqminPIVlimzl + PIVlimziPIVys - PIVy)</td></tr><tr><td>Qsel</td><td>Qsel</td><td>Algeb</td><td>PIVySWQs1 - Qsel + SWQs0s4y</td></tr><tr><td>IpHL_x</td><td>IpHLx</td><td>Algeb</td><td>-IpHLx + s5y/vp</td></tr><tr><td>IpHL_y</td><td>IpHLy</td><td>Algeb</td><td>IpHLlimziIpHLx + IpHLlimzlIpmin + IpHLlimzuIpmax - IpHLy</td></tr><tr><td>IqHL_x</td><td>IqHLx</td><td>Algeb</td><td>-IqHLx + Iqinj + Qsel</td></tr><tr><td>IqHL_y</td><td>IqHLy</td><td>Algeb</td><td>IqHLlimziIqHLx + IqHLlimzlIqmin + IqHLlimzuIqmax - IqHLy</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>Qe</td><td>Qe</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>Ipcmd</td><td>Ipcmd</td><td>ExtAlgeb</td><td>IpHLy - Ipcmd0</td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>ExtAlgeb</td><td>-IqHLy - Iqcmd0</td></tr><tr><td>df</td><td>df</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>dfdt</td><td>dfdt</td><td>ExtAlgeb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>Ipcmd0</td><td>Ipcmd0</td><td>p0v</td><td>ConstServ</td></tr><tr><td>Iqcmd0</td><td>Iqcmd0</td><td>-q0v</td><td>ConstServ</td></tr><tr><td>pfaref0</td><td>Φref0</td><td>atan2(q0,p0)</td><td>ConstServ</td></tr><tr><td>Volt_dip</td><td>zVdip</td><td>1 - Vcmpzi</td><td>VarService</td></tr><tr><td>qref0</td><td>qref0</td><td>Iqcmd0SWQs0(VLowerziv + 0.01VLowerzl) + SWQs1(-Vref1 + v)</td><td>ConstServ</td></tr><tr><td>PIQ_flag</td><td>zPIQ</td><td>0</td><td>EventFlag</td></tr><tr><td>s4_flag</td><td>zS4</td><td>0</td><td>EventFlag</td></tr><tr><td>pThld</td><td>pThld</td><td>Indicator (Thld &gt; 0)</td><td>ConstServ</td></tr><tr><td>nThld</td><td>nThld</td><td>Indicator (Thld &lt; 0)</td><td>ConstServ</td></tr><tr><td>Thld_abs</td><td>|Thld|</td><td>|Thld|</td><td>ConstServ</td></tr><tr><td>fThld</td><td>fThld</td><td>0</td><td>ExtendedE</td></tr><tr><td>s5_flag</td><td>zS5</td><td>0</td><td>EventFlag</td></tr><tr><td>kVq12</td><td>kVq12</td><td>-Iq1+Iq2-Vq1+Vq2</td><td>ConstServ</td></tr><tr><td>kVq23</td><td>kVq23</td><td>-Iq2+Iq3-Vq2+Vq3</td><td>ConstServ</td></tr><tr><td>kVq34</td><td>kVq34</td><td>-Iq3+Iq4-Vq3+Vq4</td><td>ConstServ</td></tr></table>

continues on next p 


Table 26 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>zVDL1</td><td>zVDL1</td><td>Iq1≤Iq2∧Iq2≤Iq3∧Iq3≤Iq4∧Vq1≤Vq2∧Vq2≤Vq3∧Vq3≤Vq4</td><td>ConstServ</td></tr><tr><td>kVp12</td><td>kVp12</td><td>-Ip1+Ip2/Vp1+Vp2</td><td>ConstServ</td></tr><tr><td>kVp23</td><td>kVp23</td><td>-Ip2+Ip3/Vp2+Vp3</td><td>ConstServ</td></tr><tr><td>kVp34</td><td>kVp34</td><td>-Ip3+Ip4/Vp3+Vp4</td><td>ConstServ</td></tr><tr><td>zVDL2</td><td>zVDL2</td><td>Iq1≤Iq2∧Iq2≤Iq3∧Iq3≤Iq4∧Vp1≤Vp2∧Vp2≤Vp3∧Vp3≤Vp4</td><td>ConstServ</td></tr><tr><td>fThld2</td><td>fThld2</td><td>0</td><td>ExtendedE</td></tr><tr><td>VDL1c</td><td>VDL1c</td><td>VDL1y&lt;Imaxr</td><td>VarService</td></tr><tr><td>VDL2c</td><td>VDL2c</td><td>VDL2y&lt;Imaxr</td><td>VarService</td></tr><tr><td>Ipmax2sq0</td><td>I2pmax20,nn</td><td>FixPiecewise((0, Imax2−Iqcmd20≤0), (Imax2−Iqcmd20, True))</td><td>ConstServ</td></tr><tr><td>Ipmax2sq</td><td>I2pmax2</td><td>FixPiecewise((0, Imax2−IqHL2≤0), (Imax2−IqHL2, True))</td><td>VarService</td></tr><tr><td>Ipmaxh</td><td>Ipmaxh</td><td>0</td><td>VarHold</td></tr><tr><td>Iqmax2sq0</td><td>I2qmax,nn</td><td>FixPiecewise((0, Imax2−Ipcmd20≤0), (Imax2−Ipcmd20, True))</td><td>ConstServ</td></tr><tr><td>Iqmax2sq</td><td>I2qmax2</td><td>FixPiecewise((0, Imax2−IpHL2≤0), (Imax2−IpHL2, True))</td><td>VarService</td></tr><tr><td>Ipmin</td><td>Ipmin</td><td>0.0</td><td>ConstServ</td></tr><tr><td>PIV_flag</td><td>flagPIV</td><td>0</td><td>EventFlag</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>SWPF</td><td>SWPF</td><td>Switcher</td><td></td></tr><tr><td>SWV</td><td>SWV</td><td>Switcher</td><td></td></tr><tr><td>SWQ</td><td>SWV</td><td>Switcher</td><td></td></tr><tr><td>SWP</td><td>SWP</td><td>Switcher</td><td></td></tr><tr><td>SWPQ</td><td>SWPQ</td><td>Switcher</td><td></td></tr><tr><td>zp</td><td>zp</td><td>IsEqual</td><td></td></tr><tr><td>Vcmp</td><td>Vcmp</td><td>Limiter</td><td>Voltage dip comparator</td></tr><tr><td>VLower</td><td>VLower</td><td>Limiter</td><td>Limiter for lower voltage cap</td></tr><tr><td>PFlim</td><td>PFlim</td><td>Limiter</td><td></td></tr><tr><td>PIQLim</td><td>limPIQ</td><td>HardLimiter</td><td></td></tr><tr><td>VselLim</td><td>limVsel</td><td>HardLimiter</td><td></td></tr><tr><td>dbV_db</td><td>dbdbV</td><td>DeadBand</td><td></td></tr><tr><td>pfiltLim</td><td>limPfilt</td><td>RateLimiter</td><td>Rate limiter in Lag</td></tr><tr><td>s5Lim</td><td>lims5</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>PIVLim</td><td>limPIV</td><td>HardLimiter</td><td></td></tr><tr><td>IpHLLim</td><td>limIpHL</td><td>HardLimiter</td><td></td></tr><tr><td>IqHLLim</td><td>limIqHL</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>s0</td><td>s0</td><td>Lag</td><td>Voltage filter</td></tr><tr><td>S1</td><td>S1</td><td>Lag</td><td>Pe filter</td></tr><tr><td>PIQ</td><td>PIQ</td><td>PITrackAWFreeze</td><td></td></tr><tr><td>Vsel</td><td>Vsel</td><td>GainLimiter</td><td>Selection output of VFLAG</td></tr><tr><td>s4</td><td>s4</td><td>LagFreeze</td><td>Filter for calculated voltage with freeze</td></tr><tr><td>dbV</td><td>dbV</td><td>DeadBand1</td><td>Deadband for voltage error (ref0)</td></tr><tr><td>pfilt</td><td>Pfilt</td><td>LagRate</td><td>Active power filter with rate limits</td></tr><tr><td>s5</td><td>s5</td><td>LagAWFreeze</td><td></td></tr><tr><td>VDL1</td><td>VDL1</td><td>Piecewise</td><td>Piecewise linear characteristics of Vq-Iq</td></tr><tr><td>VDL2</td><td>VDL2</td><td>Piecewise</td><td>Piecewise linear characteristics of Vp-Ip</td></tr><tr><td>PIV</td><td>PIV</td><td>PITrackAWFreeze</td><td></td></tr><tr><td>IpHL</td><td>IpHL</td><td>GainLimiter</td><td></td></tr><tr><td>IqHL</td><td>IqHL</td><td>GainLimiter</td><td></td></tr></table>

Config Fields in [REECA1E] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>kqs</td><td>Kqs</td><td>2</td><td>Q PI controller tracking gain</td><td></td></tr><tr><td>kvs</td><td>Kvs</td><td>2</td><td>Voltage PI controller tracking gain</td><td></td></tr><tr><td>tpfilt</td><td>Tpfilt</td><td>0.020</td><td>Time const. for Pref filter</td><td></td></tr></table>

# 5.23.3 REECA1G

REECA1G is a variant of REECA1E. 

REECA1G uses speed from synchronous generators. 

The application of this model is limited because it is uncommon to connect a SynGen on the same bus as a RenGen. 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>reg</td><td></td><td>Renewable generator idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>busr</td><td></td><td>Optional remote bus for voltage control</td><td></td><td></td><td></td></tr><tr><td>PFFLAG</td><td></td><td>Power factor control flag; 1-PF control, 0-Q control</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>VFLAG</td><td></td><td>Voltage control flag; 1-Q control, 0-V control</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>QFLAG</td><td></td><td>Q control flag; 1-V or Q control, 0-const. PF or Q</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>PFLAG</td><td></td><td>P speed-dependency flag; 1-has speed dep., 0-no dep.</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>PQFLAG</td><td></td><td>P/Q priority flag for I limit; 0-Q priority, 1-P priority</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>Vdip</td><td>Vdip</td><td>Low V threshold to activate Iqinj logic</td><td>0.800</td><td>p.u.</td><td></td></tr><tr><td>Vup</td><td>Vup</td><td>V threshold above which to activate Iqinj logic</td><td>1.200</td><td>p.u.</td><td></td></tr><tr><td>Trv</td><td>Trv</td><td>Voltage filter time constant</td><td>0.020</td><td></td><td></td></tr><tr><td>dbd1</td><td>dbd1</td><td>Lower bound of the voltage deadband (&lt;=0)</td><td>-0.020</td><td></td><td></td></tr><tr><td>dbd2</td><td>dbd2</td><td>Upper bound of the voltage deadband (&gt;=0)</td><td>0.020</td><td></td><td></td></tr><tr><td>Kqv</td><td>Kqv</td><td>Gain to compute Iqinj from V error (caution!!)</td><td>1</td><td></td><td></td></tr><tr><td>Iqh1</td><td>Iqh1</td><td>Upper limit on Iqinj</td><td>999</td><td></td><td></td></tr><tr><td>Iql1</td><td>Iql1</td><td>Lower limit on Iqinj</td><td>-999</td><td></td><td></td></tr><tr><td>Vref0</td><td>Vref0</td><td>User defined Vref (if 0, use initial bus V)</td><td>1</td><td></td><td></td></tr><tr><td>Iqfrz</td><td>Iqfrz</td><td>Hold Iqinj at the value for Thld (&gt;0) seconds following a Vdip</td><td>0</td><td></td><td></td></tr><tr><td>Thld</td><td>Thld</td><td>Time for which Iqinj is held. Hold at Iqinj if&gt;0; hold at State 1 if&lt;0</td><td>0</td><td>s</td><td></td></tr><tr><td>Thld2</td><td>Thld2</td><td>Time for which IPMAX is held after voltage dip ends</td><td>0</td><td>s</td><td></td></tr><tr><td>Tp</td><td>Tp</td><td>Filter time constant for Pe</td><td>0.020</td><td>s</td><td></td></tr><tr><td>QMax</td><td>Qmax</td><td>Upper limit for reactive power regulator</td><td>999</td><td></td><td></td></tr><tr><td>QMin</td><td>Qmin</td><td>Lower limit for reactive power regulator</td><td>-999</td><td></td><td></td></tr><tr><td>VMAX</td><td>Vmax</td><td>Upper limit for voltage control</td><td>999</td><td></td><td></td></tr><tr><td>VMIN</td><td>Vmin</td><td>Lower limit for voltage control</td><td>-999</td><td></td><td></td></tr><tr><td>Kqp</td><td>Kqp</td><td>Proportional gain for reactive power error</td><td>1</td><td></td><td></td></tr><tr><td>Kqi</td><td>Kqi</td><td>Integral gain for reactive power error</td><td>0.100</td><td></td><td></td></tr><tr><td>Kvp</td><td>Kvp</td><td>Proportional gain for voltage error</td><td>1</td><td></td><td></td></tr><tr><td>Kvi</td><td>Kvi</td><td>Integral gain for voltage error</td><td>0.100</td><td></td><td></td></tr><tr><td>Vref1</td><td>Vref1</td><td>Voltage ref. if VFLAG=0</td><td>1</td><td></td><td>non_zero</td></tr><tr><td>Tiq</td><td>Tiq</td><td>Filter time constant for Iq</td><td>0.020</td><td></td><td></td></tr><tr><td>dPmax</td><td>dPmax</td><td>Power reference max. ramp rate (&gt;0)</td><td>999</td><td></td><td></td></tr><tr><td>dPmin</td><td>dPin</td><td>Power reference min. ramp rate (&lt;0)</td><td>-999</td><td></td><td></td></tr><tr><td>PMAX</td><td>Pmax</td><td>Max. active power limit &gt;0</td><td>999</td><td></td><td></td></tr><tr><td>PMIN</td><td>Pmin</td><td>Min. active power limit</td><td>0</td><td></td><td></td></tr><tr><td>Imax</td><td>Imax</td><td>Max. apparent current limit</td><td>999</td><td></td><td>current</td></tr><tr><td>Tpord</td><td>Tpord</td><td>Filter time constant for power setpoint</td><td>0.020</td><td></td><td></td></tr><tr><td>Vq1</td><td>Vq1</td><td>Reactive power V-I pair (point 1), voltage</td><td>0.200</td><td></td><td></td></tr><tr><td>Iq1</td><td>Iq1</td><td>Reactive power V-I pair (point 1), current</td><td>2</td><td></td><td>current</td></tr><tr><td>Vq2</td><td>Vq2</td><td>Reactive power V-I pair (point 2), voltage</td><td>0.400</td><td></td><td></td></tr></table>

continues on next page 


Table 27 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>Iq2</td><td>\( I_{q2} \)</td><td>Reactive power V-I pair (point 2), current</td><td>4</td><td></td><td>current</td></tr><tr><td>Vq3</td><td>\( V_{q3} \)</td><td>Reactive power V-I pair (point 3), voltage</td><td>0.800</td><td></td><td></td></tr><tr><td>Iq3</td><td>\( I_{q3} \)</td><td>Reactive power V-I pair (point 3), current</td><td>8</td><td></td><td>current</td></tr><tr><td>Vq4</td><td>\( V_{q4} \)</td><td>Reactive power V-I pair (point 4), voltage</td><td>1</td><td></td><td></td></tr><tr><td>Iq4</td><td>\( I_{q4} \)</td><td>Reactive power V-I pair (point 4), current</td><td>10</td><td></td><td>current</td></tr><tr><td>Vp1</td><td>\( V_{p1} \)</td><td>Active power V-I pair (point 1), voltage</td><td>0.200</td><td></td><td></td></tr><tr><td>Ip1</td><td>\( I_{p1} \)</td><td>Active power V-I pair (point 1), current</td><td>2</td><td></td><td>current</td></tr><tr><td>Vp2</td><td>\( V_{p2} \)</td><td>Active power V-I pair (point 2), voltage</td><td>0.400</td><td></td><td></td></tr><tr><td>Ip2</td><td>\( I_{p2} \)</td><td>Active power V-I pair (point 2), current</td><td>4</td><td></td><td>current</td></tr><tr><td>Vp3</td><td>\( V_{p3} \)</td><td>Active power V-I pair (point 3), voltage</td><td>0.800</td><td></td><td></td></tr><tr><td>Ip3</td><td>\( I_{p3} \)</td><td>Active power V-I pair (point 3), current</td><td>8</td><td></td><td>current</td></tr><tr><td>Vp4</td><td>\( V_{p4} \)</td><td>Active power V-I pair (point 4), voltage</td><td>1</td><td></td><td></td></tr><tr><td>Ip4</td><td>\( I_{p4} \)</td><td>Active power V-I pair (point 4), current</td><td>12</td><td></td><td>current</td></tr><tr><td>Kf</td><td>\( K_{df} \)</td><td>gain for frequency deviation</td><td>0</td><td></td><td></td></tr><tr><td>sg</td><td></td><td>synchronous gen idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>bus</td><td></td><td>Retrieved bus idx</td><td></td><td></td><td></td></tr><tr><td>gen</td><td></td><td>Retrieved StaticGen idx</td><td></td><td></td><td></td></tr><tr><td>Sn</td><td>\( S_{n} \)</td><td></td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>PIQ_xi</td><td>PIQξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>pfilt_y</td><td>pfilty</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>s5_y</td><td>s5y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>PIV_xi</td><td>PIVξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>Pord</td><td>Pord</td><td>AliasState</td><td>Alias of s5_y</td><td></td><td></td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>generator speed</td><td>pu</td><td></td></tr><tr><td>vp</td><td>vp</td><td>Algeb</td><td>Sensed lower-capped voltage</td><td></td><td>v_str</td></tr><tr><td>pfaref</td><td>pfaref</td><td>Algeb</td><td>power factor angle ref</td><td>rad</td><td>v_str</td></tr><tr><td>Qref</td><td>Qref</td><td>Algeb</td><td>external Q ref</td><td>p.u.</td><td>v_str</td></tr><tr><td>Qcpf</td><td>Qcpf</td><td>Algeb</td><td>Q calculated from P and power factor</td><td>p.u.</td><td>v_str</td></tr><tr><td>PFsel</td><td>PFsel</td><td>Algeb</td><td>Output of PFFLAG selector</td><td></td><td>v_str</td></tr><tr><td>Qerr</td><td>Qerr</td><td>Algeb</td><td>Reactive power error</td><td></td><td>v_str</td></tr><tr><td>PIQ_ys</td><td>PIQys</td><td>Algeb</td><td>PI summation before limit</td><td></td><td>v_str</td></tr><tr><td>PIQ_y</td><td>PIQy</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>Vsel_x</td><td>Vselx</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>Vsel_y</td><td>Vsely</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr></table>


continues on next page 



Table 28 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>Verr</td><td>Verr</td><td>Algeb</td><td>Voltage error (Vref0)</td><td></td><td>v_str</td></tr><tr><td>dbV_y</td><td>dbVy</td><td>Algeb</td><td>Deadband type 1 output</td><td></td><td>v_str</td></tr><tr><td>Iqinj</td><td>Iqinj</td><td>Algeb</td><td>Additional Iq signal during under- or over-voltage</td><td></td><td>v_str</td></tr><tr><td>wg</td><td>wg</td><td>Algeb</td><td>Drive train generator speed</td><td></td><td>v_str</td></tr><tr><td>Pref</td><td>Pref</td><td>Algeb</td><td>external P ref</td><td>p.u.</td><td>v_str</td></tr><tr><td>Psel</td><td>Psel</td><td>Algeb</td><td>Output selection of PFLAG</td><td></td><td>v_str</td></tr><tr><td>VDL1_y</td><td>VDL1y</td><td>Algeb</td><td>Output of piecewise</td><td></td><td>v_str</td></tr><tr><td>VDL2_y</td><td>VDL2y</td><td>Algeb</td><td>Output of piecewise</td><td></td><td>v_str</td></tr><tr><td>Ipmax</td><td>Ipmax</td><td>Algeb</td><td>Upper limit on Ipcmd</td><td></td><td>v_str</td></tr><tr><td>Iqmax</td><td>Iqmax</td><td>Algeb</td><td>Upper limit on Iqcmd</td><td></td><td>v_str</td></tr><tr><td>PIV_ys</td><td>PIVys</td><td>Algeb</td><td>PI summation before limit</td><td></td><td>v_str</td></tr><tr><td>PIV_y</td><td>PIVy</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>Qsel</td><td>Qsel</td><td>Algeb</td><td>Selection output of QFLAG</td><td></td><td>v_str</td></tr><tr><td>IpHL_x</td><td>IpHLx</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>IpHL_y</td><td>IpHLy</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>IqHL_x</td><td>IqHLx</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>IqHL_y</td><td>IqHLy</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>d-axis bus voltage magnitude</td><td></td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td>Retrieved Pe of RenGen</td><td></td><td></td></tr><tr><td>Qe</td><td>Qe</td><td>ExtAlgeb</td><td>Retrieved Qe of RenGen</td><td></td><td></td></tr><tr><td>Ipcmd</td><td>Ipcmd</td><td>ExtAlgeb</td><td>Retrieved Ipcmd of RenGen</td><td></td><td></td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>ExtAlgeb</td><td>Retrieved Iqcmd of RenGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>v</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>Pe</td></tr><tr><td>PIQ(xi</td><td>PIQξ</td><td>State</td><td>0.0</td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>PFsel vp</td></tr><tr><td>pfilt_y</td><td>pfilty</td><td>State</td><td>Pref</td></tr><tr><td>s5_y</td><td>s5y</td><td>State</td><td>Psel</td></tr><tr><td>PIV(xi</td><td>PIVξ</td><td>State</td><td>-Iqcmd0SWQs1</td></tr><tr><td>Pord omega</td><td>Pord ω</td><td>AliasState ExtState</td><td></td></tr><tr><td>vp</td><td>vp</td><td>Algeb</td><td>VLower_ziv + 0.01VLower_zl</td></tr><tr><td>pfaref</td><td>pfaref</td><td>Algeb</td><td>pfaref0</td></tr><tr><td>Qref</td><td>Qref</td><td>Algeb</td><td>-qref0</td></tr><tr><td>Qcpf</td><td>Qcpf</td><td>Algeb</td><td>q0</td></tr><tr><td>PFsel</td><td>PFsel</td><td>Algeb</td><td>QcpfSWPFsl + QrefSWPFso</td></tr></table>


Table 29 – continued from previo


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>Qerr</td><td>Qerr</td><td>Algeb</td><td>PFlimziPFsel + PFlimzlQMin + PFlimzuQMax - Qe</td></tr><tr><td>PIQ_ys</td><td>PIQ_ys</td><td>Algeb</td><td>KqpQerrSWVs1</td></tr><tr><td>PIQ_y</td><td>PIQ_y</td><td>Algeb</td><td>PIQlimziPIQys + PIQlimzlVMIN + PIQlimzuVMAX</td></tr><tr><td>Vsel_x</td><td>Vsel_x</td><td>Algeb</td><td>PIQySWVs1 + SWVs0 (QcpfSWPFsl + QrefSWPFs0 + Vref1)</td></tr><tr><td>Vsel_y</td><td>Vsel_y</td><td>Algeb</td><td>VMAXVsellimzu + VMINVsellimzl + VsellimziVselx</td></tr><tr><td>Verr</td><td>Verr</td><td>Algeb</td><td>Vref0 - s0y</td></tr><tr><td>dbV_y</td><td>dbVy</td><td>Algeb</td><td>1.0dbVdbzl (Verr - dbd1) + 1.0dbVdbzu (Verr - dbd2)</td></tr><tr><td>Iqinj</td><td>Iqinj</td><td>Algeb</td><td>KqvVoltdipdbVy + fThld (1 - Voltdip) (IqfrzpThld + KqvdbVynThld)</td></tr><tr><td>wg</td><td>wg</td><td>Algeb</td><td>1.0</td></tr><tr><td>Pref</td><td>Pref</td><td>Algeb</td><td>p0/wg</td></tr><tr><td>Psel</td><td>Psel</td><td>Algeb</td><td>SWPs0pfilty + SWPs1pfiltywg</td></tr><tr><td>VDL1_y</td><td>VDL1y</td><td>Algeb</td><td>FixPiecewise ((Iq1, Vq1 ≥ s0y), (Iq1 + kVq12 (-Vq1 + s0y), Vq2 ≥ s0y), (Iq2 + kVq22)</td></tr><tr><td>VDL2_y</td><td>VDL2y</td><td>Algeb</td><td>FixPiecewise ((Ip1, Vp1 ≥ s0y), (Ip1 + kVp12 (-Vp1 + s0y), Vp2 ≥ s0y), (Ip2 + kVp22)</td></tr><tr><td>Ipmax</td><td>Ipmax</td><td>Algeb</td><td>(1 - fThld2) (√Ipmax2sq0SWPQs0 + SWPQs1 (zVDL2 (Imaxr (1 - VDL2c))</td></tr><tr><td>Iqmax</td><td>Iqmax</td><td>Algeb</td><td>√Iqmax2sq0SWPQs1 + SWPQs0 (zVDL1 (Imaxr (1 - VDL1c) + VDL1yVDL1)</td></tr><tr><td>PIV_ys</td><td>PIVys</td><td>Algeb</td><td>-Iqcmd0SWQs1 + KvpSWQs1 (-SWVso0s0y + Vsely)</td></tr><tr><td>PIV_y</td><td>PIVy</td><td>Algeb</td><td>IqmaxPIVlimzu + IqminPIVlimzl + PIVlimziPIVys</td></tr><tr><td>Qsel</td><td>Qsel</td><td>Algeb</td><td>PIVySWQs1 + SWQs0s4y</td></tr><tr><td>IpHL_x</td><td>IpHLx</td><td>Algeb</td><td>s5y/vp</td></tr><tr><td>IpHL_y</td><td>IpHLy</td><td>Algeb</td><td>IpHLlimziIpHLx + IpHLlimzlIpmin + IpHLlimzuIpmax</td></tr><tr><td>IqHL_x</td><td>IqHLx</td><td>Algeb</td><td>Iqinj + Qsel</td></tr><tr><td>IqHL_y</td><td>IqHLy</td><td>Algeb</td><td>IqHLlimziIqHLx + IqHLlimzlIqmin + IqHLlimzuIqmax</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td></td></tr><tr><td>Qe</td><td>Qe</td><td>ExtAlgeb</td><td></td></tr><tr><td>Ipcmd</td><td>Ipcmd</td><td>ExtAlgeb</td><td></td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>ExtAlgeb</td><td></td></tr></table>


Differential Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>-s0y + v</td><td>Trv</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>Pe - S1y</td><td>Tp</td></tr><tr><td>PIQ_xi</td><td>PIQξ</td><td>State</td><td>Kqi (1 - Volt_dip) (2PIQy - 2PIQys + QerrSWVs1)</td><td></td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>(1 - Volt_dip) (PFsel /vp - s4y)</td><td>Tiq</td></tr><tr><td>pfilt_y</td><td>pfilty</td><td>State</td><td>Pref - pfilty</td><td>0.02</td></tr><tr><td>s5_y</td><td>s5y</td><td>State</td><td>(1 - Volt_dip) (Psel - s5y)</td><td>Tpord</td></tr><tr><td>PIV_xi</td><td>PIVξ</td><td>State</td><td>Kvi (1 - Volt_dip) (2PIVy - 2PIVys + SWQs1 (-SWVs0s0y +</td><td></td></tr><tr><td>Pord</td><td>Pord</td><td>AliasState</td><td>0</td><td></td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>


Algebraic Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>vp</td><td>vp</td><td>Algebra</td><td>\( VLower_{zi}v + 0.01VLower_{zl} - vp \)</td></tr><tr><td>pfaref</td><td>pfaref</td><td>Algebra</td><td>\( -pfaref + pfaref_0 \)</td></tr><tr><td>Qref</td><td>Qref</td><td>Algebra</td><td>\( -Qref - qref_0 \)</td></tr><tr><td>Qcpf</td><td>Qcpf</td><td>Algebra</td><td>\( (1 - zp_{z1})(-Qcpf + S_{1y}\tan (pfaref)) \)</td></tr><tr><td>PFsel</td><td>PFsel</td><td>Algebra</td><td>\( -PFsel + QcpfSWPF_{s1} + QrefSWPF_{s0} \)</td></tr><tr><td>Qerr</td><td>Qerr</td><td>Algebra</td><td>\( PFlim_{zi}PFsel + PFlim_{zl}QMin + PFlim_{zu}QMax - Qe - Qerr \)</td></tr><tr><td>PIQ_ys</td><td>PIQ_ys</td><td>Algebra</td><td>\( (1 - Vol_{dip})(KqpQerrSWV_{s1} + PIQ_{\xi} - PIQ_{ys}) \)</td></tr><tr><td>PIQ_y</td><td>PIQ_y</td><td>Algebra</td><td>\( (1 - Vol_{dip})(PIQ_{limzi}PIQ_{ys} + PIQ_{limzl}VMIN + PIQ_{limzu}VMAX - PIQ_y) \)</td></tr><tr><td>Vsel_x</td><td>Vsel_x</td><td>Algebra</td><td>\( PIQ_ySWV_{s1} + SWV_{s0}(QcpfSWPF_{s1} + QrefSWPF_{s0} + Vref_1) - Vsel_x \)</td></tr><tr><td>Vsel_y</td><td>Vsel_y</td><td>Algebra</td><td>\( VMAXVselimzu + VMINVselimzl + VselimziVsel_x - Vsel_y \)</td></tr><tr><td>Verr</td><td>Verr</td><td>Algebra</td><td>\( -Verr + Vref_0 - s_{0y} \)</td></tr><tr><td>dbV_y</td><td>dbV_y</td><td>Algebra</td><td>\( 1.0dbV_{dbzl}(Verr - dbd_1) + 1.0dbV_{dbzu}(Verr - dbd_2) - dbV_y \)</td></tr><tr><td>Iqinj</td><td>Iqinj</td><td>Algebra</td><td>\( -Iqinj + KqvVol_{dip}dbV_y + fThld(1 - Vol_{dip})(IqfrzpThld + KqvdbVynThld) \)</td></tr><tr><td>wg</td><td>wg</td><td>Algebra</td><td>\( 1.0 - wg \)</td></tr><tr><td>Pref</td><td>Pref</td><td>Algebra</td><td>\( -Kf(\omega - 1) - Pref + \frac{p_0}{wg} \)</td></tr><tr><td>Psel</td><td>Psel</td><td>Algebra</td><td>\( -Psel + SWP_{s0}pfilt_y + SWP_{s1}pfilt_ywg \)</td></tr><tr><td>VDL1_y</td><td>\( VDL_{1y} \)</td><td>Algebra</td><td>\( -VDL_{1y} + FixPiecewise((Iq_1, Vq_1 \geq s_{0y}), (Iq_1 + kVq_{12}(-Vq_1 + s_{0y}), Vq_2 \geq s_{0y}) \)</td></tr><tr><td>VDL2_y</td><td>\( VDL_{2y} \)</td><td>Algebra</td><td>\( -VDL_{2y} + FixPiecewise((Ip_1, Vp_1 \geq s_{0y}), (Ip_1 + kVp_{12}(-Vp_1 + s_{0y}), Vp_2 \geq s_{0y}) \)</td></tr><tr><td>Ipmax</td><td>Ipmax</td><td>Algebra</td><td>\( -Ipmax + IpmaxhftHld_2 + (1 - fThld_2)(\sqrt{Ipmax2sqSWPQ_{s0}} + SWPQ_{s1}(zVDL_1(Imaxr(1 - VDL1c) + VDL1c)) \)</td></tr><tr><td>Iqmax</td><td>Iqmax</td><td>Algebra</td><td>\( -Iqmax + \sqrt{Iqmax2sqSWPQ_{s1}} + SWPQ_{s0}(zVDL_1(Imaxr(1 - VDL1c) + VDL1c)) \)</td></tr><tr><td>PIV_ys</td><td>PIV_ys</td><td>Algebra</td><td>\( (1 - Vol_{dip})(KvpSWQ_{s1}(-SWV_{s0}s_{0y} + Vsel_y) + PIV_{\xi} - PIV_{ys}) \)</td></tr><tr><td>PIV_y</td><td>PIV_y</td><td>Algebra</td><td>\( (1 - Vol_{dip})(IqmaxPIVlimzu + IqminPIVlimzl + PIVlimziPIVys - PIV_y) \)</td></tr><tr><td>Qsel</td><td>Qsel</td><td>Algebra</td><td>\( PIV_ySWQ_{s1} - Qsel + SWQ_{s0}s_{4y} \)</td></tr><tr><td>IpHL_x</td><td>IpHL_x</td><td>Algebra</td><td>\( -IpHL_x + \frac{s_{5y}}{vp} \)</td></tr><tr><td>IpHL_y</td><td>IpHL_y</td><td>Algebra</td><td>\( IpHL_{limzi}IpHL_x + IpHL_{limzl}Ipmin + IpHL_{limzu}Ipmax - IpHL_y \)</td></tr><tr><td>IqHL_x</td><td>IqHL_x</td><td>Algebra</td><td>\( -IqHL_x + Iqninj + Qsel \)</td></tr><tr><td>IqHL_y</td><td>IqHL_y</td><td>Algebra</td><td>\( IqHL_{limzi}IqHL_x + IqHL_{limzl}Iqmin + IqHL_{limzu}Iqmax - IqHL_y \)</td></tr><tr><td>a</td><td>a</td><td>ExtAlgebra</td><td>0</td></tr><tr><td>v</td><td>v</td><td>ExtAlgebra</td><td>0</td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgebra</td><td>0</td></tr><tr><td>Qe</td><td>Qe</td><td>ExtAlgebra</td><td>0</td></tr><tr><td>Ipcm</td><td>Ipcm</td><td>ExtAlgebra</td><td>\( IpHL_y - Ipcm_0 \)</td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>ExtAlgebra</td><td>\( -IqHL_y - Iqcmd_0 \)</td></tr></table>


Services


<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>Ipcmd0</td><td>Ipcmd0</td><td>p0/v</td><td>ConstServi</td></tr><tr><td>Iqcmd0</td><td>Iqcmd0</td><td>-q0/v</td><td>ConstServi</td></tr><tr><td>pfaref0</td><td>Φref0</td><td>atan2(q0,p0)</td><td>ConstServi</td></tr><tr><td>Volt_dip</td><td>zVdip</td><td>1 - Vcmpzi</td><td>VarService</td></tr><tr><td>qref0</td><td>qref0</td><td>Iqcmd0SWQs0 (VLowerzi v + 0.01VLowerzl) + SWQs1 (-Vref1 + v)</td><td>ConstServi</td></tr><tr><td>PIQ_flag</td><td>zPIQ</td><td>0</td><td>EventFlag</td></tr><tr><td>s4_flag</td><td>zS4</td><td>0</td><td>EventFlag</td></tr><tr><td>pThld</td><td>pThld</td><td>Indicator (Thld &gt; 0)</td><td>ConstServi</td></tr><tr><td>nThld</td><td>nThld</td><td>Indicator (Thld &lt; 0)</td><td>ConstServi</td></tr><tr><td>Thld_abs</td><td>|Thld|</td><td>|Thld|</td><td>ConstServi</td></tr><tr><td>fThld</td><td>fThld</td><td>0</td><td>ExtendedE</td></tr><tr><td>s5_flag</td><td>zS5</td><td>0</td><td>EventFlag</td></tr><tr><td>kVq12</td><td>kVq12</td><td>-Iq1+Iq2-Vq1+Vq2</td><td>ConstServi</td></tr><tr><td>kVq23</td><td>kVq23</td><td>-Iq2+Iq3-Vq2+Vq3</td><td>ConstServi</td></tr><tr><td>kVq34</td><td>kVq34</td><td>-Iq3+Iq4-Vq3+Vq4</td><td>ConstServi</td></tr><tr><td>zVDL1</td><td>zVDL1</td><td>Iq1 ≤ Iq2 ∧ Iq2 ≤ Iq3 ∧ Iq3 ≤ Iq4 ∧ Vq1 ≤ Vq2 ∧ Vq2 ≤ Vq3 ∧ Vq3 ≤ Vq4</td><td>ConstServi</td></tr><tr><td>kVp12</td><td>kVp12</td><td>-Ip1+Ip2-Vp1+Vp2</td><td>ConstServi</td></tr><tr><td>kVp23</td><td>kVp23</td><td>-Ip2+Ip3-Vp2+Vp3</td><td>ConstServi</td></tr><tr><td>kVp34</td><td>kVp34</td><td>-Ip3+Ip4-Vp3+Vp4</td><td>ConstServi</td></tr><tr><td>zVDL2</td><td>zVDL2</td><td>Ip1 ≤ Ip2 ∧ Ip2 ≤ Ip3 ∧ Ip3 ≤ Ip4 ∧ Vp1 ≤ Vp2 ∧ Vp2 ≤ Vp3 ∧ Vp3 ≤ Vp4</td><td>ConstServi</td></tr><tr><td>fThld2</td><td>fThld2</td><td>0</td><td>ExtendedE</td></tr><tr><td>VDL1c</td><td>VDL1c</td><td>VDL1y &lt; Imaxr</td><td>VarService</td></tr><tr><td>VDL2c</td><td>VDL2c</td><td>VDL2y &lt; Imaxr</td><td>VarService</td></tr><tr><td>Ipmax2sq0</td><td>I2pmax20,nn</td><td>FixPiecewise ((0, Imax2 - Iqcmd20 ≤ 0), (Imax2 - Iqcmd20, True))</td><td>ConstServi</td></tr><tr><td>Ipmax2sq</td><td>I2pmax2</td><td>FixPiecewise ((0, Imax2 - IqHLY2 ≤ 0), (Imax2 - IqHLY2, True))</td><td>VarService</td></tr><tr><td>Ipmaxh</td><td>Ipmaxh</td><td>0</td><td>VarHold</td></tr><tr><td>Iqmax2sq0</td><td>I2qmax,nn</td><td>FixPiecewise ((0, Imax2 - Ipcmd20 ≤ 0), (Imax2 - Ipcmd20, True))</td><td>ConstServi</td></tr><tr><td>Iqmax2sq</td><td>I2qmax2</td><td>FixPiecewise ((0, Imax2 - IpHLY2 ≤ 0), (Imax2 - IpHLY2, True))</td><td>VarService</td></tr><tr><td>Ipmin</td><td>Ipmin</td><td>0.0</td><td>ConstServi</td></tr><tr><td>PIV_flag</td><td>zPIV</td><td>0</td><td>EventFlag</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>SWPF</td><td>SWPF</td><td>Switcher</td><td></td></tr><tr><td>SWV</td><td>SWV</td><td>Switcher</td><td></td></tr><tr><td>SWQ</td><td>SWV</td><td>Switcher</td><td></td></tr><tr><td>SWP</td><td>SWP</td><td>Switcher</td><td></td></tr><tr><td>SWPQ</td><td>SWPQ</td><td>Switcher</td><td></td></tr><tr><td>zp</td><td>zp</td><td>IsEqual</td><td></td></tr><tr><td>Vcmp</td><td>Vcmp</td><td>Limiter</td><td>Voltage dip comparator</td></tr><tr><td>VLower</td><td>VLower</td><td>Limiter</td><td>Limiter for lower voltage cap</td></tr><tr><td>PFlim</td><td>PFlim</td><td>Limiter</td><td></td></tr><tr><td>PIQLim</td><td>limPIQ</td><td>HardLimiter</td><td></td></tr><tr><td>VselLim</td><td>limVsel</td><td>HardLimiter</td><td></td></tr><tr><td>dbV_db</td><td>dbdbV</td><td>DeadBand</td><td></td></tr><tr><td>pfiltLim</td><td>limPfilt</td><td>RateLimiter</td><td>Rate limiter in Lag</td></tr><tr><td>s5Lim</td><td>lims5</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>PIVLim</td><td>limPIV</td><td>HardLimiter</td><td></td></tr><tr><td>IpHLLim</td><td>limIpHL</td><td>HardLimiter</td><td></td></tr><tr><td>IqHLLim</td><td>limIqHL</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>s0</td><td>s0</td><td>Lag</td><td>Voltage filter</td></tr><tr><td>S1</td><td>S1</td><td>Lag</td><td>Pe filter</td></tr><tr><td>PIQ</td><td>PIQ</td><td>PITrackAWFreeze</td><td></td></tr><tr><td>Vsel</td><td>Vsel</td><td>GainLimiter</td><td>Selection output of VFLAG</td></tr><tr><td>s4</td><td>s4</td><td>LagFreeze</td><td>Filter for calculated voltage with freeze</td></tr><tr><td>dbV</td><td>dbV</td><td>DeadBand1</td><td>Deadband for voltage error (ref0)</td></tr><tr><td>pfilt</td><td>Pfilt</td><td>LagRate</td><td>Active power filter with rate limits</td></tr><tr><td>s5</td><td>s5</td><td>LagAWFreeze</td><td></td></tr><tr><td>VDL1</td><td>VDL1</td><td>Piecewise</td><td>Piecewise linear characteristics of Vq-Iq</td></tr><tr><td>VDL2</td><td>VDL2</td><td>Piecewise</td><td>Piecewise linear characteristics of Vp-Ip</td></tr><tr><td>PIV</td><td>PIV</td><td>PITrackAWFreeze</td><td></td></tr><tr><td>IpHL</td><td>IpHL</td><td>GainLimiter</td><td></td></tr><tr><td>IqHL</td><td>IqHL</td><td>GainLimiter</td><td></td></tr></table>

Config Fields in [REECA1G] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>kqs</td><td>Kqs</td><td>2</td><td>Q PI controller tracking gain</td><td></td></tr><tr><td>kvs</td><td>Kvs</td><td>2</td><td>Voltage PI controller tracking gain</td><td></td></tr><tr><td>tpfilt</td><td>Tpfilt</td><td>0.020</td><td>Time const. for Pref filter</td><td></td></tr></table>

# 5.24 RenGen

Renewable generator (converter) group. 

See SynGen for the notes on replacing StaticGen and setting the power ratio parameters. 

Attention is needed for the power base Sn. When replacing a synchronous generator, the renewable generator should have the same or larger Sn. Improper Sn will cause the initial values to exceed typical per-unit ranges and cause the initialization to fail. 

Common Parameters: u, name, bus, gen, Sn 

Common Variables: Pe, Qe 

Available models: REGCA1, REGCP1, REGCV1, REGCV2, REGF1, REGF2, REGF3 

# 5.24.1 REGCA1

Renewable energy generator model type A. 

Implements REGCA1 in PSS/E, or REGC_A in PSLF and Powerworld. 

Volim is the voltage limit for high voltage reactive current management, which should be large than static bus voltage (Volim $> \mathbf { V }$ ), or initialization error will occur. 


Parameters


<table><tr><td>Name</td><td>Sym-bol</td><td>Description</td><td>De-fault</td><td>Unit</td><td>Proper-ties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatoryory</td></tr><tr><td>gen</td><td></td><td>static generator index</td><td></td><td></td><td>mandatoryory</td></tr><tr><td>Sn</td><td>Sn</td><td>Model MVA base</td><td>100</td><td>MVA</td><td></td></tr><tr><td>Tg</td><td>Tg</td><td>converter time const.</td><td>0.100</td><td>s</td><td></td></tr><tr><td>Rrpwr</td><td>Rrpwr</td><td>Low voltage power logic (LVPL) ramp limit</td><td>10</td><td>p.u.</td><td></td></tr><tr><td>Brkpt</td><td>Brkpt</td><td>LVPL characteristic voltage 2</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>Zerox</td><td>Zerox</td><td>LVPL characteristic voltage 1</td><td>0.500</td><td>p.u</td><td></td></tr><tr><td>Lv-plsw</td><td>zLvplsw</td><td>Low volt. P logic: 1-enable, 0 DISABLE</td><td>1</td><td>bool</td><td></td></tr><tr><td>Lvpl1</td><td>Lvpl1</td><td>LVPL gain at Brkpt</td><td>1</td><td>p.u</td><td></td></tr><tr><td>Volim</td><td>Volim</td><td>Voltage lim for high volt. reactive current mgt.</td><td>1.200</td><td>p.u.</td><td></td></tr><tr><td>Lvpt1</td><td>Lvpt1</td><td>High volt. point for low volt. active current mgt.</td><td>0.800</td><td>p.u.</td><td></td></tr><tr><td>Lvpt0</td><td>Lvpt0</td><td>Low volt. point for low volt. active current mgt.</td><td>0.400</td><td>p.u.</td><td></td></tr><tr><td>Iolim</td><td>Iolim</td><td>lower current limit for high volt. reactive current mgt.</td><td>-1.500</td><td>p.u. (mach base)</td><td>current</td></tr><tr><td>Tfltr</td><td>Tfltr</td><td>Voltage filter T const for low volt. active current mgt.</td><td>0.100</td><td>s</td><td></td></tr><tr><td>Khv</td><td>Khv</td><td>Overvolt. compensation gain in high volt. reactive current mgt.</td><td>0.700</td><td></td><td></td></tr><tr><td>Iq-rmax</td><td>Iq-rmax</td><td>Upper limit on the ROC for reactive current</td><td>1</td><td>p.u.</td><td>current</td></tr><tr><td>Iq-min</td><td>Iq-min</td><td>Lower limit on the ROC for reactive current</td><td>-1</td><td>p.u.</td><td>current</td></tr><tr><td>Accel</td><td>Accel</td><td>Acceleration factor</td><td>0</td><td></td><td></td></tr><tr><td>gamma</td><td>γP</td><td>P ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>gam-maq</td><td>γQ</td><td>Q ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>ra</td><td>ra</td><td></td><td>0</td><td></td><td></td></tr><tr><td>xs</td><td>xs</td><td></td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>State in lag TF</td><td>v_str</td><td></td></tr><tr><td>S2_y</td><td>S2y</td><td>State</td><td>State in lag transfer function</td><td>v_str</td><td></td></tr><tr><td>S0_y</td><td>S0y</td><td>State</td><td>State in lag TF</td><td>v_str</td><td></td></tr><tr><td>LVG_y</td><td>LVGy</td><td>Algeb</td><td>Output of piecewise</td><td>v_str</td><td></td></tr><tr><td>Ipcmd</td><td>Ipcmd</td><td>Algeb</td><td>current component for active power</td><td>v_str</td><td></td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>Algeb</td><td>current component for reactive power</td><td>v_str</td><td></td></tr><tr><td>LVPL_y</td><td>LVPLy</td><td>Algeb</td><td>Output of piecewise</td><td>v_str</td><td></td></tr><tr><td>Ipout</td><td>Ipout</td><td>Algeb</td><td>Output Ip current</td><td>v_str</td><td></td></tr><tr><td>HVG_x</td><td>HVGx</td><td>Algeb</td><td>Value before limiter</td><td>v_str</td><td></td></tr><tr><td>HVG_y</td><td>HVGy</td><td>Algeb</td><td>Output after limiter and post gain</td><td>v_str</td><td></td></tr><tr><td>Iqout_x</td><td>Iqoutx</td><td>Algeb</td><td>Value before limiter</td><td>v_str</td><td></td></tr><tr><td>Iqout_y</td><td>Iqouty</td><td>Algeb</td><td>Output after limiter and post gain</td><td>v_str</td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>Active power output</td><td>v_str</td><td></td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>Reactive power output</td><td>v_str</td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr><tr><td>vd</td><td>vd</td><td>AliasAlgeb</td><td>Alias of v</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Sym-bol</td><td>Type</td><td>Initial Value</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>-Iqcmd</td></tr><tr><td>S2_y</td><td>S2y</td><td>State</td><td>1.0v</td></tr><tr><td>S0_y</td><td>S0y</td><td>State</td><td>Ipcm</td></tr><tr><td>LVG_</td><td>LVGt</td><td>Algeb</td><td>FixPiecewise((0,Lvpnt0≥v), (kLVG(-Lvpnt0+v), Lvpnt1≥v), (1, True))</td></tr><tr><td>Ipcm</td><td>Ipcm</td><td>Algeb</td><td>Ipcm0Indicator(LVGy&gt;0)LVGy+Indicator(LVGy≤0)</td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>Algeb</td><td>Iqcmd0</td></tr><tr><td>LVPL</td><td>LVPI</td><td>Algeb</td><td>FixPiecewise((9999-9999Lvplsw, S2y≤Zerox), (-9999Lvplsw+kLVPL(S2y-Zerox))</td></tr><tr><td>Ipout</td><td>Ipout</td><td>Algeb</td><td>IpcmLVGy</td></tr><tr><td>HVG_</td><td>HVG</td><td>Algeb</td><td>Khw(-Volim+v)</td></tr><tr><td>HVG_</td><td>HVG</td><td>Algeb</td><td>HVGLimziHVGx</td></tr><tr><td>Iqout_</td><td>Iqout</td><td>Algeb</td><td>-HVGy+S1y</td></tr><tr><td>Iqout_</td><td>Iqout</td><td>Algeb</td><td>IolimIqoutlimzl+IqoutlimziIqoutx</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>p0</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>q0</td></tr><tr><td>a</td><td>a</td><td>Ex-tAl-geb</td><td></td></tr><tr><td>v</td><td>v</td><td>Ex-tAl-geb</td><td></td></tr><tr><td>vd</td><td>vd</td><td>AliasAl-geb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>-Iqcmd - S1y</td><td>Tg</td></tr><tr><td>S2_y</td><td>S2y</td><td>State</td><td>-S2y + 1.0v</td><td>Tfltr</td></tr><tr><td>S0_y</td><td>S0y</td><td>State</td><td>Ipcm d - S0y</td><td>Tg</td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Sym-bol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>LVG_</td><td>LVG_</td><td>Al-geb</td><td>-LV Gy+FixPiecewise ((0, Lvpnt0 ≥ v), (kLVG (-Lvpnt0 + v), Lvpnt1 ≥ v), (1, True))</td></tr><tr><td>Ipcmd</td><td>Ipcm</td><td>Al-geb</td><td>-Ipcmd + Ipcmd0LVG</td></tr><tr><td>Iqcmd</td><td>Iqcm</td><td>Al-geb</td><td>-Iqcmd + Iqcmd0</td></tr><tr><td>LVPL</td><td>LVP</td><td>Al-geb</td><td>-LVPLy+FixPiecewise ((9999 - 9999Lvplsw, S2y ≤ Zerox), (-9999Lvplsw + kLVPL(S2y))</td></tr><tr><td>Ipout</td><td>Ipout</td><td>Al-geb</td><td>-Ipout + LV GyS0y</td></tr><tr><td>HVG_</td><td>HVG</td><td>Al-geb</td><td>-HVGx + Khv (-Volim + v)</td></tr><tr><td>HVG_</td><td>HVG</td><td>Al-geb</td><td>HVGLimziHVGx - HVGy</td></tr><tr><td>Iqout_</td><td>Iqout</td><td>Al-geb</td><td>-HVGy - Iqoutx + S1y</td></tr><tr><td>Iqout_</td><td>Iqout</td><td>Al-geb</td><td>IolimIqoutlimzl + IqoutlimziIqoutx - Iqouty</td></tr><tr><td>Pe</td><td>Pe</td><td>Al-geb</td><td>Ipoutv - Pe</td></tr><tr><td>Qe</td><td>Qe</td><td>Al-geb</td><td>Iqoutyv - Qe</td></tr><tr><td>a</td><td>a</td><td>Ex-tAl-geb</td><td>-Pe</td></tr><tr><td>v</td><td>v</td><td>Ex-tAl-geb</td><td>-Qe</td></tr><tr><td>vd</td><td>vd</td><td>AliasAl-geb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>p0</td><td>P0</td><td>gammaapp0s</td><td>ConstService</td></tr><tr><td>q0</td><td>Q0</td><td>gammaqq0s</td><td>ConstService</td></tr><tr><td>q0gt0</td><td>zq0&gt;0</td><td>Indicator (q0 &gt; 0)</td><td>ConstService</td></tr><tr><td>q0lt0</td><td>zq0&lt;0</td><td>Indicator (q0 &lt; 0)</td><td>ConstService</td></tr><tr><td>Ipcm0</td><td>Ipcm0</td><td>p0v</td><td>ConstService</td></tr><tr><td>Iqcmd0</td><td>Iqcmd0</td><td>- q0v</td><td>ConstService</td></tr><tr><td>Ipcm0_LVG</td><td>Ipcm0LVG</td><td>Ipcm</td><td>PostInitService</td></tr><tr><td>kLVG</td><td>kLVG</td><td>1-Lvpnt0+Lvpnt1</td><td>ConstService</td></tr><tr><td>kLVPL</td><td>kLVPL</td><td>Lvpl1Lvplsw/Brkpt-Zerox</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>S1_lim</td><td>limS1</td><td>AntiWindupRate</td><td>Limiter in Lag</td></tr><tr><td>S0_lim</td><td>limS0</td><td>AntiWindupRate</td><td>Limiter in Lag</td></tr><tr><td>HVG_lim</td><td>limHVG</td><td>HardLimiter</td><td></td></tr><tr><td>Iqout_lim</td><td>limIqout</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LVG</td><td>LVG</td><td>Piecewise</td><td>Ip gain during low voltage</td></tr><tr><td>S1</td><td>S1</td><td>LagAntiWindupRate</td><td>Iqcmd delay</td></tr><tr><td>S2</td><td>S2</td><td>Lag</td><td>Voltage filter with no anti-windup</td></tr><tr><td>LVPL</td><td>LVPL</td><td>Piecewise</td><td>Low voltage Ipcmd upper limit</td></tr><tr><td>S0</td><td>S0</td><td>LagAntiWindupRate</td><td></td></tr><tr><td>HVG</td><td>HVG</td><td>GainLimiter</td><td>High voltage gain block</td></tr><tr><td>Iqout</td><td>Iqout</td><td>GainLimiter</td><td>Iq output block</td></tr></table>

Config Fields in [REGCA1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr></table>

# 5.24.2 REGCP1

Renewable energy generator model (REGC_A) with PLL. 

A PLL device can be specified for estimating the phase angle at the coupling bus through the pll parameter: 

• If pll is not given, the accurate bus angle will be used. 

• If pll is not a valid PLL device, the program will error out. 

• The program does not check if the provided pll actually measures the bus on which the converter is at. 

One needs to carefully tune the PLL parameters to match the desired performance. 

All other remarks for REGCA1 apply. 


Parameters


<table><tr><td>Name</td><td>Sym-bol</td><td>Description</td><td>De-fault</td><td>Unit</td><td>Proper-ties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatoryory</td></tr><tr><td>gen</td><td></td><td>static generator index</td><td></td><td></td><td>mandatoryory</td></tr><tr><td>Sn</td><td>Sn</td><td>Model MVA base</td><td>100</td><td>MVA</td><td></td></tr><tr><td>Tg</td><td>Tg</td><td>converter time const.</td><td>0.100</td><td>s</td><td></td></tr><tr><td>Rrpwr</td><td>Rrpwr</td><td>Low voltage power logic (LVPL) ramp limit</td><td>10</td><td>p.u.</td><td></td></tr><tr><td>Brkpt</td><td>Brkpt</td><td>LVPL characteristic voltage 2</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>Zerox</td><td>Zerox</td><td>LVPL characteristic voltage 1</td><td>0.500</td><td>p.u</td><td></td></tr><tr><td>Lv-plsw</td><td>zLvplsw</td><td>Low volt. P logic: 1-enable, 0 DISABLE</td><td>1</td><td>bool</td><td></td></tr><tr><td>Lvpl1</td><td>Lvpl1</td><td>LVPL gain at Brkpt</td><td>1</td><td>p.u</td><td></td></tr><tr><td>Volim</td><td>Volim</td><td>Voltage lim for high volt. reactive current mgt.</td><td>1.200</td><td>p.u.</td><td></td></tr><tr><td>Lvpt1</td><td>Lvpt1</td><td>High volt. point for low volt. active current mgt.</td><td>0.800</td><td>p.u.</td><td></td></tr><tr><td>Lvpt0</td><td>Lvpt0</td><td>Low volt. point for low volt. active current mgt.</td><td>0.400</td><td>p.u.</td><td></td></tr><tr><td>Iolim</td><td>Iolim</td><td>lower current limit for high volt. reactive current mgt.</td><td>-1.500</td><td>p.u. (mach base)</td><td>current</td></tr><tr><td>Tfltr</td><td>Tfltr</td><td>Voltage filter T const for low volt. active current mgt.</td><td>0.100</td><td>s</td><td></td></tr><tr><td>Khv</td><td>Khv</td><td>Overvolt. compensation gain in high volt. reactive current mgt.</td><td>0.700</td><td></td><td></td></tr><tr><td>Iqr-max</td><td>Iqmax</td><td>Upper limit on the ROC for reactive current</td><td>1</td><td>p.u.</td><td>current</td></tr><tr><td>Iqr-min</td><td>Iqmin</td><td>Lower limit on the ROC for reactive current</td><td>-1</td><td>p.u.</td><td>current</td></tr><tr><td>Accel</td><td>Accel</td><td>Acceleration factor</td><td>0</td><td></td><td></td></tr><tr><td>gamma</td><td>γP</td><td>P ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>gam-maq</td><td>γQ</td><td>Q ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>pll</td><td></td><td>Phase-lock loop device idx</td><td></td><td></td><td></td></tr><tr><td>ra</td><td>ra</td><td></td><td>0</td><td></td><td></td></tr><tr><td>xs</td><td>xs</td><td></td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>State in lag TF</td><td>v_str</td><td></td></tr><tr><td>S2_y</td><td>S2y</td><td>State</td><td>State in lag transfer function</td><td>v_str</td><td></td></tr><tr><td>S0_y</td><td>S0y</td><td>State</td><td>State in lag TF</td><td>v_str</td><td></td></tr><tr><td>am</td><td>am</td><td>ExtState</td><td>Measured angle</td><td></td><td></td></tr><tr><td>LVG_y</td><td>LVGy</td><td>Algeb</td><td>Output of piecewise</td><td>v_str</td><td></td></tr><tr><td>Ipcm</td><td>Ipcm</td><td>Algeb</td><td>current component for active power</td><td>v_str</td><td></td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>Algeb</td><td>current component for reactive power</td><td>v_str</td><td></td></tr><tr><td>LVPL_y</td><td>LVPLy</td><td>Algeb</td><td>Output of piecewise</td><td>v_str</td><td></td></tr><tr><td>Ipout</td><td>Ipout</td><td>Algeb</td><td>Output Ip current</td><td>v_str</td><td></td></tr><tr><td>HVG_x</td><td>HVGx</td><td>Algeb</td><td>Value before limiter</td><td>v_str</td><td></td></tr><tr><td>HVG_y</td><td>HVGy</td><td>Algeb</td><td>Output after limiter and post gain</td><td>v_str</td><td></td></tr><tr><td>Iqout_x</td><td>Iqoutx</td><td>Algeb</td><td>Value before limiter</td><td>v_str</td><td></td></tr><tr><td>Iqout_y</td><td>Iqouty</td><td>Algeb</td><td>Output after limiter and post gain</td><td>v_str</td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>Active power output</td><td>v_str</td><td></td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>Reactive power output</td><td>v_str</td><td></td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>d-axis voltage</td><td>v_str</td><td></td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>q-axis voltage</td><td>v_str</td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Sym-bol</td><td>Type</td><td>Initial Value</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>-Iqcmd</td></tr><tr><td>S2_y</td><td>S2y</td><td>State</td><td>1.0v</td></tr><tr><td>S0_y</td><td>S0y</td><td>State</td><td>Ipcm</td></tr><tr><td>am</td><td>am</td><td>ExtStat</td><td></td></tr><tr><td>LVG_</td><td>LVG_</td><td>Al-geb</td><td>FixPiecewise((0,Lvpnt0≥v),(kLVG(-Lvpnt0+v),Lvpnt1≥v),(1, True))</td></tr><tr><td>Ipcm</td><td>Ipcm</td><td>Al-geb</td><td>Ipcm0Indicator(LVGy&gt;0)LVGy+Indicator(LVGy≤0)</td></tr><tr><td>Iqcmd</td><td>Iqcmd</td><td>Al-geb</td><td>Iqcmd0</td></tr><tr><td>LVPL_</td><td>LVPI</td><td>Al-geb</td><td>FixPiecewise((9999-9999Lvplsw,S2y≤Zerox),(-9999Lvplsw+kLVPL(S2y-Zerox)</td></tr><tr><td>Ipout</td><td>Ipout</td><td>Al-geb</td><td>IpcmLVGy</td></tr><tr><td>HVG_</td><td>HVG</td><td>Al-geb</td><td>Khv(-Volim+v)</td></tr><tr><td>HVG_</td><td>HVG</td><td>Al-geb</td><td>HVGLimziHVGx</td></tr><tr><td>Iqout_</td><td>Iqout</td><td>Al-geb</td><td>-HVGy+S1y</td></tr><tr><td>Iqout_</td><td>Iqout</td><td>Al-geb</td><td>IolimIqoutlimzl+IqoutlimziIqoutx</td></tr><tr><td>Pe</td><td>Pe</td><td>Al-geb</td><td>p0</td></tr><tr><td>Qe</td><td>Qe</td><td>Al-geb</td><td>q0</td></tr><tr><td>vd</td><td>vd</td><td>Al-geb</td><td>v</td></tr><tr><td>vq</td><td>vq</td><td>Al-geb</td><td>0</td></tr><tr><td>a</td><td>a</td><td>Ex-tAl-geb</td><td></td></tr><tr><td>v</td><td>v</td><td>Ex-tAl-geb</td><td></td></tr></table>


Differential Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>S1_y</td><td>S1y</td><td>State</td><td>-Iqcmd - S1y</td><td>Tg</td></tr><tr><td>S2_y</td><td>S2y</td><td>State</td><td>-S2y + 1.0v</td><td>Tfltr</td></tr><tr><td>S0_y</td><td>S0y</td><td>State</td><td>Ipcm d - S0y</td><td>Tg</td></tr><tr><td>am</td><td>am</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Sym-bol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>LVG_</td><td>LVG_</td><td>Al-geb</td><td>-LV Gy+FixPiecewise ((0, Lvpnt0 ≥ v), (kLVG (-Lvpnt0 + v), Lvpnt1 ≥ v), (1, True))</td></tr><tr><td>Ipcmd</td><td>Ipcm</td><td>Al-geb</td><td>-Ipcmd + Ipcmd0LVG</td></tr><tr><td>Iqcmd</td><td>Iqcm</td><td>Al-geb</td><td>-Iqcmd + Iqcmd0</td></tr><tr><td>LVPL</td><td>LVP_</td><td>Al-geb</td><td>-LVPLy+FixPiecewise ((9999 - 9999Lvplsw, S2y ≤ Zerox), (-9999Lvplsw + kLVPL (S2y)</td></tr><tr><td>Ipout</td><td>Ipout</td><td>Al-geb</td><td>-Ipout + LV GyS0y</td></tr><tr><td>HVG_</td><td>HVG</td><td>Al-geb</td><td>-HVGx + Khv (-Volim + v)</td></tr><tr><td>HVG_</td><td>HVG</td><td>Al-geb</td><td>HVGLimziHVGx - HGVy</td></tr><tr><td>Iqout_</td><td>Iqout</td><td>Al-geb</td><td>-HVGy - Iqoutx + S1y</td></tr><tr><td>Iqout_</td><td>Iqout</td><td>Al-geb</td><td>IolimIqoutlimzl + IqoutlimziIqoutx - Iqouty</td></tr><tr><td>Pe</td><td>Pe</td><td>Al-geb</td><td>Ipoutvd + Iqoutyvq - Pe</td></tr><tr><td>Qe</td><td>Qe</td><td>Al-geb</td><td>-Ipoutvq + Iqoutyvd - Qe</td></tr><tr><td>vd</td><td>vd</td><td>Al-geb</td><td>v cos (zam (a - am)) - vd</td></tr><tr><td>vq</td><td>vq</td><td>Al-geb</td><td>-v sin (zam (a - am)) - vq</td></tr><tr><td>a</td><td>a</td><td>Ex-tAl-geb</td><td>-Pe</td></tr><tr><td>v</td><td>v</td><td>Ex-tAl-geb</td><td>-Qe</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>p0</td><td>P0</td><td>gammaapp0s</td><td>ConstService</td></tr><tr><td>q0</td><td>Q0</td><td>gammaqq0s</td><td>ConstService</td></tr><tr><td>q0gt0</td><td>zq0&gt;0</td><td>Indicator (q0 &gt; 0)</td><td>ConstService</td></tr><tr><td>q0lt0</td><td>zq0&lt;0</td><td>Indicator (q0 &lt; 0)</td><td>ConstService</td></tr><tr><td>Ipcm0</td><td>Ipcm0</td><td>p0v</td><td>ConstService</td></tr><tr><td>Iqcmd0</td><td>Iqcmd0</td><td>- q0v</td><td>ConstService</td></tr><tr><td>Ipcm0_LVG</td><td>Ipcm0LVG</td><td>Ipcm</td><td>PostInitService</td></tr><tr><td>kLVG</td><td>kLVG</td><td>1-Lvpnt0+Lvpnt1</td><td>ConstService</td></tr><tr><td>kLVPL</td><td>kLVPL</td><td>Lvpl1Lvplsw/Brkpt-Zerox</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>S1_lim</td><td>limS1</td><td>AntiWindupRate</td><td>Limiter in Lag</td></tr><tr><td>S0_lim</td><td>limS0</td><td>AntiWindupRate</td><td>Limiter in Lag</td></tr><tr><td>HVG_lim</td><td>limHVG</td><td>HardLimiter</td><td></td></tr><tr><td>Iqout_lim</td><td>limIqout</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LVG</td><td>LVG</td><td>Piecewise</td><td>Ip gain during low voltage</td></tr><tr><td>S1</td><td>S1</td><td>LagAntiWindupRate</td><td>Iqcmd delay</td></tr><tr><td>S2</td><td>S2</td><td>Lag</td><td>Voltage filter with no anti-windup</td></tr><tr><td>LVPL</td><td>LVPL</td><td>Piecewise</td><td>Low voltage Ipcmd upper limit</td></tr><tr><td>S0</td><td>S0</td><td>LagAntiWindupRate</td><td></td></tr><tr><td>HVG</td><td>HVG</td><td>GainLimiter</td><td>High voltage gain block</td></tr><tr><td>Iqout</td><td>Iqout</td><td>GainLimiter</td><td>Iq output block</td></tr></table>

Config Fields in [REGCP1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr></table>

# 5.24.3 REGCV1

Voltage-controlled VSC with VSG control. 

Includes double-loop PI control and swing equation based VSG control. Voltage measurement delays are ignored. 

# Notes

• Extreme care needs to be taken when coordinating the PI controller parameters. 

• Setting the primary frequency control droop kw can improve small-signal stability. 

• The droop kv for voltage control (pu voltage / pu Q change), if used, needs to be chosen carefully. In most cases, kv should be a very small positive value if not zero. 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatory</td></tr><tr><td>gen</td><td></td><td>static generator index</td><td></td><td></td><td>mandatory</td></tr><tr><td>coi2</td><td></td><td>center of inertia 2 index</td><td></td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td>Model MVA base</td><td>100</td><td>MVA</td><td></td></tr><tr><td>fn</td><td>f</td><td>rated frequency</td><td>60</td><td></td><td></td></tr><tr><td>Tc</td><td>Tc</td><td>switch time constant</td><td>0.010</td><td>s</td><td></td></tr><tr><td>kw</td><td>kω</td><td>speed droop on active power (reciprocal of droop)</td><td>0</td><td>p.u.</td><td>non_negativ,ipower</td></tr><tr><td>kv</td><td>kv</td><td>reactive power droop on voltage</td><td>0</td><td>p.u.</td><td>non_negativ,power</td></tr><tr><td>M</td><td>M</td><td>Emulated startup time constant (M=2H)</td><td>10</td><td>s</td><td>power</td></tr><tr><td>D</td><td>D</td><td>Emulated damping coefficient</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>ra</td><td>ra</td><td>resistance</td><td>0</td><td></td><td>z</td></tr><tr><td>xs</td><td>xs</td><td>reactance</td><td>0.200</td><td></td><td>z</td></tr><tr><td>gammap</td><td>γP</td><td>P ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>gam-maq</td><td>γQ</td><td>Q ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>Kpvd</td><td>kpvd</td><td>vd controller proportional gain</td><td>0.500</td><td>p.u.</td><td>power</td></tr><tr><td>Kivd</td><td>ki vd</td><td>vd controller integral gain</td><td>0.020</td><td>p.u.</td><td>power</td></tr><tr><td>Kpvq</td><td>kpvq</td><td>vq controller proportional gain</td><td>0.500</td><td>p.u.</td><td>power</td></tr><tr><td>Kivq</td><td>ki vq</td><td>vq controller integral gain</td><td>0.020</td><td>p.u.</td><td>power</td></tr><tr><td>KpId</td><td>kp di</td><td>Id controller proportional gain</td><td>0.200</td><td>p.u.</td><td>power</td></tr><tr><td>KiId</td><td>ki di</td><td>Id controller integral gain</td><td>0.010</td><td>p.u.</td><td>power</td></tr><tr><td>KpIq</td><td>kp qi</td><td>Iq controller proportional gain</td><td>0.200</td><td>p.u.</td><td>power</td></tr><tr><td>KiIq</td><td>ki qi</td><td>Iq controller integral gain</td><td>0.010</td><td>p.u.</td><td>power</td></tr></table>


Variables


<table><tr><td>Name</td><td>Sym-bol</td><td>Type</td><td>Description</td><td>Unit</td><td>Proper-ties</td></tr><tr><td>dw</td><td>dw</td><td>State</td><td>delta virtual rotor speed</td><td>pu(Hz)</td><td>v_str</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>virtual delta</td><td>rad</td><td>v_str</td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIqv_xi</td><td>PIqvξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>ud-Lag_y</td><td>udLag_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>uqLag_y</td><td>uqLag_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td>Alias of udLag_y</td><td></td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td>Alias of uqLag_y</td><td></td><td></td></tr><tr><td>Pref2</td><td>Pref2</td><td>Algeb</td><td>active power reference after adjusting by fre-quency</td><td></td><td>v_str</td></tr><tr><td>vref2</td><td>vref2</td><td>Algeb</td><td>voltage reference after adjusted by reactive power</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>Algeb</td><td>virtual rotor speed</td><td>pu(Hz)</td><td>v_str</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>d-axis voltage</td><td></td><td>v_str</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>q-axis voltage</td><td></td><td>v_str</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>active power injection from VSC</td><td></td><td>v_str</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>reactive power injection from VSC</td><td></td><td>v_str</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>d-axis current</td><td></td><td>v_str</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>q-axis current</td><td></td><td>v_str</td></tr><tr><td>PIvd_y</td><td>PIvd_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIqv_y</td><td>PIqv_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIId_y</td><td>PIId_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIIq_y</td><td>PIIq_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>udref</td><td>udref</td><td>Algeb</td><td>ud reference</td><td></td><td>v_str</td></tr><tr><td>uqref</td><td>uqref</td><td>Algeb</td><td>uq reference</td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAl-geb</td><td>Alias of PIvd_y</td><td></td><td></td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAl-geb</td><td>Alias of PIqv_y</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>dw</td><td>dw</td><td>State</td><td>0</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>a</td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Id0</td></tr><tr><td>PIqv_xi</td><td>PIvqξ</td><td>State</td><td>Iq0</td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>0.0</td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>0.0</td></tr><tr><td>udLag_y</td><td>udLagy</td><td>State</td><td>udref</td></tr><tr><td>uqLag_y</td><td>uqLagy</td><td>State</td><td>uqref</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td></td></tr><tr><td>Pref2</td><td>Pref2</td><td>Algeb</td><td>Prefu</td></tr><tr><td>vref2</td><td>vref2</td><td>Algeb</td><td>uvref</td></tr><tr><td>omega</td><td>ω</td><td>Algeb</td><td>u</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>vd0</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>vq0</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>Pref</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>Qref</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>Id0</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Iq0</td></tr><tr><td>PIvd_y</td><td>PIvdy</td><td>Algeb</td><td>Id0 + Kpvd (vd - vref2)</td></tr><tr><td>PIvq_y</td><td>PIvqy</td><td>Algeb</td><td>Iq0 + Kpvqvq</td></tr><tr><td>PIId_y</td><td>PIIdy</td><td>Algeb</td><td>KpId (Id - PIvdy)</td></tr><tr><td>PIIq_y</td><td>PIIqy</td><td>Algeb</td><td>KpIq (Iq - PIvqy)</td></tr><tr><td>udref</td><td>udref</td><td>Algeb</td><td>udref0</td></tr><tr><td>uqref</td><td>uqref</td><td>Algeb</td><td>uqref0</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgeb</td><td></td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>dw</td><td>dw</td><td>State</td><td>-Ddw - Pe + Pref2</td><td>M</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>2πdwfn</td><td></td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Kivd (vd - vref2)</td><td></td></tr><tr><td>PIqv_xi</td><td>PIvqξ</td><td>State</td><td>Kivqvq</td><td></td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>KiId (Id - PIVdy)</td><td></td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>KiIq (Iq - PIVqy)</td><td></td></tr><tr><td>udLag_y</td><td>udLagy</td><td>State</td><td>-udLagy + udref</td><td>Tc</td></tr><tr><td>uqLag_y</td><td>uqLagy</td><td>State</td><td>- uqLagy + uqref</td><td>Tc</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td>0</td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>Pref2</td><td>Pref2</td><td>Algebra</td><td>Prefu - Pref2 - dwkw</td></tr><tr><td>vref2</td><td>vref2</td><td>Algebra</td><td>kv(-Qe + Qrefu) + vref - vref2</td></tr><tr><td>omega</td><td>ω</td><td>Algebra</td><td>dw - ω + 1</td></tr><tr><td>vd</td><td>vd</td><td>Algebra</td><td>uv cos (a - δ) - vd</td></tr><tr><td>vq</td><td>vq</td><td>Algebra</td><td>uv sin (a - δ) - vq</td></tr><tr><td>Pe</td><td>Pe</td><td>Algebra</td><td>Idvd + Iqvq - Pe</td></tr><tr><td>Qe</td><td>Qe</td><td>Algebra</td><td>Idqv - Iqvd - Qe</td></tr><tr><td>Id</td><td>Id</td><td>Algebra</td><td>Idra - Iqxs - udLagy + vd</td></tr><tr><td>Iq</td><td>Iq</td><td>Algebra</td><td>Idxs + Iqra - uqLagy + vq</td></tr><tr><td>PIvd_y</td><td>PIvd_y</td><td>Algebra</td><td>Kpvd (vd - vref2) + PIvdξ - PIvdy</td></tr><tr><td>PIvq_y</td><td>PIvq_y</td><td>Algebra</td><td>Kpvqvq + PIvqξ - PIvqy</td></tr><tr><td>PIId_y</td><td>PIId_y</td><td>Algebra</td><td>KpId (Id - PIvdy) + PIIdξ - PIIidy</td></tr><tr><td>PIlq_y</td><td>PIlq_y</td><td>Algebra</td><td>KpIq (Iq - PIVqy) + PIIqξ - PIIqy</td></tr><tr><td>udref</td><td>udref</td><td>Algebra</td><td>-Iqrefxs + PIIdy - udref + vd</td></tr><tr><td>uqref</td><td>uqref</td><td>Algebra</td><td>Idrefxs + PIIqy - uqref + vq</td></tr><tr><td>a</td><td>a</td><td>ExtAlgebra</td><td>- Peu</td></tr><tr><td>v</td><td>v</td><td>ExtAlgebra</td><td>- Qeu</td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgebra</td><td>0</td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgebra</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>Pref</td><td>\(P_{ref}\)</td><td>gammaapp0s</td><td>ConstService</td></tr><tr><td>Qref</td><td>\(Q_{ref}\)</td><td>gammaqq0s</td><td>ConstService</td></tr><tr><td>ixs</td><td>1/xs</td><td>\(\frac{1}{xs}\)</td><td>ConstService</td></tr><tr><td>Id0</td><td>\(I_{d0}\)</td><td>\(\frac{Prefu}{v}\)</td><td>ConstService</td></tr><tr><td>Iq0</td><td>\(I_{q0}\)</td><td>-\(\frac{Q_{refu}}{v}\)</td><td>ConstService</td></tr><tr><td>vd0</td><td>\(v_{d0}\)</td><td>uv</td><td>ConstService</td></tr><tr><td>vq0</td><td>\(v_{q0}\)</td><td>0</td><td>ConstService</td></tr><tr><td>udref0</td><td>\(u_{dref0}\)</td><td>\(Id_0ra-Iq_0xs+vd_0\)</td><td>ConstService</td></tr><tr><td>uqref0</td><td>\(u_{qref0}\)</td><td>\(Id_0xs+Iq_0ra+q_0\)</td><td>ConstService</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>PIvd</td><td>PIvd</td><td>PIController</td><td></td></tr><tr><td>PIvq</td><td>PIvq</td><td>PIController</td><td></td></tr><tr><td>PIId</td><td>PIId</td><td>PIController</td><td></td></tr><tr><td>PIIq</td><td>PIIq</td><td>PIController</td><td></td></tr><tr><td>udLag</td><td>udLag</td><td>Lag</td><td></td></tr><tr><td>uqLag</td><td>uqLag</td><td>Lag</td><td></td></tr></table>

Config Fields in [REGCV1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.24.4 REGCV2

Voltage-controlled VSC with VSG control. 

The inner-loop current PI controllers are replaced with lag transfer functions. 

# Notes

To avoid small-signal stability issues, one take extreme care in setting the PI control gains Kpvd, Kivd, Kpvq, and Kivq, and the emulated inertia M and damping D. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatory</td></tr><tr><td>gen</td><td></td><td>static generator index</td><td></td><td></td><td>mandatory</td></tr><tr><td>coi2</td><td></td><td>center of inertia 2 index</td><td></td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td>Model MVA base</td><td>100</td><td>MVA</td><td></td></tr><tr><td>fn</td><td>f</td><td>rated frequency</td><td>60</td><td></td><td></td></tr><tr><td>Tc</td><td>Tc</td><td>switch time constant</td><td>0.010</td><td>s</td><td></td></tr><tr><td>kw</td><td>kω</td><td>speed droop on active power (reciprocal of droop)</td><td>0</td><td>p.u.</td><td>non_negatice,ipower</td></tr><tr><td>kv</td><td>kv</td><td>reactive power droop on voltage</td><td>0</td><td>p.u.</td><td>non_negatice,power</td></tr><tr><td>M</td><td>M</td><td>Emulated startup time constant (M=2H)</td><td>10</td><td>s</td><td>power</td></tr><tr><td>D</td><td>D</td><td>Emulated damping coefficient</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>ra</td><td>ra</td><td>resistance</td><td>0</td><td></td><td>z</td></tr><tr><td>xs</td><td>xs</td><td>reactance</td><td>0.200</td><td></td><td>z</td></tr><tr><td>gammap</td><td>γP</td><td>P ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>gam-maq</td><td>γQ</td><td>Q ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>Kpvd</td><td>kpvd</td><td>vd controller proportional gain</td><td>0.500</td><td>p.u.</td><td>power</td></tr><tr><td>Kivd</td><td>ki vd</td><td>vd controller integral gain</td><td>0.020</td><td>p.u.</td><td>power</td></tr><tr><td>Kpvq</td><td>kpvq</td><td>vq controller proportional gain</td><td>0.500</td><td>p.u.</td><td>power</td></tr><tr><td>Kivq</td><td>ki_vq</td><td>vq controller integral gain</td><td>0.020</td><td>p.u.</td><td>power</td></tr><tr><td>Tiq</td><td>Tiq</td><td></td><td>0.010</td><td></td><td></td></tr><tr><td>Tid</td><td>TId</td><td></td><td>0.010</td><td></td><td></td></tr></table>


Variables


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>dw</td><td>dw</td><td>State</td><td>delta virtual rotor speed</td><td>pu(Hz)</td><td>v_str</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>virtual delta</td><td>rad</td><td>v_str</td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIqv_xi</td><td>PIqvξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>LGIid_y</td><td>LGIid_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>LGIq_y</td><td>LGIq_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>Pref2</td><td>Pref2</td><td>Algeb</td><td>active power reference after adjusting by frequency</td><td></td><td>v_str</td></tr><tr><td>vref2</td><td>vref2</td><td>Algeb</td><td>voltage reference after adjusted by reactive power</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>Algeb</td><td>virtual rotor speed</td><td>pu(Hz)</td><td>v_str</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>d-axis voltage</td><td></td><td>v_str</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>q-axis voltage</td><td></td><td>v_str</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>active power injection from VSC</td><td></td><td>v_str</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>reactive power injection from VSC</td><td></td><td>v_str</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>d-axis current</td><td></td><td>v_str</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>q-axis current</td><td></td><td>v_str</td></tr><tr><td>PIvd_y</td><td>PIvd_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIqv_y</td><td>PIqv_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAl-geb</td><td>Alias of PIvd_y</td><td></td><td></td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAl-geb</td><td>Alias of PIqv_y</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>dw</td><td>dw</td><td>State</td><td>0</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>a</td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Id0</td></tr><tr><td>PIqv_xi</td><td>PIvqξ</td><td>State</td><td>Iq0</td></tr><tr><td>LGIid_y</td><td>LGIyd</td><td>State</td><td>PIvdy</td></tr><tr><td>LGIq_y</td><td>LGIqy</td><td>State</td><td>PIvqy</td></tr><tr><td>Pref2</td><td>Pref2</td><td>Algeb</td><td>Prefu</td></tr><tr><td>vref2</td><td>vref2</td><td>Algeb</td><td>uvref</td></tr><tr><td>omega</td><td>ω</td><td>Algeb</td><td>u</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>vd0</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>vq0</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>Pref</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>Qref</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>Id0</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Iq0</td></tr><tr><td>PIvd_y</td><td>PIvdy</td><td>Algeb</td><td>Id0 + Kpvd (vd - vref2)</td></tr><tr><td>PIqv_y</td><td>PIvqy</td><td>Algeb</td><td>Iq0 + Kpvqvq</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgeb</td><td></td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>dw</td><td>dw</td><td>State</td><td>-Ddw - Pe + Pref2</td><td>M</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>2πdwfn</td><td></td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Kivd (vd - vref2)</td><td></td></tr><tr><td>PIvq_xi</td><td>PIvqξ</td><td>State</td><td>Kivqvq</td><td></td></tr><tr><td>LGIid_y</td><td>LGIidy</td><td>State</td><td>-LGIdy + PIvdy</td><td>TId</td></tr><tr><td>LGIq_y</td><td>LGIqy</td><td>State</td><td>-LGIQy + PIvqy</td><td>TIq</td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>Pref2</td><td>Pref2</td><td>Algeb</td><td>Prefu - Pref2 - dwkw</td></tr><tr><td>vref2</td><td>vref2</td><td>Algeb</td><td>kv(-Qe + Qrefu) + vref - vref2</td></tr><tr><td>omega</td><td>ω</td><td>Algeb</td><td>dw - ω + 1</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>uv cos (a - δ) - vd</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>uv sin (a - δ) - vq</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>Idvd + Iqvq - Pe</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>Idqv - Iqvd - Qe</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>-Id + LGIdy</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>-Iq + LGIqy</td></tr><tr><td>PIvd_y</td><td>PIvd_y</td><td>Algeb</td><td>Kpvd (vd - vref2) + PIvdξ - PIvdy</td></tr><tr><td>PIqv_y</td><td>PIqv_y</td><td>Algeb</td><td>Kpvqvq + PIqvξ - PIqvγ</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>- Peu</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>- Qeu</td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgeb</td><td>0</td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgeb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>Pref</td><td>\(P_{ref}\)</td><td>gammapp0s</td><td>ConstService</td></tr><tr><td>Qref</td><td>\(Q_{ref}\)</td><td>gammaqq0s</td><td>ConstService</td></tr><tr><td>ixs</td><td>1/xs</td><td>\(\frac{1}{xs}\)</td><td>ConstService</td></tr><tr><td>Id0</td><td>\(I_{d0}\)</td><td>\(\frac{Prefu}{v}\)</td><td>ConstService</td></tr><tr><td>Iq0</td><td>\(I_{q0}\)</td><td>-\(\frac{Qrefu}{v}\)</td><td>ConstService</td></tr><tr><td>vd0</td><td>\(v_{d0}\)</td><td>uv</td><td>ConstService</td></tr><tr><td>vq0</td><td>\(v_{q0}\)</td><td>0</td><td>ConstService</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>PIvd</td><td>PIvd</td><td>PIController</td><td></td></tr><tr><td>PIqv</td><td>PIqv</td><td>PIController</td><td></td></tr><tr><td>LGIid</td><td>LGIid</td><td>Lag</td><td></td></tr><tr><td>LGIq</td><td>LGIq</td><td>Lag</td><td></td></tr></table>

Config Fields in [REGCV2] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.24.5 REGF1

Grid-forming inverter using droop. 

Implementation of EPRI Memorandum 

D. Ramasubramanian, "PROPOSAL FOR SUITE OF GENERIC GRID FORMING (GFM) POSITIVE SEQUENCE MODELS" 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatory</td></tr><tr><td>gen</td><td></td><td>static generator index</td><td></td><td></td><td>mandatory</td></tr><tr><td>Sn</td><td>Sn</td><td>Model MVA base</td><td>100</td><td>MVA</td><td></td></tr><tr><td>rf</td><td>ra</td><td>resistance</td><td>0</td><td></td><td>z</td></tr><tr><td>xf</td><td>xs</td><td>reactance</td><td>0.200</td><td></td><td>z</td></tr><tr><td>Vdip</td><td>Vdip</td><td>V threshold to freeze states</td><td>0.800</td><td>p.u.</td><td></td></tr><tr><td>Tfrz</td><td>Tfrz</td><td>Time to keep state frozen</td><td>0</td><td></td><td></td></tr><tr><td>PQFLAG</td><td></td><td>P/Q priority flag; 0-Q priority, 1-P priority</td><td>1</td><td>bool</td><td></td></tr><tr><td>fn</td><td>f</td><td>rated frequency</td><td>60</td><td></td><td></td></tr><tr><td>dwmax</td><td>Δωmax</td><td>maximum value of frequency deviation</td><td>75</td><td></td><td></td></tr><tr><td>dwmin</td><td>Δωmin</td><td>minimum value of frequency deviation</td><td>-75</td><td></td><td></td></tr><tr><td>wdrp</td><td>ωdrp</td><td>frequency droop percentage</td><td>0.033</td><td></td><td></td></tr><tr><td>Qdrp</td><td>Qdrp</td><td>Voltage droop percentage</td><td>0.045</td><td></td><td></td></tr><tr><td>Tr</td><td>Tc</td><td>transducer time constant</td><td>0.005</td><td>s</td><td></td></tr><tr><td>Te</td><td>Te</td><td>output state time constant</td><td>0.005</td><td>s</td><td></td></tr><tr><td>KPi</td><td>KPi</td><td>current control proportional gain</td><td>0.500</td><td></td><td>non_negative</td></tr><tr><td>KIi</td><td>KIi</td><td>current control integral gain</td><td>20</td><td></td><td>non_negative</td></tr><tr><td>KPv</td><td>KPv</td><td>voltage control proportional gain</td><td>3</td><td></td><td>non_negative</td></tr><tr><td>KIv</td><td>KIv</td><td>voltage control integral gain</td><td>10</td><td></td><td>non_negative</td></tr><tr><td>Pmax</td><td>Pmax</td><td>max. active power</td><td>1</td><td></td><td>non_negative,power</td></tr><tr><td>Pmin</td><td>Pmin</td><td>min. active power</td><td>-1</td><td></td><td>power</td></tr><tr><td>KPplim</td><td>KPplim</td><td>Kp for P limits</td><td>5</td><td></td><td>non_negative</td></tr><tr><td>KIplim</td><td>KIplim</td><td>KI for P limits</td><td>30</td><td></td><td>non_negative</td></tr></table>

continues on next page 


Table 32 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>Qmax</td><td>Qmax</td><td>max. reactive power</td><td>1</td><td></td><td>non_negatice,power</td></tr><tr><td>Qmin</td><td>Qmin</td><td>min. reactive power</td><td>-1</td><td></td><td>power</td></tr><tr><td>KPqlim</td><td>KPqlim</td><td>Kp for Q limits</td><td>0.100</td><td></td><td>non_negatice</td></tr><tr><td>KIqlim</td><td>KIqlim</td><td>KI for Q limits</td><td>1.500</td><td></td><td>non_negatice</td></tr><tr><td>Tpm</td><td>Tpm</td><td>power signal input delay (3 Delta t)</td><td>0.025</td><td></td><td></td></tr><tr><td>gammap</td><td>γP</td><td>P ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>gammaq</td><td>γQ</td><td>Q ratio of linked static gen</td><td>1</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>Psen_y</td><td>Psen_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>Qsen_y</td><td>Qsen_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>Psig_y</td><td>Psig_y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>Qsig_y</td><td>Qsig_y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>PIplim_xi</td><td>PIplimξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIqlim_xi</td><td>PIqlimξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>virtual delta</td><td>rad</td><td>v_str</td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIqv_xi</td><td>PIqvξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>udLag_y</td><td>udLag_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>uqLag_y</td><td>uqLag_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td>Alias of udLag_y</td><td></td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td>Alias of uqLag_y</td><td></td><td></td></tr><tr><td>Paux</td><td>Paux</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>Qaux</td><td>Qaux</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>PIplim_y</td><td>PIplim_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIqlim_y</td><td>PIqlim_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>d-axis voltage</td><td></td><td>v_str</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>q-axis voltage</td><td></td><td>v_str</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>active power injection from VSC</td><td></td><td>v_str</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>reactive power injection from VSC</td><td></td><td>v_str</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>d-axis current</td><td></td><td>v_str</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>q-axis current</td><td></td><td>v_str</td></tr><tr><td>dw_x</td><td>dw_x</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>dw_y</td><td>dw_y</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>vref2</td><td>vref2</td><td>Algeb</td><td>voltage reference after droop</td><td></td><td>v_str</td></tr><tr><td>PIvd_y</td><td>PIvd_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIqv_y</td><td>PIqv_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr></table>


continues on next page 



Table 33 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>PIId_y</td><td>PIId_y</td><td>Algeb</td><td>PI output</td><td>v_str</td><td></td></tr><tr><td>PIq_y</td><td>PIIq_y</td><td>Algeb</td><td>PI output</td><td>v_str</td><td></td></tr><tr><td>udref</td><td>udref</td><td>Algeb</td><td>ud reference</td><td>v_str</td><td></td></tr><tr><td>uqref</td><td>uqref</td><td>Algeb</td><td>uq reference</td><td>v_str</td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgeb</td><td>Alias of PIvd_y</td><td></td><td></td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgeb</td><td>Alias of PIqv_y</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>Psen_y</td><td>Psen_y</td><td>State</td><td>Pe</td></tr><tr><td>Qsen_y</td><td>Qsen_y</td><td>State</td><td>Qe</td></tr><tr><td>Psig_y</td><td>Psig_y</td><td>State</td><td>Paux + Psen_y</td></tr><tr><td>Qsig_y</td><td>Qsig_y</td><td>State</td><td>Qaux + Qsen_y</td></tr><tr><td>PIplim_xi</td><td>PIplimξ</td><td>State</td><td>Psen_y</td></tr><tr><td>PIqlim_xi</td><td>PIqlimξ</td><td>State</td><td>Qsen_y</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>a</td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Id0</td></tr><tr><td>PIvq_xi</td><td>PIvqξ</td><td>State</td><td>Iq0</td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>0.0</td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>0.0</td></tr><tr><td>udLag_y</td><td>udLag_y</td><td>State</td><td>udref</td></tr><tr><td>uqLag_y</td><td>uqLag_y</td><td>State</td><td>uqref</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td></td></tr><tr><td>Paux</td><td>Paux</td><td>Algeb</td><td>0</td></tr><tr><td>Qaux</td><td>Qaux</td><td>Algeb</td><td>0</td></tr><tr><td>PIplim_y</td><td>PIplim_y</td><td>Algeb</td><td>KPplim(-Psen_y + Psig_y) + Psen_y</td></tr><tr><td>PIqlim_y</td><td>PIqlim_y</td><td>Algeb</td><td>KPplim(-Qsen_y + Qsig_y) + Qsen_y</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>vd0</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>vq0</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>Pref</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>Qref</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>Id0</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Iq0</td></tr><tr><td>dw_x</td><td>dw_x</td><td>Algeb</td><td>w0wdrp (PIplim_y - Psen_y)</td></tr><tr><td>dw_y</td><td>dw_y</td><td>Algeb</td><td>dwlimzi dwx + dwlimzl dwmin + dwlimzudwmax</td></tr><tr><td>vref2</td><td>vref2</td><td>Algeb</td><td>uvref</td></tr><tr><td>PIvd_y</td><td>PIvd_y</td><td>Algeb</td><td>Id0 + KPv (-vd + vref2)</td></tr></table>

continues on next page 


Table 34 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>PIvq_y</td><td>PIvq_y</td><td>Algeb</td><td>Iq0 - KPvvq</td></tr><tr><td>PIId_y</td><td>PIId_y</td><td>Algeb</td><td>KPi(-Id + PIvdy)</td></tr><tr><td>PIIq_y</td><td>PIIq_y</td><td>Algeb</td><td>KPi(-Iq + PIvqy)</td></tr><tr><td>udref</td><td>udref</td><td>Algeb</td><td>udref0</td></tr><tr><td>uqref</td><td>uqref</td><td>Algeb</td><td>uqref0</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgeb</td><td></td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgeb</td><td></td></tr></table>


Differential Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>Psen_y</td><td>Psen_y</td><td>State</td><td>Pe - Psen_y</td><td>Tc</td></tr><tr><td>Qsen_y</td><td>Qsen_y</td><td>State</td><td>Qe - Qsen_y</td><td>Tc</td></tr><tr><td>Psig_y</td><td>Psig_y</td><td>State</td><td>Paux + Psen_y - Psig_y</td><td>Tpm</td></tr><tr><td>Qsig_y</td><td>Qsig_y</td><td>State</td><td>Qaux + Qsen_y - Qsig_y</td><td>Tpm</td></tr><tr><td>PIplim_xi</td><td>PIplimξ</td><td>State</td><td>KIplim (-Psen_y + Psig_y)</td><td></td></tr><tr><td>PIqlim_xi</td><td>PIqlimξ</td><td>State</td><td>KIqlim (-Qsen_y + Qsig_y)</td><td></td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>dw_y</td><td></td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>KIV(-vd + vref2)</td><td></td></tr><tr><td>PIvq_xi</td><td>PIvqξ</td><td>State</td><td>-KIVvvq</td><td></td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>KII(-Id + PIvd_y)</td><td></td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>KII(-Iq + PIvq_y)</td><td></td></tr><tr><td>udLag_y</td><td>udLag_y</td><td>State</td><td>-udLag_y + udref</td><td>Te</td></tr><tr><td>uqLag_y</td><td>uqLag_y</td><td>State</td><td>-uuLag_y + uqref</td><td>Te</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td>0</td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td>0</td><td></td></tr></table>


Algebraic Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>Paux</td><td>Paux</td><td>Algeb</td><td>Paux</td></tr><tr><td>Qaux</td><td>Qaux</td><td>Algeb</td><td>Qaux</td></tr><tr><td>PIplim_y</td><td>PIplim_y</td><td>Algeb</td><td>KPplim (-Pseny + Psigy) + PIplimξ - PIplim_y</td></tr><tr><td>PIqlim_y</td><td>PIqlim_y</td><td>Algeb</td><td>KPqlim (-Qseny + Qsigy) + PIqlimξ - PIqlim_y</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>uv cos (a - δ) - vd</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>uv sin (a - δ) - vq</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>Idvd + Iqvz - Pe</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>Idvq - Iqvd - Qe</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>Idrf - Iqxf - udLagy + vd</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Idxf + Iqrf - uqLagy + vq</td></tr><tr><td>dw_x</td><td>dwx</td><td>Algeb</td><td>-dwx + w0wdrp (PIplim_y - Pseny)</td></tr><tr><td>dw_y</td><td>dwy</td><td>Algeb</td><td>dwlimzi dwx + dwlimzl dwmin + dwlimzudwmax - dwy</td></tr><tr><td>vref2</td><td>vref2</td><td>Algeb</td><td>Qdrp (PIqlim_yu - Qseny) + vref - vref2</td></tr><tr><td>PIvd_y</td><td>PIvd_y</td><td>Algeb</td><td>KPv (-vd + vref2) + PIvdξ - PIvd_y</td></tr><tr><td>PIqv_y</td><td>PIqv_y</td><td>Algeb</td><td>-KPVvq + PIqvξ - PIqv_y</td></tr><tr><td>PIId_y</td><td>PIId_y</td><td>Algeb</td><td>KPi (-Id + PIvd_y) + PIIdξ - PIId_y</td></tr><tr><td>PIIq_y</td><td>PIIq_y</td><td>Algeb</td><td>KPi (-Iq + PIqv_y) + PIIqξ - PIIq_y</td></tr><tr><td>udref</td><td>udref</td><td>Algeb</td><td>Idrf - Iqxf + PIIdy - udref + vd</td></tr><tr><td>uqref</td><td>uqref</td><td>Algeb</td><td>Idxf + Iqrf + PIIq_y - uqref + vq</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>- Peu</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>-Qeu</td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgeb</td><td>0</td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgeb</td><td>0</td></tr></table>


Services


<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>Pref</td><td>\(P_{ref}\)</td><td>gammapp0s</td><td>ConstService</td></tr><tr><td>Qref</td><td>\(Q_{ref}\)</td><td>gammaqq0s</td><td>ConstService</td></tr><tr><td>w0</td><td>w0</td><td>2πfn</td><td>ConstService</td></tr><tr><td>ixf</td><td>1/xf</td><td>\(\frac{1}{xf}\)</td><td>ConstService</td></tr><tr><td>Id0</td><td>\(I_{d0}\)</td><td>\(\frac{Prefu}{v}\)</td><td>ConstService</td></tr><tr><td>Iq0</td><td>\(I_{q0}\)</td><td>-\(\frac{Q_{refu}}{v}\)</td><td>ConstService</td></tr><tr><td>vd0</td><td>\(v_{d0}\)</td><td>uv</td><td>ConstService</td></tr><tr><td>vq0</td><td>\(v_{q0}\)</td><td>0</td><td>ConstService</td></tr><tr><td>udref0</td><td>\(u_{dref0}\)</td><td>\(Id_0rf-Iq_0xf+vd_0\)</td><td>ConstService</td></tr><tr><td>uqref0</td><td>\(u_{qref0}\)</td><td>\(Id_0xf+Iq_0rf+q_0\)</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>PsigLim</td><td>limPsig</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>QsigLim</td><td>limQsig</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>dwLim</td><td>limdw</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>Psen</td><td>Psen</td><td>Lag</td><td></td></tr><tr><td>Qsen</td><td>Qsen</td><td>Lag</td><td></td></tr><tr><td>Psig</td><td>Psig</td><td>LagAntiWindup</td><td></td></tr><tr><td>Qsig</td><td>Qsig</td><td>LagAntiWindup</td><td></td></tr><tr><td>PIplim</td><td>PIplim</td><td>PIController</td><td></td></tr><tr><td>PIqlim</td><td>PIqlim</td><td>PIController</td><td></td></tr><tr><td>dw</td><td>dw</td><td>GainLimiter</td><td></td></tr><tr><td>PIvd</td><td>PIvd</td><td>PIController</td><td></td></tr><tr><td>PIqv</td><td>PIqv</td><td>PIController</td><td></td></tr><tr><td>PIId</td><td>PIId</td><td>PIController</td><td></td></tr><tr><td>PIIq</td><td>PIIq</td><td>PIController</td><td></td></tr><tr><td>udLag</td><td>udLag</td><td>Lag</td><td></td></tr><tr><td>uqLag</td><td>uqLag</td><td>Lag</td><td></td></tr></table>

Config Fields in [REGF1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.24.6 REGF2

Grid-forming inverter with VSM control. 

Implementation of EPRI Memorandum 

D. Ramasubramanian, "PROPOSAL FOR SUITE OF GENERIC GRID FORMING (GFM) POSITIVE SEQUENCE MODELS" 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatory</td></tr><tr><td>gen</td><td></td><td>static generator index</td><td></td><td></td><td>mandatory</td></tr><tr><td>Sn</td><td>Sn</td><td>Model MVA base</td><td>100</td><td>MVA</td><td></td></tr><tr><td>rf</td><td>ra</td><td>resistance</td><td>0</td><td></td><td>z</td></tr><tr><td>xf</td><td>xs</td><td>reactance</td><td>0.200</td><td></td><td>z</td></tr><tr><td>Vdip</td><td>Vdip</td><td>V threshold to freeze states</td><td>0.800</td><td>p.u.</td><td></td></tr><tr><td>Tfrz</td><td>Tfrz</td><td>Time to keep state frozen</td><td>0</td><td></td><td></td></tr><tr><td>PQFLAG</td><td></td><td>P/Q priority flag; 0-Q priority, 1-P priority</td><td>1</td><td>bool</td><td></td></tr><tr><td>fn</td><td>f</td><td>rated frequency</td><td>60</td><td></td><td></td></tr><tr><td>dwmax</td><td>Δωmax</td><td>maximum value of frequency deviation</td><td>75</td><td></td><td></td></tr><tr><td>dwmin</td><td>Δωmin</td><td>minimum value of frequency deviation</td><td>-75</td><td></td><td></td></tr><tr><td>wdrp</td><td>ωdrp</td><td>frequency droop percentage</td><td>0.033</td><td></td><td></td></tr><tr><td>Qdrp</td><td>Qdrp</td><td>Voltage droop percentage</td><td>0.045</td><td></td><td></td></tr><tr><td>Tr</td><td>Tc</td><td>transducer time constant</td><td>0.005</td><td>s</td><td></td></tr><tr><td>Te</td><td>Te</td><td>output state time constant</td><td>0.005</td><td>s</td><td></td></tr><tr><td>KPi</td><td>KPi</td><td>current control proportional gain</td><td>0.500</td><td></td><td>non_negative</td></tr><tr><td>KIi</td><td>KIi</td><td>current control integral gain</td><td>20</td><td></td><td>non_negative</td></tr><tr><td>KPv</td><td>KPv</td><td>voltage control proportional gain</td><td>3</td><td></td><td>non_negative</td></tr><tr><td>KIV</td><td>KV</td><td>voltage control integral gain</td><td>10</td><td></td><td>non_negative</td></tr><tr><td>Pmax</td><td>Pmax</td><td>max. active power</td><td>1</td><td></td><td>non_negative,power</td></tr><tr><td>Pmin</td><td>Pmin</td><td>min. active power</td><td>-1</td><td></td><td>power</td></tr><tr><td>KPplim</td><td>KPplim</td><td>Kp for P limits</td><td>5</td><td></td><td>non_negative</td></tr><tr><td>KIplim</td><td>KIplim</td><td>KI for P limits</td><td>30</td><td></td><td>non_negative</td></tr><tr><td>Qmax</td><td>Qmax</td><td>max. reactive power</td><td>1</td><td></td><td>non_negative,power</td></tr><tr><td>Qmin</td><td>Qmin</td><td>min. reactive power</td><td>-1</td><td></td><td>power</td></tr><tr><td>KPqlim</td><td>KPqlim</td><td>Kp for Q limits</td><td>0.100</td><td></td><td>non_negative</td></tr><tr><td>KIqlim</td><td>KIqlim</td><td>KI for Q limits</td><td>1.500</td><td></td><td>non_negative</td></tr><tr><td>Tpm</td><td>Tpm</td><td>power signal input delay (3 Delta t)</td><td>0.025</td><td></td><td></td></tr><tr><td>gamma</td><td>γP</td><td>P ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>gammaq</td><td>γQ</td><td>Q ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>mf</td><td>Mf</td><td>VSM inertia constant</td><td>0.150</td><td></td><td></td></tr><tr><td>dd</td><td>dd</td><td>VSM damping factor</td><td>0.110</td><td></td><td></td></tr><tr><td>pll</td><td></td><td>PLL device idx (optional)</td><td></td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>Psen_y</td><td>Psen_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>Qsen_y</td><td>Qsen_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>Psig_y</td><td>Psig_y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>Qsig_y</td><td>Qsig_y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>PIplim_xi</td><td>PIplimξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIqlim_xi</td><td>PIqlimξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>virtual delta</td><td>rad</td><td>v_str</td></tr><tr><td>INTw_y</td><td>INTw_y</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIqv_xi</td><td>PIqvξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>udLag_y</td><td>udLag_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>uqLag_y</td><td>uqLag_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td>Alias of udLag_y</td><td></td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td>Alias of uqLag_y</td><td></td><td></td></tr><tr><td>Paux</td><td>Paux</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>Qaux</td><td>Qaux</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>PIplim_y</td><td>PIplim_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIqlim_y</td><td>PIqlim_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>d-axis voltage</td><td></td><td>v_str</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>q-axis voltage</td><td></td><td>v_str</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>active power injection from VSC</td><td></td><td>v_str</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>reactive power injection from VSC</td><td></td><td>v_str</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>d-axis current</td><td></td><td>v_str</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>q-axis current</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>speed ref</td><td>pu</td><td>v_str</td></tr><tr><td>dw_x</td><td>dw_x</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>dw_y</td><td>dw_y</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>vref2</td><td>vref2</td><td>Algeb</td><td>voltage reference after droop</td><td></td><td>v_str</td></tr><tr><td>PIvd_y</td><td>PIvd_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIqv_y</td><td>PIqv_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIId_y</td><td>PIId_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIIq_y</td><td>PIIq_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>udref</td><td>udref</td><td>Algeb</td><td>ud reference</td><td></td><td>v_str</td></tr><tr><td>uqref</td><td>uqref</td><td>Algeb</td><td>uq reference</td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr><tr><td>plldw</td><td>plldw</td><td>ExtAlgeb</td><td>PLL measured freq. deviation</td><td></td><td></td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgeb</td><td>Alias of PIvd_y</td><td></td><td></td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgeb</td><td>Alias of PIqv_y</td><td></td><td></td></tr></table>


Initialization Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>Psen_y</td><td>Psen_y</td><td>State</td><td>Pe</td></tr><tr><td>Qsen_y</td><td>Qsen_y</td><td>State</td><td>Qe</td></tr><tr><td>Psig_y</td><td>Psig_y</td><td>State</td><td>Paux + Pseny</td></tr><tr><td>Qsig_y</td><td>Qsig_y</td><td>State</td><td>Qaux + Qseny</td></tr><tr><td>PIplim_xi</td><td>PIplimξ</td><td>State</td><td>Pseny</td></tr><tr><td>PIqlim_xi</td><td>PIqlimξ</td><td>State</td><td>Qseny</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>a</td></tr><tr><td>INTw_y</td><td>INTwy</td><td>State</td><td>wref</td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Id0</td></tr><tr><td>PIqv_xi</td><td>PIqvξ</td><td>State</td><td>Iq0</td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>0.0</td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>0.0</td></tr><tr><td>udLag_y</td><td>udLagy</td><td>State</td><td>udref</td></tr><tr><td>uqLag_y</td><td>uqLagy</td><td>State</td><td>uqref</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td></td></tr><tr><td>Paux</td><td>Paux</td><td>Algeb</td><td>0</td></tr><tr><td>Qaux</td><td>Qaux</td><td>Algeb</td><td>0</td></tr><tr><td>PIplim_y</td><td>PIplim_y</td><td>Algeb</td><td>KPplim (-Pseny + Psigy) + Pseny</td></tr><tr><td>PIqlim_y</td><td>PIqlim_y</td><td>Algeb</td><td>KPplim (-Qseny + Qsigy) + Qseny</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>vd0</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>vq0</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>Pref</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>Qref</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>Id0</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Iq0</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>1</td></tr><tr><td>dw_x</td><td>dwx</td><td>Algeb</td><td>w0 (INTwy - wref)</td></tr><tr><td>dw_y</td><td>dwy</td><td>Algeb</td><td>dwlimzi dwx + dwlimzl dwmin + dwlimzudwmax</td></tr><tr><td>vref2</td><td>vref2</td><td>Algeb</td><td>uvref</td></tr><tr><td>PIvd_y</td><td>PIvdy</td><td>Algeb</td><td>Id0 + KPv (-vd + vref2)</td></tr><tr><td>PIqv_y</td><td>PIvqv</td><td>Algeb</td><td>Iq0 - KPvvq</td></tr><tr><td>PIId_y</td><td>PIIdy</td><td>Algeb</td><td>KPi (-Id + PIvdy)</td></tr><tr><td>PIIq_y</td><td>PIIqy</td><td>Algeb</td><td>KPi (-Iq + PIvqy)</td></tr><tr><td>udref</td><td>udref</td><td>Algeb</td><td>udref0</td></tr><tr><td>uqref</td><td>uqref</td><td>Algeb</td><td>uqref0</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>plldw</td><td>plldw</td><td>ExtAlgeb</td><td></td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgeb</td><td></td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgeb</td><td></td></tr></table>


Differential Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T
(LHS)</td></tr><tr><td>Psen_y</td><td>Psen_y</td><td>State</td><td>Pe - Psen_y</td><td>Tc</td></tr><tr><td>Qsen_y</td><td>Qsen_y</td><td>State</td><td>Qe - Qsen_y</td><td>Tc</td></tr><tr><td>Psig_y</td><td>Psig_y</td><td>State</td><td>Paux + Psen_y - Psig_y</td><td>Tpm</td></tr><tr><td>Qsig_y</td><td>Qsig_y</td><td>State</td><td>Qaux + Qsen_y - Qsig_y</td><td>Tpm</td></tr><tr><td>PI-
plim_xi</td><td>PIplimξ</td><td>State</td><td>KIplim (-Psen_y + Psig_y)</td><td></td></tr><tr><td>PIqlim_xi</td><td>PIqlimξ</td><td>State</td><td>KIqlim (-Qsen_y + Qsig_y)</td><td></td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>dwy</td><td></td></tr><tr><td>INTw_y</td><td>INTwy</td><td>State</td><td>-INTwy + ddplldwwdrp + wdrp (PIplim_y - Psen_y) + wref</td><td>Tint</td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Klvp(-vd + vref2)</td><td></td></tr><tr><td>PIqv_xi</td><td>PIvqξ</td><td>State</td><td>-KIvvq</td><td></td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>KlI(-Id + PIvd_y)</td><td></td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>KlI(-Iq + PIvq_y)</td><td></td></tr><tr><td>udLag_y</td><td>udLag_y</td><td>State</td><td>-udLag_y + udref</td><td>Te</td></tr><tr><td>uqLag_y</td><td>uqLag_y</td><td>State</td><td>-uuLag_y + uqref</td><td>Te</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td>0</td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>Paux</td><td>Paux</td><td>Algeb</td><td>Paux</td></tr><tr><td>Qaux</td><td>Qaux</td><td>Algeb</td><td>Qaux</td></tr><tr><td>PIplim_y</td><td>PIplim_y</td><td>Algeb</td><td>KPplim (-Psen_y + Psig_y) + PIplimξ - PIplim_y</td></tr><tr><td>PIqlim_y</td><td>PIqlim_y</td><td>Algeb</td><td>KPqlim (-Qsen_y + Qsig_y) + PIqlimξ - PIqlim_y</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>uv cos (a - δ) - vd</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>uv sin (a - δ) - vq</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>Idvd + Iqvq - Pe</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>Idvq - Iqvd - Qe</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>Idrf - Iqxf - udLag_y + vd</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Idxf + Iqrf - uqLag_y + vq</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>1 - wref</td></tr><tr><td>dw_x</td><td>dw_x</td><td>Algeb</td><td>-dwx + w0 (INTwy - wref)</td></tr><tr><td>dw_y</td><td>dw_y</td><td>Algeb</td><td>dwlimzidwx + dwlimzldwmin + dwlimzudwmax - dwy</td></tr><tr><td>vref2</td><td>vref2</td><td>Algeb</td><td>Qdrp (PIqlim_yu - Qsen_y) + vref - vref2</td></tr><tr><td>PIvd_y</td><td>PIvd_y</td><td>Algeb</td><td>KPv (-vd + vref2) + PIvdξ - PIvd_y</td></tr><tr><td>PIvq_y</td><td>PIvq_y</td><td>Algeb</td><td>-KPVvq + PIvqξ - PIvq_y</td></tr><tr><td>PIId_y</td><td>PIId_y</td><td>Algeb</td><td>KPi (-Id + PIvd_y) + PIIdξ - PIIdy</td></tr><tr><td>PIIq_y</td><td>PIIq_y</td><td>Algeb</td><td>KPi (-Iq + PIvq_y) + PIIqξ - PIIq_y</td></tr><tr><td>udref</td><td>udref</td><td>Algeb</td><td>Idrf - Iqxf + PIIdy - udref + vd</td></tr><tr><td>uqref</td><td>uqref</td><td>Algeb</td><td>Idxf + Iqrf + PIIq_y - uqref + vq</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>- Peu</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>- Qeu</td></tr><tr><td>plldw</td><td>plldw</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgeb</td><td>0</td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgeb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>Pref</td><td>\(P_{ref}\)</td><td>gammaapp0s</td><td>ConstService</td></tr><tr><td>Qref</td><td>\(Q_{ref}\)</td><td>gammaqq0s</td><td>ConstService</td></tr><tr><td>w0</td><td>w0</td><td>2πfn</td><td>ConstService</td></tr><tr><td>ixf</td><td>1/xf</td><td>\(\frac{1}{xf}\)</td><td>ConstService</td></tr><tr><td>Id0</td><td>\(I_{d0}\)</td><td>\(\frac{Prefu}{v}\)</td><td>ConstService</td></tr><tr><td>Iq0</td><td>\(I_{q0}\)</td><td>-\(\frac{Q_{refu}}{v}\)</td><td>ConstService</td></tr><tr><td>vd0</td><td>\(v_{d0}\)</td><td>uv</td><td>ConstService</td></tr><tr><td>vq0</td><td>\(v_{q0}\)</td><td>0</td><td>ConstService</td></tr><tr><td>Tint</td><td>\(T_{int}\)</td><td>mfwdrp</td><td>ConstService</td></tr><tr><td>udref0</td><td>\(u_{dref0}\)</td><td>\(Id_0rf - Iq_0xf + vd_0\)</td><td>ConstService</td></tr><tr><td>uqref0</td><td>\(u_{qref0}\)</td><td>\(Id_0xf + Iq_0rf + vq_0\)</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>PsigLim</td><td>limPsig</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>QsigLim</td><td>limQsig</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>dwLim</td><td>limdw</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>Psen</td><td>Psen</td><td>Lag</td><td></td></tr><tr><td>Qsen</td><td>Qsen</td><td>Lag</td><td></td></tr><tr><td>Psig</td><td>Psig</td><td>LagAntiWindup</td><td></td></tr><tr><td>Qsig</td><td>Qsig</td><td>LagAntiWindup</td><td></td></tr><tr><td>PIplim</td><td>PIplim</td><td>PIController</td><td></td></tr><tr><td>PIqlim</td><td>PIqlim</td><td>PIController</td><td></td></tr><tr><td>INTw</td><td>INTw</td><td>Integrator</td><td></td></tr><tr><td>dw</td><td>dw</td><td>GainLimiter</td><td></td></tr><tr><td>PIvd</td><td>PIvd</td><td>PIController</td><td></td></tr><tr><td>PIqv</td><td>PIqv</td><td>PIController</td><td></td></tr><tr><td>PIId</td><td>PIId</td><td>PIController</td><td></td></tr><tr><td>PIIq</td><td>PIIq</td><td>PIController</td><td></td></tr><tr><td>udLag</td><td>udLag</td><td>Lag</td><td></td></tr><tr><td>uqLag</td><td>uqLag</td><td>Lag</td><td></td></tr></table>

Config Fields in [REGF2] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.24.7 REGF3

Grid-forming inverter with dVOC. 

Implementation of EPRI Memorandum 

D. Ramasubramanian, "PROPOSAL FOR SUITE OF GENERIC GRID FORMING (GFM) POSITIVE SEQUENCE MODELS" 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatory</td></tr><tr><td>gen</td><td></td><td>static generator index</td><td></td><td></td><td>mandatory</td></tr><tr><td>Sn</td><td>Sn</td><td>Model MVA base</td><td>100</td><td>MVA</td><td></td></tr><tr><td>rf</td><td>ra</td><td>resistance</td><td>0</td><td></td><td>z</td></tr><tr><td>xf</td><td>xs</td><td>reactance</td><td>0.200</td><td></td><td>z</td></tr><tr><td>Vdip</td><td>Vdip</td><td>V threshold to freeze states</td><td>0.800</td><td>p.u.</td><td></td></tr><tr><td>Tfrz</td><td>Tfrz</td><td>Time to keep state frozen</td><td>0</td><td></td><td></td></tr><tr><td>PQFLAG</td><td></td><td>P/Q priority flag; 0-Q priority, 1-P priority</td><td>1</td><td>bool</td><td></td></tr><tr><td>fn</td><td>f</td><td>rated frequency</td><td>60</td><td></td><td></td></tr><tr><td>dwmax</td><td>Δωmax</td><td>maximum value of frequency deviation</td><td>75</td><td></td><td></td></tr><tr><td>dwmin</td><td>Δωmin</td><td>minimum value of frequency deviation</td><td>-75</td><td></td><td></td></tr><tr><td>wdrp</td><td>ωdrp</td><td>frequency droop percentage</td><td>0.033</td><td></td><td></td></tr><tr><td>Qdrp</td><td>Qdrp</td><td>Voltage droop percentage</td><td>0.045</td><td></td><td></td></tr><tr><td>Tr</td><td>Tc</td><td>transducer time constant</td><td>0.005</td><td>s</td><td></td></tr><tr><td>Te</td><td>Te</td><td>output state time constant</td><td>0.005</td><td>s</td><td></td></tr><tr><td>KPi</td><td>KPi</td><td>current control proportional gain</td><td>0.500</td><td></td><td>non_negative</td></tr><tr><td>Kli</td><td>KIi</td><td>current control integral gain</td><td>20</td><td></td><td>non_negative</td></tr><tr><td>KPv</td><td>KPv</td><td>voltage control proportional gain</td><td>3</td><td></td><td>non_negative</td></tr><tr><td>KIV</td><td>KIV</td><td>voltage control integral gain</td><td>10</td><td></td><td>non_negative</td></tr><tr><td>Pmax</td><td>Pmax</td><td>max. active power</td><td>1</td><td></td><td>non_negative,power</td></tr><tr><td>Pmin</td><td>Pmin</td><td>min. active power</td><td>-1</td><td></td><td>power</td></tr><tr><td>KPplim</td><td>KPplim</td><td>Kp for P limits</td><td>5</td><td></td><td>non_negative</td></tr><tr><td>KIplim</td><td>KIplim</td><td>KI for P limits</td><td>30</td><td></td><td>non_negative</td></tr><tr><td>Qmax</td><td>Qmax</td><td>max. reactive power</td><td>1</td><td></td><td>non_negative,power</td></tr><tr><td>Qmin</td><td>Qmin</td><td>min. reactive power</td><td>-1</td><td></td><td>power</td></tr><tr><td>KPqlim</td><td>KPqlim</td><td>Kp for Q limits</td><td>0.100</td><td></td><td>non_negative</td></tr><tr><td>KIqlim</td><td>KIqlim</td><td>KI for Q limits</td><td>1.500</td><td></td><td>non_negative</td></tr><tr><td>Tpm</td><td>Tpm</td><td>power signal input delay (3 Delta t)</td><td>0.025</td><td></td><td></td></tr><tr><td>gamma</td><td>γP</td><td>P ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>gammaq</td><td>γQ</td><td>Q ratio of linked static gen</td><td>1</td><td></td><td></td></tr></table>


Variables


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>Psen_y</td><td>Psen_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>Qsen_y</td><td>Qsen_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>Psig_y</td><td>Psig_y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>Qsig_y</td><td>Qsig_y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>PIplim_xi</td><td>PIplimξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIqlim_xi</td><td>PIqlimξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>virtual delta</td><td>rad</td><td>v_str</td></tr><tr><td>vref2</td><td>vref2</td><td>State</td><td></td><td></td><td>v_str</td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIqv_xi</td><td>PIqvξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>udLag_y</td><td>udLag_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>uqLag_y</td><td>uqLag_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td>Alias of udLag_y</td><td></td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td>Alias of uqLag_y</td><td></td><td></td></tr><tr><td>Paux</td><td>Paux</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>Qaux</td><td>Qaux</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>PIplim_y</td><td>PIplim_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIqlim_y</td><td>PIqlim_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>d-axis voltage</td><td></td><td>v_str</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>q-axis voltage</td><td></td><td>v_str</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>active power injection from VSC</td><td></td><td>v_str</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>reactive power injection from VSC</td><td></td><td>v_str</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>d-axis current</td><td></td><td>v_str</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>q-axis current</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>speed ref</td><td>pu</td><td>v_str</td></tr><tr><td>Vref</td><td>Vref</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>dw_x</td><td>dw_x</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>dw_y</td><td>dw_y</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>derv</td><td>derv</td><td>Algeb</td><td>input to voltage integrator</td><td></td><td>v_str</td></tr><tr><td>PIvd_y</td><td>PIvd_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIqv_y</td><td>PIqv_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIId_y</td><td>PIId_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>PIIq_y</td><td>PIIq_y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>udref</td><td>udref</td><td>Algeb</td><td>ud reference</td><td></td><td>v_str</td></tr><tr><td>uqref</td><td>uqref</td><td>Algeb</td><td>uq reference</td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgeb</td><td>Alias of PIvd_y</td><td></td><td></td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgeb</td><td>Alias of PIqv_y</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>Psen_y</td><td>Psen_y</td><td>State</td><td>Pe</td></tr><tr><td>Qsen_y</td><td>Qsen_y</td><td>State</td><td>Qe</td></tr><tr><td>Psig_y</td><td>Psig_y</td><td>State</td><td>Paux + Pseny</td></tr><tr><td>Qsig_y</td><td>Qsig_y</td><td>State</td><td>Qaux + Qseny</td></tr><tr><td>PIplim_xi</td><td>PIplimξ</td><td>State</td><td>Pseny</td></tr><tr><td>PIqlim_xi</td><td>PIqlimξ</td><td>State</td><td>Qseny</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>a</td></tr><tr><td>vref2</td><td>vref2</td><td>State</td><td>vd</td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>Id0</td></tr><tr><td>PIqv_xi</td><td>PIqvξ</td><td>State</td><td>Iq0</td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>0.0</td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>0.0</td></tr><tr><td>udLag_y</td><td>udLag_y</td><td>State</td><td>udref</td></tr><tr><td>uqLag_y</td><td>uqLag_y</td><td>State</td><td>uqref</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td></td></tr><tr><td>Paux</td><td>Paux</td><td>Algeb</td><td>0</td></tr><tr><td>Qaux</td><td>Qaux</td><td>Algeb</td><td>0</td></tr><tr><td>PIplim_y</td><td>PIplim_y</td><td>Algeb</td><td>KPplim (-Pseny + Psigy) + Pseny</td></tr><tr><td>PIqlim_y</td><td>PIqlim_y</td><td>Algeb</td><td>KPqlim (-Qseny + Qsigy) + Qseny</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>vd0</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>vq0</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>Pref</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>Qref</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>Id0</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Iq0</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>1</td></tr><tr><td>Vref</td><td>Vref</td><td>Algeb</td><td>vref</td></tr><tr><td>dw_x</td><td>dwx</td><td>Algeb</td><td>w0wdrp(PIplim_y - Psigy)/vref2</td></tr><tr><td>dw_y</td><td>dwy</td><td>Algeb</td><td>dwlimzi dwx + dwlimzl dwmin + dwlimzu dwmax</td></tr><tr><td>derv</td><td>derv</td><td>Algeb</td><td>0</td></tr><tr><td>PIvd_y</td><td>PIvdy</td><td>Algeb</td><td>Id0 + KPv (-vd + vref2)</td></tr><tr><td>PIqv_y</td><td>PIqvγ</td><td>Algeb</td><td>Iq0 - KPvvq</td></tr><tr><td>PIId_y</td><td>PIIdy</td><td>Algeb</td><td>KPI (-Id + PIvdy)</td></tr><tr><td>PIIq_y</td><td>PIIqγ</td><td>Algeb</td><td>KPI (-Iq + PIqvγ)</td></tr><tr><td>udref</td><td>udref</td><td>Algeb</td><td>udref0</td></tr><tr><td>uqref</td><td>uqref</td><td>Algeb</td><td>uqref0</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAlgeb</td><td></td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>Psen_y</td><td>Psen_y</td><td>State</td><td>Pe - Psen_y</td><td>Tc</td></tr><tr><td>Qsen_y</td><td>Qsen_y</td><td>State</td><td>Qe - Qsen_y</td><td>Tc</td></tr><tr><td>Psig_y</td><td>Psig_y</td><td>State</td><td>Paux + Psen_y - Psig_y</td><td>Tpm</td></tr><tr><td>Qsig_y</td><td>Qsig_y</td><td>State</td><td>Qaux + Qsen_y - Qsig_y</td><td>Tpm</td></tr><tr><td>PIplim_xi</td><td>PIplimξ</td><td>State</td><td>KIplim (-Psen_y + Psig_y)</td><td></td></tr><tr><td>PIqlim_xi</td><td>PIqlimξ</td><td>State</td><td>KIqlim (-Qsen_y + Qsig_y)</td><td></td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>dwy</td><td></td></tr><tr><td>vref2</td><td>vref2</td><td>State</td><td>dervw0</td><td></td></tr><tr><td>PIvd_xi</td><td>PIvdξ</td><td>State</td><td>KIV(-vd + vref2)</td><td></td></tr><tr><td>PIqv_xi</td><td>PIqvξ</td><td>State</td><td>-KIVvvq</td><td></td></tr><tr><td>PIId_xi</td><td>PIIdξ</td><td>State</td><td>KII(-Id + PIvd_y)</td><td></td></tr><tr><td>PIIq_xi</td><td>PIIqξ</td><td>State</td><td>KII(-Iq + PIvq_y)</td><td></td></tr><tr><td>udLag_y</td><td>udLag_y</td><td>State</td><td>-udLag_y + udref</td><td>Te</td></tr><tr><td>uqLag_y</td><td>uqLag_y</td><td>State</td><td>-uuLag_y + uqref</td><td>Te</td></tr><tr><td>ud</td><td>ud</td><td>AliasState</td><td>0</td><td></td></tr><tr><td>uq</td><td>uq</td><td>AliasState</td><td>0</td><td></td></tr></table>


Algebraic Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>Paux</td><td>Paux</td><td>Algeb</td><td>Paux</td></tr><tr><td>Qaux</td><td>Qaux</td><td>Algeb</td><td>Qaux</td></tr><tr><td>PI-prim_y</td><td>PIplim_y</td><td>Algeb</td><td>KPimpl(-Pseny+Psigy)+PIplimξ-PIplim_y</td></tr><tr><td>PIqlim_y</td><td>PIqlim_y</td><td>Algeb</td><td>KPqlim(-Qseny+Qsigy)+PIqlimξ-PIqlim_y</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>uv cos(a-δ)-vd</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>uv sin(a-δ)-vq</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>Idvd+Iqvz-Pe</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>Idqv-Qvd-Qe</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>Idrf-Iqxf-udLagy+vd</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Idxf+Iqrf-uqLagy+q</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>1-wref</td></tr><tr><td>Vref</td><td>Vref</td><td>Algeb</td><td>-Vref+vwref</td></tr><tr><td>dw_x</td><td>dw_x</td><td>Algeb</td><td>-dwx+wwpd(Pfplim_y-Pseny)/vref2</td></tr><tr><td>dw_y</td><td>dw_y</td><td>Algeb</td><td>dwlimzi dwx+dwlimzl dwmin+dwlimzudwmax-dwy</td></tr><tr><td>derv</td><td>derv</td><td>Algeb</td><td>Kdvocref2(Vref-vref2)(Vref+vref2) - deriv + wdrp(PIplim_y-Qseny)/vref2</td></tr><tr><td>PIvd_y</td><td>PIvd_y</td><td>Algeb</td><td>KPv(-vd+vwref2)+PIvdξ-PIvdy</td></tr><tr><td>PIqv_y</td><td>PIqv_y</td><td>Algeb</td><td>-KPvvq+PIvqξ-PIvqv_y</td></tr><tr><td>PIId_y</td><td>PIId_y</td><td>Algeb</td><td>KPi(-Id+PIvdy)+PIIdξ-PIIdy</td></tr><tr><td>PIIq_y</td><td>PIIq_y</td><td>Algeb</td><td>KPi(-Iq+PIvqy)+PIIqξ-PIIqy</td></tr><tr><td>udref</td><td>udref</td><td>Algeb</td><td>Idrf-Iqxf+PIIdy-udref+vd</td></tr><tr><td>uqref</td><td>uqref</td><td>Algeb</td><td>Idxf+Iqrf+PIIqy-ugref+q</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>-Peu</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>-Qeu</td></tr><tr><td>Idref</td><td>Idref</td><td>AliasAl-geb</td><td>0</td></tr><tr><td>Iqref</td><td>Iqref</td><td>AliasAl-geb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>Pref</td><td>\(P_{ref}\)</td><td>gammaapp0s</td><td>ConstService</td></tr><tr><td>Qref</td><td>\(Q_{ref}\)</td><td>gammaqq0s</td><td>ConstService</td></tr><tr><td>w0</td><td>w0</td><td>2πfn</td><td>ConstService</td></tr><tr><td>ixf</td><td>1/xf</td><td>\(\frac{1}{xf}\)</td><td>ConstService</td></tr><tr><td>Id0</td><td>\(I_{d0}\)</td><td>\(\frac{Prefu}{v}\)</td><td>ConstService</td></tr><tr><td>Iq0</td><td>\(I_{q0}\)</td><td>-\(\frac{Q_{refu}}{v}\)</td><td>ConstService</td></tr><tr><td>vd0</td><td>\(v_{d0}\)</td><td>uv</td><td>ConstService</td></tr><tr><td>vq0</td><td>\(v_{q0}\)</td><td>0</td><td>ConstService</td></tr><tr><td>Kdvoc</td><td>Kdvoc</td><td>\(\frac{400000000wdrp}{(99990000-2(100-100Qdrp)^2)^2}\)</td><td>ConstService</td></tr><tr><td>udref0</td><td>\(u_{dref0}\)</td><td>\(Id_0rf - Iq_0xf + vd_0\)</td><td>ConstService</td></tr><tr><td>uqref0</td><td>\(u_{qref0}\)</td><td>\(Id_0xf + Iq_0rf + vq_0\)</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>PsigLim</td><td>limPsig</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>QsigLim</td><td>limQsig</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>dwLim</td><td>limdw</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>Psen</td><td>Psen</td><td>Lag</td><td></td></tr><tr><td>Qsen</td><td>Qsen</td><td>Lag</td><td></td></tr><tr><td>Psig</td><td>Psig</td><td>LagAntiWindup</td><td></td></tr><tr><td>Qsig</td><td>Qsig</td><td>LagAntiWindup</td><td></td></tr><tr><td>PIplim</td><td>PIplim</td><td>PIController</td><td></td></tr><tr><td>PIqlim</td><td>PIqlim</td><td>PIController</td><td></td></tr><tr><td>dw</td><td>dw</td><td>GainLimiter</td><td></td></tr><tr><td>PIvd</td><td>PIvd</td><td>PIController</td><td></td></tr><tr><td>PIqv</td><td>PIqv</td><td>PIController</td><td></td></tr><tr><td>PIId</td><td>PIId</td><td>PIController</td><td></td></tr><tr><td>PIIq</td><td>PIIq</td><td>PIController</td><td></td></tr><tr><td>udLag</td><td>udLag</td><td>Lag</td><td></td></tr><tr><td>uqLag</td><td>uqLag</td><td>Lag</td><td></td></tr></table>

Config Fields in [REGF3] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.25 RenGovernor

Renewable turbine governor group. 

Common Parameters: u, name, ree, w0, Sn, Pe0 

Common Variables: Pm, wr0, wt, wg, s3_y 

Available models: WTDTA1, WTDS 

# 5.25.1 WTDTA1

WTDTA wind turbine drive-train model. 

One can set Htfrac to 0 to simulate a single-mass drive train. Htfrac has to be within [0, 1] 

User-provided reference speed should be specified in parameter $w O$ . Internally, $w O$ is set to the algebraic variable wr0. 

Note for PSS/E dyr parser: 

In PSS/E doc, Freq1 is said to be Hz, but exported data from PSS/E 34 uses per unit. ANDES requires Freq1 in per unit frequency. 


Parameters


<table><tr><td>Name</td><td>Sym-bol</td><td>Description</td><td>De-fault</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>ree</td><td></td><td>Renewable exciter idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>H</td><td>Ht</td><td>Total inertia constant</td><td>3</td><td>MWs/MVA</td><td>non_zero,non_negatice,power</td></tr><tr><td>DAMP</td><td>Damp</td><td>Damp coefficient</td><td>0</td><td>p.u. (gen base)</td><td>power</td></tr><tr><td>Ht- frac</td><td>Dshaft</td><td>Turbine inertia fraction (Hturb/H)</td><td>0.500</td><td></td><td>power</td></tr><tr><td>Freq1</td><td>Freq1</td><td>First shaft torsional resonant frequency, p.u. (Hz)</td><td>1</td><td>p.u. (Hz)</td><td></td></tr><tr><td>Dshaft</td><td>Dshaft</td><td>Shaft damping factor</td><td>1</td><td>p.u. (gen base)</td><td>power</td></tr><tr><td>w0</td><td>ω0</td><td>Default speed if not using a torque model</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>reg</td><td></td><td></td><td>0</td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td></td><td>0</td><td></td><td></td></tr></table>


Variables


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>s2_y</td><td>s2y</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>s3_y</td><td>s3y</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>wt</td><td>wt</td><td>AliasState</td><td>Alias of s1_y</td><td></td><td></td></tr><tr><td>wg</td><td>wg</td><td>AliasState</td><td>Alias of s2_y</td><td></td><td></td></tr><tr><td>wr0</td><td>wr0</td><td>Algeb</td><td>speed set point</td><td>p.u.</td><td>v_str</td></tr><tr><td>Pm</td><td>Pm</td><td>Algeb</td><td>Mechanical power</td><td></td><td>v_str</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>Output after damping</td><td></td><td>v_str</td></tr><tr><td>wge</td><td>wge</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td>Retrieved Pe of RenGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>wro</td></tr><tr><td>s2_y</td><td>s2y</td><td>State</td><td>wro</td></tr><tr><td>s3_y</td><td>s3y</td><td>State</td><td>Pe0/wro</td></tr><tr><td>wt</td><td>wt</td><td>AliasState</td><td></td></tr><tr><td>wg</td><td>wg</td><td>AliasState</td><td></td></tr><tr><td>wr0</td><td>wr0</td><td>Algeb</td><td>w0</td></tr><tr><td>Pm</td><td>Pm</td><td>Algeb</td><td>Pe0</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>0</td></tr><tr><td>wge</td><td>wge</td><td>ExtAlgeb</td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>1.0Pm/s1y - 1.0pd - 1.0s3y</td><td>2Ht</td></tr><tr><td>s2_y</td><td>s2y</td><td>State</td><td>-1.0DAMP(s2y - w0) - 1.0Pe/s2y + 1.0pd + 1.0s3y</td><td>2Hg</td></tr><tr><td>s3_y</td><td>s3y</td><td>State</td><td>Kshaft(s1y - s2y)</td><td>1.0</td></tr><tr><td>wt</td><td>wt</td><td>AliasState</td><td>0</td><td></td></tr><tr><td>wg</td><td>wg</td><td>AliasState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>wr0</td><td>wro</td><td>Algeb</td><td>w0 - wr0</td></tr><tr><td>Pm</td><td>Pm</td><td>Algeb</td><td>Pe0 - Pm</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>Dshaft(s1y - s2y) - pd</td></tr><tr><td>wge</td><td>wge</td><td>ExtAlgeb</td><td>s2y - 1.0</td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>Ht2</td><td>2Ht</td><td>2HHtfrac</td><td>ConstService</td></tr><tr><td>Hg2</td><td>2Hg</td><td>2H(1-Htfrac)</td><td>ConstService</td></tr><tr><td>Kshaft</td><td>Kshaft</td><td>0.5Freq12Hg2Ht2/H</td><td>ConstService</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>s1</td><td>s1</td><td>Integrator</td><td></td></tr><tr><td>s2</td><td>s2</td><td>Integrator</td><td></td></tr><tr><td>s3</td><td>s3</td><td>Integrator</td><td></td></tr></table>

Config Fields in [WTDTA1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr></table>

# 5.25.2 WTDS

Custom wind turbine model with a single swing-equation. 

This model is used to simulate the mechanical swing of the combined machine and turbine mass. The speed output is $\mathbb { s } 1 { \_ } \mathbb { J }$ which will be fed to RenExciter.wg. 

PFLAG needs to be set to 1 in exciter to consider speed for Pref. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>ree</td><td></td><td>Renewable exciter idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>H</td><td>Ht</td><td>Total inertia</td><td>3</td><td>MWs/MVA</td><td>non_zero, non_negatice, power</td></tr><tr><td>D</td><td>Dshaft</td><td>Damping coefficient</td><td>1</td><td>p.u.</td><td>power</td></tr><tr><td>w0</td><td>ω0</td><td>Default speed if not using a torque model</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>reg</td><td></td><td></td><td>0</td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td></td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>s3_y</td><td>s3y</td><td>State</td><td>Unused state variable</td><td></td><td></td></tr><tr><td>wt</td><td>wt</td><td>AliasState</td><td>Alias of s1_y</td><td></td><td></td></tr><tr><td>wg</td><td>wg</td><td>AliasState</td><td>Alias of s1_y</td><td></td><td></td></tr><tr><td>Pm</td><td>Pm</td><td>Algeb</td><td>Mechanical power</td><td></td><td>v_str</td></tr><tr><td>wr0</td><td>wr0</td><td>Algeb</td><td>speed set point</td><td>p.u.</td><td>v_str</td></tr><tr><td>wge</td><td>wge</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td>Retrieved Pe of RenGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>wro</td></tr><tr><td>s3_y</td><td>s3y</td><td>State</td><td></td></tr><tr><td>wt</td><td>wt</td><td>AliasState</td><td></td></tr><tr><td>wg</td><td>wg</td><td>AliasState</td><td></td></tr><tr><td>Pm</td><td>Pm</td><td>Algeb</td><td>Pe0</td></tr><tr><td>wr0</td><td>wr0</td><td>Algeb</td><td>w0</td></tr><tr><td>wge</td><td>wge</td><td>ExtAlgeb</td><td></td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td></td></tr></table>

# 5.25. RenGovernor

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>-1.0D (s1y - wr0) + 1.0(-Pe+Pm)/wge</td><td>2H</td></tr><tr><td>s3_y</td><td>s3y</td><td>State</td><td>0</td><td></td></tr><tr><td>wt</td><td>wt</td><td>AliasState</td><td>0</td><td></td></tr><tr><td>wg</td><td>wg</td><td>AliasState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>Pm</td><td>Pm</td><td>Algeb</td><td>Pe0 - Pm</td></tr><tr><td>wr0</td><td>wr0</td><td>Algeb</td><td>w0 - wr0</td></tr><tr><td>wge</td><td>wge</td><td>ExtAlgeb</td><td>s1y - 1.0</td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>H2</td><td>2H</td><td>2H</td><td>ConstService</td></tr><tr><td>Kshaft</td><td>Kshaft</td><td>1.0</td><td>ConstService</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>s1</td><td>s1</td><td>Integrator</td><td></td></tr></table>

Config Fields in [WTDS] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.26 RenPitch

Renewable generator pitch controller group. 

Common Parameters: u, name, rea 

Available models: WTPTA1 

# 5.26.1 WTPTA1

Wind turbine pitch control model. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>rea</td><td></td><td>Renewable aerodynamics model idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>Kiw</td><td>Kiw</td><td>Pitch-control integral gain</td><td>0.100</td><td>p.u.</td><td></td></tr><tr><td>Kpw</td><td>Kpw</td><td>Pitch-control proportional gain</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>Kic</td><td>Kic</td><td>Pitch-compensation integral gain</td><td>0.100</td><td>p.u.</td><td></td></tr><tr><td>Kpc</td><td>Kpc</td><td>Pitch-compensation proportional gain</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>Kcc</td><td>Kcc</td><td>Gain for P diff</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>Tp</td><td>Tθ</td><td>Blade response time const.</td><td>0.300</td><td>s</td><td></td></tr><tr><td>thmax</td><td>θmax</td><td>Max. pitch angle</td><td>30</td><td>deg.</td><td></td></tr><tr><td>thmin</td><td>θmin</td><td>Min. pitch angle</td><td>0</td><td>deg.</td><td></td></tr><tr><td>dthmax</td><td>θmax</td><td>Max. pitch angle rate</td><td>5</td><td>deg.</td><td></td></tr><tr><td>dthmin</td><td>θmin</td><td>Min. pitch angle rate</td><td>-5</td><td>deg.</td><td></td></tr><tr><td>rego</td><td></td><td></td><td>0</td><td></td><td></td></tr><tr><td>ree</td><td></td><td></td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>PIc_xi</td><td>\(P I c_{\xi}\)</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>PIw_xi</td><td>\(P I w_{\xi}\)</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>LG_y</td><td>\(L G_{y}\)</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>wt</td><td>wt</td><td>ExtState</td><td></td><td></td><td></td></tr><tr><td>Pord</td><td>Pord</td><td>ExtState</td><td></td><td></td><td></td></tr><tr><td>PIc_yul</td><td>\(P I c_{yul}\)</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>PIc_y</td><td>\(P I c_{y}\)</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>optional speed reference</td><td></td><td>v_str</td></tr><tr><td>PIw_yul</td><td>\(P I w_{yul}\)</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>PIw_y</td><td>\(P I w_{y}\)</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>theta</td><td>θ</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr><tr><td>Pref</td><td>Pref</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>PIc_xi</td><td>PICξ</td><td>State</td><td>0.0</td></tr><tr><td>PIw_xi</td><td>PIwξ</td><td>State</td><td>0.0</td></tr><tr><td>LG_y</td><td>LGY</td><td>State</td><td>1.0PICy + 1.0PIwy</td></tr><tr><td>wt</td><td>wt</td><td>ExtState</td><td></td></tr><tr><td>Pord</td><td>Pord</td><td>ExtState</td><td></td></tr><tr><td>PIc_yul</td><td>PICyul</td><td>Algeb</td><td>Kpc(Pord - Pref)</td></tr><tr><td>PIc_y</td><td>PICy</td><td>Algeb</td><td>PIchlziPICyul + PIchlzlthmin + PIchlzuthmax</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>wt</td></tr><tr><td>PIw_yul</td><td>PIwyul</td><td>Algeb</td><td>Kpw(Kcc(Pord - Pref) - wref + wt)</td></tr><tr><td>PIw_y</td><td>PIwy</td><td>Algeb</td><td>PIwhziPICwyul + PIwhzlthmin + PIwhzuthmax</td></tr><tr><td>theta</td><td>θ</td><td>ExtAlgeb</td><td></td></tr><tr><td>Pref</td><td>Pref</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>PIc_xi</td><td>PIcξ</td><td>State</td><td>Kic(Pord - Pref)</td><td></td></tr><tr><td>PIw_xi</td><td>PIwξ</td><td>State</td><td>Kiw(Kcc(Pord - Pref) - wref + wt)</td><td></td></tr><tr><td>LG_y</td><td>LGy</td><td>State</td><td>-LGy+1.0PIcy+1.0PIwy</td><td>Tθ</td></tr><tr><td>wt</td><td>wt</td><td>ExtState</td><td>0</td><td></td></tr><tr><td>Pord</td><td>Pord</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>PIc_yul</td><td>PIcyul</td><td>Algeb</td><td>Kpc (Pord - Pref) + PICξ - PICyul</td></tr><tr><td>PIc_y</td><td>PIcy</td><td>Algeb</td><td>PIchlziPIcyul + PIchzlithmin + PIchlzuithmax - PICy</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>-wref + wref0</td></tr><tr><td>PIw_yul</td><td>PIwyul</td><td>Algeb</td><td>Kpw (Kcc (Pord - Pref) - wref + wt) + PIwξ - Piwyul</td></tr><tr><td>PIw_y</td><td>PIwy</td><td>Algeb</td><td>PIwhlziPIwyul + PIchzlithmin + PIchlzuithmax - Piwy</td></tr><tr><td>theta</td><td>θ</td><td>ExtAlgeb</td><td>LGy - θ0</td></tr><tr><td>Pref</td><td>Pref</td><td>ExtAlgeb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>wref0</td><td>wref0</td><td>wref</td><td>PostInitService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>PIc_aw</td><td>awPIc</td><td>AntiWindup</td><td></td></tr><tr><td>PIc_hl</td><td>hlPIc</td><td>HardLimiter</td><td></td></tr><tr><td>PIw_aw</td><td>awPIw</td><td>AntiWindup</td><td></td></tr><tr><td>PIw_hl</td><td>hlPIw</td><td>HardLimiter</td><td></td></tr><tr><td>LG_lim</td><td>limLG</td><td>AntiWindupRate</td><td>Limiter in Lag</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>PIc</td><td>\(P I_{c}\)</td><td>PIAWHardLimit</td><td>PI for active power diff compensation</td></tr><tr><td>PIw</td><td>\(P I_{w}\)</td><td>PIAWHardLimit</td><td>PI for speed and active power deviation</td></tr><tr><td>LG</td><td>\(L G\)</td><td>LagAntiWindupRate</td><td>Output lag anti-windup rate limiter</td></tr></table>

Config Fields in [WTPTA1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr></table>

# 5.27 RenPlant

Renewable plant control group. 

Common Parameters: u, name 

Available models: REPCA1 

# 5.27.1 REPCA1

REPCA1: renewable energy power plat control model. 

The output of the model, Pext and Qext, are the increment signals of active and reactive power for the electrical control model. 

Notes for PSS/E DYR parser: 

1. If ICONs $\mathbf { M } { + } 1$ and $_ { \mathbf { M } + 2 }$ are set to 0 when using generator power, an error will be thrown by the parser, saying "<REPCA1> cannot retrieve <bus1 $>$ from <ACLine> using <line>: KeyError('Group <ACLine> does not contain device with idx $\ l =$ False')". Manual effort is required to run the converted file. In the REPCA1 sheet, provide the idx of a line that connects to the RenGen bus. 

2. PSS/E enters ICONs $\mathbf { M } { + } 3$ as a string in single quotes. The pair of single quotes need to be removed, or the conversion will fail. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>ree</td><td></td><td>RenExciter idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>line</td><td></td><td>Idx of line that connect to measured bus</td><td></td><td></td><td>mandatory</td></tr><tr><td>busr</td><td></td><td>Optional remote bus for voltage and freq. measurement</td><td></td><td></td><td></td></tr><tr><td>busf</td><td></td><td>BusFreq idx for mode 2</td><td></td><td></td><td></td></tr><tr><td>VCFlag</td><td></td><td>Droop flag; 0-with droop if power factor ctrl, 1-line drop comp.</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>RefFlag</td><td></td><td>Q/V select; 0-Q control, 1-V control</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>Fflag</td><td></td><td>Frequency control flag; 0 DISABLE, 1-enable</td><td></td><td>bool</td><td>mandatory</td></tr></table>

continues on next page 


Table 41 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>PLflag</td><td></td><td>Pline ctrl. flag; 0 disable, 1-enable</td><td>True</td><td>bool</td><td></td></tr><tr><td>Tfltr</td><td>\(T_{fltr}\)</td><td>V or Q filter time const.</td><td>0.020</td><td></td><td></td></tr><tr><td>Kp</td><td>\(K_p\)</td><td>Q proportional gain</td><td>1</td><td></td><td></td></tr><tr><td>Ki</td><td>\(K_i\)</td><td>Q integral gain</td><td>0.100</td><td></td><td></td></tr><tr><td>Tft</td><td>\(T_{ft}\)</td><td>Lead time constant</td><td>1</td><td></td><td></td></tr><tr><td>Tfv</td><td>\(T_{fv}\)</td><td>Lag time constant</td><td>1</td><td></td><td></td></tr><tr><td>Vfrz</td><td>\(V_{frz}\)</td><td>Voltage below which s2 is frozen</td><td>0.800</td><td></td><td></td></tr><tr><td>Rc</td><td>\(R_c\)</td><td>Line drop compensation R</td><td></td><td></td><td></td></tr><tr><td>Xc</td><td>\(X_c\)</td><td>Line drop compensation R</td><td></td><td></td><td></td></tr><tr><td>Kc</td><td>\(K_c\)</td><td>Reactive power compensation gain</td><td>0</td><td></td><td></td></tr><tr><td>emax</td><td>\(e_{max}\)</td><td>Upper limit on deadband output</td><td>999</td><td></td><td></td></tr><tr><td>emin</td><td>\(e_{min}\)</td><td>Lower limit on deadband output</td><td>-999</td><td></td><td></td></tr><tr><td>dbd1</td><td>\(d_{bd1}\)</td><td>Lower threshold for reactive power control deadband (&lt;=0)</td><td>-0.100</td><td></td><td></td></tr><tr><td>dbd2</td><td>\(d_{bd2}\)</td><td>Upper threshold for reactive power control deadband (&gt;=0)</td><td>0.100</td><td></td><td></td></tr><tr><td>Qmax</td><td>\(Q_{max}\)</td><td>Upper limit on output of V-Q control</td><td>999</td><td></td><td></td></tr><tr><td>Qmin</td><td>\(Q_{min}\)</td><td>Lower limit on output of V-Q control</td><td>-999</td><td></td><td></td></tr><tr><td>Kpg</td><td>\(K_{pg}\)</td><td>Proportional gain for power control</td><td>1</td><td></td><td></td></tr><tr><td>Kig</td><td>\(K_{ig}\)</td><td>Integral gain for power control</td><td>0.100</td><td></td><td></td></tr><tr><td>Tp</td><td>\(T_p\)</td><td>Time constant for P measurement</td><td>0.020</td><td></td><td></td></tr><tr><td>fdb1</td><td>\(f_{fdb1}\)</td><td>Lower threshold for freq. error deadband</td><td>-0.000</td><td>p.u. (Hz)</td><td></td></tr><tr><td>fdb2</td><td>\(f_{fdb2}\)</td><td>Upper threshold for freq. error deadband</td><td>0.000</td><td>p.u. (Hz)</td><td></td></tr><tr><td>femax</td><td>\(f_{emax}\)</td><td>Upper limit for freq. error</td><td>0.050</td><td></td><td></td></tr><tr><td>femin</td><td>\(f_{emin}\)</td><td>Lower limit for freq. error</td><td>-0.050</td><td></td><td></td></tr><tr><td>Pmax</td><td>\(P_{max}\)</td><td>Upper limit on power error (used by PI ctrl.)</td><td>999</td><td>p.u. (MW)</td><td>power</td></tr><tr><td>Pmin</td><td>\(P_{min}\)</td><td>Lower limit on power error (used by PI ctrl.)</td><td>-999</td><td>p.u. (MW)</td><td>power</td></tr><tr><td>Tg</td><td>\(T_g\)</td><td>Power controller lag time constant</td><td>0.020</td><td></td><td></td></tr><tr><td>Ddn</td><td>\(D_{dn}\)</td><td>Reciprocal of droop for over-freq. conditions</td><td>10</td><td></td><td></td></tr><tr><td>Dup</td><td>\(D_{up}\)</td><td>Reciprocal of droop for under-freq. conditions</td><td>10</td><td></td><td></td></tr><tr><td>reg</td><td></td><td>Retrieved RenGen idx</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>Retrieved bus idx</td><td></td><td></td><td></td></tr><tr><td>bus1</td><td></td><td>Retrieved Line.bus1 idx</td><td></td><td></td><td></td></tr><tr><td>bus2</td><td></td><td>Retrieved Line.bus2 idx</td><td></td><td></td><td></td></tr><tr><td>r</td><td></td><td>Retrieved Line.r</td><td></td><td></td><td></td></tr><tr><td>x</td><td></td><td>Retrieved Line.x</td><td></td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>s2_xi</td><td>s2ξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr></table>


continues on next page 



Table 42 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>s3_x</td><td>s3x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>s5(xi</td><td>s5ξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>s6_y</td><td>s6y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>Vref</td><td>Vref</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>Qlinef</td><td>Qlinef</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>Refsel</td><td>Refsel</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>dbd_y</td><td>dbdy</td><td>Algeb</td><td>Deadband type 1 output</td><td></td><td>v_str</td></tr><tr><td>enf</td><td>enf</td><td>Algeb</td><td>e Hardlimit output before freeze</td><td></td><td>v_str</td></tr><tr><td>s2_ys</td><td>s2ys</td><td>Algeb</td><td>PI summation before limit</td><td></td><td>v_str</td></tr><tr><td>s2_y</td><td>s2y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>s3_y</td><td>s3y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>ferr</td><td>ferr</td><td>Algeb</td><td>Frequency deviation</td><td>p.u. (Hz)</td><td>v_str</td></tr><tr><td>fdb_y</td><td>fdby</td><td>Algeb</td><td>Deadband type 1 output</td><td></td><td>v_str</td></tr><tr><td>Plant PREF</td><td>Plantpref</td><td>Algeb</td><td>Plant P ref</td><td></td><td>v_str</td></tr><tr><td>Plerr</td><td>Plerr</td><td>Algeb</td><td>Pline error</td><td></td><td>v_str</td></tr><tr><td>Perr</td><td>Perr</td><td>Algeb</td><td>Power error before fe limits</td><td></td><td>v_str</td></tr><tr><td>s5_ys</td><td>s5ys</td><td>Algeb</td><td>PI summation before limit</td><td></td><td>v_str</td></tr><tr><td>s5_y</td><td>s5y</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>Pext</td><td>Pext</td><td>ExtAlgeb</td><td>Pref from RenExciter renamed as Pext</td><td></td><td></td></tr><tr><td>Qext</td><td>Qext</td><td>ExtAlgeb</td><td>Qref from RenExciter renamed as Qext</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus (or busr, if given) terminal voltage</td><td></td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus (or busr, if given) phase angle</td><td></td><td></td></tr><tr><td>f</td><td>f</td><td>ExtAlgeb</td><td>Bus frequency</td><td>p.u.</td><td></td></tr><tr><td>v1</td><td>v1</td><td>ExtAlgeb</td><td>Voltage at Line.bus1</td><td></td><td></td></tr><tr><td>v2</td><td>v2</td><td>ExtAlgeb</td><td>Voltage at Line.bus2</td><td></td><td></td></tr><tr><td>a1</td><td>a1</td><td>ExtAlgeb</td><td>Angle at Line.bus1</td><td></td><td></td></tr><tr><td>a2</td><td>a2</td><td>ExtAlgeb</td><td>Angle at Line.bus2</td><td></td><td></td></tr></table>


Initialization Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>SWVCs0 (KcQline + v) + SWVCs1Vcomp</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>Qline</td></tr><tr><td>s2(xi</td><td>s2ξ</td><td>State</td><td>0.0</td></tr><tr><td>s3_x</td><td>s3x</td><td>State</td><td>s2y</td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>Pline</td></tr><tr><td>s5(xi</td><td>s5ξ</td><td>State</td><td>0.0</td></tr><tr><td>s6_y</td><td>s6y</td><td>State</td><td>s5y</td></tr><tr><td>Vref</td><td>Vref</td><td>Algeb</td><td>Vref0</td></tr><tr><td>Qlinef</td><td>Qlinef</td><td>Algeb</td><td>Qline0</td></tr></table>

continues on next page 


Table 43 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>Refsel</td><td>Refsel</td><td>Algeb</td><td>SWRefs0 (Qlinef - s1y) + SWRefs1 (Vref - s0y)</td></tr><tr><td>dbd_y</td><td>dbd_y</td><td>Algeb</td><td>1.0dbdbzl (Refsel - dbd1) + 1.0dbdbzu (Refsel - dbd2)</td></tr><tr><td>enf</td><td>enf</td><td>Algeb</td><td>dbdyHLzi + eHLzlomin + eHLzuemax</td></tr><tr><td>s2 ys</td><td>s2ys</td><td>Algeb</td><td>KpeHld</td></tr><tr><td>s2_y</td><td>s2y</td><td>Algeb</td><td>Qmaxs2limzu + Qmins2limzl + s2limzi s2ys</td></tr><tr><td>s3_y</td><td>s3y</td><td>Algeb</td><td>s2y</td></tr><tr><td>ferr</td><td>ferr</td><td>Algeb</td><td>Freqref - f</td></tr><tr><td>fdb_y</td><td>fdb_y</td><td>Algeb</td><td>1.0fdbdbzl (-fdb1 + ferr) + 1.0fdbdbzu (-fdb2 + ferr)</td></tr><tr><td>Plant PREF</td><td>Plantpref</td><td>Algeb</td><td>Pline0</td></tr><tr><td>Plerr</td><td>Plerr</td><td>Algeb</td><td>Plantpref - s4y</td></tr><tr><td>Perr</td><td>Perr</td><td>Algeb</td><td>Ddnfdbdyfdlt0z1 + Dupfdbdyfdlt0z0 + PlerrSWPLs1</td></tr><tr><td>s5 ys</td><td>s5ys</td><td>Algeb</td><td>Kpg (PerrfeHLzi + feHLzlfemin + feHLzufemax)</td></tr><tr><td>s5_y</td><td>s5y</td><td>Algeb</td><td>Pmaxs5limzu + Pmins5limzl + s5limzi s5ys</td></tr><tr><td>Pext</td><td>Pext</td><td>ExtAlgeb</td><td></td></tr><tr><td>Qext</td><td>Qext</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>f</td><td>f</td><td>ExtAlgeb</td><td></td></tr><tr><td>v1</td><td>v1</td><td>ExtAlgeb</td><td></td></tr><tr><td>v2</td><td>v2</td><td>ExtAlgeb</td><td></td></tr><tr><td>a1</td><td>a1</td><td>ExtAlgeb</td><td></td></tr><tr><td>a2</td><td>a2</td><td>ExtAlgeb</td><td></td></tr></table>


Differential Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>s0_y</td><td>s0y</td><td>State</td><td>SWVCs0 (KcQline + v) + SWVCs1Vcomp - s0y</td><td>Tfltr</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>Qline - s1y</td><td>Tfltr</td></tr><tr><td>s2_xi</td><td>s2ξ</td><td>State</td><td>Ki (eHld + 2s2y - 2s2ys)</td><td></td></tr><tr><td>s3_x</td><td>s3x</td><td>State</td><td>s2y - s3x</td><td>Tfv</td></tr><tr><td>s4_y</td><td>s4y</td><td>State</td><td>Pline - s4y</td><td>Tp</td></tr><tr><td>s5_xi</td><td>s5ξ</td><td>State</td><td>Kig (PerrfeHLzi + feHLzlfemin + feHLzufemax + 2s5y - )</td><td></td></tr><tr><td>s6_y</td><td>s6y</td><td>State</td><td>s5y - s6y</td><td>Tg</td></tr></table>


Algebraic Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>Vref</td><td>Vref</td><td>Algeb</td><td>-Vref + Vref0</td></tr><tr><td>Qlinef</td><td>Qlinef</td><td>Algeb</td><td>Qline0 - Qlinef</td></tr><tr><td>Refsel</td><td>Refsel</td><td>Algeb</td><td>- Refsel + SW Refs0 (Qlinef - s1y) + SW Refs1 (Vref - s0y)</td></tr><tr><td>dbd_y</td><td>dbdy</td><td>Algeb</td><td>1.0dbdbdzl (Refsel - dbd1) + 1.0dbdbzu (Refsel - dbd2) - dbdy</td></tr><tr><td>enf</td><td>enf</td><td>Algeb</td><td>dbdyeHLzi + eHLzlemin + eHLzuemax - enf</td></tr><tr><td>s2_ys</td><td>s2ys</td><td>Algeb</td><td>KpeHld + s2ξ - s2ys</td></tr><tr><td>s2_y</td><td>s2y</td><td>Algeb</td><td>Qmaxs2limzu + Qmins2limzl + s2limzi s2ys - s2y</td></tr><tr><td>s3_y</td><td>s3y</td><td>Algeb</td><td>Tft (s2y - s3x) + Tfvs3x - Tfvs3y + s3LT1z1 s3LT2z1 (-s3x + s3y)</td></tr><tr><td>ferr</td><td>ferr</td><td>Algeb</td><td>Freqref - f - ferr</td></tr><tr><td>fdb_y</td><td>fdby</td><td>Algeb</td><td>1.0fdbdbzl (-fdb1 + ferr) + 1.0fdbdbzu (-fdb2 + ferr) -fdby</td></tr><tr><td>Plant PREF</td><td>Plantpref</td><td>Algeb</td><td>- Plantpref + Pline0</td></tr><tr><td>Plerr</td><td>Plerr</td><td>Algeb</td><td>Plantpref - Plerr - s4y</td></tr><tr><td>Perr</td><td>Perr</td><td>Algeb</td><td>Ddnfdbyfdlt0z1 + Dupfdbyfdlt0z0 - Perr + PlerrSWPLs1</td></tr><tr><td>s5_ys</td><td>s5ys</td><td>Algeb</td><td>Kpg (PerrfeHLzi + feHLzlfemin + feHLzufemax) + s5ξ - s5ys</td></tr><tr><td>s5_y</td><td>s5y</td><td>Algeb</td><td>Pmaxs5limzu + Pmins5limzl + s5limzi s5ys - s5y</td></tr><tr><td>Pext</td><td>Pext</td><td>ExtAl-genb</td><td>SWFs1s6y</td></tr><tr><td>Qext</td><td>Qext</td><td>ExtAl-genb</td><td>s3y</td></tr><tr><td>v</td><td>v</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>a</td><td>a</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>f</td><td>f</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>v1</td><td>v1</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>v2</td><td>v2</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>a1</td><td>a1</td><td>ExtAl-genb</td><td>0</td></tr><tr><td>a2</td><td>a2</td><td>ExtAl-genb</td><td>0</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>Isign</td><td>\( I_{sign} \)</td><td>0</td><td>CurrentSign</td></tr><tr><td>Iline</td><td>\( I_{line} \)</td><td>\( \frac{I sign\left(v_{1}e^{ia_{1}}-v_{2}e^{ia_{2}}\right)}{r+ix} \)</td><td>VarService</td></tr><tr><td>Iline0</td><td>\( I_{line0} \)</td><td>Iline</td><td>ConstService</td></tr><tr><td>Pline</td><td>\( P_{line} \)</td><td>\( I signv_{1} re\left( conj\left(\frac{v_{1}e^{ia_{1}}-v_{2}e^{ia_{2}}}{r+ix}\right)e^{ia_{1}}\right) \)</td><td>VarService</td></tr><tr><td>Pline0</td><td>\( P_{line0} \)</td><td>Pline</td><td>ConstService</td></tr><tr><td>Qline</td><td>\( Q_{line} \)</td><td>\( I signv_{1} im\left( conj\left(\frac{v_{1}e^{ia_{1}}-v_{2}e^{ia_{2}}}{r+ix}\right)e^{ia_{1}}\right) \)</td><td>VarService</td></tr><tr><td>Qline0</td><td>\( Q_{line0} \)</td><td>Qline</td><td>ConstService</td></tr><tr><td>Vcomp</td><td>\( V_{comp} \)</td><td>\( |I line (Rcs + iXcs) - ve^{ia}| \)</td><td>VarService</td></tr><tr><td>Vref0</td><td>\( V_{ref0} \)</td><td>\( SWVC_{s0} (KcQline_{0} + v) + SWVC_{s1} Vcomp \)</td><td>ConstService</td></tr><tr><td>zf</td><td>\( z_{f} \)</td><td>\( frz Indicator (v &lt; Vfrz) \)</td><td>VarService</td></tr><tr><td>eHld</td><td>\( e_{hld} \)</td><td>0</td><td>VarHold</td></tr><tr><td>Freq_ref</td><td>\( f_{ref} \)</td><td>1.0</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>SWVC</td><td>SWVC</td><td>Switcher</td><td></td></tr><tr><td>SWRef</td><td>SWRef</td><td>Switcher</td><td></td></tr><tr><td>SWF</td><td>SWF</td><td>Switcher</td><td></td></tr><tr><td>SWPL</td><td>SWPL</td><td>Switcher</td><td></td></tr><tr><td>dbd_db</td><td>dbdbd</td><td>DeadBand</td><td></td></tr><tr><td>eHL</td><td>eHL</td><td>Limiter</td><td>Hardlimit on deadband output</td></tr><tr><td>s2Lim</td><td>lims2</td><td>HardLimiter</td><td></td></tr><tr><td>s3_LT1</td><td>Lts3</td><td>LessThan</td><td></td></tr><tr><td>s3_LT2</td><td>Lts3</td><td>LessThan</td><td></td></tr><tr><td>fdb_db</td><td>dbfdbd</td><td>DeadBand</td><td></td></tr><tr><td>fdlt0</td><td>fdlt0</td><td>LessThan</td><td>frequency deadband output less than zero</td></tr><tr><td>feHL</td><td>feHL</td><td>Limiter</td><td>Limiter for power (frequency) error</td></tr><tr><td>s5Lim</td><td>lims5</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>s0</td><td>s0</td><td>Lag</td><td>V filter</td></tr><tr><td>s1</td><td>s1</td><td>Lag</td><td></td></tr><tr><td>dbd</td><td>dbd</td><td>DeadBand1</td><td></td></tr><tr><td>s2</td><td>s2</td><td>PITrackAW</td><td>PI controller for eHL output</td></tr><tr><td>s3</td><td>s3</td><td>LeadLag</td><td></td></tr><tr><td>s4</td><td>s4</td><td>Lag</td><td>Pline filter</td></tr><tr><td>fdbd</td><td>fdbd</td><td>DeadBand1</td><td>frequency error deadband</td></tr><tr><td>s5</td><td>s5</td><td>PITrackAW</td><td>PI for fe limiter output</td></tr><tr><td>s6</td><td>s6</td><td>Lag</td><td>Output filter for Pext</td></tr></table>

Config Fields in [REPCA1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>kqs</td><td>Kqs</td><td>2</td><td>Tracking gain for reactive power PI controller</td><td></td></tr><tr><td>ksg</td><td>Ksg</td><td>2</td><td>Tracking gain for active power PI controller</td><td></td></tr><tr><td>freeze</td><td>frz</td><td>1</td><td>Voltage dip freeze flag; 1-enable, 0 DISABLE</td><td></td></tr></table>

# 5.28 RenTorque

Renewable torque (Pref) controller. 

Common Parameters: u, name 

Available models: WTTQA1 

# 5.28.1 WTTQA1

Wind turbine generator torque (Pref) model. 

PI state freeze following voltage dip has not been implemented. 

Resets wg in REECA1 model to 1.0 when torque model is connected. This effectively ignores PFLAG of REECA1. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>rep</td><td></td><td>RenPitch controller idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>Kip</td><td>\( K_{ip} \)</td><td>Pref-control integral gain</td><td>0.100</td><td>p.u.</td><td></td></tr><tr><td>Kpp</td><td>\( K_{pp} \)</td><td>Pref-control proportional gain</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>Tp</td><td>\( T_p \)</td><td>Pe sensing time const.</td><td>0.050</td><td>s</td><td></td></tr><tr><td>Twref</td><td>\( T_{wref} \)</td><td>Speed reference time const.</td><td>30</td><td>s</td><td></td></tr><tr><td>Temax</td><td>\( T_{emax} \)</td><td>Max. electric torque</td><td>1.200</td><td>p.u.</td><td>power</td></tr><tr><td>Temin</td><td>\( T_{emin} \)</td><td>Min. electric torque</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>Tflag</td><td></td><td>Tflag; 1-power error, 0-speed error</td><td></td><td>bool</td><td>mandatory</td></tr><tr><td>p1</td><td>\( p_1 \)</td><td>Active power point 1</td><td>0.200</td><td>p.u.</td><td>power</td></tr><tr><td>sp1</td><td>\( s_{p1} \)</td><td>Speed power point 1</td><td>0.580</td><td>p.u.</td><td></td></tr><tr><td>p2</td><td>\( p_2 \)</td><td>Active power point 2</td><td>0.400</td><td>p.u.</td><td>power</td></tr><tr><td>sp2</td><td>\( s_{p2} \)</td><td>Speed power point 2</td><td>0.720</td><td>p.u.</td><td></td></tr><tr><td>p3</td><td>\( p_3 \)</td><td>Active power point 3</td><td>0.600</td><td>p.u.</td><td>power</td></tr><tr><td>sp3</td><td>\( s_{p3} \)</td><td>Speed power point 3</td><td>0.860</td><td>p.u.</td><td></td></tr><tr><td>p4</td><td>\( p_4 \)</td><td>Active power point 4</td><td>0.800</td><td>p.u.</td><td>power</td></tr><tr><td>sp4</td><td>\( s_{p4} \)</td><td>Speed power point 4</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>Tn</td><td>\( T_n \)</td><td>Turbine rating. Use Sn from gov if none.</td><td>nan</td><td>MVA</td><td></td></tr><tr><td>rea</td><td></td><td></td><td>0</td><td></td><td></td></tr><tr><td>rego</td><td></td><td></td><td>0</td><td></td><td></td></tr><tr><td>ree</td><td></td><td></td><td>0</td><td></td><td></td></tr><tr><td>reg</td><td></td><td></td><td>0</td><td></td><td></td></tr><tr><td>Sngo</td><td>\( S_{n,go} \)</td><td></td><td>0</td><td></td><td></td></tr><tr><td>w0</td><td>\( \omega_0 \)</td><td></td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>s2_y</td><td>s2y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>PI_xi</td><td>πξ</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>wg</td><td>wg</td><td>ExtState</td><td></td><td></td><td>v_str,v setter</td></tr><tr><td>wt</td><td>wt</td><td>ExtState</td><td></td><td></td><td>v_str,v setter</td></tr><tr><td>s3_y</td><td>s3y</td><td>ExtState</td><td></td><td></td><td>v_str,v setter</td></tr><tr><td>fPe_y</td><td>fPey</td><td>Algeb</td><td>Output of piecewise</td><td></td><td>v_str</td></tr><tr><td>Tsel</td><td>Tsel</td><td>Algeb</td><td>Output after Tflag selector</td><td></td><td>v_str</td></tr><tr><td>PI_yul</td><td>πyul</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>PI_y</td><td>πy</td><td>Algeb</td><td>PI output</td><td></td><td>v_str</td></tr><tr><td>Pe</td><td>Pe</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr><tr><td>wr0</td><td>wro</td><td>ExtAlgeb</td><td>Retrieved initial w0 from RenGovernor</td><td></td><td>v_str,v setter</td></tr><tr><td>wge</td><td>wge</td><td>ExtAlgeb</td><td></td><td></td><td>v_str,v setter</td></tr><tr><td>Pref</td><td>Pref</td><td>ExtAlgeb</td><td></td><td></td><td>v_str,v setter</td></tr></table>

# Initialization Equations

<table><tr><td colspan="2">Nam Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>1.0Pe</td></tr><tr><td>s2_y</td><td>s2y</td><td>State</td><td>1.0fPe y</td></tr><tr><td>PI_xi</td><td>πξ</td><td>State</td><td>Pref0/fPe y</td></tr><tr><td>wg</td><td>wg</td><td>ExtSta</td><td>fPe y</td></tr><tr><td>wt</td><td>wt</td><td>ExtSta</td><td>fPe y</td></tr><tr><td>s3_y</td><td>s3y</td><td>ExtSta</td><td>Pref0/wg</td></tr><tr><td>fPe_</td><td>fPe y</td><td>Al-geb</td><td>FixPiecewise ((sp1, p1 ≥ s1y), (kp1 (-p1 + s1y) + sp1, p2 ≥ s1y), (kp2 (-p2 + s1y))</td></tr><tr><td>Tsel</td><td>Tsel</td><td>Al-geb</td><td>SWTs0(s2y - wg) + SWTs1(Pe - Pref0)/wg</td></tr><tr><td>PI_yi</td><td>πyul</td><td>Al-geb</td><td>KppTsel + Pref0/fPe y</td></tr><tr><td>PI_y</td><td>πy</td><td>Al-geb</td><td>πhlziπyul + πhlzlTemin + πhlzuTemax</td></tr><tr><td>Pe</td><td>Pe</td><td>Ex-tAl-geb</td><td></td></tr><tr><td>wr0</td><td>wr0</td><td>Ex-tAl-geb</td><td>fPe y</td></tr><tr><td>wge</td><td>wge</td><td>Ex-tAl-geb</td><td>1.0</td></tr><tr><td>Pref</td><td>Pref</td><td>Ex-tAl-geb</td><td>πywg</td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>s1_y</td><td>s1y</td><td>State</td><td>1.0Pe - s1y</td><td>Tp</td></tr><tr><td>s2_y</td><td>s2y</td><td>State</td><td>1.0fPe_y - s2y</td><td>Twref</td></tr><tr><td>PI_xi</td><td>πξ</td><td>State</td><td>KipTsel</td><td></td></tr><tr><td>wg</td><td>wg</td><td>ExtState</td><td>0</td><td></td></tr><tr><td>wt</td><td>wt</td><td>ExtState</td><td>0</td><td></td></tr><tr><td>s3_y</td><td>s3y</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Nam Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td rowspan="2">fPe_y</td><td>fPe_y</td><td rowspan="2">- fPe_y + FixPiecewise((sp1, p1 ≥ s1y), (kp1 (-p1 + s1y) + sp1, p2 ≥ s1y), (kp2 (-p2 + s1y) + sp1)</td></tr><tr><td>geb</td></tr><tr><td rowspan="2">Tsel</td><td>Tsel</td><td rowspan="2">SWTs0(s2y - wg) + SWTs1(Pe - Pref0) / wg - Tsel</td></tr><tr><td>geb</td></tr><tr><td rowspan="2">PI_yi</td><td>πyul</td><td rowspan="2">KppTsel + πξ - πyul</td></tr><tr><td>geb</td></tr><tr><td rowspan="2">PI_y</td><td>πy</td><td rowspan="2">πhlziπyul + πhlzlTemin + πhlzuTemax - πy</td></tr><tr><td>geb</td></tr><tr><td rowspan="2">Pe</td><td>Pe</td><td rowspan="2">0</td></tr><tr><td>Ex-tAl-geb</td></tr><tr><td rowspan="2">wr0</td><td>wr0</td><td rowspan="2">fPe_y - w0</td></tr><tr><td>Ex-tAl-geb</td></tr><tr><td rowspan="2">wge</td><td>wge</td><td rowspan="2">1 - fPe_y</td></tr><tr><td>Ex-tAl-geb</td></tr><tr><td rowspan="2">Pref</td><td>Pref</td><td rowspan="2">πywg - Pref0/wge</td></tr><tr><td>Ex-tAl-geb</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td rowspan="2">kp1</td><td rowspan="2">kp1</td><td>- sp1 + sp2</td><td rowspan="2">ConstService</td></tr><tr><td>- p1 + p2</td></tr><tr><td rowspan="2">kp2</td><td rowspan="2">kp2</td><td>- sp2 + sp3</td><td rowspan="2">ConstService</td></tr><tr><td>- p2 + p3</td></tr><tr><td rowspan="2">kp3</td><td rowspan="2">kp3</td><td>- sp3 + sp4</td><td rowspan="2">ConstService</td></tr><tr><td>- p3 + p4</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>SWT</td><td>\( SW_T \)</td><td>Switcher</td><td></td></tr><tr><td>PI_aw</td><td>\( aw_{PI} \)</td><td>AntiWindup</td><td></td></tr><tr><td>PI_hl</td><td>\( hl_{PI} \)</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>s1</td><td>s1</td><td>Lag</td><td>Pe filter</td></tr><tr><td>fPe</td><td>fPe</td><td>Piecewise</td><td>Piecewise Pe to wref mapping</td></tr><tr><td>s2</td><td>s2</td><td>Lag</td><td>speed filter</td></tr><tr><td>PI</td><td>PI</td><td>PIAWHardLimit</td><td>PI controller</td></tr></table>

Config Fields in [WTTQA1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.29 StaticACDC

AC DC device for power flow 

Common Parameters: u, name 

Available models: VSCShunt 

# 5.29.1 VSCShunt

Data for VSC Shunt in power flow 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>idx of connected bus</td><td></td><td></td><td>mandatoryity</td></tr><tr><td>node1</td><td></td><td>Node 1 index</td><td></td><td></td><td>mandatoryity</td></tr><tr><td>node2</td><td></td><td>Node 2 index</td><td></td><td></td><td>mandatoryity</td></tr><tr><td>Vn</td><td>Vn</td><td>AC voltage rating</td><td>110</td><td></td><td>non_zero</td></tr><tr><td>Vdcn1</td><td>Vdcn1</td><td>DC voltage rating on node 1</td><td>100</td><td>kV</td><td>non_zero</td></tr><tr><td>Vdcn2</td><td>Vdcn2</td><td>DC voltage rating on node 2</td><td>100</td><td>kV</td><td>non_zero</td></tr><tr><td>Idcn</td><td>Idcn</td><td>DC current rating</td><td>1</td><td>kA</td><td>non_zero</td></tr><tr><td>rsh</td><td>rsh</td><td>AC interface resistance</td><td>0.003</td><td>ohm</td><td>z</td></tr><tr><td>xsh</td><td>xsh</td><td>AC interface reactance</td><td>0.060</td><td>ohm</td><td>z</td></tr><tr><td>control</td><td></td><td>Control method: 0-PQ, 1-PV, 2-vQ or 3-vV</td><td></td><td></td><td>mandatoryity</td></tr><tr><td>v0</td><td></td><td>AC voltage setting (PV or vV) or initial guess (PQ or vQ)</td><td>1</td><td></td><td></td></tr><tr><td>p0</td><td></td><td>AC active power setting</td><td>0</td><td>pu</td><td></td></tr><tr><td>q0</td><td></td><td>AC reactive power setting</td><td>0</td><td>pu</td><td></td></tr><tr><td>vdc0</td><td>vdc0</td><td>DC voltage setting</td><td>1</td><td>pu</td><td></td></tr><tr><td>k0</td><td></td><td>Loss coefficient - constant</td><td>0</td><td></td><td></td></tr><tr><td>k1</td><td></td><td>Loss coefficient - linear</td><td>0</td><td></td><td></td></tr><tr><td>k2</td><td></td><td>Loss coefficient - quadratic</td><td>0</td><td></td><td></td></tr><tr><td>droop</td><td></td><td>Enable dc voltage droop control</td><td>0</td><td>boolean</td><td></td></tr><tr><td>K</td><td></td><td>Droop coefficient</td><td>0</td><td></td><td></td></tr><tr><td>vhigh</td><td></td><td>Upper voltage threshold in droop control</td><td>9999</td><td>pu</td><td></td></tr><tr><td>vlow</td><td></td><td>Lower voltage threshold in droop control</td><td>0</td><td>pu</td><td></td></tr><tr><td>vsh-max</td><td></td><td>Maximum ac interface voltage</td><td>1.100</td><td>pu</td><td></td></tr><tr><td>vsh-min</td><td></td><td>Minimum ac interface voltage</td><td>0.900</td><td>pu</td><td></td></tr><tr><td>Ish-max</td><td></td><td>Maximum ac current</td><td>2</td><td>pu</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>ash</td><td>ash</td><td>Algeb</td><td>voltage phase behind the transformer</td><td>rad</td><td>v_str</td></tr><tr><td>vsh</td><td>vsh</td><td>Algeb</td><td>voltage magnitude behind transformer</td><td>p.u.</td><td>v_str</td></tr><tr><td>psh</td><td>psh</td><td>Algeb</td><td>active power injection into VSC</td><td>p.u.</td><td>v_str</td></tr><tr><td>qsh</td><td>qsh</td><td>Algeb</td><td>reactive power injection into VSC</td><td></td><td>v_str</td></tr><tr><td>pdc</td><td>pdc</td><td>Algeb</td><td>DC power injection</td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>AC bus voltage phase</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>AC bus voltage magnitude</td><td></td><td></td></tr><tr><td>v1</td><td>v1</td><td>ExtAlgeb</td><td>DC node 1 voltage</td><td></td><td></td></tr><tr><td>v2</td><td>v2</td><td>ExtAlgeb</td><td>DC node 2 voltage</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>ash</td><td>ash</td><td>Algeb</td><td>a</td></tr><tr><td>vsh</td><td>vsh</td><td>Algeb</td><td>v0</td></tr><tr><td>psh</td><td>psh</td><td>Algeb</td><td>p0 (mode s0 + mode s1)</td></tr><tr><td>qsh</td><td>qsh</td><td>Algeb</td><td>q0 (mode s0 + mode s2)</td></tr><tr><td>pdc</td><td>pdc</td><td>Algeb</td><td>0</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>v1</td><td>v1</td><td>ExtAlgeb</td><td></td></tr><tr><td>v2</td><td>v2</td><td>ExtAlgeb</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>ash</td><td>ash</td><td>Algeb</td><td>-psh + u (-bshvvsh sin (a - ash) + gshv2 - gshvvsh cos (a - ash))</td></tr><tr><td>vsh</td><td>vsh</td><td>Algeb</td><td>-qsh + u (-bshv2 + bshvvsh cos (a - ash) - gshvvsh sin (a - ash))</td></tr><tr><td>psh</td><td>psh</td><td>Algeb</td><td>u (mode s0 + mode s1) (p0 - psh) + u (mode s2 + mode s3) (v1 - v2 - vdc0)</td></tr><tr><td>qsh</td><td>qsh</td><td>Algeb</td><td>u (mode s0 + mode s2) (q0 - qsh) + u (mode s1 + mode s3) (-v + v0)</td></tr><tr><td>pdc</td><td>pdc</td><td>Algeb</td><td>pdc + u (bshvvsh sin (a - ash) - gshvvsh cos (a - ash) + gshvsh2)</td></tr><tr><td>a</td><td>a</td><td>ExtAl-geb</td><td>-psh</td></tr><tr><td>v</td><td>v</td><td>ExtAl-geb</td><td>-qsh</td></tr><tr><td>v1</td><td>v1</td><td>ExtAl-geb</td><td>- \(\frac{pdc}{v_1-v_2}\)</td></tr><tr><td>v2</td><td>v2</td><td>ExtAl-geb</td><td>\(\frac{pdc}{v_1-v_2}\)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>gsh</td><td>gsh</td><td>rsh/rsh2+xsh2</td><td>ConstService</td></tr><tr><td>bsh</td><td>bsh</td><td>-xsh/rsh2+xsh2</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>mode</td><td>mode</td><td>Switcher</td><td></td></tr></table>

Config Fields in [VSCShunt] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.30 StaticGen

Static generator group. 

Static generators include PV and Slack, which are used to impose algebraic equations. Static generators are used primarily for power flow. 

Static generators do not have the modeling details for stability simulation. Although some of them can stay for time-domain simulation, most of them should be substituted by dynamic generators, including synchronous generators and inverter-based resources upon TDS initialization. 

The substitution is done by setting the gen field of a dynamic generator to refer to the static generator. To replace one StaticGen by multiple dynamic generators, see the notes in SynGen. Generators connected to the same bus need to have their gammap and gammaq, respectively, summed up to be exactly 1.0. 

TDS initialization will ensure that the dynamic generators impose the same amount of power as the static generator. At the end of initialization, StaticGen's that have been substituted will have their connectivity status u changed to 0. 

Common Parameters: u, name, bus, Sn, Vn, p0, q0, ra, xs, subidx 

Common Variables: q, a, v 

Available models: PV, Slack 

# 5.30.1 PV

Static PV generator with reactive power limit checking and PV-to-PQ conversion. 

$p \nu 2 p q = I$ turns on the conversion. It starts from iteration min_iter or when the convergence error drops below err_tol. 

The PV-to-PQ conversion first ranks the reactive violations. A maximum number of npv2pq PVs above the upper limit, and a maximum of npv2pq PVs below the lower limit will be converted to PQ, which sets the reactive power to pmax or pmin. 

If $p \nu 2 p q$ is 1 (enabled) and npv2pq is $O$ , heuristics will be used to determine the number of PVs to be converted for each iteration. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td>Power rating</td><td>100</td><td></td><td>non_zero</td></tr><tr><td>Vn</td><td>Vn</td><td>AC voltage rating</td><td>110</td><td></td><td>non_zero</td></tr><tr><td>subidx</td><td></td><td>index for generators on the same bus</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>idx of the installed bus</td><td></td><td></td><td>mandatory</td></tr><tr><td>busr</td><td></td><td>bus idx for remote voltage control</td><td></td><td></td><td></td></tr><tr><td>p0</td><td>p0</td><td>active power set point in system base</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>q0</td><td>q0</td><td>reactive power set point in system base</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>pmax</td><td>pmax</td><td>maximum active power in system base</td><td>999</td><td>p.u.</td><td></td></tr><tr><td>pmin</td><td>pmin</td><td>minimum active power in system base</td><td>-1</td><td>p.u.</td><td></td></tr><tr><td>qmax</td><td>qmax</td><td>maximum reactive power in system base</td><td>999</td><td>p.u.</td><td></td></tr><tr><td>qmin</td><td>qmin</td><td>minimum reactive power in system base</td><td>-999</td><td>p.u.</td><td></td></tr><tr><td>v0</td><td>v0</td><td>voltage set point</td><td>1</td><td></td><td></td></tr><tr><td>vmax</td><td>vmax</td><td>maximum voltage voltage</td><td>1.400</td><td></td><td></td></tr><tr><td>vmin</td><td>vmin</td><td>minimum allowed voltage</td><td>0.600</td><td></td><td></td></tr><tr><td>ra</td><td>ra</td><td>armature resistance</td><td>0</td><td></td><td></td></tr><tr><td>xs</td><td>xs</td><td>armature reactance</td><td>0.300</td><td></td><td></td></tr><tr><td>wmod</td><td>wmod</td><td>Machine ctrl. mode [PSS/E]</td><td>0</td><td>int</td><td></td></tr><tr><td>busv0</td><td>V0bus</td><td></td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td>actual reactive power generation</td><td>p.u.</td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td><td></td><td>v_str,v setter</td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td>q0u</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>busv0(1-u)+uv0</td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td>u (qlimzi (-v + v0) + qlimzl (-q + qmin) + qlimzu (-q + qmax))</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>-pu</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>-qu</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>p</td><td>p</td><td>p0</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>qlim</td><td>qlim</td><td>SortedLimiter</td><td></td></tr></table>

# Config Fields in [PV]

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>al-low_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>ad-just_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>ad-just_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>pv2pq</td><td>\(z_{pv2pq}\)</td><td>0</td><td>convert PV to PQ in PFlow at Q limits</td><td>(0, 1)</td></tr><tr><td>npv2pq</td><td>\(n_{pv2pq}\)</td><td>0</td><td>max. # of conversion each iteration, 0 - auto</td><td>&gt;=0</td></tr><tr><td>min_iter</td><td>\(s_{witer}\)</td><td>2</td><td>iteration number starting from which to enable switching</td><td>int</td></tr><tr><td>err_tol</td><td>\(\epsilon_{tol}\)</td><td>0.010</td><td>iteration error below which to enable switching</td><td>float</td></tr><tr><td>absViolation</td><td></td><td>1</td><td>use absolute (1) or relative (0) limit violation</td><td>(0, 1)</td></tr></table>

# 5.30.2 Slack

Slack generator. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td>Power rating</td><td>100</td><td></td><td>non_zero</td></tr><tr><td>Vn</td><td>Vn</td><td>AC voltage rating</td><td>110</td><td></td><td>non_zero</td></tr><tr><td>subidx</td><td></td><td>index for generators on the same bus</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>idx of the installed bus</td><td></td><td></td><td>mandatory</td></tr><tr><td>busr</td><td></td><td>bus idx for remote voltage control</td><td></td><td></td><td></td></tr><tr><td>p0</td><td>p0</td><td>active power set point in system base</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>q0</td><td>q0</td><td>reactive power set point in system base</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>pmax</td><td>pmax</td><td>maximum active power in system base</td><td>999</td><td>p.u.</td><td></td></tr><tr><td>pmin</td><td>pmin</td><td>minimum active power in system base</td><td>-1</td><td>p.u.</td><td></td></tr><tr><td>qmax</td><td>qmax</td><td>maximim reactive power in system base</td><td>999</td><td>p.u.</td><td></td></tr><tr><td>qmin</td><td>qmin</td><td>minimum reactive power in system base</td><td>-999</td><td>p.u.</td><td></td></tr><tr><td>v0</td><td>v0</td><td>voltage set point</td><td>1</td><td></td><td></td></tr><tr><td>vmax</td><td>vmax</td><td>maximum voltage voltage</td><td>1.400</td><td></td><td></td></tr><tr><td>vmin</td><td>vmin</td><td>minimum allowed voltage</td><td>0.600</td><td></td><td></td></tr><tr><td>ra</td><td>ra</td><td>armature resistance</td><td>0</td><td></td><td></td></tr><tr><td>xs</td><td>xs</td><td>armature reactance</td><td>0.300</td><td></td><td></td></tr><tr><td>wmod</td><td>wmod</td><td>Machine ctrl. mode [PSS/E]</td><td>0</td><td>int</td><td></td></tr><tr><td>a0</td><td>θ0</td><td>reference angle set point</td><td>0</td><td></td><td></td></tr><tr><td>busv0</td><td>V0bus</td><td></td><td>0</td><td></td><td></td></tr><tr><td>busa0</td><td>θ0bus</td><td></td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td>actual reactive power generation</td><td>p.u.</td><td>v_str</td></tr><tr><td>p</td><td>p</td><td>Algeb</td><td>actual active power generation</td><td>p.u.</td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td><td></td><td>v_str,v setter</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td><td></td><td>v_str,v setter</td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td>q0u</td></tr><tr><td>p</td><td>p</td><td>Algeb</td><td>p0u</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>a0u + busa0(1-u)</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>busv0(1-u) + uv0</td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>q</td><td>q</td><td>Algeb</td><td>u (qlimzi(-v + v0) + qlimzl(-q + qmin) + qlimzu(-q + qmax))</td></tr><tr><td>p</td><td>p</td><td>Algeb</td><td>u (plimzi(-a + a0) + plimzl(-p + pmin) + plimzu(-p + pmax))</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>-pu</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>-qu</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>qlim</td><td>qlim</td><td>SortedLimiter</td><td></td></tr><tr><td>plim</td><td>plim</td><td>SortedLimiter</td><td></td></tr></table>

# Config Fields in [Slack]

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>al-low_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>ad-just_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>ad-just_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>pv2pq</td><td>\(z_{pv2pq}\)</td><td>0</td><td>convert PV to PQ in PFlow at Q limits</td><td>(0, 1)</td></tr><tr><td>npv2pq</td><td>\(n_{pv2pq}\)</td><td>0</td><td>max. # of conversion each iteration, 0 - auto</td><td>&gt;=0</td></tr><tr><td>min_iter</td><td>\(s_{witer}\)</td><td>2</td><td>iteration number starting from which to enable switching</td><td>int</td></tr><tr><td>err_tol</td><td>\(\epsilon_{tol}\)</td><td>0.010</td><td>iteration error below which to enable switching</td><td>float</td></tr><tr><td>absViolation</td><td></td><td>1</td><td>use absolute (1) or relative (0) limit violation</td><td>(0, 1)</td></tr><tr><td>av2pv</td><td>\(z_{av2pv}\)</td><td>0</td><td>convert Slack to PV in PFlow at P limits</td><td>(0, 1)</td></tr></table>

# 5.30. StaticGen

# 5.31 StaticLoad

Static load group. 

Common Parameters: u, name 

Available models: PQ 

# 5.31.1 PQ

PQ load model. 

Implements an automatic pq2z conversion during power flow when the voltage is outside [vmin, vmax]. The conversion can be turned off by setting pq2z to 0 in the Config file. 

Before time-domain simulation, PQ load will be converted to impedance, current source, and power source based on the weights in the Config file. 

Weights (p2p, p2i, p2z) corresponds to the weights for constant power, constant current and constant impedance. p2p, p2i and $\mathtt { p 2 z }$ must be in decimal numbers and sum up exactly to 1. The same rule applies to (q2q, q2i, q2z). 

To alter the PQ load in terms of power during simulation, one needs to set the conversion weights to preserve the constant power portion. For example, the PQ can remain as constant power load by setting 

```txt
ss.PQ.config.p2p = 1.0  
ss.PQ.config.p2i = 0  
ss.PQ.config.p2z = 0  
ss.PQ.config.q2q = 1.0  
ss.PQ.config.q2i = 0  
ss.PQ.config.q2z = 0 
```

Then, the constant power portion can be altered by changing the Ppf and Qpf constants for active power and reactive power. 

The equivalent constant current components are in constants Ipeq and Iqeq for active and reactive current, and the equivalent impedances are in Req and Xeq. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>linked bus idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>Vn</td><td>\( V_n \)</td><td>AC voltage rating</td><td>110</td><td>kV</td><td>non_zero</td></tr><tr><td>p0</td><td>\( p_0 \)</td><td>active power load in system base</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>q0</td><td>\( q_0 \)</td><td>reactive power load in system base</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>vmax</td><td>\( v_{max} \)</td><td>max voltage before switching to impedance</td><td>1.200</td><td></td><td></td></tr><tr><td>vmin</td><td>\( v_{min} \)</td><td>min voltage before switching to impedance</td><td>0.800</td><td></td><td></td></tr><tr><td>owner</td><td></td><td>owner idx</td><td></td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Nam</td><td>Sym-bol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td><td></td></tr><tr><td>a</td><td>a</td><td>Ex-tAl-geb</td><td>u(Ipeqγp2i v + Ppfγp2p + Reqγp2z v2) Indicator (tdae ≥ 0)u(Rlbv2vcmpzl + Rubv2vcmpzu + p0vcmpzi) Indicator (tdae &lt; 0)</td><td>+</td></tr><tr><td>v</td><td>v</td><td>Ex-tAl-geb</td><td>u(Iqeqγq2i v + Qpfγq2q + Xeqγq2z v2) Indicator (tdae ≥ 0)u(Xlbv2vcmpzl + Xubv2vcmpzu + q0vcmpzi) Indicator (tdae &lt; 0)</td><td>+</td></tr></table>

# 5.31. StaticLoad

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>Rub</td><td>Rub</td><td>p0vmax2</td><td>ConstService</td></tr><tr><td>Xub</td><td>Xub</td><td>q0vmax2</td><td>ConstService</td></tr><tr><td>Rlb</td><td>Rlb</td><td>p0vmin2</td><td>ConstService</td></tr><tr><td>Xlb</td><td>Xlb</td><td>q0vmin2</td><td>ConstService</td></tr><tr><td>Ppf</td><td>Ppf</td><td>Rlbv02vcmpzl + Rubv02vcmpzu + p0vcmpzi</td><td>ConstService</td></tr><tr><td>Qpf</td><td>Qpf</td><td>Xlbv02vcmpzl + Xlbv02vcmpzu + q0vcmpzi</td><td>ConstService</td></tr><tr><td>Req</td><td>Req</td><td>Ppf/v02</td><td>ConstService</td></tr><tr><td>Xeq</td><td>Xeq</td><td>Qpf/v02</td><td>ConstService</td></tr><tr><td>Ipeq</td><td>Ipeq</td><td>Ppf/v0</td><td>ConstService</td></tr><tr><td>Iqeq</td><td>Iqeq</td><td>Qpf/v0</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>vcmp</td><td>vcmp</td><td>Limiter</td><td></td></tr></table>

# Config Fields in [PQ]

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>al-low_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>ad-just_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>ad-just_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>pq2z</td><td>\(z_{pq2z}\)</td><td>1</td><td>pq2z conversion if out of voltage limits</td><td>(0, 1)</td></tr><tr><td>p2p</td><td>\(\gamma_{p2p}\)</td><td>0</td><td>P constant power percentage for TDS. Must have (p2p+p2i+p2z)=1</td><td>float</td></tr><tr><td>p2i</td><td>\(\gamma_{p2i}\)</td><td>0</td><td>P constant current percentage</td><td>float</td></tr><tr><td>p2z</td><td>\(\gamma_{p2z}\)</td><td>1</td><td>P constant impedance percentage</td><td>float</td></tr><tr><td>q2q</td><td>\(\gamma_{q2q}\)</td><td>0</td><td>Q constant power percentage for TDS. Must have (q2q+q2i+q2z)=1</td><td>float</td></tr><tr><td>q2i</td><td>\(\gamma_{q2i}\)</td><td>0</td><td>Q constant current percentage</td><td>float</td></tr><tr><td>q2z</td><td>\(\gamma_{q2z}\)</td><td>1</td><td>Q constant impedance percentage</td><td>float</td></tr></table>

# 5.32 StaticShunt

Static shunt compensator group. 

Common Parameters: u, name 

Available models: Shunt, ShuntTD, ShuntSw 

# 5.32.1 Shunt

Phasor-domain shunt compensator Model. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>idx of connected bus</td><td></td><td></td><td>mandatory</td></tr><tr><td>Sn</td><td>Sn</td><td>Power rating</td><td>100</td><td></td><td>non_zero</td></tr><tr><td>Vn</td><td>Vn</td><td>AC voltage rating</td><td>110</td><td></td><td>non_zero</td></tr><tr><td>g</td><td>g</td><td>shunt conductance (real part)</td><td>0</td><td></td><td>y</td></tr><tr><td>b</td><td>b</td><td>shunt susceptance (positive as capacitive)</td><td>0</td><td></td><td>y</td></tr><tr><td>fn</td><td>fn</td><td>rated frequency</td><td>60</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>guv2</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>-buv2</td></tr></table>

Config Fields in [Shunt] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.32.2 ShuntTD

Static shunt model with inverse transformation from phasor to time-domain. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>idx of connected bus</td><td></td><td></td><td>mandatory</td></tr><tr><td>Sn</td><td>Sn</td><td>Power rating</td><td>100</td><td></td><td>non_zero</td></tr><tr><td>Vn</td><td>Vn</td><td>AC voltage rating</td><td>110</td><td></td><td>non_zero</td></tr><tr><td>g</td><td>g</td><td>shunt conductance (real part)</td><td>0</td><td></td><td>y</td></tr><tr><td>b</td><td>b</td><td>shunt susceptance (positive as capacitive)</td><td>0</td><td></td><td>y</td></tr><tr><td>fn</td><td>fn</td><td>rated frequency</td><td>60</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>vta</td><td>vta</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>vtb</td><td>vtb</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>vtc</td><td>vtc</td><td>Algeb</td><td></td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>vta</td><td>vta</td><td>Algebra</td><td>√3v cos (a+2πfsystdae)/3</td></tr><tr><td>vtb</td><td>vtb</td><td>Algebra</td><td>-√3v cos (a+2πfsystdae+π/3)/3</td></tr><tr><td>vtc</td><td>vtc</td><td>Algebra</td><td>-√3v sin (a+2πfsystdae+π/6)/3</td></tr><tr><td>a</td><td>a</td><td>ExtAlgebra</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgebra</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>vta</td><td>vta</td><td>Algeb</td><td>\(\frac{\sqrt{3}v\cos(a+2\pi f_{sys}t_{dae})}{3}-vta\)</td></tr><tr><td>vtb</td><td>vtb</td><td>Algeb</td><td>\(-\frac{\sqrt{3}v\cos(a+2\pi f_{sys}t_{dae}+\frac{\pi}{3})}{3}-vtb\)</td></tr><tr><td>vtc</td><td>vtc</td><td>Algeb</td><td>\(-\frac{\sqrt{3}v\sin(a+2\pi f_{sys}t_{dae}+\frac{\pi}{6})}{3}-vtc\)</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>\(guv^2\)</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>\(-buv^2\)</td></tr></table>

Config Fields in [ShuntTD] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.32.3 ShuntSw

Switched Shunt Model. 

Parameters gs, bs and bs must be entered in string literals, comma-separated. They need to have the same length. 

For example, in the excel file, one can put 

```txt
gs = [0, 0]  
bs = [0.2, 0.2]  
ns = [2, 4] 
```

To use individual shunts as fixed shunts, set the corresponding $n s = 0$ or $n s = l O J$ . 

The effective shunt susceptances and conductances are stored in services beff and geff. 

# 5.32. StaticShunt


Parameters


<table><tr><td colspan="2">Name Symbol</td><td>Description</td><td>De-fault</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>idx of connected bus</td><td></td><td></td><td>mandatory</td></tr><tr><td>Sn</td><td>Sn</td><td>Power rating</td><td>100</td><td></td><td>non_zero</td></tr><tr><td>Vn</td><td>Vn</td><td>AC voltage rating</td><td>110</td><td></td><td>non_zero</td></tr><tr><td>g</td><td>g</td><td>shunt conductance (real part)</td><td>0</td><td></td><td>y</td></tr><tr><td>b</td><td>b</td><td>shunt susceptance (positive as capacitive)</td><td>0</td><td></td><td>y</td></tr><tr><td>fn</td><td>fn</td><td>rated frequency</td><td>60</td><td></td><td></td></tr><tr><td>gs</td><td></td><td>a list literal of switched conductances blocks</td><td>0</td><td>p.u.</td><td>y</td></tr><tr><td>bs</td><td></td><td>a list literal of switched susceptances blocks</td><td>0</td><td>p.u.</td><td>y</td></tr><tr><td>ns</td><td></td><td>a list literal of the element numbers in each switched block</td><td>[0]</td><td></td><td></td></tr><tr><td>vref</td><td></td><td>voltage reference</td><td>1</td><td>p.u.</td><td>non_zero,non_negative</td></tr><tr><td>dv</td><td></td><td>voltage error deadband</td><td>0.050</td><td>p.u.</td><td>non_zero,non_negative</td></tr><tr><td>dt</td><td></td><td>delay before two consecutive switching</td><td>30</td><td>seconds</td><td>non_negative</td></tr></table>


Variables


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>geffuv2</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>-beffuv2</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>vlo</td><td>vlo</td><td>- dv + vref</td><td>ConstService</td></tr><tr><td>vup</td><td>vup</td><td>dv + vref</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>adj</td><td>adj</td><td>ShuntAdjust</td><td>shunt adjuster</td></tr></table>

# Config Fields in [ShuntSw]

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>al-low_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>ad-just_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>ad-just_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>min_iter</td><td>switer</td><td>2</td><td>iteration number starting from which to enable switching</td><td>int</td></tr><tr><td>err_tol</td><td>εtol</td><td>0.010</td><td>iteration error below which to enable switching</td><td>float</td></tr></table>

# 5.32. StaticShunt

# 5.33 SynGen

Synchronous generator group. 

SynGen replaces StaticGen upon the initialization of dynamic studies. SynGen and inverter-based resources contain parameters gammap and gammaq for splitting the initial power of a StaticGen into multiple dynamic ones. 

gammap, for example, is the active power ratio of the dynamic generator to the static one. If a StaticGen is supposed to be replaced by one SynGen, the gammap and gammaq should both be 1. 

It is critical to ensure that gammap and gammaq, respectively, of all dynamic power sources sum up to 1.0. Otherwise, the initial power injections imposed by dynamic sources will differ from the static ones. The initialization will then fail with mismatches power injection equations corresponding to bus a and v. 

Common Parameters: u, name, bus, gen, Sn, Vn, fn, M, D, subidx 

Common Variables: omega, delta 

Available models: GENCLS, GENROU, PLBVFU1 

# 5.33.1 GENCLS

Classical generator model. 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatory</td></tr><tr><td>gen</td><td></td><td>static generator index</td><td></td><td></td><td>mandatory</td></tr><tr><td>coi</td><td></td><td>center of inertia index</td><td></td><td></td><td></td></tr><tr><td>coi2</td><td></td><td>center of inertia index</td><td></td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td>Power rating</td><td>100</td><td>MVA</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>AC voltage rating</td><td>110</td><td></td><td></td></tr><tr><td>fn</td><td>f</td><td>rated frequency</td><td>60</td><td></td><td></td></tr><tr><td>D</td><td>D</td><td>Damping coefficient</td><td>0</td><td></td><td>power</td></tr><tr><td>M</td><td>M</td><td>machine start up time (2H)</td><td>6</td><td></td><td>non_zero,non_negatice,power</td></tr><tr><td>ra</td><td>ra</td><td>armature resistance</td><td>0</td><td></td><td>z</td></tr><tr><td>xl</td><td>xl</td><td>leakage reactance</td><td>0</td><td></td><td>z</td></tr><tr><td>xd1</td><td>xd</td><td>d-axis transient reactance</td><td>0.302</td><td></td><td>z</td></tr><tr><td>kp</td><td>kp</td><td>active power feedback gain</td><td>0</td><td></td><td></td></tr><tr><td>kw</td><td>kw</td><td>speed feedback gain</td><td>0</td><td></td><td></td></tr><tr><td>S10</td><td>S1.0</td><td>first saturation factor</td><td>0</td><td></td><td></td></tr><tr><td>S12</td><td>S1.2</td><td>second saturation factor</td><td>1</td><td></td><td></td></tr><tr><td>gammap</td><td>γP</td><td>P ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>gam- maq</td><td>γQ</td><td>Q ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>subidx</td><td></td><td>Generator idx in plant; only used by PSS/E data</td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>rotor angle</td><td>rad</td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>State</td><td>rotor speed</td><td>pu (Hz)</td><td>v_str</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>d-axis current</td><td></td><td>v_str</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>q-axis current</td><td></td><td>v_str</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>d-axis voltage</td><td></td><td>v_str</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>q-axis voltage</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>Algeb</td><td>mechanical torque</td><td></td><td>v_str</td></tr><tr><td>te</td><td>te</td><td>Algeb</td><td>electric torque</td><td></td><td>v_str</td></tr><tr><td>vf</td><td>vf</td><td>Algeb</td><td>excitation voltage</td><td>pu</td><td>v_str</td></tr><tr><td>XadIfd</td><td>XadIfd</td><td>Algeb</td><td>d-axis armature excitation current</td><td>p.u (kV)</td><td>v_str</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>active power injection</td><td></td><td>v_str</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>reactive power injection</td><td></td><td>v_str</td></tr><tr><td>psid</td><td>psid</td><td>Algeb</td><td>d-axis flux</td><td></td><td>v_str</td></tr><tr><td>psiq</td><td>psiq</td><td>Algeb</td><td>q-axis flux</td><td></td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage phase angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>δ0</td></tr><tr><td>omega</td><td>ω</td><td>State</td><td>u</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>Id0u</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Iq0u</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>uvd0</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>uvq0</td></tr><tr><td>tm</td><td>tm</td><td>Algeb</td><td>tm0</td></tr><tr><td>te</td><td>te</td><td>Algeb</td><td>tm0u</td></tr><tr><td>vf</td><td>vf</td><td>Algeb</td><td>uvf0</td></tr><tr><td>XadIfd</td><td>XadIfd</td><td>Algeb</td><td>uvf0</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>u(Id0vd0+Iq0vq0)</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>u(Id0vq0-Iq0vd0)</td></tr><tr><td>psid</td><td>psid</td><td>Algeb</td><td>psid0u</td></tr><tr><td>psiq</td><td>psiq</td><td>Algeb</td><td>psiq0u</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>2πfnu(ω - 1)</td><td></td></tr><tr><td>omega</td><td>ω</td><td>State</td><td>u(-D(ω - 1) - te + tm)</td><td>M</td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>I(dxq + psid - vf)</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Iqxq + psiq</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>-uv sin (a - δ) - vd</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>uv cos (a - δ) - vq</td></tr><tr><td>tm</td><td>tm</td><td>Algeb</td><td>-tm + tm0</td></tr><tr><td>te</td><td>te</td><td>Algeb</td><td>-te + u (-Idpsiq + Iqpsid)</td></tr><tr><td>vf</td><td>vf</td><td>Algeb</td><td>uvf0 - vf</td></tr><tr><td>XadIfd</td><td>XadIfd</td><td>Algeb</td><td>-XadIfd + uvf0</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>-Pe + u (Idvd + Iqvq)</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>-Qe + u (Idvq - Iqvd)</td></tr><tr><td>psid</td><td>psid</td><td>Algeb</td><td>-psid + u (Iqra + vq)</td></tr><tr><td>psiq</td><td>psiq</td><td>Algeb</td><td>psiq + u (Idra + vd)</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>-u (Idvd + Iqvq)</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>-u (Idvq - Iqvd)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>p0</td><td>P0</td><td>gammapp0s</td><td>ConstService</td></tr><tr><td>q0</td><td>Q0</td><td>gammaqq0s</td><td>ConstService</td></tr><tr><td>_V</td><td>Vc</td><td>veia</td><td>ConstService</td></tr><tr><td>_S</td><td>S</td><td>p0 - iq0</td><td>ConstService</td></tr><tr><td>_I</td><td>Ic</td><td>S conj(V)</td><td>ConstService</td></tr><tr><td>_E</td><td>E</td><td>I (ra + ixq) + V</td><td>ConstService</td></tr><tr><td>_deltac</td><td>δc</td><td>log(E/E|)</td><td>ConstService</td></tr><tr><td>delta0</td><td>δ0</td><td>u im (deltac)</td><td>ConstService</td></tr><tr><td>vdq</td><td>Vdq</td><td>Vue-deltac+0.5iπ</td><td>ConstService</td></tr><tr><td>Idq</td><td>Idq</td><td>Iue-deltac+0.5iπ</td><td>ConstService</td></tr><tr><td>Id0</td><td>Id0</td><td>re (Idq)</td><td>ConstService</td></tr><tr><td>Iq0</td><td>Iq0</td><td>im (Idq)</td><td>ConstService</td></tr><tr><td>vd0</td><td>Vd0</td><td>re (vdq)</td><td>ConstService</td></tr><tr><td>vq0</td><td>Vq0</td><td>im (vdq)</td><td>ConstService</td></tr><tr><td>tm0</td><td>τm0</td><td>u (Id0 (Id0ra + vd0) + Iq0 (Iq0ra + vq0))</td><td>ConstService</td></tr><tr><td>psid0</td><td>ψd0</td><td>Iq0rau + vq0</td><td>ConstService</td></tr><tr><td>psi0</td><td>ψq0</td><td>-Id0rau - vd0</td><td>ConstService</td></tr><tr><td>vf0</td><td>vf0</td><td>Id0xq + Iq0ra + vq0</td><td>ConstService</td></tr></table>

Config Fields in [GENCLS] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr><tr><td>vf_lower</td><td>1</td><td>lower limit for vf warning</td><td></td><td></td></tr><tr><td>vf_upper</td><td>5</td><td>upper limit for vf warning</td><td></td><td></td></tr></table>

# 5.33.2 GENROU

Round rotor generator with quadratic saturation. 

# Notes

Parameters: 

• xd2 and xq2 must be equal to pass initialization. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatory</td></tr><tr><td>gen</td><td></td><td>static generator index</td><td></td><td></td><td>mandatory</td></tr><tr><td>coi</td><td></td><td>center of inertia index</td><td></td><td></td><td></td></tr><tr><td>coi2</td><td></td><td>center of inertia index</td><td></td><td></td><td></td></tr><tr><td>Sn</td><td>Sn</td><td>Power rating</td><td>100</td><td>MVA</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>AC voltage rating</td><td>110</td><td></td><td></td></tr><tr><td>fn</td><td>f</td><td>rated frequency</td><td>60</td><td></td><td></td></tr><tr><td>D</td><td>D</td><td>Damping coefficient</td><td>0</td><td></td><td>power</td></tr><tr><td>M</td><td>M</td><td>machine start up time (2H)</td><td>6</td><td></td><td>non_zero,non_negatice,power</td></tr><tr><td>ra</td><td>ra</td><td>armature resistance</td><td>0</td><td></td><td>z</td></tr><tr><td>xl</td><td>xl</td><td>leakage reactance</td><td>0</td><td></td><td>z</td></tr><tr><td>xd1</td><td>xd</td><td>d-axis transient reactance</td><td>0.302</td><td></td><td>z</td></tr><tr><td>kp</td><td>kp</td><td>active power feedback gain</td><td>0</td><td></td><td></td></tr><tr><td>kw</td><td>kw</td><td>speed feedback gain</td><td>0</td><td></td><td></td></tr><tr><td>S10</td><td>S1.0</td><td>first saturation factor</td><td>0</td><td></td><td></td></tr><tr><td>S12</td><td>S1.2</td><td>second saturation factor</td><td>1</td><td></td><td></td></tr><tr><td>gamma</td><td>γP</td><td>P ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>gammaq</td><td>γQ</td><td>Q ratio of linked static gen</td><td>1</td><td></td><td></td></tr><tr><td>xd</td><td>xd</td><td>d-axis synchronous reactance</td><td>1.900</td><td></td><td>z</td></tr><tr><td>xq</td><td>xq</td><td>q-axis synchronous reactance</td><td>1.700</td><td></td><td>z</td></tr><tr><td>xd2</td><td>xd</td><td>d-axis sub-transient reactance</td><td>0.300</td><td></td><td>z</td></tr><tr><td>xq1</td><td>x&#x27;q</td><td>q-axis transient reactance</td><td>0.500</td><td></td><td>z</td></tr><tr><td>xq2</td><td>x&#x27;&#x27;q</td><td>q-axis sub-transient reactance</td><td>0.300</td><td></td><td>z</td></tr><tr><td>Td10</td><td>Td0</td><td>d-axis transient time constant</td><td>8</td><td></td><td></td></tr><tr><td>Td20</td><td>Td0</td><td>d-axis sub-transient time constant</td><td>0.040</td><td></td><td></td></tr><tr><td>Tq10</td><td>T&#x27;q0</td><td>q-axis transient time constant</td><td>0.800</td><td></td><td></td></tr><tr><td>Tq20</td><td>T&#x27;&#x27;q0</td><td>q-axis sub-transient time constant</td><td>0.020</td><td></td><td></td></tr><tr><td>subidx</td><td></td><td>Generator idx in plant; only used by PSS/E data</td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>rotor angle</td><td>rad</td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>State</td><td>rotor speed</td><td>pu (Hz)</td><td>v_str</td></tr><tr><td>e1q</td><td>e1q</td><td>State</td><td>q-axis transient voltage</td><td></td><td>v_str</td></tr><tr><td>e1d</td><td>e1d</td><td>State</td><td>d-axis transient voltage</td><td></td><td>v_str</td></tr><tr><td>e2d</td><td>e2d</td><td>State</td><td>d-axis sub-transient voltage</td><td></td><td>v_str</td></tr><tr><td>e2q</td><td>e2q</td><td>State</td><td>q-axis sub-transient voltage</td><td></td><td>v_str</td></tr><tr><td>Id</td><td>Id</td><td>Algebra</td><td>d-axis current</td><td></td><td>v_str</td></tr><tr><td>Iq</td><td>Iq</td><td>Algebra</td><td>q-axis current</td><td></td><td>v_str</td></tr><tr><td>vd</td><td>vd</td><td>Algebra</td><td>d-axis voltage</td><td></td><td>v_str</td></tr><tr><td>vq</td><td>vq</td><td>Algebra</td><td>q-axis voltage</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>Algebra</td><td>mechanical torque</td><td></td><td>v_str</td></tr><tr><td>te</td><td>te</td><td>Algebra</td><td>electric torque</td><td></td><td>v_str</td></tr><tr><td>vf</td><td>vf</td><td>Algebra</td><td>excitation voltage</td><td>pu</td><td>v_str</td></tr><tr><td>XadIfd</td><td>XadIfd</td><td>Algebra</td><td>d-axis armature excitation current</td><td>p.u (kV)</td><td>v_str</td></tr><tr><td>Pe</td><td>Pe</td><td>Algebra</td><td>active power injection</td><td></td><td>v_str</td></tr><tr><td>Qe</td><td>Qe</td><td>Algebra</td><td>reactive power injection</td><td></td><td>v_str</td></tr><tr><td>psid</td><td>psid</td><td>Algebra</td><td>d-axis flux</td><td></td><td>v_str</td></tr><tr><td>psiq</td><td>psiq</td><td>Algebra</td><td>q-axis flux</td><td></td><td>v_str</td></tr><tr><td>psi2q</td><td>psi2q</td><td>Algebra</td><td>q-axis air gap flux</td><td></td><td>v_str</td></tr><tr><td>psi2d</td><td>psi2d</td><td>Algebra</td><td>d-axis air gap flux</td><td></td><td>v_str</td></tr><tr><td>psi2</td><td>ψ2</td><td>Algebra</td><td>air gap flux magnitude</td><td></td><td>v_str</td></tr><tr><td>Se</td><td>Se</td><td>Algebra</td><td>saturation output</td><td></td><td>v_str</td></tr><tr><td>XaqI1q</td><td>XaqI1q</td><td>Algebra</td><td>q-axis reaction</td><td>p.u (kV)</td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgebra</td><td>Bus voltage phase angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgebra</td><td>Bus voltage magnitude</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>δ0</td></tr><tr><td>omega</td><td>ω</td><td>State</td><td>u</td></tr><tr><td>e1q</td><td>e1q</td><td>State</td><td>e1q0u</td></tr><tr><td>e1d</td><td>e1d</td><td>State</td><td>e1d0u</td></tr><tr><td>e2d</td><td>e2d</td><td>State</td><td>e2d0u</td></tr><tr><td>e2q</td><td>e2q</td><td>State</td><td>e2q0u</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>Id0u</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Iq0u</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>uvd0</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>uvq0</td></tr><tr><td>tm</td><td>tm</td><td>Algeb</td><td>tm0</td></tr><tr><td>te</td><td>te</td><td>Algeb</td><td>tm0u</td></tr><tr><td>vf</td><td>vf</td><td>Algeb</td><td>uvf0</td></tr><tr><td>XadIfd</td><td>XadIfd</td><td>Algeb</td><td>uvf0</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>u (Id0vd0 + Iq0vq0)</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>u (Id0vq0 - Iq0vd0)</td></tr><tr><td>psid</td><td>psid</td><td>Algeb</td><td>psid0u</td></tr><tr><td>psiq</td><td>psiq</td><td>Algeb</td><td>psi0u</td></tr><tr><td>psi2q</td><td>psi2q</td><td>Algeb</td><td>psi2q0u</td></tr><tr><td>psi2d</td><td>psi2d</td><td>Algeb</td><td>psi2d0u</td></tr><tr><td>psi2</td><td>ψ2</td><td>Algeb</td><td>u |ψ20dq|</td></tr><tr><td>Se</td><td>Se</td><td>Algeb</td><td>Se0u</td></tr><tr><td>XaqI1q</td><td>XaqI1q</td><td>Algeb</td><td>0</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>2πfnu (ω - 1)</td><td></td></tr><tr><td>omega</td><td>ω</td><td>State</td><td>u (-D (ω - 1) - te + tm)</td><td>M</td></tr><tr><td>e1q</td><td>e1q</td><td>State</td><td>-XadIfd + vf</td><td>Td0</td></tr><tr><td>e1d</td><td>e1d</td><td>State</td><td>-XaqI1q</td><td>T′0</td></tr><tr><td>e2d</td><td>e2d</td><td>State</td><td>-Id (xd1 - xl) + e1q - e2d</td><td>Td0″</td></tr><tr><td>e2q</td><td>e2q</td><td>State</td><td>Iq (-xl + xq1) + e1d - e2q</td><td>T′′0</td></tr></table>


Algebraic Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>Id</td><td>Id</td><td>Algeb</td><td>Idxd2 - psi2d + psid</td></tr><tr><td>Iq</td><td>Iq</td><td>Algeb</td><td>Iqx2 + psi2q + psiq</td></tr><tr><td>vd</td><td>vd</td><td>Algeb</td><td>-uv sin (a - δ) - vd</td></tr><tr><td>vq</td><td>vq</td><td>Algeb</td><td>uv cos (a - δ) - vq</td></tr><tr><td>tm</td><td>tm</td><td>Algeb</td><td>-tm + tm0</td></tr><tr><td>te</td><td>te</td><td>Algeb</td><td>-te + u (-Idpsiq + Iqpsid)</td></tr><tr><td>vf</td><td>vf</td><td>Algeb</td><td>uvf0 - vf</td></tr><tr><td>Xad-Ifd</td><td>XadIfd</td><td>Algeb</td><td>-XadIfd+u (Sepsi2d + e1q + (xd - xd1) (Idgd1 + e1qqd2 - e2gd2))</td></tr><tr><td>Pe</td><td>Pe</td><td>Algeb</td><td>-Pe + u (Idvd + Iqvq)</td></tr><tr><td>Qe</td><td>Qe</td><td>Algeb</td><td>-Qe + u (Idvq - Iqvd)</td></tr><tr><td>psid</td><td>psid</td><td>Algeb</td><td>-psid + u (Iqra + vq)</td></tr><tr><td>psiq</td><td>psiq</td><td>Algeb</td><td>psiq + u (Idra + vd)</td></tr><tr><td>psi2q</td><td>psi2q</td><td>Algeb</td><td>e1dgq1 + e2q (1 - gq1) - psi2q</td></tr><tr><td>psi2d</td><td>psi2d</td><td>Algeb</td><td>e1qgd1 + e2dgd2 (xd1 - xl) - psi2d</td></tr><tr><td>psi2</td><td>ψ2</td><td>Algeb</td><td>-ψ22 + psi2d2 + psi2q2</td></tr><tr><td>Se</td><td>Se</td><td>Algeb</td><td>SATBSLz0 (-SATA + ψ2)2 - Seψ2</td></tr><tr><td>XaqI1q</td><td>XaqI1q</td><td>Algeb</td><td>Segdpsi2q - XaqI1q + e1d + (xq - xq1) (-Iqgg1 + e1dgg2 - e2qqg2)</td></tr><tr><td>a</td><td>a</td><td>ExtAl-geb</td><td>-u (Idvd + Iqvq)</td></tr><tr><td>v</td><td>v</td><td>ExtAl-geb</td><td>-u (Idvq - Iqvd)</td></tr></table>


Services


<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>p0</td><td>P0</td><td>gammapp0s</td><td>ConstService</td></tr><tr><td>q0</td><td>Q0</td><td>gammaqq0s</td><td>ConstService</td></tr><tr><td>gd1</td><td>γd1</td><td>x d2-x l/x d1-x l</td><td>ConstService</td></tr><tr><td>gq1</td><td>γq1</td><td>-x l+x q2-x l+x q1</td><td>ConstService</td></tr><tr><td>gd2</td><td>γd2</td><td>xd1-x d2/(xd1-x l)2</td><td>ConstService</td></tr><tr><td>gq2</td><td>γq2</td><td>x q1-x q2(- x l+x q1)2</td><td>ConstService</td></tr><tr><td>gqd</td><td>γqd</td><td>-x l+x q/x d-x l</td><td>ConstService</td></tr><tr><td>_S12</td><td>S1.2</td><td>S12 - f S12 + 1</td><td>ConstService</td></tr><tr><td>SAT_E1</td><td>E1cSAT</td><td>1.0</td><td>ConstService</td></tr><tr><td>SAT_E2</td><td>E2cSAT</td><td>3.2 - 2SATzSE2</td><td>ConstService</td></tr><tr><td>SAT_SE1</td><td>SE1cSAT</td><td>S10</td><td>ConstService</td></tr><tr><td>SAT_SE2</td><td>SE2cSAT</td><td>S12 - 2SATzSE2 + 2</td><td>ConstService</td></tr></table>

continues on next page 


Table 45 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>SAT_a</td><td>aSAT</td><td>√SATE1SATSE1/SATE2SATSE2 (Indicator (SATSE2 &gt; 0) + Indicator (SATSE2 &lt; 0))</td><td>ConstService</td></tr><tr><td>SAT_A</td><td>AqSAT</td><td>SATE2 - SATE1 - SATE2 / SATa-1</td><td>ConstService</td></tr><tr><td>SAT_B</td><td>BqSAT</td><td>SATE2SATSE2(SATa-1)2(Indicator (SATa&gt;0)+Indicator (SATa&lt;0)) / (SATE1-SATE2)2</td><td>ConstService</td></tr><tr><td>_V</td><td>Vc</td><td>veia</td><td>ConstService</td></tr><tr><td>_S</td><td>S</td><td>p0 - iq0</td><td>ConstService</td></tr><tr><td>_Zs</td><td>Zs</td><td>ra + idx2</td><td>ConstService</td></tr><tr><td>_It</td><td>It</td><td>S/conj(V)</td><td>ConstService</td></tr><tr><td>_Is</td><td>Is</td><td>It + V/Zs</td><td>ConstService</td></tr><tr><td>psi20</td><td>ψ0&#x27;&#x27;</td><td>Iszs</td><td>ConstService</td></tr><tr><td>psi20_arg</td><td>θψ&#x27;&#x27;0</td><td>arg (ψ20)</td><td>ConstService</td></tr><tr><td>psi20_abs</td><td>|ψ0&#x27;&#x27;|</td><td>|ψ20|</td><td>ConstService</td></tr><tr><td>_It_arg</td><td>θIt0</td><td>arg (It)</td><td>ConstService</td></tr><tr><td>_psi20_It_arg</td><td>θψaIt</td><td>-ITarg + ψ20arg</td><td>ConstService</td></tr><tr><td>Se0</td><td>Se0</td><td>SATB(-SATA+ψ20abs)2Indicator (ψ20abs≥SATA)ψ20abs</td><td>ConstService</td></tr><tr><td>_a</td><td>a&#x27;</td><td>ψ20abs (Se0gqd + 1)</td><td>ConstService</td></tr><tr><td>_b</td><td>b&#x27;</td><td>(-xq + xq2) |It|</td><td>ConstService</td></tr><tr><td>delta0</td><td>δ0</td><td>ψ20arg + atan(b cos(psi20Itarg) / (-a+b sin(psi20Itarg))</td><td>ConstService</td></tr><tr><td>_Tdq</td><td>Tdq</td><td>-i sin (δ0) + cos (δ0)</td><td>ConstService</td></tr><tr><td>psi20_dq</td><td>ψ&#x27;&#x27;0,dq</td><td>Tdqvψ20</td><td>ConstService</td></tr><tr><td>It_dq</td><td>It,dq</td><td>conj (ItTdq)</td><td>ConstService</td></tr><tr><td>psi2d0</td><td>ψad0</td><td>re (ψ20dq)</td><td>ConstService</td></tr><tr><td>psi2q0</td><td>ψaq0</td><td>- im (ψ20dq)</td><td>ConstService</td></tr><tr><td>Id0</td><td>Id0</td><td>im (Itdq)</td><td>ConstService</td></tr><tr><td>Iq0</td><td>Iq0</td><td>re (Itdq)</td><td>ConstService</td></tr><tr><td>vd0</td><td>Vd0</td><td>-Id0ra + Iq0xq2 + psi2q0</td><td>ConstService</td></tr><tr><td>vq0</td><td>Vq0</td><td>-Id0xd2 - Iq0ra + psi2d0</td><td>ConstService</td></tr><tr><td>tm0</td><td>τm0</td><td>u (Id0(Id0ra + vd0) + Iq0(Iq0ra + vq0))</td><td>ConstService</td></tr><tr><td>vf0</td><td>vf0</td><td>Id0(xd - xd2) + psi2d0 (Se0 + 1)</td><td>ConstService</td></tr><tr><td>psid0</td><td>ψd0</td><td>Iq0rau + vq0</td><td>ConstService</td></tr><tr><td>psiq0</td><td>ψq0</td><td>-Id0rau - vd0</td><td>ConstService</td></tr><tr><td>e1q0</td><td>e&#x27;q0</td><td>Id0(-xd + xd1) - Se0psi2d0 + vf0</td><td>ConstService</td></tr><tr><td>e1d0</td><td>e&#x27;d0</td><td>Iq0(xq - xq1) - Se0gqdpsi2q0</td><td>ConstService</td></tr><tr><td>e2d0</td><td>e&#x27;&#x27;d0</td><td>Id0(-xd + xl) - Se0psi2d0 + vf0</td><td>ConstService</td></tr><tr><td>e2q0</td><td>e&#x27;&#x27;q0</td><td>- Iq0(xl - xq) - Se0gqdpsi2q0</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>SL</td><td>SL</td><td>LessThan</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>SAT</td><td>SAT</td><td>ExcQuadSat</td><td></td></tr></table>

Config Fields in [GENROU] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr><tr><td>vf_lower</td><td>1</td><td>lower limit for vf warning</td><td></td><td></td></tr><tr><td>vf_upper</td><td>5</td><td>upper limit for vf warning</td><td></td><td></td></tr></table>

# 5.33.3 PLBVFU1

PLBVFU1 model: playback of voltage and frequency as a generator. 

The internal voltage and frequency are named Vflt and omega. Rotor angle is named delta. 

The current implementation relies on a TimeSeries device to provide the voltage and frequency signals. See ieee14_plbvfu1.xlsx and plbvf.xlsx in andes/cases/ieee14 for an example. 

Voltage and frequeny data needs to be specified in per unit. Nominal values are not yet supported. 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>interface bus id</td><td></td><td></td><td>mandatory</td></tr><tr><td>gen</td><td></td><td>static generator index</td><td></td><td></td><td>mandatory</td></tr><tr><td>Sn</td><td>Sn</td><td>Power rating</td><td>100</td><td>MVA</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>AC voltage rating</td><td>110</td><td></td><td></td></tr><tr><td>ra</td><td>ra</td><td>armature resistance</td><td>0</td><td></td><td>z</td></tr><tr><td>xs</td><td>xs</td><td>generator transient reactance</td><td>0.200</td><td></td><td>non_zero,z</td></tr><tr><td>fn</td><td>fn</td><td>rated frequency</td><td>60</td><td></td><td></td></tr><tr><td>Vflag</td><td></td><td>playback voltage signal</td><td>1</td><td>bool</td><td></td></tr><tr><td>fflag</td><td></td><td>playback frequency signal</td><td>1</td><td>bool</td><td></td></tr><tr><td>filename</td><td></td><td>playback file name</td><td></td><td>string</td><td>mandatory</td></tr><tr><td>Vscale</td><td>Vscale</td><td>playback voltage scale</td><td>1</td><td>pu</td><td>non_negative</td></tr><tr><td>fscale</td><td>fscale</td><td>playback frequency scale</td><td>1</td><td>pu</td><td>non_negative</td></tr><tr><td>Tv</td><td>Tv</td><td>filtering time constant for voltage</td><td>0.200</td><td>s</td><td>non_negative</td></tr><tr><td>Tf</td><td>Tf</td><td>filtering time constant for frequency</td><td>0.200</td><td>s</td><td>non_negative</td></tr><tr><td>subidx</td><td></td><td>Generator idx in plant; only used by PSS/E data</td><td>0</td><td></td><td></td></tr></table>


Variables


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>Vfft</td><td>Vfft</td><td>State</td><td>filtered voltage</td><td>pu</td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>State</td><td>filtered frequency</td><td>pu</td><td>v_str</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>rotor angle</td><td>rad</td><td>v_str</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage phase angle</td><td></td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td></td><td></td></tr></table>


Initialization Equations


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>Vfft</td><td>Vfft</td><td>State</td><td>-Voffs + VtsiVscale</td></tr><tr><td>omega</td><td>ω</td><td>State</td><td>-foffs + ftsifscale</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>δ0</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>Vfft</td><td>Vfft</td><td>State</td><td>-Vfft - Voffs + VtsiVscale</td><td>Tv</td></tr><tr><td>omega</td><td>ω</td><td>State</td><td>-foffs + ftisfscale - ω</td><td>Tf</td></tr><tr><td>delta</td><td>δ</td><td>State</td><td>2πfnu (ω - 1)</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>a</td><td>a</td><td>ExtAlgebra</td><td>Vfltvox sin (a-δ)/ra2+xs2 + rav(-Vflt cos (a-δ)+v)/ra2+xs2</td></tr><tr><td>v</td><td>v</td><td>ExtAlgebra</td><td>-Vfltrav sin (a-δ)/ra2+xs2 + vxs(-Vflt cos (a-δ)+v)/ra2+xs2</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>zs</td><td>zs</td><td>ra + ix</td><td>ConstService</td></tr><tr><td>zs2n</td><td>zs2n</td><td>ra2 - xs2</td><td>ConstService</td></tr><tr><td>Ec</td><td>Ec</td><td>veia + (ra + ix) conj[(p+iq)e-ia/v)</td><td>ConstService</td></tr><tr><td>E0</td><td>E0</td><td>|Ec|</td><td>ConstService</td></tr><tr><td>delta0</td><td>δ0</td><td>arg (Ec)</td><td>ConstService</td></tr><tr><td>Vts</td><td>Vts</td><td>0</td><td>ConstService</td></tr><tr><td>fts</td><td>fts</td><td>0</td><td>ConstService</td></tr><tr><td>ifscale</td><td>1/fscale</td><td>1/fscale</td><td>ConstService</td></tr><tr><td>iVscale</td><td>1/Vscale</td><td>1/Vscale</td><td>ConstService</td></tr><tr><td>foffs</td><td>foffs</td><td>ftsiscale - 1</td><td>ConstService</td></tr><tr><td>Voffs</td><td>Voffs</td><td>-E0 + VtsiVscale</td><td>ConstService</td></tr></table>

Config Fields in [PLBVFU1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.34 TimedEvent

Timed event group 

Common Parameters: u, name 

Available models: Toggle, Fault, Alter 

# 5.34.1 Toggle

Time-based connectivity status toggle. 

Toggle is used to toggle the connection status (online/offline) of a device at the predefined time. Both the model name (or group name) and the device idx need to be specified. It effectively negates the u field of the connected device. 

Toggle can be useful to implement disconnection, connection, and reconnection of devices. For example, a line trip can be implemented by setting Line to the model field and the corresponding line's idx to the dev field. 

Multiple Toggles can be added to the same device at different times. Adding two Toggles for an initially connected line with $\pm = 0 \cdot 1$ and $\mathtt { t } = 0 \mathtt { \Omega } . 2$ , for instance, will disconnect the line at $\scriptstyle \mathrm { t = 0 . 1 }$ sec and reconnect it at $\scriptstyle \mathrm { t = } 0 . 2$ sec. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>model</td><td></td><td>model or group name of the device</td><td></td><td></td><td>mandatory</td></tr><tr><td>dev</td><td></td><td>idx of the device to control</td><td></td><td></td><td>mandatory</td></tr><tr><td>t</td><td></td><td>switch time for connection status</td><td>-1</td><td></td><td>mandatory</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>_u</td><td>u</td><td>1</td><td>ConstService</td></tr></table>

Config Fields in [Toggle] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr></table>

# 5.34.2 Fault

Three-phase-to-ground fault. 

A Fault device is used to apply and clear three-phase-to-ground fault to the given bus. One can set two time parameters, tf and tc, for the fault-on and fault-clearance time, respectively, although only tf is mandatory. 

A fault is implemented by a very small internal shunt impedance to be connected at the fault-on time. Its reactance and resistance are specified by the parameters xf and rf. 

To implement a fault and its clearance by tripping a line, one can combine Fault and Toggle. That is, clear a fault in concurrence with a Toggle. The user needs to ensure data consistency so that the line trip actually clears the fault. 

Non-convergence can occur in the proximity of a fault due to various reasons, including network power transfer capability limitation and parameter issues of controllers. 

When a fault gets cleared, algebraic variables change drastically. E.g., voltages can go from nearly zero back to 1.0. As we are using Newton's method for solving the DAE, the initial values are crucial for the immediate step after fault clearance. 

This Fault model restores the pre-fault values for algebraic variables Fault.config.scale is the scaling factor to be multiplied to the pre-fault values for adjusting the initial values. Some trial and error are expected for severe disturbances, combined with increasing the fault reactance xf. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>bus</td><td></td><td>linked bus idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>tf</td><td></td><td>Bus fault start time</td><td>-1</td><td>second</td><td>mandatory</td></tr><tr><td>tc</td><td></td><td>Bus fault end time</td><td>-1</td><td>second</td><td></td></tr><tr><td>xf</td><td>xf</td><td>Fault to ground reactance (positive)</td><td>0.000</td><td>p.u.(sys)</td><td></td></tr><tr><td>rf</td><td>xf</td><td>Fault to ground resistance (positive)</td><td>0</td><td>p.u.(sys)</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td>Bus voltage angle</td><td>p.u.(kV)</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Bus voltage magnitude</td><td>p.u.(kV)</td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>a</td><td>a</td><td>ExtAlgeb</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>a</td><td>a</td><td>ExtAlgebra</td><td>gfuurfv2</td></tr><tr><td>v</td><td>v</td><td>ExtAlgebra</td><td>-bfuurfv2</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>gf</td><td>gf</td><td>rf/rf2+xf2</td><td>ConstService</td></tr><tr><td>bf</td><td>bf</td><td>-xf/rf2+xf2</td><td>ConstService</td></tr><tr><td>uf</td><td>uf</td><td>0</td><td>ConstService</td></tr></table>

Config Fields in [Fault] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting up-per or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>restore</td><td></td><td>1</td><td>restore algebraic variables to pre-fault values</td><td>(0, 1)</td></tr><tr><td>mode</td><td></td><td>1</td><td>1. restore all algeb variables, 2. fault bus only</td><td>(1, 2, 3)</td></tr><tr><td>scale</td><td></td><td>1</td><td>scaling factor of restored algebraic values</td><td></td></tr></table>

# 5.34.3 Alter

Model for altering device internal data at predefined time. 

Alter is useful to apply load changing, tap changing, step response, etc. can be applied to parameters and constant services but cannot be used to update variables. 

Alter is implemented by applying the given calculation to the v field of the linked parameter or constant. Alter will not affect other parameters or constants that depend on the altered variable. 

It is not uncommon for equations to depend on intermediate constants rather than the input parameters. Therefore, one will need to inspect model equations to determine the parameter/service to be altered. 

# Examples

To apply a PQ load change, according to $P Q$ , one needs to set the load model to constant power and alter Ppf and Qpf. Altering $\mathtt { p 0 }$ and $\mathtt { q 0 }$ will have no impact as they are not used in the equations for time-domain simulation. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>t</td><td></td><td>switch time for connection status</td><td>-1</td><td></td><td>mandatory</td></tr><tr><td>model</td><td></td><td>model or group name of the device</td><td></td><td></td><td>mandatory</td></tr><tr><td>dev</td><td></td><td>idx of the device to alter</td><td></td><td></td><td>mandatory</td></tr><tr><td>src</td><td></td><td>model source field (param or service)</td><td></td><td></td><td>mandatory</td></tr><tr><td>attr</td><td></td><td>attribute (e.g., v) of the source field</td><td>v</td><td></td><td></td></tr><tr><td>method</td><td></td><td>alteration method in +, -, *, /, =</td><td></td><td></td><td>mandatory</td></tr><tr><td>amount</td><td></td><td>the amount to apply</td><td></td><td></td><td>mandatory</td></tr><tr><td>rand</td><td></td><td>use uniform random sampling</td><td>0</td><td></td><td></td></tr><tr><td>lb</td><td></td><td>lower bound of random sampling</td><td>0</td><td></td><td></td></tr><tr><td>ub</td><td></td><td>upper bound of random sampling</td><td>0</td><td></td><td></td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>SW</td><td>SW</td><td>Switcher</td><td>Switcher for alteration method</td></tr></table>

Config Fields in [Alter] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr></table>

# 5.35 TurbineGov

Turbine governor group for synchronous generator. 

Common Parameters: u, name 

Common Variables: pout 

Available models: TG2, TGOV1, TGOV1DB, TGOV1N, TGOV1NDB, IEEEG1, IEESGO, GAST, HYGOV, HY-GOVDB, HYGOV4 

# 5.35.1 TG2

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory,unique</td></tr><tr><td>Tn</td><td>Tn</td><td>Turbine power rating. Equal to Sn if not provided.</td><td>0</td><td>MVA</td><td></td></tr><tr><td>wref0</td><td>ωref0</td><td>Base speed reference</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>R</td><td>R</td><td>Speed regulation gain (mach. base default)</td><td>0.050</td><td>p.u.</td><td>ipower</td></tr><tr><td>pmax</td><td>pmax</td><td>Maximum power output</td><td>999</td><td>p.u.</td><td>power</td></tr><tr><td>pmin</td><td>pmin</td><td>Minimum power output</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>dbl</td><td>Ldb</td><td>Deadband lower limit</td><td>-0.000</td><td>p.u.</td><td></td></tr><tr><td>dbu</td><td>Udb</td><td>Deadband upper limit</td><td>0.000</td><td>p.u.</td><td></td></tr><tr><td>dbc</td><td>Cdb</td><td>Deadband neutral value</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>T1</td><td>T1</td><td>Transient gain time</td><td>0.200</td><td></td><td></td></tr><tr><td>T2</td><td>T2</td><td>Governor time constant</td><td>10</td><td></td><td></td></tr><tr><td>Sg</td><td>Sn</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator connection status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>ll_x</td><td>ll_x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>Auxiliary power input</td><td></td><td>v_str</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>Turbine final output power</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>Speed reference variable</td><td></td><td>v_str</td></tr><tr><td>w_d</td><td>wd</td><td>Algeb</td><td>Generator speed deviation before dead band (positive for under speed)</td><td></td><td>v_str</td></tr><tr><td>w(dm</td><td>wdm</td><td>Algeb</td><td>Measured speed deviation after dead band</td><td></td><td>v_str</td></tr><tr><td>w_dmg</td><td>w_dmg</td><td>Algeb</td><td>Speed deviation after dead band after gain</td><td></td><td>v_str</td></tr><tr><td>ll_y</td><td>lly</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>pnl</td><td>pnl</td><td>Algeb</td><td>Power output before hard limiter</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAl-geb</td><td>Mechanical power interface to SynGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>ll_x</td><td>llx</td><td>State</td><td>wdmg</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>wref0</td></tr><tr><td>w_d</td><td>wd</td><td>Algeb</td><td>0</td></tr><tr><td>w(dm</td><td>wdm</td><td>Algeb</td><td>0</td></tr><tr><td>w_dmg</td><td>w_dmg</td><td>Algeb</td><td>0</td></tr><tr><td>ll_y</td><td>lly</td><td>Algeb</td><td>wdmg</td></tr><tr><td>pnl</td><td>pnl</td><td>Algeb</td><td>tm0</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>ll_x</td><td>ll_x</td><td>State</td><td>-ll_x + w_dmg</td><td>T2</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# 5.35. TurbineGov

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>- paux + paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>plim_zipnl + plim_zlpmin + plim_zupmax - pout</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>- wref + wref0</td></tr><tr><td>w_d</td><td>wd</td><td>Algeb</td><td>ue (-ω + wref) - wd</td></tr><tr><td>w(dm</td><td>wdm</td><td>Algeb</td><td>dblwdbzlr + dbuwdbzur + wd (1 - wdbzi) - wdm</td></tr><tr><td>w_dmg</td><td>w_dmg</td><td>Algeb</td><td>gainwdm - w_dmg</td></tr><tr><td>ll_y</td><td>lly</td><td>Algeb</td><td>T1(-llx + wdmg) + T2llx - T2lly + llLT1z1llLT2z1(-llx + lly)</td></tr><tr><td>pnl</td><td>pnl</td><td>Algeb</td><td>lly - pnl + prefo</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>ue (pout - tm0)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>pref0</td><td>Pref0</td><td>tm0</td><td>ConstService</td></tr><tr><td>paux0</td><td>Paux0</td><td>0</td><td>ConstService</td></tr><tr><td>gain</td><td>G</td><td>u/R</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>w_db</td><td>wb</td><td>DeadBandRT</td><td></td></tr><tr><td>ll_LT1</td><td>LTll</td><td>LessThan</td><td></td></tr><tr><td>ll_LT2</td><td>LTll</td><td>LessThan</td><td></td></tr><tr><td>plim</td><td>plim</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>ll</td><td>ll</td><td>LeadLag</td><td></td></tr></table>

Config Fields in [TG2] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr><tr><td>deadband</td><td>\(z_{deadband}\)</td><td>0</td><td>enable input dead band</td><td>(0, 1)</td></tr><tr><td>hardlimit</td><td>\(z_{hardlimit}\)</td><td>1</td><td>enable output hard limit</td><td>(0, 1)</td></tr></table>

# 5.35.2 TGOV1

TGOV1 turbine governor model. 

Implements the PSS/E TGOV1 model without deadband. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory,unique</td></tr><tr><td>Tn</td><td>Tn</td><td>Turbine power rating. Equal to Sn if not pro-vided.</td><td>0</td><td>MVA</td><td></td></tr><tr><td>wref0</td><td>ωref0</td><td>Base speed reference</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>R</td><td>R</td><td>Speed regulation gain (mach. base default)</td><td>0.050</td><td>p.u.</td><td>ipower</td></tr><tr><td>VMAX</td><td>Vmax</td><td>Maximum valve position</td><td>1.200</td><td>p.u.</td><td>power</td></tr><tr><td>VMIN</td><td>Vmin</td><td>Minimum valve position</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>T1</td><td>T1</td><td>Valve time constant</td><td>0.100</td><td></td><td></td></tr><tr><td>T2</td><td>T2</td><td>Lead-lag lead time constant</td><td>0.200</td><td></td><td></td></tr><tr><td>T3</td><td>T3</td><td>Lead-lag lag time constant</td><td>10</td><td></td><td></td></tr><tr><td>Dt</td><td>Dt</td><td>Turbine damping coefficient</td><td>0</td><td></td><td>power</td></tr><tr><td>Sg</td><td>Sn</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator connection status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>Auxiliary power input</td><td></td><td>v_str</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>Turbine final output power</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>Speed reference variable</td><td></td><td>v_str</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Reference power input</td><td></td><td>v_str</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>Generator speed deviation</td><td>p.u.</td><td>v_str</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>Pref plus speed deviation times gain</td><td>p.u.</td><td>v_str</td></tr><tr><td>LL_y</td><td>LL_y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Mechanical power interface to SynGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>pd</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>LAG_y</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rtm0</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>0</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>LL_y</td><td>LL_y</td><td>Algeb</td><td>LAG_y</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>-LAG_y + pd</td><td>T1</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>LAG_y - LL_x</td><td>T3</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>- paux + paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>- pout + ue (-Dtwd + LLy)</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>- wref + wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rpref0 - pref</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>ue (ω - wref) - wd</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>gainue (paux + pref - wd) - pd</td></tr><tr><td>LL_y</td><td>LLy</td><td>Algeb</td><td>LLLT1z1LLLT2z1(-LLx + LLy) + LLxT3 - LLyT3 + T2 (LAGy - LLx)</td></tr><tr><td>tm</td><td>tm</td><td>ExtAl-genb</td><td>ue (pout - tm0)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>pref0</td><td>Pref0</td><td>tm0</td><td>ConstService</td></tr><tr><td>paux0</td><td>Paux0</td><td>0</td><td>ConstService</td></tr><tr><td>gain</td><td>G</td><td>ue/R</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LAGLim</td><td>limLAG</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>LL_LT1</td><td>LTLL</td><td>LessThan</td><td></td></tr><tr><td>LL_LT2</td><td>LTLL</td><td>LessThan</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LAG</td><td>LAG</td><td>LagAntiWindup</td><td></td></tr><tr><td>LL</td><td>LL</td><td>LeadLag</td><td></td></tr></table>

Config Fields in [TGOV1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.35.3 TGOV1DB

TGOV1 turbine governor model with speed input deadband. 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory,unique</td></tr><tr><td>Tn</td><td>Tn</td><td>Turbine power rating. Equal to Sn if not pro-vided.</td><td>0</td><td>MVA</td><td></td></tr><tr><td>wref0</td><td>ωref0</td><td>Base speed reference</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>R</td><td>R</td><td>Speed regulation gain (mach. base default)</td><td>0.050</td><td>p.u.</td><td>ipower</td></tr><tr><td>VMAX</td><td>Vmax</td><td>Maximum valve position</td><td>1.200</td><td>p.u.</td><td>power</td></tr><tr><td>VMIN</td><td>Vmin</td><td>Minimum valve position</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>T1</td><td>T1</td><td>Valve time constant</td><td>0.100</td><td></td><td></td></tr><tr><td>T2</td><td>T2</td><td>Lead-lag lead time constant</td><td>0.200</td><td></td><td></td></tr><tr><td>T3</td><td>T3</td><td>Lead-lag lag time constant</td><td>10</td><td></td><td></td></tr><tr><td>Dt</td><td>Dt</td><td>Turbine damping coefficient</td><td>0</td><td></td><td>power</td></tr><tr><td>dbL</td><td>dbL</td><td>Lower bound of deadband</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>dbU</td><td>dbU</td><td>Upper bound of deadband</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>Sg</td><td>Sn</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator connection status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>Auxiliary power input</td><td></td><td>v_str</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>Turbine final output power</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>Speed reference variable</td><td></td><td>v_str</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Reference power input</td><td></td><td>v_str</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>Generator speed deviation</td><td>p.u.</td><td>v_str</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>Pref plus speed deviation times gain</td><td>p.u.</td><td>v_str</td></tr><tr><td>LL_y</td><td>LL_y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>DB_y</td><td>DB_y</td><td>Algeb</td><td>Deadband type 1 output</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Mechanical power interface to SynGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>pd</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>LAG_y</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rtm0</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>0</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>LL_y</td><td>LL_y</td><td>Algeb</td><td>LAG_y</td></tr><tr><td>DB_y</td><td>DB_y</td><td>Algeb</td><td>1.0DBdbzl(-dbL+wd) + 1.0DBdbzu(-dbU+wd)</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>-LAG_y + pd</td><td>T1</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>LAG_y - LL_x</td><td>T3</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# 5.35. TurbineGov

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>- paux + paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>- DByDt + LLy - pout</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>- wref + wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rpref0 - pref</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>ue (ω - wref) - wd</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>gainue (-DBy + paux + pref) - pd</td></tr><tr><td>LL_y</td><td>LL_y</td><td>Algeb</td><td>LLLT1z1LLLT2z1(-LLx + LLy) + LLxT3 - LLyT3 + T2 (LAGy - LLx)</td></tr><tr><td>DB_y</td><td>DBy</td><td>Algeb</td><td>1.0DBdbzl(-dbL + wd) + 1.0DBdbzu(-dbU + wd) - DBy</td></tr><tr><td>tm</td><td>tm</td><td>ExtAl-genb</td><td>ue (pout - tm0)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>pref0</td><td>Pref0</td><td>tm0</td><td>ConstService</td></tr><tr><td>paux0</td><td>Paux0</td><td>0</td><td>ConstService</td></tr><tr><td>gain</td><td>G</td><td>ue/R</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LAGLim</td><td>limLAG</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>LL_LT1</td><td>LTLL</td><td>LessThan</td><td></td></tr><tr><td>LL_LT2</td><td>LTLL</td><td>LessThan</td><td></td></tr><tr><td>DB_db</td><td>dbDB</td><td>DeadBand</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LAG</td><td>LAG</td><td>LagAntiWindup</td><td></td></tr><tr><td>LL</td><td>LL</td><td>LeadLag</td><td></td></tr><tr><td>DB</td><td>DB</td><td>DeadBand1</td><td>deadband for speed deviation</td></tr></table>

Config Fields in [TGOV1DB] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr></table>

# 5.35.4 TGOV1N

New TGOV1 (TGOV1N) turbine governor model. 

The TGOV1N model that sums pref and paux signals after the droop. This model is useful for incorporating AGC and scheduling signals, which will not be multiplied by $\perp / \mathtt { R }$ like in the original TGOV1 model. 

Scheduling changes should write to pref0.v in place. AGC signal should write to paux0.v in place. 

Modifying tm0 is not allowed. 

# Examples

To update all paux0 values to paux_new, which contains the new values, do 

```txt
ss.TGOV1N.paux0.v[:] = paux_new # in-place update of the `paux0.v` array 
```

instead of 

```txt
ss.TGOV1N.paux0.v = paux_new # error; changes the reference of `paux0.v' 
```


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory,unique</td></tr><tr><td>Tn</td><td>Tn</td><td>Turbine power rating. Equal to Sn if not provided.</td><td>0</td><td>MVA</td><td></td></tr><tr><td>wref0</td><td>ωref0</td><td>Base speed reference</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>R</td><td>R</td><td>Speed regulation gain (mach. base default)</td><td>0.050</td><td>p.u.</td><td>ipower</td></tr><tr><td>VMAX</td><td>Vmax</td><td>Maximum valve position</td><td>1.200</td><td>p.u.</td><td>power</td></tr><tr><td>VMIN</td><td>Vmin</td><td>Minimum valve position</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>T1</td><td>T1</td><td>Valve time constant</td><td>0.100</td><td></td><td></td></tr><tr><td>T2</td><td>T2</td><td>Lead-lag lead time constant</td><td>0.200</td><td></td><td></td></tr><tr><td>T3</td><td>T3</td><td>Lead-lag lag time constant</td><td>10</td><td></td><td></td></tr><tr><td>Dt</td><td>Dt</td><td>Turbine damping coefficient</td><td>0</td><td></td><td>power</td></tr><tr><td>Sg</td><td>Sn</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator connection status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr></table>


Variables


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>Auxiliary power input</td><td></td><td>v_str</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>Turbine final output power</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>Speed reference variable</td><td></td><td>v_str</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Reference power input</td><td></td><td>v_str</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>Generator speed deviation</td><td>p.u.</td><td>v_str</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>Pref plus speed deviation times gain</td><td>p.u.</td><td>v_str</td></tr><tr><td>LL_y</td><td>LL_y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Mechanical power interface to SynGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>pd</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>LAG_y</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>tm0</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>0</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>LL_y</td><td>LL_y</td><td>Algeb</td><td>LAG_y</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>-LAG_y + pd</td><td>T1</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>LAG_y - LL_x</td><td>T3</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>- paux + paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>- pout + ue (-Dtwd + LLy)</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>- wref + wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>- pref + pref0</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>ue (ω - wref) - wd</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>- pd + ue (-gainwd + paux + pref)</td></tr><tr><td>LL_y</td><td>LLy</td><td>Algeb</td><td>LLLT1z1LLLT2z1(-LLx + LLy) + LLxT3 - LLyT3 + T2 (LAGy - LLx)</td></tr><tr><td>tm</td><td>tm</td><td>ExtAl-genb</td><td>ue (pout - tm0)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>pref0</td><td>Pref0</td><td>tm0</td><td>ConstService</td></tr><tr><td>paux0</td><td>Paux0</td><td>0</td><td>ConstService</td></tr><tr><td>gain</td><td>G</td><td>ue/R</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LAGLim</td><td>limLAG</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>LL_LT1</td><td>LTLL</td><td>LessThan</td><td></td></tr><tr><td>LL_LT2</td><td>LTLL</td><td>LessThan</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LAG</td><td>LAG</td><td>LagAntiWindup</td><td></td></tr><tr><td>LL</td><td>LL</td><td>LeadLag</td><td></td></tr></table>

Config Fields in [TGOV1N] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.35.5 TGOV1NDB

TGOV1N turbine governor model with speed input deadband. 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory,unique</td></tr><tr><td>Tn</td><td>Tn</td><td>Turbine power rating. Equal to Sn if not pro-vided.</td><td>0</td><td>MVA</td><td></td></tr><tr><td>wref0</td><td>ωref0</td><td>Base speed reference</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>R</td><td>R</td><td>Speed regulation gain (mach. base default)</td><td>0.050</td><td>p.u.</td><td>ipower</td></tr><tr><td>VMAX</td><td>Vmax</td><td>Maximum valve position</td><td>1.200</td><td>p.u.</td><td>power</td></tr><tr><td>VMIN</td><td>Vmin</td><td>Minimum valve position</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>T1</td><td>T1</td><td>Valve time constant</td><td>0.100</td><td></td><td></td></tr><tr><td>T2</td><td>T2</td><td>Lead-lag lead time constant</td><td>0.200</td><td></td><td></td></tr><tr><td>T3</td><td>T3</td><td>Lead-lag lag time constant</td><td>10</td><td></td><td></td></tr><tr><td>Dt</td><td>Dt</td><td>Turbine damping coefficient</td><td>0</td><td></td><td>power</td></tr><tr><td>dbL</td><td>dbL</td><td>Lower bound of deadband</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>dbU</td><td>dbU</td><td>Upper bound of deadband</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>Sg</td><td>Sn</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator connection status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr></table>


Variables


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>LAG_y</td><td>LAGy</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>LL_x</td><td>LLx</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>Auxiliary power input</td><td></td><td>v_str</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>Turbine final output power</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>Speed reference variable</td><td></td><td>v_str</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Reference power input</td><td></td><td>v_str</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>Generator speed deviation</td><td>p.u.</td><td>v_str</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>Pref plus speed deviation times gain</td><td>p.u.</td><td>v_str</td></tr><tr><td>LL_y</td><td>LLy</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>DB_y</td><td>DBy</td><td>Algeb</td><td>Deadband type 1 output</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Mechanical power interface to SynGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>pd</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>LAG_y</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>tm0</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>0</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>LL_y</td><td>LL_y</td><td>Algeb</td><td>LAG_y</td></tr><tr><td>DB_y</td><td>DB_y</td><td>Algeb</td><td>1.0DBdbzl(-dbL+wd) + 1.0DBdbzu(-dbU+wd)</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>-LAG_y + pd</td><td>T1</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>LAG_y - LL_x</td><td>T3</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>- paux + paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>- DByDt + LLy - pout</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>- wref + wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>- pref + pref0</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>ue (ω - wref) - wd</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>- pd + ue (-DBygain + paux + pref)</td></tr><tr><td>LL_y</td><td>LLy</td><td>Algeb</td><td>LLLT1z1LLLT2z1(-LLx + LLy) + LLxT3 - LLyT3 + T2 (LAGy - LLx)</td></tr><tr><td>DB_y</td><td>DBy</td><td>Algeb</td><td>1.0DBdbzl(-dbL + wd) + 1.0DBdbzu(-dbU + wd) - DBy</td></tr><tr><td>tm</td><td>tm</td><td>ExtAl-gen</td><td>ue (pout - tm0)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>pref0</td><td>Pref0</td><td>tm0</td><td>ConstService</td></tr><tr><td>paux0</td><td>Paux0</td><td>0</td><td>ConstService</td></tr><tr><td>gain</td><td>G</td><td>ue/R</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LAGLim</td><td>limLAG</td><td>AntiWindup</td><td>Limiter in Lag</td></tr><tr><td>LL_LT1</td><td>LTLL</td><td>LessThan</td><td></td></tr><tr><td>LL_LT2</td><td>LTLL</td><td>LessThan</td><td></td></tr><tr><td>DB_db</td><td>dbDB</td><td>DeadBand</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LAG</td><td>LAG</td><td>LagAntiWindup</td><td></td></tr><tr><td>LL</td><td>LL</td><td>LeadLag</td><td></td></tr><tr><td>DB</td><td>DB</td><td>DeadBand1</td><td>deadband for speed deviation</td></tr></table>

Config Fields in [TGOV1NDB] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.35.6 IEEEG1

IEEE Type 1 Speed-Governing Model. 

If only one generator is connected, its idx must be given to syn, and syn2 must be left blank. Each generator must provide data in its Sn base. 

syn is connected to the high-pressure output (PHP) and the optional syn2 is connected to the low- pressure output (PLP). 

The speed deviation of generator 1 (syn) is measured. If the turbine rating $T n$ is not specified, the sum of Sn of all connected generators will be used. 

Normally, $\mathrm { K } 1 + \mathrm { K } 2 + \ldots + \mathrm { K } 8 = 1 . 0 $ . If the second generator is not connected, $\mathrm { K } 1 + \mathrm { K } 3 + \mathrm { K } 5 + \mathrm { K } 7 = 1$ , and K2 $+ \mathrm { K } 4 + \mathrm { K } 6 + \mathrm { K } 8 = 0$ . If K1 to K8 do not sum up to 1.0, they will be normalized. The normalized parameters are called K1n through $\mathtt { K } 8 \mathrm { n }$ . 

If initialization error occurs for variable vs, it is due to the limits PMIN and PMAX. 

IEEEG1 does not yet support the change of reference (scheduling). 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory,unique</td></tr><tr><td>Tn</td><td>\( T_n \)</td><td>Turbine power rating. Equal to Sn if not provided.</td><td>0</td><td>MVA</td><td></td></tr><tr><td>wref0</td><td>\( \omega_{ref0} \)</td><td>Base speed reference</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>syn2</td><td></td><td>Optional SynGen idx</td><td></td><td></td><td></td></tr><tr><td>K</td><td>K</td><td>Gain (1/R) in mach. base</td><td>20</td><td>p.u. (power)</td><td>power</td></tr><tr><td>T1</td><td>\( T_1 \)</td><td>Gov. lag time const.</td><td>1</td><td></td><td></td></tr><tr><td>T2</td><td>\( T_2 \)</td><td>Gov. lead time const.</td><td>1</td><td></td><td></td></tr><tr><td>T3</td><td>\( T_3 \)</td><td>Valve controller time const.</td><td>0.100</td><td></td><td></td></tr><tr><td>UO</td><td>\( U_o \)</td><td>Max. valve opening rate</td><td>0.100</td><td>p.u./sec</td><td></td></tr><tr><td>UC</td><td>\( U_c \)</td><td>Max. valve closing rate</td><td>-0.100</td><td>p.u./sec</td><td></td></tr><tr><td>PMAX</td><td>\( P_{MAX} \)</td><td>Max. turbine power</td><td>5</td><td></td><td>power</td></tr><tr><td>PMIN</td><td>\( P_{MIN} \)</td><td>Min. turbine power</td><td>0</td><td></td><td>power</td></tr><tr><td>T4</td><td>\( T_4 \)</td><td>Inlet piping/steam bowl time constant</td><td>0.400</td><td></td><td></td></tr><tr><td>K1</td><td>\( K_1 \)</td><td>Fraction of power from HP</td><td>0.500</td><td></td><td></td></tr><tr><td>K2</td><td>\( K_2 \)</td><td>Fraction of power from LP</td><td>0</td><td></td><td></td></tr><tr><td>T5</td><td>\( T_5 \)</td><td>Time constant of 2nd boiler pass</td><td>8</td><td></td><td></td></tr><tr><td>K3</td><td>\( K_3 \)</td><td>Fraction of HP shaft power after 2nd boiler pass</td><td>0.500</td><td></td><td></td></tr><tr><td>K4</td><td>\( K_4 \)</td><td>Fraction of LP shaft power after 2nd boiler pass</td><td>0</td><td></td><td></td></tr><tr><td>T6</td><td>\( T_6 \)</td><td>Time constant of 3rd boiler pass</td><td>0.500</td><td></td><td></td></tr><tr><td>K5</td><td>\( K_5 \)</td><td>Fraction of HP shaft power after 3rd boiler pass</td><td>0</td><td></td><td></td></tr></table>

continues on next page 


Table 46 – continued from previous page


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>K6</td><td>K6</td><td>Fraction of LP shaft power after 3rd boiler pass</td><td>0</td><td></td><td></td></tr><tr><td>T7</td><td>T7</td><td>Time constant of 4th boiler pass</td><td>0.050</td><td></td><td></td></tr><tr><td>K7</td><td>K7</td><td>Fraction of HP shaft power after 4th boiler pass</td><td>0</td><td></td><td></td></tr><tr><td>K8</td><td>K8</td><td>Fraction of LP shaft power after 4th boiler pass</td><td>0</td><td></td><td></td></tr><tr><td>Sg</td><td>Sn</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator connection status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr><tr><td>Sg2</td><td>Sn2</td><td>Rated power of Syn2</td><td>0</td><td>MVA</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>IAW_y</td><td>IAW_y</td><td>State</td><td>AW Integrator output</td><td></td><td>v_str</td></tr><tr><td>L4_y</td><td>L4y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>L5_y</td><td>L5y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>L6_y</td><td>L6y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>L7_y</td><td>L7y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>Auxiliary power input</td><td></td><td>v_str</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>Turbine final output power</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>Speed reference variable</td><td></td><td>v_str</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>Generator under speed</td><td>p.u.</td><td>v_str</td></tr><tr><td>LL_y</td><td>LL_y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>vs</td><td>vs</td><td>Algeb</td><td>Valve speed</td><td></td><td>v_str</td></tr><tr><td>vsl</td><td>vsl</td><td>Algeb</td><td>Valve move speed after limiter</td><td></td><td>v_str</td></tr><tr><td>PHP</td><td>PHP</td><td>Algeb</td><td>HP output</td><td></td><td>v_str</td></tr><tr><td>PLP</td><td>PLP</td><td>Algeb</td><td>LP output</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Mechanical power interface to SynGen</td><td></td><td></td></tr><tr><td>tm2</td><td>tm2</td><td>ExtAlgeb</td><td>Mechanical power to syn2</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>LL_x</td><td>\(LL_x\)</td><td>State</td><td>wd</td></tr><tr><td>IAW_y</td><td>\(IAW_y\)</td><td>State</td><td>tm012</td></tr><tr><td>L4_y</td><td>\(L_{4y}\)</td><td>State</td><td>\(IAW_y\)</td></tr><tr><td>L5_y</td><td>\(L_{5y}\)</td><td>State</td><td>\(L_{4y}\)</td></tr><tr><td>L6_y</td><td>\(L_{6y}\)</td><td>State</td><td>\(L_{5y}\)</td></tr><tr><td>L7_y</td><td>\(L_{7y}\)</td><td>State</td><td>\(L_{6y}\)</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>\(paux_0\)</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>wref</td><td>\(wref\)</td><td>Algeb</td><td>\(wref_0\)</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>0</td></tr><tr><td>LL_y</td><td>\(LL_y\)</td><td>Algeb</td><td>wd</td></tr><tr><td>vs</td><td>vs</td><td>Algeb</td><td>0</td></tr><tr><td>vsl</td><td>vsl</td><td>Algeb</td><td>\(HL_{zi}vs + HL_{zl}UC + HL_{zu}UO\)</td></tr><tr><td>PHP</td><td>PHP</td><td>Algeb</td><td>ue(K1n\(L_{4y}\)+K3n\(L_{5y}\)+K5n\(L_{6y}\)+K7n\(L_{7y}\))</td></tr><tr><td>PLP</td><td>PLP</td><td>Algeb</td><td>ue(K2n\(L_{4y}\)+K4n\(L_{5y}\)+K6n\(L_{6y}\)+K8n\(L_{7y}\))</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr><tr><td>tm2</td><td>tm2</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>LL_x</td><td>LL_x</td><td>State</td><td>-LL_x + wd</td><td>T1</td></tr><tr><td>IAW_y</td><td>IAW_y</td><td>State</td><td>vsl</td><td>1</td></tr><tr><td>L4_y</td><td>L4y</td><td>State</td><td>IAW_y - L4y</td><td>T4</td></tr><tr><td>L5_y</td><td>L5y</td><td>State</td><td>L4y - L5y</td><td>T5</td></tr><tr><td>L6_y</td><td>L6y</td><td>State</td><td>L5y - L6y</td><td>T6</td></tr><tr><td>L7_y</td><td>L7y</td><td>State</td><td>L6y - L7y</td><td>T7</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>- paux + paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>PHPue - pout</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>- wref + wref0</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>ue (-ω + wref) - wd</td></tr><tr><td>LL_y</td><td>LLy</td><td>Algeb</td><td>KLLxT1 + KT2 (-LLx + wd) + LLLT1z1LLLT2z1 (-KLLx + LLy) - LLyT1</td></tr><tr><td>vs</td><td>vs</td><td>Algeb</td><td>- vs + ue(-IAWy+LLy+paux+tm012)/T3</td></tr><tr><td>vsl</td><td>vsl</td><td>Algeb</td><td>HLzivs + HLLzlUC + HLLzuUO - vsl</td></tr><tr><td>PHP</td><td>PHP</td><td>Algeb</td><td>- PHP + ue (K1nL4y + K3nL5y + K5nL6y + K7nL7y)</td></tr><tr><td>PLP</td><td>PLP</td><td>Algeb</td><td>- PLP + ue (K2nL4y + K4nL5y + K6nL6y + K8nL7y)</td></tr><tr><td>tm</td><td>tm</td><td>ExtAl-gen</td><td>ue (pout - tm0)</td></tr><tr><td>tm2</td><td>tm2</td><td>ExtAl-gen</td><td>uezsyn2 (PLP - tm02)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>pref0</td><td>Pref0</td><td>tm0</td><td>ConstService</td></tr><tr><td>paux0</td><td>Paux0</td><td>0</td><td>ConstService</td></tr><tr><td>_sumK18</td><td>Σi=18Ki</td><td>K1+K2+K3+K4+K5+K6+K7+K8</td><td>ConstService</td></tr><tr><td>_Kcoeff</td><td>Kcoeff</td><td>1/sumK18</td><td>ConstService</td></tr><tr><td>K1n</td><td>K1n</td><td>K1Kcoeff</td><td>ConstService</td></tr><tr><td>K2n</td><td>K2n</td><td>K2Kcoeff</td><td>ConstService</td></tr><tr><td>K3n</td><td>K3n</td><td>K3Kcoeff</td><td>ConstService</td></tr><tr><td>K4n</td><td>K4n</td><td>K4Kcoeff</td><td>ConstService</td></tr><tr><td>K5n</td><td>K5n</td><td>K5Kcoeff</td><td>ConstService</td></tr><tr><td>K6n</td><td>K6n</td><td>K6Kcoeff</td><td>ConstService</td></tr><tr><td>K7n</td><td>K7n</td><td>K7Kcoeff</td><td>ConstService</td></tr><tr><td>K8n</td><td>K8n</td><td>K8Kcoeff</td><td>ConstService</td></tr><tr><td>_sm0K2</td><td>tm0K2</td><td>tm0zsyn2(K2n+K4n+K6n+K8n)</td><td>PostInitService</td></tr><tr><td>_sm02K1</td><td>tm02K1</td><td>tm02(K1n+K3n+K5n+K7n)</td><td>PostInitService</td></tr><tr><td>tm012</td><td>tm012</td><td>tm0+tm02</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LL_LT1</td><td>\(LT_{LL}\)</td><td>LessThan</td><td></td></tr><tr><td>LL_LT2</td><td>\(LT_{LL}\)</td><td>LessThan</td><td></td></tr><tr><td>HL</td><td>\(H L\)</td><td>HardLimiter</td><td>Limiter on valve speed</td></tr><tr><td>IAW_lim</td><td>\(lim_{IAW}\)</td><td>AntiWindup</td><td>Limiter in integrator</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LL</td><td>LL</td><td>LeadLag</td><td>Signal conditioning for wd</td></tr><tr><td>IAW</td><td>IAW</td><td>IntegratorAntiWindup</td><td>Valve position integrator</td></tr><tr><td>L4</td><td>L4</td><td>Lag</td><td>first process</td></tr><tr><td>L5</td><td>L5</td><td>Lag</td><td>second (reheat) process</td></tr><tr><td>L6</td><td>L6</td><td>Lag</td><td>third process</td></tr><tr><td>L7</td><td>L7</td><td>Lag</td><td>fourth (second reheat) process</td></tr></table>

Config Fields in [IEEEG1] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.35.7 IEESGO

IEEE Standard Governor (IEESGO). 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory,unique</td></tr><tr><td>Tn</td><td>Tn</td><td>Turbine power rating. Equal to Sn if not pro-vided.</td><td>0</td><td>MVA</td><td></td></tr><tr><td>wref0</td><td>ωref0</td><td>Base speed reference</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>T1</td><td>T1</td><td>Controller lag</td><td>0.020</td><td></td><td></td></tr><tr><td>T2</td><td>T2</td><td>Lead compensation</td><td>1</td><td></td><td></td></tr><tr><td>T3</td><td>T3</td><td>Governor lag</td><td>1</td><td></td><td></td></tr><tr><td>T4</td><td>T4</td><td>Steam inlet delay</td><td>0.500</td><td></td><td></td></tr><tr><td>T5</td><td>T5</td><td>Reheater delay</td><td>10</td><td></td><td></td></tr><tr><td>T6</td><td>T6</td><td>Crossover delay</td><td>0.500</td><td></td><td></td></tr><tr><td>K1</td><td>K1</td><td>1/pu regulation</td><td>0.020</td><td></td><td></td></tr><tr><td>K2</td><td>K2</td><td>fraction K2</td><td>1</td><td></td><td></td></tr><tr><td>K3</td><td>K3</td><td>fraction K3</td><td>1</td><td></td><td></td></tr><tr><td>PMAX</td><td>PMAX</td><td>Max. turbine power</td><td>5</td><td></td><td>power</td></tr><tr><td>PMIN</td><td>PMIN</td><td>Min. turbine power</td><td>0</td><td></td><td>power</td></tr><tr><td>Sg</td><td>Sn</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator connection status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr></table>


Variables


<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>F1_y</td><td>F1y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>F2_x</td><td>F2x</td><td>State</td><td>State in lead-lag</td><td></td><td>v_str</td></tr><tr><td>F3_y</td><td>F3y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>F4_y</td><td>F4y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>F5_y</td><td>F5y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>Auxiliary power input</td><td></td><td>v_str</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>Turbine final output power</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>Speed reference variable</td><td></td><td>v_str</td></tr><tr><td>F2_y</td><td>F2y</td><td>Algeb</td><td>Output of lead-lag</td><td></td><td>v_str</td></tr><tr><td>HL_x</td><td>HLx</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>HL_y</td><td>HLy</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Mechanical power interface to SynGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>F1_y</td><td>F1y</td><td>State</td><td>K1ue (ω - wref)</td></tr><tr><td>F2_x</td><td>F2x</td><td>State</td><td>F1y</td></tr><tr><td>F3_y</td><td>F3y</td><td>State</td><td>1.0HLy</td></tr><tr><td>F4_y</td><td>F4y</td><td>State</td><td>F3yK2</td></tr><tr><td>F5_y</td><td>F5y</td><td>State</td><td>F4yK3</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>wref0</td></tr><tr><td>F2_y</td><td>F2y</td><td>Algeb</td><td>F1y</td></tr><tr><td>HL_x</td><td>HLx</td><td>Algeb</td><td>1.0ue (-F2y + paux + pref0)</td></tr><tr><td>HL_y</td><td>HLy</td><td>Algeb</td><td>1.0HLLimziHLx + 1.0HLLimzlPMIN + 1.0HLLimzuPMAX</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>F1_y</td><td>F1y</td><td>State</td><td>-F1y + K1ue (ω - wref)</td><td>T1</td></tr><tr><td>F2_x</td><td>F2x</td><td>State</td><td>F1y - F2x</td><td>T3</td></tr><tr><td>F3_y</td><td>F3y</td><td>State</td><td>-F3y + 1.0HLy</td><td>T4</td></tr><tr><td>F4_y</td><td>F4y</td><td>State</td><td>F3yK2 - F4y</td><td>T5</td></tr><tr><td>F5_y</td><td>F5y</td><td>State</td><td>F4yK3 - F5y</td><td>T6</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>- paux + paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>- pout + ue (F3y (1 - K2) + F4y (1 - K3) + F5y)</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>- wref + wref0</td></tr><tr><td>F2_y</td><td>F2y</td><td>Algeb</td><td>F2LT1z1F2LT2z1(-1.0F2x + F2y) + 1.0F2xT3 - F2yT3 + 1.0T2 (F1y - F2x)</td></tr><tr><td>HL_x</td><td>HLx</td><td>Algeb</td><td>- HLx + 1.0ue (-F2y + paux + pref0)</td></tr><tr><td>HL_y</td><td>HLy</td><td>Algeb</td><td>1.0HLLimzi HLx + 1.0HLLimzlPMIN + 1.0HLLimzu PMAX - HLy</td></tr><tr><td>tm</td><td>tm</td><td>ExtAl-gen</td><td>ue (pout - tm0)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>pref0</td><td>Pref0</td><td>tm0</td><td>ConstService</td></tr><tr><td>paux0</td><td>Paux0</td><td>0</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>F2_LT1</td><td>\( LT_{F2} \)</td><td>LessThan</td><td></td></tr><tr><td>F2_LT2</td><td>\( LT_{F2} \)</td><td>LessThan</td><td></td></tr><tr><td>HL_lim</td><td>\( lim_{HL} \)</td><td>HardLimiter</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>F1</td><td>F1</td><td>Lag</td><td></td></tr><tr><td>F2</td><td>F2</td><td>LeadLag</td><td></td></tr><tr><td>HL</td><td>HL</td><td>GainLimiter</td><td></td></tr><tr><td>F3</td><td>F3</td><td>Lag</td><td></td></tr><tr><td>F4</td><td>F4</td><td>Lag</td><td></td></tr><tr><td>F5</td><td>F5</td><td>Lag</td><td></td></tr></table>

Config Fields in [IEESGO] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.35.8 GAST

GAST turbine governor model. 

Reference: 

[1] Neplan, TURBINE-GOVERNOR GAST, [Online], 

Available: 

https://www.neplan.ch/wp-content/uploads/2015/08/Nep_TURBINES_GOV.pdf 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory,unique</td></tr><tr><td>Tn</td><td>Tn</td><td>Turbine power rating. Equal to Sn if not pro-vided.</td><td>0</td><td>MVA</td><td></td></tr><tr><td>wref0</td><td>ωref0</td><td>Base speed reference</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>R</td><td>R</td><td>Speed regulation gain (mach. base default)</td><td>0.050</td><td>p.u.</td><td>ipower</td></tr><tr><td>VMAX</td><td>Vmax</td><td>Maximum valve position</td><td>1.200</td><td>p.u.</td><td>power</td></tr><tr><td>VMIN</td><td>Vmin</td><td>Minimum valve position</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>KT</td><td>KT</td><td>Temperature limiter gain</td><td>5</td><td></td><td></td></tr><tr><td>AT</td><td>AT</td><td>Ambient temperature load limit</td><td>1</td><td></td><td>power</td></tr><tr><td>T1</td><td>T1</td><td>Valve time constant</td><td>0.100</td><td></td><td></td></tr><tr><td>T2</td><td>T2</td><td>Lead-lag lead time constant</td><td>0.200</td><td></td><td></td></tr><tr><td>T3</td><td>T3</td><td>Lead-lag lag time constant</td><td>10</td><td></td><td></td></tr><tr><td>Dt</td><td>Dt</td><td>Turbine damping coefficient</td><td>0</td><td></td><td>power</td></tr><tr><td>Sg</td><td>Sn</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator connection status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>LAG_y</td><td>LAGy</td><td>State</td><td>State in lag TF</td><td></td><td>v_str</td></tr><tr><td>LG2_y</td><td>LG2y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>LG3_y</td><td>LG3y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>Auxiliary power input</td><td></td><td>v_str</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>Turbine final output power</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>Speed reference variable</td><td></td><td>v_str</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Reference power input</td><td></td><td>v_str</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>Generator under speed</td><td>p.u.</td><td>v_str</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>Pref plus under speed times gain</td><td>p.u.</td><td>v_str</td></tr><tr><td>v9</td><td>v9</td><td>Algeb</td><td>V_9 for LVGate input</td><td></td><td>v_str</td></tr><tr><td>LVG_y</td><td>LVGy</td><td>Algeb</td><td>LVGate output</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Mechanical power interface to SynGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>LVG_y</td></tr><tr><td>LG2_y</td><td>LG2y</td><td>State</td><td>LAG_y</td></tr><tr><td>LG3_y</td><td>LG3y</td><td>State</td><td>LG2y</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rtm0</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>0</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>v9</td><td>v9</td><td>Algeb</td><td>ue (AT + KT (AT - tm0))</td></tr><tr><td>LVG_y</td><td>LVG_y</td><td>Algeb</td><td>LVGLtz0v9 + LVGLtz1pd</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>-LAG_y + LVG_y</td><td>T1</td></tr><tr><td>LG2_y</td><td>LG2y</td><td>State</td><td>LAG_y - LG2y</td><td>T2</td></tr><tr><td>LG3_y</td><td>LG3y</td><td>State</td><td>LG2y - LG3y</td><td>T3</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>- paux + paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>- pout + ue (-Dtwd + LG2y)</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>- wref + wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rpref0 - pref</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>ue (ω - wref) - wd</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>gainue (paux + pref - wd) - pd</td></tr><tr><td>v9</td><td>v9</td><td>Algeb</td><td>ue (AT + KT (AT - LG3y)) - v9</td></tr><tr><td>LVG_y</td><td>LVG_y</td><td>Algeb</td><td>LVGLtz0v9 + LVGLtz1pd - LVGy</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>ue (pout - tm0)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>pref0</td><td>Pref0</td><td>tm0</td><td>ConstService</td></tr><tr><td>paux0</td><td>Paux0</td><td>0</td><td>ConstService</td></tr><tr><td>gain</td><td>G</td><td>ue/R</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LVG lt</td><td>NoneLVG</td><td>LessThan</td><td></td></tr><tr><td>LAG_lim</td><td>limLAG</td><td>AntiWindup</td><td>Limiter in Lag</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LVG</td><td>LVG</td><td>LVGate</td><td>LVGate</td></tr><tr><td>LAG</td><td>LAG</td><td>LagAntiWindup</td><td></td></tr><tr><td>LG2</td><td>LG2</td><td>Lag</td><td>Lag T2</td></tr><tr><td>LG3</td><td>LG3</td><td>Lag</td><td>Lag T3</td></tr></table>

Config Fields in [GAST] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.35.9 HYGOV

HYGOV turbine governor model. 

Implements the PSS/E HYGOV model without deadband. 

Reference: 

[1] PSSE, Model Library, HYGOV 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory,unique</td></tr><tr><td>Tn</td><td>Tn</td><td>Turbine power rating. Equal to Sn if not pro-vided.</td><td>0</td><td>MVA</td><td></td></tr><tr><td>wref0</td><td>ωref0</td><td>Base speed reference</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>R</td><td>R</td><td>Speed regulation gain (mach. base default)</td><td>0.050</td><td>p.u.</td><td>ipower</td></tr><tr><td>r</td><td>r</td><td>Temporary droop (R&lt;r)</td><td>1</td><td>p.u.</td><td>ipower</td></tr><tr><td>GMAX</td><td>Gmax</td><td>Maximum governor response</td><td>1</td><td>p.u.</td><td>power</td></tr><tr><td>GMIN</td><td>Gmin</td><td>Minimum governor response</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>VELM</td><td>VELM</td><td>Gate velocity limit</td><td>0.300</td><td>p.u.</td><td>power</td></tr><tr><td>Tf</td><td>Tf</td><td>Filter time constant</td><td>0.050</td><td></td><td></td></tr><tr><td>Tr</td><td>Tr</td><td>Governor time constant</td><td>1</td><td></td><td></td></tr><tr><td>Tg</td><td>Tg</td><td>Servo time constant</td><td>0.050</td><td></td><td></td></tr><tr><td>Dt</td><td>Dt</td><td>Turbine damping coefficient</td><td>0</td><td></td><td>power</td></tr><tr><td>qNL</td><td>qNL</td><td>No-load flow at nominal head</td><td>0.100</td><td></td><td>power</td></tr><tr><td>Tw</td><td>Tw</td><td>Water inertia time constant constant</td><td>1</td><td></td><td></td></tr><tr><td>At</td><td>At</td><td>Turbine gain</td><td>1</td><td></td><td></td></tr><tr><td>Sg</td><td>Sn</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator connection status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>LG_y</td><td>LG_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>gtpos</td><td>gtpos</td><td>State</td><td>State in gate position (c)</td><td>rad</td><td>v_str</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>q_y</td><td>q_y</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>Auxiliary power input</td><td></td><td>v_str</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>Turbine final output power</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>Speed reference variable</td><td></td><td>v_str</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Reference power input</td><td></td><td>v_str</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>Generator speed deviation</td><td>p.u.</td><td>v_str</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>Pref plus speed deviation times gain</td><td>p.u.</td><td>v_str</td></tr><tr><td>dg</td><td>dg</td><td>Algeb</td><td>desired gate (c)</td><td>p.u.</td><td>v_str</td></tr><tr><td>h</td><td>h</td><td>Algeb</td><td>turbine head</td><td>p.u.</td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Mechanical power interface to SynGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>LG_y</td><td>LGy</td><td>State</td><td>pd</td></tr><tr><td>gtpos</td><td>gtpos</td><td>State</td><td>q0</td></tr><tr><td>LAG_y</td><td>LAGy</td><td>State</td><td>dg</td></tr><tr><td>q_y</td><td>qy</td><td>State</td><td>q0</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rq0</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>0</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>0</td></tr><tr><td>dg</td><td>dg</td><td>Algeb</td><td>q0</td></tr><tr><td>h</td><td>h</td><td>Algeb</td><td>1</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>LG_y</td><td>LG_y</td><td>State</td><td>-LG_y + pd</td><td>Tf</td></tr><tr><td>gtpos</td><td>gtpos</td><td>State</td><td>LG_y</td><td></td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>-LAG_y + dg</td><td>Tg</td></tr><tr><td>q_y</td><td>q_y</td><td>State</td><td>1 - q2y/LAGy2</td><td>Tw</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>- paux + paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>- pout + ue (Ath (-qNL + qy) - DtLAGywd)</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>- wref + wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rq0 - pref</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>ue (ω - wref) - wd</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>- pd + ue (-Rdg + paux + pref - wd)</td></tr><tr><td>dg</td><td>dg</td><td>Algeb</td><td>LGygr - dg + gtpos</td></tr><tr><td>h</td><td>h</td><td>Algeb</td><td>-h + q2y/LAGy2</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>ue (pout - tm0)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>pref0</td><td>Pref0</td><td>tm0</td><td>ConstService</td></tr><tr><td>paux0</td><td>Paux0</td><td>0</td><td>ConstService</td></tr><tr><td>VELMn</td><td>-VELM</td><td>-VELM</td><td>ConstService</td></tr><tr><td>tr</td><td>r*Tr</td><td>Trr</td><td>ConstService</td></tr><tr><td>gr</td><td>1/r</td><td>1/r</td><td>ConstService</td></tr><tr><td>ratel</td><td>rate1</td><td>-VELM - gr</td><td>ConstService</td></tr><tr><td>rateu</td><td>rateu</td><td>VELM - gr</td><td>ConstService</td></tr><tr><td>q0</td><td>q0</td><td>qNL + tm0/At</td><td>ConstService</td></tr><tr><td>dlg</td><td>dglower</td><td>-LGygr - VELM</td><td>VarService</td></tr><tr><td>dgu</td><td>dgupper</td><td>-LGygr + VELM</td><td>VarService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>dg_lim</td><td>limdg</td><td>AntiWindupRate</td><td>gate velocity and position limiter</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LG</td><td>LG</td><td>Lag</td><td>filter after speed deviation (e)</td></tr><tr><td>LAG</td><td>LAG</td><td>Lag</td><td>gate opening (g)</td></tr><tr><td>q</td><td>q</td><td>Integrator</td><td>turbine flow (q)</td></tr></table>

Config Fields in [HYGOV] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.35.10 HYGOVDB

HYGOV turbine governor model with speed input deadband. 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory,unique</td></tr><tr><td>Tn</td><td>Tn</td><td>Turbine power rating. Equal to Sn if not pro-vided.</td><td>0</td><td>MVA</td><td></td></tr><tr><td>wref0</td><td>ωref0</td><td>Base speed reference</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>R</td><td>R</td><td>Speed regulation gain (mach. base default)</td><td>0.050</td><td>p.u.</td><td>ipower</td></tr><tr><td>r</td><td>r</td><td>Temporary droop (R&lt;r)</td><td>1</td><td>p.u.</td><td>ipower</td></tr><tr><td>GMAX</td><td>Gmax</td><td>Maximum governor response</td><td>1</td><td>p.u.</td><td>power</td></tr><tr><td>GMIN</td><td>Gmin</td><td>Minimum governor response</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>VELM</td><td>VELM</td><td>Gate velocity limit</td><td>0.300</td><td>p.u.</td><td>power</td></tr><tr><td>Tf</td><td>Tf</td><td>Filter time constant</td><td>0.050</td><td></td><td></td></tr><tr><td>Tr</td><td>Tr</td><td>Governor time constant</td><td>1</td><td></td><td></td></tr><tr><td>Tg</td><td>Tg</td><td>Servo time constant</td><td>0.050</td><td></td><td></td></tr><tr><td>Dt</td><td>Dt</td><td>Turbine damping coefficient</td><td>0</td><td></td><td>power</td></tr><tr><td>qNL</td><td>qNL</td><td>No-load flow at nominal head</td><td>0.100</td><td></td><td>power</td></tr><tr><td>Tw</td><td>Tw</td><td>Water inertia time constant constant</td><td>1</td><td></td><td></td></tr><tr><td>At</td><td>At</td><td>Turbine gain</td><td>1</td><td></td><td></td></tr><tr><td>dbL</td><td>dbL</td><td>Lower bound of deadband</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>dbU</td><td>dbU</td><td>Upper bound of deadband</td><td>0</td><td>p.u.</td><td></td></tr><tr><td>Sg</td><td>Sn</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator connection status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>LG_y</td><td>LG_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>gtpos</td><td>gtpos</td><td>State</td><td>State in gate position (c)</td><td>rad</td><td>v_str</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>q_y</td><td>q_y</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>Auxiliary power input</td><td></td><td>v_str</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>Turbine final output power</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>Speed reference variable</td><td></td><td>v_str</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Reference power input</td><td></td><td>v_str</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>Generator speed deviation</td><td>p.u.</td><td>v_str</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>Pref plus speed deviation times gain</td><td>p.u.</td><td>v_str</td></tr><tr><td>dg</td><td>dg</td><td>Algeb</td><td>desired gate (c)</td><td>p.u.</td><td>v_str</td></tr><tr><td>h</td><td>h</td><td>Algeb</td><td>turbine head</td><td>p.u.</td><td>v_str</td></tr><tr><td>DB_y</td><td>DB_y</td><td>Algeb</td><td>Deadband type 1 output</td><td></td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Mechanical power interface to SynGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>LG_y</td><td>LG_y</td><td>State</td><td>pd</td></tr><tr><td>gtpos</td><td>gtpos</td><td>State</td><td>q0</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>dg</td></tr><tr><td>q_y</td><td>q_y</td><td>State</td><td>q0</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rq0</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>0</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>0</td></tr><tr><td>dg</td><td>dg</td><td>Algeb</td><td>q0</td></tr><tr><td>h</td><td>h</td><td>Algeb</td><td>1</td></tr><tr><td>DB_y</td><td>DB_y</td><td>Algeb</td><td>1.0DBdbzl(-dbL+wd) + 1.0DBdbzu(-dbU+wd)</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>LG_y</td><td>LG_y</td><td>State</td><td>-LG_y + pd</td><td>Tf</td></tr><tr><td>gtpos</td><td>gtpos</td><td>State</td><td>LG_y</td><td></td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>-LAG_y + dg</td><td>Tg</td></tr><tr><td>q_y</td><td>q_y</td><td>State</td><td>1 - q2y/LAGy2</td><td>Tw</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>- paux + paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>- pout + ue (Ath (-qNL + qy) - DtLAGywd)</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>- wref + wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rq0 - pref</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>ue (ω - wref) - wd</td></tr><tr><td>pd</td><td>pd</td><td>Algeb</td><td>- pd + ue (-DBy - Rdg + paux + pref)</td></tr><tr><td>dg</td><td>dg</td><td>Algeb</td><td>LGygr - dg + gtpos</td></tr><tr><td>h</td><td>h</td><td>Algeb</td><td>- h + q2y/LAGy2</td></tr><tr><td>DB_y</td><td>DBy</td><td>Algeb</td><td>1.0DBdbzl (-dbL + wd) + 1.0DBdbzu (-dbU + wd) - DBy</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>ue (pout - tm0)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>pref0</td><td>Pref0</td><td>tm0</td><td>ConstService</td></tr><tr><td>paux0</td><td>Paux0</td><td>0</td><td>ConstService</td></tr><tr><td>VELMn</td><td>-VELM</td><td>-VELM</td><td>ConstService</td></tr><tr><td>tr</td><td>r*Tr</td><td>Trr</td><td>ConstService</td></tr><tr><td>gr</td><td>1/r</td><td>1/r</td><td>ConstService</td></tr><tr><td>ratel</td><td>rate1</td><td>-VELM - gr</td><td>ConstService</td></tr><tr><td>rateu</td><td>rateu</td><td>VELM - gr</td><td>ConstService</td></tr><tr><td>q0</td><td>q0</td><td>qNL + tm0/At</td><td>ConstService</td></tr><tr><td>dlg</td><td>dglower</td><td>-LGygr - VELM</td><td>VarService</td></tr><tr><td>dgu</td><td>dgupper</td><td>-LGygr + VELM</td><td>VarService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>dg_lim</td><td>limdg</td><td>AntiWindupRate</td><td>gate velocity and position limiter</td></tr><tr><td>DB_db</td><td>dbDB</td><td>DeadBand</td><td></td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>LG</td><td>LG</td><td>Lag</td><td>filter after speed deviation (e)</td></tr><tr><td>LAG</td><td>LAG</td><td>Lag</td><td>gate opening (g)</td></tr><tr><td>q</td><td>q</td><td>Integrator</td><td>turbine flow (q)</td></tr><tr><td>DB</td><td>DB</td><td>DeadBand1</td><td>deadband for speed deviation</td></tr></table>

Config Fields in [HYGOVDB] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td></td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td></tr><tr><td>adjust_lower</td><td></td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td></tr><tr><td>adjust_upper</td><td></td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td></tr></table>

# 5.35.11 HYGOV4

HYGOV4 turbine governor model. 

Implements the PSS/E HYGOV4 model with the following ignored: 

• input deadband DB1 

• valve position deadband DB2 

• nonlinear function bewteen GV and P_{GV} 


Parameters


<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>syn</td><td></td><td>Synchronous generator idx</td><td></td><td></td><td>mandatory,unique</td></tr><tr><td>Tn</td><td>Tn</td><td>Turbine power rating. Equal to Sn if not pro-vided.</td><td>0</td><td>MVA</td><td></td></tr><tr><td>wref0</td><td>ωref0</td><td>Base speed reference</td><td>1</td><td>p.u.</td><td></td></tr><tr><td>Rperm</td><td>Rperm</td><td>Speed Regulation Gain (mach. base default)</td><td>0.500</td><td>p.u.</td><td>ipower</td></tr><tr><td>Rtemp</td><td>Rtemp</td><td>Temporary Droop (Rtemp &lt; Rperm)</td><td>1</td><td>p.u.</td><td>ipower</td></tr><tr><td>UO</td><td>UO</td><td>Maximum Gate opening velocity</td><td>1</td><td>p.u.</td><td>power</td></tr><tr><td>UC</td><td>UC</td><td>Maximum Gate closing velocity</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>PMAX</td><td>PMAX</td><td>Maximum Gate opening</td><td>1</td><td>p.u.</td><td>power</td></tr><tr><td>PMIN</td><td>PMIN</td><td>Minimum Gate opening</td><td>0</td><td>p.u.</td><td>power</td></tr><tr><td>Tp</td><td>Tp</td><td>Pilot servo time constant</td><td>0.050</td><td></td><td></td></tr><tr><td>Tg</td><td>Tg</td><td>Gate servo time constant</td><td>0.050</td><td></td><td></td></tr><tr><td>Tr</td><td>Tr</td><td>Dashpot time constant</td><td>0.050</td><td></td><td></td></tr><tr><td>Tw</td><td>Tw</td><td>Water inertia time constant</td><td>1</td><td></td><td></td></tr><tr><td>At</td><td>At</td><td>Turbine gain</td><td>1</td><td></td><td></td></tr><tr><td>Dturb</td><td>Dturb</td><td>Turbine Damping Factor</td><td>0</td><td></td><td>power</td></tr><tr><td>Hdam</td><td>Hdam</td><td>Head available at dam</td><td>1</td><td></td><td>power</td></tr><tr><td>qNL</td><td>qNL</td><td>No-Load flow at nominal head</td><td>0.100</td><td></td><td>power</td></tr><tr><td>Sg</td><td>Sn</td><td>Rated power from generator</td><td>0</td><td>MVA</td><td></td></tr><tr><td>ug</td><td>ug</td><td>Generator connection status</td><td>0</td><td>bool</td><td></td></tr><tr><td>Vn</td><td>Vn</td><td>Rated voltage from generator</td><td>0</td><td>kV</td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>GATE_y</td><td>GATE_y</td><td>State</td><td>AW Integrator output</td><td></td><td>v_str</td></tr><tr><td>WO_x</td><td>WO_x</td><td>State</td><td>State in washout filter</td><td></td><td>v_str</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>State in lag transfer function</td><td></td><td>v_str</td></tr><tr><td>q_y</td><td>q_y</td><td>State</td><td>Integrator output</td><td></td><td>v_str</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>Generator speed</td><td>p.u.</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>Auxiliary power input</td><td></td><td>v_str</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>Turbine final output power</td><td></td><td>v_str</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>Speed reference variable</td><td></td><td>v_str</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Reference power input</td><td></td><td>v_str</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>Generator speed deviation</td><td>p.u.</td><td>v_str</td></tr><tr><td>SV_x</td><td>SV_x</td><td>Algeb</td><td>Value before limiter</td><td></td><td>v_str</td></tr><tr><td>SV_y</td><td>SV_y</td><td>Algeb</td><td>Output after limiter and post gain</td><td></td><td>v_str</td></tr><tr><td>WO_y</td><td>WO_y</td><td>Algeb</td><td>Output of washout filter</td><td></td><td>v_str</td></tr><tr><td>Psum</td><td>Psum</td><td>Algeb</td><td>summation of power input to servo</td><td>p.u.</td><td>v_str</td></tr><tr><td>trhead</td><td>trhead</td><td>Algeb</td><td>turbine head</td><td>p.u.</td><td>v_str</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>Mechanical power interface to SynGen</td><td></td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>GATE_y</td><td>GATE_y</td><td>State</td><td>q0Hdam0.5</td></tr><tr><td>WO_x</td><td>WO_x</td><td>State</td><td>GATEy</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>Psum</td></tr><tr><td>q_y</td><td>q_y</td><td>State</td><td>q0</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td></td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>tm0ue</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rperm0Hdam0.5</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>0</td></tr><tr><td>SV_x</td><td>SVx</td><td>Algeb</td><td>LAGyiTg</td></tr><tr><td>SV_y</td><td>SVy</td><td>Algeb</td><td>SVlimzi SVx + SVlimzlUC + SVlimzUO</td></tr><tr><td>WO_y</td><td>WOy</td><td>Algeb</td><td>0</td></tr><tr><td>Psum</td><td>Psum</td><td>Algeb</td><td>0</td></tr><tr><td>trhead</td><td>trhead</td><td>Algeb</td><td>Hdam</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td></td></tr></table>

# Differential Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;T x&#x27; = f(x, y)&quot;</td><td>T (LHS)</td></tr><tr><td>GATE_y</td><td>GATE_y</td><td>State</td><td>SVy</td><td>1</td></tr><tr><td>WO_x</td><td>WO_x</td><td>State</td><td>GATE_y - WOx</td><td>Tr</td></tr><tr><td>LAG_y</td><td>LAG_y</td><td>State</td><td>-LAG_y + Psum</td><td>Tp</td></tr><tr><td>q_y</td><td>q_y</td><td>State</td><td>Hdam - trhead</td><td>Tw</td></tr><tr><td>omega</td><td>ω</td><td>ExtState</td><td>0</td><td></td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>paux</td><td>paux</td><td>Algeb</td><td>- paux + paux0</td></tr><tr><td>pout</td><td>pout</td><td>Algeb</td><td>- pout + ue (Attrhead (-qNL + qy) - DturbGATEywd)</td></tr><tr><td>wref</td><td>wref</td><td>Algeb</td><td>- wref + wref0</td></tr><tr><td>pref</td><td>pref</td><td>Algeb</td><td>Rpermq0Hdam0.5 - pref</td></tr><tr><td>wd</td><td>wd</td><td>Algeb</td><td>ue (ω - wref) - wd</td></tr><tr><td>SV_x</td><td>SVx</td><td>Algeb</td><td>LAGyiTg - SVx</td></tr><tr><td>SV_y</td><td>SVy</td><td>Algeb</td><td>SVlimzi SVx + SVlimzlUC + SVlimzuUO - SVy</td></tr><tr><td>WO_y</td><td>WOy</td><td>Algeb</td><td>-TrWOy + TrRtemp (GATEy - WOx)</td></tr><tr><td>Psum</td><td>Psum</td><td>Algeb</td><td>-Psum + ue (-GATEyRperm - WOy + paux + pref - wd)</td></tr><tr><td>trhead</td><td>trhead</td><td>Algeb</td><td>-trhead + q2/GATEy2</td></tr><tr><td>tm</td><td>tm</td><td>ExtAlgeb</td><td>ue (pout - tm0)</td></tr></table>

# Services

<table><tr><td>Name</td><td>Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>ue</td><td>ue</td><td>uug</td><td>ConstService</td></tr><tr><td>pref0</td><td>Pref0</td><td>tm0</td><td>ConstService</td></tr><tr><td>paux0</td><td>Paux0</td><td>0</td><td>ConstService</td></tr><tr><td>iTg</td><td>1/Tg</td><td>u/Tg</td><td>ConstService</td></tr><tr><td>R</td><td>Rtemp + Rperm</td><td>Rperm + Rtemp</td><td>ConstService</td></tr><tr><td>TrRtemp</td><td>Rtemp * Tr</td><td>RtempTr</td><td>ConstService</td></tr><tr><td>q0</td><td>q0</td><td>qNL + tm0/AtHdam</td><td>ConstService</td></tr></table>

# Discretes

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>SVLim</td><td>limSV</td><td>HardLimiter</td><td></td></tr><tr><td>GATELim</td><td>limGATE</td><td>AntiWindup</td><td>Limiter in integrator</td></tr></table>

# Blocks

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Info</td></tr><tr><td>SV</td><td>SV</td><td>GainLimiter</td><td>servo gain and limiters</td></tr><tr><td>GATE</td><td>GATE</td><td>IntegratorAntiWindup</td><td>Gate position</td></tr><tr><td>WO</td><td>WO</td><td>Washout</td><td>Washout feedback with T_r</td></tr><tr><td>LAG</td><td>LAG</td><td>Lag</td><td>lag block with T_p, outputs velocity</td></tr><tr><td>q</td><td>q</td><td>Integrator</td><td>turbine flow (q)</td></tr></table>

Config Fields in [HYGOV4] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 5.36 Undefined

The undefined group. Holds models with no group. 

Common Parameters: u, name 

# 5.37 VoltComp

Voltage compensator group for synchronous generators. 

Common Parameters: u, name, rc, xc 

Common Variables: vcomp 

Available models: IEEEVC 

# 5.37.1 IEEEVC

Voltage compensator IEEEVC model. 

Reference: 

[1] PowerWorld, Voltage Compensator, IEEEVC, [Online], 

[2] NEPLAN, Exciters Models, [Online], 

Available: 

https://www.powerworld.com/WebHelp/Content/TransientModels_HTML/Voltage%20Compensator% 20IEEEVC.htm?TocPath=%7C%7C%7CIEEEVC%7C 0 

https://www.neplan.ch/wp-content/uploads/2015/08/Nep_EXCITERS1.pdf 

# Parameters

<table><tr><td>Name</td><td>Symbol</td><td>Description</td><td>Default</td><td>Unit</td><td>Properties</td></tr><tr><td>idx</td><td></td><td>unique device idx</td><td></td><td></td><td></td></tr><tr><td>u</td><td>u</td><td>connection status</td><td>1</td><td>bool</td><td></td></tr><tr><td>name</td><td></td><td>device name</td><td></td><td></td><td></td></tr><tr><td>avr</td><td></td><td>Exciter idx</td><td></td><td></td><td>mandatory</td></tr><tr><td>rc</td><td>rc</td><td>Active compensation degree.</td><td>0</td><td></td><td>z</td></tr><tr><td>xc</td><td>xc</td><td>Reactive compensation degree.</td><td>0</td><td></td><td>z</td></tr><tr><td>syn</td><td></td><td>Retrieved generator idx</td><td>0</td><td></td><td></td></tr></table>

# Variables

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Description</td><td>Unit</td><td>Properties</td></tr><tr><td>vcomp</td><td>vcomp</td><td>Algeb</td><td>Compensator output voltage to exciter</td><td>V_str</td><td></td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>Retrieved bus terminal voltage</td><td></td><td></td></tr><tr><td>vd</td><td>vd</td><td>ExtAlgeb</td><td>d-axis machine voltage</td><td></td><td></td></tr><tr><td>vq</td><td>vq</td><td>ExtAlgeb</td><td>q-axis machine voltage</td><td></td><td></td></tr><tr><td>Id</td><td>Id</td><td>ExtAlgeb</td><td>d-axis machine current</td><td></td><td></td></tr><tr><td>Iq</td><td>Iq</td><td>ExtAlgeb</td><td>q-axis machine current</td><td></td><td></td></tr><tr><td>Eterm</td><td>Eterm</td><td>ExtAlgeb</td><td></td><td>V_str</td><td></td></tr></table>

# Initialization Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>Initial Value</td></tr><tr><td>vcomp</td><td>vcomp</td><td>Algeb</td><td>-uv + vct</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td></td></tr><tr><td>vd</td><td>vd</td><td>ExtAlgeb</td><td></td></tr><tr><td>vq</td><td>vq</td><td>ExtAlgeb</td><td></td></tr><tr><td>Id</td><td>Id</td><td>ExtAlgeb</td><td></td></tr><tr><td>Iq</td><td>Iq</td><td>ExtAlgeb</td><td></td></tr><tr><td>Eterm</td><td>Eterm</td><td>ExtAlgeb</td><td>vcomp</td></tr></table>

# Algebraic Equations

<table><tr><td>Name</td><td>Symbol</td><td>Type</td><td>RHS of Equation &quot;0 = g(x, y)&quot;</td></tr><tr><td>vcomp</td><td>vcomp</td><td>Algeb</td><td>-uv - vcomp + vct</td></tr><tr><td>v</td><td>v</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>vd</td><td>vd</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>vq</td><td>vq</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>Id</td><td>Id</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>Iq</td><td>Iq</td><td>ExtAlgeb</td><td>0</td></tr><tr><td>Eterm</td><td>Eterm</td><td>ExtAlgeb</td><td>vcomp</td></tr></table>

# Services

<table><tr><td colspan="2">Name Symbol</td><td>Equation</td><td>Type</td></tr><tr><td>vct</td><td>VCT</td><td>u√Id2rc2 + Id2xc2 + 2Idrcvd + 2Idvqxc + Iq2rc2 + Iq2xc2 + 2Iqrcvq - VarSer-vice</td><td>+ vd2 + vq2</td></tr></table>

Config Fields in [IEEEVC] 

<table><tr><td>Option</td><td>Symbol</td><td>Value</td><td>Info</td><td>Accepted values</td></tr><tr><td>allow_adjust</td><td>1</td><td>allow adjusting upper or lower limits</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_lower</td><td>0</td><td>adjust lower limit</td><td>(0, 1)</td><td></td></tr><tr><td>adjust_upper</td><td>1</td><td>adjust upper limit</td><td>(0, 1)</td><td></td></tr></table>

# 6.1 System

<table><tr><td>andes.system</td><td>System class for power system data and methods.</td></tr><tr><td>andes.variables</td><td>Variable package with classes for numerical DAE.</td></tr></table>

# 6.1.1 andes.system

System class for power system data and methods. 

# Functions

<table><tr><td>example([setup, no_output])</td><td>Return an andes.system.System object for the ieee14_lintrip.xlsx as an example.</td></tr><tr><td>fix_view_arrays(system)</td><td>Point NumPy arrays without OWDATA (termed &quot;view arrays&quot; here) to the source array.</td></tr><tr><td>import_pycode([[user_pycode_path])</td><td>Helper function to import generated pycode in the following priority:</td></tr><tr><td>load_config_rc([\conf_path])</td><td>Load config from an rc-formatted file.</td></tr><tr><td>reload_submodules Windsmodule_name)</td><td>Helper function for reloading an existing module and its submodules.</td></tr></table>

# example

```txt
andes.system.example (setup=True, no_output=True, **kwargs)  
Return an andes.system.System object for the ieee14_lintrip.x1sx as an example.  
This function is useful when a user wants to quickly get a System object for testing. 
```

Returns 

# System

An example andes.system.System object. 

# fix_view_arrays

```txt
andes.system.fix_view_arrays (system) 
```

Point NumPy arrays without OWNDATA (termed "view arrays" here) to the source array. 

This function properly sets v and $\ominus$ arrays of internal variables as views of the corresponding DAE arrays. 

Inputs will be refreshed for each model. 

# Parameters

# system

[andes.system.System] System object to be fixed 

# import_pycode

```python
andes.system import_python (user_python_path=None) 
```

Helper function to import generated pycode in the following priority: 

1. a user-provided path from CLI. Currently, this is only for specifying the path to store the generated pycode via andes prepare. 

2. ~/.andes/pycode. This is where pycode is stored by default. 

3. <andes_package_root>/pycode. One can store pycode in the ANDES package folder and ship a full package, which does not require code generation. 

# load_config_rc

```python
andes.system.load_config_rc conf_path=None) 
```

Load config from an rc-formatted file. 

# Parameters

# conf_path

[None or str] Path to the config file. If is None, the function body will not run. 

# Returns

configparse.ConfigParser 

# reload_submodules

andes.system.reload_submodules(module_name) 

Helper function for reloading an existing module and its submodules. 

It is used to reload the pycode module after regenerating code. 

# Classes

<table><tr><td>ExistingModels()</td><td>Storage class for existing models</td></tr><tr><td>System([case, name, config, config_path, ...])</td><td>System contains models and routines for modeling and simulation.</td></tr></table>

# andes.system.ExistingModels

class andes.system.ExistingModels 

Storage class for existing models 

__init__() 

# Methods

# andes.system.System

```python
class andes.system.System(case: str | None = None, name: str | None = None, config: Dict | None = None, config_path: str | None = None, default_config: bool | None = False, options: Dict | None = None, no_undill: bool | None = False, autogen_stale: bool | None = True, **kwargs) 
```

System contains models and routines for modeling and simulation. 

System contains a several special OrderedDict member attributes for housekeeping. These attributes include models, groups, routines and calls for loaded models, groups, analysis routines, and generated numerical function calls, respectively. 

# Parameters

```txt
no_undill [bool, optional, default=False] True to disable the call to System.undill() at the end of object creation. False by default. 
```

```txt
autogen_stale [bool, optional, default=True] True to automatically generate code for stale models. 
```

# 6.1. System

# Attributes

dae 

[andes.variables.dae.DAE] Numerical DAE storage 

files 

[andes.variables.fileman.FileMan] File path storage 

config 

[andes.core.Config] System config storage 

models 

[OrderedDict] model name and instance pairs 

groups 

[OrderedDict] group name and instance pairs 

routines 

[OrderedDict] routine name and instance pairs 

# Notes

System stores model and routine instances as attributes. Model and routine attribute names are the same as their class names. For example, Bus is stored at system.Bus, the power flow calculation routine is at system.PFlow, and the numerical DAE instance is at system.dae. See attributes for the list of attributes. 

_init__(case: str | None $=$ None, name: str | None $=$ None, config: Dict | None = None, config_path: str | None $=$ None, default_config: bool | None $=$ False, options: Dict | None $=$ None, no_undill: bool | None $=$ False, autogen_stale: bool | None = True, **kwargs) 

# Methods

<table><tr><td>add(model, param_dict))</td><td>Add a device instance for an existing model.</td></tr><tr><td>as_dict([vin, skip_empty])</td><td>Return system data as a dict where the keys are model names and values areDicts.</td></tr><tr><td>calc_pu_coeff()</td><td>Perform per unit value conversion.</td></tr><tr><td>call_models(method, models, *args, **kwargs)</td><td>Call methods on the given models.</td></tr><tr><td>collect_config()</td><td>Collect config data from models.</td></tr><tr><td>collect_ref()</td><td>Collect indices into BackRef for all models.</td></tr><tr><td>connectivity([[info]])</td><td>Perform connectivity check for system.</td></tr><tr><td>e_clear/models)</td><td>Clear equation arrays in DAE and model vari-ables.</td></tr><tr><td>f_update/models)</td><td>Call the differential equation update method for models in sequence.</td></tr><tr><td>fg_to_dae()</td><td>Collect equation values into the DAE arrays.</td></tr></table>

continues on next page 


Table 1 – continued from previous page


<table><tr><td>find/devices()</td><td>Add dependent devices for all model based on DeviceFinder.</td></tr><tr><td>find_modelsflag, skip_zero)</td><td>Find models with at least one of the flags as True.</td></tr><tr><td>from_ipysheet(model, sheet[, vin])</td><td>Set an ipysheet object back to model.</td></tr><tr><td>g_islands()</td><td>Reset algebraic mismatches for islanded buses.</td></tr><tr><td>g_update/models)</td><td>Call the algebraic equation update method for models in sequence.</td></tr><tr><td>get_z/models)</td><td>Get all discrete status flags in a numpy array.</td></tr><tr><td>import_groups()</td><td>Import all groups classes defined in models/group.py.</td></tr><tr><td>import_models()</td><td>Import and instantiate models as System member attributes.</td></tr><tr><td>import_routines()</td><td>Import routines as defined in routines/_init_.py.</td></tr><tr><td>init/models, routine)</td><td>Initialize the variables for each of the specified models.</td></tr><tr><td>j_islands()</td><td>Set gy diagonals to eps for a and v variables of islanded buses.</td></tr><tr><td>j_update/models[info])</td><td>Call the Jacobian update method for models in sequence.</td></tr><tr><td>l_update EQ(model[init, niter])</td><td>Update equation-dependent limiter discrete components by calling l_checkEQof models.</td></tr><tr><td>l_update_var(model[init, err])</td><td>Update variable-based limiter discrete states by calling l_update_var of models.</td></tr><tr><td>link_ext-param([model])</td><td>Retrieve values for ExtParam for the given models.</td></tr><tr><td>precompile([models, nomp, ncpu])</td><td>Trigger precompilation for the given models.</td></tr><tr><td>prepare([quick, incremental, models, nomp, ncpu])</td><td>Generate numerical functions from symbolically defined models.</td></tr><tr><td>reload(case, **kwargs)</td><td>Reload a new case in the same System object.</td></tr><tr><td>remove_pycapsule()</td><td>Remove PyCapsule objects in solvers.</td></tr><tr><td>reset([force])</td><td>Reset to the state after reading data and setup (before power flow).</td></tr><tr><td>s_update_post/models)</td><td>Update variable services by calling s_update_post of models.</td></tr><tr><td>s_update_var(model)</td><td>Update variable services by calling s_update_var of models.</td></tr><tr><td>save_config([[file_path, overwrite]])</td><td>Save all system, model, and routine configurations to an rc-formatted file.</td></tr><tr><td>set_address/models)</td><td>Set addresses for differential and algebraic variables.</td></tr><tr><td>set_config([[config]])</td><td>Set configuration for the System object.</td></tr><tr><td>set_dae_names:model)</td><td>Set variable names for differential and algebraic variables, right-hand side of external equations, and discrete flags.</td></tr></table>

continues on next page 


Table 1 – continued from previous page


<table><tr><td>set_output_subidx/models)</td><td>Process andes.models.misc.Output data and store the sub-indices into dae.xy.</td></tr><tr><td>set_var_arrays/models[, inplace, alloc])</td><td>Set arrays (v and e) for internal variables to access dae arrays in place.</td></tr><tr><td>setup()</td><td>Set up system for studies.</td></tr><tr><td>store_adder setter/models)</td><td>Store non-inplace adders and setters for variables and equations.</td></tr><tr><td>store Existing()</td><td>Store existing models in Systemexisting.</td></tr><tr><td>store_no_check_initafenodels)</td><td>Store differential variables with check_init == False.</td></tr><tr><td>store_sparse_patternafenodels)</td><td>Collect and store the sparsity pattern of Jacobian matrices.</td></tr><tr><td>store_SWITCH(times)[, eps])</td><td>Store event switching time in a sorted Numpy array in System.switch_times and an OrderedDict System.switch_dict.</td></tr><tr><td>summary()</td><td>Print out system summary.</td></tr><tr><td>supported_models([export])</td><td>Return the support group names and model names in a table.</td></tr><tr><td>switch_action/models)</td><td>Invoke the actions associated with switch times.</td></tr><tr><td>to_ipysheet(model[, vin])</td><td>Return an ipysheet object for editing in Jupyter Notebook.</td></tr><tr><td>undill([autogen_stale])</td><td>Reload generated function functions, from either the $HOME/.andes/unicode folder.</td></tr><tr><td>vars_to_dae(model)</td><td>Copy variables values from models to System.dae.</td></tr><tr><td>vars_to_models()</td><td>Copy variable values from System.dae to models.</td></tr></table>

# System.add

System.add(model, param_dict $\mathop { \bf { \bar { \Sigma } } } =$ None, **kwargs) 

Add a device instance for an existing model. 

This methods calls the add method of model and registers the device idx to group. 

# System.as_dict

System.as_dict(vin=False, skip_empty=True) 

Return system data as a dict where the keys are model names and values are dicts. Each dict has parameter names as keys and corresponding data in an array as values. 

Returns 

OrderedDict 

# System.calc_pu_coeff

System.calc_pu_coeff() 

Perform per unit value conversion. 

This function calculates the per unit conversion factors, stores input parameters to vin, and perform the conversion. 

# System.call_models

System.call_models(method: str, models: OrderedDict, *args, **kwargs) 

Call methods on the given models. 

# Parameters

method 

[str] Name of the model method to be called 

models 

[OrderedDict, list, str] Models on which the method will be called 

args 

Positional arguments to be passed to the model method 

kwargs 

Keyword arguments to be passed to the model method 

# Returns

The return value of the models in an OrderedDict 

# System.collect_config

System.collect_config() 

Collect config data from models. 

# Returns

dict 

a dict containing the config from devices; class names are keys and configs in a dict are values. 

# System.collect_ref

System.collect_ref() Collect indices into BackRef for all models. 

# System.connectivity

System.connectivity(info=True) Perform connectivity check for system. Parameters info [bool] True to log connectivity summary. 

# System.e_clear

System.e_clear(models: OrderedDict) Clear equation arrays in DAE and model variables. This step must be called before calling f_update or g_update to flush existing values. 

# System.f_update

System.f_update(models: OrderedDict) Call the differential equation update method for models in sequence. 

# Notes

Updated equation values remain in models and have not been collected into DAE at the end of this step. 

# System.fg_to_dae

System.fg_to_dae() Collect equation values into the DAE arrays. 

Additionally, the function resets the differential equations associated with variables pegged by antiwindup limiters. 

# System.find_devices

System.find_devices() 

Add dependent devices for all model based on DeviceFinder. 

# System.find_models

System.find_models(flag: str | Tuple | None, skip_zero: bool = True) 

Find models with at least one of the flags as True. 

# Parameters

flag 

[list, str] Flags to find 

skip_zero 

[bool] Skip models with zero devices 

# Returns

OrderedDict 

model name : model instance 

Warning: Checking the number of devices has been centralized into this function. models passed to most System calls must be retrieved from here. 

# System.from_ipysheet

System.from_ipysheet(model: str, sheet, vin: bool = False) 

Set an ipysheet object back to model. 

# System.g_islands

System.g_islands() 

Reset algebraic mismatches for islanded buses. 

# System.g_update

System.g_update(models: OrderedDict) 

Call the algebraic equation update method for models in sequence. 

# Notes

Like f_update, updated values have not collected into DAE at the end of the step. 

# System.get_z

System.get_z(models: OrderedDict) 

Get all discrete status flags in a numpy array. Values are written to dae.z in place. 

# Returns

numpy.array 

# System.import_groups

System.import_groups() 

Import all groups classes defined in models/group.py. 

Groups will be stored as instances with the name as class names. All groups will be stored to dictionary System.groups. 

# System.import_models

System.import_models() 

Import and instantiate models as System member attributes. 

Models defined in models/__init__.py will be instantiated sequentially as attributes with the same name as the class name. In addition, all models will be stored in dictionary System. models with model names as keys and the corresponding instances as values. 

# Examples

system.Bus stores the Bus object, and system.GENCLS stores the classical generator object, 

system.models['Bus'] points the same instance as system.Bus. 

# System.import_routines

System.import_routines() 

Import routines as defined in routines/__init__.py. 

Routines will be stored as instances with the name as class names. All routines will be stored to dictionary System.routines. 

# Examples

System.PFlow is the power flow routine instance, and System.TDS and System.EIG are time-domain analysis and eigenvalue analysis routines, respectively. 

# System.init

System.init(models: OrderedDict, routine: str) 

Initialize the variables for each of the specified models. 

For each model, the initialization procedure is: 

• Get values for all ExtService. 

• Call the model init() method, which initializes internal variables. 

• Copy variables to DAE and then back to the model. 

# System.j_islands

System.j_islands() 

Set gy diagonals to eps for $a$ and $\nu$ variables of islanded buses. 

# System.j_update

System.j_update(models: OrderedDict, info=None) 

Call the Jacobian update method for models in sequence. 

The procedure is - Restore the sparsity pattern with andes.variables.dae.DAE. restore_sparse() - For each sparse matrix in (fx, fy, gx, gy), evaluate the Jacobian function calls and add values. 

# Notes

Updated Jacobians are immediately reflected in the DAE sparse matrices (fx, fy, gx, gy). 

# System.l_update_eq

System.l_update_eq(models: OrderedDict, init=False, niter ${ = } O$ ) 

Update equation-dependent limiter discrete components by calling l_check_eq of models. Force set equations after evaluating equations. 

This function is must be called after differential equation updates. 

# System.l_update_var

System.l_update_var(models: OrderedDict, niter ${ } = { } O$ , err=None) 

Update variable-based limiter discrete states by calling l_update_var of models. 

This function is must be called before any equation evaluation. 

# System.link_ext_param

System.link_ext_param(model=None) 

Retrieve values for ExtParam for the given models. 

# System.precompile

System.precompile(models: OrderedDict | None $=$ None, nomp: bool = False, ncpu: int = 1) 

Trigger precompilation for the given models. 

Arguments are the same as prepare. 

# System.prepare

System.prepare(quick $\mathbf { \equiv }$ False, incremental=False, models $: = .$ None, nomp=False, ncpu=1) 

Generate numerical functions from symbolically defined models. 

All procedures in this function must be independent of test case. 

# Parameters

quick 

[bool, optional] True to skip pretty-print generation to reduce code generation time. 

# incremental

[bool, optional] True to generate only for modified models, incrementally. 

# models

[list, OrderedDict, None] List or OrderedList of models to prepare 

# nomp

[bool] True to disable multiprocessing 

Warning: Generated lambda functions will be serialized to file, but pretty prints (SymPy objects) can only exist in the System instance on which prepare is called. 

# Notes

Option incremental compares the md5 checksum of all var and service strings, and only regenerate for updated models. 

# Examples

If one needs to print out LaTeX-formatted equations in a Jupyter Notebook, one need to generate such equations with 

# import andes

sys = andes.prepare() 

Alternatively, one can explicitly create a System and generate the code 

# import andes

sys $=$ andes.System() 

sys.prepare() 

# System.reload

System.reload(case, **kwargs) 

Reload a new case in the same System object. 

# System.remove_pycapsule

System.remove_pycapsule() 

Remove PyCapsule objects in solvers. 

# System.reset

System.reset(force=False) 

Reset to the state after reading data and setup (before power flow). 

Warning: If TDS is initialized, reset will lead to unpredictable state. 

# System.s_update_post

System.s_update_post(models: OrderedDict) 

Update variable services by calling s_update_post of models. 

This function is called at the end of System.init(). 

# System.s_update_var

System.s_update_var(models: OrderedDict) 

Update variable services by calling s_update_var of models. 

This function is must be called before any equation evaluation after limiter update function l_update_var. 

# System.save_config

System.save_config(file_path $\equiv$ None, overwrite=False) 

Save all system, model, and routine configurations to an rc-formatted file. 

# Parameters

file_path 

[str, optional] path to the configuration file default to ~/andes/andes.rc. 

overwrite 

[bool, optional] If file exists, True to overwrite without confirmation. Otherwise prompt for confirmation. 

Warning: Saved config is loaded back and populated at system instance creation time. Configs from the config file takes precedence over default config values. 

# System.set_address

System.set_address(models) 

Set addresses for differential and algebraic variables. 

# System.set_config

System.set_config(config=None) 

Set configuration for the System object. 

Config for models are routines are passed directly to their constructors. 

# System.set_dae_names

System.set_dae_names(models) 

Set variable names for differential and algebraic variables, right-hand side of external equations, and discrete flags. 

# System.set_output_subidx

System.set_output_subidx(models) 

Process andes.models.misc.Output data and store the sub-indices into dae.xy. 

# Parameters

models 

[OrderedDict] Models currently in use for the routine 

# System.set_var_arrays

System.set_var_arrays(models, inplace $=$ True, alloc=True) 

Set arrays (v and e) for internal variables to access dae arrays in place. 

This function needs to be called after de-serializing a System object, where the internal variables are incorrectly assigned new memory. 

# Parameters

models 

[OrderedDict, list, Model, optional] Models to execute. 

inplace 

[bool] True to retrieve arrays that share memory with dae 

alloc 

[bool] True to allocate for arrays internally 

# System.setup

System.setup() 

Set up system for studies. 

This function is to be called after adding all device data. 

# System.store_adder_setter

System.store_adder_setter(models) 

Store non-inplace adders and setters for variables and equations. 

# System.store_existing

System.store_existing() 

Store existing models in System.existing. 

TODO: Models with TimerParam will need to be stored anyway. This will allow adding switches on the fly. 

# System.store_no_check_init

System.store_no_check_init(models) 

Store differential variables with check_init $= =$ False. 

# System.store_sparse_pattern

System.store_sparse_pattern(models: OrderedDict) 

Collect and store the sparsity pattern of Jacobian matrices. 

This is a runtime function specific to cases. 

# Notes

For gy matrix, always make sure the diagonal is reserved. It is a safeguard if the modeling user omitted the diagonal term in the equations. 

# System.store_switch_times

System.store_switch_times(models, eps=0.0001) 

Store event switching time in a sorted Numpy array in System.switch_times and an OrderedDict System.switch_dict. 

System.switch_dict has keys as event times and values as the OrderedDict of model names and instances associated with the event. 

# Parameters

models 

[OrderedDict] model name : model instance 

eps 

[float] The small time step size to use immediately before and after the event 

# Returns

array-like 

self.switch_times 

# System.summary

System.summary() 

Print out system summary. 

# System.supported_models

System.supported_models(export='plain') 

Return the support group names and model names in a table. 

# Returns

str 

A table-formatted string for the groups and models 

# System.switch_action

System.switch_action(models: OrderedDict) 

Invoke the actions associated with switch times. 

This function will not be called if flat $=$ True is passed to system. 

# System.to_ipysheet

System.to_ipysheet(model: str, vin: bool = False) Return an ipysheet object for editing in Jupyter Notebook. 

# System.undill

System.undill(autogen_stale=True) Reload generated function functions, from either the $HOME/.andes/pycode folder. If no change is made to models, future calls to prepare() can be replaced with undill() for acceleration. Parameters autogen_stale: bool True to automatically call code generation if stale code is detected. Regardless of this option, codegen is trigger if importing existing code fails. 

# System.vars_to_dae

System.vars_to_dae(model) Copy variables values from models to System.dae. This function clears $D A E . x$ and $D A E . y$ and collects values from models. 

# System.vars_to_models

System.vars_to_models() Copy variable values from System.dae to models. 

# 6.1.2 andes.variables

Variable package with classes for numerical DAE. 

# Modules

```txt
andes.variables.dae  
andes.variables.fileman  
andes.variables.report 
```

# andes.variables.dae

# Classes

<table><tr><td>DAE(system)</td><td>Class for storing numerical values of the DAE system, including variables, equations and first order derivatives (Jacobian matrices).</td></tr><tr><td>DAETIMESeries([dae])</td><td>DAE time series data.</td></tr></table>

# andes.variables.dae.DAE

class andes.variables.dae.DAE(system) 

Class for storing numerical values of the DAE system, including variables, equations and first order derivatives (Jacobian matrices). 

Variable values and equation values are stored as numpy.ndarray, while Jacobians are stored as kvxopt.spmatrix. The defined arrays and descriptions are as follows: 

<table><tr><td>DAE Array</td><td>Description</td></tr><tr><td>x</td><td>Array for state variable values</td></tr><tr><td>y</td><td>Array for algebraic variable values</td></tr><tr><td>z</td><td>Array for 0/1 limiter states (if enabled)</td></tr><tr><td>f</td><td>Array for differential equation derivatives</td></tr><tr><td>Tf</td><td>Left-hand side time constant array for f</td></tr><tr><td>g</td><td>Array for algebraic equation mismatches</td></tr></table>

The defined scalar member attributes to store array sizes are 

<table><tr><td>Scalar</td><td>Description</td></tr><tr><td>m</td><td>The number of algebraic variables/equations</td></tr><tr><td>n</td><td>The number of state variables/equations</td></tr><tr><td>o</td><td>The number of limiter state flags</td></tr></table>

The derivatives of $f$ and $g$ with respect to $x$ and $y$ are stored in four kvxopt.spmatrix sparse matrices: fx, fy, gx, and gy, where the first letter is the equation name, and the second letter is the variable name. 

# Notes

DAE in ANDES is defined in the form of 

$$
T \dot {x} = f (x, y)
$$

$$
0 = g (x, y)
$$

DAE does not keep track of the association of variable and address. Only a variable instance keeps track of its addresses. 

__init__(system) 

# Methods

<table><tr><td>alloc_or Extend_names()</td><td>Allocate empty lists for names for the given size.</td></tr><tr><td>build_pattern(name)</td><td>Build sparse matrices with stored patterns.</td></tr><tr><td>clear_arrays()</td><td>Reset equation and variable arrays to empty.</td></tr><tr><td>clear_fg()</td><td>Reset equation arrays to empty.</td></tr><tr><td>clear_ijv()</td><td>Clear stored triplets.</td></tr><tr><td>clear(ts)</td><td>Drop the TimeSeries data and create a new one.</td></tr><tr><td>clear_xy()</td><td>Reset variable arrays to empty.</td></tr><tr><td>clear_z()</td><td>Reset status arrays to empty</td></tr><tr><td>get_name(arr)</td><td>Helper function for getting the list of variable names based on the array name.</td></tr><tr><td>get_size(name)</td><td>Get the size of an array or sparse matrix based on name.</td></tr><tr><td>print_array(name[, values, tol])</td><td>Debug helper to print array values and names.</td></tr><tr><td>request_address(array_name, ndevicenvar[,...])</td><td>Interface for requesting addresses for a model.</td></tr><tr><td>reset()</td><td>Reset array sizes to zero and clear all arrays.</td></tr><tr><td>resize_arrays()</td><td>Resize arrays to the new sizes m and n, and o.</td></tr><tr><td>restoreSparse([names])</td><td>Restore all sparse matrices to the sparsity pattern filled with zeros (for variable Jacobian elements) and non-zero constants.</td></tr><tr><td>set_t(t)</td><td>Helper function for setting time in-place.</td></tr><tr><td>store()</td><td>Store values for the current time step to the Time-Series storage.</td></tr><tr><td>storeSparse_ijv(name, row, col, val)</td><td>Store the sparse pattern triplets.</td></tr><tr><td>write_lst(lst_path)</td><td>Dump the variable name lst file.</td></tr><tr><td>write_npy(file_path)</td><td>Write TDS data into NumPy uncompressed format.</td></tr><tr><td>write_npz(file_path)</td><td>Write TDS data into NumPy compressed format.</td></tr></table>

# DAE.alloc_or_extend_names

DAE.alloc_or_extend_names() 

Allocate empty lists for names for the given size. 

# DAE.build_pattern

DAE.build_pattern(name) 

Build sparse matrices with stored patterns. 

Call to store_row_col_idx should be made before this function. 

# Parameters

name 

[name] jac name 

# DAE.clear_arrays

DAE.clear_arrays() 

Reset equation and variable arrays to empty. 

# DAE.clear_fg

DAE.clear_fg() 

Resets equation arrays to empty. 

# DAE.clear_ijv

DAE.clear_ijv() 

Clear stored triplets. 

# DAE.clear_ts

DAE.clear_ts() 

Drop the TimeSeries data and create a new one. 

# DAE.clear_xy

DAE.clear_xy() Reset variable arrays to empty. 

# DAE.clear_z

DAE.clear_z() Reset status arrays to empty 

# DAE.get_name

DAE.get_name(arr) Helper function for geting the list of variable names based on the array name. 

# Parameters

rr [str] Array name in 'f', 'g', 'x', 'y', 'z'. 

# DAE.get_size

DAE.get_size(name) Get the size of an array or sparse matrix based on name. 

# Parameters

ame [str (f, g, fx, gy, etc.)] array/sparse name 

# Returns

ple sizes of each element in a tuple 

# DAE.print_array

DAE.print_array(name, values=None, tol=None) Debug helper to print array values and names. 

# Parameters

name [str] array name in 'f', 'g', 'x', 'y' values [array-like, optional] substitute a 

tol [float, optional] tolerance value to use. Values below tol will not be displayed 

# DAE.request_address

DAE.request_address(array_name: str, ndevice, nvar, collate=False) Interface for requesting addresses for a model. 

# Parameters

array_name [str] array name in 'x' and 'y' 

ndevice [int] number of devices 

nvar [int] number of variables 

# collate

[bool, optional] False if the same variable for different devices are contiguous. True if variables for the same devices should collate. Note: setting collate to True will degrade the performance. 

# Returns

list A list of arrays for each variable. 

# DAE.reset

DAE.reset() Reset array sizes to zero and clear all arrays. 

# DAE.resize_arrays

DAE.resize_arrays() Resize arrays to the new sizes m and $n$ , and $o$ . 

If m > len(self.y) or $\mathrm { ~ n ~ } > \mathrm { ~ 1 e n }$ (self.x, arrays will be extended. Otherwise, new empty arrays will be sliced, starting from 0 to the given size. 

Warning: This function should not be called directly. Instead, it is called in System. set_address which re-points variables used in power flow to the new array for dynamic analyses. 

# DAE.restore_sparse

DAE.restore_sparse(names=None) 

Restore all sparse matrices to the sparsity pattern filled with zeros (for variable Jacobian elements) and non-zero constants. 

# Parameters

# names

[None or list] List of Jacobian names to restore sparsity pattern 

# DAE.set_t

DAE.set_t(t) 

Helper function for setting time in-place. 

# DAE.store

DAE.store() 

Store values for the current time step to the TimeSeries storage. Values include variables, equation RHS and discrete states. 

# DAE.store_sparse_ijv

DAE.store_sparse_ijv(name, row, col, val) 

Store the sparse pattern triplets. 

This function is to be called by System after building the complete sparsity pattern for each Jacobian matrix. 

# Parameters

name 

[str] sparse Jacobian matrix name 

row 

[np.ndarray] all row indices 

col 

[np.ndarray] all col indices 

val 

[np.ndarray] all values 

# DAE.write_lst

DAE.write_lst(lst_path) Dump the variable name lst file. 

# Parameters

lst_path Path to the lst file. 

# Returns

bool succeed flag 

# DAE.write_npy

DAE.write_npy(file_path) Write TDS data into NumPy uncompressed format. 

# DAE.write_npz

DAE.write_npz(file_path) Write TDS data into NumPy compressed format. The function supports writing out all values at once or writing them out incrementally. 

# Attributes

<table><tr><td>fg</td><td>Return a concatenated array of [f, g].</td></tr><tr><td>x_name_output</td><td>Return a list of state var names selected by Out-put.</td></tr><tr><td>xTEX_name_output</td><td>Return a list of state var LaTeX names selected by Output.</td></tr><tr><td>xy</td><td>Return a concatenated array of [x, y].</td></tr><tr><td>xy_name</td><td>Return a concatenated list of all variable names without format.</td></tr><tr><td>xyTEX_name</td><td>Return a concatenated list of all variable names in LaTeX format.</td></tr><tr><td>xyz</td><td>Return a concatenated array of [x, y].</td></tr><tr><td>xyz_name</td><td>Return a concatenated list of all variable names without format.</td></tr><tr><td>xyzTEX_name</td><td>Return a concatenated list of all variable names in LaTeX format.</td></tr><tr><td>y_name_output</td><td>Return a list of algeb var names selected by Out-put.</td></tr><tr><td>yTEX_name_output</td><td>Return a list of algeb var LaTeX names selected by Output.</td></tr></table>

# DAE.fg

property DAE.fg 

Return a concatenated array of [f, g]. 

# DAE.x_name_output

property DAE.x_name_output 

Return a list of state var names selected by Output. 

# DAE.x_tex_name_output

property DAE.x_tex_name_output 

Return a list of state var LaTeX names selected by Output. 

# DAE.xy

property DAE.xy 

Return a concatenated array of [x, y]. 

# DAE.xy_name

property DAE.xy_name 

Return a concatenated list of all variable names without format. 

# DAE.xy_tex_name

property DAE.xy_tex_name 

Return a concatenated list of all variable names in LaTeX format. 

# DAE.xyz

property DAE.xyz 

Return a concatenated array of [x, y]. 

# DAE.xyz_name

property DAE.xyz_name 

Return a concatenated list of all variable names without format. 

# DAE.xyz_tex_name

property DAE.xyz_tex_name 

Return a concatenated list of all variable names in LaTeX format. 

# DAE.y_name_output

property DAE.y_name_output 

Return a list of algeb var names selected by Output. 

# DAE.y_tex_name_output

property DAE.y_tex_name_output 

Return a list of algeb var LaTeX names selected by Output. 

andes.variables.dae.DAETimeSeries 

class andes.variables.dae.DAETimeSeries(dae=None) 

DAE time series data. 

__init__(dae=None) 

# Methods

<table><tr><td>get_data(base_vars, *, [a, rhs])</td><td>Get time-series data, either for a variable or for the equation associated with the variable.</td></tr><tr><td>reset()</td><td>Reset the internal storage and erase all data.</td></tr><tr><td>unpack([df, attr, warn_empty])</td><td>Unpack dict-stored data into arrays and/or dataframeres.</td></tr><tr><td>unpack_df(attr)</td><td>Construct pandas dataframeres.</td></tr><tr><td>unpack_np(attr[, warn_empty])</td><td>Unpack dict data into numpy arrays.</td></tr></table>

# DAETimeSeries.get_data

DAETimeSeries.get_data(base_vars: BaseVar | List[BaseVar], *, $a =$ None, rhs: bool $=$ False) Get time-series data, either for a variable or for the equation associated with the variable. 

# Parameters

# base_var

[BaseVar or a sequence of BaseVar(s)] The variable types and internal addresses are used for looking up the data. 

a 

[an array/list of int or None] Sub-indices into the address of base_var. Applied to each variable. 

# Returns

# np.ndarray

A two-dimensional array. Each row corresponds to one time step. Each column corresponds to a different different variable. 

# DAETimeSeries.reset

DAETimeSeries.reset() Reset the internal storage and erase all data. 

# DAETimeSeries.unpack

DAETimeSeries.unpack $(df =$ False,attr $=$ None, warn_empty $\equiv$ True) Unpack dict-stored data into arrays and/or dataframes. Parameters df [bool] True to construct DataFrames self.dbf and self.dbz (time-consuming). attr [str, optional] Attribute name to unpack. If None, unpack all. Returns True when done. 

# DAETimeSeries.unpack_df

```txt
DAETimeSeries.unpack_df (attr) Construct pandas dataframes. 
```

# DAETimeSeries.unpack_np

```txt
DAETimeSeries.unpack_np (attr, warn_empty=True) Unpack dict data into numpy arrays. 
```

# Attributes

df 

Short-hand for the xy dataframe. 

# DAETimeSeries.df

property DAETimeSeries.df 

Short-hand for the xy dataframe. 

andes.variables.fileman 

# Functions

add_suffix(fullname, suffix) 

Add suffix to a full file name. 

# add_suffix

andes.variables.fileman.add_suffix(fullname, suffix) 

Add suffix to a full file name. 

# Classes

FileMan([case]) 

Define a File Manager class for System 

# andes.variables.fileman.FileMan

class andes.variables.fileman.FileMan(case $\mathbf { \equiv }$ None, **kwargs) 

Define a File Manager class for System 

__init__(case $\mathbf { \sigma } =$ None, **kwargs) 

Initialize the output file names. For inputs, all absolute paths will be respected. All relative paths are relative to input_path. 

case: must be full path to case 

output: desired name for format conversion output 

input_path: default path for input files that only contains file name. If input_path is not provided, 

it will be derived from the path of case. 

output_path: path for output files. Default to current working directory where andes is invoked. 

# Methods

<table><tr><td>get_fullpath([[name]])</td><td>Return the original full path if full path is speci-
fied, otherwise search in the case file path.</td></tr><tr><td>set([[case]])</td><td>Perform the input and output set up.</td></tr></table>

# FileMan.get_fullpath

FileMan.get_fullpath(fullname=None) 

Return the original full path if full path is specified, otherwise search in the case file path. 

# Parameters

# fullname

[str, optional] Full name of the file. If relative, prepend input_path. Otherwise, leave it as is. 

# FileMan.set

FileMan.set(case=None, **kwargs) 

Perform the input and output set up. 

andes.variables.report 

Functions 

```txt
report_info(system) 
```

report_info 

```javascript
andes.variables.report.report_info(system) 
```

# Classes

Report(system) 

Report class to store system static analysis reports 

# andes.variables.report.Report

class andes.variables.report.Report(system) 

Report class to store system static analysis reports 

__init__(system) 

# Methods

<table><tr><td>update()</td><td>Update values based on the requested content</td></tr><tr><td>write()</td><td>Write report to file.</td></tr></table>

# Report.update

Report.update() 

Update values based on the requested content 

# Report.write

Report.write() 

Write report to file. 

# Attributes

info 

# Report.info

property Report.info 

# 6.2 Routines

andes.routines 

Package for ANDES analysis routines. 

# 6.2.1 andes.routines

Package for ANDES analysis routines. 

# Modules

<table><tr><td>andes.routines.base</td><td>Base class for ANDES calculation routines.</td></tr><tr><td>andes.routines+criteria</td><td>Stability criteria module.</td></tr><tr><td>andes.routines.daeint</td><td>Integration methods for DAE.</td></tr><tr><td>andes.routines.eig</td><td>Module for eigenvalue analysis.</td></tr><tr><td>andes.routines.pflow</td><td>Module for power flow calculation.</td></tr><tr><td>andes.routines.tds</td><td>ANDES module for time-domain simulation.</td></tr></table>

# andes.routines.base

Base class for ANDES calculation routines. 

# Functions

check_conn_before_init(func) 

A decorator that ensures the connection is active before calling the init or run method of a BaseRoutine derived class. 

# check_conn_before_init

andes.routines.base.check_conn_before_init(func) 

A decorator that ensures the connection is active before calling the init or run method of a BaseRoutine derived class. 

This decorator calls the act method on self.system.conn to ensure the connection is active before proceeding with the initialization. 

# Parameters

func 

[function] The init method of a BaseRoutine derived class. 

Returns 

function 

The wrapped function with connection check. 

# Classes

BaseRoutine([system, config]) 

Base routine class. 

# andes.routines.base.BaseRoutine

class andes.routines.base.BaseRoutine(system $\mathbf { \equiv }$ None, config $=$ None) 

Base routine class. 

Provides references to system, config, and solver. 

__init__(system $=$ None, config $\mathbf { \sigma } = \mathbf { \sigma }$ None) 

# Methods

<table><tr><td>doc([max_width, export])</td><td>Routine documentation interface.</td></tr><tr><td>init()</td><td>Routine initialization interface.</td></tr><tr><td>report(**kwargs)</td><td>Report interface.</td></tr><tr><td>run(**kwargs)</td><td>Routine main entry point.</td></tr><tr><td>summary(**kwargs)</td><td>Summary interface</td></tr></table>

# BaseRoutine.doc

BaseRoutine.doc(max_width=78, export $\bf { \sigma } =$ 'plain') 

Routine documentation interface. 

# BaseRoutine.init

BaseRoutine.init() 

Routine initialization interface. 

# BaseRoutine.report

BaseRoutine.report(**kwargs) 

Report interface. 

# BaseRoutine.run

BaseRoutine.run(**kwargs) 

Routine main entry point. 

# BaseRoutine.summary

BaseRoutine.summary(**kwargs) 

Summary interface 

# Attributes

class_name 

# BaseRoutine.class_name

property BaseRoutine.class_name 

andes.routines.criteria 

Stability criteria module. 

# Functions

```txt
deltadelta(delay,diff_limit) 
```

Test if a system is stable by comparing the maximum rotor angle difference with a threshold. 

# deltadelta

andes.routines.criteria.deltadelta(delta, diff_limit) 

Test if a system is stable by comparing the maximum rotor angle difference with a threshold. 

Returns 

bool 

True if the system is stable, False otherwise. 

andes.routines.daeint 

Integration methods for DAE. 

# Classes

BackEuler() 

ImplicitIter() 

Trapezoid() 

Backward Euler's integration method. 

Base class for implicit iterative methods. 

Trapezoidal methods. 

# andes.routines.daeint.BackEuler

class andes.routines.daeint.BackEuler 

Backward Euler's integration method. 

__init__(*args, **kwargs) 

# Methods

<table><tr><td>calc_jac(tds, gxs, gys)</td><td>Build full Jacobian matrix Ac for Trapezoid method.</td></tr><tr><td>calc_q(x, f, Tf, h, x0, f0)</td><td>Calculate the residual of algebraized differential equations.</td></tr><tr><td>step(tds)</td><td>Integrate with Implicit Trapezoidal Method (ITM) to the current time.</td></tr></table>

# BackEuler.calc_jac

static BackEuler.calc_jac(tds, gxs, gys) 

Build full Jacobian matrix Ac for Trapezoid method. 

# BackEuler.calc_q

static BackEuler.calc_q(x, f, Tf, h, x0, f0) 

Calculate the residual of algebraized differential equations. 

# Notes

Numba jit somehow slows down this function for the 14-bus and the $2 \mathrm { k \Omega }$ -bus systems. 

# BackEuler.step

static BackEuler.step(tds) 

Integrate with Implicit Trapezoidal Method (ITM) to the current time. 

This function has an internal Newton-Raphson loop for algebraized semi-explicit DAE. The function returns the convergence status when done but does NOT progress simulation time. 

# Returns

bool 

Convergence status in tds.converged. 

# andes.routines.daeint.ImplicitIter

class andes.routines.daeint.ImplicitIter 

Base class for implicit iterative methods. 

__init__(*args, **kwargs) 

# Methods

```txt
calc_jac(tds, gxs, gys)  
calc_q(x, f, Tf, h, x0, f0)  
step(tds) Integrate with Implicit Trapezoidal Method (ITM) to the current time. 
```

# ImplicitIter.calc_jac

static ImplicitIter.calc_jac(tds, gxs, gys) 

# ImplicitIter.calc_q

static ImplicitIter.calc_q(x, f, Tf, h, x0, f0) 

# ImplicitIter.step

static ImplicitIter.step(tds) 

Integrate with Implicit Trapezoidal Method (ITM) to the current time. 

This function has an internal Newton-Raphson loop for algebraized semi-explicit DAE. The function returns the convergence status when done but does NOT progress simulation time. 

# Returns

bool 

Convergence status in tds.converged. 

# andes.routines.daeint.Trapezoid

class andes.routines.daeint.Trapezoid 

Trapezoidal methods. 

__init__(*args, **kwargs) 

# Methods

<table><tr><td>calc_jac(tds, gxs, gys)</td><td>Build full Jacobian matrix Ac for Trapezoid method.</td></tr><tr><td>calc_q(x, f, Tf, h, x0, f0)</td><td>Calculate the residual of algebraized differential equations.</td></tr><tr><td>step(tds)</td><td>Integrate with Implicit Trapezoidal Method (ITM) to the current time.</td></tr></table>

# Trapezoid.calc_jac

static Trapezoid.calc_jac(tds, gxs, gys) 

Build full Jacobian matrix Ac for Trapezoid method. 

# Trapezoid.calc_q

static Trapezoid.calc_q(x, f, Tf, h, x0, f0) 

Calculate the residual of algebraized differential equations. 

# Notes

Numba jit somehow slows down this function for the 14-bus and the $2 \mathrm { k \Omega }$ -bus systems. 

# Trapezoid.step

static Trapezoid.step(tds) 

Integrate with Implicit Trapezoidal Method (ITM) to the current time. 

This function has an internal Newton-Raphson loop for algebraized semi-explicit DAE. The function returns the convergence status when done but does NOT progress simulation time. 

# Returns

bool 

Convergence status in tds.converged. 

# 6.2. Routines

# andes.routines.eig

Module for eigenvalue analysis. 

# Classes

EIG(system, config) 

Eigenvalue analysis routine 

# andes.routines.eig.EIG

class andes.routines.eig.EIG(system, config) 

Eigenvalue analysis routine 

__init__(system, config) 

# Methods

```txt
calc_As([dense]) Return state matrix and store to self.As.  
calc_eig([As]) Calculate eigenvalues and right eigen vectors.  
calc_pfactor([As]) Compute participation factor of states in eigenvalues.  
doc(max_width, export) Routine documentation interface.  
export_mat() Export state matrix to a <CaseName>_As. mat file with the variable name As, where <CaseName> is the test case name.  
find_zero_states() Find the indices of states associated with zero time constants in x.  
init() Routine initialization interface.  
plot(mu, fig, ax, left, right, ymin, ymax, ...) Plot utility for eigenvalues in the S domain.  
plot_rootlocate(results, eig Indices[, ax, ...]) Plot the root loci.  
post_process() Post processing of eigenvalues.  
report[x_name]) Save eigenvalue analysis reports.  
run(*args, **kwargs) Routine main entry point.  
stats() Return statistics of results in a string.  
summary() Print out a summary to logger.info.  
sweep.params, idxes, values) Parameter sweep for root loci plot. 
```

# EIG.calc_As

EIG.calc_As(dense=True) 

Return state matrix and store to self.As. 

# Returns

kvxopt.matrix state matrix 

# Notes

For systems in the mass-matrix formulation, 

$$
T \dot {x} = f (x, y)
$$

$$
0 = g (x, y)
$$

Assume $T$ is non-singular, the state matrix is calculated from 

$$
A _ {s} = T ^ {- 1} (f _ {x} - f _ {y} * g _ {y} ^ {- 1} * g _ {x})
$$

# EIG.calc_eig

EIG.calc_eig(As=None) 

Calculate eigenvalues and right eigen vectors. 

This function is a wrapper to np.linalg.eig. Results are returned but not stored to EIG. 

# Returns

np.array(dtype=complex) eigenvalues np.array() right eigenvectors 

# EIG.calc_pfactor

EIG.calc_pfactor(As=None) 

Compute participation factor of states in eigenvalues. 

Each row in the participation factor correspond to one state, and each column correspond to one mode. 

# Parameters

As 

[np.array or None] State matrix to process. If None, use self.As. 

# Returns

# 6.2. Routines

```txt
np.arraydtype=complex) eigenvalues 
```

```txt
np.array participation factor matrix 
```

# EIG.doc

```txt
EIG.doc(max_width=78, export='plain') Routine documentation interface. 
```

# EIG.export_mat

```txt
EIG export_mat () Export state matrix to a <CaseName>_As.mat file with the variable name As, where <CaseName> is the test case name. State variable names are stored in variables x_name and xTEX_name. 
```

```txt
Returns bool True if successful 
```

# EIG.find_zero_states

```txt
EIG.find_zero_states() Find the indices of states associated with zero time constants in x. 
```

# EIG.init

```txt
EIG.init() Routine initialization interface. 
```

# EIG.plot

```python
EIG .plot (mu=None, fig=None, ax=None, left=-6, right=0.5, ymin=-8, ymax=8, damping=0.05, line_width=0.5, s=40, dpi=None, figsize=None, base_color='black', show=True, latex=True, style='default') 
```

Plot utility for eigenvalues in the S domain. 

# Parameters

```txt
u [array, optional] an array of complex eigenvalues 
```

fig [figure handl, optional] existing matplotlib figure handle 

ax [axis handle, optional] existing axis handle 

left [int, optional] left tick for the x-axis, by default -6 

right [float, optional] right tick, by default 0.5 

ymin [int, optional] bottom tick, by default -8 

ymax [int, optional] top tick, by default 8 

damping [float, optional] damping value for which the dash plots are drawn 

line_width [float, optional] default line width, by default 0.5 

s [float or array-like, shape (n, ), optional] The marker size in points $* * 2$ 

dpi [int, optional] figure dpi 

figsize [[type], optional] default figure size, by default None 

base_color [str, optional] base color for negative eigenvalues 

show [bool, optional] True to show figure after plot, by default True 

latex [bool, optional] True to use latex, by default True 

Returns figure matplotlib figure object axis matplotlib axis object 

# EIG.plot_root_loci

EIG.plot_root_loci(results, eig_indices, ax=None, dpi $\mathbf { \bar { \rho } } = \mathbf { \rho }$ None, figsize $=$ None, draw_line=False, arrow_threshold=0.2, **kwargs) 

Plot the root loci. 

Markers increase in size for the first parameter through the last. 

# Parameters

# results

[dict] Eigenvalue results from parameter sweeping 

# eig_indices

[Iterable] A list of eigenvalue indices to plot. The indices are 0-based, whereas the indices in the eigenvalue analysis report are 1-based. 

# ax

[matplotlib.axes.Axes or None] Axes to plot on. If None, create a new figure. 

[int or None] DPI of the figure. If None, use the default DPI. 

# figsize

[tuple or None] Figure size. If None, use the default size. 

# draw_line

[bool, optional, False by default] If True, draw lines to connect the roots. Note that due to the non-fixed ordering of eigenvalues, lines will largely connect different modesl 

# arrow_threshold

[float] Threshold for plotting arrows. If the begin and end points of a locus is shorter than this threshold, no arrow is plotted. 

# Returns

# matplotlib.figure.Figure

Figure containing the plot. 

# matplotlib.axes.Axes

Axes of the plot. 

# Examples

To plot the root loci of the first two eigenvalues, do 

```python
fig, ax = ss.EIG.plot_rootlocate(ret, [0, 1]) 
```

where ret is the return of andes.routines.eig.EIG.sweep(). 

# EIG.post_process

EIG.post_process() Post processing of eigenvalues. 

# EIG.report

EIG.report(x_name=None, **kwargs) Save eigenvalue analysis reports. 

# Returns

None 

# EIG.run

EIG.run(*args, **kwargs) Routine main entry point. 

# EIG.stats

EIG.stats() Return statistics of results in a string. 

# EIG.summary

EIG.summary() Print out a summary to logger.info. 

# EIG.sweep

EIG.sweep(params, idxes, values) Parameter sweep for root loci plot. 

# Parameters

# params

[list of NumParam or ConstService] list of parameters indices to sweep. For example, [ss.GENCLS.M] for GENCLS.M. To update ss.GENCLS.M for two generators, params should be set to [ss.GENCLS.M, ss.GENCLS.M]. 

# idxes

[list of int or str] list of indices to sweep. For example, ["GENCLS_1", "GEN-CLS_2"] for the indices of GENCLS whose corresponding parameter will be updated. The length of idxes must match that of params and values. 

# values: list of lists

New values of the parameters. Each element in values is a list for the corresponding element in params and idxes. 

# Returns

# dict

A dictionary of the results where the keys are 0-indexed count of parameter set, and the values are dictionaries. Each value dictionary contains a mu field for the eigenvalues. 

# Examples

To apply 10 parameters evenly spaced between 1 and 10 to ss.GENCLS.M of GENCLS_1, do 

```txt
ret = ss.EIG.sweep(ss.GENCLS.M, "GENCLS_1", np.linspace(1, 2, 10)) 
```

This is equivalent to the following just for convenience. 

```txt
ret = ss.EIG.sweep([ss.GENCLS.M],
	["GENCLS_1"], [np.linspace(1, 2, 10)]]) 
```

# Attributes

```txt
class_name 
```

# EIG.class_name

property EIG.class_name 

# andes.routines.pflow

Module for power flow calculation. 

# Classes

$P F l o w([s y s t e m,c o n f i g])$ 

Power flow calculation routine. 

# andes.routines.pflow.PFlow

class andes.routines.pflow.PFlow(system $=$ None, config $\mathbf { \sigma } = \mathbf { \sigma } _ { - }$ None) 

Power flow calculation routine. 

Power flow analysis currently supports limiting reactive power (needs to to be turned on via config.pv2pq) but does not enforce voltage limits. 

__init__(system $=$ None, config=None) 

# Methods

```txt
doc([max_width, export]) Routine documentation interface.  
fg_update() Evaluate the limiters and residual equations.  
init(*args, **kwargs) Routine initialization interface.  
newton_krylov([verbose]) Full Newton-Krylov method from SciPy.  
nr.solve() Solve the power flow problem using itertive Newton's method.  
nr_step() Solve a single iteration step using the Newton-Raphson method.  
report() Write power flow report to a plain-text file.  
run(**kwargs) Solve the power flow using the selected method.  
summary() Output a summary for the PFlow routine. 
```

# PFlow.doc

PFlow.doc(max_width=78, expor 'plain') 

Routine documentation interface. 

# PFlow.fg_update

PFlow.fg_update() Evaluate the limiters and residual equations. 

# PFlow.init

PFlow.init(*args, **kwargs) Routine initialization interface. 

# PFlow.newton_krylov

PFlow.newton_krylov(verbose=True) Full Newton-Krylov method from SciPy. 

# Parameters

verbose True if verbose. 

# Returns

bool Convergence status 

Warning: The result might be wrong if discrete are in use! 

# PFlow.nr_solve

PFlow.nr_solve() Solve the power flow problem using itertive Newton's method. 

# PFlow.nr_step

PFlow.nr_step() Solve a single iteration step using the Newton-Raphson method. 

# Returns

float maximum absolute mismatch 

# PFlow.report

PFlow.report() Write power flow report to a plain-text file. 

# Returns

bool True if report was written, False otherwise. 

# PFlow.run

PFlow.run(**kwargs) Solve the power flow using the selected method. 

# Returns

bool convergence status 

# PFlow.summary

PFlow.summary() Output a summary for the PFlow routine. 

# Attributes

class_name 

# PFlow.class_name

property PFlow.class_name 

# andes.routines.tds

ANDES module for time-domain simulation. 

# Classes

TDS([system, config]) 

Time-domain simulation routine. 

# andes.routines.tds.TDS

class andes.routines.tds.TDS(system $: =$ None, config=None) 

Time-domain simulation routine. 

Some cases may be sensitive to large convergence tolerance config.tol. If numerical oscillation happens, try reducing config.tol to 1e-6. 

__init__(system $: =$ None, config $\mathbf { \sigma } = \mathbf { \sigma }$ None) 

# Methods

<table><tr><td>calc_h([resume])</td><td>Calculate the time step size during the TDS.</td></tr><tr><td>check criteria()</td><td>Check stability criteria.</td></tr><tr><td>do_SWITCH()</td><td>Checks if is an event time and perform switch if true.</td></tr><tr><td>doc([max_width, export])</td><td>Routine documentation interface.</td></tr><tr><td>fg_update/models[, init])</td><td>Perform one round of evaluation for one iteration step.</td></tr><tr><td>init(*args, **kwargs)</td><td>Routine initialization interface.</td></tr><tr><td>inittresume()</td><td>Initialize a resumed simulation.</td></tr><tr><td>itm_step()</td><td>Integrate for the step size of self.h using implicit trapezoid method.</td></tr><tr><td>load ,(plotter()</td><td>Manually load a plotter into TDS.plotter.</td></tr><tr><td>report(**kwargs)</td><td>Report interface.</td></tr><tr><td>reset()</td><td>Reset internal states to pre-init condition.</td></tr><tr><td>rewind(t)</td><td>TODO: rewind to a past time.</td></tr><tr><td>run([no.summary, from_csv])</td><td>Run time-domain simulation using numerical integration.</td></tr><tr><td>save_output(npz])</td><td>Save the simulation data into two files: a .lst file and a .npz file.</td></tr><tr><td>set_method(name])</td><td>Set DAE solution method.</td></tr><tr><td>streaming_init()</td><td>Send out initialization variables and process init from modules.</td></tr><tr><td>streaming_step()</td><td>Sync, handle and streaming for each integration step.</td></tr><tr><td>summary()</td><td>Print out a summary of TDS options to log-ger.info.</td></tr><tr><td>test_init()</td><td>Test if the TDS initialization is successful.</td></tr></table>

# TDS.calc_h

TDS.calc_h(resume=False) 

Calculate the time step size during the TDS. 

# Parameters

resume 

[bool] If True, calculate the initial step size. 

# Returns

float 

computed time step size stored in self.h 

# Notes

A heuristic function is used for variable time step size 

min(0.50 \* h, hmin), if niter $> = 15$ h = max(1.10 \* h, hmax), if niter $<   = 6$ min(0.95 \* h, hmin), otherwise 

# TDS.check_criteria

TDS.check_criteria() 

Check stability criteria. 

# TDS.do_switch

TDS.do_switch() 

Checks if is an event time and perform switch if true. 

# TDS.doc

TDS.doc(max_width=78, expor $\tan$ 'plain') 

Routine documentation interface. 

# TDS.fg_update

TDS.fg_update(models, init=False) 

Perform one round of evaluation for one iteration step. The following operations are performed in order: 

• variable service updating through s_update_var 

• discrete flags updating through l_update_var 

• evaluation of the right-hand-side of f 

• equation-dependent discrete flags updating through l_update_eq 

• evaluation of the right-hand-side of g 

• collection of residuals into dae through fg_to_dae. 

# TDS.init

TDS.init(*args, **kwargs) 

Routine initialization interface. 

# TDS.init_resume

TDS.init_resume() 

Initialize a resumed simulation. 

# TDS.itm_step

TDS.itm_step() 

Integrate for the step size of self.h using implicit trapezoid method. 

Returns 

bool 

Convergence status in self.converged. 

# TDS.load_plotter

TDS.load_plotter() 

Manually load a plotter into TDS.plotter. 

# TDS.report

TDS.report(**kwargs) 

Report interface. 

# TDS.reset

TDS.reset() 

Reset internal states to pre-init condition. 

# TDS.rewind

TDS.rewind(t) 

TODO: rewind to a past time. 

# TDS.run

TDS.run(no_summary=False, from_csv=None, **kwargs) 

Run time-domain simulation using numerical integration. 

The default method is the Implicit Trapezoidal Method (ITM). 

# TDS.save_output

TDS.save_output $( n p z { = } T r u e )$ 

Save the simulation data into two files: a .lst file and a .npz file. 

This function saves the output regardless of the files.no_output flag. 

# Parameters

npz 

[bool] True to save in npz format; False to save in npy format. 

# Returns

bool 

True if files are written. False otherwise. 

# TDS.set_method

TDS.set_method(name: str $=$ 'trapezoid') 

Set DAE solution method. 

# Parameters

name 

[str, optional, default: 'trapezoid'] DAE solver name 

# TDS.streaming_init

TDS.streaming_init() 

Send out initialization variables and process init from modules. 

Returns 

None 

# TDS.streaming_step

TDS.streaming_step() 

Sync, handle and streaming for each integration step. 

Returns 

None 

# TDS.summary

TDS.summary() 

Print out a summary of TDS options to logger.info. 

Returns 

None 

# TDS.test_init

TDS.test_init() 

Test if the TDS initialization is successful. 

This function update dae.f and dae.g and checks if the residuals are zeros. 

# Attributes

```txt
class_name 
```

TDS.class_name 

property TDS.class_name 

# 6.3 Plot

```ignorefile
andes.plot 
```

The ANDES plotting tool. 

# 6.3.1 andes.plot

The ANDES plotting tool. 

# Functions

<table><tr><td colspan="2">eig_plot(name, args)</td></tr><tr><td>parse_y(y, upper[, lower])</td><td>Parse command-line input for Y indices and return a list of indices</td></tr><tr><td>set_font([family, size, style, weight])</td><td>Sets the font for matplotlib.</td></tr><tr><td>set_latex()</td><td>Enables LaTeX for matplotlib based on the with_latex option and dvipng availability.</td></tr><tr><td>set_style([style])</td><td>Set matplotlib style.</td></tr><tr><td>tdsplot(filename, y[, x, to_csv, find, ...])</td><td>TDS plot main function based on the new TSDData class.</td></tr></table>

# eig_plot

andes.plot.eig_plot(name, args) 


parse_y


```txt
andes.plot .parse_y (y, upper, lower=0)   
Parse command-line input for Y indices and return a list of indices   
Parameters y [Union[List, Set, Tuple]] Input for Y indices. Could be single item (with or without colon), or multiple items upper [int] Upper limit. In the return list y, y[i] <= uppower. lower [int] Lower limit. In the return list y, y[i] >= lower.   
Returns 
```


set_font


```txt
andes.plot.set.Font(family='serif', size=12, style='normal', weight='normal') Sets the font for matplotlib. 
```


Parameters


```txt
family [str] Font family.   
size [int] Font size. 
```

```txt
style [str]Font style. 
```

```txt
weight [str] Font weight. 
```


set_latex


```txt
andes.plot.setlatex() EnablesLaTeX for matplotlib based on the with_latex option and dvipng availability. Returns bool True for LaTeX on, False for off 
```

# set_style

andes.plot.set_style(style $=$ 'default') 

Set matplotlib style. 

# Parameters

style 

[str] default, ieee (require scienceplots), or other available styles (see matplotlib.pyplot.style.available). 

# tdsplot

andes.plot.tdsplot(filename, y, $x { = } ( 0 , )$ , to_csv $\displaystyle { \overline { { \mathbf { \Lambda } } } } =$ False, find $\sqsupseteq$ None, xargs=None, exclude=None, **kwargs) 

TDS plot main function based on the new TDSData class. 

# Parameters

filename 

[str] Path to the ANDES TDS output data file. Works without extension. 

x 

[list or int, optional] The index for the x-axis variable. $\scriptstyle \mathbf { X } = 0$ by default for time 

y 

[list or int] The indices for the y-axis variable 

to_csv 

[bool] True if need to export to a csv file 

find 

[str, optional] if not none, specify the variable name to find 

xargs 

[str, optional] similar to find, but return the result indices with file name, x idx name 

for xargs 

exclude 

[str, optional] variable name pattern to exclude 

# Returns

TDSData object 

# Classes

TDSData([full_name, mode, dae, path]) 

A data container for loading and plotting results from Andes time-domain simulation. 

# andes.plot.TDSData

class andes.plot.TDSData(full_name $=$ None, mode $\underline { { \underline { { \cdot } } } } =$ 'file', dae $\mathbf { \equiv }$ None, path $=$ None) 

A data container for loading and plotting results from Andes time-domain simulation. 

__init__(full_name $: =$ None, mode $: =$ 'file', dae $\mathbf { \equiv }$ None, path $\equiv$ None) 

# Methods

<table><tr><td>bqplot_data(xdata, ydata, *, [xheader, ...])</td><td>Plot with bqplot.</td></tr><tr><td>data_to_df()</td><td>Convert to pandas.DataFrame</td></tr><tr><td>export_csv([[path, idx, header, formatted, ...])</td><td>Export to a csv file.</td></tr><tr><td>find(query[, exclude, formatted, idx_only])</td><td>Return variable names and indices matching query.</td></tr><tr><td>get_call([frontend])</td><td>Get the internal plot_data function for the speci-fied backend.</td></tr><tr><td>get_header(idx[, formatted])</td><td>Return a list of the variable names at the given indices.</td></tr><tr><td>get_values(idx)</td><td>Return the variable values at the given indices.</td></tr><tr><td>guess_event_time()</td><td>Guess the event starting time from the input data by checking when the values start to change</td></tr><tr><td>load_dae()</td><td>Load from DAE time series.</td></tr><tr><td>load_lst()</td><td>Load the lst file into internal data structures _idx, _name, _uname, and counts the number of vari-ables to nvars.</td></tr><tr><td>load_npy_or_csv([delimiter])</td><td>Load the numpy, zpy or (the legacy) csv file into the internal data structure self._xy.</td></tr><tr><td>panoview(mdl, vars, *, [ncols, idx, a, figsize])</td><td>Panoramic view of variables of a given model in-stance.</td></tr><tr><td>plot(yidx[ , xidx, a, ytimes, ycalc, left, ...])</td><td>Entry function for plotting.</td></tr><tr><td>plot_data(xdata, ydata, *, [xheader, ...])</td><td>Plot lines for the supplied data and options.</td></tr><tr><td>plotn(nrows, ncols, yidxes[ , xidxes, dpi, ...])</td><td>Plot multiple subfigures in one figure.</td></tr></table>

# TDSData.bqplot_data

```python
TDSData.bqplot_data (xdata, ydata, *, xheader=None, yheader=None,xlabel=None,ylabel=None, left=None, right=None, ymin=None, ymax=None, legend=True, grid=False, fig=None, dpi=None, line_width=1.0, greyscale=False, savefig=None, save_format=None, title=None, **kwargs) 
```

Plot with bqplot. Experimental and incomplete. 

# TDSData.data_to_df

```txt
TDSData.data_to_df() 
```

Convert to pandas.DataFrame 

# TDSData.export_csv

```python
TDSData export_csv (path=None, idx=None, header=None, formatted=False, sort_idx=True, fmt='%.18e') 
```

Export to a csv file. 

# Parameters

# path

[str] path of the csv file to save 

# idx

[None or array-like, optional] the indices of the variables to export. Export all by default 

# header

[None or array-like, optional] customized header if not None. Use the names from the lst file by default 

# formatted

[bool, optional] Use LaTeX-formatted header. Does not apply when using customized header 

# sort_idx

[bool, optional] Sort by idx or not, # TODO: implement sort 

# fmt

[str] cell formatter 

# Returns

# str

The path of the exported csv file 

# TDSData.find

TDSData.find(query, exclude $\mathbf { \equiv }$ None, formatted $\sqsupseteq$ False, idx_only=False) 

Return variable names and indices matching query. 

# Parameters

query 

[str] The string for querying variables. Multiple conditions can be separated by comma without space. 

exclude 

[str, optional] A string pattern to be excluded 

formatted 

[bool, optional] True to return formatted names, False otherwise 

idx_only 

[bool, optional] True if only return indices 

# Returns

(list, list) 

(List of found indices, list of found names) 

# TDSData.get_call

TDSData.get_call(backend=None) 

Get the internal plot_data function for the specified backend. 

# TDSData.get_header

TDSData.get_header(idx, formatted=False) 

Return a list of the variable names at the given indices. 

# Parameters

idx 

[list or int] The indices of the variables to retrieve 

formatted 

[bool] True to retrieve latex-formatted names, False for unformatted names 

# Returns

list 

A list of variable names (headers) 

# TDSData.get_values

TDSData.get_values(idx) 

Return the variable values at the given indices. 

# Parameters

idx 

[list] The indicex of the variables to retrieve. $i d x { = } O$ is for Time. Variable indices start at 1. 

# Returns

np.ndarray 

Variable data 

# TDSData.guess_event_time

TDSData.guess_event_time() 

Guess the event starting time from the input data by checking when the values start to change 

# TDSData.load_dae

TDSData.load_dae() 

Load from DAE time series. 

# TDSData.load_lst

TDSData.load_lst() 

Load the lst file into internal data structures _idx, _fname, _uname, and counts the number of variables to nvars. 

# Returns

None 

# TDSData.load_npy_or_csv

TDSData.load_npy_or_csv(delimiter=',') 

Load the npy, zpy or (the legacy) csv file into the internal data structure self._xy. 

# Parameters

delimiter 

[str, optional] The delimiter for the case file. Default to comma. 

# Returns

# None

# TDSData.panoview

TDSData.panoview(mdl, vars, *, ncols ${ } ^ { \cdot = 3 }$ , idx $\ Q$ None, $a { = }$ None, figsize $\mathbf { \equiv }$ None, **kwargs) 

Panoramic view of variables of a given model instance. 

Select variables through vars. Select devices through idx or a, which has a higher priority. 

This function also takes other arguments recognizable by self.plot. 

# Parameters

mdl 

[ModelBase] Model instance 

var 

[list of str] A list of variable names to display 

ncol 

[int] Number of columns 

idx 

[list] A list of device idx-es for showing 

a 

[list of int] A list of device 0-based positions for showing 

figsize 

[tuple] Figure size for plotting 

# Examples

To plot omega and delta of GENROUs GENROU_1 and GENROU_2: 

```python
system.TDS.plt.plot(system.GENROU,  
    vars=['omega', 'delta'],  
    idx=['GENROU_1', 'GENROU_2']) 
```

# TDSData.plot

```txt
TDSData.plot (yidx, xidx = (0), *, a = None, ytimes = None, ycalc = None, left = None, right = None, ymin = None, ymax = None,xlabel = None,ylabel = None, ylabel = None, xheader = None, yheader = None, legend = None, grid = False, greyscale = False, latex = True, dpi = None, line_width = 1.0, font_size = 12, savefig = None, save_format = None, show = True, title = None, linestyle = None, use_bqplot = False, hline1 = None, hline2 = None, vline1 = None, vline2 = None, hline = None, vline = None, fig = None, ax = None, backend = None, set_xlim = True, set_ylim = True, autoscale = False, legend_bbox = None, legend_location = None, legend_ncol = 1, figsize = None, color = None, **kwargs) 
```

Entry function for plotting. 

This function retrieves the x and y values based on the xidx and yidx inputs, applies scaling functions ytimes and ycalc sequentially, and delegates the plotting to the backend. 

# Parameters

yidx 

[list or int] The indices for the y-axis variables 

xidx 

[tuple or int, optional] The index for the x-axis variable 

a 

[tuple or list, optional] The 0-indexed sub-indices into yidx to plot. 

ytimes 

[float, optional] A scaling factor to apply to all y values. 

left 

[float] The starting value of the x axis 

[float] The ending value of the x axis 

ymin 

[float] The minimum value of the y axis 

ymax 

[float] The maximum value of the y axis 

ylabel 

[str] Text label for the y axis 

yheader 

[list] A list containing the variable names for the y-axis variable 

title 

[str] Title string to be shown at the top 

Existing figure object to draw the axis on. 

ax 

Existing axis object to draw the lines on. 

# Returns

(fig, ax) 

Figure and axis handles for matplotlib backend. 

fig 

Figure object for bqplot backend. 

# Other Parameters

ycalc: callable, optional 

A callable to apply to all y values after scaling with ytimes. 

xlabel 

[str] Text label for the x axis 

xheader 

[list] A list containing the variable names for the x-axis variable 

legend 

[bool] True to show legend and False otherwise 

legend_ncol 

[int] Number of columns in legend 

legend_bbox 

[tuple of two floats] legend box to anchor 

grid 

[bool] True to show grid and False otherwise 

latex 

[bool] True to enable latex and False to disable 

greyscale 

[bool] True to use greyscale, False otherwise 

savefig 

[bool or str] True to save to png figure file. str is treated as the output file name. 

save_format 

[str] File extension string (pdf, png or jpg) for the savefig format 

[int] Dots per inch for screen print or save. savefig uses a minimum of 200 dpi 

line_width 

[float] Plot line width 

font_size 

[float] Text font size (labels and legends) 

figsize 

[tuple] Figure size passed when creating new figure 

show 

[bool] True to show the image 

backend 

[str or None] bqplot to use the bqplot backend in notebook. None for matplotlib. 

hline1: float, optional 

Dashed horizontal line 1 

hline2: float, optional 

Dashed horizontal line 2 

vline1: float, optional 

Dashed horizontal line 1 

vline2: float, optional 

Dashed vertical line 2 

hline: float or Iterable 

y-axis location of horizontal line(s) 

vline: float or Iterable 

x-axis location of vertical line(s) 

# TDSData.plot_data

```txt
TDSData.plot_data(xdata, ydata, *, xheader=None, yheader=None,xlabel=None,ylabel=None, linestyles=None, left=None, right=None, ymin=None, ymax=None, legend=None, grid=False, fig=None, ax=None, latex=True, dpi=None, line_width=1.0, font_size=12, greyscale=False, savefig=None, save_format=None, show=True, title=None, hline1=None, hline2=None, vline1=None, hline2=None, vline3=None, set_xlim=True, set_ylim=True, autoscale=False, figsize=None, legend_bbox=None, legend_location=None, legend_ncol=1, mask=True, color=True, style='default', **kwargs) 
```

Plot lines for the supplied data and options. 

This functions takes xdata and ydata values. If you provide variable indices instead of values, use plot(). 

See the argument lists of plot() for more. 

# Parameters

xdata 

[array-like] An array-like object containing the values for the x-axis variable 

ydata 

[array] An array containing the values of each variables for the y-axis variable. The row of ydata must match the row of xdata. Each column correspondings to a variable. 

mask 

[bool] If enabled (1), when specifying axis limits, only data in the limits will be used for plotting to optimize for autoscaling. It is done through an index mask. 

# Returns

(fig, ax) 

The figure and axis handles 

# Examples

To plot the results of arithmetic calculation of variables, retrieve the values, do the calculation, and plot with plot_data. 

```txt
>>> v = ss.dae.ts.y[ :, ss.PVD1.v.a]  
>>> Ipcm = ss.dae.ts.y[ :, ss.PVD1.Ipcm_y.a]  
>>> t = ss.dae.ts.t 
```

```txt
>>> ss.TDS.plt.plot的数据(t, v * Ipcm,
>>> xlabel='Time [s]',
>>> ylabel='Ipcm [pu]')
```

# TDSData.plotn

```python
TDSData.plotn (nrows: int, ncols: int, yidxes, xidxes=None, *, dpi=None, titles=None, a=None, figsize=None,xlabel=None,ylabel=None,sharex=None,sharey=None, show=True,xlabel_offs=(0.5,0.01),ylabel_offs=(0.05,0.5),hspace=0.2, wspace=0.2, **kwargs) 
```

Plot multiple subfigures in one figure. 

Parameters xidxes, a, xlabels and ylabels, if provided, must have the same length as yidxes. 

# Parameters

```txt
nrows [int] number of rows ncols [int] number of cols yidx A list of BaseVar or i 
```

# 6.4 I/O

andes.io 

ANDES input parsers and output formatters. 

# 6.4.1 andes.io

ANDES input parsers and output formatters. 

# Functions

<table><tr><td>dump(system, output_format[, full_path, ...])</td><td>Dump the System data into the requested output format.</td></tr><tr><td>get_output_ext(out_format)</td><td>Helper function to get the output extension for the given output format.</td></tr><tr><td>guess(system)</td><td>Guess the input format based on extension and content.</td></tr><tr><td>parse(system)</td><td>Parse input file with the given format in sys-tem.files输入_format.</td></tr><tr><td>read_file_like(infile)</td><td>Read a file-like object and return a list of splitted lines.</td></tr></table>

# dump

andes.io.dump(system, output_format, full_path $\mathbf { \equiv }$ None, overwrite=False, **kwargs) 

Dump the System data into the requested output format. 

Parameters 

system 

System object 

output_format 

[str] Output format name. 'xlsx' will be used if is not an instance of str. 

Returns 

bool 

True if successful; False otherwise. 

get_output_ext 

andes.io.get_output_ext(out_format) 

Helper function to get the output extension for the given output format. 

Parameters 

out_format 

[str] Output format name. 

Returns 

str [file extension without dot or empty if not supported] 

# guess

```txt
andes.io.guess (system) 
```

Guess the input format based on extension and content. 

Also stores the format name to system.files.input_format. 

# Parameters

system 

[System] System instance with the file name set to system.files 

# Returns

str 

format name 

# parse

```txt
andes.io数据分析(system)
```

Parse input file with the given format in system.files.input_format. 

# Returns

bool 

True if successful; False otherwise. 

# read_file_like

```txt
andes.io.read_file_like (infile: str | IOBase) 
```

Read a file-like object and return a list of splitted lines. 

# Modules

<table><tr><td>andes.io.json</td><td>JSON reader and writer for ANDES.</td></tr><tr><td>andes.io.matpower</td><td>Simple MATPOWER format parser</td></tr><tr><td>andes.io.psse</td><td>PSS/E file parser.</td></tr><tr><td>andes.io streaming</td><td>Simulation data streaming interface for CURRENT DiME2.</td></tr><tr><td>andes.io.txt</td><td>Output TXT fileformatter.</td></tr><tr><td>andes.io.xlsx</td><td>Excel reader and writer for ANDES power system parameters</td></tr></table>

# andes.io.json

JSON reader and writer for ANDES. 

# Functions

<table><tr><td>read(system, infile)</td><td>Read JSON file with ANDES model data into an empty system.</td></tr><tr><td>testlines(infile)</td><td></td></tr><tr><td>write(system, outfile[, skip_empty, overwrite])</td><td>Write loaded ANDES system data into a JSON file.</td></tr></table>

# read

andes.io.json.read(system, infile: str | IOBase) 

Read JSON file with ANDES model data into an empty system. 

# Parameters

system 

[System] Empty System instance 

infile 

[str or io.BaseIO] str: path to the input file; or io.BaseIO: a stream to read from 

# Returns

System 

System instance after succeeded 

# testlines

andes.io.json.testlines(infile) 

# write

andes.io.json.write(system, outfile, skip_empty $=$ True, overwrite $\mathbf { \equiv }$ None, **kwargs) 

Write loaded ANDES system data into a JSON file. 

# Parameters

system 

[System] A loaded system with parameters 

outfile 

[str] Path to the output file 

skip_empty 

[bool] Skip output of empty models $( \mathbf { n } = 0 )$ 

overwrite 

[bool] None to prompt for overwrite selection; True to overwrite; False to not overwrite 

Returns 

bool 

True if file written; False otherwise 

andes.io.matpower 

Simple MATPOWER format parser 

# Functions

<table><tr><td>m2mpc(infile)</td><td>Parse MATPOWER file and return a dictionary with the data.</td></tr><tr><td>mpc2system(mpc, system)</td><td>Load an mpc dict into an empty ANDES system.</td></tr><tr><td>read(system, file)</td><td>Read a MATPOWER data file into mpc, and build andes device elements.</td></tr><tr><td>system2mpc(system)</td><td>Convert data from an ANDES system to an mpc dict.</td></tr><tr><td>testlines(infile)</td><td>Test if this file is in the MATPOWER format.</td></tr></table>

# m2mpc

andes.io.matpower.m2mpc(infile: str) dict 

Parse MATPOWER file and return a dictionary with the data. 

Supported fields include 

• baseMVA 

• bus 

• bus_names 

• gen 

• branch 

• gencost (parsed but not used) 

• areas (parsed but not used) 

# Parameters

infile 

[str] Path to the MATPOWER file. 

Returns 

dict 

mpc struct names : numpy arrays 

# mpc2system

andes.io.matpower.mpc2system(mpc: dict, system) bool 

Load an mpc dict into an empty ANDES system. 

Parameters 

system 

[andes.system.System] Empty system to load the data into. 

mpc 

[dict] mpc struct names : numpy arrays 

Returns 

bool 

True if successful, False otherwise. 

# read

andes.io.matpower.read(system, file) 

Read a MATPOWER data file into mpc, and build andes device elements. 

# system2mpc

andes.io.matpower.system2mpc(system) dict 

Convert data from an ANDES system to an mpc dict. 

In the gen section, slack generators preceeds PV generators. 

# testlines

andes.io.matpower.testlines(infile) 

Test if this file is in the MATPOWER format. 

NOT YET IMPLEMENTED. 

# andes.io.psse

PSS/E file parser. 

Include a RAW parser and a DYR parser. 

# Functions

<table><tr><td>get_block-lines(b, mdata)</td><td>Return the number of lines based on the block index in the RAW file.</td></tr><tr><td>read(system, file)</td><td>Read PSS/E RAW file v32/v33 formats.</td></tr><tr><td>read_add(system, file)</td><td>Read an addition PSS/E dyr file.</td></tr><tr><td>sort_psse_models(dyr_yaml, system)</td><td>Sort supported models so that model names are or- dered by dependency.</td></tr><tr><td>testlines(infile)</td><td>Check the raw file for frequency base.</td></tr></table>

# get_block_lines

andes.io.psse.get_block_lines(b, mdata) 

Return the number of lines based on the block index in the RAW file. 

# read

andes.io.psse.read(system, file) 

Read PSS/E RAW file v32/v33 formats. 

# read_add

andes.io.psse.read_add(system, file) 

Read an addition PSS/E dyr file. 

# Parameters

system 

[System] System instance to which data will be loaded 

file 

[str] Path to the additional dyr file 

Returns 

bool 

data parsing status 

# sort_psse_models

andes.io.psse.sort_psse_models(dyr_yaml, system) 

Sort supported models so that model names are ordered by dependency. 

Dependency is determined by checking the find key in psse-dyr.yaml for each model. 

# Returns

list 

The sequence of model names for loading parameters. 

# testlines

andes.io.psse.testlines(infile) 

Check the raw file for frequency base. 

# andes.io.streaming

Simulation data streaming interface for CURENT DiME2. 

# Classes

Streaming(system) 

ANDES data streaming class to interface with CURENT LTB. 

# andes.io.streaming.Streaming

class andes.io.streaming.Streaming(system) 

ANDES data streaming class to interface with CURENT LTB. 

__init__(system) 

# Methods

<table><tr><td>build_init()</td><td>Build Varheader, Idxvgs and SysParam after power flow routine</td></tr><tr><td>connect()</td><td>Connect to DiME 2 server.</td></tr><tr><td>finalize()</td><td>Send DONE signal when simulation completes</td></tr><tr><td>handle_alter(Alter)</td><td>Handle parameter altering</td></tr><tr><td>handle_event(Event)</td><td>Handle Fault, Breaker, Syn and Load Events</td></tr><tr><td>record_module_init(name, init_var)</td><td>Record the variable requests from modules</td></tr><tr><td>send_init([receptient])</td><td>Broadcast Varheader, Idxvgs and SysParam to all DiME clients after power flow routine</td></tr><tr><td>sync_and_handle()</td><td>Sync until the queue is empty.</td></tr><tr><td>transposeMATLAB_row(a)</td><td></td></tr><tr><td>vars_to Modules()</td><td>Stream the results from the last step to modules</td></tr><tr><td>vars_to_pmu()</td><td>Broadcast all PMU measurements and BusFreq measurements in the variable pmudata</td></tr></table>

# Streaming.build_init

Streaming.build_init() 

Build Varheader, Idxvgs and SysParam after power flow routine 

# Streaming.connect

Streaming.connect() 

Connect to DiME 2 server. 

If dime_address is specified from the command-line, streaming will be automatically enabled. 

Otherwise, settings from the Config file will be used. 

# Streaming.finalize

Streaming.finalize() 

Send DONE signal when simulation completes 

Returns 

None 

# Streaming.handle_alter

Streaming.handle_alter(Alter) 

Handle parameter altering 

# Streaming.handle_event

Streaming.handle_event(Event) 

Handle Fault, Breaker, Syn and Load Events 

# Streaming.record_module_init

Streaming.record_module_init(name, init_var) 

Record the variable requests from modules 

# Streaming.send_init

Streaming.send_init(recepient='all') 

Broadcast Varheader, Idxvgs and SysParam to all DiME clients after power flow routine 

# Streaming.sync_and_handle

Streaming.sync_and_handle() 

Sync until the queue is empty. Handle sync'ed commands. 

# Streaming.transpose_matlab_row

static Streaming.transpose_matlab_row(a) 

# Streaming.vars_to_modules

Streaming.vars_to_modules() 

Stream the results from the last step to modules 

Returns 

None 

# Streaming.vars_to_pmu

Streaming.vars_to_pmu() Broadcast all PMU measurements and BusFreq measurements in the variable pmudata 

# andes.io.txt

Output TXT file formatter. 

# Functions

```txt
dump_data(text, header, rowname, data, file) 
```

# dump_data

andes.io.txt.dump_data(text, header, rowname, data, file, width=18, precision ${ : = } 5$ ) 

# andes.io.xlsx

Excel reader and writer for ANDES power system parameters 

This module utilizes openpyxl, xlsxwriter and pandas.Frame. 

While I like the simplicity of the dome format, spreadsheets are easier to view and edit. 

# Functions

```txt
read(system, infile) Read an xlsx file with ANDES model data into an empty system   
testlines(infile)   
write(system,outfile[,skip_empty，...]) Write loaded ANDES system data into an xlsx file 
```

# read

andes.io.xlsx.read(system, infile) 

Read an xlsx file with ANDES model data into an empty system 

# Parameters

system 

[System] Empty System instance 

infile 

[str or file-like] Path to the input file, or a file-like object 

# Returns

System 

System instance after succeeded 

# testlines

andes.io.xlsx.testlines(infile) 

# write

andes.io.xlsx.write(system, outfile, skip_empty $=$ True, overwrite $\mathbf { \equiv }$ None, add_book=None, **kwargs) 

Write loaded ANDES system data into an xlsx file 

# Parameters

system 

[System] A loaded system with parameters 

outfile 

[str] Path to the output file 

skip_empty 

[bool] Skip output of empty models $( \mathbf { n } = 0$ 

overwrite 

[bool, optional] None to prompt for overwrite selection; True to overwrite; False to not overwrite 

add_book 

[str, optional] An optional model to be added to the output spreadsheet 

# Returns

bool 

True if file written; False otherwise 

# 6.5 Interoperability

andes.interop 

Interopability package between Andes and other software. 

# 6.5.1 andes.interop

Interopability package between Andes and other software. 

To install dependencies, do: 

pip install andes[interop] 

To install dependencies for development, in the ANDES source code folder, do: 

pip install -e .[interop] 

# Modules

<table><tr><td>andes.interop.gridcal</td><td>Basic GridCal (4.6.1) interface, based on the pan-dapower interface written by Jinning Wang</td></tr><tr><td>andes.interop.matpower</td><td>Interoperability with MATLAB through manpower-pip.</td></tr><tr><td>andes.interop.pandapower</td><td>Simple pandapower (2.7.0) interface</td></tr><tr><td>andes.interop.pypowsbl</td><td>Interoperability with pypowsbl.</td></tr></table>

# andes.interop.gridcal

Basic GridCal (4.6.1) interface, based on the pandapower interface written by Jinning Wang 

Author: Josep Fanals (@JosepFanals) 

# Functions

require_gridcal(f) 

to_gridcal(ssa[, verify, tol]) 

Decorator for functions that require GridCal. 

Convert an ANDES system to a GridCal grid. 

# require_gridcal

andes.interop.gridcal.require_gridcal(f) 

Decorator for functions that require GridCal. 

# to_gridcal

andes.interop.gridcal.to_gridcal(ssa, verify $: =$ True, tol=1e-06) 

Convert an ANDES system to a GridCal grid. 

# Parameters

ssa 

[andes.system.System] The ANDES system to be converted 

verify 

[bool] If True, the converted network will be verified with the source ANDES system using AC power flow. 

tol 

[float] The tolerance of error when comparing power flow solutions. 

# Returns

# GridCal.Engine.Core.multi_circuit.MultiCircuit

A GridCal net with the same bus, branch, gen, and load data as the ANDES system 

# Notes

Handling of the following parameters: 

• By default, all generators in ssp are controllable unless user-defined controllability is given 

• The online status of generators are determined by the online status of StaticGen that connected to the SynGen or DG 

• ssp.gen.name is from ssa.StaticGen.idx, which should be unique 

# andes.interop.matpower

Interoperability with MATPOWER through matpower-pip. 

Please install the Python package matpower and configure MATLAB or Octave, following the instructions at matpower-pip. 

To create a MATLAB/Octave instance, do: 

from andes.interop.matpower import start_instance 

m = start_instance() 

# 6.5. Interoperability

# Functions

<table><tr><td>from_matpower(m, varname[, system])</td><td>Retrieve a MATLABmpc case from a MATLAB/Octave instance.</td></tr><tr><td>require_matpower(f)</td><td>Decorator for functions that require matplotlib.</td></tr><tr><td>to_matpower(m, varname, system)</td><td>Send an ANDES case to a running MATLAB instance.</td></tr></table>

# from_matpower

andes.interop.matpower.from_matpower(m, varname, system $: =$ None) 

Retrieve a MATPOWER mpc case from a MATLAB/Octave instance. 

# Parameters

m [MATLAB/Octave instance] Instance from which to retrieve the MATPOWER case. 

# varname

[str] Name of the variable in the MATPOWER MPC format to retrieve. 

# Returns

# System

System from the mpc case. The system will not have been set up. 

# Examples

To retrieve a case from MATPOWER from instance m, do the following: 

from andes.interop.matpower import start_instance, to_matpower, from_ $\rightarrow$ matpower system $=$ from_matpower(m,'mpc') 

One can create an Excel file with dynamic data only and use the xlsx parser to load data into system: 

```python
from andes.io import xlsx  
xlsx.read(system, andes.get(case('ieee14/ieee14_dyn_only.xlsx')) 
```

The ieee14_dyn_only.xlsx is an example spreadsheet that only contains dynamic components. One will need to create the idx correctly for dynamic components to match these from the MAT-POWER case. If not sure about the indices, one can save the ANDES system to an Excel file, using: 

```txt
xlsx.write(system, 'system(static.xlsx') 
```

# require_matpower

andes.interop.matpower.require_matpower(f) 

Decorator for functions that require matpower. 

# to_matpower

andes.interop.matpower.to_matpower(m, varname, system) 

Send an ANDES case to a running MATLAB instance. 

# Parameters

m [MATLAB/Octave instance] Instance to which to send the MATPOWER case. 

varname [str] Name of the variable to store the mpc case in MATLAB/Octave. 

system [System] System whose power flow data to send to MATPOWER. 

# Examples

The code below will create an IEEE 14-bus example system in ANDES, convert it to MATPOWER's case, and send to the MATLAB/Octave instance. 

import andes   
from andes.interop.matpower import (start_instance, to_matpower, from_matpower)   
m = start_instance()   
ss = andes.system.example()   
mpc = to_matpower(m,'mpc',ss)   
m.eval("runpf(mpc)")   
mpc_out $=$ m.pull("mpc") # retrieve the mpg case from MATLAB/Octave 

# andes.interop.pandapower

Simple pandapower (2.7.0) interface 

# Functions

<table><tr><td>add_gencost(ssp, gen_cost)</td><td>Add cost function to converted pandapower net ssp.</td></tr><tr><td>build_group_table(ssa, group, columns[,...])</td><td>Build the table for devices in a group in an ANDES System.</td></tr><tr><td>make_GSF(ppn[, verify, using_sparseSolver])</td><td>Build the Generation Shift Factor matrix of a pan-dapower net.</td></tr><tr><td>make_link_table(ssa)</td><td>Build the link table for generators and generator con- trolers in an ANDES System, including SynGen and DG for now.</td></tr><tr><td>require_pandapower(f)</td><td>Decorator for functions that require pandapower.</td></tr><tr><td>runopp_map(ssp, link_table, **kwargs)</td><td>Run OPF in pandapower using pp . runopp() and map results back to ANDES based on the link table.</td></tr><tr><td>to_pandapower(ssa[, ctrl, verify, tol])</td><td>Convert an ANDES system to a pandapower network for power flow studies.</td></tr></table>

# add_gencost

andes.interop.pandapower.add_gencost(ssp, gen_cost) 

Add cost function to converted pandapower net ssp. 

The cost data follows the same format of pypower and matpower. 

Now only poly_cost is supported. 

# Parameters

```txt
ssp The pandapower net   
gen_cost [array] generator cost data 
```

# build_group_table

andes.interop.pandapower.build_group_table(ssa, group, columns, mdl_name=[]) 

Build the table for devices in a group in an ANDES System. 

# Parameters

```txt
[andes.system_System] The ANDES system to build the table 
```

group 

[string] The ANDES group 

columns 

[list of string] The common columns of a group that to be included in the table. 

mdl_name 

[list of string] The list of models that to be included in the table. Default as all models. 

Returns 

DataFrame 

The output Dataframe contains the columns from the device 

make_GSF 

andes.interop.pandapower.make_GSF(ppn, verify=True, using_sparse_solver=False) 

Build the Generation Shift Factor matrix of a pandapower net. 

Parameters 

ppn 

[pandapower.network.Network] Pandapower network 

verify 

[bool] True to verify the GSF with that from DC power flow 

using_sparse_solver 

[bool] True to use a sparse solver for pandapower maktPTDF 

Returns 

np.ndarray 

The GSF array 

make_link_table 

andes.interop.pandapower.make_link_table(ssa) 

Build the link table for generators and generator controllers in an ANDES System, including SynGen and DG for now. 

Parameters 

ssa 

[andes.system.System] The ANDES system to link 

Returns 

DataFrame 

Each column in the output Dataframe contains the idx of linked StaticGen, 

Bus, DG, RenGen, RenExciter, SynGen, Exciter, and TurbineGov, gammap, gammaq. 

# require_pandapower

andes.interop.pandapower.require_pandapower(f) 

Decorator for functions that require pandapower. 

# runopp_map

andes.interop.pandapower.runopp_map(ssp, link_table, **kwargs) 

Run OPF in pandapower using pp.runopp() and map results back to ANDES based on the link table. 

# Parameters

ssp 

[pandapower network] The pandapower network 

link_table 

[DataFrame] The link table of ANDES system 

# Returns

# DataFrame

The DataFrame contains the OPF results with columns p_mw, q_mvar, vm_pu in p.u., and the corresponding idx of StaticGen, Exciter, TurbineGov in ANDES. 

# Notes

• The pandapower net and the ANDES system must have same base MVA. 

• Multiple DG connected to the same StaticGen will be converted to one generator. The power is dispatched to each DG by the power ratio gammap 

# to_pandapower

andes.interop.pandapower.to_pandapower(ssa, ctrl=[], verify $=$ True, tol=1e-06) 

Convert an ANDES system to a pandapower network for power flow studies. 

# Parameters

ssa 

[andes.system.System] The ANDES system to be converted 

# ctrl

[list] The controlability of generators. The length should be the same with the number of StaticGen. If not given, controllability of generators will be assigned by default. Example input: [1, 0, 1, ...]; PV first, then Slack. 

# verify

[bool] If True, the converted network will be verified with the source ANDES system using AC power flow. 

# tol

[float] The tolerance of error. 

# Returns

# pandapower.auxiliary.pandapowerNet

A pandapower net with the same bus, branch, gen, and load data as the ANDES system 

# Notes

# Handling of the following parameters:

• This interface tracks static power flow model in ANDES: Bus, Line, PQ, Shunt, PV, and Slack. However, it does not track the dynamic models in ANDES, including but not limited to TurbineGov, SynGen, and Exciter. 

• The interface converts the Slack in ANDES to gen in pandapower rather than ext_gen. 

• MUST NOT verify power flow after initializing TDS in ANDES. ANDES does not allow running PFlow for systems with initialized TDS as it will break variable addressing. 

• If you want to track dynamic model outputs in ANDES and feedback into pandapower, you might need to manually transfer the results from ANDES to pandapower. 

• Generator cost is not included in the conversion. Use add_gencost() to add cost data. 

• By default, all generators in ssp are controllable unless user-defined controllability is given 

• The online status of generators are determined by the online status of StaticGen that connected to the SynGen or DG 

• ssp.gen.name is from ssa.StaticGen.idx, which should be unique 

# andes.interop.pypowsybl

Interoperability with pypowsybl. 

# Functions

```txt
require_pypowsby1(f)   
to_pypowsby1(ss) 
```

Decorator for functions that require pypowsybl. Convert an ANDES system to a pypowsybl network. 

# require_pypowsybl

andes.interop.pypowsybl.require_pypowsybl(f) Decorator for functions that require pypowsybl. 

# to_pypowsybl

andes.interop.pypowsybl.to_pypowsybl(ss) 

Convert an ANDES system to a pypowsybl network. 

# Parameters

ss [andes.system.System] The ANDES system to be converted. 

# Returns

pypowsybl.network.Network 

# Warning:

• Power flow results are not verified. 

# Notes

• Only the BUS_BREAKER topology is supported. 

• Each bus has a voltage level named "VL" followed by the bus idx. 

• Buses connected by transformers are in the same substation. 

# Examples

One can utilize pypowsybl to draw network topology. For example, 

```python
ss = andes.system.example()
n = to_pypowsybl(ss)
results = pp.loadflow.run_ac(n) 
```

(continues on next page) 

(continued from previous page) 

```python
n.get_network_area_diagram() # show diagram for system  
n.get_single_line(diagram("VL6") # show single-line diagram for bus 6 
```

# 6.6 Others

<table><tr><td>andescli</td><td>ANDES command-line interface and argument parsers.</td></tr><tr><td>andes.main</td><td>Main entry point for the ANDES CLI and scripting interfaces.</td></tr><tr><td>andes.utils_paths</td><td>Utility functions for loading andes stock test cases</td></tr><tr><td>andes.utils_snapshot</td><td>Utility functions for saving and loading snapshots.</td></tr><tr><td>andes.utils.widgets</td><td>Support for Jupyter widgets.</td></tr></table>

# 6.6.1 andes.cli

ANDES command-line interface and argument parsers. 

# Functions

<table><tr><td>create_parser()</td><td>Create a parser for the command-line interface.</td></tr><tr><td>main()</td><td>Entry point of the ANDES command-line interface.</td></tr><tr><td>preamble()</td><td>Log the ANDES command-line preamble at the log-ging.INFO level</td></tr></table>

# create_parser

```txt
andescli.create_parser() 
```

Create a parser for the command-line interface. 

# Returns

argparse.ArgumentParser 

Parser with all ANDES options 

# 6.6. Others

# main

andes.cli.main() 

Entry point of the ANDES command-line interface. 

# preamble

andes.cli.preamble() 

Log the ANDES command-line preamble at the logging.INFO level 

# 6.6.2 andes.main

Main entry point for the ANDES CLI and scripting interfaces. 

# Functions

<table><tr><td>configlogger([stream_level, stream, file, ...])</td><td>Configure an ANDES logger with a FileHandler and a StreamHandler.</td></tr><tr><td>demo(**kwargs)</td><td>TODO: show some demonstrations from CLI.</td></tr><tr><td>doc([attribute, listsupported, config])</td><td>Quick documentation from command-line.</td></tr><tr><td>edit_conf([edit_config])</td><td>Edit the Andes config file which occurs first in the search path.</td></tr><tr><td>find_log_path(lg)</td><td>Find the file paths of the FileHelpers.</td></tr><tr><td>load(case[, codegen, setup, use_input_path])</td><td>Load a case and set up a system without running routine.</td></tr><tr><td>misc([edit_config, save_config, ...])</td><td>Miscellaneous commands.</td></tr><tr><td>plot(*args, **kwargs)</td><td>Wrapper for the plot tool.</td></tr><tr><td>prepare([[quick, incremental, models, ...])</td><td>Run code generation.</td></tr><tr><td>printlicense()</td><td>Print out Andes license to stdout.</td></tr><tr><td>remove_output([[recursive])</td><td>Remove the outputs generated by Andes, including power flow reports _out.txt, time-domain list _out lst and data _out.dat, eigenvalue analysis report _eig.txt.</td></tr><tr><td>run(filename[, input_path, verbose, ...])</td><td>Entry point to run ANDES routines.</td></tr><tr><td>run_CASE(case, *[, routine, profile, ...])</td><td>Run single simulation case for the given full path.</td></tr><tr><td>save_conf([[config_path, overwrite]])</td><td>Save the Andes config to a file at the path specified by save_config.</td></tr><tr><td>selftest([quick, extra])</td><td>Run unit tests.</td></tr><tr><td>setLogger_level(lg, type_to_set, level)</td><td>Set logging level for the given type of handler.</td></tr><tr><td>versioninfo()</td><td>Print version info for ANDES and dependencies.</td></tr></table>

# config_logger

andes.main.config_logger(stream_level $\scriptstyle 1 = 2 0$ , *, stream $: =$ True, file $\underline { { \underline { { \mathbf { \Pi } } } } } =$ True, log_file $=$ 'andes.log', log_path $=$ None, file_leve $\scriptstyle { \frac { } { } } = I O$ ) 

Configure an ANDES logger with a FileHandler and a StreamHandler. 

This function is called at the beginning of andes.main.main(). Updating stream_level and file_level is now supported. 

# Parameters

# stream

[bool, optional] Create a StreamHandler for stdout if True. If False, the handler will not be created. 

# file

[bool, optionsl] True if logging to log_file. 

# log_file

[str, optional] Logg file name for FileHandler, 'andes.log' by default. If None, the FileHandler will not be created. 

# log_path

[str, optional] Path to store the log file. By default, the path is generated by get_log_dir() in utils.misc. 

# stream_level

[{10, 20, 30, 40, 50}, optional] StreamHandler verbosity level. 

# file_level

[{10, 20, 30, 40, 50}, optional] FileHandler verbosity level. 

# Returns

None 

# demo

andes.main.demo(**kwargs) 

TODO: show some demonstrations from CLI. 

# doc

andes.main.doc(attribute $\mathbf { \equiv }$ None, list_supported $\sqsupseteq$ False, config=False, **kwargs) 

Quick documentation from command-line. 

# 6.6. Others


edit_conf


```txt
andes.main .edit_conf (edit_config: str | bool | None = ") 
```

Edit the Andes config file which occurs first in the search path. 


Parameters


```txt
edit_config 
```

[bool] If True, try to open up an editor and edit the config file. Otherwise returns. 


Returns


```txt
bool 
```

True is a config file is found and an editor is opened. False if edit_config is False. 


find_log_path


andes.main.find_log_path $(lg)$ 

Find the file paths of the FileHandlers. 


load


```python
andes.main.load(case, codegen=False, setup=True, use_input_path=True, **kwargs) 
```

Load a case and set up a system without running routine. Return a system. 

```txt
Takes other kwargs recognizable by System, such as addfile, input_path, and no_output. 
```


Parameters


```txt
case: str 
```

Path to the test case 


codegen


[bool, optional] Call full System.prepare on the returned system. Set to True if one need to inspect pretty-print equations and run simulations. 


setup


[bool, optional] Call System.setup after loading 


use_input_path


[bool, optional] True to use the input_path argument to behave the same as andes.main.run. 

Warning: If one need to add devices in addition to these from the case file, do setup $=$ False and call System.add() to add devices. When done, manually invoke setup() to set up the system. 

# misc

andes.main.misc(edit_config $= "$ , save_config $= ^ { \prime }$ ', show_license $: =$ False, clean $: =$ True, recursive=False, overwrite $\underline { { \underline { { \cdot } } } } =$ None, version $=$ False, **kwargs) 

Miscellaneous commands. 

# plot

andes.main.plot(*args, **kwargs) 

Wrapper for the plot tool. 

# prepare

andes.main.prepare(quick=False, incremental=False, models=None, precompile=False, nomp=False, **kwargs) 

Run code generation. 

# Parameters

full 

[bool] True to run full prep with formatted equations. Useful in interactive mode and during document generation. 

ncpu 

[int] Number of cores to be used for parallel processing. 

cli 

[bool] True to indicate running from CLI. It will set quick to True if not full. 

precompile 

[bool] True to compile model function calls after code generation. 

# Returns

System object if cli is False; exit_code 0 otherwise. 

Warning: The default behavior has changed since v1.0.8: when cli is True and full is not True, quick code generation will be used. 

# print_license

andes.main.print_license() 

Print out Andes license to stdout. 

# remove_output

andes.main.remove_output(recursive=False) 

Remove the outputs generated by Andes, including power flow reports _out.txt, time-domain list _out.lst and data _out.dat, eigenvalue analysis report _eig.txt. 

# Parameters

recursive 

[bool] Recursively clean all subfolders 

# Returns

bool 

True is the function body executes with success. False otherwise. 

# run

andes.main.run(filename, input_path $=$ ', verbose=20, mp_verbose=30, ncpu $\scriptstyle = I$ , pool=False, cli=False, codegen $\mathbf { \equiv }$ False, shell $\sqsupseteq$ False, **kwargs) 

Entry point to run ANDES routines. 

# Parameters

filename 

[str] file name (or pattern) 

input_path 

[str, optional] input search path 

verbose 

[int, 10 (DEBUG), 20 (INFO), 30 (WARNING), 40 (ERROR), 50 (CRITICAL)] Verbosity level. If config_logger is called prior to run, this option will be ignored. 

mp_verbose 

[int] Verbosity level for multiprocessing tasks 

ncpu 

[int, optional] Number of cpu cores to use in parallel 

pool: bool, optional 

Use Pool for multiprocessing to return a list of created Systems. 

kwargs 

Other supported keyword arguments 

cli 

[bool, optional] If is running from command-line. If True, returns exit code instead of System 

codegen 

[bool, optional] Run full code generation for System before loading case. Only used for single test case. 

shell 

[bool, optional] If True, enter IPython shell after routine. 

Returns 

System or exit_code 

An instance of system (if $c l i = = F a l s e _ { \it _ { \cdot } }$ ) or an exit code otherwise.. 

run_case 

```python
andes.main.run(case (case, *,routine='pflow',profile= False,convert="",convert_all="", add_book=None, codegen=False, autogen_stale=True, remove_pycapsule=False, **kwargs) 
```

Run single simulation case for the given full path. Use run instead of run_case whenever possible. 

Argument input_path will not be prepended to case. 

Arguments recognizable by load can be passed to run_case. 

Parameters 

case 

[str] Full path to the test case 

routine 

[str, ('pflow', 'tds', 'eig')] Computation routine to run 

profile 

[bool, optional] True to enable profiler 

convert 

[str, optional] Format name for case file conversion. 

convert_all 

[str, optional] Format name for case file conversion, output sheets for all available devices. 

add_book 

[str, optional] Name of the device to be added to an excel case as a new sheet. 

codegen 

[bool, optional] True to run codegen 

autogen_stale 

[bool, optional] True to automatically generate code for stale models 

# remove_pycapsule

[bool, optional] True to remove pycapsule from C libraries. Useful when dill serialization is needed. 

# save_conf

andes.main.save_conf(config_path $\equiv$ None, overwrite $\mathbf { \equiv }$ None, **kwargs) 

Save the Andes config to a file at the path specified by save_config. The save action will not run if save_config $\qquad = \ \cdot \ \cdot$ . 

# Parameters

# config_path

[None or str, optional, ('' by default)] Path to the file to save the config file. If the path is an emtpy string, the save action will not run. Save to ~/.andes/andes.conf if None. 

# Returns

# bool

True is the save action is run. False otherwise. 

# selftest

andes.main.selftest(quick $\mathbf { \sigma } =$ False, extra $: =$ False, **kwargs) 

Run unit tests. 

# set_logger_level

andes.main.set_logger_level(lg, type_to_set, level) 

Set logging level for the given type of handler. 

# versioninfo

andes.main.versioninfo() 

Print version info for ANDES and dependencies. 

# 6.6.3 andes.utils.paths

Utility functions for loading andes stock test cases 

# Functions

<table><tr><td>andes_root()</td><td>Return the path to the folder of the ANDES package.</td></tr><tr><td>cases_root()</td><td>Return the root path to the stock cases</td></tr><tr><td>confirm_overwrite(outfile[, overwrite])</td><td>Confirm overwriting a file.</td></tr><tr><td>get(case(rpath[, check])</td><td>Return the path to a stock case for a given path relative to andes/cases.</td></tr><tr><td>get_config_path([file_name])</td><td>Return the path of the config file to be loaded.</td></tr><tr><td>get_DOT_andes_path()</td><td>Return the path to $HOME/.andes</td></tr><tr><td>get_log_dir()</td><td>Get the directory for log file.</td></tr><tr><td>get_pycode_path([pycode_path, mkdir])</td><td>Get the path to the pycode folder.</td></tr><tr><td>list_cases([rpath, no_print])</td><td>List stock cases under a given folder relative to andes/cases</td></tr><tr><td>tests_root()</td><td>Return the root path to the stock cases</td></tr></table>

# andes_root

andes.utils.paths.andes_root() 

Return the path to the folder of the ANDES package. 

# cases_root

andes.utils.paths.cases_root() 

Return the root path to the stock cases 

# confirm_overwrite

andes.utils.paths.confirm_overwrite(outfile, overwrite=None) 

Confirm overwriting a file. 

# 6.6. Others

# get_case

```txt
andes.utils_paths.get_case(rpath, check=True) Return the path to a stock case for a given path relative to andes/cases. To list all cases, use andes.list_cases(). 
```

# Parameters

```txt
check [bool] True to check if file exists 
```

# Examples

```txt
To get the path to the case kundur_full.xlsx under folder kundur, do 
```

```txt
andes.get_case('kundur/kundur_full.xlsx') 
```

# get_config_path

andes.utils_paths.get_config_path(file_name $\equiv$ 'andes.rc') Return the path of the config file to be loaded.   
Search Priority: 1. current directory; 2. home directory.. Parameters file_name [str, optional] Config file name with the default as andes .rc. Returns Config path in string if found; None otherwise. 

# get_dot_andes_path

```txt
andes.utils_paths.get_DOT_andes_path()
Return the path to $HOME/.andes 
```

# get_log_dir

```txt
andes.utils_paths.get_log_dir() Get the directory for log file. The default is <tempdir>/andes, where <tempdir> is provided by tempfile. gettempdir(). Returns 
```

str 

The path to the temporary logging directory 

# get_pycode_path

andes.utils.paths.get_pycode_path(pycode_path $=$ None, mkdir=False) 

Get the path to the pycode folder. 

# list_cases

andes.utils.paths.list_cases(rpath $: = "$ .', no_print=False) 

List stock cases under a given folder relative to andes/cases 

# tests_root

andes.utils.paths.tests_root() 

Return the root path to the stock cases 

# Classes

```txt
DisplayablePath(path, parent_path, is_last) 
```

# andes.utils.paths.DisplayablePath

class andes.utils.paths.DisplayablePath(path, parent_path, is_last) 

__init__(path, parent_path, is_last) 

# Methods

```txt
displayable() 
```

```erlang
make_tree(root[, parent, is_last, criteria]) 
```

# DisplayablePath.displayable

DisplayablePath.displayable() 

# DisplayablePath.make_tree

classmethod DisplayablePath.make_tree(root, parent=None, is_last=False, criteria $\equiv$ None) 

# Attributes

```txt
displayFilename_prefix_last   
displayFilename_prefix_middle   
display_parent_prefix_last   
display_parent_prefix_middle   
displayname 
```

# DisplayablePath.display_filename_prefix_last

DisplayablePath.display_filename_prefix_last = '└──' 

# DisplayablePath.display_filename_prefix_middle

DisplayablePath.display_filename_prefix_middle $=$ '├──' 

# DisplayablePath.display_parent_prefix_last

DisplayablePath.display_parent_prefix_last = '│ ' 

DisplayablePath.display_parent_prefix_middle 

DisplayablePath.display_parent_prefix_middle = ' ' 

DisplayablePath.displayname 

property DisplayablePath.displayname 

# 6.6.4 andes.utils.snapshot

Utility functions for saving and loading snapshots. 

Code Examples: 

1. Setup base case and save the snapshot for once: 


import andes


```txt
ss = andes.run(andes.get(case("ieee14/ieee14_lintrip.xlsx"))  
ss Toggle.u.v[:] = 0 # turn off line trips for the base case  
xy = ss.TDS.init()  
andes.utils_snapshot.save_ss("ieee14_snapshot.pkl", ss) 
```

2. For every scenario afterwards, load the snapshot and apply disturbances: 


import andes


```python
ss = andes.utilssnapshot.load_ss("ieee14_snapshot.pkl")  
# apply specific disturbances  
ss.GENROU.omega.v[0] = 1.02  
ss.TDS.run() 
```

# Functions

```txt
load_ss(path) Load an ANDES snapshot and return a System object.   
save_ss(path, system) Save a system with all internal states as a snapshot. 
```

# load_ss

andes.utils.snapshot.load_ss(path) 

Load an ANDES snapshot and return a System object. 

# Parameters

path 

[str] Path to the snapshot file. 

Returns 

andes.system.System 

The loaded system object 

# save_ss

andes.utils.snapshot.save_ss(path, system) 

Save a system with all internal states as a snapshot. 

Returns 

Path to the saved snapshot. 

Warning: One limitation of the current implementation is version dependency. The snapshots only work with the specific ANDES version that created it. 

# 6.6.5 andes.utils.widgets

Support for Jupyter widgets. 

Please manually install the following dependencies: 

• ipywidgets 

• ipysheet 

If you are using JupyterLab, do 

jupyter labextension install @jupyter-widgets/jupyterlab-manager 

# Functions

<table><tr><td>edit_sheet(system, model)</td><td>Use ipysheet to edit parameters of one model.</td></tr><tr><td>edit_system(system)</td><td>Edit a loaded ANDES System with ipy widgets.</td></tr><tr><td>on_close(b)</td><td>Callback for the Close button.</td></tr><tr><td>on_update(b)</td><td>Callback for the Update button.</td></tr></table>

# edit_sheet

andes.utils.widgets.edit_sheet(system, model: str) 

Use ipysheet to edit parameters of one model. 

# edit_system

andes.utils.widgets.edit_system(system) 

Edit a loaded ANDES System with ipywidgets. 

# on_close

andes.utils.widgets.on_close(b) 

Callback for the Close botton. Closes ipywidget objects. 

# on_update

andes.utils.widgets.on_update(b) 

Callback for the Update button. Sets new parameters back to System. 



[Cui2021] H. Cui, F. Li and K. Tomsovic, "Hybrid Symbolic-Numeric Framework for Power System Modeling and Analysis," in IEEE Transactions on Power Systems, vol. 36, no. 2, pp. 1373-1384, March 2021, doi: 10.1109/TPWRS.2020.3017019. 





[Milano2010] F. Milano, “Power System Modelling and Scripting,” in Power Modelling and Scripting, F. Milano, Ed. Berlin, Heidelberg: Springer, pp. 202-204, 2010. 





[Sauer] P. W. Sauer, M. A. Pai, and J. H. Chow, Power system dynamics and stability: with synchrophasor measurement and power system toolbox, Second edition. Hoboken, NJ, USA: IEEE Press, Wiley, 2017. 





[PJM5] F. Li and R. Bo, "Small test systems for power system economic studies," IEEE PES General Meeting, 2010, pp. 1-4, doi: 10.1109/PES.2010.5589973. 





[GB] The University of Edinburgh, "Power Systems Test Case Archive", https://www.maths.ed.ac.uk/ optenergy/NetworkData/fullGB 





[EI] D. Osipov and M. Arrieta-Paternina, "Reduced Eastern Interconnection System Model", [Online]. Available: https://curent.utk.edu/2016SiteVisit/EI_LTB_Report.pdf. 





[IEEE] University of Washington, "Power Systems Test Case Archive", [Online]. Available: https://labs. ece.uw.edu/pstca/ 





[RLGC] Qiuhua Huang, "RLGC repository", [Online]. Available: https://github.com/RLGC-Project/ RLGC 





[MATPOWER] R. D. Zimmerman, "MATPOWER", [Online]. Available: https://matpower.org/ 





[Nordic] ALSETLab, "Nordpool test system", [Online]. Available: https://github.com/ALSETLab/ Nordic44-Nordpool/tree/master/nordic44/models 





[PST] Power System Toolbox, [Online]. Available: https://sites.ecse.rpi.edu/~chowj/PSTMan.pdf 





[WECC] K. Sun, "Test Cases Library of Power System Sustained Oscillations". Available: http://web.eecs. utk.edu/~kaisun/Oscillation/basecase.html 





[PSAT] F. Milano, "Power System Analysis Toolbox", [Online]. Available: http://faraday1.ucd.ie/psat. html 



# PYTHON MODULE INDEX

# a

andes.cli, 889 

andes.interop, 880 

andes.interop.gridcal, 880 

andes.interop.matpower, 881 

andes.interop.pandapower, 884 

andes.interop.pypowsybl, 887 

andes.io, 869 

andes.io.json, 871 

andes.io.matpower, 872 

andes.io.psse, 874 

andes.io.streaming, 875 

andes.io.txt, 878 

andes.io.xlsx, 878 

andes.main, 890 

andes.plot, 857 

andes.routines, 835 

andes.routines.base, 835 

andes.routines.criteria, 838 

andes.routines.daeint, 838 

andes.routines.eig, 842 

andes.routines.pflow, 849 

andes.routines.tds, 851 

andes.system, 803 

andes.utils.paths, 897 

andes.utils.snapshot, 901 

andes.utils.widgets, 902 

andes.variables, 820 

andes.variables.dae, 821 

andes.variables.fileman, 832 

andes.variables.report, 833 