/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { Magician, Daemon } from './app.js';


test('Get attack stoned magician on distance 2', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(85);
});

test('Get attack non-stoned magician on distance 2', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = false;
  expect(merlin.attack).toBe(90);
});

test('Get attack stoned magician on distance 2, attack 200', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 200;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(175);
});

test('Get attack non-stoned magician on distance 4', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 4;
  merlin.stoned = false;
  expect(merlin.attack).toBe(70);
});

test('Get attack non-stoned magician on distance 400', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 400;
  merlin.stoned = false;
  expect(merlin.attack).toBe(0);
});

test('Get attack stoned magician on distance 400', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 400;
  merlin.stoned = true;
  expect(merlin.attack).toBe(0);
});

test('Get attack stoned Daemon on distance 2', () => {
  const seera = new Daemon('seera');
  seera.attack = 100;
  seera.distance = 2;
  seera.stoned = true;
  expect(seera.attack).toBe(85);
});

test('Get attack non-stoned Daemon on distance 2', () => {
  const seera = new Daemon('seera');
  seera.attack = 100;
  seera.distance = 2;
  seera.stoned = false;
  expect(seera.attack).toBe(90);
});

test('Get attack stoned Daemon on distance 2, attack 200', () => {
  const seera = new Daemon('seera');
  seera.attack = 200;
  seera.distance = 2;
  seera.stoned = true;
  expect(seera.attack).toBe(175);
});

test('Get attack non-stoned Daemon on distance 4', () => {
  const seera = new Daemon('seera');
  seera.attack = 100;
  seera.distance = 4;
  seera.stoned = false;
  expect(seera.attack).toBe(70);
});

test('Get attack non-stoned Daemon on distance 400', () => {
  const seera = new Daemon('seera');
  seera.attack = 100;
  seera.distance = 400;
  seera.stoned = false;
  expect(seera.attack).toBe(0);
});

test('Get attack stoned Daemon on distance 400', () => {
  const seera = new Daemon('Merlin');
  seera.attack = 100;
  seera.distance = 400;
  seera.stoned = true;
  expect(seera.attack).toBe(0);
});
