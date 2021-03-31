var hints = [{id: "LinEqua14a-h1", type: "hint", dependencies: [], title: "Excluded values", text: "The excluded values are those making a denominator equal to zero."}, {id: "LinEqua14a-h2", type: "hint", dependencies: ["LinEqua14a-h1"], title: "Denominator", text: "The denominators are x-2, $$x+\\left(1\\right)$$ and $$x^2-x-\\left(2\\right)$$."}, {id: "LinEqua14a-h3", type: "hint", dependencies: ["LinEqua14a-h2"], title: "Excluded values", text: "The excluded values are 2 and -1."}, {id: "LinEqua14a-h4", type: "hint", dependencies: ["LinEqua14a-h3"], title: "Factoring the denominator", text: "The three denominators in factored form are x-2, $$x+\\left(1\\right)$$ and $$\\left(x-\\left(2\\right)\\right) \\left(x+\\left(1\\right)\\right)$$."}, {id: "LinEqua14a-h5", type: "hint", dependencies: ["LinEqua14a-h4"], title: "Find LCD", text: "The LCD is the smallest expression that is divisible by each one of the denominators."}, {id: "LinEqua14a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x-2)(x+1)"], dependencies: ["LinEqua14a-h5"], title: "LCD", text: "What is the LCD of this equation?"}, {id: "LinEqua14a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2x+2+x-2=1"], dependencies: ["LinEqua14a-h6"], title: "Eliminating", text: "Simplify $$\\left(x-\\left(2\\right)\\right) \\left(x+\\left(1\\right)\\right) \\left(\\frac{2}{x-\\left(2\\right)}+\\frac{1}{x+\\left(1\\right)}\\right)=\\left(x-\\left(2\\right)\\right) \\left(x+\\left(1\\right)\\right) \\frac{1}{x^2-x-\\left(2\\right)}$$."}, {id: "LinEqua14a-h8", type: "hint", dependencies: ["LinEqua14a-h7"], title: "Solve equation", text: "Then we should solve the linear equation obtained."}, {id: "LinEqua14a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/3"], dependencies: ["LinEqua14a-h8"], title: "Linear equation", text: "Solve the equation $$\\left(2\\right) x+\\left(2\\right)+x-\\left(2\\right)=1$$. What is x?"}, ]; export {hints};