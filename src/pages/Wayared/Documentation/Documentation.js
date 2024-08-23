
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import ColabImage from "assets/images/google_colab.png";
import Protonin_high from "assets/images/troponin_high.jpg";
import Protonin_normal from "assets/images/troponin_normal.jpg";
import Impulse_high from "assets/images/impulse_before.jpg";
import Impulse_normal from "assets/images/impulse_after.jpg";
import { importation } from "./Info";
import { importation2 } from "./Info";
import { filtering } from "./Info";
import { penalty } from "./Info";
import { solver } from "./Info";
import { c_value } from "./Info";
import { best_variables } from "./Info";
import { regression_training_loop } from "./Info";
import { kernels } from "./Info";
import { gamma } from "./Info";
import { C_values_svm } from "./Info";
import { best_variables_svm } from "./Info";
import { svm_training_loop } from "./Info";
import { DecisionTree } from "./Info";
import { RandomForest } from "./Info";
import { Link } from "react-router-dom";

export default function Documentation() {
  // <<<<<<< HEAD
  //   const [selectedModels, setSelectedModels] = useState({
  //     'Logistic Regression': true,
  //     'Decision Tree': true,
  //     'Random Forest': true,
  //     'MLP (Keras)': true,
  //     'GBM': true,
  //     'SVM': true,
  //   });

  //   const data = {
  //     labels: ['Accuracy', 'Recall (Sensitivity)', 'Precision', 'F1-Score', 'ROC-AUC'],
  //     datasets: [
  //       {
  //         label: 'Logistic Regression',
  //         data: [0.9286, 0.8901, 0.9818, 0.9337, 0.9343],
  //         backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //         borderColor: 'rgba(255, 99, 132, 1)',
  //         borderWidth: 1,
  //         hidden: !selectedModels['Logistic Regression'],
  //       },
  //       {
  //         label: 'Decision Tree',
  //         data: [0.9938, 0.9890, 1.0000, 0.9945, 0.9945],
  //         backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //         borderColor: 'rgba(54, 162, 235, 1)',
  //         borderWidth: 1,
  //         hidden: !selectedModels['Decision Tree'],
  //       },
  //       {
  //         label: 'Random Forest',
  //         data: [0.9907, 0.9835, 1.0000, 0.9917, 0.9918],
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1,
  //         hidden: !selectedModels['Random Forest'],
  //       },
  //       {
  //         label: 'MLP (Keras)',
  //         data: [0.9441, 0.9396, 0.9607, 0.9500, 0.9448],
  //         backgroundColor: 'rgba(153, 102, 255, 0.2)',
  //         borderColor: 'rgba(153, 102, 255, 1)',
  //         borderWidth: 1,
  //         hidden: !selectedModels['MLP (Keras)'],
  //       },
  //       {
  //         label: 'GBM',
  //         data: [0.9938, 0.9890, 1.0000, 0.9945, 0.9945],
  //         backgroundColor: 'rgba(255, 159, 64, 0.2)',
  //         borderColor: 'rgba(255, 159, 64, 1)',
  //         borderWidth: 1,
  //         hidden: !selectedModels['GBM'],
  //       },
  //       {
  //         label: 'SVM',
  //         data: [0.9410, 0.9121, 0.9822, 0.9459, 0.9453],
  //         backgroundColor: 'rgba(255, 206, 86, 0.2)',
  //         borderColor: 'rgba(255, 206, 86, 1)',
  //         borderWidth: 1,
  //         hidden: !selectedModels['SVM'],
  //       },
  //     ],
  //   };

  //   const options = {
  //     maintainAspectRatio: false, // Permitir que el gráfico sea responsivo
  //     scales: {
  //       r: {
  //         suggestedMin: 0.85,
  //         suggestedMax: 1,
  //         pointLabels: {
  //           color: 'rgb(255, 255, 255)', // Aquí puedes cambiar el color de los labels
  //           font: {
  //             size: 14, // Cambia el tamaño de la fuente si lo deseas
  //           },
  //         },
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         labels: {
  //           color: 'rgba(255, 255, 255, 1)', // Color de los labels en la leyenda
  //           font: {
  //             size: 14, // Tamaño de la fuente de los labels en la leyenda
  //           },
  //         },
  //         position: 'top',
  //       },
  //     },
  //   };

  //   const toggleModel = (model) => {
  //     setSelectedModels({
  //       ...selectedModels,
  //       [model]: !selectedModels[model],
  //     });
  //   };

  //   return (
  //     <div className="performance-chart-container max-w-4xl mx-auto p-4">
  //       <h2 className="text-center text-white text-2xl font-bold mb-4">Model Performance Comparison</h2>
  //       <div className="flex justify-center flex-wrap space-x-2 space-y-2 mb-6">
  //         {Object.keys(selectedModels).map((model) => (
  //           <button
  //             key={model}
  //             onClick={() => toggleModel(model)}
  //             className={`p-2 border rounded w-40 ${selectedModels[model] ? 'bg-blue-500 text-white' : 'bg-gray-200 text-white-800'
  //               }`}
  //           >
  //             {model}
  //           </button>
  //         ))}

  return (
    <div className="h-screen text-black-pearl-50 text-justify overflow-y-auto">
      <div className="text-4xl font-bold text-center text-black-pearl-500 mt-4">
        Modeling the solution

      </div>

      <div className="p-6 m-6 text-base border-2 flex gap-4 flex-col justify-center items-center rounded-sm border-black-pearl-500 bg-black-pearl-950">
        <p>
          Artificial intelligence (AI) models like Multi-Layer Perceptrons
          (MLP), Logistic Regression, Decision Trees, Random Forests, Support
          Vector Machines (SVM), and Gradient Boosting Machines (GBM) are
          powerful tools for classification tasks. In this project, we applied
          these models to predict the risk of acute myocardial infarction using
          a clinical dataset. We will present the code that demonstrates how
          these models (not all of them) were implemented, covering data
          preprocessing, model training, and evaluation. This walkthrough will
          provide a clear understanding of the AI techniques employed in this
          analysis.{" "}
        </p>
        <div className="flex justify-center items-center">
          <p className="flex-1 mx-24">
            We chose to work on Google Colab, as this tool allows for easy
            implementation of the models and helps achieve the project’s
            objectives. The{" "}
            <a
              className="text-black-pearl-500 cursor-pointer"
              href="https://colab.research.google.com/drive/18G379SW0Qmi03kETqb1cw7TKg6EHT8Yn?usp=sharing"
              target="_blank"
            >
              <i>Google Colab notebook</i>
            </a>{" "}
            is available in view-only mode, allowing for detailed inspection of
            the code implementation. A basic understanding of Python programming
            and familiarity with the libraries used in these models is
            recommended. It is important to note that some models are
            implemented in similar ways, while others differ.
          </p>
          <div className="flex-1">
            <img src={ColabImage} className="rounded-sm" />
          </div>
        </div>
      </div>
      <div className="p-6 m-6 rounded-sm text-base border-2 bg-black-pearl-950 border-black-pearl-500 flex flex-col justify-center items-center gap-2">
        <p className="mb-3">
          During our data analysis, we identified outliers in the impulse
          variable. To address this, we filtered out rows where impulse values
          exceeded 300.
        </p>
        <div className="flex flex-col gap-2 font-bold">
          <div>
            <p>--Before filtering--</p>
            <img src={Impulse_high} className="rounded-sm" />
          </div>

          <div>
            <p>--After filtering--</p>
            <img src={Impulse_normal} className="rounded-sm" />
          </div>
        </div>
        <p>
          Similarly, we detected outliers in the troponin variable.
          Specifically, we removed rows where troponin levels were greater than
          9 and the class label was negative.
        </p>
        <div className="flex gap-2 text-center font-bold">
          <div>
            <p>--Before filtering--</p>
            <img src={Protonin_high} className="rounded-sm" />
          </div>

          <div>
            <p>--After filtering--</p>
            <img src={Protonin_normal} className="rounded-sm" />
          </div>
        </div>
        <p>
          The following code snippet demonstrates how we cleaned the data and
          divided it into training and testing sets:
        </p>
        <div className="shadow-lg rounded-lg p-6 text-left">
          <CodeBlock
            text={filtering}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p>
          Go to{" "}
          <Link
            className="text-black-pearl-500 cursor-pointer"
            to={"/wayared?menu=result"}
          >
            <i>Results Section</i>
          </Link>{" "}
          to know more about the data analysis of the dataset.
        </p>
      </div>
      <div className="p-6 m-6  flex flex-col justify-center items-center rounded-sm text-left bg-black-pearl-950 text-base border-2 border-black-pearl-500">
        <p className="mb-4 text-center font-bold">The liraries used include:</p>
        <div className="flex gap-2">
          <CodeBlock
            text={importation}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
          <CodeBlock
            text={importation2}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className="p-6 m-6 text-base border-2 flex gap-4 flex-col rounded-sm border-black-pearl-500 bg-black-pearl-950">
        <p>
          Let's begin by explaining the Logistic Regression model implemented in
          Python using scikit-learn, along with a detailed overview of its
          hyperparameters.
        </p>
        <div className="shadow-lg rounded-lg p-6 text-left flex flex-col gap-2">
          <p>
            The hyperparameters of the Logistic Regression model include
            penalty, solver, and C value.
          </p>
          <li>
            The penalty parameter specifies the norm used in the penalization.
          </li>
          <CodeBlock
            text={penalty}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
          <li>
            The solver parameter specifies the algorithm used for optimization.
          </li>
          <CodeBlock
            text={solver}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
          <li>
            The C value is the inverse of regularization strength. Smaller
            values specify stronger regularization.
          </li>
          <CodeBlock
            text={c_value}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
          <p>
            The following variables are used to store the best hyperparameters
            and accuracy score.
          </p>
          <CodeBlock
            text={best_variables}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
          <p>
            The code snippet below demonstrates the training loop for the
            Logistic Regression model.
          </p>
          <CodeBlock
            text={regression_training_loop}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className="p-6 m-6 text-base border-2 flex gap-4 flex-col rounded-sm border-black-pearl-500 bg-black-pearl-950">
        <p>
          This time, we will go through the Decision Tree model implemented in
          Python witch is slightly different from the previous implementation.
        </p>
        <div className="shadow-lg rounded-lg p-6 text-left flex flex-col gap-2">
          <p>
            In this implementation, we utilize a Decision Tree model that allows
            for more complex decision boundaries compared to linear models. The
            code includes data preprocessing steps such as label encoding and
            employs K-Fold cross-validation to assess model performance. This
            method ensures that the model is robust and generalizes well to
            unseen data by training and testing on different subsets of the
            dataset.
          </p>

          <p>
            The code snippet below demonstrates the training loop for the
            Decision Tree Model.
          </p>
          <CodeBlock
            text={DecisionTree}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className="p-6 m-6 text-base border-2 flex gap-4 flex-col rounded-sm border-black-pearl-500 bg-black-pearl-950">
        <p>
          Now we go throuh the SVM (Support vector machine) model implemented in
          Python using scikit-learn, along with a detailed overview of its
          hyperparameters.
        </p>
        <div className="shadow-lg rounded-lg p-6 text-left flex flex-col gap-2">
          <p>
            The hyperparameters of the SVM model include kernel, C value, and
            gamma value.
          </p>
          <li>
            The kernel parameter specifies the kernel type used in the
            algorithm.
          </li>
          <CodeBlock
            text={kernels}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
          <li>
            The gamma parameter specifies the kernel coefficient for 'rbf',
            'poly', and 'sigmoid'.
          </li>
          <CodeBlock
            text={gamma}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
          <li>
            The C value is the inverse of regularization strength. Smaller
            values specify stronger regularization.
          </li>
          <CodeBlock
            text={C_values_svm}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
          <p>
            The following variables are used to store the best hyperparameters
            and accuracy score.
          </p>
          <CodeBlock
            text={best_variables_svm}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
          <p>
            The code snippet below demonstrates the training loop for the SVM
            model.
          </p>
          <CodeBlock
            text={svm_training_loop}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className="p-6 m-6 text-base border-2 flex gap-4 flex-col rounded-sm border-black-pearl-500 bg-black-pearl-950">
        <p>
          In this section, we will explore the Random Forest model implemented
          in Python, which enhances the capabilities of a single Decision Tree
          by combining multiple trees to improve accuracy and robustness.
        </p>
        <div className="shadow-lg rounded-lg p-6 text-left flex flex-col gap-2">
          <p>
            This implementation utilizes a Random Forest model that aggregates
            predictions from multiple decision trees, reducing the risk of
            overfitting and providing more stable predictions. The code includes
            data preprocessing steps such as label encoding and employs K-Fold
            cross-validation to evaluate the model's performance across
            different subsets of the dataset. Additionally, the model can
            provide probability estimates for class predictions, allowing for a
            deeper analysis of the results.
          </p>

          <p>
            The code snippet below demonstrates the training loop for the Random
            Forest model.
          </p>
          <CodeBlock
            text={RandomForest}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
      <div className="p-6 m-6 text-base border-2 flex gap-4 flex-col rounded-sm border-black-pearl-500 bg-black-pearl-950">
        <p>
          In this section, we have covered several machine learning models,
          including Decision Trees and Random Forests, implemented in Python.
          Each of these models offers unique advantages and can be tailored for
          various classification tasks.
        </p>
        <div className="shadow-lg rounded-lg p-6 text-left flex flex-col gap-2">
          <p>
            For those interested in exploring additional models and their
            implementations, including MLP, GBM, and more, you can find all the
            details in the Google Colab notebook linked below. The notebook
            includes thorough explanations, code snippets, and visualizations
            that will help you understand the performance and applicability of
            each model.
          </p>

          <p>
            We encourage you to experiment with the code and datasets provided,
            as hands-on practice is a great way to deepen your understanding of
            machine learning techniques.
          </p>

          <a
            href="https://colab.research.google.com/drive/18G379SW0Qmi03kETqb1cw7TKg6EHT8Yn?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Models Google Colab Notebook
          </a>
          <a
            href="https://colab.research.google.com/drive/1nshA1A0gbU2o0GLeL-pyBehk-ywM0aN4?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Graphs Google Colab Notebook
          </a>
          <a
            href="https://www.kaggle.com/code/nimapourmoradi/heartattack-classification"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Dataset
          </a>
        </div>
      </div>
    </div>
  );

}
