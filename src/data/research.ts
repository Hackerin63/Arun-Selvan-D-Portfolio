export interface ResearchEntry {
  id: string;
  title: string;
  area: string;
  abstract: string;
  methodology: string;
  status: string;
}

export const researchInterests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Explainable AI",
  "Computer Vision",
  "NLP",
  "Graph Neural Networks",
  "Healthcare AI",
  "Intelligent prediction systems",
];

export const research: ResearchEntry[] = [
  {
    id: "Coconut-leaf-Disease-Detection-Research",
    title: "Coconut Leaf Disease Detection with Severity Estimation Using Deep Learning - Author",
    area: "Computer Vision / Agricultural AI",
    abstract:
      "A deep learning approach to monitoring the health of coconut leaves, aimed at early identification of disease and stress indicators from image data and provide proper treatment recommendations along with the severity assessment and Grad-CAM with multilingual support.",
    methodology: "Convolutional neural networks for image classification, trained on leaf imagery.",
    status: "ICRET - 2026 Conference Paper (Accepted for Publication) ",
  },
  {
    id: "Coconut-Mite-Disease-Detection-Research-2",
    title: "Coconut Mite Disease Detection Using Deep Learning - Co-Author",
    area: "Computer Vision / Agricultural AI",
    abstract:
      "The study employs deep learning methods for detecting coconut mite disease from image data with severity estimation and Treatment recommendations.",
    methodology: "Convolutional neural networks for image classification, trained on mite imagery.",
    status: "ICRET - 2026 Conference Paper (Accepted and Presented for publication) ",
  },
  {
    id: "Physiological-Sensor-Based-Disease-Detection-Research",
    title: "Physiological Sensor-Based Disease Detection using Advanced Temporal Transformer and Graph Neural Network Models - Co-Author",
    area: "Artificial Intelligence & Machine Learning – Healthcare, Physiological Signal Processing, and Disease Detection.",
    abstract:
      "Developed a TT-GNN-based healthcare monitoring system that analyzes multi-sensor physiological data for early cardiovascular and cerebrovascular risk detection.",
    methodology: "Temporal Transformer–Graph Neural Network (TT-GNN) for multi-sensor physiological signal analysis and disease classification.",
    status: "ICAIEMET-2026 Conference Paper (Accepted for publication) ",
  },
  // {
  //   id: "tt-gnn-systems",
  //   title: "TT-GNN Based Intelligent Systems",
  //   area: "Graph Neural Networks",
  //   abstract: "Exploration of tensor-train graph neural network approaches for intelligent system design.",
  //   methodology: "Graph neural network architectures with tensor-train decomposition.",
  //   status: "[Publication details — update]",
  // },
//   {
//     id: "gold-price-prediction-research",
//     title: "Gold Price Prediction",
//     area: "Applied Machine Learning / Time Series",
//     abstract:
//       "Applies gradient-boosted and classical ML models to forecast gold price movement from historical and economic indicator data.",
//     methodology: "Feature engineering over time-series and economic data, evaluated with XGBoost and LightGBM.",
//     status: "[Publication details — update]",
//   },
];
