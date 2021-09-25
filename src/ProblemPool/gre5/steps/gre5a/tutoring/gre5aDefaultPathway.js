var hints = [{id: "gre5a-h1", type: "hint", dependencies: [], title: "Factor into Primes", text: "Factor each coefficient into primes. A prime number is a counting number greater than 1, whose only factors are 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 13, etc.", variabilization: {}}, {id: "gre5a-h2", type: "hint", dependencies: ["gre5a-h1"], title: "Factor First Number", text: "$$150=\\left(15\\right) \\left(10\\right)$$ $$150=\\left(3\\right) \\left(5\\right) \\left(5\\right) \\left(2\\right)$$", variabilization: {}}, {id: "gre5a-h3", type: "hint", dependencies: ["gre5a-h2"], title: "Factor Second Number", text: "$$275=\\left(25\\right) \\left(11\\right)$$ $$275=\\left(5\\right) \\left(5\\right) \\left(11\\right)$$", variabilization: {}}, {id: "gre5a-h4", type: "hint", dependencies: ["gre5a-h2", "gre5a-h3"], title: "Identify Common Factors in each Column", text: "$$150=\\left(3\\right) \\left(5\\right) \\left(5\\right) \\left(2\\right)$$ $$275=\\left(5\\right) \\left(5\\right) \\left(11\\right)$$ 5 and 5 are shared by both numbers.", variabilization: {}}, {id: "gre5a-h5", type: "hint", dependencies: ["gre5a-h4"], title: "Multiply Common Factors", text: "Bring down the 5 and 5, and then multiply. $$GCF=\\left(5\\right) \\left(5\\right)$$", variabilization: {}}, {id: "gre5a-h6", type: "hint", dependencies: ["gre5a-h5"], title: "Multiply Common Factors", text: "$$GCF=25$$", variabilization: {}}, ]; export {hints};