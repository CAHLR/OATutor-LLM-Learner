var hints = [{id: "exponential17a-h1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3/2*3^(-2)+3/2"], dependencies: [], title: "Using Substitution", text: "Substitute $$x=2$$ into f(x). What is the expression?", variabilization: {}}, {id: "exponential17a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/9"], dependencies: ["exponential17a-h1"], title: "Using Simplification", text: "Simplify the power, $${\\left(3\\right)}^{\\left(-2\\right)}$$. Leave the answer as a fraction.", variabilization: {}}, {id: "exponential17a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1/6"], dependencies: ["exponential17a-h2"], title: "Using Multiplication", text: "Multiply the terms in the expression, $$\\frac{\\left(-3\\right)}{2} \\frac{1}{9}$$. Leave the answer as a fraction.", variabilization: {}}, {id: "exponential17a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1.3333"], dependencies: ["exponential17a-h3"], title: "Using Addition", text: "Add all the terms together, $$\\frac{-\\left(1\\right)}{6}+\\frac{3}{2}$$. Evaluate this value numerically. Round to four decimal places, if necessary.", variabilization: {}}, ]; export {hints};