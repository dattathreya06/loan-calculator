// src/hooks/useEMICalculator.js

const useEMICalculator = () => {
  const calculate = (P, R, N) => {
    const monthlyRate = R / (12 * 100);
    const months = N;

    const EMIraw =
      (P * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const EMI = parseFloat(EMIraw.toFixed(2)); // EMI rounded to 2 decimal places

    const schedule = [];
    let balance = P;

    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const principal = EMI - interest;
      balance -= principal;

      // Ensure precision
      schedule.push({
        month: i,
        principal: parseFloat(principal.toFixed(2)),
        interest: parseFloat(interest.toFixed(2)),
        balance: balance > 0 ? parseFloat(balance.toFixed(2)) : 0.0,
      });
    }

    return { EMI, schedule };
  };

  return calculate;
};

export { useEMICalculator };
