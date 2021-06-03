var hints = [{id: "Formula9a-h1", type: "hint", dependencies: [], title: "Identify the Unknown", text: "The formula is $$A=0.5bh$$, and we want to find h.", variabilization: {}}, {id: "Formula9a-h2", type: "hint", dependencies: ["Formula9a-h1"], title: "Substitute", text: "Since we know that $$A=90$$ and $$b=15$$, we can substitute these values into the formula and get $$90=0.5(15)(h)$$.", variabilization: {}}, {id: "Formula9a-h3", type: "hint", dependencies: ["Formula9a-h2"], title: "Simplify", text: "Simplifying the equation, we get $$90=(7.5)(h)$$.", variabilization: {}}, {id: "Formula9a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12"], dependencies: ["Formula9a-h3"], title: "Solve", text: "To solve for h, we can divide both sides of the equation by 7.5. What is h?", variabilization: {}}, ]; export {hints};