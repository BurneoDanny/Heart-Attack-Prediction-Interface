import { CodeBlock, dracula } from "react-code-blocks";
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
    <div className="p-6 m-6 text-base text-justify border-2 flex gap-4 flex-col rounded-sm border-black-pearl-500 bg-black-pearl-950 text-black-pearl-50">
      <p>
        The final evaluation of the model is performed using the best
        hyperparameters.
      </p>
      <CodeBlock
        text={final_evaluation}
        language="python"
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
