import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js';

// Carregar modelo .glb
const loader = new GLTFLoader();
loader.load('model.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);
  model.scale.set(2, 2, 2); // Ajuste o tamanho do modelo conforme necessário
});
