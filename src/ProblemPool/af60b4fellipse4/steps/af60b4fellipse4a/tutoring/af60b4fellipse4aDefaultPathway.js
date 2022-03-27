var hints = [{id: "af60b4fellipse4a-h1", type: "hint", dependencies: [], title: "Vertice and Foci", text: "Does the major axis lie on the x- or y-axis?", variabilization: {}}, {id: "af60b4fellipse4a-h2", type: "hint", dependencies: ["af60b4fellipse4a-h1"], title: "Standard Equation Form", text: "What is the standard equation form of this ellipse?", variabilization: {}}, {id: "af60b4fellipse4a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["(0,0)"], dependencies: ["af60b4fellipse4a-h2"], title: "Center of Ellipse", text: "Where is the center of the ellipse?", choices: ["(0,0)", "(1,1)", "(2,2)", "(3,3)"], variabilization: {}}, {id: "af60b4fellipse4a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["(0,5) and (0,-5)"], dependencies: ["af60b4fellipse4a-h3"], title: "Vertices of Ellipse", text: "Given the value of a is known, what are the coordinates for the vertices?", choices: ["(0,4) and (0,-4)", "(0,5) and (0,-5)", "(0,6) and (0,-6)", "(0,7) and (0,-7)"], variabilization: {}}, {id: "af60b4fellipse4a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["(3,0) and (-3,0)"], dependencies: ["af60b4fellipse4a-h4"], title: "Co-vertices of Ellipse", text: "Given the value of b is known, what are the coordinates for the co-vertices?", choices: ["(3,0) and (-3,0)", "(0,4) and (0,-4)", "(0,5) and (0,-5)"], variabilization: {}}, {id: "af60b4fellipse4a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["(0,4) and (0,-4)"], dependencies: ["af60b4fellipse4a-h5"], title: "Foci of Ellipse", text: "Using the equation $$c^2=a^2-b^2$$, solve for c and obtain the coordinates of the foci.", choices: ["(3,0) and (-3,0)", "(0,4) and (0,-4)", "(0,5) and (0,-5)"], variabilization: {}}, ]; export {hints};