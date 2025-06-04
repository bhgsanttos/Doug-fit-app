function gerarTreino() {
  const objetivo = document.getElementById('objetivo').value;
  const treinoLista = document.getElementById('treino-lista');
  treinoLista.innerHTML = '';

  const treinos = {
    'Hipertrofia': [
      'Agachamento 4x10',
      'Supino reto 4x8',
      'Barra fixa 3x6',
      'Remada curvada 3x10',
      'Leg Press 4x12'
    ],
    'Emagrecimento': [
      'HIIT 20min',
      'Corrida leve 30min',
      'Abdominal prancha 3x40s',
      'Agachamento com peso corporal 3x15',
      'Polichinelos 3x20'
    ],
    'Ganho de Massa Muscular': [
      'Supino inclinado 4x8',
      'Puxada alta 4x10',
      'Desenvolvimento militar 4x10',
      'Agachamento livre 4x12',
      'Stiff 3x10'
    ],
    'Definição': [
      'Circuito Fullbody 4x',
      'Burpees 3x20',
      'Abdominais 4x20',
      'Corrida 20min',
      'Afundo alternado 3x15'
    ],
    'Funcional': [
      'Circuito funcional 5 rounds',
      'Pular corda 3x1min',
      'Agachamento com bola 3x12',
      'Prancha com alternância de braço 3x30s'
    ],
    'Resistência': [
      'Corrida 5km',
      'Flexões 3x20',
      'Puxada na frente 4x12',
      'Bicicleta 30min',
      'Subida de escada 10min'
    ],
    'Força': [
      'Levantamento terra 5x5',
      'Agachamento pesado 5x5',
      'Supino reto 5x5',
      'Remada unilateral 4x8',
      'Desenvolvimento Arnold 4x6'
    ],
    'Corpo Inteiro': [
      'Burpees 3x20',
      'Agachamento 3x15',
      'Flexão 3x15',
      'Corrida 15min',
      'Abdominal 3x20'
    ],
    'Iniciantes': [
      'Caminhada 20min',
      'Agachamento livre 3x10',
      'Abdominais básicos 3x15',
      'Levantamento de joelho 3x10 cada perna',
      'Alongamento geral 10min'
    ]
  };

  treinos[objetivo].forEach(exercicio => {
    const li = document.createElement('li');
    li.textContent = exercicio;
    treinoLista.appendChild(li);
  });

  // Reinicia dias para nova atualização
  document.getElementById('dias').textContent = 30;
}
