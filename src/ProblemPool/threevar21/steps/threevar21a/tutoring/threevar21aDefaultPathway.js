var hints = [{id: "threevar21a-h1", type: "hint", dependencies: [], title: "Setting Up", text: "Set up three equations in variable form to represent the situation. Assuming x is smaller, y is middle and z is larger we have $$x=0.5z$$, $$y=0.75z$$, and $$x+y+z=108$$", variabilization: {}}, {id: "threevar21a-h2", type: "hint", dependencies: ["threevar21a-h1"], title: "Simplifying to 1 Variable", text: "Plug in the expressions for x and y into the equation $$x+y+z=108$$ and combines the z-values.", variabilization: {}}, {id: "threevar21a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["48"], dependencies: ["threevar21a-h2"], title: "Solving for z", text: "Using division solve for z from the previous expression", variabilization: {}}, {id: "threevar21a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["36"], dependencies: ["threevar21a-h3"], title: "Solvingn for y", text: "Plug in the value of z into the original expression for y", variabilization: {}}, {id: "threevar21a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["24"], dependencies: ["threevar21a-h4"], title: "Solvingn for x", text: "Plug in the value of z into the original expression for x", variabilization: {}}, ]; export {hints};