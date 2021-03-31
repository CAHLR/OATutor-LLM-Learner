var hints = [{id: "probsolve10a-h1", type: "hint", dependencies: [], title: "Identify the question", text: "What are we looking for"}, {id: "probsolve10a-h2", type: "hint", dependencies: ["probsolve10a-h1"], title: "Identify the question", text: "We are looking for the number of boys in the group"}, {id: "probsolve10a-h3", type: "hint", dependencies: ["probsolve10a-h2"], title: "Name", text: "Let's assign a variable to represent the number of boys, such as \"b\""}, {id: "probsolve10a-h4", type: "hint", dependencies: ["probsolve10a-h3"], title: "Rewrite", text: "Now, let's rewrite the question to combine all the important $$information$$ into one sentence."}, {id: "probsolve10a-h5", type: "hint", dependencies: ["probsolve10a-h4"], title: "Rewrite", text: "We can rewrite it like \"There are 11 girls which is 3 more than twice the number of boys\""}, {id: "probsolve10a-h6", type: "hint", dependencies: ["probsolve10a-h5"], title: "Translate", text: "Now, use the rewritten question to make an equation."}, {id: "probsolve10a-h7", type: "hint", dependencies: ["probsolve10a-h6"], title: "Translate", text: "We can rewrite it to be $$11=\\left(3\\right)+\\left(2\\right) b$$"}, {id: "probsolve10a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["probsolve10a-h7"], title: "Solve", text: "What number can we subtract from both sides?"}, {id: "probsolve10a-h9", type: "hint", dependencies: ["probsolve10a-h8"], title: "Simplify", text: "Now, we can simplify the equation"}, {id: "probsolve10a-h10", type: "hint", dependencies: ["probsolve10a-h9"], title: "Simplify", text: "Finally, we can solve the equation $$8=2b$$"}, {id: "probsolve10a-h11", type: "hint", dependencies: ["probsolve10a-h10"], title: "Simplify", text: "We can divide 2 from both sides of the equation"}, ]; export {hints};