const importation = `# Librerias comunes 
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd
import pickle
# Para regresion logistica
from sklearn.linear_model import LogisticRegression
#Para SVM
from sklearn.svm import SVC`;

const importation2 = `

## Librerias para el modelo de DF y random forest
from sklearn.model_selection import KFold
from RandomForest import RandomForest
from sklearn.preprocessing import LabelEncoder
from DecisionTree import DecisionTree
from collections import Counter

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
              LR = LogisticRegression(penalty=penalty, C=C, solver=solver, 
              l1_ratio=l1_ratio, random_state=0, max_iter=1000)
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
        LR = LogisticRegression(penalty=penalty, C=C, solver=solver, 
        random_state=0, max_iter=10000)
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

const kernels = `kernels = ['linear', 'poly', 'rbf', 'sigmoid']`;
const gamma = `gammas = ['scale', 'auto']`;
const C_values_svm = `C_values = [0.01, 0.1, 1, 10, 100]`;

const best_variables_svm = `
best_kernel = str()
best_C = float()
best_gamma = str()
best_acc = 0
`;

const svm_training_loop = `
# Bucle para probar todas las combinaciones de hiperparámetros
for kernel in kernels:
    for C in C_values:
        for gamma in gammas:
            # Entrenamiento del modelo SVM
            SVM = SVC(kernel=kernel, C=C, gamma=gamma, random_state=0, max_iter=10000)
            SVM.fit(X_train, y_train)
            y_pred = SVM.predict(X_test)
            score = accuracy_score(y_test, y_pred)

            if score > best_acc:
                best_acc = score
                best_kernel = kernel
                best_C = C
                best_gamma = gamma

# Resultados
print('Best Kernel : ', best_kernel)
print('Best C : ', best_C)
print('Best Gamma : ', best_gamma)
print('Accuracy Score : ', best_acc)`;

const DecisionTree = `
# Cargar el dataset
data = pd.read_csv('Heart Attack.csv')
X = data.drop(columns=['class']).values  # Convertir a matriz NumPy
y = data['class']

# Codificar la variable de clase (target)
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(y)  # 'positive' será 1 y 'negative' será 0

# Definir la función de precisión
def accuracy(y_true, y_pred):
    accuracy = np.sum(y_true == y_pred) / len(y_true)
    return accuracy

# Validación cruzada con KFold
kf = KFold(n_splits=5, shuffle=True, random_state=1234)
accuracies = []

for train_index, test_index in kf.split(X):
    X_train, X_test = X[train_index], X[test_index]
    y_train, y_test = y[train_index], y[test_index]

    # Crear y entrenar el modelo
    clf = DecisionTree(max_depth=10, min_samples_split=2, n_features=None)
    clf.fit(X_train, y_train)

    # Predecir con el modelo entrenado
    predictions = clf.predict(X_test)

    # Calcular y guardar la precisión
    acc = accuracy(y_test, predictions)
    accuracies.append(acc)

# Mostrar la precisión media y desviación estándar
print(f"Accuracy: {np.mean(accuracies):.4f} ± {np.std(accuracies):.4f}")`;

const RandomForest = `
# Cargar el dataset
data = pd.read_csv('Heart Attack.csv')
X = data.drop(columns=['class']).values  # Convertir a matriz NumPy
y = data['class']

# Codificar la variable de clase (target)
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(y)  # 'positive' será 1 y 'negative' será 0

# Definir la función de precisión
def accuracy(y_true, y_pred):
    accuracy = np.sum(y_true == y_pred) / len(y_true)
    return accuracy

# Validación cruzada con KFold
kf = KFold(n_splits=5, shuffle=True, random_state=1234)
accuracies = []

for train_index, test_index in kf.split(X):
    X_train, X_test = X[train_index], X[test_index]
    y_train, y_test = y[train_index], y[test_index]

    # Crear y entrenar el modelo
    clf = RandomForest(n_trees=10)
    clf.fit(X_train, y_train)

    # Predecir con el modelo entrenado
    predictions = clf.predict(X_test)

    # Calcular y guardar la precisión
    acc = accuracy(y_test, predictions)
    accuracies.append(acc)

    # Opcional: Calcular y mostrar probabilidades para la clase positiva (solo para verificación)
    probabilities = clf.predict_proba(X_test)
    print(f"Probabilidades de clase positiva para este fold: {probabilities[:, 1]}")

# Mostrar la precisión media y desviación estándar
print(f"Accuracy: {np.mean(accuracies):.4f} ± {np.std(accuracies):.4f}")
`;

export {
  importation,
  importation2,
  filtering,
  penalty,
  solver,
  c_value,
  best_variables,
  regression_training_loop,
  kernels,
  gamma,
  C_values_svm,
  best_variables_svm,
  svm_training_loop,
  DecisionTree,
  RandomForest,
};
