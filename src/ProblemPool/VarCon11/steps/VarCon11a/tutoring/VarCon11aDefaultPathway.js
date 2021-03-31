var hints = [{id: "VarCon11a-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "VarCon11a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-9=3y"], dependencies: ["VarCon11a-h1"], title: "Subtraction", text: "Subtract 5y from each side."}, {id: "VarCon11a-h3", type: "hint", dependencies: ["VarCon11a-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon11a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y=-3"], dependencies: ["VarCon11a-h3"], title: "Division", text: "Divide 3 from each side."}, {id: "VarCon11a-h5", type: "hint", dependencies: ["VarCon11a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon11a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon11a-h5"], title: "Verification", text: "Check whether $$\\left(5\\right) \\left(-3\\right)-\\left(9\\right)$$ equals $$\\left(8\\right) \\left(-3\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};