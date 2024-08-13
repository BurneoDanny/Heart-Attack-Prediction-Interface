import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import ColabImage from "assets/images/google_colab.png";
import Protonin_high from "assets/images/troponin_high.jpg";
import Protonin_normal from "assets/images/troponin_normal.jpg";
import Impulse_high from "assets/images/impulse_before.jpg";
import Impulse_normal from "assets/images/impulse_after.jpg";

export default function Models() {
  const importation = `
        # Librerias comunes 
        from sklearn.metrics import accuracy_score
        from sklearn.model_selection import train_test_split
        import pandas as pd
        import pickle
        # Para regresion logistica
        from sklearn.linear_model import LogisticRegression
        #Para SVM
        from sklearn.svm import SVC
    `;

  const filtering = `
# borrar ruido de pulsos exageradamente altos.
datos_filtrados = datos[datos['impulse'] <= 300] 
# borrar ruido de troponina exageradamente alta en casos negativos
datos_filtrados = datos_filtrados[~((datos_filtrados['troponin'] > 9) & (datos_filtrados['class'] == 'negativa'))] 
  `;

  const penalty = `penalties = ['l1', 'l2', 'elasticnet', 'none']
l1_ratios = [0.1, 0.5, 0.7]  # Solo para elasticnet   
best_l1_ratio = None  # Para elasticnet`;
  const solver = ` solvers = ['newton-cg', 'lbfgs', 'liblinear', 'sag', 'saga']`;
  const c_value = ` C_values = [0.01, 0.1, 1, 10, 100]`;
  const best_variables = `
  best_penalty = str()
  best_solver = str()
  best_C = float()
  best_acc = 0
  `;

  const regression_training_loop = `
  # Bucle para probar todas las combinaciones de hiperparámetros
  for penalty in penalties:
      for solver in solvers:
          for C in C_values:
              # Algunos solvers no soportan ciertas penalizaciones
              if penalty == 'l1' and solver not in ['liblinear', 'saga']:
                  continue
              if penalty == 'elasticnet' and solver != 'saga':
                  continue
              if penalty == 'none' and solver in ['liblinear', 'saga']:
                  continue
  
              # Si es elasticnet, se prueba con diferentes l1_ratios
              if penalty == 'elasticnet':
                  for l1_ratio in l1_ratios:
                      LR = LogisticRegression(penalty=penalty, C=C, solver=solver, l1_ratio=l1_ratio, random_state=0, max_iter=1000)
                      LR.fit(X_train, y_train)
                      y_pred = LR.predict(X_test)
                      score = accuracy_score(y_test, y_pred)
  
                      if score > best_acc:
                          best_acc = score
                          best_penalty = penalty
                          best_solver = solver
                          best_C = C
                          best_l1_ratio = l1_ratio
              else:
                LR = LogisticRegression(penalty=penalty, C=C, solver=solver, random_state=0, max_iter=10000)
                LR.fit(X_train, y_train)
                y_pred = LR.predict(X_test)
  
                score = accuracy_score(y_test, y_pred)
  
                if score > best_acc:
                    best_acc = score
                    best_penalty = penalty
                    best_solver = solver
                    best_C = C
  
  # Resultados
  print('Best Penalty : ', best_penalty)
  print('Best Solver : ', best_solver)
  print('Best C : ', best_C)
  print('Accuracy Score : ', best_acc)`;

  return (
    <div className="overflow-y-auto h-screen text-black-pearl-50 text-justify">
      <div className="font-extrabold my-6 text-2xl text-center">
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
          these models were implemented, covering data preprocessing, model
          training, evaluation, and key results. This walkthrough will provide a
          clear understanding of the AI techniques employed in this analysis.
        </p>
        <div className="flex justify-center items-center">
          <p className="flex-1 mx-24">
            We chose to work on Google Colab, as this tool allows for easy
            implementation of the models and helps achieve the project’s
            objectives. The{" "}
            <a className="text-black-pearl-500 cursor-pointer">
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
            text={importation}
            language="python"
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
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
          Now we go throuh the SVM (Selector Vercto Model) model implemented in
          Python using scikit-learn, along with a detailed overview of its
          hyperparameters.
        </p>
        <div className="shadow-lg rounded-lg p-6 text-left flex flex-col gap-2">
          <p>
            The hyperparameters of the SVM model include penalty, solver, and C
            value.
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
          Let's begin by explaining the Logistic Regression model implemented in
          Python using scikit-learn, along with a detailed overview of its
          hyperparameters.
        </p>
      </div>
    </div>
  );
}
