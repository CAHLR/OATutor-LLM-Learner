var hints = [{id: "uni13a-h1", type: "hint", dependencies: [], title: "Visualize", text: "Draw a diagram representing the situation.\n##figure1.gif##", variabilization: {}}, {id: "uni13a-h2", type: "hint", dependencies: ["uni13a-h1"], title: "Identify", text: "Identify what you are solving for.", variabilization: {}}, {id: "uni13a-h3", type: "hint", dependencies: ["uni13a-h2"], title: "What Are You Solving For", text: "You are solving for the Hamilton's speed in the congested freeways.", variabilization: {}}, {id: "uni13a-h4", type: "hint", dependencies: ["uni13a-h3"], title: "Make a Variable", text: "Create a variable to represent the speed in the congested freeways. Let the variable be x.", variabilization: {}}, {id: "uni13a-h5", type: "hint", dependencies: ["uni13a-h4"], title: "Time Elapsed", text: "Determine how much time each part of the journey took using subtraction.", variabilization: {}}, {id: "uni13a-h6", type: "hint", dependencies: ["uni13a-h5"], title: "Time Elapsed Answer", text: "2:00 PM to 4:00 PM is two hours. 4:00 PM to 6:30 PM is 2.5 hours long. So, he spent two hours in the congested freeways and 2.5 hours in the desert.", variabilization: {}}, {id: "uni13a-h7", type: "hint", dependencies: ["uni13a-h6"], title: "Translate to Equation", text: "Translate the situation into an equation using the variable. Remember that $$distance=speed time$$.", variabilization: {}}, {id: "uni13a-h8", type: "hint", dependencies: ["uni13a-h7"], title: "The Equation", text: "Multiply the speeds by the time it takes for each respective part of the journey to get the equation $$\\left(2\\right) x+\\left(1.75\\right) \\left(2.5\\right) x=255$$ (this is the combined distance).", variabilization: {}}, {id: "uni13a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["40"], dependencies: ["uni13a-h8"], title: "Solving the Equation", text: "After solving the equation, what do you get for x?", subHints: [{id: "uni13a-h9-s1", type: "hint", dependencies: [], title: "Solving the Equation", text: "To solve the equation $$\\left(2\\right) x+\\left(1.75\\right) \\left(2.5\\right) x=255$$, we follow these steps: 2x+4.375x=255-->6.375x=255-->x=40.", variabilization: {}}], variabilization: {}}, ]; export {hints};