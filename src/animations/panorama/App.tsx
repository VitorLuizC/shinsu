import { Renderer, useRender } from 'lib/renderer';

function Panorama() {
  useRender((context) => {
    context.restore();
  });

  return null;
}

function App() {
  return (
    <Renderer>
      <Panorama />
    </Renderer>
  )
}

export default App;
