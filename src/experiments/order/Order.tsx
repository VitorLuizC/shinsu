import { useEffect } from 'react';

function AAA() {
  console.log('sync: <A.A.A />');

  useEffect(() => {
    console.log('async: <A.A.A />');
  }, []);

  return null;
}

function AAB() {
  console.log('sync: <A.A.B />');

  useEffect(() => {
    console.log('async: <A.A.B />');
  }, []);

  return null;
}

function AA() {
  console.log('sync: <A.A />');

  useEffect(() => {
    console.log('async: <A.A />');
  }, []);

  return (
    <>
      <AAA />
      <AAB />
    </>
  );
}

function ABA() {
  console.log('sync: <A.B.A />');

  useEffect(() => {
    console.log('async: <A.B.A />');
  }, []);

  return null;
}

function ABB() {
  console.log('sync: <A.B.B />');

  useEffect(() => {
    console.log('async: <A.B.B />');
  }, []);

  return null;
}

function AB() {
  console.log('sync: <A.B />');

  useEffect(() => {
    console.log('async: <A.B />');
  }, []);

  return (
    <>
      <ABA />
      <ABB />
    </>
  );
}

function A() {
  console.log('sync: <A />');

  useEffect(() => {
    console.log('async: <A />');
  }, []);

  return (
    <>
      <AA />
      <AB />
    </>
  );
}

export default A;
