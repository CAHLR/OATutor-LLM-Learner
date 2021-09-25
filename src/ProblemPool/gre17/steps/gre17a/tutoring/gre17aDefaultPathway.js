var hints = [{id: "gre17a-h1", type: "hint", dependencies: [], title: "Factor into Primes", text: "Factor each coefficient into primes and write the variables with exponents in expanded form. A prime number is a counting number greater than 1, whose only factors are 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 13, etc.", variabilization: {}}, {id: "gre17a-h2", type: "hint", dependencies: ["gre17a-h1"], title: "Factor First Expression", text: "$$\\left(12\\right) m^2 n^3=\\left(3\\right) \\left(2\\right) \\left(2\\right) m m n n n$$", variabilization: {}}, {id: "gre17a-h3", type: "hint", dependencies: ["gre17a-h2"], title: "Factor Second Expression", text: "$$\\left(30\\right) m^5 n^3=\\left(5\\right) \\left(3\\right) \\left(2\\right) m m m m m n n n$$", variabilization: {}}, {id: "gre17a-h4", type: "hint", dependencies: ["gre17a-h2", "gre17a-h3"], title: "Identify Common Factors in each Column", text: "$$\\left(12\\right) m^2 n^3=\\left(3\\right) \\left(2\\right) \\left(2\\right) m m n n n$$ $$\\left(30\\right) m^5 n^3=\\left(5\\right) \\left(3\\right) \\left(2\\right) m m m m m n n n$$ 3, 2, m, m, n, n, and n are shared by both expressions.", variabilization: {}}, {id: "gre17a-h5", type: "hint", dependencies: ["gre17a-h4"], title: "Multiply Common Factors", text: "Bring down the 3, 2, m, m, n, n, and n, and then multiply. $$GCF=\\left(3\\right) \\left(2\\right) m m n n n$$", variabilization: {}}, {id: "gre17a-h6", type: "hint", dependencies: ["gre17a-h5"], title: "Multiply Common Factors", text: "$$GCF=\\left(6\\right) m^2 n^3$$", variabilization: {}}, ]; export {hints};