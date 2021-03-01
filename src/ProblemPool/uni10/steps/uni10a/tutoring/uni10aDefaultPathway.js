var hints = [{id: "uni10a-h1", type: "hint", dependencies: [], title: "Visualize", text: "Draw a diagram representing the situation.\n##figure1.gif##"}, {id: "uni10a-h2", type: "hint", dependencies: ["uni10a-h1"], title: "Identify", text: "Identify what you are solving for."}, {id: "uni10a-h3", type: "hint", dependencies: ["uni10a-h2"], title: "What Are You Solving For", text: "You are solving for the Katie Mae's walking speed."}, {id: "uni10a-h4", type: "hint", dependencies: ["uni10a-h2"], title: "Make a Variable", text: "Create a variable to represent the walking speed. Let's call the this speed x. Since her biking speed is 3 mph faster than her walking speed, her biking speed is $$x+\\left(3\\right)$$."}, {id: "uni10a-h5", type: "hint", dependencies: ["uni10a-h4"], title: "Translate to Equation", text: "Translate the situation into an equation using the variable. Remember that the distance from Katie Mae’s home to her school is the same whether she is walking or riding her bike, and distance equals the product of speed and time. Also, you will need to first convert the minutes into hours."}, {id: "uni10a-h6", type: "hint", dependencies: ["uni10a-h4"], title: "The Equation", text: "The translated equation is 0.5x=0.25(x+3)."}, {id: "uni10a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["uni10a-h6"], title: "Solving the Equation", text: "After solving the equation, what do you get for x?", subHints: [{id: "uni10a-h7-s1", type: "hint", dependencies: [], title: "Solving the Equation", text: "To solve the equation $$\\left(0.5\\right) x=\\left(0.25\\right) \\left(x+\\left(3\\right)\\right)$$ we follow these steps: 0.5x=0.25x+0.75-->0.25x=0.75-->x=3."}]}, ]; export {hints};