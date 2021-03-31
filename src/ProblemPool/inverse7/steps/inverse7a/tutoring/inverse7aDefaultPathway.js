var hints = [{id: "inverse7a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute y for f(x)"}, {id: "inverse7a-h2", type: "hint", dependencies: ["inverse7a-h1"], title: "Swap", text: "Swap y and x"}, {id: "inverse7a-h3", type: "hint", dependencies: ["inverse7a-h2"], title: "Multiply", text: "Multiply $$y+\\left(2\\right)$$ to both sides"}, {id: "inverse7a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x \\left(y+\\left(2\\right)\\right)=3$$"], dependencies: ["inverse7a-h3"], title: "Result", text: "What is the result?", choices: ["$$x \\left(y+\\left(2\\right)\\right)=3$$", "$$x \\left(y+\\left(2\\right)\\right)=3x$$", "$$y \\left(y+\\left(2\\right)\\right)=3$$"]}, {id: "inverse7a-h5", type: "hint", dependencies: ["inverse7a-h4"], title: "Expand", text: "Expand the left hand side."}, {id: "inverse7a-h6", type: "hint", dependencies: ["inverse7a-h5"], title: "Subtract", text: "Subtract 2x from both sides."}, {id: "inverse7a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$xy=-\\left(2\\right) x+\\left(3\\right)$$"], dependencies: ["inverse7a-h6"], title: "Result", text: "What is the result?", choices: ["$$x=-\\left(2\\right) x+\\left(3\\right)$$", "$$xy=2x-3$$", "$$xy=-\\left(2\\right) x+\\left(3\\right)$$"]}, {id: "inverse7a-h8", type: "hint", dependencies: ["inverse7a-h7"], title: "Divide", text: "Divide x from both sides to get the final answer."}, ]; export {hints};