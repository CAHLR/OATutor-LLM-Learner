var hints = [{id: "general30a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: [], title: "Identifying the GCF", text: "Is there a GCF?", choices: ["YesINo"], subHints: [{id: "general30a-h1-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$a^3$$"], dependencies: [], title: "Identifying the GCF", text: "What is the GCF? Make sure to factor it out.", variabilization: {}}], variabilization: {}}, {id: "general30a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Binomial"], dependencies: ["general30a-h1"], title: "Identifying Polynomial Type", text: "Is it a binomial, trinomial, or are there more than three terms?", choices: ["BinomialITrinomialIMore than 3"], variabilization: {}}, {id: "general30a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$a^3 \\left(a^2+\\left(9\\right)\\right)$$"], dependencies: ["general30a-h2"], title: "Factor Completely", text: "What is the expression when factored completely? Make sure to multiply and check.", variabilization: {}}, ]; export {hints};