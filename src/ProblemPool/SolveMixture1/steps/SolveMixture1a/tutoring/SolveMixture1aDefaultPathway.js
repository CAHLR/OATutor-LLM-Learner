var hints = [{id: "SolveMixture1a-h1", type: "hint", dependencies: [], title: "Define variables", text: "Assign the number of student tickets a varible (like x) and the number of teacher tickets another variable (like y)", variabilization: {}}, {id: "SolveMixture1a-h2", type: "hint", dependencies: ["SolveMixture1a-h1"], title: "Setting up equations", text: "Based on the question if x is the number of student tickets and y is the number of teacher tickets then you seperate all the information into two different equations", variabilization: {}}, {id: "SolveMixture1a-h3", type: "hint", dependencies: ["SolveMixture1a-h2"], title: "Cost Equation", text: "One of the equations can represent the total cost of the event which we know to be $1560. Since each student ticket costs $6 we can multiply that with number of tickets to represent the total revenue of students. You can do the same with teachers and their sum would be equal to the total cost.", variabilization: {}}, {id: "SolveMixture1a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6x+9y=1506"], dependencies: ["SolveMixture1a-h3"], title: "Cost Equation", text: "What is the equation equal to?", variabilization: {}}, {id: "SolveMixture1a-h5", type: "hint", dependencies: ["SolveMixture1a-h4"], title: "Tickets equation", text: "You can represent the relationship between student tickets and adult tickets using the information given.", variabilization: {}}, {id: "SolveMixture1a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y=3x-5"], dependencies: ["SolveMixture1a-h5"], title: "Tickets equation", text: "What is the relationship", variabilization: {}}, {id: "SolveMixture1a-h7", type: "hint", dependencies: ["SolveMixture1a-h6"], title: "Combining the equations", text: "Seperate one variable in one of the equations and plug it in the second equation. In this case it would be easier to plug in $$y=3x-5$$ into the equation $$\\left(6\\right) x+\\left(9\\right) y=1506$$ which would equal $$\\left(6\\right) x+\\left(9\\right) \\left(\\left(3\\right) x-\\left(5\\right)\\right)$$ $$=$$ 1506", variabilization: {}}, {id: "SolveMixture1a-h8", type: "hint", dependencies: ["SolveMixture1a-h7"], title: "Solve for the missing variable", text: "Use algebra to simplify the equation to solve for the missing variable (x)", variabilization: {}}, {id: "SolveMixture1a-h9", type: "hint", dependencies: ["SolveMixture1a-h8"], title: "Plug in for y", text: "Once you have a value for x plug that value one of the two equations to get the value of y", variabilization: {}}, ]; export {hints};