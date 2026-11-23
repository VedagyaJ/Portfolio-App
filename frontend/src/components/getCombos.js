const getCombos = (n) => {
  // All possible inputs
  const combos = Array.from({ length: 2 ** n }, (_, i) =>
    i.toString(2).padStart(n, "0"),
  );

  // convert inputs into boolean
  return combos.map((combo) => [...combo].map((digit) => digit === "1"));
};

console.log(getCombos(3))