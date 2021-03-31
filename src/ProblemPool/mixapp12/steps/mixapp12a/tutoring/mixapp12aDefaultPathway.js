var hints = [{id: "mixapp12a-h1", type: "hint", dependencies: [], title: "Expressing values as mathematical expressions", text: "The first step is to express the values as mathematical expressions"}, {id: "mixapp12a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2*x"], dependencies: ["mixapp12a-h1"], title: "Assigning variables", text: "Let $$x=the$$ number of nickels. How many pennies are there? Write the mathematical expression in terms of x."}, {id: "mixapp12a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.05*x"], dependencies: ["mixapp12a-h2"], title: "Total cost of all the nickels", text: "What is the total value of nickels? Write the answer as a mathematical expression"}, {id: "mixapp12a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.01*3*x"], dependencies: ["mixapp12a-h3"], title: "Total cost of all the quarters", text: "What is the total cost of all the pennies? Write the answer as a mathematical expression"}, {id: "mixapp12a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1.2"], dependencies: ["mixapp12a-h4"], title: "Total cost", text: "What is the total cost?"}, ]; export {hints};