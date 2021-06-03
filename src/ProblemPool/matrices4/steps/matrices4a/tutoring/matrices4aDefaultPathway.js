var hints = [{id: "matrices4a-h1", type: "hint", dependencies: [], title: "Scalar Multiplication", text: "Scalar multiplication involves finding the product of a constant by each entry in the matrix. Given A=/mat{(a_{1,1},a_{1,2}),(a_{2,1},a_{2,2})}, the scalar multiple \\n $$c A$$ is c*A=c*/mat{(a_{1,1},a_{1,2}),(a_{2,1},a_{2,2})}=/mat{(c*a_{1,1},c*a_{1,2}),(c*a_{2,1},c*a_{2,2})}", variabilization: {}}, {id: "matrices4a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-64"], dependencies: ["matrices4a-h1"], title: "Scalar Multiplication", text: "Multiply each entry in C by scalar -4. What is the top left entry, c_{1,1}?", variabilization: {}}, {id: "matrices4a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-360"], dependencies: ["matrices4a-h2"], title: "Scalar Multiplication", text: "What is the bottom left entry, c_{2,1}, after multiplying by 4?", variabilization: {}}, {id: "matrices4a-h4", type: "hint", dependencies: ["matrices4a-h3"], title: "Scalar Multiplication", text: "Repeat the same process for each corresponding entries.", variabilization: {}}, ]; export {hints};