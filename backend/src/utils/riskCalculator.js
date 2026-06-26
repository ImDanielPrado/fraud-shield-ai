function calculateRisk(transaction) {
  let riskScore = 0;

  // Regra 1
  if (transaction.amount > 10000) {
    riskScore += 40;
  }

  // Regra 2
  if (transaction.country !== "BR") {
    riskScore += 30;
  }

  // Regra 3
  if (transaction.amount > 50000) {
    riskScore += 30;
  }

  let status = "APPROVED";

  if (riskScore >= 70) {
    status = "FRAUD";
  } else if (riskScore >= 40) {
    status = "PENDING_REVIEW";
  }

  return {
    riskScore,
    status
  };
}

module.exports = calculateRisk;