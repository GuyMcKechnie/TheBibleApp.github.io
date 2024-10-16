// Define data for scatter plot
var trace1 = {
    y: [
        0, 600, 1000, 2200, 2700, 3100, 3900, 4200, 4600, 4900, 5300, 5400,
        5500, 5600, 5700, 5800, 5900, 6000, 6100, 6200, 6300, 6400, 6500, 6600,
        6700, 6800, 6900, 7000, 7100, 7200, 7300, 7400, 7500, 7600, 7700, 7800,
        7900, 8000, 8100, 8200, 8300, 8300,
    ],
    x: [
        0, 19, 38, 62, 79, 94, 111, 125, 139, 153, 172, 175, 177, 179, 181, 182,
        183, 186, 189, 190, 193, 195, 197, 198, 200, 203, 205, 207, 212, 214,
        215, 218, 219, 225, 234, 238, 242, 246, 249, 253, 257, 260,
    ],
    mode: "lines",
    line: { color: "#008080" },
    type: "scatter",
    fill: "tozeroy",
};
// Define layout for scatter plot
var layout = {
    yaxis: { title: "Member Count" },
    xaxis: { title: "Days" },
    paper_bgcolor: "#8cacac9e",
    plot_bgcolor: "#8cacac3e",
    font: { color: "#e8e8e8" },
    title: "Member Growth Over Time",
};

// Generate scatter plot using Plotly
Plotly.newPlot("scatterPlot", [trace1], layout, {
    displayModeBar: false,
    staticPlot: true,
    responsive: true,
});
// var rateOfChange = [];
// for (var i = 1; i < trace1.y.length; i++) {
//     rateOfChange.push(
//         (trace1.y[i] - trace1.y[i - 1]) / (trace1.x[i] - trace1.x[i - 1])
//     );
// }
// var averageRateOfChange =
//     rateOfChange.reduce((a, b) => a + b, 0) / rateOfChange.length;
// document.getElementById("rateOfChange").innerHTML =
//     averageRateOfChange.toFixed(2) + " members / day";
