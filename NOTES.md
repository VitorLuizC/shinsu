## 03/06/2021

A idéia de usar a animação (_animation frame_) num contexto e executar as operações no mesmo ciclo não funcionou.

- As operações estão sendo executadas no mesmo ciclo, mas em uma ordem diferente da esperada.

### Como está o JSX

```jsx
<Logo>
  <Rotate>
    <Image />
    <Restore />
  </Rotate>
</Logo>
```

### O que eu esperava

```jsx
<Logo />
context.clearRect(0, 0, 841, 595);

<Rotate />
context.save();
context.rotate(0.004520402762665317);

<Image />
context.save();
context.translate(0, 0);
context.drawImage(Logo, 0, 0, 841.9, 595.3);
context.restore();

<Restore />
context.restore();
```

### O que está acontecendo

```jsx
<Restore />
context.restore();

<Rotate />
context.save();
context.rotate(0.004520402762665317);

<Logo />
context.clearRect(0, 0, 841, 595);

<Image />
context.save();
context.translate(0, 0);
context.drawImage(Logo, 0, 0, 841.9, 595.3);
context.restore();
```

É como se o JSX fosse

```jsx
<Restore>
  <Rotate>
    <Logo>
      <Image />
    </Logo>
  </Rotate>
</Restore>
```
