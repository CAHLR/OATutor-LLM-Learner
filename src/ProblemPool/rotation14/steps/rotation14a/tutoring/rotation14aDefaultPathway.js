var hints = [{id: "rotation14a-h1", type: "hint", dependencies: [], title: "Equations of Rotation", text: "The equations of rotation are $$x=x'cos(\\theta)-y'sin(\\theta)$$ and y=x'sin(𝜃)+x'cos(𝜃)", variabilization: {}}, {id: "rotation14a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["45"], dependencies: ["rotation14a-h1"], title: "Interpreting the Problem", text: "What is 𝜃?", variabilization: {}}, {id: "rotation14a-h3", type: "hint", dependencies: ["rotation14a-h2"], title: "Plugging in the Angle", text: "Because $$\\theta=45$$, plug in the value into the equations of rotation for x and y. Simplify so you are left with an algebraic function (with no trignometric functions)", variabilization: {}}, {id: "rotation14a-h4", type: "hint", dependencies: ["rotation14a-h3"], title: "Substituting Equation of Rotations", text: "Substitute x=(x'-y')/sqrt(2) and y=(x'+y')/sqrt(2) into $$\\left(3\\right) x^2+xy+\\left(3\\right) y^2-\\left(5\\right)=0$$", variabilization: {}}, {id: "rotation14a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(7x'**2)+(5y'**2)-5=0"], dependencies: ["rotation14a-h4"], title: "Algebraic Simplifications", text: "Using FOIL method, combining like terms, and other simplifications, determine the new representation of the equation. Write the answer so that there are no fractions.", variabilization: {}}, ]; export {hints};