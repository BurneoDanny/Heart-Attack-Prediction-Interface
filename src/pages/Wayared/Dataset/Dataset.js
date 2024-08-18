import { CodeBlock, dracula } from "react-code-blocks";
import age_distribution from "assets/images/age_distribution.jpg";
import correlate_map from "assets/images/correlate_map.jpg";
import kcm_violin from "assets/images/kcm_violin.jpg";
import muestra from "assets/images/muestra.jpg";
import pie_chart from "assets/images/pie_chart.jpg";

export default function Analysis() {
  const final_evaluation = `
    # Entrenamiento del modelo final con los mejores hiperparámetros
    LR = LogisticRegression(penalty=best_penalty, C=best_C, solver=best_solver, random_state=0, max_iter=10000)
    LR.fit(X_train, y_train)
    y_pred = LR.predict(X_test)
    
    # Evaluación final
    LR_score = accuracy_score(y_test, y_pred)
    LR_score
      `;

  return (
    <div className="overflow-y-auto h-screen text-black-pearl-50 text-justify">
      <h1 className="text-4xl font-bold text-center text-black-pearl-500 mt-4">
        Dataset analysis.
      </h1>
      <div className="p-6 m-6 text-base text-justify border-2 flex gap-4 flex-col rounded-sm border-black-pearl-500 bg-black-pearl-950 text-black-pearl-50">
        <p>Let's talk about the dataset.</p>
        <p>
          <b>Data Collection Mechanism:</b> The data was collected through
          clinical records and medical studies involving patients at risk of
          myocardial infarction.
        </p>
        <p>
          <b>Data Provision:</b> The dataset was provided by medical researchers
          and healthcare professionals who gathered relevant information about
          patients' clinical and demographic parameters.
        </p>
        <p>
          The dataset used is called,
          <a
            href="https://www.kaggle.com/code/nimapourmoradi/heartattack-classification"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {""} HeartAttack_classification
          </a>
          , obtained from Kaggle. It consists of a CSV file containing 1,319
          rows and 9 columns. Eight of these columns represent input features,
          while one column is the output. The features include age, gender (0
          for females, 1 for males), pulse, systolic and diastolic blood
          pressure, glucose levels, CK-MB (creatine kinase), troponin levels,
          and the class label (negative for absence of infarction, positive for
          presence of infarction). Additionally, 600 new data points will be
          generated for training and testing purposes using data augmentation
          techniques. A table displaying the distribution of the eight variables
          across the positive (had infarction) and negative (no infarction)
          classes from the Kaggle dataset will follow.
        </p>
        <p>
          We will show some statistics about the dataset using violin plots, box
          plots, and histograms. But we encourage to explore the dataset
          variables analysis using the following link:
        </p>
        <a
          href="https://colab.research.google.com/drive/1nshA1A0gbU2o0GLeL-pyBehk-ywM0aN4?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Graphs Google Colab Notebook
        </a>
      </div>

      <div className="p-6 m-6 text-base text-center border-2 flex gap-4 flex-col justify-center items-center rounded-sm border-black-pearl-500 bg-black-pearl-950 text-black-pearl-50">
        <p className="text-left">
          Now, we will show some statistics about the dataset using different
          types of plots.
        </p>
        <div className="flex flex-wrap gap-2 ">
          <div className="flex flex-col gap-4">
            <p>
              <b>Age Distribution:</b> The age distribution of the patients is
              shown in the following histogram.
            </p>
            <img src={age_distribution} className="rounded-sm" />
          </div>
          <div className="flex flex-col gap-4">
            <p>
              <b>Sample:</b> A sample of the dataset is shown in the following
              table.
            </p>
            <img src={muestra} className="rounded-sm" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p>
            <b>CK-MB Violin Plot:</b> The CK-MB violin plot is shown in the
            following figure.
          </p>
          <img src={kcm_violin} className="rounded-sm" />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            <b>Pie Chart:</b> The pie chart showing the distribution of the
            target variable is shown in the following figure.
          </p>
          <img src={pie_chart} className="rounded-sm" />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            <b>Correlation Map:</b> The correlation map between the variables is
            shown in the following figure.
          </p>
          <img src={correlate_map} className="rounded-sm" />
        </div>
      </div>
    </div>
  );
}
