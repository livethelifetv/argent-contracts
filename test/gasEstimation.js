/* global artifacts */
const GasEstimation = artifacts.require("GasEstimation");

describe("Gas Estimation tests", () => {
  let gasEstimation;

  beforeEach(async () => {
    gasEstimation = await GasEstimation.new();
  });

  describe("Gas estimation correctness", () => {
    it("when using gasleft()", async () => {
      let gasEstimate = await gasEstimation.setValue.estimateGas(1, { gasLimit: 2000000, gasPrice: 1 });
      let tx = await gasEstimation.setValue(1, { gasLimit: 2000000, gasPrice: 1 });
      console.log("setValue gasEstimate", gasEstimate.toString());
      console.log("setValue gasUsed    ", tx.receipt.gasUsed.toString());

      gasEstimate = await gasEstimation.setValueWithEstimate.estimateGas(2, { gasLimit: 2000000, gasPrice: 1 });
      tx = await gasEstimation.setValueWithEstimate(2, { gasLimit: 2000000, gasPrice: 1 });
      console.log("setValueWithEstimate gasEstimate", gasEstimate.toString());
      console.log("setValueWithEstimate gasUsed    ", tx.receipt.gasUsed.toString());
    });
  });
});
