import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios(
      "https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/"
    );
    console.log("response ", response);
    let holdings = response?.data?.data?.userHolding || [];
    holdings = holdings.map((item: any) => {
      const currentVal = item?.ltp * item?.quantity;
      const investmentVal = item?.avgPrice * item?.quantity;
      const pl = currentVal - investmentVal;
      return {
        ...item,
        pl,
        currentVal,
        investmentVal,
      };
    });
    console.log("holdings ", holdings);
    const details:any = {};
    for (let i = 0; i < holdings.length; i++) {
      details["todaysProfitLoss"] =
        (details["todaysProfitLoss"] || 0) +
        (holdings[i]?.close - holdings[i]?.ltp) * holdings[i]?.quantity;
      details["currentVal"] =
        (details["currentVal"] || 0) + holdings[i]?.currentVal;
      details["totalInvestment"] =
        (details["totalInvestment"] || 0) + holdings[i]?.investmentVal;
    }

    details["profitLoss"] = (
      details["currentVal"] - details["totalInvestment"]
    ).toFixed(2);
    details["todaysProfitLoss"] = details["todaysProfitLoss"]?.toFixed(2);
    details["currentVal"] = details["currentVal"]?.toFixed(2);
    details["totalInvestment"] = details["totalInvestment"]?.toFixed(2);

    console.log("details ", details);
    return {
      holdings,
      details,
    };
  } catch (err) {}
};
