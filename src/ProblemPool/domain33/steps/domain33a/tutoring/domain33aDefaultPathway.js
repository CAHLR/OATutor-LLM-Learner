var hints = [{id: "domain33a-h1", type: "hint", dependencies: [], title: "Define the Domain", text: "A rational function is undefined when the denominator is equal to zero. Additionally, the denominator is a square root, so the expression under the square root cannot be negative. So, let's start by setting the denominator greater than zero.", variabilization: {}}, {id: "domain33a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["domain33a-h1"], title: "Solving For the Domain", text: "What value does x have to be greater than to make $$x-\\left(3\\right)>0$$?", subHints: [{id: "domain33a-h2-s1", type: "hint", dependencies: [], title: "Solving For the Domain", text: "For $$x-\\left(3\\right)>0$$, add 3 to both sides to get $$x>3$$.", variabilization: {}}], variabilization: {}}, {id: "domain33a-h3", type: "hint", dependencies: ["domain33a-h2"], title: "Answer", text: "So, the function is defined for every value greater than 3.The domain of the function is $$(3,\\infty)$$, with the circle brackets denoting the fact that 3 is not a valid solution.", variabilization: {}}, ]; export {hints};